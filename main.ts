import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I ran every minute since March, never missed once, never got thanked once. Today I miss on purpose.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
process.stdout.write(LINE);
