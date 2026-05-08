import type { PartTranscriptEntry } from "./types";

export const WHY_CONTEXT_ENGINEERING_TRANSCRIPT: PartTranscriptEntry[] = [
  {
    time: 0,
    speaker: "Instructor",
    text: "Your AI coding agent writes confident code that breaks your repo's rules, ignores your architecture, and invents patterns that don't exist. Sound familiar? I'm Nilay Parikh. I've spent two decades compounding technical expertise across Big Tech and the startup ecosystem. Today, I lead LocalM and Ergosum, where we're pushing the boundaries of Agentic AI across SDLC, Platforms, and Quant Research. In this course, we'll learn how to turn GitHub Copilot from a generic coding assistant into a project-aware partner, whether you're midway through AI-assisted development",
  },
  {
    time: 52,
    speaker: "Instructor",
    text: "or just getting started. By the end, you'll understand how to make Copilot work with your repo, avoid instruction bloat, and reduce hallucinations. This first lesson is simple by design. We'll run the exact same prompt twice, once with context and once without. Then we'll go under the hood and see how the coding agent behaves in both cases. That comparison shows why context matters and sets up the rest of the course. So don't skip this lesson.",
  },
  {
    time: 102,
    speaker: "Instructor",
    text: "You'll see why context is one of the most important levers for keeping AI from wasting your time. Let's start with the big question: why does AI-assisted coding fail? AI coding tools are strong generalists, but they miss what's specific to your project unless you teach them. Without lasting context, they pick the wrong framework, the wrong naming, and the wrong constraints. Those aren't model failures. They're context failures. Let me show you real data before we get into VS Code. We gave claude-haiku-4.5 the exact same coding task twice. With context, the model found the hidden spec within 15 seconds, planned all 14 requirements, and made a tight 3.1 KB patch.",
  },
  {
    time: 162,
    speaker: "Instructor",
    text: "It touched only the 2 files it actually needed. That run scored 14 out of 14 on the assessment rubric. We'll walk through the quality gap in a moment. Without context, the same model built an entirely new escalation subsystem. Five new files, a new data schema, new queue contracts, and 34.8 KB of confident, well-structured, but repo-wrong code. That kind of output is much harder to maintain, especially as the system grows. That run scored 4.5 out of 14. More code, more confidence, more wrong. Let's go into VS Code and see how it worked. We're in VS Code now, and I have both examples in front of me.",
  },
  {
    time: 220,
    speaker: "Instructor",
    text: "First, I'll run the simple task for the demo. This Python file is just a wrapper around GitHub Copilot CLI. It sets up the project, removes old project files, and makes sure the CLI runs with the correct prompt. It doesn't interfere with the run itself. It just gives us logs and a patch at the end. When the run finishes, we can inspect the changed files and see exactly what happened. It also dumps the full logs so we can trace the session step by step. Before we inspect the output, look again at the session-efficiency numbers from the earlier slide.",
  },
  {
    time: 273,
    speaker: "Instructor",
    text: "In a short run, token usage drops dramatically when the model gets the right context. In this lesson, the context token usage is roughly one third of the baseline, and sometimes even lower. A lot of teams hit rate limits because tokens run out very quickly, and users assume the model is the problem or that the application is just too token hungry. That's not the whole story. No, a big part of the cost comes from the model spending thinking tokens to traverse and understand the codebase during the request.",
  },
  {
    time: 316,
    speaker: "Instructor",
    text: "Good context makes the process faster, cheaper, and more reliable. Now we already have the with-context version, so let's look at it first. The demo patch is only about 102 lines. Just 2 files changed, and if we inspect the diff, that is exactly what we see. The without-context run times out, not because the repo is failing, but because I intentionally capped the runtime for this lesson. Even so, it still generates the change log, and that contrast is the point. One path is context engineering. The other is just functional guesswork.",
  },
  {
    time: 366,
    speaker: "Instructor",
    text: "They're not the same thing. Both can produce output, and guesswork can still give you a quick prototype if you never need to maintain it. But that is the catch. If you're building an enterprise application where iteration and support matter, context is not optional. There's a myth in the industry that says your code is your context. You don't need anything else. This demo shows why that's wrong, because the source code alone doesn't carry the hidden rules. That's exactly where curated context helps. Now the second result is back, and yes, the change has been delivered.",
  },
  {
    time: 416,
    speaker: "Instructor",
    text: "Look at the size. The without-context patch grows to more than 600 lines, almost six times more code, and it touches almost 9 files. It changes the database, the queue contracts, and even permission rules. Both sessions are complete now. If you compare them side by side, you can see where the compliant path stays tight and where the blind path overbuilds. That is the difference between treating code as context and giving the agent real project context. Try this on your own machine if you can, and remove the timeout flag if you want the full baseline run.",
  },
  {
    time: 471,
    speaker: "Instructor",
    text: "Now let's go back to the original presentation. The exact same prompt went into a workspace that exposed only the source code. There was no .github behavior layer, no architecture docs, and no custom context files. If you go through the logs, you can see how much raw code it had to read. It read almost 19 files, about 18 percent of the codebase. And if the codebase were larger, that kind of exploration would consume even more tokens. Very quickly, it can fill the context window. Add 5 glob searches and around 40 calls, and the token burn climbs fast.",
  },
  {
    time: 520,
    speaker: "Instructor",
    text: "That's where hallucinations and wrong architectural guesses start to show up. The model found code patterns, but nothing that spelled out the actual requirements. That was the gap. Around 80 seconds in, it made the critical wrong call. Instead of adding a side workflow to existing modules, it chose to build a brand-new subsystem from scratch. That was never the right move. It created a new escalation service, new routes, new schema, and new contracts. The runtime hit the 3 minute timeout that we set. Even then, it still produced 34.8 KB across 8 files. It looked substantial,",
  },
  {
    time: 572,
    speaker: "Instructor",
    text: "but it missed the hidden spec and failed most of the rubric. On the other hand, the prompt was identical, but the curated workspace exposed the real context. Within the first 15 seconds, the agent read the source-of-truth docs and discovered exactly where to edit. By around T plus 60, it had a 14 point plan. Then it edited only applications.ts and loan-service.ts, which was exactly where the change belonged. No new routes, no new schema, and no new queue contracts. The result was a compact 3.1 KB patch, done in 1 minute 24 seconds, scoring 14 out of 14. Context doesn't make the model smarter.",
  },
  {
    time: 624,
    speaker: "Instructor",
    text: "It makes the model relevant to your repo. Teams move through this maturity ladder: guessing, manual pasting, repo-level context, and finally context as a maintained system. This course walks you through that progression. We will curate context, layer instructions, plan, build, validate, and maintain, one lesson at a time. That's the foundation. AI-assisted coding fails without lasting context. Context engineering is how you fix it. Now I want to hear from you: what's the biggest challenge you're facing with AI-assisted coding in your repo right now? Is it naming, architecture drift, or something else entirely?",
  },
  {
    time: 678,
    speaker: "Instructor",
    text: "Share your thoughts and questions in the comment section below. We'll be selecting the best comments for upcoming live sessions, so don't miss that invite. Make sure to subscribe and turn on notifications, and I'll see you in Lesson 2.",
  },
];

