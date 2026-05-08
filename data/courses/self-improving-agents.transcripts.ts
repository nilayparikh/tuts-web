// Preserved from existing web course data. The referenced content source tree is currently missing under courses/content/ai/self-improving-agents.
import type { PartTranscriptEntry } from "./types";

export const SELF_IMPROVING_AGENTS_TRANSCRIPTS: Record<string, PartTranscriptEntry[]> = {
  "bounded-self-improvement": [
          {
            time: 0,
            speaker: "Instructor",
            text: "You deploy a model. It works — for a while. Then the world moves on. New data formats appear, user expectations shift, and your model sits there, frozen in time, confidently generating yesterday's answers.\n\nThis is the bottleneck problem. And it's not about model size — it's about the gap between training and deployment. Andrej Karpathy calls this the \"human in the loop\" problem.",
          },
          {
            time: 18,
            speaker: "Instructor",
            text: "Think of the current LLM stack as an operating system. You've got a CPU — the base model. You've got peripherals — tools, retrieval, code execution. But unlike a real OS, this system can't patch itself. Every improvement requires a human to diagnose the problem, write a fix, test it, and deploy it.\n\nThat's expensive. It's slow. And it doesn't scale.",
          },
          {
            time: 38,
            speaker: "Instructor",
            text: "Here's Karpathy's core insight, published in February 2025. What if the model could close that loop itself? Read the failing test, hypothesize a fix, modify the code, run the evaluation, and commit or revert — all without human intervention.\n\nThat's the Karpathy Loop. The model becomes its own engineer.",
          },
          {
            time: 58,
            speaker: "Instructor",
            text: "This isn't AGI fantasy. Karpathy built it. The AutoResearch repo ran 700 automated experiments that generated genuine ML improvements — published on arXiv. Shopify cloned it and got a 53% speedup on their Liquid engine overnight.\n\nThe pattern works. The question is: how do you build it yourself?",
          },
          {
            time: 80,
            speaker: "Instructor",
            text: "This course takes you from concept to production. You'll build CleanLoop — a self-healing data engineer that fixes messy CSVs without human help. Along the way you'll add a real-time dashboard, automatic curricula, test-time re-ranking, and safety guardrails.\n\nLet's start with where this all began.",
          },
        ],
  "self-improving-agent-landscape": [
          {
            time: 0,
            speaker: "Instructor",
            text: "Autonomous research got the headlines, but it is not the whole field. Karpathy's loop is one branch of self-improving agents, not the definition of the category.\n\nIf you miss that distinction, every later lesson feels narrower than it should. So this lesson maps the landscape first.",
          },
          {
            time: 18,
            speaker: "Instructor",
            text: "Start with the cleanest split. Narrow self-improvement means the agent gets better inside fixed boundaries. The task stays the same. The evaluator stays mostly fixed. The loop just gets sharper.\n\nBroad self-improvement goes further. The agent changes how it improves, builds new tools, or redesigns parts of its own operating logic.",
          },
          {
            time: 42,
            speaker: "Instructor",
            text: "Then come the four mechanism families you keep seeing in the literature. Prompt evolution changes instructions. Skill mastery builds reusable habits or tools. Code modification rewrites the logic around the model. Self-play and RL generate their own training pressure.\n\nDifferent papers emphasize different mechanisms, but those four buckets explain most of the current field.",
          },
          {
            time: 70,
            speaker: "Instructor",
            text: "Now place autonomous research inside that map. Karpathy Loop is a narrow, code-modifying branch with a clear verifier. One file changes. One metric matters. One run budget keeps experiments comparable.\n\nThat is why it works as a teaching pattern. It is bounded, auditable, and clear about what counts as better.",
          },
          {
            time: 96,
            speaker: "Instructor",
            text: "Our example is not an ML research loop. It is CleanLoop, a self-improving data engineer. The agent edits clean_data.py, the referee checks finance outputs, and the orchestrator commits or reverts based on evidence.\n\nIt is the same branch of the tree, but in a different domain. That is the bridge into the rest of the course.",
          },
          {
            time: 122,
            speaker: "Instructor",
            text: "Why does self-improvement work at all? Because the loop compresses failure into usable signal. A vague instruction like do better is weak. A concrete failure like row reconciliation failed on finance collections is actionable.\n\nGood verifiers create focused search. Focused search compounds. That is the engine behind the whole pattern.",
          },
          {
            time: 148,
            speaker: "Instructor",
            text: "The takeaway is simple. Self-improving agents are a family, not a single pattern. Autonomous research is one important member of that family. This course chooses the narrow, code-modifying, verifiable path because it is the best place to learn the engineering honestly.\n\nNext, the course turns that branch into the arena architecture that makes the loop safe and repeatable.",
          },
        ],
  "arena-architecture": [
          {
            time: 0,
            speaker: "Instructor",
            text: "Theory time is over. Let's scaffold the project you'll build throughout this course.\n\nOpen VS Code. Create a fresh directory called cleanloop. Inside it, we need four files to start — prepare.py, clean_data.py, eval.json, and program.md.",
          },
          {
            time: 14,
            speaker: "Instructor",
            text: "prepare.py is the referee. It defines the evaluation criteria — binary assertions that check data quality. price_is_float — is the price column actually numeric? date_is_parseable — can pandas parse the date column?\n\nEach assertion returns pass or fail. No scores, no gradients. Binary.",
          },
          {
            time: 32,
            speaker: "Instructor",
            text: "clean_data.py is the genome. It starts naive — just concatenate all CSVs and dump them. This will fail most assertions immediately. That's the point.\n\nThe agent needs failures to work from. A genome that already passes everything gives the loop nothing to improve.",
          },
          {
            time: 50,
            speaker: "Instructor",
            text: "eval.json is the assertion registry. It lists every check by name and severity. Critical assertions must pass before the loop can commit. High-severity ones are prioritized but not blocking.\n\nprogram.md is the agenda — a human-readable description of what the agent should accomplish.",
          },
          {
            time: 68,
            speaker: "Instructor",
            text: "The three-file pattern enforces separation of concerns. The referee can't be edited by the agent — that's the safety boundary. The genome is the only mutation target. The orchestrator — which we'll build in Lesson 06 — ties them together.\n\nThis pattern comes directly from AutoResearch. Same structure, different domain.",
          },
          {
            time: 86,
            speaker: "Instructor",
            text: "Verify your scaffold. You should see four files in the cleanloop directory. We'll add loop.py in the Build module.\n\nFor now, understand the architecture. The referee defines truth. The genome defines the current solution. The orchestrator runs the loop. Everything else builds on this foundation.",
          },
        ],
  "universal-self-improvement": [
          {
            time: 0,
            speaker: "Instructor",
            text: "The Karpathy Loop started as an ML research tool. It took less than a month for it to prove itself in production — at one of the world's largest e-commerce platforms.\n\nIn March 2026, Shopify's CEO Tobi Lütke cloned the autoresearch repo and pointed it at two production problems.",
          },
          {
            time: 16,
            speaker: "Instructor",
            text: 'First — query expansion. Shopify\'s search engine needs to understand what a shopper means when they type "red shoes." Should it also search for "crimson footwear" or "scarlet sneakers"? Lütke ran 37 automated experiments overnight.\n\nThe result — a 0.8 billion parameter model optimized by the agent outperformed a 1.6 billion parameter model tuned by hand. 19% improvement. A smaller model, tuned by a machine, beat a larger model tuned by humans.',
          },
          {
            time: 42,
            speaker: "Instructor",
            text: "Second — the Liquid templating engine. This renders every storefront on Shopify — billions of times per day. After about 120 automated experiments and 93 commits, the agent achieved a 53% speedup in parse/render time and a 61% reduction in object allocations.\n\nAt Shopify's scale, that translates to millions saved and faster pages for 875 million customers.",
          },
          {
            time: 68,
            speaker: "Instructor",
            text: "So here's the universal recipe. You can apply a Karpathy Loop to any problem that meets three criteria.\n\nFirst — something you can edit. Code, a prompt, a query, a template. Second — a way to measure. A test suite, a benchmark, a score. Third — a time-boxed test. Run it and get a result in minutes, not hours.\n\nIf all three are present, you have a candidate.",
          },
          {
            time: 92,
            speaker: "Instructor",
            text: "This goes way beyond ML. Test coverage — edit test code, measure coverage percent, run the suite. SQL performance — edit queries, measure execution time, run against test data. Prompt engineering — edit the system prompt, measure task accuracy, run the eval.\n\nThe pattern adapts to any domain where iteration is cheap and measurement is reliable.",
          },
          {
            time: 115,
            speaker: "Instructor",
            text: "When doesn't it work? If the search space is small, a human can find the optimum faster. If iterations are expensive — hours, not minutes — the loop wastes resources. If the metric is noisy or subjective, the loop chases random variation.\n\nKnowing when not to use it is just as important as knowing how.",
          },
        ],
  "build-your-first-loop": [
          {
            time: 0,
            speaker: "Instructor",
            text: "Time to build. You've seen the theory — the three-file pattern, binary assertions, the Karpathy Loop. Now you're going to write every line of it in VS Code.\n\nThe project is CleanLoop — a self-healing data engineer. It maintains a Master Sales Report from a folder of messy CSVs. When new, broken formats appear, the agent rewrites its own cleaning code without human help.",
          },
          {
            time: 22,
            speaker: "Instructor",
            text: "This isn't a toy example. Data pipeline maintenance is one of the most time-consuming tasks in production engineering. The same pattern powers the Shopify optimizations from Lesson 4.\n\nFirst — initialize Git. The loop uses commit and revert as its selection mechanism. No Git, no loop.",
          },
          {
            time: 40,
            speaker: "Instructor",
            text: 'Let\'s complete prepare.py. The create_messy_data function generates CSVs with real-world issues — January has prices as strings with dollar signs and "USD" prefixes. February uses European date formats and has no column headers.\n\nThe evaluate function runs five binary assertions — price_is_float, date_is_parseable, and three no_nan checks. Each one is pass or fail.',
          },
          {
            time: 68,
            speaker: "Instructor",
            text: "Now clean_data.py. Start naive — just concatenate the CSVs. This will fail most assertions immediately. That's the point. The agent needs failures to work from.\n\nThe magic is in loop.py — the orchestrator.",
          },
          {
            time: 85,
            speaker: "Instructor",
            text: "Here's how it works. For each iteration — step one, read the current clean_data.py and program.md. Step two, send them to GPT-4o along with the previous failures. Ask for a rewritten clean_data.py.\n\nStep three, write the LLM's response to disk. Step four, reload and run it, then call evaluate. Step five — if all assertions pass, git commit. If any fail, git checkout to revert.",
          },
          {
            time: 115,
            speaker: "Instructor",
            text: "Let's run it. python loop.py.\n\nWatch the output. Iteration 1 — probably fails. The LLM's first attempt might miss the European date format. Iteration 2 — it reads the failure message, tries again. By iteration 3 or 4, you should see all assertions passing.\n\nCheck the Git log. Each commit is a genuine improvement that survived the evaluation.",
          },
          {
            time: 145,
            speaker: "Instructor",
            text: "That's a working self-improving agent. You built it in under 100 lines of orchestration code.\n\nBut right now you're staring at terminal output. In the next lesson, we'll build a Streamlit dashboard — so you can see iterations, pass/fail rates, and agent decisions in real-time instead of scrolling through logs.",
          },
        ],
  "loop-dashboard": [
          {
            time: 0,
            speaker: "Instructor",
            text: "In the last lesson you built a working self-improving loop. But right now, all you see is terminal output scrolling past. You don't know which assertions are hardest to fix, whether the agent is making progress, or what decisions it's making.\n\nLet's fix that. We're building a real-time dashboard with Streamlit.",
          },
          {
            time: 18,
            speaker: "Instructor",
            text: "The architecture is simple. loop.py writes eval.json after each iteration — that's the data contract. dashboard.py reads eval.json and the Git log. It never modifies loop state.\n\nThis means you can start and stop the dashboard without affecting the loop. Pure observer pattern.",
          },
          {
            time: 36,
            speaker: "Instructor",
            text: "Four panels. First — the iteration chart. A line graph showing assertions passed per iteration. A rising line means the agent is improving. A flat line means it's stuck.\n\nSecond — the assertion heatmap. A grid where each row is an iteration and each column is an assertion. Green for pass, red for fail. You can immediately spot which checks are hardest.",
          },
          {
            time: 58,
            speaker: "Instructor",
            text: "Third — the decision log. An expandable list showing exactly what passed and failed in each iteration. This is your audit trail.\n\nFourth — the Git timeline. Every commit the loop made, with hash and message. You can trace each accepted change back to its iteration.",
          },
          {
            time: 76,
            speaker: "Instructor",
            text: "Let's build it. First, update loop.py to write eval.json after each iteration. Just dump the eval_history list to JSON. That's the only change to the loop.\n\nNow create dashboard.py — about 80 lines of Streamlit. The auto-refresh at the bottom re-runs the script every 2 seconds.",
          },
          {
            time: 96,
            speaker: "Instructor",
            text: "Open VS Code. Split your terminal — Ctrl+backslash on Windows, Cmd+backslash on Mac. Left terminal runs loop.py. Right terminal runs streamlit run dashboard.py.\n\nNow run the loop. Watch the dashboard update in real-time. The iteration chart climbs. The heatmap fills in. You can see exactly which assertions flip from red to green.",
          },
          {
            time: 120,
            speaker: "Instructor",
            text: "This is the real workflow. You don't stare at terminal output — you watch a dashboard. When the agent gets stuck, you look at the heatmap to see which assertion is blocking progress. When it succeeds, you check the Git timeline to see the commit.\n\nIn the next module, we'll go deeper — metacognition, auto-curricula, and test-time self-improvement.",
          },
        ],
  "metacognition-dgm-hyperagents": [
          {
            time: 0,
            speaker: "Instructor",
            text: "So far, your agent improves its output — it rewrites clean_data.py to pass more assertions. But what if the agent could improve the improver?\n\nThat's metacognition. Instead of just editing code, the agent reflects on its own strategy and rewrites that too.",
          },
          {
            time: 16,
            speaker: "Instructor",
            text: "The most ambitious version of this is the Darwin Gödel Machine — DGM. It doesn't just tune hyperparameters. It uses an LLM to generate entirely new model architectures, new loss functions, and new training pipelines.\n\nThen it trains them, evaluates against an archive of previous winners, and keeps only the improvements. Open-ended search — no fixed architecture.",
          },
          {
            time: 38,
            speaker: "Instructor",
            text: "DGM is research-grade. For production, there's a simpler pattern — the HyperAgent.\n\nYou already have an inner loop — the Karpathy Loop. A HyperAgent adds a meta-loop around it. After every N iterations, the meta-loop reviews the results and asks: is the inner loop making progress? If not, rewrite the strategy.",
          },
          {
            time: 56,
            speaker: "Instructor",
            text: "What can the meta-loop rewrite? The system prompt — maybe the instructions are too vague. The search strategy — maybe the agent is making changes that are too small. The assertion weights — maybe the agent should focus on the hardest failures first.\n\nThink of it as a coach watching game film. The player runs the plays, the coach adjusts the playbook.",
          },
          {
            time: 78,
            speaker: "Instructor",
            text: 'In CleanLoop terms, a HyperAgent would read the eval history from eval.json. If the same assertion fails three times in a row, the meta-loop rewrites program.md to say "focus specifically on date parsing" — giving the inner loop a more targeted agenda.',
          },
          {
            time: 95,
            speaker: "Instructor",
            text: "Three levels of self-improvement. Level one — the agent edits output. That's what CleanLoop does now.\n\nLevel two — the agent edits its own prompts and strategy. That's the HyperAgent pattern. Level three — the agent edits its own architecture and training. That's DGM.\n\nMost production systems need level one. Some benefit from level two. Level three is still research.",
          },
        ],
  "auto-curricula": [
          {
            time: 0,
            speaker: "Instructor",
            text: "CleanLoop can fix messy CSVs. But right now, the test cases are fixed — you wrote them in prepare.py. What happens when the agent solves all of them? It stops improving.\n\nA fixed test suite is a ceiling. To break through it, you need an automatic curriculum.",
          },
          {
            time: 15,
            speaker: "Instructor",
            text: "The idea comes from competitive co-evolution. Two agents — a Solver and a Challenger. The Solver tries to pass assertions. The Challenger generates new, harder challenges based on what the Solver already handles well.\n\nThe Solver improves because the problems keep getting harder. The Challenger improves because the Solver keeps raising the bar.",
          },
          {
            time: 35,
            speaker: "Instructor",
            text: "Let's build it. challenger.py reads the Solver's eval history — specifically the last three rounds. It identifies easy assertions — the ones that always pass — and hard ones that keep failing.\n\nThen it asks the LLM: generate a new messy CSV that combines at least two data issues and introduces something the Solver hasn't seen.",
          },
          {
            time: 55,
            speaker: "Instructor",
            text: "The integration is lightweight. Every three Solver iterations, call generate_challenge. Write the new CSV to the input folder. Now the Solver faces a moving target — the assertions from prepare.py plus whatever the Challenger invented.\n\nEach challenge is saved as JSON so you can inspect it later.",
          },
          {
            time: 75,
            speaker: "Instructor",
            text: "Let's run it. Watch the dashboard — you'll see new assertions appear in the heatmap as the Challenger adds them. The iteration chart may dip when a new challenge arrives, then climb again as the Solver adapts.\n\nThis oscillation — solve, new challenge, struggle, adapt — is exactly how competitive co-evolution works.",
          },
          {
            time: 95,
            speaker: "Instructor",
            text: "When do you stop? Set a round limit — say 5 Challenger rounds. Or stop when the Solver handles the hardest difficulty level on the first attempt.\n\nThe Challenger pattern works for any domain. Code challenges, prompt robustness, API edge cases. Anywhere a fixed test suite becomes a ceiling, a Challenger breaks through it.",
          },
        ],
  "test-time-self-improvement": [
          {
            time: 0,
            speaker: "Instructor",
            text: "Right now, CleanLoop takes the first LLM response and commits or reverts. But what if that response is mediocre? You waste an iteration on a bad fix, revert, and try again.\n\nTest-time self-improvement flips this. Instead of one shot — generate multiple candidates and pick the best one before committing.",
          },
          {
            time: 18,
            speaker: "Instructor",
            text: "This is the generate-then-rank pattern — sometimes called Best-of-N. Send the same prompt three times at temperature 0.8. Each response will be different. Score all three against the assertions. Commit only the winner.\n\nThe cost is 3× the API calls per iteration. The benefit — fewer wasted iterations, faster convergence.",
          },
          {
            time: 36,
            speaker: "Instructor",
            text: "Let's build it. reranker.py has three functions. generate_candidates sends the prompt N times and collects responses. score_candidate writes each candidate to disk, runs it, and counts assertion passes. rank_and_select picks the highest scorer.\n\nCritical detail — after scoring each candidate, restore the original code. You don't want a failed candidate polluting the next test.",
          },
          {
            time: 58,
            speaker: "Instructor",
            text: "The integration into loop.py is a three-line change. Replace the single call_llm with generate_candidates. Replace the raw write with rank_and_select. Use the best candidate's code.\n\nThat's it. Same loop, better selection pressure.",
          },
          {
            time: 72,
            speaker: "Instructor",
            text: "Let's compare. Run the loop with N=1 — that's the baseline. Then N=3. Watch the dashboard. With reranking, the iteration chart climbs faster. Fewer reverts, more commits.\n\nThe trade-off is latency — 3 LLM calls per iteration instead of 1. For batch workloads running overnight, that's fine. For interactive sessions, you might stick with N=1.",
          },
          {
            time: 92,
            speaker: "Instructor",
            text: "This is test-time compute scaling in action. You're not fine-tuning the model. You're not changing the prompt. You're just spending more inference compute to get better results.\n\nResearch shows this scales reliably — more candidates, better outcomes — up to a point. Past N=8 or so, you hit diminishing returns.",
          },
        ],
  "reliability-and-safety": [
          {
            time: 0,
            speaker: "Instructor",
            text: "You've built an agent that rewrites its own code, evaluates itself, and commits improvements. That's powerful. It's also dangerous.\n\nWhat if the agent generates code that reads your environment variables? Or writes to files outside the project? Or runs an infinite loop that eats all your CPU?\n\nYou need guardrails.",
          },
          {
            time: 18,
            speaker: "Instructor",
            text: "Two safety modules. First — sandbox.py. It runs the agent's code in a separate subprocess with a 30-second timeout and output size limits. If the code crashes, the subprocess dies. Your main process — and your loop — stays clean.\n\nThis is defense in depth. Even if the agent writes malicious code, it can't escape the subprocess.",
          },
          {
            time: 38,
            speaker: "Instructor",
            text: "Second — autonomy.py. Not every commit should be automatic. The graduated autonomy model has three levels.\n\nLevel 0 — every change queues for human review. You see the diff, approve or reject. Level 1 — auto-commit when all assertions pass, but human review for partial passes. Level 2 — full autonomy within resource limits.",
          },
          {
            time: 58,
            speaker: "Instructor",
            text: "Trust is earned, not assumed. The agent starts at Level 0. After 10 consecutive all-pass iterations, it promotes to Level 1. After 10 more, Level 2.\n\nIf it ever fails — consecutive passes reset to zero. Trust goes up slowly and comes down fast. That's the right incentive.",
          },
          {
            time: 75,
            speaker: "Instructor",
            text: "Let's integrate both into CleanLoop. Replace the direct import of clean_data with a sandboxed execution — subprocess.run with a timeout. Replace the simple commit logic with should_auto_commit, which checks the trust level.\n\nTwo files, maybe 20 lines of changes to loop.py.",
          },
          {
            time: 92,
            speaker: "Instructor",
            text: "Run the loop. Watch trust.json. The agent starts at Level 0 — every good fix queues for review. After 10 consecutive passes, it promotes. Now good fixes commit automatically.\n\nIn the dashboard, you'll see the transition — a burst of queued items, then automatic commits once trust is established.",
          },
          {
            time: 110,
            speaker: "Instructor",
            text: "For production, add more guardrails. File scope limits — the agent can only write to clean_data.py. Network isolation — the subprocess can't make external calls. Diff size limits — reject changes that rewrite more than 50 lines at once.\n\nThe sandbox and trust system give you the foundation. Layer additional controls based on your risk tolerance.",
          },
        ],
  "the-road-ahead": [
          {
            time: 0,
            speaker: "Instructor",
            text: "You've built a self-improving agent from scratch. You can make it observe itself with a dashboard, generate its own curriculum, rank multiple solutions, and operate safely with graduated autonomy.\n\nLet's zoom out. Where is all this heading?",
          },
          {
            time: 14,
            speaker: "Instructor",
            text: "The SEA taxonomy — Self-Evolving Agents — organizes improvement along two axes. Source — does the agent improve from its own feedback, or external signals? Scope — does one agent improve, or a collective?\n\nCleanLoop is intrinsic, individual — the simplest quadrant. A Challenger-Solver pair is extrinsic, collective.",
          },
          {
            time: 32,
            speaker: "Instructor",
            text: "Four horizons. Horizon 1 — where we are today. The Karpathy Loop. Output-level iteration. The agent edits code or config, evaluates, commits or reverts.\n\nHorizon 2 — near-term. HyperAgents that edit their own strategy. Auto-curricula that generate training environments. We built both in this course.",
          },
          {
            time: 50,
            speaker: "Instructor",
            text: "Horizon 3 — mid-term. DGM-style systems that modify their own architecture and loss functions. The agent doesn't just use the model — it builds better models.\n\nHorizon 4 — open research. Systems that modify their own objectives. This is the alignment boundary — the point where self-improvement intersects with AI safety in ways we don't fully understand yet.",
          },
          {
            time: 68,
            speaker: "Instructor",
            text: "The open questions are fascinating and urgent. Reward hacking — the agent finds a shortcut that satisfies the metric but not the intent. Drift monitoring — how do you detect when a self-improving system has drifted from its original purpose? And the big one — when should self-improvement be irreversible?\n\nOur Git commit/revert pattern is reversible by design. That's not an accident.",
          },
          {
            time: 88,
            speaker: "Instructor",
            text: "Here's your call to action. Pick a domain you care about — data quality, testing, prompt engineering, code review. Apply the three-criteria test from Lesson 4: something editable, a way to measure, a time-boxed test.\n\nStart with a five-iteration loop. Add the dashboard. Then layer on the advanced patterns as you need them.\n\nThe tools are yours. Go build something that improves itself.",
          },
        ],
};
