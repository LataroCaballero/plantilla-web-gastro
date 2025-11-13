import fs from "fs";
import path from "path";

export function getBusinessData() {
  const filePath = path.join(process.cwd(), "/app/data/business.json");
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}