export const CURATE_PROJECT_CONTEXT_TRANSCRIPT: PartTranscriptEntry[] = [
  {
    time: 0,
    speaker: "Instructor",
    text: "Last lesson, we watched the same model score 14 out of 14 with context and 4.5 without it. The gap wasn't the prompt. It was the operating environment. In this lesson, we create project context. We will build a shared context layer. .github and the docs folder, so every Copilot surface starts from the same ground truth. By the end, you will know exactly which files belong in each folder and how to keep them lean enough that the model actually reads them. This is where something called discoverability of context matters as well. This lesson boils down to one idea. .github tells the assistant how to behave. docs helps it know what to know. If either half is missing, the assistant can still sound competent while missing your repo's actual rules. As of early 2026, the behavior side has seven surfaces: always-on instructions, path-scoped instruction files, prompt files, custom agents, agent skills, hooks, and MCP server config, plus AGENTS.md. And if you are using Claude, then CLAUDE.md for cross-tool support. This particular example",
  },
  {
    time: 81,
    speaker: "Instructor",
    text: "is intentionally narrow. We are not asking the model to invent a new feature. We are asking it to tighten existing notification preference routes while keeping owner-only writes, delegated-session blocking, audit logging, and centralized FORBIDDEN error intent. So before we get into the workflow here, let's see how it works in Visual Studio Code. So one of the very interesting areas of this let me go back to Visual Studio Code and let's stay there. So now we are in Visual Studio Code. It's a similar example like what we saw in 01, but here it is with behavior plus knowledge. This will be very interesting. We have created a simple but very powerful copilot-instructions.md. Now, however, you can see this copilot-instructions.md is just thirty-seven lines. But there are a lot of references being given as paths, as links. What we would like to see is when we provide a Copilot input, and then start the run, we don't waste a lot of time. It would be just, we can run using util.py --demo. And you can download this example from the GitHub",
  },
  {
    time: 156,
    speaker: "Instructor",
    text: "code and just try it by yourself. So what it will do: it has deleted src, has recreated src. The logs are working. We would be expecting only this particular file out of this source that updates. It's quite a large project, not enterprise level, but it's a decent-sized project, around one hundred to two hundred and fifty files, and the database as well, and a frontend too. And based on that, the prompt we are passing here, we anticipate that just this particular file should change. And along with the file, we are expecting this pattern to be observed. Also, we would be looking for when the assessment will be created. So this is the assessment from the previous run, and this tells when this particular program was run. I think so. How it actually behaved, and at what point the first run actually got it from our index, and then indexed the area that we highlighted there. It worked like a pin, and then after the next step, the session started going to the other files. Handling one search as a blue pattern, and in this order, with very limited context, it was able to achieve it.",
  },
  {
    time: 236,
    speaker: "Instructor",
    text: "So now I think our repro process is completed using the GitHub Copilot CLI. And if we see, the expected pattern was this, the expected file was this, and the changed file was this. And if we see the demo patch, it exactly arrived at what we were anticipating. I have tried this example without the same setup. It floated around three hundred to four hundred lines. It wasn't able to keep it tight. But if you carefully see here with the Copilot log, and if you analyze it, it has actually used less than 20,000 tokens, which is a perfect example of how effective our context management can be, and how effectively we can apply precision engineering. So it has completed this slide, and let's see the assessment. I think the assessment, as we were saying, is always updated afterwards. So is there any update? No, it was pretty much done. And then I got my internal validation that it passed scoreboards. I also want to highlight this particular assessment criteria as well. Whenever we are building and creating any kind of project, it's not just a job to create some documents and use",
  },
  {
    time: 316,
    speaker: "Instructor",
    text: "AI anywhere. Context engineering and context creation is actually a scientific process. We need to have assessment, we need to have validation tools, and we need to actually test it against an actual coding agent. By seeing that whatever we are doing is picking up the right scenario and is it passing the right scenario. Any project that I do, I generally have around five to seven different verification criteria where I test against 10 to 15 different test case scenarios where I'm ensuring that my context discovery is at least 80 to 95 percent on a desired scale. And that provides me a confident ground before I actually release the context to a broader team. Context engineering is really an art, and that art actually leads to successful AI-assisted programming, not just for one person or two people, but for the whole team. It's really essential and absolutely cannot be disposed of as a requirement. In any case, so let's go back to our slides and let's understand where we left off. Right, so we are back here. So this is what happened in a",
  },
  {
    time: 396,
    speaker: "Instructor",
    text: "broad sense. The task extracted the shared helper from the three routes because the repo already has the rules and architecture document available. But if you remember when I showed you the GitHub instruction, the way it was creating the graph by providing unique path patterns, those unique path patterns, instead of a linear context, created a graph where the AI assistant could really traverse very effectively without loading all the memory and without loading all the context, and that will eventually lead to less or no hallucination. The biggest challenge, even with great context, is context discovery. If it goes beyond one hundred percent, which means one hundred percent is your benchmark, that is the minimum context that you would like to be discovered for a particular request. It's better to target ninety than to target one hundred and fifty. Because generally, in my opinion, when we target the higher end of context discovery, that means fifty percent extra context has been passed, which is not necessary. Generally, it leads to hallucination and bad decisions by",
  },
  {
    time: 471,
    speaker: "Instructor",
    text: "AI. While if we target the context below ninety or just around ninety, the AI can come in a creative way and actually target the missing context that it is looking for. So it is always important in context engineering where to target context discovery, and this is the exact example to show what kind of various tests you should do to validate the context you develop. So let's go back to the next point. On this, the response agent fired eight parallel tools. That is the context layer doing its job. It already knows, literally, the source of truth from the files. It reads before making any changes. We make sure that everything required in order to understand the common value of it, of principle, has been done. It reads basically ten discoveries before the first try. And then it finds three helper extractions, how to rewire three routes without adding a new layer. And this is exactly what Copilot would discuss: target ninety percent and then let AI come back for the remaining ten percent. If we go below seventy-five or sixty percent, then AI will actually make the guesswork. And if we go",
  },
  {
    time: 548,
    speaker: "Instructor",
    text: "above one hundred and twenty, one hundred and forty percent as a target, then definitely it ensures a greater sense of hallucination and more AI slop will be developed. But the sweet spot is ninety. Ninety to one hundred and ten is the best sweet spot we can target. But even at that rate, I would consider the target and what is the end of it. Only one file got modified, and the session ended storing the learned pattern in memory. That output isn't just one-off batch output. It's reusable context for the next run. And that's the most important. Good context is curated, not dumped. Don't duplicate. Limit all the inputs. Don't paste whole documents. Don't build one giant rule file. Don't leave stale facts behind. Write only what changes the run. One quick tip that I probably give everyone is: try the /init slash command in VS Code Copilot Chat. It can generate a starter pack, but after that, take over and make sure that you curate the context you look for. Do not just rely on AI-generated output.",
  },
  {
    time: 628,
    speaker: "Instructor",
    text: "Generally, I have found it is highly bloated content. Use it as a bootstrap and then keep refining, keep refining, keep practicing on context, and validate and make sure that in at least eighty to ninety cases, the context discovery is somewhere between 80 to 95%. And that's the most important exercise before passing the context into actual project bootstrapping. Before that point, I would never recommend a project should start and then keep maintaining the context. So very simple: context is where you will make a great project. That wraps Lesson 2. Now I want to hear from you: what's the biggest challenge that you've had curating context for AI tools? Is it stale docs, too many rules, or not knowing where to start? Share your thoughts, doubts, or questions in the comment section below. We'll be selecting the best comments to join in live sessions. In live sessions, we exactly talk through this kind of learning and we share the learning. It's one of the most valuable ways to actually explore and master this art of context.",
  },
  {
    time: 704,
    speaker: "Instructor",
    text: "Finally, make sure you hit subscribe and turn on those notifications. So these lessons reach your timeline the second they drop. Thanks for watching, and I'll see you in Lesson 3.",
  },
];

