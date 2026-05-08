// Source-backed from courses/_archived/content/ai/a2a/course/*/*.srt
import type { PartTranscriptEntry } from "./types";

export const A2A_TRANSCRIPTS: Record<string, PartTranscriptEntry[]> = {
  "introduction": [
    {
      "time": 4,
      "speaker": "Instructor",
      "text": "Welcome to LocalM Tuts. I am Nilay Parikh. This is the Lesson 1 of 16. In the A2A Protocol course. You will build production grade multi-agent AI system from scratch using 6 different agent framework and 3 model providers. All free-tier or local. We have created a companion tutorial website. At tuts.localm.dev/a2a. We recommend following along there for interactive experience. If you are not starting from the playlist, you can. You can find the playlist link in the description below if you are"
    },
    {
      "time": 40,
      "speaker": "Instructor",
      "text": "primarily here for code and hands on implementation. The practical session begin in lesson 5 where you start building your first A2A agent server client from scratch. Lesson 8 through 13 cover the 6 different agent frameworks and lesson 14 is more more sort of a capstone where we everything comes together. In a real-life production pipeline that we strongly recommend walking through this foundation session first. They give you context to understand why the course structure is the way it is. So let's get started."
    },
    {
      "time": 80,
      "speaker": "Instructor",
      "text": "Agentic AI is one of the most exciting frontiers in artificial intelligence, but the challenge is that most agents today operate in isolation. They can call tools using MCP, they can access data, but they cannot talk to each other in a standardized way. If you have 3 agents between the 3 different frameworks, connecting them means writing custom integration code for every pair. That is the N-Squared integration problem. 3 agents need 3 integration, Five agents need 10, and 10 agents need 45. Its"
    },
    {
      "time": 119,
      "speaker": "Instructor",
      "text": "scales exponentially. Each integration required a custom message format, custom streaming infrastructure, custom authentication. The engineering cost grew exponentially. While the business value grows linearly. A2A — the Agent-to-Agent protocol — solves this. It is an open standard now under the Linux Foundation and that gives agent a common language to discover each other. Delegate the task stream. The result backed. It is built on proven web infrastructure. HTTP, JSON-RPC 2.0,"
    },
    {
      "time": 154,
      "speaker": "Instructor",
      "text": "And Server-Sent Events. Nothing exotic but solid. Now you might be thinking how it is different from MCP? MCP, the Model Context Protocol, connects a single model to its tools and data sources. Think of it as a vertical integration. For example, when we provide a problem or context in Visual Studio Code, GitHub Copilot, the model picks up the problem and then the model uses MCP to access local data sources, create files, or ask for additional information. But that happens in a one session with"
    },
    {
      "time": 196,
      "speaker": "Instructor",
      "text": "the one model solving a one set of problem. That is vertical integration. A2A is horizontal integration. It connects autonomous agent to each other. Agent may be running in different models, different frameworks, even managed by different team and solving different problems. They are complementary. So let's not consider one is replacement for other. An An agent can use MCP internally to access tools, A2A externally to talk to other agents and we build these exact pattern in lesson 10 and onwards."
    },
    {
      "time": 232,
      "speaker": "Instructor",
      "text": "Here is what you will build in this course. You will create agents with 6 different frameworks: A2A SDK, Microsoft Agent Framework, Google, ADK, LangGraph, CrewAI, OpenAI Agents SDK, and Claude Agent SDK. Each agent will be powered by one of these 4 models discussed earlier. GitHub Models Phi- 4, Azure AI Foundry, Kimi K2 Thinking, Foundry Local Qwen 2.5, whichever you have access to. They are either free or runs locally free. I mean to say in the free tier you have access to free tier if you have"
    },
    {
      "time": 270,
      "speaker": "Instructor",
      "text": "not registered to those. Service provided, so no expensive cloud APIs are actually required. Over the 16 lessons, you will go from zero to a complete multi-agent system. Lessons 1 through 3 cover the protocol fundamentals which I recommend. Please continue with this and lesson 4 to 7 — build the first A2A agent, server, client from scratch. Lessons 8 through 13 exploring those frameworks which discussed earlier. Lesson 14 is a capstone. As I said before This is a near-production real life loan approval pipeline."
    },
    {
      "time": 314,
      "speaker": "Instructor",
      "text": "With 6 different orchestrated agents, Human in loop escalation and react dashboard. And the lesson 15 and 16 covers the advanced topic. They do not deep dive, but they cover security, extension, observability and wrap up there for the next steps. By the end of this course, you will have a deep understanding of the A2A protocol and hands-on experience Building real life production ready multi agent system. So let's get started. Thank you for watching this lesson on LocalM Tuts. In the next lesson, we"
    },
    {
      "time": 348,
      "speaker": "Instructor",
      "text": "will explore why A2A exists and the interoperability problem, the five design values, and where A2A fits in the agent stack. You can find the next video in the A2A Protocol course playlist, link on the website, visible below. See you there."
    }
  ],
  "why-a2a": [
    {
      "time": 4,
      "speaker": "Instructor",
      "text": "Welcome back to LocalM Tuts. I am Nilay Parikh. This is Lesson 2 of 16 — Why Agent2Agent Protocol? In this previous lesson we introduced A2A — protocol, the N square integration problem and the course road map. If you are watching, this is a stand alone video. Find the complete course list link below following along with our tutorial site. Link is visible. If you are mainly here for code practical implementation, which starts in Lesson 5 — building your first A2A agent and between the less than 8 and"
    },
    {
      "time": 42,
      "speaker": "Instructor",
      "text": "13 the walk through of 6 framework. But we recommend this foundation lessons first. They explain the design decision and you will encounter in every coding session. Right now we have tool calling where the model invokes functions directly, and we have MCP — the Model Context Protocol — which connects the model to structured data sources and tools. But neither of this solve agent to agent communication. Tool calling is synchronous and one directional. MCP is about connecting to data and tools, not to other"
    },
    {
      "time": 78,
      "speaker": "Instructor",
      "text": "autonomous agents. Let me walk through what A2A standardizes. The raw REST API to not first the message format A2A defines Messages with typed Parts such as text, files, structured data, etc. Second — streaming. A2A uses SSE, Server-Sent Events, built into the protocol. So you get a real time task update without building your own streaming infrastructure. Third — discovery. Every A2A agent publishes the Agent Card at the well-known URL. This JSON document describes the agent's skills,"
    },
    {
      "time": 121,
      "speaker": "Instructor",
      "text": "capabilities, authentication requirement, another region this part to know what the agent can do. Fourth — the lifecycle. A2A defines the state machine submitted, working input required, completed, failed, canceled. Every agent knows the same lifecycle contract. The 5th authentication — A2A supports OAuth 2.0, OIDC, API keys and mutual TLS out of the box You can declare the authentication requirement in your Agent Card and the client will honour it. A2A is built on 5 core design values. Agentic — agents are"
    },
    {
      "time": 167,
      "speaker": "Instructor",
      "text": "autonomous peers, not passive tools. Composable. Any agent can call any other agent opaque. Callers do not need to know the agent's internals. Enterprise-ready with built-in streaming, authentication, push notifications, extensions, etc., and open — Apache 2.0 license, the Linux Foundation governance, and of course its completely vendor neutral. Where does A2A fit in this stack? Think of it this way — at the bottom you have models such as like in our example Phi-4, Kimi K2 Thinking. Qwen. Above that we"
    },
    {
      "time": 209,
      "speaker": "Instructor",
      "text": "have frameworks such as ADK, LangGraph, CrewAI, Microsoft Agent Framework, OpenAI Agents SDK, Claude Agent SDK, then protocol. A2A connects Agents horizontally and MCP connects Agents 2 tools vertically. On the top of the protocol set the orchestration. Any framework can orchestrate multi agent workflows and activity top your user facing applications. A2A was Originally proposed by Google in April 2025. As an open open protocol for agent interoperability, it quickly gain industry support and"
    },
    {
      "time": 251,
      "speaker": "Instructor",
      "text": "was transferred to the Linux Foundation for the neutral governance. The current specification in RC 1.0 with this 3 protocol bindings: JSON-RPC 2 point O, HTTP/gRPC, and HTTP+ JSON+REST. In this course, we use JSON-RPC binding. It's the most common in the ecosystem. One important thing — A2A does not run your agents. It does not choose your model or replace MCP. It's a purely a communication protocol. Think think of it like an HTTP for agent. You do not need to know the implementation, just the contract."
    },
    {
      "time": 291,
      "speaker": "Instructor",
      "text": "Thanks for watching this lesson on LocalM Tuts. In the next lesson, we will deep dive into A2A's architecture, agent card messages, task state machines, SSE streaming, JSON-RPC methods. You can find the next video in the A2A Protocol course playlist. See you there."
    }
  ],
  "a2a-architecture": [
    {
      "time": 4,
      "speaker": "Instructor",
      "text": "Welcome back to LocalM Tuts. I am Nilay Parikh. This is lesson 3 of 16 a A2A architecture deep dive. Last time we explored why A2A exists and the five design values where it fits in the agent stack. If you are watching this as a standalone video and find the complete course in the playlist below. If you are eager to jump straight to the code, hands on lessons start in lesson 5, but this architecture session is especially important. Agent Card, the task state machine, SSE streaming are the"
    },
    {
      "time": 39,
      "speaker": "Instructor",
      "text": "concept you will implement directly in the coding lessons. Understanding them here will save your time. When you're writing the code. A2A is organized in 3 layers at the bottom. The data model defined in protocol buffers is a canonical source about that abstract operations such as like SendMessage GetTask on top protocol binding. The concrete wire formats this back currently defined 3 protocol bindings. JSON-RPC 2.0 O HTTP, gRPC and HTTP. In this course, every server you will build"
    },
    {
      "time": 81,
      "speaker": "Instructor",
      "text": "use JSON-RPC, which is the most common binding in the ecosystem. So let us start with cornerstone of discovery, the agent card. Every A2A server published the JSON document at the well known path, which is slash dot well known slash agent-card. JSON. The agent card has 3 main sections, first identity. Such as name, description, version, URL. The second supported interfaces. An array of interface object such as carrying URL protocol, binding protocol version. The 3rd capabilities boolean"
    },
    {
      "time": 124,
      "speaker": "Instructor",
      "text": "and arrays describing what an agent can do. Streaming support, push notification, and extensions and the skill with ID, name, description, tag, example prompts, input modes and output modes. Now messages and parts. When a client sends work to an agent. It sends message. Every message has a role either its a user or agent. And an array of parts a part is one of the types: Text raw bytes, URL reference structured data. Each part can carry metadata. filename media type. Extra key value"
    },
    {
      "time": 170,
      "speaker": "Instructor",
      "text": "pairs. This means you can send plain text, upload a CSV, reference a cloud Storage URL, or pass the JSON schema all in the same message. The task is the central coordination object. When you call send message the server creates the task with unique ID, the task moves through the state submitted, working, completed, failed, cancelled, also, the A2A 1.0 spec adds 2 new state. Input required whether agent pauses to ask user For more information and the auth required whether agent need additional"
    },
    {
      "time": 209,
      "speaker": "Instructor",
      "text": "authentication from the client. Let us look at this state machine on the screen. The Mermaid diagram shows all the transitions. Notice if you notice the input-required and auth-required loop back to working. The terminal states are completed, failed or cancelled. When they pass completed, it produces an artifact. An artifact generally has an ID. and an array of part for streaming. The append and lastChunk flags let the server set an artifact incrementally. Speaking of streaming, when you call"
    },
    {
      "time": 248,
      "speaker": "Instructor",
      "text": "SendStreamingMessage instead of a send message, the server opens an SSE Server-Sent Events. The connection and push is the task status. Update event and task artifact update. Each event carries the full task ID, updated status or artifact. When the status is a final set to true, the stream closes. This is how you get real time token streaming from any A A2A. Here are the core JSON-RPC methods: SendMessage and send streaming message for task creation, GetTask, ListTasks for query, CancelTask for cancellation"
    },
    {
      "time": 291,
      "speaker": "Instructor",
      "text": "SubscribeToTask for push notification. And then the push notification methods such as SetTaskPushNotification, get task push notification plus some other runtime capability discoveries. One important detail that all JSON and RPC methods use PascalCase SendMessage. Not the tasks/send. The server handles the single HTTP endpoint, typically at the root path. Let me show you the full interaction sequence, a client first fetches the agent card via GET, then SendMessage with the JSON"
    },
    {
      "time": 336,
      "speaker": "Instructor",
      "text": "RPC request. The server returns task in initial state, process it and returns the update. For streaming the same sequence use. SendStreamingMessage message the server responds with SSE stream each event in JSON line with task update. The last event has final set to true. Extensions are how A2A stays forward-compatible any new. Capability, custom auth flows, multi turn workflows, domain specific metadata can ship as an extension without changing the core spec. Extensions are declared in agent card"
    },
    {
      "time": 378,
      "speaker": "Instructor",
      "text": "capabilities section. The client checks for supported extensions before using them. This pattern keeps the core protocol stable while allowing the ecosystem innovation. Thanks for watching this lesson on the LocalM Tuts. I am Nilay Parikh. In the next session we will set up the development environment Python A2A SDK, GitHub Models, Azure AI Foundry and the course repository. You can find in the next video in the A2A protocol course playlist. See you there."
    }
  ],
  "setup-resources": [
    {
      "time": 4,
      "speaker": "Instructor",
      "text": "Welcome back to LocalM Tuts. I'm Nilay Parikh. This is lesson 4 of 16. In the last session we cover A2A's architecture. Agent cards, Messages, Task Life cycle, SSE streaming, JSON-RPC methods. If you are watching this as a standalone video, please find the complete course playlist in the description below. This course uses 3 model providers to demonstrate A2A is model agnostic data model. provides Phi-4 with a free GitHub personal access token and a decent daily rate quota. Azure AI foundry host"
    },
    {
      "time": 45,
      "speaker": "Instructor",
      "text": "Kimi-K2 and Kimi-K2-Thinking. And many more models. And they do have a free tier, so if you haven't used them you can certainly give a try with them. And the Foundry local where we are running Qwen, the smallest Qwen version and it will be. It will be running entirely on the local machine, so no cloud needed. You can use all of them. You can use, you can choose one of it, or you can bring your own model to test this examples. All 3 models expose OpenAI-compatible API endpoints. So you can use the same OpenAI"
    },
    {
      "time": 80,
      "speaker": "Instructor",
      "text": "Python SDK for all of them on the base URL and API key will change. Let us configure. Each provider first GitHub Models. You can sign into the GitHub marketplace model page, find Phi-4 catalog, generate personal access token and make sure you provide the models:read scope. Then set your GitHub token in the environment variable. Its defined is available as a .env.example. You can rename it in the examples, and then replace it. The API endpoint is also going to be most likely same but just double check. Its a"
    },
    {
      "time": 120,
      "speaker": "Instructor",
      "text": "models.inference.ai.azure.com Yes that is a GitHub Models API endpoint. It speaks the standard OpenAI chat completion. Next, the Azure Foundry. You can sign it at ai.azure.com or you can actually create a foundry instance from Azure portal as well and deploy the choice of your model, copy the endpoint URL and the API key and set the 2 variables mentioned. At this same endpoint hosts the other models as well. So all you need is to just change the model name. Finally, Foundry Local which also runs"
    },
    {
      "time": 163,
      "speaker": "Instructor",
      "text": "the AI model entirely on your local machine using the ONNX runtime. No API key, no cloud account needed. Install the Winget on Windows or brew on Mac, macOS, just install the Python SDK. The Foundry Local manager handles everything. You can also configure them. Using the Visual Studio Code, important of Foundry Local is is a dynamic port assignment at the startup. So always use the manager endpoint, never hardcode a port, but for example that is going. Here is a complete .env file example"
    },
    {
      "time": 198,
      "speaker": "Instructor",
      "text": "which you can replace the variable with and the smoke test validation. And once you set all your tokens, you can run the smoke test and it will let you know which model passes and which does not and that's the way you are ready to run the examples. Interactively into the next session from next session we will start the hands-on sessions. Thank you for watching this lesson on the LocalM Tuts In the next session, we will start building your first A2A agent from scratch using Phi-4 and you"
    },
    {
      "time": 229,
      "speaker": "Instructor",
      "text": "will find the next video in the A2A protocol course playlist. See you there."
    }
  ],
  "first-a2a-agent": [
    {
      "time": 4,
      "speaker": "Instructor",
      "text": "Welcome back to LocalM Tuts. I am Nilay Parikh. This is lesson 5 of 16 Building your first A2A agent. Last time we set up a development environment, Python the A2A SDK, GitHub Models, and the course repository. If you are watching this as a standalone video, please find the course playlist link in the description below. Before we dive in, here is what you will find. All the code for the lesson, including the GitHub repository and the interactive tutorial link is available. In the description below. You can find"
    },
    {
      "time": 39,
      "speaker": "Instructor",
      "text": "them in the course submodule, clone the repo, open the lesson folder, follow the README, and you should be good to go. We will build a QA Agent class. An asynchronous Python class wrapper that wraps the OpenAI-compatible API. It loads insurance policy document as context, constructs the system prompt, and answers the question using the Phi- 4 model via the GitHub Models API. Key concepts. First OpenAI-compatible API pattern with the same SDK, different base URLs, second system prompt with knowledge injection"
    },
    {
      "time": 76,
      "speaker": "Instructor",
      "text": "and the third async-first design that we will wrap as an A2A server in the next session. Let's see this in action. Open your terminal, navigate to the lesson folder and run the QA agent standalone. We will ask it the question about the insurance policy and let's see the response. Follow along. Pause the video if you need to catch up. If you haven't got VS Code ready, you can also use our website to have an interactive Jupyter session. Other than running, you can probably access the example, the"
    },
    {
      "time": 116,
      "speaker": "Instructor",
      "text": "outputs, everything along with many other important content. The link for this website of the course is in the description, please feel free to find. There is also a link for that example on GitHub that is the same link available and you can find the example that we are talking about. It's very well documented and you can access it straightforward. Now. I have loaded that example into Visual Studio Code and let us see what we have done here. As described earlier we are creating a very"
    },
    {
      "time": 154,
      "speaker": "Instructor",
      "text": "simple configuration, which model it needs to use in a second block and then in step 2 we are configuring the client based on what selection we have made. The quick model test whether it works or not, so let's run up to this point. Ah. Execute all above steps and let's see. Voila. Yes, so we got all of the above steps running now. Just a quick test. Bear in mind the policy text will run this thing to configure. It's been back correctly. 2 + 2 equal to 4."
    },
    {
      "time": 201,
      "speaker": "Instructor",
      "text": "run. Now we are building the QA agent. Let's load the domain knowledge. Now. Bear in mind the policy dot text will be replaced by the content of insurance policy. So this is just a simple insurance policy we have created and it will be replaced here as a system prompt for knowledge injection. So let's quickly run this thing to configure it's been RAM. Now we are building the QA agent. This is this is the most important aspect where we are coming. It's a simple simple Python class you can actually create in"
    },
    {
      "time": 231,
      "speaker": "Instructor",
      "text": "any supported language the same way. It will configure model endpoint, API keys, everything the knowledge the system prompts. And most importantly, it is exposing one method called query. So whenever it's been whenever our client was sending a query, it will run this particular piece of code and find an answer. So lets lets see lets run this class. From the test the Q agent so I am just trying to find. Yeah, all good. So very fast question. What is the deductible for the standard plan question printing?"
    },
    {
      "time": 272,
      "speaker": "Instructor",
      "text": "So far it's just a simple chat completion with some sort of retrieval augmentation. There we go. The answer is correct. As expected, the standard plan deductible, emergency deductible and prescription drug deductible. We sometime call it excess as well. So this question too, are the cosmetic procedure covered? So we got the answer. Cosmetic procedures unless medically"
    },
    {
      "time": 318,
      "speaker": "Instructor",
      "text": "necessary. So it's an expected line and we try our third out of scope question, which is not in the document: what is the capital of France, but you want to make sure that it just does not get the answer from model. But instead it return back saying that I do not have that information in the document. This is a very important thing and I think while this is running many of the agents fall back on the universal knowledge or the pre-trained knowledge of a model and ideally when they are building"
    },
    {
      "time": 361,
      "speaker": "Instructor",
      "text": "a model for retrieval, augmentation or specific use cases, we should avoid falling back or we should build resiliency enough that information is retrieved based on information that we have provided or retrieved. The answer appears and if the question is not within that scope, then it should come back with a clear denial. Instead of augmenting it based on a training material. So here, what is the capital of France, I am sorry, that information is not in the policy document. So this is very good so far."
    },
    {
      "time": 403,
      "speaker": "Instructor",
      "text": "Step 7 Building the claim agent multi turn. The A2A protocol also supports the multi turn interaction where the agent can request additional inputs from the client mid-task such as input required state and this is what we are going to demonstrate as a simple stand- alone agent. So let us run it. OK, the class has been initialized, now let's test the multi-turn. So we got input required. If you recall the earlier sessions we have described the terminal States and also the. Umm, the follow-up states"
    },
    {
      "time": 447,
      "speaker": "Instructor",
      "text": "where input required does go back to processing state, one of the processing states, and then if the If the information is provided correctly then it can find back itself into termination state. So here we are going to provide that information. And by the way, if you have seen it, we will maintain the session ID and that's how the correlation is actually handled. So session ID was created here and session ID was passed here. That's how the agent will ensure the memory is maintained. Memories are"
    },
    {
      "time": 488,
      "speaker": "Instructor",
      "text": "very important aspect in building agents. We are currently focusing on A2A protocol. But building agents itself, it's an art and we will come back with some nice tutorials on what are the areas we need to look, look at, look for. When we are building agents as well and what are the best practices?So when it has completed, it has built the claim receipt and a the whole information has returned with the perfect status completed. So it has reached the status into terminal phase. The multi turn"
    },
    {
      "time": 524,
      "speaker": "Instructor",
      "text": "documentation, what we have done, you can hear see it a sequence diagram. It's the same thing what we did. And what we demonstrated now we are building a policy summary agent. So let's run it. We got a policy summary agent and now we are just trying to summarise a policy. So its the same knowledge base that we have provided, but based on that you will just simply use for summarization of the policy. So if you see in this summarization, what we have done is providing a knowledge"
    },
    {
      "time": 560,
      "speaker": "Instructor",
      "text": "path which is here. Provided the model information and everything and then we instructed the model that provides the summary in certain structure. This is very important when we are building agents as well because agents has data parts and data parts sometime may not be strongly structured. So how to?How to encourage each joins and models which are which are probabilistic to produce some deterministic structure and more and more we master the the art of prompting and correct weightage we can"
    },
    {
      "time": 601,
      "speaker": "Instructor",
      "text": "actually get. Near to deterministic structural outcome. So we have we got it now you can see it has delivered in a very good way covered services and exclusion. It's a wonderful way of summarization. These agents are very useful for voice, especially if they are connected with the voice agents as well. Because when automated marketing calls or when user query calls comes, this provide a wonderful way of augmenting large amount of data into summarised documents and then we can actually deal further with that"
    },
    {
      "time": 638,
      "speaker": "Instructor",
      "text": "particular kind of kind of request, especially its coming from voice agents. Multi skilled routing. Ethan read it, its its again a sort of a another another type of agent that we have written and it demonstrate various capabilities around skills. So it it got it got a skill routing now and we gonna we have created 3 skills. Policy question and answer, claim filing and policy summary. So let us basically rangle skills. This skills has the similar similar design or architecture like what we call it"
    },
    {
      "time": 677,
      "speaker": "Instructor",
      "text": "cloud skills or any other GitHub copilot skills. So there is nothing much difference in terms of principle what skills are, but it's just a different way of implementing the skill, most likely programmatically way we will be implementing the skills using. Girls using program itself. You can see here Multi user base with the name of multi skill agent and we are running. So when we run this test, what should resolve who is then see that Bennett somebody is asking premium, it's moving to the policy QA"
    },
    {
      "time": 718,
      "speaker": "Instructor",
      "text": "skill. I meet to file a claim, its moving to the claim filing skill. Give me a summary of a policy, its going to the policy summary skill. And this skills can actually be also rooted to different agents down the line as well. So it provides a very, very, very insightful and comprehensive asymmetrical horizontal integration with multiple agents. And this is now we are moving you to the much more. Real life use cases. In real life, agents are not just one class. In real life agents are computation"
    },
    {
      "time": 758,
      "speaker": "Instructor",
      "text": "of hundreds of different colours, communicating to each other, building building, working on different knowledge bases, providing bias or unbiased output and then. On assembling the final result back to the original request. So in real world, agents are never going to be a linear or symmetrical. So, well, we did the policy outline. And we did the claim filing using a skill you can see here. We did the claim firing using the skew. Then now we are waiting for the final response."
    },
    {
      "time": 802,
      "speaker": "Instructor",
      "text": "I know it might sound overwhelming when you are running this first time. I would I would recommend you to give a good run, give a good reading. One, one time, twice, thrice may be little bit more. Writing agents is a abstract thinking and. For anyone who has. Who has not developed that area of a skill? Its sometime fine little bit confusing and there is nothing to be wrong about because not everyone learn abstract thinking in a in a in a very early stage of career. So if you are at the"
    },
    {
      "time": 843,
      "speaker": "Instructor",
      "text": "earlier stage of career and if you find this little bit overwhelming instead of. Instead of giving it up, I would recommend go through couple of times, build the packets of thinking in abstract way and then with agents will make much more sense that how this whole things is working slowly. Because if you see here we haven't got any deterministic code logic. But still the outcome is near to deterministic and that is the idea of agents. We don't want to code the business logic but we"
    },
    {
      "time": 878,
      "speaker": "Instructor",
      "text": "want to direct agent to build the business logic as part of their abstract declaration, as part of their abstract definitions and then. Generate the near deterministic or absolutely deterministic outcome and this is what we see here. And this is all happening using WiFi 4 which is very entry level model. So you can see that writing the good agent is actually a how important it is to write agent in the right way?And using agent in a right way even. Even the entry level model can perform really"
    },
    {
      "time": 914,
      "speaker": "Instructor",
      "text": "brilliant work. Not everything need to go to the Super smart models. Of course. If we use super smart model we can solve many complex problem. But not all the problems deserve those super smart models either. And there very costly as well so. Now we are going to go for small experiment how much the monthly premium and also thing and it will load the skills and it will show us the result. There you go. Policy, QA takes completed. Everything just looks good. So we have covered practically everything that A to"
    },
    {
      "time": 955,
      "speaker": "Instructor",
      "text": "a does offer as an agent. Multi turn artifacts, data part, multiple skills, task, life cycle and text part. These are agent. We have just build an agent. Now in the next subsequent sessions we will explode them, how to embed them as a server and then using the client start consuming them. But I hope you like this End of this lesson you have working Q agent that answer insurance question using the FIFO. It's tested in its time stand alone in a notebook. In the next session we will wrap as a discoverable A"
    },
    {
      "time": 992,
      "speaker": "Instructor",
      "text": "to A session. Thanks for watching this lesson on LocalM Tuts. In next lesson we will wrap this agent. In a fully discoverable A2A server with an aged card and HTTP endpoint, you find the next video in the A2A protocol. Course playlist which is available. The link is available in the description NICU there in the next session."
    }
  ],
  "a2a-server": [
    {
      "time": 4,
      "speaker": "Instructor",
      "text": "Welcome back to LocalM Tuts. I am Nilay Parikh. This is lesson 6 of 16, Wrapping Agents as an A2A Server. In the last lesson we built our first A2A agent, a QA Agent powered by GitHub Phi-4. If you are watching this as a standalone video, please find the complete course playlist in below description and follow along with the URL for a course home along with the URL for a course home page. It is also available in the description below. Here is where you find all the code for the lesson. The examples and"
    },
    {
      "time": 44,
      "speaker": "Instructor",
      "text": "the link for the GitHub repository is in our description as well as the interactive lesson and the link also available in our description. Clone the repo, open the lesson folder and just simply follow along. Three pieces: an Agent Card JSON at the well-known path. An AgentExecutor that bridges our agent to the A2A protocol and a Starlette server that speaks JSON-RPC and serves the SSE streams. The key concept is the central abstraction. Every framework in this course implements it differently,"
    },
    {
      "time": 85,
      "speaker": "Instructor",
      "text": "but the interface always remains the same. Receive a request context, produce events on a queue. Let's see this in action. We will start the A2A server and then we will we will send the JSON-RPC request and watch and verify the agent card. After that we will send the JSON-RPC request and watch the agent respond. Follow along, pause the video if you need to catch up. Hello, welcome to the practical session. We have also created a simple notebook for interactive session and if you haven't got access to VS Code and"
    },
    {
      "time": 125,
      "speaker": "Instructor",
      "text": "if you are on the phone or anywhere else, you can certainly use our website which has an interactive notebook. Available with lot of other information and more material. It will help you to build a good learning experience with some decent question and answers that would help you if you are preparing for your interviews. But let us see this live in our notebook session. So let us restart the kernel so everything is good enough. And. In the lesson 6 Wrapping agents as an A2A server, all we are gonna do is"
    },
    {
      "time": 168,
      "speaker": "Instructor",
      "text": "implement AgentExecutor and wrap up the component that we built in the fifth lesson, which was an agent. It will handle the multi turn conversation conversations, return artifacts, support task cancellation. If we provide a rich Agent Card image, the streaming events and wire up the default request handler and the Starlette application for server exposure, it will cover most of the A2A protocol features, so this is quite interesting from learning perspective. It's a simple implementation"
    },
    {
      "time": 203,
      "speaker": "Instructor",
      "text": "of a single agent, but it covers most of the concept that you would like to learn through the A to A implementation. The first couple of first cells will install all the dependencies if you need and then configuration to the models so let's quickly run them. We already got those dependencies sorted so it should be OK. There you go, we just finished it. We got it there now defining the agent class, which I think we already got there in in a previous configuration. So all we need to do is let's quickly come"
    },
    {
      "time": 246,
      "speaker": "Instructor",
      "text": "back to it. So it got same classes, multi- agent, and everything that we did in the previous implementation, so let's run the 3rd. And that's it. Implementation of Enhanced Agent Executor. I would strongly recommend reading this sequence flow. It will help you to understand what exactly this particular example is doing in detail. I will leave it to you for a detailed reading. On. On your available time, but let's now start implementing the Agent executor. AgentExecutor is a wrapper on"
    },
    {
      "time": 285,
      "speaker": "Instructor",
      "text": "top of the agent and it is using the A2A component. A2A classes and methods to implement the interface into our agent. So let's run it. So as you can see it using artifacts, data parts, message events, and request context so it's well documented. So it should be OK for anyone to read and understand, but if it is not, please feel free to drop comments and I will try my best to come back. Now we are defining the rich Agent Card. The Agent Card is nothing but just a metadata and an important aspect of this"
    },
    {
      "time": 326,
      "speaker": "Instructor",
      "text": "Agent Card is, remember the served card will be exposed by exposed to agents and agents will assess whether they would like to use the skills or capabilities available based on this agent card. So, so its better to always give a good attention that what kind of a density and what kind of a sparsity we want to provide intent. So when LMS are deciding which agent we need to wrap buyer up, which agent we need to connect to, it provide intent. So when LLMs are deciding which agent we need to wire up,"
    },
    {
      "time": 361,
      "speaker": "Instructor",
      "text": "chain the path, but to actually let agent discover the capability across the agent in AI and make it organically discoverable. That's the ultimate idea. And that that is a very powerful concept increment. So always make sure that. You spend good time with this agent card because Dad is going to be a very basic building block in terms of how your ecosystem or how your overall architecture of Atki is coming up. Now let's bring up the server is a pretty straightforward which is put the"
    },
    {
      "time": 394,
      "speaker": "Instructor",
      "text": "agent executed inside at a provide the memory task too. They are not gonna go in detail especially the memory that is very much agent concept. But in some other tutorial I will making future when I will cover agent in detail, I will discuss the agent take memory in depth in land. Its a very important its very important concept and. One of the one of the lower area where I see very liked likelihood of missing the nuances. So see let's solve this, mark this area and if you know already, you can always."
    },
    {
      "time": 433,
      "speaker": "Instructor",
      "text": "Progression up your knowledge, but please feel free to subscribe and when we got that course up and running you will get a notification. Running the server. So we got all things up and running. Now we just couldn't do is can I run this server is up and running now the server is this thing on. One O1. Bought and what we do is we will, uh, so these are the already something I have already called and this is what the outcome going to look like. But will free it will cover practically every"
    },
    {
      "time": 469,
      "speaker": "Instructor",
      "text": "important aspect of it with protocol other than security and other aspect which I said we are gonna touch up, we're gonna touch touch base them just for awareness in this particular tutorial set of tutorial. But in the in the advanced tutorial, we will deep dive into many other. Enterprise related aspects as well, but that tutorial will come in future as well as so again please make sure you subscribe so you get it modification and in the next particular lesson we will use this server to connect"
    },
    {
      "time": 501,
      "speaker": "Instructor",
      "text": "with our east to a client and we will see how it works. Yoku agent is now live at 2:00 server. Any A2A client from any framework can discover it at the well known URL and send the task. Next we will build the client. Thanks for watching this lesson on LocalM Tuts. In the next lesson, we build the client side. Discovering agents, sending tasks, and handling both blocking and streaming responses the A2A Protocol course playlist. The link is in the description. See you there in is the description and see you there in"
    },
    {
      "time": 540,
      "speaker": "Instructor",
      "text": "the next."
    }
  ],
  "a2a-client": [
    {
      "time": 5,
      "speaker": "Instructor",
      "text": "Welcome back to LocalM Tuts. I am Nilay Parikh. This is lesson 7 of the 16 A2A Client Fundamentals. Last time we wrapped up our agent as a fully discoverable A2A server with Agent Card and HTTP endpoints. If you are watching this as a standalone video, please find the link of the full playlist in the description section below. Here is what you gonna find the code for this lesson, the GitHub repository and interactive course page in the description section. Clone the repo, open the lesson folder and follow along."
    },
    {
      "time": 41,
      "speaker": "Instructor",
      "text": "The client has 3 important steps. Resolve the Agent Card to discover the capabilities. Send the blocking request to get the full response and send the streaming request for the real-time SSE updates. Blocking is a simple one request, one response. Streaming gives you real-time progress, status updates as the agent works and the artifacts as they are generated. Both use the same JSON-RPC protocol. Let's see this in action. First, make sure the A2A server from lesson 6 is running on port 10001 and then we"
    },
    {
      "time": 77,
      "speaker": "Instructor",
      "text": "will run the client script. It discovers the Agent Card, sends the blocking request, receives the response, and then does the same with streaming. Watch SSE event flow in real time. We will have the server running from our last example server and it is listening on 10001 so now let's see how it works on a client side. We also have an interactive page if you are not with access to a computer. You can obviously use this on mobile phone. It's screen-friendly and it got a lot of other information to"
    },
    {
      "time": 118,
      "speaker": "Instructor",
      "text": "read with the question and answers. Very helpful in the interviews if you are preparing for any. Artificial intelligence engineer roles. Let's let's get started with our client. So this is a simple, notebook. With covering most of the important client fundamentals and in this notebook we will inspect the multiple skills, send the blocking request, handle the multi turn conversation, stream the response with an A2A client, send_message and streaming artifacts with TextPart, DataPart, cap-"
    },
    {
      "time": 161,
      "speaker": "Instructor",
      "text": "abilities. We will also try to cancel the task. See what happened, exchange structured data and handle the errors gracefully. You can see what features we are exercising here. There is a there is a decent read in this notebook. I would strongly recommend you to take the time, give it a read for couple of times. It might be difficult concept if you are not familiar with abstract programming. So let's start installing the dependencies if we need to. All dependencies there, just running a simple class which."
    },
    {
      "time": 203,
      "speaker": "Instructor",
      "text": "Prides U did I run this? Umm. At the window, check base URL and then discover the agent. Discover the agent. And remember, from our last skills, policy QA, custom claims filing, and policy summary, it's all coming from server. So we haven't implemented an agent class here nor we have a nor we have implemented an agent server. We are purely connecting. To localhost 10001 and you can see based on agent card we are resolving all of these and we are getting skills and all the information that we need an"
    },
    {
      "time": 249,
      "speaker": "Instructor",
      "text": "R alms to decide what skills it need and LLMs to decide what skills they need see if you are ready with helper. Very good client is ready. Now we just going to build a very simple request. So these are just the builder build-up methods. Let's define them here. I think there methods, let's define them and then we will start with the blocking call. It's a simple policy query. So in this particular example it is running via the server. So if I open the server here you can see the are"
    },
    {
      "time": 289,
      "speaker": "Instructor",
      "text": "connecting. So we connected the agent card first and now we are connecting to the HTTP request which is the JSON- RPC request coming from this client. Well done. So we I think completed the bill request. We just completed the block task completed answer. So what we have asked what is the annual deductible? So we got all the same answers from the client. So if you have seen the lesson 5, this was the same answer coming and now we are getting the same agent. Executed using the server and this is the This"
    },
    {
      "time": 323,
      "speaker": "Instructor",
      "text": "is the beauty. We can actually compare all the answer, question and answer from agent and client. They will always match and now we are going to do the test multiple question and answer. Very good, its moving quickly. Wonderful we got all the answers and their absolutely correct now multi term conversation. It's the same monthly term conversation that we have demonstrated in the right way agent, but now you would be calling using the A2A protocol. We have the server method?"
    },
    {
      "time": 368,
      "speaker": "Instructor",
      "text": "So let's. Turn the partial claim and we will send missing information so it should come back with the state input required. And then we will provide the missing details. So it has come back and said task input required state. Please provide the rate of service amount in description. So I am going to provide them here. Service on this and description and by the way I am not passing the structure data I am passing. Semantical data and it will translate into structured data and process."
    },
    {
      "time": 407,
      "speaker": "Instructor",
      "text": "This is why. Self discoverable agent with a true agent capability of acidity. And This is why it particularly solved the Earth square problem because if let's say if you are building a insurance company claim portal or a claim submission portal. Its one of the nightmare to handle the number of the fields that required number of the process is that required and all of these can actually become very simple if the correct abstract process has been followed and we actually build the agent"
    },
    {
      "time": 444,
      "speaker": "Instructor",
      "text": "Akai and that reduce the north square problem. Into the end problem and O square is exponential cost against the linear business value compared to O which is the linear cost against the linear business value and that's why when the business scale the O always give far more competitive edge over the O square. So well we completed the task, the claim process has been completed and also of staff that require expected is coming back and it explain what multi multi full summary should look like structure data"
    },
    {
      "time": 482,
      "speaker": "Instructor",
      "text": "policy. So we are going to pass simple information and say give me summary of my policy and this is the same example. We also run during the 82 agent. There you go, it's perfect. Streaming response same way. Please read the. The sequence diagram its very interesting and important understand how the SSE stream works. JSON-RPC is not deal, they are not dealing with SSE when it comes to back end up simple micro service architecture or service oriented architecture. But SSEs are very important when it comes to agent"
    },
    {
      "time": 528,
      "speaker": "Instructor",
      "text": "Agri and something need to be mastered for sure. So what I'm going to do is I'm gonna stream my question and answer. And see look it is going to it is actually working in progress and soon as my question and answer is been delivered back from agent to to this particular client it will print it. So its continuously running instead of blocking the all it is progressing. As it receive the artifacts and the process and updates. There we hope we could. Both of them very good. Now we are doing the stream"
    },
    {
      "time": 570,
      "speaker": "Instructor",
      "text": "policy summary. It's going to work like same so I'm gonna skip it. But this is how the response going to look like the Tau scanlation. So we will fire the task at the end will cancel it. There we go, we find the task. First of all, we got the response, then we cancel it. So if you see here we build a payload, we create a request, I want to file medical claims and and then immediately we send the cancellation request cancellation as well. So here cancel payload and then. And we got this whole ideas."
    },
    {
      "time": 609,
      "speaker": "Instructor",
      "text": "Then tax everything. They will discuss return task polling. So it will constantly give us what is happening with the task. There is nothing there and error handling. So here we expect. The error. Which is. Not the error that is. UM, not the error, technical error, but as I said that there will be out of the scope questions like what medical, medical, what medication are excluded that that that information doesn't available, is not available in the context. So we anticipate that policy document is"
    },
    {
      "time": 656,
      "speaker": "Instructor",
      "text": "not explicitly. Specific the requirement so this is what it call safe queries and guard drilling and let's see how it works. So air handling. And obviously we do handle errors such as like, connection etcetera. So policy does not specifically, however, it does not. Perfect. That the non existence task. So here you can see they are trying to get some of the task that doesn't exist. We haven't created and we are getting the response graceful fail test, the invalid method. This method doesn't"
    },
    {
      "time": 698,
      "speaker": "Instructor",
      "text": "exist and we get a very reasonable massage and the experiment. So we are going to file the spawns. Here we go. You are filling the response and response has been filed and now we want to close the client. So lets close the client and there we go. And we covered everything that we anticipated. So let's see how server works. So you can see here we made lot of good request to server and we practically achieve everything that we need and including the request failure. That we force the method of form."
    },
    {
      "time": 734,
      "speaker": "Instructor",
      "text": "So that's a very. Detail understanding of Janvi capabilities, what an A2A client can do. So this time we went from client to server and then we invoke the agent via the executor. So abstract executor and. And that proves how a 2 evening actually deliver end to end agent infrastructure and how it communicate across the multiple layer. Now you have the complete server client loop, agent caught discovery, blocking requests, streaming request error handling. The client"
    },
    {
      "time": 780,
      "speaker": "Instructor",
      "text": "pattern is reusable in every integration session. Thanks for watching this lesson on local LocalM Tuts. In the next session we will integrate Microsoft Agent Framework. So from next lessons we will start exploring different frameworks available to us and how they integrate with their A2A agents. Building an orchestrator. That root the task to remote A2A agents and you can find the next video in the A2A protocol course playlist link available in the description ICU there."
    }
  ],
  "microsoft-agent-framework": [
    {
      "time": 8,
      "speaker": "Instructor",
      "text": "Welcome back to LocalM Tuts, I am Nilay Parikh. This is lesson 8 of 16, A2A with Microsoft Agent Framework. In the last lesson we built the client side: discovering agents, sending tasks, handling both blocking and streaming responses. If you are watching this as a standalone video. Find the complete course playlist linked below in the description and follow along at tuts.localm.dev/a2a. Here is where you find all the code for the lesson. The GitHub repository link is in description as well as the interactive"
    },
    {
      "time": 48,
      "speaker": "Instructor",
      "text": "tutorial page. Link in description, clone the repo, open the lesson folder and follow along. Three files: orchestrator with the tool decorated functions, server that exposes A2A, and client to test it. The orchestrator uses A2A agent proxy objects to call the remote agents discovered via the Agent Cards. The A2A agent proxy is a key pattern. It wraps any remote A2A agent as a local callable. The orchestrator doesn't know what framework or provider. The remote agent uses, it just sees the Agent Card and sends"
    },
    {
      "time": 90,
      "speaker": "Instructor",
      "text": "the task. Let's see this in action. Install the dependencies, configure Azure credentials. Then start the server and client in separate terminals. Watch the orchestrator discover agents via their Agent Cards and route the tasks using LLM-based tool calling. Pause the video and try it yourself. Just a one quick note, you don't need Azure credentials or Azure AI Foundry to run this example. Microsoft Agent Framework is agnostic, you can use it with other OpenAI-compatible URLs as well, and"
    },
    {
      "time": 129,
      "speaker": "Instructor",
      "text": "you can discover many different methods and many different compatibility with their documentations. So please follow if something different you want to you would like to try with example, but we will keep it simple with our Azure Foundry AI. Welcome to lesson 8 Practical example A2A wrapping with the Orchestrator agent. In this we will validate the loan validator as we pass our various loan application and see what happens. The architecture is pretty simple from lesson 8 to lesson 13. They all tried to solve the"
    },
    {
      "time": 172,
      "speaker": "Instructor",
      "text": "same problem but using different stacks and they all try to adhere to the A2A protocol. So let's see the first Microsoft Agent framework. We have 3 components, the client which you connect, the orchestrator which you orchestrate, the agent and the server. Which will host the A2A connection and then the 2 common files which are shared across all the SDK examples: the loan data. Instead of creating a database I just created a simple Python file with the loan and the validation rule. So they"
    },
    {
      "time": 204,
      "speaker": "Instructor",
      "text": "have their own validation rules where they can accept or reject just to make sure we have result quality. Now once this example is run, it can also log the complete audit template, what it did, what happened, what the reasoning behind the rejection or acceptance and what it did. And if I go in alone data, then this is what we generally expect. We expect a couple to review, a couple to decline, and couple to approve. So now let's run everything. To run it, you go in the Microsoft Agent"
    },
    {
      "time": 241,
      "speaker": "Instructor",
      "text": "framework path, simply set up. I assume you have already set up your Python virtual environment or the environment that you are running and then simply python server.py. So I think we are in the wrong folder, cd src. Run python server.py there in the client as well as src, and I will just see if the server is open and running. Yep, server is up and running on 10008 and I will just run client.py. It will try to process the data. So we can see here it is processing data."
    },
    {
      "time": 287,
      "speaker": "Instructor",
      "text": "And actually it is going to Azure. By now, so let me see if I can get Azure. While it is running. Let's see. And if you don't have access to this particular Visual Studio Code or or examples at the time you are watching this, you can actually use our interactive page where there is lot of information to read, understand and it explained in very detail. And if you are especially preparing for interviews and there are really interesting questions that you can go through and"
    },
    {
      "time": 332,
      "speaker": "Instructor",
      "text": "actually validate while running this thing. And also we have we have very very detailed run steps. So hopefully it should not be difficult for anyone to make this example run. But lets see whether the model does work. And yes, we see this. We suddenly see after its. This is the time I'm running. And we now have certain tokens going through, so it is connecting. Into Kimi-K2-Thinking. There you go, you are done. So it did, saying like it rejected Bob Kwan. As when declined it given a very"
    },
    {
      "time": 375,
      "speaker": "Instructor",
      "text": "good reasoning as well. why it has declined and this is again I am trying to mention that agents are not supposed to be deterministically rejecting or accepting Agent must do semantic and agent. Analysis and provide a proper reasoning and flag. So these slacks and risk flags. Reasoning is not generated deterministically; it is generated by the thinking model. And there is another conversation some other day we will do why thinking model and why thinking model do better than non thinking model. And"
    },
    {
      "time": 411,
      "speaker": "Instructor",
      "text": "for this particular application the thinking model is very useful and will talk in some other particular tutorial where we will discuss partly specifically this point that. Regular reasoning model versus reasoning thinking model and how to implement and benefit from thinking. So well. It did everything and none of these comes via. The hard deterministic coding, it all comes via the agent itself and the detail. verify log is here. As we can see it has stopped here as well, so that's good. So why have"
    },
    {
      "time": 451,
      "speaker": "Instructor",
      "text": "we actually did the Microsoft Agent Framework? It is. It's a simple, but really useful. And you can see VI using Agent framework here and it's really, really interesting. Thanks for watching this lesson on LocalM Tuts. In the next lesson Google ADK shows how simple A2A integration can be. Just one function call with to_a2a(). to a. You can find the next video in the A2A Protocol course playlist link in the description. See you there."
    }
  ],
  "google-adk": [
    {
      "time": 4,
      "speaker": "Instructor",
      "text": "Welcome back to LocalM Tuts, I am Nilay Parikh. This is lesson 9 of 16, A2A with Google ADK. Last time we build an orchestrator with Microsoft Agent Framework that routed tasks to remote A2A agents. If you are watching this as a standalone video, find the complete course playlist linked below in the description. Here is what you find. All the code for the lesson, the links of GitHub repository and the interactive page is in the description. Clone the repo, open the lesson folder and follow the loan"
    },
    {
      "time": 41,
      "speaker": "Instructor",
      "text": "validation agent using KAMI key 2 Thinking via the LiteLlm adapter. The magic is what method is called to_a2a(). It auto-generates the Agent Card, creates the executor and starts the server. One line replaces everything from lesson 6. Compare this to lesson 6 where you wrote the Agent Card, JSON, AgentExecutor class, and server startup manually. ADK does all 3 in a single function call. It also supports multi-agent patterns, sequential parallel and the loop agent natively. Let's see this in action."
    },
    {
      "time": 83,
      "speaker": "Instructor",
      "text": "Install dependency, configure the credentials, start the server on port 10002. Run that line and watch how to_a2a() does everything: Agent Card, executor, server, just in one line. Pause the video and try it yourself. Lesson 9. Practical implementation for Google ADK. As we saw, is just a one method. Does all the magic. to_a2a() is a one liner that converts any ADK agent into the standard A2A server and this is what we are doing. We are just literally calling to_a2a(), to A and the same pattern as"
    },
    {
      "time": 128,
      "speaker": "Instructor",
      "text": "we discussed in the Microsoft Agent Framework orchestrator which does the orchestration, and we are using Google ADK components. And the same logic, same approach, but with the Google ADK. And the client. The client always uses A2A because I am. the key aspect that I want to prove is A2A interoperability works irrespective of server implementation. So the server and orchestrator implementation use the SDK, but the client implementation uses A2A. a. Of course you can do the client implementation using Google SDK as"
    },
    {
      "time": 164,
      "speaker": "Instructor",
      "text": "well. But it demonstrates like how interoperability is available with A2A as well. So lets see the same loan data, the same validation rule and we are in the same. Yes, src. So let's just go ahead and run the app. server, and let's see what happens. python client.py, and let's see if the server is up and running by now. Coming back home. There we go, it's up and running. Now some of the experimental warnings, I haven't suppressed it and now let's run the client."
    },
    {
      "time": 209,
      "speaker": "Instructor",
      "text": "Again, I said some of the experimental conditions, some of the experimental flags I haven't turned off. But it is validating perfectly. See. It worked well. These warnings come from experimental features and I should have done slightly better, but yeah, it's not an error. It's not fake. And if we go back on lesson 9, it does generate the same approvals and rejections. See Just stopping"
    },
    {
      "time": 255,
      "speaker": "Instructor",
      "text": "everything here. And job done, it has dropped properly. Perfect. So now, let's wrap it up with a very simple cover. The orchestrator does the magic about how to orchestrate in different sessions agent, and it also uses LiteLlm. By the way, Google ADK may be hard to port on Azure or anything. It generally very good with the vertex AI or Google cloud dependency. But if you are using Azure any other? LLM endpoints then you might need a LiteLlm adapter, which is not a bad idea. It is a good thing it is available in"
    },
    {
      "time": 299,
      "speaker": "Instructor",
      "text": "Google ADK itself, and it helps you to port to any other model. And the client is simple: A2A client, and the server: simple Azure use, simple Google ADK to_a2a(). A. That's it. You have built the simplest A2A integration in the course: a fully compliant server in about 15 lines. The orchestrator from lesson 8 can already call this agent without any changes. Thanks for watching this lesson on LocalM Tuts. In the next lesson we will combine A2A"
    },
    {
      "time": 346,
      "speaker": "Instructor",
      "text": "along with LangGraph, building a ReAct agent that uses MCP tools, A2A for agent communication. You can find the next video link in the A2A Protocol playlist. In description, see you there."
    }
  ],
  "langgraph": [
    {
      "time": 5,
      "speaker": "Instructor",
      "text": "Welcome back to LocalM Tuts. I am Nilay Parikh. This is lesson 10 of 16, A2A with LangGraph. In the last lesson Google ADK showed how simple A2A integration can be with just one function call. If you are watching this as a standalone video, you can find the playlist link in the description below. Also, the links for the example GitHub repository and interactive page are available in the description. Clone the repo, open the lesson folder and follow along alone. Validator validation agent"
    },
    {
      "time": 38,
      "speaker": "Instructor",
      "text": "using LangGraph's ReAct pattern. The @langchain_tool decorator wraps the same validation functions. create_react_agent pairs them with AzureChat OpenAI, and the agent is exposed as a standard A2A server. LangGraph's create_react_agent is the key primitive. It wraps @langchain_tool functions in the Think Act Observe loop. The Azure ChatOpenAI integration connects to Kimi K2 thinking and the same model used across all the framework lessons. Let's see this in action. Install the dependencies, set"
    },
    {
      "time": 83,
      "speaker": "Instructor",
      "text": "your credentials and start the server on 10003 and watch the LangGraph ReAct agent think, act, and observe in a loop. Pause the video and try it yourself. Welcome to lesson 10, A2A wrapping with a LangGraph Orchestrator Agent. It implements the same loan validator using the same common loan data and validation rules, same approach: server, orchestrator, client. The server implements a simple A2A server because LangGraph does not have A2A server capability built in, so we use an orchestrator with"
    },
    {
      "time": 120,
      "speaker": "Instructor",
      "text": "LangGraph, LangGraph, and Lang Chain and implement the same approach that is very common across the LangGraph and then the server wraps the orchestrator and exposes on port 10003 with the Agent Card and JSON-RPC and the client does the same read from the loan data application and process a couple of loans. I have managed to get the server up and running here before I started recording and we have a very good interactive. We have very very interactive page for LangGraph and feel free if you are not"
    },
    {
      "time": 164,
      "speaker": "Instructor",
      "text": "having immediate access to Visual Studio Code or this. These modules effectively walk through its some of their very good LangGraph base question and answer for interviews, interview preparation and step by step guide to run this particular code or and also you can read the code here from its very basic code that just explain you. Important areas and what to be highlighted. So let's run the client and let's see how it works. python client.py, and it is on the black screen. So very fast it should show us this"
    },
    {
      "time": 205,
      "speaker": "Instructor",
      "text": "kind of report. So if we stay here, this is approved for Alice Chen. This is a profile change from the previous lesson. But really carefully see the compensating factors are same but differently worded. and this is more important because every time it runs it is not hardcoding it. And again and again I am trying to emphasize this. The agentic task does not mean that we should deterministically hard coded. We should code in a way that abstraction is managed by us. But execution is managed by"
    },
    {
      "time": 252,
      "speaker": "Instructor",
      "text": "LLM and the reasoning is managed by LLM itself. That's a key point for agentic AI. If we start hardcoding, if we start short-circuiting the agent AI, virtually we will end up with With a distributed architecture and distributed software, we will not have. any criteria, we cannot call that agentic AI. And this is the beauty of it. Like a human, it just types what the compensating factors are. And like two people processing the loan app, we anticipate their wording would be slightly different,"
    },
    {
      "time": 289,
      "speaker": "Instructor",
      "text": "but they will come to the same conclusion. So this is the whole idea of it. And I think we are done. Excellent. 6 picked up and finished. OK, all the thirds and let's turn it off. Excellent. You have built a LangGraph ReAct agent that wraps the same loan validation tools using the Lang Chain tool decorators and AzureChat OpenAI. Thanks for watching this lesson on the LocalM Tuts. In the next lesson we will build a CrewAI crew with a role-based agent and"
    },
    {
      "time": 336,
      "speaker": "Instructor",
      "text": "wrap the entire crew as a single A2A endpoint. You can find the next video link in the description below. See you there."
    }
  ],
  "crewai": [
    {
      "time": 4,
      "speaker": "Instructor",
      "text": "Welcome back to LocalM Tuts. I am Nilay Parikh. This is Lesson 11 of 16, A2A with CrewAI. Last time we combined A2A with LangGraph ReAct agent, and it used MCP for tools, A2A for agent communication. If you want to watch this as a standalone video, find the complete course playlist below in the description and follow along. There is also links for examples and interactive page in description which might come useful. Loan validation crew with 2 agents, a Compliance Analyst that runs the hard and soft checks, and a"
    },
    {
      "time": 45,
      "speaker": "Instructor",
      "text": "Senior Underwriter that synthesizes the results as a verdict. The CrewAI orchestrates them sequentially, and the A2A client sees the one agent. CrewAI's opaque execution is a perfect match for A2A. The protocol says callers don't need to know the agent's internals. With CrewAI, the internals are an entire crew running, but the A2A agent just sees it as one endpoint. Let's see this in action. Install the dependencies, configure the credentials, and start the crew server on port 10,004 and watch how"
    },
    {
      "time": 85,
      "speaker": "Instructor",
      "text": "it works sequentially. You can also pause the video and try it yourself. Lesson 11 practical session. A2A server wrapping with CrewAI. Orchestrator agent, same architecture: server Orchestrator client in the orchestrator here we are using CrewAI. Server is implemented by A2A because CrewAI does not by default offer an A2A interface, so we are using the A2A orchestrator. It is CrewAI, and then we have client as pure A2A implementation, and we are"
    },
    {
      "time": 130,
      "speaker": "Instructor",
      "text": "using the common loan data and the validation rule. I got the server up and running. I just run the server and let's see how does the client. process the loan data. Sorry. See here, it is using skill pre-screening. Dismiss. B Overwhelming for short sessions. But it is important, no one needs to know all the frameworks. But I'm just showing as a 2 as capability as we know. Many teams in past we have worked"
    },
    {
      "time": 175,
      "speaker": "Instructor",
      "text": "with microservices or the service oriented architecture with polyglot systems. Agents are all about polyglot architecture. Various teams in different horizontal and vertical can create agents differently based on their needs, based on what what frameworks would suit them best. And this is why A2A is important. It is irrespective of the framework. It can. It can provide end to end horizontal integration. So it is good to understand how various SDKs can be connected via A2A. And have a broad aspect of it. Ah,"
    },
    {
      "time": 216,
      "speaker": "Instructor",
      "text": "and again, as I said in the past lessons and comments, that if you are new to abstract thinking, abstract programming, especially in agent work, you might find it overwhelming. I would strongly recommend going again and again through the tutorial. Read the interactive page. There is very good theory, simplified code, you will understand what it is doing. And overall it will help you to build a very good long-term understanding of A2A. I don't expect that. The understanding of A2A would"
    },
    {
      "time": 257,
      "speaker": "Instructor",
      "text": "be very quick and straightforward unless you have experience in service-oriented architecture, microservices, and complex system designing. Then yes, it might feel straightforward to you. But don't be disheartened if it takes a couple of attempts, there is nothing wrong in it. It should take, because meaningful understanding is always better than just having a sense of false and pretend understanding, that yes we know, but sometimes it is very hard. But even see here, now it has"
    },
    {
      "time": 292,
      "speaker": "Instructor",
      "text": "processed, and look at the detail it is providing. It's a nuance of various SDKs that it is generating very well. Underwriting condition, risk flags and all sort of things. For example, if you see what what if we compare it with what this LangGraph did? LangGraph did not create this compensating factor, underwriting conditions so well. Where here you see, CrewAI did very well, and that's because the crew works with a very different architecture inside and that helps us to understand that it's not always about."
    },
    {
      "time": 337,
      "speaker": "Instructor",
      "text": "What models we use? It's not always about what. What architecture we use, but the frameworks also do matter a lot, especially if you are just trying to get the if you are just trying to get the out of the box capabilities. And therefore I said for various applications you will find that different agent frameworks work better. And there is nothing wrong instead of. fixing yourself on one architecture of agent framework. We should fix ourselves with A2A, which is interoperable, and then let the"
    },
    {
      "time": 377,
      "speaker": "Instructor",
      "text": "best agent framework work for the use case it is designed for. And that's a better way to deal with change than using one. And basically trying to restrict ourselves in that sense is we restrict our choices. Restricting choices in AI is actually mostly going to backfire in most of the cases. We should not spend, we should not build. Every problem with different solution architecture, but I think we should be OK to handle couple of different variations and SDKs based on the use case and use case, use case"
    },
    {
      "time": 415,
      "speaker": "Instructor",
      "text": "and individual married cases. But as I said, CrewAI does very differently than LangChain or LangGraph works differently in other scenarios and the same way if we use Microsoft Agent framework, the Microsoft Agent Framework works slightly differently. It does not provide underwriter conditions or that comprehensive risk flag as CrewAI. AI. So its its a very mature framework. And it shows the way it handles. Also, different frameworks handle tokens differently, so you might find the one particular framework can"
    },
    {
      "time": 451,
      "speaker": "Instructor",
      "text": "have excessive use of token, providing very in depth understanding and explanation, while the other framework may be using far less tokens. So this is where the real. Vo. Assessment, scientific data driven assessment will come and when I will, when I will build. Or when I will record the agent. not A2A, but 100% on agent frameworks, I will discuss how I make decisions on which agent should shoot what kind of requirement and that might be very interesting conversation forward. But I"
    },
    {
      "time": 487,
      "speaker": "Instructor",
      "text": "think this is done or it is doing the last one. You can see it taking a little bit more time, that means it is generating more token. So let's see if how the token works. So if you open the tokens it has spiked up a little bit, so. has spiked up literate so. Unfortunately they can't validate on individual request by request basis. I have not got that. Just let me refresh it to refresh this page and see how it works. So you can see like it's going. Probably need to, uh, find a"
    },
    {
      "time": 533,
      "speaker": "Instructor",
      "text": "better matrix for it, but yes, they do differ. Okay, I'm gonna just stop there. Assuming everything around up, you can see the risk flag and everything working bundle fully well. Umm, and it did deny Bob. So let's see, Bob should be denied. Ah, yes, he should be declined, absolutely. So that's brilliant and look at the detailed reasoning it has provided and risk flags. Fine, so. I leave it here by generally it should be light they so this is the wrong. I think"
    },
    {
      "time": 578,
      "speaker": "Instructor",
      "text": "this is the last one which failed. Yeah, but it should be like this Weekly a I. Weight detail one. Alright then I will see you in the next session. You have wrapped a multi-agent crew as a single A2A endpoint. The orchestrator from Lesson 8 can call this crew directly like it calls any other agent. It proves that A2A makes framework choice invisible. Thanks for watching this lesson. In the next lesson we will try with OpenAI Agents SDK. And A2A wrapping. You find The next video link in the description"
    },
    {
      "time": 623,
      "speaker": "Instructor",
      "text": "below and I'll see you there."
    }
  ],
  "openai-agents-sdk": [
    {
      "time": 5,
      "speaker": "Instructor",
      "text": "Welcome back to LocalM Tuts. I am Nilay Parikh. This is Lesson 12 of 16, A2A with OpenAI Agents SDK. If you're watching this as a standalone video, you can find the full playlist in the description below. Also you have example GitHub repository link and interactive page link in description. Open the lesson folder and follow along. Loan validation agent with 3 tool functions. The OpenAI Agents SDK class is minimal: model, instructions, and tools. Runner handles the execution loop and we wrap the standard Agent"
    },
    {
      "time": 45,
      "speaker": "Instructor",
      "text": "Executor. The OpenAI SDK is the most minimal framework. Agent, tools, Runner, that's it. Handoffs let you route between multiple agents inside the SDK, but externally A2A handles cross-framework routing. Let's see this in action. Install dependencies, set your credentials, and start the server on 10005. Watch the OpenAI runner loop through the calls automatically. Pause the video and try it yourself. Lesson 12. A2A server wrapping with OpenAI Agents SDK. Same architecture as previous ones."
    },
    {
      "time": 84,
      "speaker": "Instructor",
      "text": "Using loan data validation rules. Running a server on 10005 which I managed to get it up and couple of environment variables. Server using A2A. And orchestrator using OpenAI Agents SDK. And it validates, and the client using A2A. So lets. By so, it's using the loan application pre-screening as we send and keeping it simple."
    },
    {
      "time": 129,
      "speaker": "Instructor",
      "text": "It's generating most like only hopefully this particular. Output. If you do not have immediate access to visit through your code or models, you can always use our interactive web page where we have highlighted important code pieces and also some of the good question and answer. It will help you if you are preparing for any interviews. And the step by step setup and running. Let's try this as well. See it works pretty well. It works, compensating factor reasoning, It provided pretty decent outcome."
    },
    {
      "time": 179,
      "speaker": "Instructor",
      "text": "Bob is declined, which he should be. Penter someone has keep it here, let it run and. frameworks down, one to go. Your loan validation agent works very well with a Kimi-K2-Thinking via Azure. It speaks through A2A. The orchestrator can call alongside ADK, LangGraph, and CrewAI agents. Thanks for watching this lesson on LocalM Tuts. Next we will complete the framework tour with the Claude Agent SDK: conversation memory, structured tools, etc. You find the next video in the A2A Protocol"
    },
    {
      "time": 221,
      "speaker": "Instructor",
      "text": "course playlist available in this description. See you there."
    }
  ],
  "claude-agent-sdk": [
    {
      "time": 4,
      "speaker": "Instructor",
      "text": "Welcome back to LocalM Tuts. I am Nilay Parikh. This is Lesson 13 of 16, A2A with Claude Agent SDK. Last time we built the task agent with OpenAI Agents SDK: tool use, A2A wrapping. If you are watching this as a standalone video. Find the complete course playlist linked below in the description. Also you can find example links via the GitHub repository and interactive page links in the description below. Clone the repo, open the lesson folder and just follow. Loan validation agent, built from scratch. No"
    },
    {
      "time": 39,
      "speaker": "Instructor",
      "text": "framework. Structured JSON-schema tool definitions, explicit tool-call dispatch, and a manual agentic loop using the AsyncAzureOpenAI with K2 Thinking. Multi-turn is a big unlock. Most A2A interactions so far have been single shot send query get response with the conversation memory. The agent remembers what we said before, enabling the follow-up questions and interactive workflows. Let's see this in action. Install the dependencies, configure the credentials, then start the server on port"
    },
    {
      "time": 72,
      "speaker": "Instructor",
      "text": "10,006. Watch the manual tool call loop iterate. You will see each tool call result in the console. Try sending a follow up question. Test the multi-turn memory. Pause the video and try it yourself. Lesson 13 practical implementation using Claude-style agent patterns. So by the way, I got a one typer there. Claude agent. Okay, it is wrong. I don't know how I missed that. It's basically a Claude-style agent pattern implementation. So what I did in this example is what I learned from Claude, what I read"
    },
    {
      "time": 110,
      "speaker": "Instructor",
      "text": "from Claude, covered Claude Code, their blogs, papers, how they are writing their own agents. And I really like the approach they are doing it. So what I did is I actually copied their approach into this example. Of course it is not as detailed as they do, but it will give you some idea. And I want to explore that how compliant it is with A2A. So I did this JSON-schema tool definition the way Claude does. The more importantly what I did is the system instruction because there are couple of. System prompt"
    },
    {
      "time": 148,
      "speaker": "Instructor",
      "text": "widely, then I was aware of what those big prompts look like, so I haven't copied it, but I basically used the style and then manual tool called loop with conversation memory. This is the one of the most powerful features that Claude, why Claude Code makes Claude broad. Conversation memory. This is very important and unlike other framework with which they explicitly manage, I am actually manages everything manually here. And this is what this particular example make a difference. You"
    },
    {
      "time": 181,
      "speaker": "Instructor",
      "text": "can definitely take this example and try to run it. I have just implemented one or 2 features means there are hundreds of features like that what they got. So I think let's not compare that. I have created their own work with something very similar and same. A2A to connect, and server to host gateway. So lets see lets run the server first, python server, and we are running it. Um, and then we just wrapped. python client. Let's see, server up and running. Yep, it's running, and then let's run the Python client."
    },
    {
      "time": 227,
      "speaker": "Instructor",
      "text": "I think they got it there. Yeah. Sorry, Exit 13, isn't it? Yeah. Claude-style, that's it. Just generated that 5 and we got. the whole loop running. Solution sorted so. That's all probably. See you in the next part of the video. And all 6 frameworks are complete. You have agents running A2A with the same Microsoft Agent Framework, ADK, LangGraph, CrewAI, OpenAI, and"
    },
    {
      "time": 273,
      "speaker": "Instructor",
      "text": "Claude patterns. All discoverable, interoperable and Next up the most important the capstone example, which is a very real life example of a loan approval pipeline using 5 different agents orchestrating and having the human in loop. Thanks for watching this lesson on LocalM Tuts. Next is the lesson of the production grade loan approval system with 5 specialized agents and a human in loop 6th with a React dashboard with full observability. You can find the next video in the A2A Protocol course"
    },
    {
      "time": 309,
      "speaker": "Instructor",
      "text": "playlist in the description. I see you there."
    }
  ],
  "multi-agent-deep-dive": [
    {
      "time": 7,
      "speaker": "Instructor",
      "text": "Welcome back to LocalM Tuts. I am Nilay Parikh. This is Lesson 14 of 16, the multi-agent deep dive, our capstone lesson. In the last lesson we completed the framework tour with the Claude Agent SDK implementation. Now we bring everything together. If you are watching this as a standalone video, please find a link in the description below. You will find also example and interactive page link in description as well. This is the largest example in the course. Five agents and an orchestrator with"
    },
    {
      "time": 40,
      "speaker": "Instructor",
      "text": "a React dashboard. Clone the repo, open the lesson folder and follow along. 5 specialized agents in a pipeline. Intake validates application fields, Risk Scorer calculates composite risk score using deterministic rules, LLM reasoning, Compliance checks regulatory checks, Decision makes the call. 80% automated, 20% escalated to human. The Escalation agent handles the human review queue, and all agents share the model provider abstraction. The orchestrator discovers five agents via their Agent Cards, routes the"
    },
    {
      "time": 78,
      "speaker": "Instructor",
      "text": "application through the pipeline, and handles the 80/20 split. The React UI shows the real-time approval status, and the telemetry dashboard tracks every span. This uses every pattern from the course: Agent Card discovery, Agent Executor, to_a2a shortcut, bridge packages, LLM-based routing, chain execution, error recovery, MCP, A2A together. See the full pipeline in action. We will start all 5 agents on their assigned ports. Launch the orchestrator. Watch it discover each agent, route the application through the"
    },
    {
      "time": 120,
      "speaker": "Instructor",
      "text": "pipeline, see the entire 80/20 decision split in the real time and this is the practical session. Pause the video if you need to catch up. Lesson 14 practical implementation. It's one of the most comprehensive example of all. You can see here you got a compliance agent, compliance server, decision agent, decision server, escalation agent, escalation server, intake agent, intake server, model provider, orchestrator, server orchestrator, risk scorer server, Risk Scorer agent, and this is the script"
    },
    {
      "time": 159,
      "speaker": "Instructor",
      "text": "where you can run all of them at one go, and this is the script that submits them for testing, and one of the scripts for telemetry to capture the OTLP. I have managed to get everything up and running in terms of servers, so I got all the servers now loading. It will log everything in here whenever we start it, so we can always go back and check what is happening. It is running on 10100, 10101, to 10105, and the orchestrator works on 10100, while the REST API is on 8080, and I also got the dashboard pending."
    },
    {
      "time": 202,
      "speaker": "Instructor",
      "text": "the dashboard up and running on port 3000 and let me get that dashboard here. So you can see here dashboard. There is nothing in that place right now and let us see how we do when we submit the batch. So I am just submitting the batch pipeline and let us see how. the agents work. And by the way, if you haven't got access to Visual Studio Code, then obviously go to our interactive page. It explains very well, and as you can see in the real time we are getting this."
    },
    {
      "time": 248,
      "speaker": "Instructor",
      "text": "dashboard up and running, so you can see the telemetry. What is happening. Decline process. Oh, there we go, we got one escalation. You want to approve or reject? And there is a. Well done a couple of them are being processed, and it is a very detailed documentation. You should I would give you a long read on this and it will help you understand what it does. It is one of the real-life agent architectures, but still I would say. The true production real life agent of architecture would be even more complex"
    },
    {
      "time": 285,
      "speaker": "Instructor",
      "text": "than this, but it should give you rough idea what we are looking for when we call a production and its its a very good example to walk through. Its got a lot of Q&A, and you got a lot of important code highlighted here. As it is pending, and there we go, we got everything sorted. So as you can see here if I go on my umm on the on the page. And I say, you know what I want to do. Umm. Okay, so 25% rejection, 4 applications successful, 2 applications failed. You can see here what is happening with the trace"
    },
    {
      "time": 330,
      "speaker": "Instructor",
      "text": "waterfall. Escalation queue, there are 2 being escalated, and I say OK, I find this useful and by the way this. All data is generated by semantic models. This is not generated by any structured or deterministic architecture. So this is the beauty of it. It translates into an architecture, into a UI for the, for the structure, not just for UI, but it actually generates everything via LLM. So let let me say I am happy with this call. And I just get it approved, it"
    },
    {
      "time": 375,
      "speaker": "Instructor",
      "text": "been set up and it will move forward. And I say, uh. next. Detailed, and I'm going today to request the info to be sent, and if I go into dashboard then you can see the info requested and then you can review approved. So this is human-in-the-loop. You can also make a human in loop in a way that once the human add something even further AI. Umm process can happen and then again it can put back into the human loop unless he is comfortable. So it's a very interesting pattern when it comes to human in loop and how"
    },
    {
      "time": 414,
      "speaker": "Instructor",
      "text": "to integrate that along with this architecture. So umm so let's see how the logs work. So if you see the compliance log, then it has done everything that needed. Trace IDs everything it has logged. And based on this, we make the responsible AI and responsible agent AI. Why? Because we can actually go back and validate that what and how the decision been made by AI. It is very essential whenever we are using AI, we should have the very good traceability to understand that. If AI made any mistake then"
    },
    {
      "time": 451,
      "speaker": "Instructor",
      "text": "why? And if AI was successful consistently then why? So we can preserve the consistency and we can start. Removing the the kind of area where AI is struggling. So yeah, it's it's a very detailed way of what is happening and you can see that all the servers logged there. stuff, um, and yeah, that's, that's all for now, but I hope you like this example. I would if, if I am studying A2A, I would give this particular practical session the highest amount of effort. And highest amount of"
    },
    {
      "time": 497,
      "speaker": "Instructor",
      "text": "Focus and time and go through this code very detail in in detail. This will help you to build many production grade design patterns. Because there are lot of design patterns I have put in it, it may be practically impossible for me to go through each and every, but it's one of the models that you can take forward, and build something on top of it. Yeah. So if you got any questions, if you got any, any request for me, just drop commands. So reach out to me and I will try my best to come back to you."
    },
    {
      "time": 536,
      "speaker": "Instructor",
      "text": "This is a production-grade multi-agent system: 6 frameworks, 4 models, 2 protocols, one standard. We proved A2A makes framework and model choice local decision, not the system wide constraint. Thanks for watching this lesson on LocalM Tuts. In the next lesson we will cover the advanced production patterns: protocol extensions, security, handling with OAuth, mTLS, OpenTelemetry, observability, and enterprise compliance. However we are not going to deep-dive with any of these topics, but we will"
    },
    {
      "time": 570,
      "speaker": "Instructor",
      "text": "touch base on them and understand what is expected of each of this area. But whenever we are writing in, whenever we are writing the new course in future with the advance use cases in mind, all of this will be discussed and understood in detail. You can find the next video link in the A2A Protocol course playlist in the description and I see you there."
    }
  ],
  "advanced-concepts": [
    {
      "time": 5,
      "speaker": "Instructor",
      "text": "Welcome back to LocalM Tuts. I am Nilay Parikh. This is Lesson 15 of 16, Advanced A2A Concepts. In the last lesson we built a production-grade loan approval pipeline with 5 specialized agents, human-in-the-loop review, and a React dashboard. If you are watching this as a standalone video. Find the complete course playlist linked below in the description. If you are looking for practical implementation of code, check Lessons 5 to 7 for A2A building blocks, Lessons 8 to 13 for 6 framework integrations,"
    },
    {
      "time": 40,
      "speaker": "Instructor",
      "text": "Lesson 14 for the complete end-to-end multi-agent orchestration pipeline. This lesson covers the production pattern, security, observability, compliance, that turn those implementations into deployable systems. However, we are not going to deep dive and hands on on every aspect of advanced topic. We will keep another tutorial separate for this hands-on and advanced deep dive. And in future we will let you know once that tutorial is ready. So please make sure you subscribe so whenever it's ready you"
    },
    {
      "time": 75,
      "speaker": "Instructor",
      "text": "get the notification. Moving from development to production requires attention to 4 pillars: protocol extension for custom capabilities, Transport security for encryption and authentication, observability for operational visibility. And compliance with the regulatory requirements. There are 4 types of extension: data-only extension which adds extra data like priority levels and SLA tags. Profile extension defines standard capability bundles such as like Healthcare, compliance,"
    },
    {
      "time": 108,
      "speaker": "Instructor",
      "text": "profile. Method extension adds new JSON- RPC methods like task batch, and the state-machine extension adds new states such as digital states, to reviewing or approving. The extension lifecycle is straightforward. Define the extension with URI and schema, declare it in the Agent Card, and the client checks compatibility during discovery, and then uses the extension in the method or skips it gracefully if it is unsupported. Every production deployment must use TLS 1.2 or higher. For authentication, A2A supports"
    },
    {
      "time": 144,
      "speaker": "Instructor",
      "text": "Bearer tokens, OAuth 2.0, OpenID Connect, and mutual TLS. The security scheme is declared in the agent card just like open API. The most common pattern is OAuth 2.0. With client credentials for machine-to- machine communication. Observability is critical when you have multiple agents in a pipeline. Open telemetry gives you distributed traces across the boundaries. The key is: traceparent header propagates through A2A requests. Each agent creates a child span linked to the parent and giving end to end"
    },
    {
      "time": 179,
      "speaker": "Instructor",
      "text": "waterfall in Jaeger. Here is what propagation looks like in practice. The orchestrator creates the root span. Each downstream agent, QA, Research, Code, creates a child span. All the spans are exported to OTLP collector. Which feeds into Jagger UI for visualization. One trace, multiple agents, complete visibility. Here is your Enterprise Readiness checklist 10 items. Convert a development cycle into production: TLS on all endpoints, OAuth or mTLS, skill-based authorization, open telemetry tracing,"
    },
    {
      "time": 224,
      "speaker": "Instructor",
      "text": "structured logging, Prometheus metrics, PII redaction, data retention policies, health monitoring, incident runbooks. Check off these 10 on your A2A deployment if it is production ready. Thanks for watching this lesson on LocalM Tuts. In the final lesson you will recap the full A2A roadmap and next steps for production lifecycle, continuous learning, community engagement and find the next video in the A2A Protocol course playlist. See you there."
    }
  ],
  "conclusion": [
    {
      "time": 5,
      "speaker": "Instructor",
      "text": "Welcome back to LocalM Tuts. I am Nilay Parikh. This is the final lesson, Lesson 16 of 16, Conclusion and Next Steps. In the last lesson we covered advanced production patterns, protocol extensions, security hardening, OpenTelemetry, observability. If you are watching this as a standalone video, please find the complete course playlist in the description along with the interactive URL for the homepage of this course. If you join us primarily for code, all practical examples are visible in the"
    },
    {
      "time": 35,
      "speaker": "Instructor",
      "text": "course repository link below. Lessons 5 to 7 cover the core A2A concepts, Lessons 8 to 13 have runnable code for every framework, and Lesson 14 is the full capstone pipeline. This is a final recap for the journey maps out the next step. You started with. little or zero knowledge of A2A. Now you have built some loan validation domain across the 6 frameworks, proving A2A makes framework choice invisible. Then you combined the 5 specialized agents into a production pipeline for the important real life use"
    },
    {
      "time": 72,
      "speaker": "Instructor",
      "text": "case. Let me recap the technology stack. Two protocols: A2A for agent-to-agent and MCP for agent-to-tool. 6 frameworks: A2A SDK, Microsoft AF, Google ADK, LangGraph, CrewAI, OpenAI, and Claude. 3 model families, all free-tier or local, no expensive cloud ML bills. Throughout the course you have practiced 12 patterns: Agent Card discovery in every lesson, Agent Executor wrapping, A2A shortcuts, bridge patterns, intent routing, chain execution in the orchestrator, parallel execution, error recovery, MCP, A2A,"
    },
    {
      "time": 112,
      "speaker": "Instructor",
      "text": "multi turn role based delegation. And extension mechanism. Six takeaways. First, A2A is a protocol, not a framework. It defines how agents talk, not what they do. Second, Agent Cards are the foundation. Every interaction start with discovery. Third, MCP plus A2A equals the complete stack. Fourth, model choice is local. Each agent picks its own 5th framework choice is also local. Opaque execution at work. 6th local first is viable. No cloud ML dependency if we do not wish to. Three paths"
    },
    {
      "time": 153,
      "speaker": "Instructor",
      "text": "forward: path one, continue learning, add a new framework agent, implement cross- agent multi-turn, or build real- time visualization UI. You can also go to production, add OAuth, Open telemetry, containerise your agent and path three, join the community, contributing to A to A and. And share the knowledge. A2A will reduce the multi-agent integration problem from N squared to N. This course proved it by connecting agents across the 6 frameworks through a single protocol. The future of agentic AI is interoperable."
    },
    {
      "time": 195,
      "speaker": "Instructor",
      "text": "A2A is the protocol making it happen. Thank you for taking this course. Now go and build something amazing. And make sure you subscribe to local LocalM Tuts so you do not miss out on any new exciting project podcast tutorials. Until next time, keep building."
    }
  ],
};
