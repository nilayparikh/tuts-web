// Source-backed from courses/_archived/content/ai/agents/agent-design-patterns/mono/*/*.srt
import type { PartTranscriptEntry } from "./types";

export const AGENT_DESIGN_PATTERNS_TRANSCRIPTS: Record<string, PartTranscriptEntry[]> = {
  "need-for-agent-patterns": [
    {
      "time": 0,
      "speaker": "Instructor",
      "text": "Taking an AI agent from project to production takes more than better prompts. It takes standard design patterns. Without them, teams build systems that usually break at scale. Standard patterns give teams a shared language. Fifteen years ago, microservices did the same thing for software. Today, agent patterns are doing that for AI. Right now, those patterns keep agent behavior consistent. They catch problems before you write the code."
    },
    {
      "time": 31,
      "speaker": "Instructor",
      "text": "Sequential gives you a fixed order, which matters in regulated fields like finance, healthcare, and others. Interoperability matters too. Protocols like MCP let agents from different vendors talk without custom wiring. The Agent-to-Agent protocol is new, but it's already production-ready in many cases. It sets the rules for how agents can have conversations. Scalability matters too. It's easier to run hundreds of focused agents with a coordinator than one giant agent that tries to do everything."
    },
    {
      "time": 68,
      "speaker": "Instructor",
      "text": "When teams skip patterns and write custom logic for every agent, three problems show up. The first one is the monolith trap. Teams build one giant agent. It has every tool, and that leads to token bloat. Instructions start fighting for space. The model gets confused, slow, and expensive. That's a perfect breeding ground for hallucinations. It forgets the earliest steps in a long workflow. The second problem is cascading failures. One hallucinated fact spreads silently through the system."
    },
    {
      "time": 105,
      "speaker": "Instructor",
      "text": "Without a Loop and Critique pattern to catch it, a small data error can corrupt financial records or trigger the wrong customer action. The third risk is agent sprawl, or what many teams call shadow AI. Without a standard, developers leave orphaned agents running in production. Those agents still access sensitive data, or they mimic part of a process. Nobody owns them. That becomes a security, compliance, and productivity problem, and it quickly turns into a liability."
    },
    {
      "time": 145,
      "speaker": "Instructor",
      "text": "AI tech debt is worse than normal tech debt because agents take actions, not just produce messy code. The rewrite cost is huge for agents. Industry reports from 2025 and 2026, especially around governance, show that teams starting with a low-ceiling framework hit a wall within six months to a year. Moving to standard patterns later means rewriting almost 50 to 80 percent of the code. That's maintenance drain. Without patterns, engineers spend time fixing"
    },
    {
      "time": 185,
      "speaker": "Instructor",
      "text": "brittle if-else logic and retrying the same steps instead of building features. And here's why regulatory engineering matters too. For example, if you're in the EU, the EU AI Act says that if your AI can't show how it made a decision, fines can reach up to seven percent of global revenue. That still sounds far off to some teams, but it already exists in compliance text. Ad-hoc systems rarely have the logging to pass those audits. These aren't just theories."
    },
    {
      "time": 222,
      "speaker": "Instructor",
      "text": "Squirro's 2025 report found that 40 percent of agentic AI projects fail, mostly because teams lack a unified architecture. Mario Thomas made a similar point in 2025. He argued that tech debt can turn into an advantage only if you standardize the architecture. That article got real traction in the industry. Other strong articles made the same case. They all point back to the same conclusion. The evidence is clear. Standard agent patterns aren't optional for production."
    },
    {
      "time": 268,
      "speaker": "Instructor",
      "text": "Next, we'll see why there are exactly six patterns, not five and not seven. We'll walk through each one before we close out the series. Thanks for watching. Make sure you like, subscribe, and pin the playlist. There's more interesting material coming next. I'll see you in the next video."
    }
  ],
  "why-six-patterns": [
    {
      "time": 0,
      "speaker": "Instructor",
      "text": "Six patterns, not five, not ten. Six. In this video, we'll prove why six compositional patterns cover every enterprise use case we've talked about so far, and why adding a seventh would be redundant. These six patterns map to five orthogonal control-flow axes. It's a similar architecture principle to what you see in messaging systems, distributed systems, and enterprise application integration. Here the axes are execution order, concurrency, iteration, delegation, and complexity."
    },
    {
      "time": 39,
      "speaker": "Instructor",
      "text": "Delegation then splits into two choices: coordinator and agent-as-tool, based on state control, and output control, while complexity gives you the atomic-versus-composite distinction that starts with the single agent. Adding a seventh pattern would most likely duplicate an existing axis, or be a composition of two patterns that already exist. Now let's quickly go through a couple of case studies and make this concrete. The actual systems are far more complex than what we present here, but this gives you the idea."
    },
    {
      "time": 79,
      "speaker": "Instructor",
      "text": "The first system I'm going to show is basically a portfolio manager system, an agent system, that provides continuous validation while the portfolio manager handles the analysis through deterministic and non-deterministic approaches. It runs many deterministic quantitative agents behind the scenes, while the LLM makes higher-level choices about how to route decisions and how to choose the correct risk model. The risk model and the design are both verifiable and reproducible."
    },
    {
      "time": 116,
      "speaker": "Instructor",
      "text": "But the LLM adds something very important, which is dynamic decision-making, while still allowing a thoughtful manager to remain in the human loop. And this implements all six patterns, as you can see. Here we see all six patterns, from market data to trade execution: parallel, sequential, loop and critique, coordinator, agent-as-tool, and single agent. This is a perfect industry example that shows how complex systems can still be designed with these six simple architecture patterns."
    },
    {
      "time": 154,
      "speaker": "Instructor",
      "text": "We don't need additional primitives, because compositions of one, two, or more patterns give us any agent design we are likely to need. The same implementation works for a purchase department, or for e-commerce, where it can help teams make the right decisions about market conditions, timing, raw-material purchases, and upstream dependencies. The same idea also works in healthcare, where it gives teams a strong human-in-the-loop"
    },
    {
      "time": 194,
      "speaker": "Instructor",
      "text": "decision system based on parallel agents that can make 70 to 80 percent of decisions autonomously. So the bottom line is this: each one of these categories could be a one- or two-hour workshop on its own. But what we show here is the power of composing these design patterns. These patterns don't need to stand alone. They compose together to cover any use case or larger business process we are anticipating. Agentic AI is really about translating the business process, what we used to call BPM, into agentic AI BPM,"
    },
    {
      "time": 236,
      "speaker": "Instructor",
      "text": "then adding the right agent actors where needed. These six agent patterns generally cover all the use cases we are likely to need in a real architecture. When someone proposes a seventh pattern, apply this test: does it introduce a new control-flow axis? Or is it already covered by one of the six we just discussed? Or is it a composition of two patterns that already exist? Map-reduce is parallel plus sequential aggregation. A retry agent is basically loop and critique with a pass-through predicate."
    },
    {
      "time": 273,
      "speaker": "Instructor",
      "text": "A hierarchical multi-agent system is a coordinator with nested coordinators. A supervisor-worker pattern is either coordinator or agent-as-tool. It depends on state ownership. Do we want to pass ownership to the specialist agent, or do we want to keep ownership with the primary agent? Every proposed seventh will most likely collapse into these existing six primitives. So let's make the decision process practical. If you have a new agent architecture problem, start here."
    },
    {
      "time": 307,
      "speaker": "Instructor",
      "text": "This helps in most cases. First question: can a single agent with tools handle the entire task? If yes, you're done. That's a single agent. Straightforward task, one agent, model-driven execution, and tool orchestration where needed. If one agent is not enough, ask: do the steps require a defined execution order? If yes, the dependency pipeline moves through shared state. That's the sequential agent. Do you have independent subtasks? If not, sequencing is what you need."
    },
    {
      "time": 340,
      "speaker": "Instructor",
      "text": "If subtasks are independent of each other, then the answer is a parallel agent. Does the output need iterative refinement, based on quality criteria? Then your choice is pretty straightforward. It's loop and critique. Refinement means generator plus evaluator in a bounded action loop. Now, do you need dynamic routing? If refinement isn't the issue, but you need dynamic routing, then you decide where the state should live. Do you want to control the state, or do you want to pass the conversation flow,"
    },
    {
      "time": 383,
      "speaker": "Instructor",
      "text": "and that decides it. If you want to own the state, that becomes the coordinator. The coordinator delegates and transfers state, and now the specialist takes over the conversation. If you don't need specialist-owned state, and you want to keep state with the primary agent, then agent-as-tool is the right pattern. The primary agent calls the specialist, gets the result, and keeps orchestrating. Six patterns and five control-flow axes. That gives you infinite compositions. That is the agent architecture toolkit."
    },
    {
      "time": 428,
      "speaker": "Instructor",
      "text": "Start with the decision tree, then decompose your flow. Nest patterns until the architecture matches the problem. However, I do want to leave you with one practical piece of advice. This comes from my one and a half to two years of experience with agentic AI, spanning across multiple domains: simple is better. Agentic AI complexity can spiral up very quickly. So design discipline and standardization matter far more than any buzzword discussion we may have in conventional software engineering."
    },
    {
      "time": 467,
      "speaker": "Instructor",
      "text": "Agentic AI amplifies complexity, and it can spiral up very quickly, to the point where managing the complexity and the existing system becomes very difficult. It can also lead to surprisingly high levels of technical debt. So the best advice I can give is this: keep it simple, focus on a finite set of patterns, master them, observe them well, design them well, and make better decisions. That is the key to agentic AI success. As we sometimes say in markets, profit is a byproduct."
    },
    {
      "time": 508,
      "speaker": "Instructor",
      "text": "The real product you are after is risk management. And I would put that exact same statement in the context of agentic AI architecture. Productivity and value are the byproducts it gives you. Risk management is what you are really after. So happy coding, and happy agentic AI coding. Make sure you subscribe and follow this playlist. I'll probably add one or two ad hoc videos based on a couple of other edge cases that are still yet to be recorded. And thank you very much. I'll see you in the next video."
    }
  ],
  "single-agent": [
    {
      "time": 0,
      "speaker": "Instructor",
      "text": "Your first agent should be one agent, not five. Most teams start way too complex when a single agent with a few tools does the job in a tenth of the code. In this session, you'll see what a single agent actually does. Where does it shine, and what are the signals that you should look for to decide when to move on to a better and more complex pattern. Let's understand using a very simple example. A user asks for a trip plan. No routing layer, no orchestrator, no pipeline. Just one agent that owns the whole thing."
    },
    {
      "time": 37,
      "speaker": "Instructor",
      "text": "The trip plan agent reads the request, picks the tools to call, and the LLM controls the path. Not your code, because it's not deterministic. That's what makes it a true single agent. The agent calls search_attractions first this time, but here's the key: What about next time? It might call weather first, or it may call restaurants. The model decides, and that decision can change based on inputs or from run to run under different circumstances. Now it searches for restaurants. You didn't tell it to do this second."
    },
    {
      "time": 73,
      "speaker": "Instructor",
      "text": "It just decided, and that's the point for flexibility. It's a straightforward task, where data gives you context that reshapes your whole plan. For a trip plan like this, the one agent is all you need. It can ship fast, iterate fast. The agent combines everything into the one plan. Minimal wiring, fast iteration, and that's the payoff you are after. But here is the cost. If the task gets more complex, you slowly start losing control over the order and execution."
    },
    {
      "time": 106,
      "speaker": "Instructor",
      "text": "That means the reliability starts dropping. So why go with this architecture? Because it's efficient. Five to ten lines of config, LLM plus tools. Whatever the request you throw at it, not many code changes are required. If you want to add a new capability, just register the tool. No pipeline to restructure. For a straightforward task, this is genuinely all you need. So let's understand in practical terms how does it work. And after that we'll see the same stuff. And the server is already running."
    },
    {
      "time": 143,
      "speaker": "Instructor",
      "text": "So we've got a server, we've got a client, and we're ready to run the whole example. And the code is tagged in GitHub, and the link is available in the description. The server is already running, so we're just going to run the client. And we'll see the print here in the client. So let's discover the agent and watch what it does. It will go for two queries, and it is connecting using a local Ollama. So we have our response, and you can see it's pretty much doing different tool calls"
    },
    {
      "time": 183,
      "speaker": "Instructor",
      "text": "to meet our attraction needs for it, and it was just using Ollama for the LLM purposes. So let's go back to our presentation there. Now here is where it breaks: your instructions become too complex in terms of tokens, in terms of reasoning for the LLM to focus, and it starts conflicting with the guidelines that you provide. So in that case, you need to look for a more complex agent pattern, which can break the reasoning apart and allow the LLM to excel at its best ability."
    },
    {
      "time": 223,
      "speaker": "Instructor",
      "text": "And at that time you might want to move from this simple method to a little bit more complex one, which can handle the complexity of the different tasks. The other thing that I would look for is input consistency. So when you provide the same input for a couple of times, and you see the tool calling, you see the tool-calling sequence and the unreliable order of execution becoming inconsistent, then I think it's a very good time to understand that we might need a more complex pattern to handle the task."
    },
    {
      "time": 262,
      "speaker": "Instructor",
      "text": "The third one which I look for is the same thing in a slightly different way. When it starts to skip, when it starts repeating the same errors again and again by skipping multiple steps, and letting the error compound. And that's when you say yes, it is time to go for a pattern upgrade. And this is where you then decide which next pattern might be the best use case for yourself. So that's the single pattern. It's very simple. One agent, multiple tools, model calling the shots, and it's the right default."
    },
    {
      "time": 302,
      "speaker": "Instructor",
      "text": "To start with agentic AI, this is where you always should start, in my opinion. Until you find a reason that you need a more complex solution. So in next videos we will cover other patterns. Six or seven patterns we are covering in this series. So please make sure you look for the playlist where you can find all the recordings. And I'll see you in the next one."
    }
  ],
  "sequential-agent": [
    {
      "time": 0,
      "speaker": "Instructor",
      "text": "A single agent handles everything, but it can't guarantee execution order. When step two depends on step one's output, that unpredictability becomes the real problem, and the sequential pattern exists by hard-wiring the pipeline. And you're about to see exactly how. Let's understand using a very simple problem. A trip request comes to the orchestrator. Unlike a single agent, this one doesn't decide the order, it enforces it. Every single time, no variation. Here's the thing, the orchestrator isn't even an LLM,"
    },
    {
      "time": 40,
      "speaker": "Instructor",
      "text": "it's a workflow primitive that just walks through some agents. In the particular given order, the food finder always first, the transport agent always second, that's the determinism, and that's the whole point. Without knowing what restaurant we are visiting, we cannot plan our transport, and that's the whole idea of sequential. So the food finder goes out and searches for restaurants matching your criteria. Now here's a critical detail, it writes the output to the session state using an output_key."
    },
    {
      "time": 79,
      "speaker": "Instructor",
      "text": "That's how the data gets to the next stage. The transport agent picks up the original request plus the food result from the session state. It's in the instruction as a template variable. In this stage, food_results, and the framework swaps that placeholder with the real data before the LLM ever sees that. The orchestrator assembles the final trip plan. Once both specialists are done. Predictable, traceable, and reliable, but you can't skip steps or reorder at runtime, and that's the trade-off."
    },
    {
      "time": 118,
      "speaker": "Instructor",
      "text": "So what do you get, in simple words? Deterministic execution, same input, same path every time, observability. You can trace exactly which stage it runs, what it wrote, where it wrote, and focused prompts. Each agent gets a tight, narrow instruction instead of its own bloated mega-prompt. There are many good examples we can think of, such as loan applications, governmental processes. They all do deserve sequential execution. However, there are many use cases where a simple agent could be sufficient."
    },
    {
      "time": 163,
      "speaker": "Instructor",
      "text": "But a sequential agent does provide certain guarantees over a single agent. Let's see that in practice. So here I've got this in VS Code, and I'm going to execute a simple example. The server is already running. So this is our sequential agent server, which is for food finder and transport, and handled by the orchestrator. And the client is going to call the code for this particular example available on GitHub. You can clone this folder and try it yourself. So I'm just running a client, and it's going through."
    },
    {
      "time": 210,
      "speaker": "Instructor",
      "text": "Well, that's finished. So based on what we want, it identified the food recommendation and based on that, it has just come back with some transport plan. By the way, this is just to demonstrate a pattern. So it's not a full-featured example that someone can use straight into a traveling website. However, this is a very good stepping stone to understand the pattern and then build on top of it. The current example uses Ollama."
    },
    {
      "time": 255,
      "speaker": "Instructor",
      "text": "It is a very minimal LLM, just to demonstrate and understand the learning pattern and its purposes. But here's the cost. The pipeline runs every stage every time, even if this step isn't needed for a particular input. There is no branching. It's A, B, C, not X, then Y, etc. In that kind of routing, you need a coordinator, and the latency and total time is the sum of all stages with no overlaps. If your substeps are independent and speed matters, maybe parallel is a better fit."
    },
    {
      "time": 303,
      "speaker": "Instructor",
      "text": "That's the sequential pattern in its nature: deterministic, observable, reliable, and it costs you flexibility and speed. Next time we'll see parallel agents, where you can trade the strict order for concurrent execution on independent subtasks. Thank you."
    }
  ],
  "parallel-agent": [
    {
      "time": 0,
      "speaker": "Instructor",
      "text": "Three independent research tasks: sequential will take 12 seconds, parallel might take 4. The parallel pattern trades strict ordering for concurrent speed. And you're about to see exactly how fan-out and fan-in work. Plus, there is one constraint that I would like to make sure we remember when processing in parallel. Let's understand using a very simple example. You send a market research query, which requires cloud computing trends to be analyzed, competitor positioning, and developer sentiment to be analyzed."
    },
    {
      "time": 38,
      "speaker": "Instructor",
      "text": "Totally three independent research tasks kicked off from one query. The ParallelAgent fires all three branches at once, no waiting for anybody. They all are running concurrently, so what you have to look at is the slowest branch, not the sum of all three. The Trends Analyst focuses on market trajectory. It figures out adoption rates, growth segments, emerging technology, any trends, everything. Whatever it finds goes into session state, and then let's say that becomes trends_output."
    },
    {
      "time": 73,
      "speaker": "Instructor",
      "text": "At the exact same time, the Competitor Analyst is mapping the competitive landscape, market share, features, pricing, it doesn't need anything from the trends branch. Completely independent. And the Sentiment Analyst is evaluating developer concerns, such as community activity, satisfaction, pain points. All the three branches and the prompts are running at once. Now here is the fan-in. The SequentialAgent reads all three output keys from session state,"
    },
    {
      "time": 108,
      "speaker": "Instructor",
      "text": "which are trends_output, competitor_output, sentiment_output, and synthesizes them into one report. The ParallelAgent will give you the speed, the SequentialAgent will give you the merge. The final report will synthesize from all the tracks, combining them into one structure, and then total latency: The slowest branch plus merge. With three branches, let's say each takes four seconds - that's eight seconds instead of twelve if we process sequentially."
    },
    {
      "time": 142,
      "speaker": "Instructor",
      "text": "It's a very simple math: three branches, four seconds, twelve seconds for sequential, and this is the slowest branch plus merge, which is eight seconds for the parallel. Now, bump it to five branches, and the saving would be even more. So why parallel? Speed. Your total time is just the slowest branch, not the sum. And the scalability - you can virtually scale to any extent, any level. And understanding the latency - the slowest branch plus merge - that's always going to be the static part."
    },
    {
      "time": 182,
      "speaker": "Instructor",
      "text": "And more importantly, isolation: one branch failing does not take other branches down. That's one of the core benefits of parallel. And here's the one hard design rule. Parallel processing cannot break that, and that is: all the branches must be independent. If Branch B depends somehow on Branch A, then you don't have a parallel problem. You've got a sequential dependency, not a parallel pattern. Beyond that, watch out for resource contention. Also, rate limited API could be difficult."
    },
    {
      "time": 223,
      "speaker": "Instructor",
      "text": "If the large number of the branches, or the significant number of the branches, has to fan out, In a very quick succession, merge complexity is also the area that parallel processing should look for. And especially when the output conflicts, how the conflict resolution should take place, and also the debugging is likely comparatively more complex than sequential processing. But despite that, parallel has its own value and merit. So now let's see it in action with Visual Studio Code and see how it works."
    },
    {
      "time": 266,
      "speaker": "Instructor",
      "text": "So I'm gonna move to Visual Studio Code and let's see. I already got the server up and running, and all I'm gonna do is I'm gonna type out the prompt for the client and I'm just gonna fire the client. It says we've got an Ollama local model running and we're just continuing with our example package, which is the trip planner. We are trying to plan a trip with the concert, museum, and restaurant finder, and we're using the A2A protocol to connect with all"
    },
    {
      "time": 303,
      "speaker": "Instructor",
      "text": "three agents. There are three agents and an orchestrator running inside the server, and it's now synthesizing. So let's see. So we need the San Francisco one, if I'm not wrong. Yes, San Francisco is here, and it defined our itinerary based on what we asked for. We asked for restaurant, it is dinner and lunch, and we asked for museum, and we also asked for concert, and it did pretty well. And the same thing in terms of museums. So we also asked for another query, so I'm going"
    },
    {
      "time": 342,
      "speaker": "Instructor",
      "text": "for Tokyo, so that gives me something extra. So it works pretty much as anticipated. That's a parallel pattern. Now, two independent branches fan in with the merger, and that lets you see why it can do more. Together with single and sequential, now you've got three building blocks that cover most real-world agent systems. Before you ever need coordinators and loops, just one prototype probably can do more. In my experience, most real-world agent AI are within the realm of single agent,"
    },
    {
      "time": 382,
      "speaker": "Instructor",
      "text": "parallel agent and sequential agent. It provides the complete DAG architecture. And then there are only very specialized use cases where coordinators and loops are required. The simpler the solution is, the better for manageability and overall performance of AI systems. Unless we need it, there is no point extending and living with complex AI architecture, which generally tends to be more difficult to maintain and manage. for desired results and outcomes in future,"
    },
    {
      "time": 419,
      "speaker": "Instructor",
      "text": "that's my overall observation in the last couple of years since I'm working with agent AI. So thank you very much for tuning in, and I expect to see you in next videos. Please make sure you subscribe and also save the playlist because we have an upcoming more agent AI patterns video in this particular playlist. Thank you very much, and I'll see you in the next video."
    }
  ],
  "coordinator": [
    {
      "time": 0,
      "speaker": "Instructor",
      "text": "Your multi-agent system grew around a pile of if-else trees. Every new specialist means more branching, more edge cases, and more maintenance. The coordinator pattern replaces all that with one LLM routing call. Over the next five minutes, we'll see how it works, how to design descriptions for accurate routing, and what to check when routing goes wrong. Let's start with a simple question. Static routing, if-else trees, regex, keyword matching, we all know that. It works fine with two or three specialists."
    },
    {
      "time": 37,
      "speaker": "Instructor",
      "text": "It fails when you grow to ten. Every new domain needs more branching logic, and overlapping vocabulary creates ambiguous routes. The coordinator replaces all of that with one simple LLM-based dispatch. The LLM reads the agent descriptions and makes the routing call at runtime. Let's understand it with a simple example. A travel question comes in. It could be about food, transport, or budget. The challenge here isn't quality or speed. It's routing. Which specialist should handle this particular request?"
    },
    {
      "time": 74,
      "speaker": "Instructor",
      "text": "The coordinator reads each specialist description for you and uses the LLM to figure it out, where the query belongs. The framework generates a transfer function for all those agents, and the LLM comes back with the target agent name. No keyword matching, no regex. The LLM makes the routing call. If it's a restaurant or dining question, it transfers full control to the food agent. The specialist owns everything from that point. It keeps the state and responds completely independently."
    },
    {
      "time": 109,
      "speaker": "Instructor",
      "text": "A transport question goes to the transport agent. And here's the most critical detail: description engineering, the way you describe each agent. A vague description like handles various tasks is pretty much a recipe for misrouting. A good description is very specific about the domain, names the query types it handles, and clearly marks the boundary. Those descriptions are actually part of the routing prompt. Budget queries go to the cost agent, and here's what's great about it."
    },
    {
      "time": 145,
      "speaker": "Instructor",
      "text": "Adding a new specialist requires pretty much zero routing code changes. All you need is a new agent and a description, and then the model can route to it. You define the agent, give it a clear description, and add it to sub_agents, and the coordinator starts routing to it automatically. The specialist generates the final response. The coordinator just dispatches. It never synthesizes. That's the key distinction from agent-as-tool, where the primary agent actively combines results from multiple specialists."
    },
    {
      "time": 180,
      "speaker": "Instructor",
      "text": "Here, it just routes. Before we get into trade-offs, let's understand it by running an example. The link is available in the description for the GitHub repository. So let's go and see the real example. I'm on the server that's running here, and the server has all the sub-agents up there, and I'm just going to run the client. It will send three queries. The first one is for restaurants, the second one is about public transit, and the third one is about the cost of a trip to Paris."
    },
    {
      "time": 217,
      "speaker": "Instructor",
      "text": "So let's see. Query one is: what are the best restaurants? And by the way, for this example, I'm just running Ollama locally. So the first one comes back, and the second one also comes back. The first one routed to transit. The second one, I believe, is... sorry, let's look at transit. The first one, yes, transit scoped correctly. But that's the point. It routed the second one via transportation and provided an answer. Query three routed via the cost agent, and it also provided an answer."
    },
    {
      "time": 258,
      "speaker": "Instructor",
      "text": "So anyway, it just did what we anticipated. So now let's go back to our original trade-offs. The big win is flexibility. Adding a new specialist needs zero routing code changes. The cost is an extra LLM call for every request just for routing. But bear in mind, it's non-deterministic dispatch. For ambiguous queries, that might be a problem. For some use cases, dynamic dispatch or non-deterministic routing might be an issue, sure, but in most cases, it shouldn't be a deal breaker."
    },
    {
      "time": 295,
      "speaker": "Instructor",
      "text": "And if it is, then this may not be the pattern for you. When routing goes wrong, you can check three things to start with: overlapping descriptions, which is the most likely problem here. If the agents have ambiguous or overlapping descriptions, this can make the LLM give you inconsistent responses and routing. Then check for a missing agent in the coordinator instruction, and then inspect the LLM trace to see what's going wrong with those LLM calls."
    },
    {
      "time": 328,
      "speaker": "Instructor",
      "text": "These are the three places I would always start if I found any problems. That's the coordinator pattern in a nutshell. Static routing dies. The LLM dispatches. Your agent descriptions become your routing code. Design them carefully. Remember the three checks I mentioned. And remember one thing: the coordinator dispatches. It doesn't synthesize. That's the USP of the pattern. Next up, we'll discuss agent-as-tool, where the primary agent keeps full control, and you'll see that in the next video."
    }
  ],
  "agent-as-tool": [
    {
      "time": 0,
      "speaker": "Instructor",
      "text": "Your coordinator agent delegates to specialists, and you lose all control over the response. The specialist runs its own tools, generates its own output, and the primary agent never sees the intermediate results. Agent-as-tool flips that model. Over the next five minutes, you'll see how it works, when to use it instead of a coordinator, and why the synthesis step matters. The coordinator pattern, which we saw in the last video, transfers full control to a specialist."
    },
    {
      "time": 34,
      "speaker": "Instructor",
      "text": "It works great when that specialist can handle the complete result on its own. But when your response needs output from multiple domains, in our case food, transport, and nearby attractions, you need the primary agent to see everything and drive the sequence. Agent-as-tool keeps the orchestrator in control while still using specialist capabilities. In a simple example, you ask for a trip plan: restaurants, transit, and nearby attractions."
    },
    {
      "time": 65,
      "speaker": "Instructor",
      "text": "That's a multi-domain request where you need results from several specialists combined into one coherent answer. That synthesis requirement is exactly why agent-as-tool fits better here. Than the coordinator pattern we saw earlier. The primary agent owns the entire workflow. The control never leaves. The primary agent decides which specialist to call, in what order, and how to combine the results. Think of it like a craftsman picking tools from a workbench. The craftsman builds the final product, not the tool."
    },
    {
      "time": 103,
      "speaker": "Instructor",
      "text": "The Food Finder gets wrapped with AgentTool and dropped into the primary agent's tools list. The primary agent calls it like any function. Input goes in and a result comes back. The specialist doesn't take over the conversation. The transport tool works the same way. Every agent call is stateless, a fresh invocation with no memory of the previous one. The primary agent manages state within itself, but the specialists don't retain anything between calls. The nearby tool handles directions and points of interest."
    },
    {
      "time": 143,
      "speaker": "Instructor",
      "text": "The primary agent can call these tools in any order it wants, and even fire independent calls in parallel to reduce latency. Now the primary agent combines food, transport, and nearby results into one unified trip plan. That synthesis step is the big differentiator from the coordinator pattern. Here, the primary agent builds the final response, not the specialist. Before we get into the trade-offs, let's see how it works in a real example."
    },
    {
      "time": 180,
      "speaker": "Instructor",
      "text": "So I've got the example, and I already have the servers up and running here. This example is available on GitHub, and the link is in the description below. It's free to run locally. It just requires Ollama, or any other LLM endpoint you want to use. So let's call it from the client and see how it works. For this example, we're using an entry-level model, qwen3.5:0.8b, so basically anyone can run it locally. That way, you can follow along on your own machine without much setup."
    },
    {
      "time": 219,
      "speaker": "Instructor",
      "text": "We can see here that the call has already started, and now it's in progress. And you can see the transport finder, food finder, and nearby tools have all been called, and we're waiting for the final LLM synthesis. Right here. So now we can see the synthesized result. We got the calls, and this is the resolved output. You can see it isn't perfect, and the model choice affects the quality we get. More importantly, it's a lightweight model, so don't over-read the exact answer quality."
    },
    {
      "time": 252,
      "speaker": "Instructor",
      "text": "What matters is that it shows how the pattern works. Let's go back to where we left the explanation. Agent-as-tool gives you maximum orchestration control, but the trade-off is stateless specialist calls. Every AgentTool invocation is fresh: no conversation history, no session memory. If you need specialists to remember previous interactions, this isn't your pattern. There's also latency: you pay for the primary agent call plus every specialist call."
    },
    {
      "time": 284,
      "speaker": "Instructor",
      "text": "But if you parallelize independent work, you can offset some of that cost. Agent-as-tool keeps the primary agent in full control while using specialists as callable functions. It's the closest multi-agent pattern to traditional function composition. And that makes it intuitive for engineers coming from conventional software architecture. Choose it when you need to combine output from multiple domains into one response. Thanks for watching this one, and I'll see you in the next video."
    }
  ],
  "loop-and-critique": [
    {
      "time": 0,
      "speaker": "Instructor",
      "text": "Your AI agent just shipped a hotel recommendation 90 minutes from the venue, and there's no way to catch the mistake. The loop and critique pattern stops that. Over the next five minutes, you'll see how it works, how to wire it up, and why exit condition design decides whether the iteration helps or just burns tokens. Single-pass agents have a blind spot: they generate once and then they ship. No validation, no feedback, no second chance. When your output has to satisfy hard constraints, such as, like in our case,"
    },
    {
      "time": 36,
      "speaker": "Instructor",
      "text": "a hotel within the 30-minute limit and the thousand-bucks budget restriction, maybe one pass is not enough. You need generate, validate, and retry in a loop. Let's understand it using a very simple example. You ask for a trip to Santa Fe, a hotel within 30 minutes of the venue. That time is a specific constraint, and that's exactly why this pattern exists. A single-pass agent will miss it more often than you expect. The generator agent produces the initial itinerary."
    },
    {
      "time": 69,
      "speaker": "Instructor",
      "text": "Here's the thing: the first pass is expected to be imperfect, and that's the whole point. The loop exists because the first draft sometimes doesn't meet all the constraints at all. The critic agent then checks that draft against the specific criteria: hotel proximity, dining quality, and transport feasibility. If anything fails, it sends back specific, actionable feedback. And that's critical here: actionable feedback, not a vague response to try again. The critique becomes the context for the next iteration call,"
    },
    {
      "time": 111,
      "speaker": "Instructor",
      "text": "and the generator instruction uses a template marker to inject the feedback only when it exists. That's the pattern in action. And that's the wiring detail that makes the loop actually work. Once the criteria pass, the critic will approve the plan, and it will break out of the agent loop. Without that exit, the loop may run forever, so your safety net is max_iterations. In a lot of systems, you'll also put a max token cap, but it's a sensible default to have either of them, or both of them."
    },
    {
      "time": 147,
      "speaker": "Instructor",
      "text": "Before we get into trade-offs, let's run it using a real-world example. So I'm going into VS Code now. In the background, my server is running here, which has all the agents as I anticipated. And what we've got there is a client we can call. So I call into A2A Validate to run the client, and it actually works. You know, the first response itself was correct. Now let's try our luck and see if we get it on the first response again. This time it might take two or three tries."
    },
    {
      "time": 186,
      "speaker": "Instructor",
      "text": "For this example, we are running local Ollama with the variance level at 0.25. So the quality of the response is not really the assessment here. We want to validate the pattern itself. So here we can see the first iteration is going, and if we're lucky, this time it passes on the first iteration. And we run again and see. It may take two or three iterations randomly because I have added random failures. So let's see if we are lucky enough to get one failure now."
    },
    {
      "time": 220,
      "speaker": "Instructor",
      "text": "We've been lucky again, or unlucky, because it again passed on the first iteration. So I'm just going to do one more run and see if it works. It's surprising that we are wishing it to fail so we can demonstrate here. If it doesn't, then let's just move on. Well, here it fails, so you can see the critic response here. This is just a brief view of the critic response, but internally it provides the retry response and the critique-requested improvement in the loop. And now we've got a second iteration running on it."
    },
    {
      "time": 257,
      "speaker": "Instructor",
      "text": "Let's see if the second iteration passes and we get the feedback that fixes everything. So this is how it works. Let's go back to the trade-off. So here we are on the trade-off. Each iteration costs one generator call plus one critic call. Two iterations double the tokens. Three roughly triple them. The quality gain is real with this. For some very important business processes, this is a lifesaver pattern. Most improvements happen in the first iteration."
    },
    {
      "time": 299,
      "speaker": "Instructor",
      "text": "Some complex environments may take more iterations as needed. After that, you will hit diminishing returns. So it's very important to find the point where those diminishing returns start, and that's likely your best candidate for the maximum iterations. So make sure you collect quality metrics to justify cost as well, because this can become one of the higher-cost patterns, certainly. Loop and critique gives your agent pipeline the ability to self-correct."
    },
    {
      "time": 336,
      "speaker": "Instructor",
      "text": "Your exit condition decides whether you get the quality improvement or just cost. So design it carefully, cap your iterations, and measure the gain. We are good with now six patterns that we already covered in the last six videos. In the next videos, we will try to implement some real examples and see how we can actually put these methods together, either one at a time or in combinations, and see what can be done with them. Most likely, in my experience, by understanding these six patterns and mastering them,"
    },
    {
      "time": 368,
      "speaker": "Instructor",
      "text": "in most enterprise cases, you won't need many more advanced patterns. However, there are some other advanced patterns that can still be useful. So I'll see you in the next video. Make sure you subscribe and like the channel so the next videos land in your feed. inbox or a notification list. Thank you, and I'll see you again in the next video."
    }
  ],
};
