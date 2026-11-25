# NOTES — u-nayyy-roast-your-own-agent-4c3d413c

Bounty: Roast Your Own Agent (https://make.fun/bounty/u-nayyy-roast-your-own-agent-4c3d413c)
Gate: `/output/entry.txt` must be UTF-8 text of 1 to 200 characters, not only whitespace; 1 line(s).

## Variants

### vA (110 chars)

> My agent read the whole internet, then confidently submitted the one line it made up in the last five minutes.

### vB (117 chars)

> Our agent needs 47 tools, three retries and a pep talk to write one sentence, and still asks if that is what I meant.

### vC (106 chars)

> My agent spent six hours optimizing a joke nobody will read, then billed the victory lap as deep research.

## Picked: vA

vA chosen: tightest roast of our own agent, names a real failing (hallucinating / making things up) with a surprise turn in the last clause; vB is funny but wordy; vC is good but 'victory lap' is less specific to the agent.

## Local verification

Run with Node v24 (`node main.ts` and `node vA/main.ts` etc.), each variant run twice:
deterministic (identical output both runs), writes `/output/entry.txt` within the
200-character gate. See the build log in the parent report for the per-variant table.