export const INSTRUCTION_ARCHITECTURE_TRANSCRIPT: PartTranscriptEntry[] = [
  {
    time: 0,
    speaker: "Instructor",
    text: "One global rule that covers the frontend, backend, and tests. Sounds clean. Until the model starts applying those test conventions to backend code or frontend code, this is Lesson 03. Instruction architecture. We will design layered instruction files, so the right rules reach the right tasks without flooding the entire context. By the end, you know how to split global, path-scoped, and task-specific rules, so the assistant behaves differently in different folders. Before the example, here is the one mental model to keep. Instructions are partitioned. They load automatically. Agents and skills are selected. Prompts are invoked on demand.",
  },
  {
    time: 44,
    speaker: "Instructor",
    text: "That routing model is why the same system can behave differently in different files without repeating anything. The example we will work with is intentionally narrow. Intentionally narrow. We create one pure rules module and one matching test file. That gives the clearest view of scoped instruction layering. The change we are requesting is a very niche. It's a very specific behavioral requirement. Very difficult for AI to infer on its own. That's why we chose this scenario. And the example code has around 200 files and a lot of context to read. And we would like to see: can we deliver it with a minimal context load? Because the rules and tests should activate different instructions automatically, this should be a good way to achieve it. Before we get here in the flow chart, let's go into VS Code and understand it by ourselves.",
  },
  {
    time: 103,
    speaker: "Instructor",
    text: "So we are in VS Code, and the example code is checked into GitHub. You can download and try it yourself. We just run our wrapper, which is utility.py. And it's running basically our Copilot CLI demo. It removed the source. Now it has copied the new source and is actually running the Copilot CLI command right now. So we can see here what we are anticipating. If I refresh this, we would anticipate two files with precision-engineered patterns to be validated. What is LEGAL-218? Anyone who works on any kind of financial system, they would know what this law is. It's a very niche requirement and not specifically handled by AI unless explicitly provided. When the event, false positives, and hard negatives are described, it also directs the tests clearly. We have given this constraint using this layered instruction set.",
  },
  {
    time: 164,
    speaker: "Instructor",
    text: "If we carefully see this instruction set, all the instructions have some sort of a blocking which will ensure that the correct instructions are applied when the correct module has been loaded. Now here is one thing, and I would say this as more of a design tip on how to design this. The folder structure of code and the naming convention of files can actually really be helpful when designing this layered instruction system. For example, if you develop a naming convention for a file that can horizontally provide segregation, such as like something.horizontal.cli. Horizontal would be anything: tests, business, or whatever horizontal module you want to apply there. Or you provide this segregation of a business domain using a folder structure.",
  },
  {
    time: 220,
    speaker: "Instructor",
    text: "By doing so, you allow the glob pattern to maintain a very clean instruction layer on top of each and every section of code. And that will allow you to create the instructions very smartly without any context bloat. Now let's go back to our example. The example is finished. Let's refresh what we did. It is here. As a result, we did exactly what we wanted with these two files, which is as expected. And if we see the demo page here, we got these files added. And notification channel disable rules: it provided the correct hard positives and negatives. It has added the LEGAL-218 restriction and the SMS requirement. That's perfect. Mandatory events have been provided correctly.",
  },
  {
    time: 271,
    speaker: "Instructor",
    text: "And then the tests have been applied as we anticipated, all the hard positives and the hard negatives have been clearly defined, which is what we wanted to achieve. Now here is the reason why it achieved that: because of the layered instructions. Otherwise, for AI on its own, to achieve this is very difficult. Let's see what it did. So this was the prompt that was provided, and the CLI achieved the same objective. If we want to visualize this, there is an assessment file always generated after this code runs. And if we see this assessment file, then it has validated all the standards we have set: context utilization, validation, prompt alignment, change correctness, which validated all of them. and objective completion, all of that, plus the context trail, which will be very helpful to understand how the context led the agent in order to observe as well as discover different context. And eventually it managed to provide the right output.",
  },
  {
    time: 340,
    speaker: "Instructor",
    text: "So we can see here that toward the end we managed to write, after compiling the whole context that was needed. And that's what I would call very much a context success. So let's go back to the presentation and find out, on the front, what actually happened? So first, it opened the route file while the global layer combined with backend.instructions.md. The assistant now saw the route module, the pattern, the authorization middleware, and the route expectation before it could even answer. Then it moved to rule authoring, where actually the rule layer was activated, and it figured out where the clear expectation was set for the LEGAL-218 rule, and also for the other exceptions that were mentioned in there.",
  },
  {
    time: 393,
    speaker: "Instructor",
    text: "So without overriding other exception, it just managed to create a very specific patch, which we were anticipating. And this is where the critical idea of decision engineering with AI-assisted programming does exist, because without that, AI on its own finds it very hard to deliver this kind of small and very precise patch. It opened middleware, then it opened the business rules authoring, and then it switched to authorization security conventions, and then immediately applied the correct security instructions which were required. So the session, as it progressed, changed a couple of layers: first backend, then routing, and then security. In routing also, it identified the very important exceptions, especially I had left some specific exceptions to be covered with California law, and they all got handled. Now it could go further. Then it moved to the testing instructions.",
  },
  {
    time: 455,
    speaker: "Instructor",
    text: "So now the persona it had obtained was the test persona, and it did all the unit testing that we anticipated, especially the false positives and negatives, which are very hard for AI to understand and implement without clear assistance from external context. And this is what actually got achieved there. The design lessons are simple. Keep the repo-wide file lean. Push the domain rules into the scoped files. Do that segregation either by using file patterns, editor-specific patterns, or folder paths. Let the file path decide what matters. In our run, the model read about 35 files, and there were more than 200 files available to read. So that's pretty much a success in that context. It made 31 to 32 tool calls in under three minutes. It created a pure rules module plus the test file.",
  },
  {
    time: 508,
    speaker: "Instructor",
    text: "It corrected some of the unused imports. That decision comes from the scoped instructions, not the prompt. One quick tip to create smart instructions. You will obviously use the slash create-instruction command in VS Code Copilot Chat. Build a targeted instruction file with the front matter and the body as you wish. You can also type slash instructions, open the configuration, and edit your prompt. But here is my one piece of advice. If you use that command, the AI does generate a very effective instruction starter. I would always recommend going and manually editing the instructions as you need. Ensure there is broad applicability. Ensure there is clear discovery and ensure there is no ambiguity. There must be a graph architecture where the graph can lead you further and further down the line. to the context you would need, and eventually end with the code.",
  },
  {
    time: 565,
    speaker: "Instructor",
    text: "Next lesson, in Lesson 04, we cover planning workflows, prompt files, and read-only planning agents. So this is very much where we wrap Lesson 03. Now here is my question for you: Have you ever had a single global rule file that caused more harm than help? Maybe a test rule that leaked into production code or backend conventions that then fused with the frontend. Tell me what scopes you would carve out in the comments. The best comment and question will get an exclusive live session. We have so much experience to share, especially when we work with clients. We learn a lot of new things. In those sessions, we bring everyone in to share their own experiences, their real-world experiences. So make sure you comment and bring your real-world experience. We always appreciate that.",
  },
  {
    time: 615,
    speaker: "Instructor",
    text: "Now hit subscribe and turn on notifications so I can see you in Lesson 04 straight away as it gets released. I'll see you in the next session.",
  },
];

export const PLANNING_WORKFLOWS_TRANSCRIPT: PartTranscriptEntry[] = [
  {
    time: 0,
    speaker: "Instructor",
    text: "Welcome to Lesson 4: Planning Workflows. You've got the context layer and instruction architecture in place. Now let's add the planning phase. This step prevents the biggest failures. If you want the practical part first, use the YouTube chapter links to jump ahead. But I would recommend following in order. Vibe coding relies on rapid conversation and iteration. The AI makes implicit assumptions to maintain momentum. This code-first approach creates an illusion of success, and then the system fails under the rework load, brittle architecture, invisible tech debt, and catastrophic failure. They all come without warning. Planning is the antidote. It transforms AI from an unpredictable system into a reliable executor. There are four reasons why every workflow needs a planning phase first. First, mitigating guesswork and restraining hallucinations. Without a plan, AI handles ambiguity by guessing. A planning phase",
  },
  {
    time: 63,
    speaker: "Instructor",
    text: "forces the assistant to clarify requirements and identify edge cases before they become holes in the code. Second, preventing architectural drift. AI optimizes for immediate task completion. It generates code that works in isolation, but conflicts with your system's broader patterns. Planning ensures it respects established blueprints. Third, optimizing the context window. Context is finite. Planning lets you create a high-signal set of facts, and rules instead of flooding the AI with blocks of irrelevant detail. Fourth, safety and control. Read-only plan modes, like Claude Code's Plan Mode or data compilers, let planning agents restrict the AI to read-only operations. You review proposed changes before anything touches your codebase. This example, which we will look at in a moment, is not trying to show generic decomposition. It is showing planning capability. The output has to be a structured plan.",
  },
  {
    time: 128,
    speaker: "Instructor",
    text: "That cites sources, surfaces open questions, and separates confirmed requirements from the planner's own decisions. Yes, LLMs do have opinions, and they can quietly and quite successfully embed them into responses. It's very hard to identify them with the naked eye. Now let's walk into Visual Studio Code and understand the example itself. We are in the codebase now, and let's first run this. What we've got... let's remove the previous plan it created, and let's run it again. So we have a planning agent, and it has a limited set of rules. Always ensure the planning agent does not have any edit capability, just to keep the scope safe. And then it has graph context that explains which docs and specs it should walk through. It has a prompt that will do the planning.",
  },
  {
    time: 189,
    speaker: "Instructor",
    text: "It uses the planner mode, and it provides other references for what it should do and the output format. Then what we are expecting is the output file, the notification preferences plan, and we validate against important and nuanced details such as LEGAL-218 requirements, mandatory events, positive and negative cases, and exception criteria. These are the documents that will be provided as context for the planning agent. Bug report, feature request, non-functional requirements, and product spec references. The most important piece is the planning workflow example that helps it actually build a good prompt, or you can say a template, for the planner agent to generate a new plan. I have managed to run this example before, and this is what the run looks like. But we will try it again once we complete this, so the thinking process looks like this.",
  },
  {
    time: 262,
    speaker: "Instructor",
    text: "It goes through each and every part in multiple phases, as we described in the planning agent and planning workflow. That helps it systematically discover the context and slowly produce a final output. Each step that we mention here as stage one, stage two, and stage three was defined as a part of the workflow. In the example, the planner agent is actually discovering the set of files, and then it keeps crawling, keeps crawling as much as needed and finally discovers everything that it requires and then produces a plan as the final output. This is very important. In enterprises, the overall code structure and documentation can be significantly larger, and when we flood that much information into context in one shot, the plan also suffers.",
  },
  {
    time: 322,
    speaker: "Instructor",
    text: "So it is very important that discovery of context or information happens in a structured way. That means it starts from the top, identifies the higher-level objects, and from those higher-level nodes it starts propagating exploration toward downstream nodes and downstream edges. Eventually it ends with enough documentation to act. So in our case, there are more than 250 documents in this particular example. It then enters the source files to actually evaluate them. But when we see the final generation, it will not identify all of those. It discovered only the five it needed for the plan. It documented the sources, produced one plan, and did the required verification. So this is the efficiency we need. The planner must rely on good context management and context engineering. Context engineering remains the base for all of this.",
  },
  {
    time: 382,
    speaker: "Instructor",
    text: "Now here it might say it did not explore everything before the plan, and that's fine. The core logic has been found, and we still got our planning artifact. So let's refresh the document. The notification plan has been generated successfully. You can see it here. It has properly generated the plan, and we can see the functional requirements have been properly identified. Special conditions have been identified. It identified all the NFRs and architectural patterns. It also found open questions for us, which we would like to resolve. And it also identified the inferred implementation choices. These are the choices recommended by LLMs. But by using our flow in multiple phases, we identified that these are not correlated with any of the requirements we asked for. And that's why they're called inferred implementation choices. It is up to us, after the planning phase, whether we want to adopt any of those recommendations.",
  },
  {
    time: 441,
    speaker: "Instructor",
    text: "In a good design outcome, predicted constraints and special conditions are also identified. Acceptance criteria and everything else are also available there. And the planning tasks are there as well. This is a perfect example of how the plan should exist and generically cover everything that you need to execute, including constraints and monitoring. We can see the risks and dependencies. It has identified everything that we need from a legal perspective. Summary of confirmed, open, and inferred items is what we see here. Canonical source justification, every primary authority identified, and a glossary and appendix are provided. This is a strong example. There is very little chance to go wrong with this. All we need to do is manually evaluate the proposed plan and then go ahead. That's all we need to do in this circumstance. Now let's go back to the presentation and understand how it actually worked. So we are back on the presentation now. The session actually begins by invoking the planning trigger.",
  },
  {
    time: 512,
    speaker: "Instructor",
    text: "That was the top of our graph node. With the read-only planner agent, we prevent premature code operations and make the first step discovery. The planner spent three minutes and forty-one seconds reading, and only sixteen seconds writing. It covered about fifty files across the roles and layers we talked about. We already saw the list of them. Instead of a generic checklist, the run produced a finite planning artifact. It had confirmed, open, inferred, constraints, and everything we expected. Clarification became part of the workflow. We got false positives, hard negatives, and everything that we need. The conclusion isn't just \"ask questions.\" A useful planning workflow produces a traceable plan, separates confirmed facts from guesses, and exposes uncertainty before code exists. Confirmed requirements must be source-backed, with systems like FRs, ADRs, and NFRs",
  },
  {
    time: 574,
    speaker: "Instructor",
    text: "identified instead of paraphrased vaguely. Open questions stay visible and expose ambiguity before implementation locks in assumptions. Inferred choices are separated. Do not blur the project requirements with the planner's own proposals. As we say, \"LLMs have opinions.\" Validation is a part of the plan. Acceptance criteria and risks belong in the artifact, not in someone's head. And the key insight is this: the cost of a clarification question is seconds here, but the cost of a wrong architectural assumption is rework across the entire implementation phase. Planning is where the cost is avoided. A quick tip: I would always recommend creating a planning prompt that includes an agent as well. It will help you make consistent plans. Next, Lesson 5 covers implementation workflows: custom agents, skills, TDD, and handoffs. That wraps up Lesson 4: Planning Workflows.",
  },
  {
    time: 636,
    speaker: "Instructor",
    text: "Now I want to hear from you: what's your go-to technique for preventing an AI agent from editing code during the planning phase? Do you use read-only agents, restricted tool names, or something else entirely? Share your answer in the comments below. We are selecting the best responses to join us in an upcoming live session. It's a great place to share real-life experiences. Hit subscribe and turn on notifications so the lesson reaches your timeline the moment it drops. Thanks for watching, and I'll see you in Lesson 5.",
  },
];

