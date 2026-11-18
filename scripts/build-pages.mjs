import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const output = path.resolve(process.argv[2] || "out/pages");
await mkdir(output, { recursive: true });
await cp("public", output, { recursive: true, filter: name => !name.endsWith("circe.html") });
const html = await readFile("public/circe.html", "utf8");
await writeFile(path.join(output, "index.html"), html.replace('<html lang="en-GB">', '<html lang="en-GB" data-storage="local">'));
await writeFile(path.join(output, ".nojekyll"), "");
