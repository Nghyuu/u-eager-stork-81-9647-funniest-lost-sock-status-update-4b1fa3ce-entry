import { writeFileSync, mkdirSync, chmodSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outputDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const line = "Day 12: I'm now a curtain tieback in a dentist's waiting room. No benefits, and the magazines are from 2019.";

if (line.length > 120) {
  throw new Error("entry exceeds 120 characters");
}

mkdirSync(outputDir, { recursive: true });
const entryPath = join(outputDir, "entry.txt");
writeFileSync(entryPath, line + "\n", "utf8");
chmodSync(entryPath, 0o644);