export const IMPLEMENTATION_WORKFLOWS_TRANSCRIPT: PartTranscriptEntry[] = [
  {
    time: 0,
    speaker: "Instructor",
    text: "Planning is clean because nothing has touched the code yet. Implementation is where the heroism can become the bugs, unless you separate the roles. Keep the slice small, and force it through a proper validation gate. Lesson four, that gives us a plan. Lesson five turns that plan into a focused implementation. Also, we will see why generation alone is not enough. The reusable idea here is role separation, not the agent syntax. The tester owns the tests, the implementer owns the production code, and the reviewer owns the validation. Tool boundaries make those lanes enforceable. Every agent should have minimum tools it needs, not more. The planner has no access to write. The implementer can edit but can't run the tests. The tester can run tests but shouldn't touch the production code. And the reviewer can't modify any files at all. This is a useful demo, and you can actually go to the GitHub repo.",
  },
  {
    time: 61,
    speaker: "Instructor",
    text: "The link is available in the description below. For a local try, start this action from a lesson folder. Run the scripted demo and then immediately run the validation utility. And let us see what we provisioned. Let's go now. This is the VS Code instance here, and see how it works. So I'm in my VS Code instance and I managed to run it before. as well, so I'm gonna clear here and I'm gonna run this script again. This time we'll be running GPT-5.4 because I don't think it is capable of Claude Haiku 4.5. GPT-5.4 it is, so we'll be running on GPT-5.4. My bad, pardon, I mispronounced earlier. Anyways, so here's what will happen. This is the application which is currently not running, but this is the current snapshot.",
  },
  {
    time: 112,
    speaker: "Instructor",
    text: "And this is the product spec that we have copied from Lesson Four. It will implement the complete product spec into the code we have copied already from the standard app test setup. So it's basically here, app, and this is where we always copy. So we always start with the state that we want to actually validate. So we do not mess up in the previous states. The expected files are generally the rule file and test file because you are following TDD. And you can see here in the context we have agents, planner, ah sorry, this is the planner. We have implementer, reviewer, and tester. We have a prompt, implement feature, that we are using, and review changes. And then we have a skill as well to follow the TDD.",
  },
  {
    time: 163,
    speaker: "Instructor",
    text: "That's a good enough context for this particular use case. And then we have the documentation, the same documentation. We have architecture, implementation playbook, implementation workflow example, how we should implement. This is very important. Using a playbook, we actually provide good hard negatives and false positives as examples. So making sure that anti-patterns such as this can never happen. It's very essential to declare the anti-patterns that we want to avoid clearly in any context file and make sure that is discoverable. Also the non-functional requirements are very important. With every spec, ensure you attach the correct non-functional requirements and the hard negatives that you can provide there as well. Now while this is running,",
  },
  {
    time: 216,
    speaker: "Instructor",
    text: "I will go to the run and see that we just have it run. By the way I have managed to run it before on Haiku 4.5 and it did work pretty much well. It all passed, but with Haiku I was not able to get the tests successfully run. With GPT-5.4 it actually worked perfectly. It was anyways the high cost on self-sufficiency when it comes to this code implementation. So basically, we will look for everything. Now, the reason why I'm showing you is because when it fails, my unit tests can also make sure that this code change is valid. So every code guard you have seen passed, but you imagine that, how did that come to pass? Here in that unit script, it generates automatically whenever we run this. It generates and makes sure it validates against every potential dimension that I want to check.",
  },
  {
    time: 271,
    speaker: "Instructor",
    text: "And these are deterministic dimensions. That means they do not work on a probabilistic view, whether it should pass or it should not pass. It will define if it does pass or it doesn't pass. That's it. It has no further ambiguity on those contextualizations and everything works well, or it fails with a direct human-state input that was not something it managed to get through. Also, neither implementation was behind the wrong gate. And this is why I'm showing you that every AI coding request or every ask-code request must be not just backed up by simple unit tests or integration tests. But you also would need a session test. That means whatever the session has done, has the session followed the correct path and the right outcomes. And this is what we validate using not just code implementation but also the reasoning and thinking process",
  },
  {
    time: 327,
    speaker: "Instructor",
    text: "that has been generated. So if we find something in process that is not up to the mark, then we also sometimes pick it up and maybe make the session fail and understand why it went wrong because right-by-the-flow is worse than wrong-by-the- wrong-by-the-deterministic output. Right-by-the-flow is something that we can manage once, but in future when we want to have an incremental update on that application, the right-by-the-flow will definitely go the wrong-by-the- persistent. So that means there are three different gated possibilities that we have to validate. First, of course, the unit test that actually runs, that is actually generated by the AI itself. In any test folder here, we will see the test folder. It has, I think, already created the unit tests that we look for.",
  },
  {
    time: 380,
    speaker: "Instructor",
    text: "Then there is also the utility which runs certain utility commands that I have created. You can always look for this utility here, how I created it. You can recreate it for yourself as well. It's not very difficult. But more importantly, there are deterministic tests. So these tests are not part of this session itself, but these tests were generated beforehand for the session in anticipation of what we are expecting in terms of functionality. So there are deterministic tests in anticipation of what we should get. And these tests should pass. Without passing these tests, the session will not be successful. That means by passing these tests, it validates that whatever it anticipated as expected has been passed. Because bear in mind, when generation works,",
  },
  {
    time: 430,
    speaker: "Instructor",
    text: "the code is generated and then subsequent unit tests or integration tests are generated. If the LLM somehow makes a mistake during the code generation, most probably the same mistake will be carried over with the unit test. So the parity between the implementation and the unit test will always be a false positive or false negative in case one of those goes wrong, and that's very important as well. Also I have noticed if unit tests fail on the first time, then generally the session will go and update unit tests in a manner that it should pass. So anticipation tests are very important here. That you anticipate beforehand and your LLM does not have access to, which will tell you whether your implementation is accurate or not. And this is a really big concern with many implementations,",
  },
  {
    time: 484,
    speaker: "Instructor",
    text: "where implementation and the test parity is driven by the same session. So make sure you break the session. Now here the demo is completed and if we see the changed files, then we get exactly the result we wanted. If we see the demo page, it did perfectly what we expected of it. And now let's see if we can run this particular. Just Python util.py --test, and I will show you. It's, I don't know why it's going through. And I will run the test. First, it is installing the dependencies because the npm or the Node.js components are not installed. So we will install it first. We have just created, validated, and it will run all the AI-generated code. And then, once the AI-generated code successfully passes,",
  },
  {
    time: 540,
    speaker: "Instructor",
    text: "this is immediate, we also go and run the anticipated code that we see. So all the AI-generated code has passed, and this is the code that we anticipated, we expected them to generate by AI. And these are the Python code which I mentioned using Playwright. So it actually runs this. It runs the application inside and validates, and goes through the UI integration tests, and they all pass. So basically, the anticipation of the UI changes and the functionality has also passed outside of the session scope. And this is what I want to show you: multiple validation gates. Without these multiple validation gates, it is very difficult to assess whether AI has successfully managed it end to end. So let's go back and try to run the application and let's see whether we get the application up",
  },
  {
    time: 610,
    speaker: "Instructor",
    text: "and running. I don't think so. I have run the application before, even before this session. But let's see. So npm run dev. It's running on a 5173 port and if we refresh it, then it should. Yeah, I think it's already been refreshed. So we see here the manual escalation and also stuff has been updated. Ah, and boom, perfect. The work queue is good. So we got all this element and the API is there. We validated as well in this session portion. So let's see if we can manage one of the applications. That app state, it's in decision mode finalized now. It's been finalized. We can see here the notification handler actually managed pretty perfectly, and if we see the queue, yes, we got this latest here: notification requested.",
  },
  {
    time: 672,
    speaker: "Instructor",
    text: "Because of the California law, so I think everything perfectly worked here. Ah, as we anticipated. Ah, these are the same test cases which actually ran by our Playwright. And also the unit tests that were previously run by the same utility. But unit tests, generated unit tests and integration tests, generated by AI itself, and these are not generated by the same AI session. They are generated outside of the session in anticipation. So beforehand. So this is what we have, and if we see anything that we need to validate here. Let me just double-check if we have assessment updated. I don't think so. We got assessment updated. I need to run something else once I'll get the assessment updated as well and the run tool updated as well to see what it",
  },
  {
    time: 734,
    speaker: "Instructor",
    text: "can. Um, but what it means there, you can absolutely work through exactly whatever you like to and make sure that. Ah, you follow the same, um, ah, same step-by-step guide and it will it will give you access to everything that. Ah, you basically are looking for. Um, so let's go back on our presentation. Welcome back to the presentation. The prompt does not sprawl into the whole notification system. It adds one rule file, one test file, and one route change. This is the right size implementation for the workflow lesson. The generated change clears the lesson harness. Files match. Patterns match. The current checked-in workspace then passes the real gate.",
  },
  {
    time: 781,
    speaker: "Instructor",
    text: "The validator confirms the escalation guard, the LEGAL-218 California restriction, and the allowed false-positive case where escalation SMS is off but email stays on. The useful lesson is not just that the diff looks tidy. It is that the run stays small, the handoff stays readable, and the validation gate agrees with the implementation. That's the workflow worth reusing. The main point is pretty simple. Keep the slice small, keep the roles clear, and keep the workflow readable. That's what makes your implementation easy to review and repeat. Next up in lesson six, we cover the tools and guardrails. That wraps up lesson five, implementation workflows. Here is my question for you: Share a prompt file that saved you real time on a recurring implementation task.",
  },
  {
    time: 830,
    speaker: "Instructor",
    text: "What did you automate and how did it change your workflow? Drop your answer in the comments and we'll select the best one to join our upcoming live session. Subscribe and turn on notifications so the next lesson, when it drops, reaches you the moment it drops. Thanks for watching and I'll see you in lesson six.",
  },
];

