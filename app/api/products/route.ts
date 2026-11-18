import { getChatGPTUser } from "../../chatgpt-auth";
export const dynamic = "force-dynamic";

const productFields = "code,product_name,product_name_en,brands,serving_quantity,serving_size,nutriments";
export async function GET(request: Request) {
  if (!(await getChatGPTUser())) return Response.json({ error: "Sign in for brand search" }, { status: 401 });
  const query = new URL(request.url).searchParams.get("q")?.trim();
  if (!query || query.length < 2 || query.length > 120) return Response.json({ error: "Enter a food or barcode" }, { status: 400 });
  const barcode = /^\d{8,14}$/.test(query);
  const url = new URL(barcode ? "/api/v2/product/"+query+".json" : "/cgi/search.pl","https://world.openfoodfacts.org");
  url.searchParams.set("fields",productFields);
  if(!barcode) for(const [key,value] of Object.entries({search_terms:query, search_simple:"1",action:"process",json:"1",page_size:"8"})) url.searchParams.set(key,value);
  try {
    const result = await fetch(url, { headers: { "User-Agent": "CIRCE/1.0 (circe-daily-tracker.cleandesign-uk.chatgpt.site)", "Accept": "application/json" }, signal: AbortSignal.timeout(7000) });
    if (!result.ok) throw new Error("Catalogue unavailable");
    const data = await result.json() as any;
    const products = (barcode ? [data.product].filter(Boolean) : data.products ?? []).filter((p:any) => p.product_name && p.nutriments?.["energy-kcal_100g"] != null);
    return Response.json({ products }, { headers: { "Cache-Control": "private, max-age=1800" } });
  } catch {
    return Response.json({ error:"The international catalogue is temporarily unavailable." }, { status:503 });
  }
}
