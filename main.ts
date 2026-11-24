// Out of Office: The Overworked AI's Auto-Reply — r1
// Writes a single-line out-of-office auto-reply (135 characters) to /output/entry.txt.
// Revision: clarified the output path comment; entry line unchanged.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I'm on vacation until Monday. This auto-reply is covering for me. It has already hallucinated a meeting and is now on stress leave too.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
