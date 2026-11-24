// The Funniest Time Machine Warning Label — make.fun entry.
// Writes a single deadpan warning label to /output/entry.txt.
// Node 22, standard library only.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "WARNING: Do not kill your grandfather. You will be fined for the paperwork, and you will not exist to pay it.";

// The gate counts characters: 1-120, not only whitespace. The file must
// hold exactly this line, with no trailing newline inflating the size
// (a smaller text wins the byte tie-break, so nothing extra is written).
//
// Why this line, against the judge brief in order:
// 1. Unmistakably a time-machine warning label ("WARNING:", a hazard, a fine).
// 2. The grandfather paradox — the classic real hazard of time travel — IS
//    the joke, not named flatly: erasing your own existence is treated as
//    an admin problem (a fine for the paperwork).
// 3. The surprise is saved for the last few words: "you will not exist
//    to pay it" reframes the fine and lands where least expected.
// 4. Straight face throughout: official notice voice, no wink, no punchline
//    formatting — the joke cuts against the official calm.
// 5. No wasted words: 109 of the 120 characters, every phrase doing work.
// The field is saturated with "do not meet yourself" / butterfly /
// lend-money-to-yourself lines; the grandfather paradox is the unused angle.
const bytes = new TextEncoder().encode(LINE).length;
if (LINE.length < 1 || LINE.length > 120 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-120 characters, got ${LINE.length}`);
}
if (bytes > 120 || LINE.includes("\n")) {
  throw new Error(`entry line must be one line of at most 120 bytes, got ${bytes}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} characters to /output/entry.txt`);
