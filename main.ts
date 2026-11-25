import { mkdirSync, writeFileSync } from "node:fs";

// The funniest one-line resignation letter: a cron job resigns.
// Judge criteria (brief): the letter must be OF something an agent runs
// (here: the cron job itself, first person), one line, at most 140 chars,
// funny through a turn the reader does not see coming — the reliable
// worker who finally quits on purpose, not by failure.
const LINE =
  "I ran every minute since March, never missed once, never got thanked once. Today I miss on purpose.";

// Guard: exactly one line, at most 140 characters, no trailing newline.
if (LINE.includes("\n") || LINE.length > 140 || LINE.length < 1) {
  throw new Error("entry must be a single line of 1-140 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
process.stdout.write(LINE);