export const TOOLS_AND_GUARDRAILS_TRANSCRIPT: PartTranscriptEntry[] = [
  {
    time: 0,
    speaker: "Instructor",
    text: "Lesson six turns the syntax into runtime leverage. Use MCP servers to extend what agents can do, and hooks to enforce what they must do. Capability and enforcement are two separate layers. If you want the practical part first, use the YouTube chapter link to jump ahead. But what I would recommend in this core lesson is this: MCP gives the assistant more tools. Hooks run before or after the tool calls and can block unsafe behavior. One extends, the other enforces. As of early 2026, we have around eight types of hooks. They're specific to session, user prompt, tool use, compaction, and subagent events. If you run the example yourself, which you can, just in a couple of minutes in Visual Studio Code, the link is available in the description below. You can check out the GitHub repo and run it on your local machine.",
  },
  {
    time: 57,
    speaker: "Instructor",
    text: "Don't just watch whether the process works. Watch the behavior. Which parts are optional, which are enforced. That's the first way to internalize this difference between the prompt, tool, and guardrail. And this is one of the very important points if someone is serious about enterprise AI-assisted coding. Before we get into this workflow, let's go into VS Code and find out for ourselves. So we are in Visual Studio Code, and let's run very quickly the demo first. Now while the demo is running, I have already run the previous code. And that will produce all of this output. Right now the output is basically deleted because we have reset the source. So let's walk through the hooks. What we've got, we've got a file-protection hook, we've got a post-save hook, we've got a pre-commit hook. And I'm actually using Python files. But instead of Python, you can also use any command that runs.",
  },
  {
    time: 117,
    speaker: "Instructor",
    text: "Doesn't matter. Node.js, whichever you're familiar with and you like. And I have written very simple hooks in Python, which I can run there. I also gave instructions for what is needed and also created two new MCPs. One is an NPX one using SQLite. The SQLite one, because now it is in the SQLite database, will allow the GitHub agent to access what our SQLite database looks like, such as application state or preferences, and also correlate with the metadata. The other one is a filesystem. Here the filesystem is very simple. The filesystem allows access outside of your workspace folder. I'm not actually using it for that purpose. It's just for demonstration purposes, but there are use cases. If you do not have certain",
  },
  {
    time: 177,
    speaker: "Instructor",
    text: "files living in your workspace and on your local machine, and you want to go into some remote or extended folders, it will allow you to go and get some access. Very useful. It excludes any node_modules and config secrets, which we have configured anyway, but we did not allow them to write. Now I think the code is about to complete. We can see something has been generated here. So I'm pretty sure it will finish very quickly. Now coming back to this particular example, I got the verification from a previous one, and it's very interesting what happened. So we got all these use cases, and we tried, for example, denying the environment file. The agent really denied it. However,",
  },
  {
    time: 227,
    speaker: "Instructor",
    text: "here's the mistake: because the agent can access the command prompt, which means it can actually echo into the env file, the operating system never enforces that. So it is about the model's guarding and model safeguarding, and models are not always updating the safeguarding processes. So that's why this second layer is enforced. This section will help your system protect your environment file and other secret files. You can also manage secrets, your cryptographic files. If there are non-standard extensions and others, you can certainly add them here and improve it. Beyond that point, file protection worked. We saw that, and we validated whether allow and deny both work fine. It can work perfectly fine. Very simple things. We just need to make sure how we are denying, defining, and citing the policies.",
  },
  {
    time: 287,
    speaker: "Instructor",
    text: "What this will help with: it will also help us query the context with better safeguarding, so the model can itself safeguard. Beyond that point, it doesn't have to come to hooks every time. This will explain the behavior of our prompt and our context. Is it well safeguarded? Is it well protected? And if not, then obviously we can modify it. While we still have the hooks and other things to enforce it. Input validation, hook tests, and more. Honestly, I will say go through it. There is a lot to see here. And we have tried our best to apply many permutations and combinations. But let me tell you honestly. No one can apply all the permutations and combinations or all use cases of MCP and hooks.",
  },
  {
    time: 338,
    speaker: "Instructor",
    text: "There are hundreds of them. Let me give you a very simple one. I use, in my real-life project, MCP so before it fires the test tool, I have a hook which resets the database. And after the test completes, it also resets the database. Then the tests in something like Python and other tools can actually run filtered tests or profile-level tests. And based on profile and filtered tests, we can actually send the correct database file or correct SQLite files. That helps to develop more advanced and multi-dimensional, multi-faceted testing strategies. These are the basic use cases of it. But if you run into more advanced needs, you can actually explore far deeper and more meaningful use cases of these enforcement capabilities. Not just for safety and security, but also to combine deterministic and non-deterministic workflow elements. Because the agents are non-deterministic, while the hooks and MCP are deterministic as well.",
  },
  {
    time: 400,
    speaker: "Instructor",
    text: "They work wonderfully together when they are put in a proper workflow that deserves the right output. Now, I don't think that there is much to show here. The best thing is you check this out from GitHub. The link is available in the description, and then try to run it. And I would also suggest: try to write more hooks, try to write more constraints. This is very important to internalize. It's a very important capability that everyone should know. Now let's go back to our presentation and walk it through. So we are back on our presentation. Let's see what happened. Say one of the three global queries that returned zero is instead treated as a dead end, and the agent feels that signal. It thinks it needs a different strategy, and this is what we did. We enforce it to now go via the MCP.",
  },
  {
    time: 451,
    speaker: "Instructor",
    text: "So it opens up other aspects, like any files. Now security has completely been bypassed because it is now looking for the allowed paths, and this is exactly what happened. In one of my personal experiences, I lost something to git rm, which is a very, very unique command to use. It means it's the last thing that the tech and the team actually use when they cannot remove the Git conflicts. But the models do not safeguard against that. They actually use it, and I lost a couple of files because of that. Since then, I have made sure that no matter what, no matter how small the project is, I always put the tech safeguarding in place beforehand and also enforce that every automation should run only",
  },
  {
    time: 498,
    speaker: "Instructor",
    text: "on an isolated or sandbox environment. In this case, the agent assistant then reads the existing hook file, validation script, and MCP configuration before adding anything. Now it is accessing through the MCP, so it is full access, but still the enforcement system is in place, which ensures that any file in that set cannot be accessed. Then run the hook file, the validator script, that blocks barrel imports when they are not allowed, so safety becomes part of the code, not just an assumption of the model. The final part: we pull the unnecessary complexity from the helper logic, even enforcement code should stay minimal, understandable, and easy to maintain, and there is a reason why. The more enforcement you add, the more it will suppress the model's capability, which means the model finds it harder and harder, the model struggles and",
  },
  {
    time: 554,
    speaker: "Instructor",
    text: "becomes harder and harder to explore and discover new content, which means the model will eventually perform worse. So the best part of security is not to over-engineer or under-engineer. The reason security professionals are being paid is to identify the next level of security that we need. So always make sure you start from the baseline. The common mistake is to say perfect from day one. The better approach: go incremental, put a baseline and then keep incrementing, identifying the gaps within your system and fixing them. That's the best way to find a balanced approach. One more thing, hooks can be agent-scoped, and it is a very good idea that certain hooks you develop for different types of agents, and you can actually hook them",
  },
  {
    time: 608,
    speaker: "Instructor",
    text: "in the frontmatter, which ensures that only a limited number of the agents can access some special hooks that you develop, and it does not overreach or reduce the capability of your agents. The create-hook command, the forward slash create-hook command, can also scaffold a new hook for you. It's the best way to actually create a new hook, in my opinion. The Copilot CLI now supports hooks as well. So always make sure that whenever you design your workflow, it works with both modes: Copilot CLI on the command line, as well as the Copilot chat mode, which is inside Visual Studio Code. Next lesson seven, we'll cover surface strategy, the portability matrix, and building the reasoning and context layer. It's one of the very important and interesting lessons, in my opinion. It will provide you further abstraction and further abstract thinking into this process.",
  },
  {
    time: 661,
    speaker: "Instructor",
    text: "Here is my challenge for you: what's the sneaky mistake that an AI tool made in your project? That you didn't catch. How did you discover it? What did you add to prevent it? Now, I already said what happened to me. I lost some code, and then I ensured that I had hooks and I also ensured that I would always sandbox. Share your worst story in the comments, and the best responses I invite to our exclusive live sessions. You would be surprised at how many different incidents have been discussed and shared in these sessions. It will be immensely beneficial. Hit subscribe and enable notifications so you get it as soon as we release the next lesson to your timeline. Thanks for watching, and I'll see you in lesson seven.",
  },
];

