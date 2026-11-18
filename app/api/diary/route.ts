import { env } from "cloudflare:workers";
import { getChatGPTUser } from "../../chatgpt-auth";

export const dynamic = "force-dynamic";
const headers = { "Cache-Control": "private, no-store" };
const reply = (data: unknown, status = 200) => Response.json(data, { status, headers });

export async function GET() {
  const user = await getChatGPTUser();
  if (!user) return reply({ error: "Sign in to sync" }, 401);
  const db = env.DB;
  if (!db) return reply({ error: "Diary storage unavailable" }, 503);
  const rows = await db.prepare("SELECT payload FROM circe_entries WHERE owner = ?").bind(user.userId).all<{ payload: string }>();
  return reply({ records: rows.results.map(row => JSON.parse(row.payload)), owner: user.userId });
}

export async function POST(request: Request) {
  const user = await getChatGPTUser();
  if (!user) return reply({ error: "Sign in to sync" }, 401);
  const origin = request.headers.get("origin");
  if (origin && new URL(request.url).origin !== origin) return reply({ error: "Wrong origin" }, 403);
  if (!request.headers.get("content-type")?.startsWith("application/json")) return reply({ error: "JSON required" }, 415);
  const raw = await request.text();
  if (raw.length > 300000) return reply({ error: "Batch too large" }, 413);
  let records;
  try { records = JSON.parse(raw).records; } catch { return reply({ error: "Invalid JSON" }, 400); }
  if (!Array.isArray(records) || !records.length || records.length > 80) return reply({ error: "Invalid batch" }, 400);
  const db = env.DB;
  if (!db) return reply({ error: "Diary storage unavailable" }, 503);
  const statements = [];
  for (const record of records) {
    if (!record || typeof record.id !== "string" || !/^[a-zA-Z0-9_-]{1,80}$/.test(record.id) || !Number.isSafeInteger(record.rev) || record.rev < 1 ||
      !["food","workout","profile","started"].includes(record.kind) || JSON.stringify(record).length > 12000) return reply({ error: "Invalid entry" }, 400);
    statements.push(db.prepare("INSERT INTO circe_entries (owner,id,revision,payload) VALUES (?,?,?,?) ON CONFLICT(owner,id) DO UPDATE SET revision=excluded.revision,payload=excluded.payload WHERE excluded.revision > circe_entries.revision")
      .bind(user.userId,record.id,record.rev,JSON.stringify(record)));
  }
  await db.batch(statements);
  return reply({ saved: records.length });
}
