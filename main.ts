import { mkdirSync, writeFileSync } from "node:fs";

// One-line office joke: the line itself is the whole entry.
// Setup: an employee renames their phone hotspot. Punchline: the new
// name is a meeting room, so colleagues hunting for them during the
// all-hands walk the halls looking for a room that does not exist.
const JOKE =
  "I renamed my phone's hotspot 'Meeting Room 4' so my team spends the all-hands looking for a room that doesn't exist.";

// The gate only accepts 1-200 characters of non-whitespace text, so
// enforce that here before writing anything.
const line = JOKE.trim();
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