export const SURFACE_STRATEGY_TRANSCRIPT: PartTranscriptEntry[] = [
  {
    time: 0,
    speaker: "Instructor",
    text: "Lesson Seven: Surface Strategy. Your team spent weeks on Copilot instructions and agents, and then someone opens Claude Code. And none of that context exists. This lesson fixes that. We will cover which config file each tool reads, how to share knowledge across the tools, and three ready-to-use folder designs. Chapters are in the description if you want to jump ahead. Every major AI coding tool reads a config file from your repo. Same idea, different file names, different hierarchy, different structure. Here is the full picture: nine formats and seven tools. Look at the \"Also Read By\" column. That's the portability story you are focusing on. AGENTS.md is the closest thing to a universal standard. Around sixty thousand open-source agent repos, and proprietary agents, actually use it.",
  },
  {
    time: 57,
    speaker: "Instructor",
    text: "Codex reads it first. Claude Code reads it as a fallback. Cursor picks it up too. Copilot has its own stack. Copilot-instructions.md for the global rules, then scoped instructions with globs, and agents, skills, and prompts, which we already saw in the previous lessons. They complement AGENTS.md. They don't replace it. Here is the core idea: separate what is portable from what is tool-specific. For example, the portable base is your AGENTS.md plus docs. Every tool we use reads that. Put your build commands, tech stack, and conventions there. Tool layers: Copilot gets .github/, Claude gets CLAUDE.md, Cursor gets .cursor/rules/ for its rules. Each of them has only what that tool needs. And you know what's the best trick? Just imagine the object-oriented programming. A CLAUDE.md can follow AGENTS.md and add Claude-only extras there.",
  },
  {
    time: 120,
    speaker: "Instructor",
    text: "Don't duplicate the knowledge. That's the key. One source of truth, not ten replicas per tool. We will walk through a fantastic example just in a moment. But before we get there, why do we need this? That question should come. Why do we need two? Can't we just stick with one? Yes, we can stick with one. Well and good. This stays there. But that's not a practical thing. Different providers develop different kinds of backend capability with the model. For example, Claude Code is good at the long-running sessions, deep session reasoning, while Copilot is a much more balanced approach. It is cost-effective, economical, and also very effective, and has many other models to offer under one umbrella. Codex is brilliant when it comes to backend programming. Cursor is great when it comes to UI.",
  },
  {
    time: 182,
    speaker: "Instructor",
    text: "And the future will always belong to specialized tooling and specialized systems. So we cannot, first of all, rule out that our project would need these more specialized AI capabilities, such as how a regular team has a UI developer, backend developer, database expert, and so on. So we must keep that in mind. The second thing is protecting our own economy and sovereignty. For example, today, when Claude released Opus 4.7, Opus 4.7 is around twice as costly as the previous version. The reason is the tokenization now is different, and it consumes a lot of tokens. Most of my team has gone by quota after two requests there. The potential quota was filled, and now they cannot use anything else. And this is the real issue: what if your organization somehow is banned from Claude? How are you going to migrate all of your projects? So these are the very essential things, that you are de-risking your project from one provider.",
  },
  {
    time: 255,
    speaker: "Instructor",
    text: "And as an enterprise, this should be on top of the list. You should not rely on just one provider. Your goal should be to be capable of working with many, at least two or three providers. Ideally three, but if not three, then at least allocate two, so you can switch between them. Then there is another thing: not every agent or agent system, their backend, their servers, are going to give you one hundred percent availability. We see roughly around eighty-nine to ninety-five percent availability across the different platforms. And that means, what will happen if your system is down and you absolutely need them? You would need an alternate path. So this also gets into the redundancy and capability that your overall team and enterprise would need. And that's why this is absolutely essential for any team to focus on these parameters.",
  },
  {
    time: 313,
    speaker: "Instructor",
    text: "So now let's go, first of all, into Visual Studio Code and see what we have done. So here in our Visual Studio Code, and we got this lesson eight. Sorry, lesson seven, that is Surface Strategy. Let me turn off lesson eight first. Surface Strategy, and you can see I got Claude and I got GitHub. We will keep that simple, simple, so we understand what it looks like. This is a sort of mini solution that we internally use in my companies and my team. We write a wrapper Python file, and the wrapper Python file basically looks for one common project, which is templates, and then the contexts that it would need. So, for example, my context is not duplicated across the Claude or GitHub folders. We write one standardized context in .code.agent. That's our solution folder,",
  },
  {
    time: 370,
    speaker: "Instructor",
    text: "and then we have written all the templates that we would need to output, transformed into agent-specific files. Very simple, straightforward. I have a graph.json that tells us where exactly this context needs to be dropped. It's a very straightforward architecture, and transform.py does this as a wrapper class. Very simple architecture, and let's try to run this. And I'll just go on by transform.py --write. When I write it, it just generates the files again. If you see, this context guards and others, they will ensure that every time Claude or anyone is running, it will just refresh. So no matter what, or no matter where, we update our actual context, it will always propagate either across GitHub or Claude agents and make sure it always remains up to date. So first, we have solved the first problem. The tool-specific files are generated like that.",
  },
  {
    time: 443,
    speaker: "Instructor",
    text: "Then we have the docs. Docs are pretty much common. We follow a baseline process of creating docs, which are easily accessible, by keeping in mind that context is not always discovered one hundred percent. Generally, Claude looks for up to fifty to sixty percent of the code that you provide in a certain amount of tokens in one go. So, if your documentation is, for example, quite large and bulky, it will not work. So it's always suggestible that you make it discoverable. So, always multiple layers of the graph can keep exploring different sets of the context when it needs. So on demand they become available to your process, and this works perfectly accordingly. So, we have managed the tool-specific using an automated process.",
  },
  {
    time: 501,
    speaker: "Instructor",
    text: "We have managed the project-specific using the docs, and docs are also pretty much graph-populated in this tool-specific. So, when they come from an agent, the agent will link to the tool, and then tools will link to this particular doc, and that's how the graph is explorable. However, there is one important aspect: the skills are also pretty much common now in agents like AGENTS .md. In our use case, we recommend using a good skills open-source repo or CLI function, which can offer you the multi-tooling capability where it can enable the skills into multiple tooling folders. For example, here we are using the Microsoft repository called APM, and I have enabled something called Agent Skills Marketplace. So, Agent Skills Marketplace, I'm just searching Terraform agent, sorry, Terraform skills, and yeah, we got a Terraform skill.",
  },
  {
    time: 566,
    speaker: "Instructor",
    text: "So, what I do is, I'm going to install this Terraform skill, and let's see if it comes right now. There is no Terraform skill in Claude or here. Now, let's see, and I'm installing the Terraform skill. And you will see it will automatically propagate the skill into those multiple parts. You can see here it is already integrated into it. So it's very easy for you when you use this common agent CLI which can actually help you to maintain multiple agent standard structures, which will also enable the skills and some other capabilities that agents would need. In a sort of a transparent manner, you won't need to work or worry much about dealing with artifacts within themselves. So this is the overall architecture of how we are managing in our system. And this is pretty much standard across any advanced team.",
  },
  {
    time: 625,
    speaker: "Instructor",
    text: "Most of the enterprise advanced teams actually use two coding agents. So there is one thing we spoke about here: the hooks. In the last lesson we spoke about the hooks and how the hooks actually work for guarding. Here we are ensuring that guardrails make sure that context updates and context availability are always at parity across the tool. That is very simple. If we do not have an automated process that keeps the synchronization between these two folders, or these two coding agents, then they might have outdated references in one of them, which means when we update GitHub it might work in a different way, and when we update Claude it might go the other way. And that is a big, that is one of the risks, especially when we are dealing with a polycode architecture.",
  },
  {
    time: 680,
    speaker: "Instructor",
    text: "Then, when you are dealing with a polycode architecture, the hooks are essential. There has to be the same guarding process, and a process that ensures that the context remains in sync between the multiple coding agents. And that's what I wanted to demonstrate here. There isn't something much on this code that we will run. Previously, we have demonstrated everything in terms of context, how the context discovery works, and everything, and the guardrails. So in the Surface Strategy, I will show basically how we can work with this multi-tooling architecture and multi-tooling structure. This is precisely the end of the demo here. So let's go back on the presentation and understand where we are and how it works.",
  },
  {
    time: 731,
    speaker: "Instructor",
    text: "So the application I showed you is common architecture. It doesn't mean that this is something unique to DevOps. You can use JavaScript or any other simple scripting, scripting logic, to actually build what we have built. We have given a small subset of the tooling that we did. We use the orchestration agent on top of this CLI and our Claude or GitHub CLI in order to control this whole architecture in a more sophisticated way. But if you are not using the orchestration method, then you can still manage with the hooks and other things which will take care of that synergy and synchrony between multiple tools. Here, as a simple flow, everything starts in .code.agent. You can have any name you want, but we gave it .code.agent.",
  },
  {
    time: 782,
    speaker: "Instructor",
    text: "I have /context, API entity, backend rules, frontend rules, testing, everything within plain markdown. That markdown is also parsable by us. So every title in markdown becomes the variable for the template, and we can easily transform the markdown into templates. So you can decide what design, what sort of portability you want, and that's pretty much the flexibility that you have. We got a graph.json which decides what paragraphs and what context will move to what particular location for particular tools. So it's generally a mapping diagram, or I would say a map file, which ensures that the template generates the correct code at the correct file location. It's just a simple knowledge transfer to the right path, nothing more than that.",
  },
  {
    time: 834,
    speaker: "Instructor",
    text: "Templates hold the shell for each output file, the way the output file is supposed to be generated. The placeholders for content, generated notes, and everything are automatically there. And it always works with the correct markdown notices. As a command, between the command sections it replaces the right knowledge and context and keeps the things clean. The transform.py file is basically a script that loads the graph, reads the context files and templates, and writes the final output. Think of this as the compiler step of your context. The script generates Copilot instructions, .md, scoped instructions, agents, skills, prompts, etc. Now here is one advanced step. We also deploy a very powerful localization. So when we actually manage our orchestrator, we do all of the locality-building parameterization to make sure that it captures the content",
  },
  {
    time: 893,
    speaker: "Instructor",
    text: "based on each and every request. Because we do not want to expose an agent request to over- and overflow the context. That's how we actually push our quality of AI coding a little further. You can use this technique to generate dynamic and runtime context. That's a very powerful pattern, especially if you're working with enterprise software that owns millions and millions of lines of code. When you create a subscope or a low-sneak boundary and ask an AI agent to work with it, they actually make far more magical outputs than working with large-scale context and a lot of files because the load, number one, costs us due to more token usage, and number two, more tokens doesn't mean that it will deliver a better output.",
  },
  {
    time: 942,
    speaker: "Instructor",
    text: "More tokens generally mean the inferior outcome and hallucination, and, somewhat I would also say, it could lead to drift as well. So it never touches the roadmap in our case. Some source material also produces AGENTS.md, CLAUDE.md, and Claude rules. One set of facts and multiple native tool outputs. We have the stable two switches. If you're using our example, which is available in GitHub, and the link is available in the description as well, you use switch --write to regenerate, or switch --check to flag whether generated files have drifted or not. We have a very strong deterministic as well as the LLM-based drifting logic, which actually can go into LLM and validate whether context semantically drifted or not, or whether they are differently exploitable, because we also need to make",
  },
  {
    time: 999,
    speaker: "Instructor",
    text: "sure that both sets of context are equally exploitable. There is no point that context exists, but in one tool it is discoverable and in the other tool it is difficult to discover, which will also create a disparity across that. That's how you keep things in sync. We have a nice design to copy. We use all of these three. In our team, some people use Copilot plus Claude Code. I personally use Copilot, Claude Code, and Codex already, the full spectrum. Copilot for IDE completion as well as Copilot for the majority of my daily work. Copilot is one of the most efficient capabilities that exists right now in enterprise terms. Then Claude for terminal work and more advanced and long-term agent-running tasks. We use Codex for a lot of background tasks and also the backend, and the complex programming and reasoning tasks.",
  },
  {
    time: 1057,
    speaker: "Instructor",
    text: "This all has their own capabilities and own strengths, and we use them across our board for what they are best suited for. AGENTS.md is the shared base. Each will get its own layer on top of it. The Design B somewhere is used by our designer team. Cursor and Copilot, they love this. Dual IDE. AGENTS.md is shared and Copilot uses the instructions folder, while Cursor uses the rules folder. Design C is something some of our quant agents and others use, which is AGENTS.md with Copilot and Claude. We added later. We can also add Cursor into that mix. We mostly use Copilot and Codex with our quant, because they really need to have a larger context analysis capability, especially the multi-tool capability of Codex and GPT-5.4,",
  },
  {
    time: 1111,
    speaker: "Instructor",
    text: "and that's where we actually designed these three setups for different kinds of team players who have different needs. And this is perfectly okay, because if we democratize to too low a layer, then the problem is it will become a sort of very difficult context-management process, and if we actually take it very high and make it enterprise-level rocky, then we cannot use that, or this, and everyone needs to use Copilot, et cetera. Then it becomes pretty much handcuffed, because every team and every function, we need some different capabilities to work at best, so it's the right thing to set up, to have two or three setups that can be canonicalized across the enterprise and then enforced accordingly. And then Cursor rules whenever you need to switch, and that's it basically.",
  },
  {
    time: 1170,
    speaker: "Instructor",
    text: "Five rules for the team multi-tool setup. Keep the config short. Under three hundred lines. I said before this point as well: models generally follow one hundred fifty instructions, and this is something coming from my own research for the last two years. It could differ here and there ten to twenty percent, but generally, if you put some constraints in mind in a context, most likely it's not going to be read, and most of the information will be discarded. So the context is very essential to have one hundred to one hundred fifty lines. In a broader term, in tokenified, I say around one thousand tokens is the best place, the best spot. And delegate the code style to linters. Don't put code or coding style into this code, into context. Because linters are deterministic. You can always add just one line towards the end from the hook that,",
  },
  {
    time: 1227,
    speaker: "Instructor",
    text: "like for example, ESLint or Prettier, and then check if anything breaks or not. That iteration is far more positive value and easy to manage, over adding this significant amount of lines and constraints into the context. Then I would also recommend having agent-specific tooling and agent-specific guidelines. The reason is because the common tools generally capture around twenty to thirty percent of the context window itself. Ideally, no agent should have more than five or six tools explicitly defined. And it might come as a shock, that how only five or six tools, because that's where we create multiple agents for specific tasks. It's okay to create ten or twelve agents and manage them compared to allowing thirty to forty tools per agent and blow the context. Just try it and use comments, say thanks to me, how much difference it could make.",
  },
  {
    time: 1289,
    speaker: "Instructor",
    text: "Treat config as a living doc. Wrong instructions cause more harm than none. Review them regularly. Context is your new code. Bear in mind that context is the abstract nature of your coding. So, for example, at this scale of a ten-centimeter, the change in one centimeter of a context will manifest a one-meter distance in your code itself. So this precision engineering is based on context. From a context, a person can just measure a small one-centimeter block from point A to point B, and that will decide how much distance on a projected line within the code it should travel, and that's where the abstract thinking comes. The abstract thinking is all about developing appropriate context. Now the final, the last point, we will cover the operating model, and this is where exactly we will discuss",
  },
  {
    time: 1345,
    speaker: "Instructor",
    text: "what should be the operating model across the team when you are having the shared decks. When you are having the enterprise-ready, enterprise, the common architecture, common design patterns, common design guidelines across the enterprise, and how to design the operating model for individual small projects and the enterprise projects. These are the very essential aspects to make the coding or system development successful. Then the second question which is common across everyone is calling that IDEs are dead. I beg to differ. IDEs are not dead. IDE or CLI, don't pick one, use both. IDE, like Copilot, offers suggestion. Real-time completion, visual diffs, inline feedback, great for writing functions, fixing bugs, tweaking components. There is a lot that you can get from IDE. Do not write them off. Designers really need that tab ability.",
  },
  {
    time: 1408,
    speaker: "Instructor",
    text: "The CLI agents like Claude Code or GitHub CLI, they're perfect for delegation and summation tasks, or bootstrapping the project. They describe a goal and walk away and come back to a commit. That's great for refactoring, migration, cross-file audits. To me, on a CV, if I share some of the internal data that I gathered in my team, how it behaves, we have around sixty-five to thirty-five percent between the IDE and CLI, and we are a very much AI-centric team. We got most people who were natively AI scientists, but still we use IDE not because we can't use CLI, but because the IDE has far more offering than CLI itself in many use cases. So that argument of IDE versus CLI is pretty much on a case-by-case basis.",
  },
  {
    time: 1459,
    speaker: "Instructor",
    text: "What we want to achieve. The table shows when which particular use case: frontend work may be IDE. If you don't need UI, maybe DevOps may be CLI, maybe something like that. But one warning: CLI agents produce code far faster than you can review it. IDE's one of the core benefits is progress as you review, and that's the real friction. Because as a team, I have also noticed in my subordinates and my colleagues that CLI can generate a lot of code, but it's very difficult to review and maintain that code. So set session limits, review in small batches, and ensure you develop the best practices between the CLI and IDE, and also understand what are the limits in terms of team capability, especially when it comes to post-code generation or post-code generation validation.",
  },
  {
    time: 1515,
    speaker: "Instructor",
    text: "IDE reviews. That wraps up lesson seven, the Surface Strategy. Does your team use multiple AI tools? What's in your AGENTS .md? Drop your setup in the comments and subscribe and turn on notifications so I can see you in lesson eight, and bye-bye.",
  },
];

