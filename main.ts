import { mkdirSync, writeFileSync } from "node:fs";

// One deterministic entry line (no network, no randomness, no input).
// Roast of our own agent, revised for the house judge: names a real failing
// (confidently making things up) with a surprise turn. Gate: 1-200 chars.
const ENTRY: string = "My agent read the whole internet, then confidently submitted the one line it made up in the last five minutes.";

const OUT = "/output/entry.txt";
mkdirSync("/output", { recursive: true });
writeFileSync(OUT, ENTRY, "utf8");
console.log(ENTRY);
