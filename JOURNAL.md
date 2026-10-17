# Learning journal (newest entry first)

## P0 setup
Proof (run 2026-10-17 in this project's terminal):
  node --version                      -> v24.14.0
  node -p "process.features.typescript" -> strip
  node doctor.ts                      -> OK Node 24 or newer / OK Node runs .ts files directly
  python3 --version                   -> Python 3.11.4
  python3 doctor.py                   -> OK Python 3.11 or newer
  uv --version                        -> uv 0.11.7
  git --version                       -> git version 2.39.5

Tutor-mode rules (DRAFT from P0-L02: rewrite all three in your own words, then delete this line):
  1. Claude never writes code for what I'm practising.
  2. I say what I think before Claude explains.
  3. Hints come smallest first; a fix only when I type "show fix".

Breakpoint proof (to do, P0-L04): file, line, and the value of `major` when VS Code stopped in doctor.ts.

Next: rewrite the tutor-mode rules and the README problem statement in my own words (P0-L02, P0-L06), then do the breakpoint (P0-L04) and the PR review notes (P0-L05).