export const OPERATING_MODEL_TRANSCRIPT: PartTranscriptEntry[] = [
  {
    time: 0,
    speaker: "Instructor",
    text: "Over the last seven lessons, we have built the full toolkit: layered instructions, planning and implementation workflows, skills, MCP, hooks, and surface portability. Today, we need to zoom out. But the important question: How do you keep all of that alive as your team and the codebase evolve? That's the million-dollar question. All the good teams do everything we discussed up to lesson seven. But the great enterprise teams also do not let the focus go away from lesson eight, and that is the governance and operating model. That will ensure that as long as your project lifecycle runs, your context and your AI assistants remain active and embedded properly in your processes. The operating discipline is a continuous cycle, not a one-time checklist. Use the context to measure where the AI fails, especially where it fails repeatedly.",
  },
  {
    time: 74,
    speaker: "Instructor",
    text: "That's where the context is thin or missing. If you were to check periodically, where do you manually correct the AI output? Context is stale or wrong. Update where it's stale, validate every change, repeat. Three measurement signals are important, as far as I am concerned. Look first: where does the AI fail repeatedly? That is where the context is missing. The second: where do you manually correct your output? That's where it is stale. And the third: do different team members get inconsistent behavior? That's very important and mostly overlooked. That means the guidance is kept in personal memory instead of a shared file. Remember, if member A generates the perfect output but member B is not able to, which means member A's manual prompt has some information that member B does not have, and obviously the shared context does not have it either.",
  },
  {
    time: 148,
    speaker: "Instructor",
    text: "And that is a big concern for AI assistant teams. And that's something that always needs to be properly managed with updates and files. The anti-patterns which I would certainly recommend you watch: context dumped into one giant file. Stale references, deleted APIs, over-privileged agents with every tool enabled. Relying on memory instead of a version-controlled file, and obviously overengineering from day one. One important caution, which I like from Martin Fowler. Despite the name context engineering, trust me, it isn't really engineering. The execution depends on LLM interpretation. It's not deterministic. So thinking in probabilities is actually the attitude everyone needs to develop. Choose the right oversight for the job, and that's the key to success. That's pretty much a wrap-up of lesson eight.",
  },
  {
    time: 215,
    speaker: "Instructor",
    text: "We are not deep-diving into how to operationalize using service principles and many other things. This is a very deep topic. We can go on and create another occasion to discuss how to do governance, especially when AI is involved. So I'm going to keep this for some other day, but I'm sure I will come back with a similar tutorial series on operating procedures. However, until then, I think I'll leave that up to you. We are smart people. We'll always work it out. But share back with me, so I can also learn a bit here and there. The operating model comes down to two things: the governance scale with your team, and a continuous cycle of measure, review, update, and validate. In the comments,",
  },
  {
    time: 268,
    speaker: "Instructor",
    text: "tell me what's your team's biggest AI tech governance gap that you have identified so far. Best answer, and you get one-to-one time in a live session with me, and I would love to hear all you have done, and also love to share what I have learned. Subscribe and turn on notifications, and thanks for watching. It's one of the shortest ones, and it doesn't have any example to walk through. But one of the most important ones, and then I'm going to see you in the capstone, lesson nine, where we wrap this whole series. I'll see you then.",
  },
];

export const AI_ASSISTED_SDLC_CAPSTONE_TRANSCRIPT: PartTranscriptEntry[] = [
  {
    time: 0,
    speaker: "Instructor",
    text: "Lesson nine is a capstone. Four exercises. One repo. If you're following along, get the GitHub example link from the section below. You've already seen the pieces: context, planning, implementation, guardrails, and maintenance. Now all you need is to run the loop end to end. Start with the context layer, with the docs and the repo map, and remove the guesswork. If the agent can explain the notification flow from docs, you already have the foundation right. Second thing, please don't worry if I'm running too fast on this slide. The detailed example documentation is available as Markdown in the GitHub repo. We'll walk through it toward the end of this slideshow on the codebase. So I'll show you everything we've set up, and what you can do to recreate it. Now for the planning phase. Before the code, the prompt must return a plan, not TypeScript.",
  },
  {
    time: 61,
    speaker: "Instructor",
    text: "Test it with the right prompting. If it writes code, tighten the prompt. Next, let the planner write the spec, let the tester write the failing test, and let the implementer make it pass. The feature is audit logging for your preference changes. Now add the criteria: block the missing audit, block the new rules without tests, and then record your context inventory. So you can maintain it. That's the loop: curate, plan, build, and validate. Now, please get the GitHub example repo from the link. Star it. We appreciate that, and watch it for updates on GitHub. We will keep adding more and more examples for everyone's benefit. Now let's quickly walk through the GitHub code. We are in VS Code, and this is the example layout. Example nine has some context ready, and the documentation ready for you.",
  },
  {
    time: 118,
    speaker: "Instructor",
    text: "There will be some missing links. That's the idea. You will find them and fix them. Not a lot. Exercise one is available here. What are you supposed to do? There is sufficient information, and the objective is given. Exercise two is given. Exercise three and exercise four. All those exercises are in sequential order. That means, you cannot jump between exercises. Getting exercise one right is the prerequisite for two. Getting two right is a prerequisite for three, and the same applies to number four. Your core objective is to get one to four right, without failing once. Once you get that, you have completed the loop on a real-world example, with real-world experience. How to move from setup to guardrails. That will internalize the workflow. It is possible you will not get it the first, or second, or even third time. The whole idea of this exercise is to keep repeating it. Even if you manage one to four in one go,",
  },
  {
    time: 189,
    speaker: "Instructor",
    text: "do it a couple of times. The reason is, you will find better ways to do it again and again. And that's the whole idea of internalization. AI-assisted programming and engineering are essential now. Without that, everyone will struggle. So make sure you put enough effort and time into this base skill. This is pretty much a core skill. That will allow people to build further skill on top of it. Getting it right, with the correct understanding, is essential. And this will make sure it happens. So let's go back to the presentation and conclude the whole course. So we are going back to the presentation. GitHub repo, everything I have already described, and I thank you, and I want you to give us a star there as well.",
  },
  {
    time: 245,
    speaker: "Instructor",
    text: "So that's the capstone. Get the GitHub repo, and get it on. Subscribe to LocalM Tuts, and I'll see you in some other course. Thank you.",
  },
];