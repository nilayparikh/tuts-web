// Source-backed from courses/content/ai/self-evolving-data-engineer/course/*/*.{srt,sbv}
import type { PartTranscriptEntry } from "./types";

export const SELF_EVOLVING_DATA_ENGINEER_TRANSCRIPTS: Record<string, PartTranscriptEntry[]> = {
  "mutation-engine": [
    {
      "time": 0,
      "speaker": "Instructor",
      "text": "We spent the last decade building pipelines that move data, but in the era of Software 3.0, moving data is not enough. If your pipeline breaks today, a human has to fix it. That is a bottleneck, and it cannot scale. The next iteration of data engineering isn't about writing code better. It's about building an agent architecture that will self-evolve. Hi, I'm Nilay Parikh. This is a seven-part roadmap to building Data Engineer 3.0. Let's define the failure points before we start with the hands-on lab."
    },
    {
      "time": 40,
      "speaker": "Instructor",
      "text": "Operational input is frequently degraded through inconsistencies like drifting formats and duplicates, breaking systems. Poor data quality is causing losses exceeding up to five million in every one in four organisations, and up to five hundred million for many projects. So what could be the solution? One is certainly Software 3.0. But let's understand what Software 3.0 is. It's quite a vague term as of today. However, let me metaphorically explain it in our own context."
    },
    {
      "time": 79,
      "speaker": "Instructor",
      "text": "Think of it like a cavity wall, two rigid layers of brick, with the wriggling middle space which is hollow. And that's where we handle this mess. The AI lives in that middle gap, absorbing the vibration and variations of messy data, expanding or contracting to fix the discrepancies. While the outer bricks remain immovable, providing much-needed reinforcement and structural integrity. Moving from static code to programmable operators, where we use agents to find likely repairs in seconds."
    },
    {
      "time": 117,
      "speaker": "Instructor",
      "text": "Now let's just see this same thing we discussed. in a live example. So let's go and visit the code. In this hands-on, we will cover three important things: first, how to configure and run; second, end-to-end run; and third, get overall familiarity with this example. In this particular lesson, we will not dive into each individual component. For that, we have another six lessons coming after this. This first lesson will set a good stepping stone to understand the project end to end,"
    },
    {
      "time": 150,
      "speaker": "Instructor",
      "text": "and that will help whenever we are getting into it. We will have the broader and larger context why we are doing it and what are the benefits of doing it in such a way. The very first thing to start is our README file. README file will let you have quick commands and the documentation map. It's well documented and it has all the lessons clearly defined with the exercises that you can benefit from. The README will also take you to some other important documentation such as architecture detail and operations and"
    },
    {
      "time": 184,
      "speaker": "Instructor",
      "text": "tracing. All the commands are documented under the runbook. Reset and recovery will help you to bring the project back with the original state. That means you can do multiple, you can actually go on this project a couple of times, and if you think that, oh yeah, we have moved it a bit far and we need to come back, you can always reset the project. And also, setup and verify will ensure that you have a clean setup."
    },
    {
      "time": 213,
      "speaker": "Instructor",
      "text": "That is what most probably everyone would need just to see the single command to setup the project unless you want to go and install the project in specific configuration. All you need to do is pip install -e . That will install all the dependencies and everything it needs. The second thing is you can just run the status command. Then after, the status command will read all the configuration, tell you what it finds. Then you can validate if everything that you want is as per the status or not."
    },
    {
      "time": 247,
      "speaker": "Instructor",
      "text": "Dot env example is a place which you can copy as env file and this is just your own configuration. It will be picked up by the status itself. And then finally verify, verify will ensure that your project state is in correct state to run all these examples. So that's it, that's a perfect state. Now once we get there, we can actually run the loop command. Loop command is the one that makes us run everything end to end. And I'm running with the maximum iterations. That means it will stop after max iterations."
    },
    {
      "time": 281,
      "speaker": "Instructor",
      "text": "But let's understand what is this. We got input files where we have the discrepancies and the data inconsistency. So these input files have been read. The gold standard is something we just use to compare. It is nothing much more. But from here we read them, we process them. Some of them will be processed deterministically. Some of them will be processed non-deterministically. It will process everything that deterministically can be put into master."
    },
    {
      "time": 311,
      "speaker": "Instructor",
      "text": "What it can't process deterministically, it processes as failures and then attempts to process them into success. But instead of that, there is a better way. The dashboard which is running on a Streamlit app. And once this process is complete, we walk through there. Perfect. The dashboard is there. So now just refresh it. So we get the latest. Go to the Round Blueprint. And you can see here all the information as needed. Now this recalls what we discussed about Software 3.0."
    },
    {
      "time": 343,
      "speaker": "Instructor",
      "text": "It tells you the execution and the judge metrics. It's more advanced when we discuss the judge. It will help us to understand what judge metrics are like. But look at this mutable genome diff. This is where we started a deterministic component. clean_data_starter.py and clean_data.py. These two files are the genome files. This is just to actually copy over in case if we modify manually, just to keep the starter there. That's all. That's the only purpose of this starter. However, once the genome has been copied,"
    },
    {
      "time": 380,
      "speaker": "Instructor",
      "text": "then you can see that the model has decided to obtain a lot of the things from a deterministic output. It maintained the deterministic output, but then beyond the deterministic, it actually started putting non-deterministic mutations. So these all mutations are actually coming from our LLM, and how they define these mutations in the dataset, we provide hints. In LLM calls, it has skills as well, and it got a context. So based on a context, based on a skill, and based on a hint of the schema structure,"
    },
    {
      "time": 421,
      "speaker": "Instructor",
      "text": "the LLM can decide how to deal with every individual data inconsistency. In real life, the project we build in our organisation, we have a ninety-nine percent recall rate, which means out of a hundred that fail deterministically due to inconsistencies, we are able to recover almost ninety-nine percent out of them. And that's the power of this particular implementation. So let's go back on a CleanLoop example again. So here we process everything deterministically, and once it has been deterministically processed,"
    },
    {
      "time": 459,
      "speaker": "Instructor",
      "text": "you can go into Data Quality and understand what exists. It will tell you all the data that exists there. And also there will be one log table that explain what exactly we got and the statistics. And in Diagnostics, we have a perfect understanding here. The Proposal Events. So when a data has been picked up, did we actually revert? Did we generate a candidate? How do we work along with the LLMs? And when we go through this, it will give you the perfect understanding of everything, before and after, to"
    },
    {
      "time": 498,
      "speaker": "Instructor",
      "text": "understand where you need to make tuning, where you need to make changes, where you need to make improvements. This is a very detailed way to actually assess instead of system logs being logged manually. Right. So then we go, that's quite detailed work that we discuss. Here is the Row Decisions. This is also very important. It picks up the row and then it will tell you from each and every function whether the decision was deterministic or whether the decision was based on a mutation playbook."
    },
    {
      "time": 534,
      "speaker": "Instructor",
      "text": "If you find a mutation playbook, that means the LLM has decided for us instead of just the algorithm that we provided. And if it is deterministic, then it's algorithm that we provided. So all the data which are clean were processed by algorithms. But those data which were incomplete were processed by LLMs. Now what kind of mutations can we actually process? For example, it has a CSV and the row is broken. It got a CSV and the rows and the columns been shuffled."
    },
    {
      "time": 568,
      "speaker": "Instructor",
      "text": "It got a CSV and some data is missing. And the LLM understands where the data came from. Etcetera, etcetera, etcetera, etcetera. You can think of anything. Yes, if we can think of anything, yes, we can implement to fix it. That's the power of this particular implementation. Let me give you a very powerful example that we actually achieved in our own organization. We were sitting on more than fifty data feeds, which were extremely inconsistent. Like almost fifty percent of data was not able to process, and why?"
    },
    {
      "time": 605,
      "speaker": "Instructor",
      "text": "Because it comes from various job markets. The job market, we collect the data, and then we build the outlook for the Indian economy macro. And that to building an economy macro, we need to collect from official sources and more than two gigabytes of data every month. Manual fixing that data used to cost around two hundred K to three hundred K a year. It was not economically viable, so we decided to get a paid feed from somewhere else."
    },
    {
      "time": 636,
      "speaker": "Instructor",
      "text": "Since we have implemented this particular process six months ago, we have now recovered up to ninety-nine percent, and we have taken out the complete dependence on manual process. We also can offboard it from third-party tools and third-party feeds. Now let me show you how accurate it is. So this particular whole dashboard is actually generated by this Software 3.0 data jobs, which come from the system feed, which come from government feed, which come"
    },
    {
      "time": 671,
      "speaker": "Instructor",
      "text": "from informal sources, and from many other places, which are very much nightmare to put into structured database. However, the success of this particular project was so powerful because the non-deterministic recovery rate was ready to go up to ninety-nine percent. And therefore, we even built accuracy beyond professional data feeds that we could ever scrape with so large sum of money. That's the power of Data Engineer 3.0, and that's how you can actually build an AI data engineer."
    },
    {
      "time": 707,
      "speaker": "Instructor",
      "text": "The premise is we look for the failures and turn those failures into success. Now let's go back on the presentation and complete the lesson. The course follows the boundary-first and autonomy-last structure where each point introduces a minimum mechanism that relies on the foundation of the previous one. Lessons one and two are the bounded surface. Lessons three and four are where we control the flow, especially the loop, the structure moving into automation,"
    },
    {
      "time": 737,
      "speaker": "Instructor",
      "text": "where we will be using AutoGen as our orchestration framework. Lessons five and six are where we add the pressure and search. The complexity is higher there, which will increase by raising difficulty and comparing multiple decision candidates and choices. And lesson seven, where we wrap up the whole thing and test whether it's resilient enough for production environment. Let's take the whole course in one image. This is the contract for the whole course. Keep that shape in mind for every lesson that follows."
    },
    {
      "time": 770,
      "speaker": "Instructor",
      "text": "The model usually now is not the slow part. The reality is the human reading the failure and fixing it, deciding the next move, carrying the loop memory forward by hand. Now focus on the center, that's the editable surface, the judge stays fixed, and the feedback cycle stays cheap to repeat itself. The ladder is on the right, which matters because the autonomy is earned, not assumed. You prove the narrow loop works first, then add observability, and only then widen pressure and the search depth."
    },
    {
      "time": 804,
      "speaker": "Instructor",
      "text": "This is something you can also do as a progressive widening, especially in the loop process. So you can have ten steps where slowly it starts with the narrow, keep getting out with higher-confidence fixes. Once those higher-confidence fixes are through, and the loop is at the end of it, the funnel goes further and make sure it provide enough pressure to carry out the right set of data with the correct resilience that we want. So it can allow us to decide what is the minimum we are ready to accept."
    },
    {
      "time": 837,
      "speaker": "Instructor",
      "text": "Now, let's understand. So this engine is a simple process: the bounded surface, fixed judge, and repeatable loop. Now let's go back on another important diagram. It's the full mutation process. The word and the terminology we inherit from genome genetics, the biology. It's a similar process. However, it is very widely used in this context in artificial intelligence. We borrow a lot of biological terminology in artificial intelligence anyways."
    },
    {
      "time": 867,
      "speaker": "Instructor",
      "text": "This diagram shows the actual mutation process. The agent can mutate the genome but cannot rewrite the judge. that decides whether the change survives or not. The middle divider matters more than labels. It's the safety glass, the boundary. On the right, the genome is highly editable. This is where it spends most of its search budget, because it's the only editable part. At the bottom, failure of the output contract becomes the repair signal,"
    },
    {
      "time": 897,
      "speaker": "Instructor",
      "text": "and the repair signal leaves the arena and heads back to the orchestrator. That's why we say, at every level, release some more pressure and allow the fixes to go through. But however, those fixes that are not successful still go through as a repair signal. And we keep mutating and mutating the genome as long as it takes. So this mutation process, in one word if I, one sentence I would say is a fixed judge, isolated mutation surface, and feedback routed back as a repair signal."
    },
    {
      "time": 930,
      "speaker": "Instructor",
      "text": "This particular example, I'll link it back from the repair signal. We've reached the lesson end. You have now the contract. Loop stays bounded, judge is fixed. AutoGen sits above the mutation surface instead of swallowing it. Next, we will zoom into the genome itself, which will be the next part of the slide. Thanks for watching this. Make sure you like and subscribe. So whenever the next part arrives, it straight comes to your timeline. Thank you. I'll see you in lesson two."
    }
  ],
  "pipeline-genome": [
    {
      "time": 0,
      "speaker": "Instructor",
      "text": "Most self-improving systems don't fail because the idea is wrong. They fail because they are mutating the wrong thing. If the error surface is too broad or too narrow or too vague, they will get noisy very easily. It loses the clarity and the rollback strategy guesswork. So the lesson focus on one thing: defining the genome. Once the mutation surface is clearly scoped, every decision that follows will become easier and absolutely reason to abort."
    },
    {
      "time": 36,
      "speaker": "Instructor",
      "text": "So here is the first thing. At the high level, think of this course as a one-boundary system. Each lesson adds some mechanism. But the earlier contract or earlier lesson is always running underneath. So I would recommend if you haven't watched lesson one, you will go at lesson one as well to make sure you have a connected and in-depth context. However, if you understand this concept, misconception. We will have a small recap in a hands-on session as well."
    },
    {
      "time": 73,
      "speaker": "Instructor",
      "text": "Lesson one: we establish the core contract, the mutation surface, one fixture, and the evidence trail, and the end to end run to understand how the overall context could look like. The choice of our framework sits on top of the orchestration seam. Not on the correctness boundary. That's important. This lesson builds directly on the top of that foundation. We are not restarting. We are extending where we left. The same mutation engine by defining the pipeline genome more precisely."
    },
    {
      "time": 113,
      "speaker": "Instructor",
      "text": "So keep the focus of the mind from the lesson one and we have a quick recap in hands-on as well. Everything from earlier lesson is still active, and this piece will only add some more work because the structure is already in place. Here is a thing to memorize: from a full genome, that fits a single file. That's what makes autonomous notation actually reviewable instead of just looking impressive. However, I must tell you in some real cases where you might have multiple genome files in a one scope, and you should."
    },
    {
      "time": 153,
      "speaker": "Instructor",
      "text": "We do have, but that's very much based on architecture by architecture and case by case basis. So don't be afraid if there are multiple genome, and don't be afraid if there is a there is a single scope genome. They both work as long as the case is sufficient to make those calls. A failure signal only useful if it maps clearly something fixable, and that's what this lesson is all about: how to identify what is fixable. We just don't want to draw a sort of infinite wish list to LLM to fix it,"
    },
    {
      "time": 192,
      "speaker": "Instructor",
      "text": "because that will most likely lead to hallucination and incorrect and over pressing LLM inference over the data. So we need to first understand very quickly that what is fixable. A bounded genome turns a vague issue into concrete diffs that the loop can actually act upon, and that's what saw in the lesson one hands on as well. How does it pick it up each and every use cases or each and every this interfaces? And during during genome."
    },
    {
      "time": 224,
      "speaker": "Instructor",
      "text": "Giving the genome file one is in just a minor friendly, it's actually human friendly as well. But as said, it could be multiple as well. It's easier to inspect and easier to find a defect in a git, because git is also underneath. A part of our solution, and it's part of the rollback strategy, and it's easier to reset. As I said, trust come from trying every different, from measurable outcome. That's where I think majority of the mutable agents do fail. How do we measure a mutation?"
    },
    {
      "time": 260,
      "speaker": "Instructor",
      "text": "Is it just the binary success of failure, or is it something the quality of a success of failure? Well, we'll cover that in a later lesson as well, but it's important to understand. This is the one of the core principles that's why we will make such choices. The outcome banner and the trust signal make it possible to evaluate changes based on the evidence, not on the intuition. So the core idea is pretty much simple. Failure lands on a single same different state small."
    },
    {
      "time": 295,
      "speaker": "Instructor",
      "text": "The result are measurable, and that's what makes a genome safe to evolve. Now, let's open the genome file in our hands-on lab where we go straight now, and make sure you have the GitHub checkout. The link is in description below, or comments wherever you're watching this particular lesson. And it would be useful to be ready beforehand. We start the hands-on lab, so even person get everything ready for you. So that's it. Let's go on this tutorial code and let's figure it out from there."
    },
    {
      "time": 330,
      "speaker": "Instructor",
      "text": "So we are on the tutorial code. I would this time, last time I suggested to start with reading. This time I would say, because the lesson one gave you a good understanding of what a genome and on look like, so you can actually start from Lesson Two itself. And here is the preview of lesson two I have created. So it would be easier for everyone to just quickly go through this to understand. And if you are only coming from a this video itself, you can actually go on lesson one to give a quick."
    },
    {
      "time": 367,
      "speaker": "Instructor",
      "text": "Now, where we left this was the whole example, and we left here. You can see the fast fading trigger, what it says the fading signals. The next chapter, and at that time I said just leave it there, we'll pick it up in the next chapter. And this is what the flow of the first. Let's and I'm sure that you have finished those exercises as well. Take, give or take some advanced exercises to make sure that learning has actually happened across. Now let's go back on a lesson two."
    },
    {
      "time": 399,
      "speaker": "Instructor",
      "text": "Where you see the fading signals coming from there through the focus lens, which I already discussed. I'm not gonna waste time here. That is the execution flow. You can actually go in that file, which is in the architecture. And let's load the execution flow, which has all the execution flow across our codebase. So this is a master execution. This is how the actual flow look like for the full execution. Full full, um, um, clean clean look, uh, example."
    },
    {
      "time": 430,
      "speaker": "Instructor",
      "text": "From lesson one, lesson one has a very any much sort of a execution flow from lesson two. It will help you understand. The process happen is far input side been read by this particular function. So you can actually go and query in the function as well. Normalize the numerical amount. That's kind of a, and um, this, what we call it, um, data analytic analysis where it's happening. And trying to understand what is fixable and what is not fixable because we want to keep bounded and that's"
    },
    {
      "time": 463,
      "speaker": "Instructor",
      "text": "not just in the limit of, of physical file, but also understanding what we are trying to solve with it. We are trying to not solving a problem of a universal, um, data engineer. We are using uh harness or AI agents. We are particularly looking for a use case where finance CSVs are having discrepancies in the format, shuffling in the row and inconsistencies. We are particularly focusing on that problem. So the boundedness, the bounded context or bounded mutation is not about bounding a physical limit of a file,"
    },
    {
      "time": 498,
      "speaker": "Instructor",
      "text": "of course that's part of it. But it's also about bounding it towards the functionality and what the problem we are trying to solve. That's a very important distinction. Everyone need to understand when they make this word meaning for said bounded mutation. It's a bounding from physical aspect of it. It's a bounding from a problem solution aspect of it. So we are looking for certain problems and solution. Now whatever fix a bug using a deterministic algorithm decision."
    },
    {
      "time": 531,
      "speaker": "Instructor",
      "text": "Yes, we can fix using a deterministic and then it will go and fix those things deterministically. But those areas which are non-deterministic and it's very difficult to fix by the if else or the kind of a complex conditional rule. So to solve that problem and to have give a little bit of beginning space. I said, what is what is software midpoint zero. It's a cavity wall to storm brick layer. Between that, there is a middling space or the middle hollow space where things can actually make shuffle,"
    },
    {
      "time": 565,
      "speaker": "Instructor",
      "text": "make a right decision. How to handle it. For example, if the outside it's very heating, heated environment. The middle insulation, the cavity wall will ensure that heat does not transmit directly on other side of it. It is a single brick wall. It would. On the same side, if we got some noisy, um, a party going on inside the house, the cavity wall will also ensure because of the absorption of, um, um, the audio audio waves, um, and it could reflect each other."
    },
    {
      "time": 598,
      "speaker": "Instructor",
      "text": "And outside, it won't be static. Um, people won't be able to hear that much. And that's the benefit of it. So what it does, it solves that purpose. It fixes the mess in between, and that's the same thing. Whenever the data comes through, or it they can use the same principle. Whenever the sending data was some part, the the limit of contract flexibility is available as that regulating space and that regulating space or that middle office space is filled with the AI. When the AI can make those decision,"
    },
    {
      "time": 635,
      "speaker": "Instructor",
      "text": "and that's where we are choosing what scope of a problem and those mutations. We will be generated by LLM itself based on the mutation we have identified, and those mutations will be fixed. Twenty-five mutations are fixed by the playbook, which was generated using LLMs, and then added to the master CSV, which is basically our output file, and it looks pretty much simple. So let's say it it looks pretty much structured, yeah."
    },
    {
      "time": 666,
      "speaker": "Instructor",
      "text": "And what mutation failed that generated signals, but I already shared with the better way to access it. Which is a streamlit, streamlit dashboard which will open it later. And some baseline code that T C Z when functions we will run, but I would say go and have read about it before we go. I have left some of the some of the code anchors here. You can see I have left some of the code anchors. You can take them and just see what those code anchors look like."
    },
    {
      "time": 699,
      "speaker": "Instructor",
      "text": "Um, sorry, this one. You know for me. Using wrong shortcuts. Anyways, the clean_data_runtime here, what it does, you have some sort of a, and this finding the file as a, learner facing point, and this is where the actually deterministic loop, basically start. This normalization, which is the mutation playbook. However, this normalization actually start, first as a deterministic, so it try to normalize, using a deterministic approach. If the amount text does not normalize, then try to resolve the mutation rule."
    },
    {
      "time": 738,
      "speaker": "Instructor",
      "text": "Once it start resolving the multiple mutation loop, and those mutation rule rules are available in basically. Um data set, so we have already defined what are the mutation rule, and this is what the bound it does is, so we providing mutation in a long way, the prompt and the skills, and of course you can add more things is, is you want. As a context, there is nothing, nothing stops you, how to use algorithms, but I'm using, I'm using the simple using a mutation hint and action."
    },
    {
      "time": 774,
      "speaker": "Instructor",
      "text": "So that's how the mutation, playbook actually get generated, which is so here. Sorry, that something, we saw here in execution flow executed. Yes, the mutation playbook, and then mutation got fixed. So that's where we are basically. Um. See the code, read the code, and understand what is happening. The export writer, it say this order. If we go in this order, export writer two and two, it explain how we actually generate those exported values as well. Um, so let's go and basically see if we got status valid."
    },
    {
      "time": 813,
      "speaker": "Instructor",
      "text": "The first milestone is to check everything is configured. Yes, my version is Phi-4, and there is a reason why I'm using the lower end of LLM. It's because this approach is very useful if you can actually host local or or cost-effective LLM interfaces. However, if you got a use case where you want to actually use more advanced LLM, then always prefer that whichever fits your case. So you don't have to just consider like okay, it's better to go for SLMs or medium or large."
    },
    {
      "time": 851,
      "speaker": "Instructor",
      "text": "It's a case by case basis, but because I use it, because I prefer, I'm not doing that complex operation which require additional additional intelligence that I have to pay for. So I'm using it. I mean, my organization as well. The ninety percent of our self correcting loops and all this software three point zero basically SLMs, and those SLMs are actually hosted by us using our own infrastructure in cloud, and it's most cost-effective way to handle it. So let's see it's working fine."
    },
    {
      "time": 890,
      "speaker": "Instructor",
      "text": "Brilliant. Let me just go and verify it. So we make sure that our LLMs actually connects. Oops, sorry. Wrong connectivity. Get. Let's see everything fine. Then I'm going to reset it. Well, the so it's connecting. Let's reset. Hopefully, reset as done, and let's call the event. So last time we called the loop. Loop will make it run end to end. Event will basically come to this point of example that we saw. So we can see here what it did. It actually passed all the mutation planning and everything that."
    },
    {
      "time": 930,
      "speaker": "Instructor",
      "text": "What it found, it matched the what it expected, based on the twenty-five from the board's validation, and then it generated the particular genome file. So you want to see here genome file is is in in in in actually it runs dynamically. So so the code is not actually saved. That's what we are not doing that in this particular example. But you can always use worktrees. Worktrees are the better option for production implementation. We use work trees. So it always creates a worktree,"
    },
    {
      "time": 964,
      "speaker": "Instructor",
      "text": "run the worktree and/or roll back the worktree whenever it needs. Don't go with the branches otherwise you will inflate the git history a lot. The work trees are better, it runs locally and then it just destroy itself. If you need to check in then we bring it in and we keep the mutation alive. Or we can actually adopt that mutation into permanent startup point as well as a starter genome as well. So that's something is called something is called the habitual learning."
    },
    {
      "time": 997,
      "speaker": "Instructor",
      "text": "So once we understand what is a habitual learning from the mutation, mutation and actually also make autonomous decision how to change the genome starting point. So currently a genome starting point is very simple. It's a given static point. But in future if you find that these are the these are the repetitive offenders then behavioral learning is very important as well. It's slightly different from reinforcement learning."
    },
    {
      "time": 1027,
      "speaker": "Instructor",
      "text": "We pick it up in the latest stage because there are many different many different approaches and strategies. Then apply in this course we'll keep the code mutation at this stage. But I'm going to do more courses where we would do behavioral mutation using the prompt mutation and the skin mutation as well, which is both. And in terms of adopting the behavioral mutation along with the code mutation as well. So there there are three or four different elements of this particular pattern,"
    },
    {
      "time": 1060,
      "speaker": "Instructor",
      "text": "and we take it one by one as we finish the courses. But this is what our hands on look like. I would also recommend you to. Um, both for ah exercises in this case, um, which is start with simple, go how far you can go and reset as many times you want, and uh from a dashboard point of view, um, you just run this command `python util.py dashboard` and that will bring the dashboard. Um, here this will it, um, browser, supporting browser and this is a dashboard, so you can always go through here."
    },
    {
      "time": 1098,
      "speaker": "Instructor",
      "text": "It will it will have all the sort of data quality validation which we have found, and we provide you everything that you need. So yeah, that's that's all for this particular hands-on session. Let's go back to our labs and see what um what remaining parts we need to discuss. Well, okay, so let me go back to the labs. Welcome back at this point, the genome is clearly defined. The loop now as a concrete place to apply some pressure, and you have a boundary that you can define."
    },
    {
      "time": 1135,
      "speaker": "Instructor",
      "text": "And as I said, the boundary is not just physical but also the function, especially from problem domain boundaries as well. Next lesson, we will bind up the orchestrator, and that's take the final evidence and turn it into the candidate mutation verification and selection because it looks at the judge and everything else as well. And then once it has been validated, we decide whether we accept it or reject it. I mean to say, revert it. So we'll discuss that in detail with orchestrator."
    },
    {
      "time": 1174,
      "speaker": "Instructor",
      "text": "But thank you very much for joining, and I'll see you in the next lesson."
    }
  ],
  "orchestrator": [
    {
      "time": 5,
      "speaker": "Instructor",
      "text": "Now the genome is clear. The next question is control: who reads the failure, who asks for the next change, and who decides whether that change should stay? That is the job of the orchestrator. You can think of it as the brain of the loop, but it only works because the judge and the genome were bounded correctly first. Think of this course as one continuous example. Each lesson adds new modules and components, but the earlier lessons are still running underneath. Lesson 01 defined the loop boundary"
    },
    {
      "time": 50,
      "speaker": "Instructor",
      "text": "and placed AutoGen at the orchestration seam. Lesson 02 defined the genome as the one place where changes can happen. This lesson builds on those parts. We are not starting again. We are extending the same system. Now look at the diagram. This is the control layer of the system. It reads the failure, asks for a fix, runs the test, and then either keeps the change or rejects it. The first job is diagnosis. The loop reads the current"
    },
    {
      "time": 100,
      "speaker": "Instructor",
      "text": "genome and the latest error so the next step is grounded in feedback instead of guesses. Then the proposal step comes in. It takes that context and suggests a small change, not a full rewrite, just a focused repair. Nothing is accepted because it looks clever. The system runs a deterministic evaluation and keeps track of what actually passes. Source control becomes part of the decision tree. Anything that fails is rejected and reverted."
    },
    {
      "time": 145,
      "speaker": "Instructor",
      "text": "So the orchestrator is not a black box. It is a layered structure. It combines deterministic control with one AI proposal step. That is what makes the system reliable and repeatable. Now let us go through the code and follow the orchestration flow. Focus on where the control path is fixed and where the AI suggestion changes. That separation is the critical seam. If that boundary is not clear in the code, it will create problems in real use."
    },
    {
      "time": 182,
      "speaker": "Instructor",
      "text": "We are now in the hands-on lab for Lesson 03, the orchestrator lesson. In the first lesson, we covered the full design of this example. In the lesson documents, you can find the markdown file and the diagram we already saw. Now we move to the execution loop where this lesson lives: one loop around the system. Bear in mind that this example is sequential, but the broader idea is not limited to one orchestration style. In real projects, the orchestration could be parallel, sequential, or a mix of both. Any agentic"
    },
    {
      "time": 227,
      "speaker": "Instructor",
      "text": "architecture is acceptable as long as the control responsibilities stay clear. Here, the loop restores the genome, runs the starter, repairs the iteration, captures the baseline, and then continues until it either improves or exits. This is the seam between deterministic and non-deterministic behavior. The loop passes grounded feedback into the proposal"
    },
    {
      "time": 288,
      "speaker": "Instructor",
      "text": "step, and then the LLM suggests the next mutation. That candidate runs through another round of evaluation. The system checks whether the code improved and whether the result still holds under the fixed judge. Based on that, it decides whether to continue or stop. I have also left code anchors in the lesson notes. I strongly recommend reviewing those anchors because they show exactly how the orchestration path works. The commands are simple. Start with status. Then verify. Then reset. After reset,"
    },
    {
      "time": 330,
      "speaker": "Instructor",
      "text": "run evaluate so you can confirm the baseline. In this case, we expect 78 rows, 13 matches, and 48 missing rows against the gold data. Once that baseline is clear, run one max iteration and watch what the system does. While that run is happening, open the dashboard."
    },
    {
      "time": 460,
      "speaker": "Instructor",
      "text": "The dashboard helps you inspect the current artifacts, the score line, and the evidence surface. You can also see the current genome view and the trace decisions that explain"
    },
    {
      "time": 513,
      "speaker": "Instructor",
      "text": "what the loop is doing on individual rows. For example, you can inspect one row and see whether it passed through the deterministic path or whether it fell through to the mutation playbook. That distinction matters. It shows where the fixed logic still works and where the loop had"
    },
    {
      "time": 575,
      "speaker": "Instructor",
      "text": "to rely on learned mutation behavior. This is also why the dashboard matters so much in Software 3.0 systems. What matters is your control over the boundary between deterministic and non-deterministic components. The dashboard is not decoration. It is how you inspect whether"
    },
    {
      "time": 635,
      "speaker": "Instructor",
      "text": "the system is behaving the way you intended. In real implementations, this becomes even more important. You may have multi-pass mutation workflows or distributed agent systems that pass work across several agents before you get a final outcome. When that happens, traces become"
    },
    {
      "time": 704,
      "speaker": "Instructor",
      "text": "essential because they explain how each stage behaved and where a decision came from. In this lesson we are only talking about finance invoice data, but the same orchestration pattern can apply to real-time customer queries, logged client calls, or any other process you want to make agentic. The more autonomy you add, the more important the trace surface becomes."
    },
    {
      "time": 760,
      "speaker": "Instructor",
      "text": "Observability is also what lets you increase the pressure safely. Right now the loop operates in a"
    },
    {
      "time": 811,
      "speaker": "Instructor",
      "text": "constrained space. If you improve observability, you can gradually widen that space and raise the pressure so the loop can handle more complex discrepancies without losing control. That is where backtesting and trace review start to matter. When you make deterministic changes, you need to know whether the result is a real improvement or a regression. The only way to know that is to inspect what went well,"
    },
    {
      "time": 876,
      "speaker": "Instructor",
      "text": "what went wrong, and which use cases improved or degraded. We will cover observability directly in the next lesson, but the reason should already be clear. Focus on the dashboard, not just the loop execution. Understand how the"
    },
    {
      "time": 923,
      "speaker": "Instructor",
      "text": "decisions show up in the evidence layer. There are four exercises in this lesson, and I strongly recommend doing them. They help you understand score deltas, stored failures, and how to detect when the loop is getting stuck. They also force you to think about how to use observability as a practical control mechanism instead of a vague reporting layer."
    },
    {
      "time": 1015,
      "speaker": "Instructor",
      "text": "Now you can see how the loop works. The orchestrator reads failures, proposes changes, and lets the system decide what deserves to stay. Next, we add tracking and observability in a more explicit way. That will help you see whether the system is improving, stalling, or sending the wrong signals. Thank you for staying with this lesson. If you found it useful, please like, subscribe, and enable notifications so the next lesson reaches you directly. I will see you in the next one."
    }
  ],
  "observability-feedback": [
    {
      "time": 5,
      "speaker": "Instructor",
      "text": "Think of your system like a car dashboard. If you don't see speed, fuel, warnings, you're still moving, but you're moving blind. That's what mutation loops look like without observability. It doesn't improve. It just keeps changing. You need a surface that tells you which difference matters, which pattern keeps failing, and when a human should step in. This lesson builds that surface. This is the difference between engineering and guesswork."
    },
    {
      "time": 34,
      "speaker": "Instructor",
      "text": "Think of this whole course as one system, or one big example. Each lesson adds something new. But the earlier ones are still running underneath. So if you need to brush up those earlier concepts, just click the YouTube card in the top right corner to jump back to the playlist. In earlier lessons, we separated reader, proposal, and crucible inside the orchestrator. AutoGen, the framework we use, seems useful only if we can inspect the artifacts it produces. We are not starting over here. We are"
    },
    {
      "time": 66,
      "speaker": "Instructor",
      "text": "just adding observability to receive better feedback signals, so keep the full system in mind. Let's understand the memory of the loop using this simple architecture diagram. What it combines, it combines the run history, strategy state, live evidence, and operator control. Run history should always answer these three questions: is the loop improving? Is it repeating the same mistake, or is it blocking? If it cannot explain the current run, then likely it has no value. That is the core"
    },
    {
      "time": 100,
      "speaker": "Instructor",
      "text": "of observability. You must see what changed, which metrics moved, and what decision followed. That's the linkage, and that's a real feedback signal. Even in an autonomous agent role, you should be able to continue, reset, and intervene. Repeated failures often signal missing knowledge, not just missing effort. Observability, in my view, is not just a dashboard. It is a combination of history, agents, and control. Read the artifact like an operator. Don't ask"
    },
    {
      "time": 134,
      "speaker": "Instructor",
      "text": "just what happened once. Just ask what happened across the last three runs. What patterns do you see, and what do you do next? This is the skill that this particular lesson builds. So let's go to the hands-on lab and understand. There we are in our Visual Studio Code. If you haven't checked out our example, then please find the GitHub link in the description below. You can start with observability feedback. Like every other lesson, we got this markdown file where to"
    },
    {
      "time": 168,
      "speaker": "Instructor",
      "text": "start. It has some catch-up on earlier parts. You can also catch up on the first three lessons if you want. But these are the four important points which I want to discuss. First, observability, treat it always like an external memory. It's one of the most valuable data sets that you will capture. It will help you make your autonomous decisions better and better every time. Most importantly, those mutation and small decisions. So you can let the mutation surface grow and your pipeline become"
    },
    {
      "time": 200,
      "speaker": "Instructor",
      "text": "broader and broader. Therefore it will be able to handle far more edge cases than when we started, and that's the real use case of this observability as external memory. Always remember, the score and traces are two different questions, and they should answer two different questions as well. The score answers, did it improve? It's just a metric. It can tell you the holistic view. But the traces will actually tell you what happened to this particular"
    },
    {
      "time": 231,
      "speaker": "Instructor",
      "text": "use case, what happened to this particular row, or what happened to this particular application case. For example, why are score traces and row-level traces important? If, let's say, I'm applying for a loan, you have an autonomous agent such as this which processes that decision, multiple agents spread across a distributed architecture. Well, when it onboards, how will it establish that each and every system does know a process scope? It's a business process scope. It's"
    },
    {
      "time": 266,
      "speaker": "Instructor",
      "text": "not a system process, so it cannot retrieve. So, the very first onboarding system can generate some sort of correlation ID which will walk through across all the systems. And whenever we want to retrieve that information or observable points, we can actually retrieve using the same correlation ID. The reason is because the application can be processed twice or thrice. We want to see each and every atomic process and how it works, and that's why this is important. Missing"
    },
    {
      "time": 297,
      "speaker": "Instructor",
      "text": "artifacts are also very important feedback that one should not miss out. Well, I have added some code anchors. I would strongly recommend you to visit them. We are using most all of our observability platform. In this example, that uses OpenTelemetry, but we are not using the OpenTelemetry back end such as Grafana, Prometheus, or anywhere else because we don't want to add extra burden on the users or learners. So we are just using simple JSON files for persistency. However, in production use cases,"
    },
    {
      "time": 333,
      "speaker": "Instructor",
      "text": "someone might use the OpenTelemetry collectors or they might be using a Grafana stack, Datadog stack, any similar proprietary or open-source architecture and stack. The reason is because it will provide better control for production systems. However, for example, this is sufficiently enough. It can store the same architecture, same design, and same attributes in JSON files, and we'll walk that in the dashboard itself. So it stores everything here by default,"
    },
    {
      "time": 365,
      "speaker": "Instructor",
      "text": "and we can actually understand what is happening there as well. So let's go back to our code. Yes. So you can always walk through everything that is essential for this trace recorder. You can see and try to observe how we are actually building the trace runs, run IDs, and the correlation ID. That's actually the understanding that we need to build across this whole ensemble. Correlation IDs are absolutely essential and one of the keystones"
    },
    {
      "time": 402,
      "speaker": "Instructor",
      "text": "and key skills when we build any observability platform. So let's go back to our documentation. You can actually run using the dashboard, where I'm already running it, and I got my dashboard open. In this dashboard I have done a very simple thing. As you can see, the run, how many runs we have processed. The first page, operator signals, gives you the overall health of this particular dashboard and application. The score timeline will give you"
    },
    {
      "time": 433,
      "speaker": "Instructor",
      "text": "the historical comparisons. The run blueprint will basically give you the mutation surface, how many mutation surfaces we got and what changes we made to them. For example, here the deterministic mutation has been added. Then it managed to add the mutation playbook, which is basically the response from the LLM. The deterministic will basically process according to the rules that we have already defined. Once beyond that point, if they do not succeed on those criteria of deterministic,"
    },
    {
      "time": 465,
      "speaker": "Instructor",
      "text": "then the mutation will be applied here. Why this is important? Because every time the code has changed, one of the core essential factors that you want to check, not just from observability but also from the compliance point of view, is what your mutated code looked like. Was it dangerous? Was it stable, or was it accurate? Was it biased? All those aspects are absolutely essential to understand, and more importantly, what edge cases it left, and how"
    },
    {
      "time": 498,
      "speaker": "Instructor",
      "text": "can I improve this mutation better by providing more information and more context to LLMs? So when the runtime mutation happens, we can cover more and more edge cases. So these are the areas, these are the answers that all dashboard tabs will provide. Each dashboard tab will provide an individual answer. For example, here it will provide what happened to this particular invoice that we are talking about. Let me go and find KNG 209, and you can see it has"
    },
    {
      "time": 530,
      "speaker": "Instructor",
      "text": "identified it as a category escalated coming from a deterministic row, and it was processed pretty much, and what its input and sidecar rows looked like. It pretty much gives us the clear understanding of what happened. Now let's see 214, which is basically a mutation play. So we can see it wasn't able to process the unmapped token amount. That was the reason why we needed to run the mutation, and it tells exactly what we did with it. And then it also tells the input"
    },
    {
      "time": 564,
      "speaker": "Instructor",
      "text": "and the sidecar rows, which is pretty awesome because it comes from two different places, blanks and failures, and then how we managed it. We can also see the trace timeline here. So that's C214 clean data hotel records and its trace IDs as a correlation ID, and what was the score delta. The same thing from an observability point of view, the broader observability, what actually happened. The overall test spans across the runs and execution logs and diagnostics. Well, it's a"
    },
    {
      "time": 601,
      "speaker": "Instructor",
      "text": "quite detailed dashboard to walk through, and I don't want to spend 30 minutes walking through the dashboard. But it's very easy to run this dashboard. But I would like you to offline walk through this in detail and as much as possible. Now let's go back to the hands-on exercises. These are very important exercises. This will help you to improve your understanding around dashboards and this particular example. It will also help you when, in a real-world scenario, when you"
    },
    {
      "time": 630,
      "speaker": "Instructor",
      "text": "want to add more stores, you want to add more metrics, how you're going to deal with this kind of projects and Software 3.0. So make sure you try the exercises, and I would say please make sure that you do exercises on each and every lesson that we complete. Now let's go back to our presentation and find out what's left there. Here we are back in the presentation. Now the loop has a memory that you can read, control, and justify. That gives you the"
    },
    {
      "time": 661,
      "speaker": "Instructor",
      "text": "real feedback signal. Instead of building blind repetition, next we will increase the pressure so the loop doesn't get too comfortable. And that's all for this lesson. Please make sure you subscribe and also press the notification bell icon. So when the next lesson we release, it straight away comes to your timeline and your notification, and I'll see you in the next lesson. Take care."
    }
  ],
  "judge-self-challenging": [
    {
      "time": 5,
      "speaker": "Instructor",
      "text": "Think of your system like a gym. If you only lift light weights, you don't get stronger. You just get comfortable. That's exactly what happens when you loop-train on easy cases. So, we introduce pressure. We add a fixed judge and a smart challenger. One defines the truth, the other raises the difficulty. This lesson shows how to build that tension without letting the system cheat. And hey, if you're serious about building real AI systems like this, make sure you subscribe."
    },
    {
      "time": 44,
      "speaker": "Instructor",
      "text": "This course will get more powerful, more layered, and more interesting. And we have planned more courses like this as well. I want you to think of everything we have built so far as one example, as one real-life application. Each lesson has added a component and capability. But nothing got replaced. It's all running underneath. If you need to revisit any part, check the playlist linked in the top right corner appearing right now, or you can actually go to the GitHub example repo where"
    },
    {
      "time": 76,
      "speaker": "Instructor",
      "text": "all the lesson links have been provided. I will reference it again definitely before the lab. In the last session, we built observability that gave us run history, live artifacts, and a feedback surface. Now we are not guessing anymore. We know where the system is weak. So here is the shift. We are not improving randomly. We are applying targeted pressure based on observed weakness. We have seen on a row-by-row basis which cases failed, where mutation is absolutely needed. Same loop, no"
    },
    {
      "time": 112,
      "speaker": "Instructor",
      "text": "new force. So don't think this is a new system. This system has all components in place as they were. Observability already existed. Mutation surface already existed, and evolution was already there. We are just making the loop harder to satisfy. I like to think of this like an arena. A judge is a referee. An executor is the current champion. A challenger keeps sending stronger opponents. And the system only improves as long as the champion survives through the fight. This is critical. If"
    },
    {
      "time": 150,
      "speaker": "Instructor",
      "text": "the judge changes, you're moving the goalposts. That's the system cheating itself. Correctness must stay constant. This is where most people are likely to get it wrong. A bad challenger equals random noise, and a good challenger equals surgical pressure. It looks at easy wins, repeated patterns, and weak edge cases, and then creates a harder version of exactly the same scenarios. Let me share one of my personal experiences. When we built systems as data engineers for our own organization, we had"
    },
    {
      "time": 186,
      "speaker": "Instructor",
      "text": "50 different versions of these different feed-processing data jobs, and trust me, most of them were revised at least 25 to 30 times before they got to 99% accuracy. So it is very important to take smaller steps and let the judge and challenger keep fighting against each other and build the best-use case scenario. If your system just fails more, you don't improve anything. You just stress it, and that's not what we want. For any mutation,"
    },
    {
      "time": 224,
      "speaker": "Instructor",
      "text": "adversarial development is a feedback loop that keeps going and improving the signal with better scores every time we process that loop. That's why I always say, without plate-breaking, no climb, no real learning. So lock this in: self-challenging works only if the judge stays fixed and the challenger is intelligent. We'll see hands-on how we build both synthetic and natural challengers. The executor is forced to adapt, and if you miss one of these,"
    },
    {
      "time": 261,
      "speaker": "Instructor",
      "text": "the whole loop collapses. Before we jump in, grab the GitHub repo. You will find the link below in the description. We are going to trace this live. Now, here is your four-minute lesson. Open the CleanLoop challenger path. Don't just read the code. Think like an operator. Ask yourself where are the harder fixtures generated? What signal is used to detect the weaknesses? How the judge is protected from being modified? And so that we discuss challenge generation, execution, and evaluation."
    },
    {
      "time": 295,
      "speaker": "Instructor",
      "text": "This key insight should stick: the system increases difficulty without touching the correctness, and that's the safety mechanism. Once you see that, you understand self-challenging. This is helping you think differently. Think, then press the notification bell so you don't miss any next lesson or any new courses we release. So let's go to the hands-on lab now. So we are in the hands-on lab, and as usual we will start with the chart here. You can see the review is the same"
    },
    {
      "time": 335,
      "speaker": "Instructor",
      "text": "old executor-challenger arena, and then it shows the flow here. Now the four important theories that I would like you to remember again: judge and challenger are not the same tool. Always remember that one is there to validate, and the other is in the arena to test the system itself. Fixed selection pressure is what makes the improvement meaningful. Never try to throw random permutations or experiments. Yes, there are good cases for random experimentation as well, toward the end, to"
    },
    {
      "time": 374,
      "speaker": "Instructor",
      "text": "identify the edges and the boundaries. But when we are progressing toward better maturity, the fixed selection process into very accurate, pinpoint improvement over the data is always going to make better decisions. Good challenge is always targeted and not random. What we already discussed with point number two is that self-challenging creates the curriculum pressure. So what does curriculum pressure mean? We identify subdomain challenges. For example, this is"
    },
    {
      "time": 414,
      "speaker": "Instructor",
      "text": "aligned data, incorrect data, and all sorts of things, and all that curriculum we define using various computation playbooks, and therefore we start with the basic curriculum, and then we progress toward the higher end of the curriculum. That will also overlap with number two and number three we discussed, the fixed connection and a good challenger. Now I would leave this for you to read. It's it's a very detailed document to read. We will see here how this work evaluation"
    },
    {
      "time": 455,
      "speaker": "Instructor",
      "text": "endpoint, that everything is provided here. So you will be able to understand how we are actually working on those. Up there now is the binary check registry. So whenever we are building that result set, we actually build the binary tree that helps us build the complex decision matrix. Now other than that, the important thing is the difficulty ladder. Now here I have created a five-level difficulty curriculum, and you can see here what it does. Mild"
    },
    {
      "time": 491,
      "speaker": "Instructor",
      "text": "finance messiness is just moving, breaking ISO, voids, status spelling, and whatever it is, but it's a very mild messiness. Obviously this is not going to pass the deterministic path, but it's still mild. Moderate finance messiness uses mixed date format DDMM, YY, and all sorts of stuff: the currency symbol, the currency code, and everything, which is slightly more difficult than number one. Then number three is hard finance dispute invoices, free trial, complimentary, you know, all sorts"
    },
    {
      "time": 527,
      "speaker": "Instructor",
      "text": "of stuff that probably makes your system more complex to resolve, because it's a business context that needs to be understood, and very hard negative reversals. These are the hard positive and hard negative cases. Four and five are really hard positive and hard negative cases. If you are attempting number four and number five, make sure you have a powerful LLM to solve them. Most likely a lightweight LLM won't be able to solve number four and number five. Also, to prepare for number four and five,"
    },
    {
      "time": 558,
      "speaker": "Instructor",
      "text": "we need to have a stronger hint mechanism, the skill mechanism, and prompt mutation as well, which I'm not going to cover in this particular use case. So we are going to leave four and five outside the scope as of today. But if you want to expand this example into prompt mutation and other areas, you can certainly use number four and number five to check how far you can stress this example. Now let's go back to our preview back again. I think all of these things"
    },
    {
      "time": 589,
      "speaker": "Instructor",
      "text": "are important. Please go and validate them. Also read in this order. It will help you understand the flow that we discussed. The run is very simple. All I'll do is I'll go into CleanLoop. Currently, I think the dashboard is running. So I'm going to stop the dashboard. Okay. And let's check the status. When we check the status, I think the status is pretty fine. Absolutely. We can see we got adjustments and finance invoices, and then challenger files. We will actually create"
    },
    {
      "time": 627,
      "speaker": "Instructor",
      "text": "the challenger files ourselves as well. So let's go and delete those challenger files from input first. So let's just delete these challenger files. Now what we want to do is we already need to probably get this from there, so let it step. I'll do that in the end, don't worry, but I'll probably use this command, which is better. So I've deleted all the challenge manifests and level five. Then I'm going to"
    },
    {
      "time": 674,
      "speaker": "Instructor",
      "text": "create the one, two, and three labels that we discussed. So let's see how it works. So you can actually choose the labels you want. I have selected three adversarial levels, one, two, and three. And by the way, they all are based on the levels that we saw, difficulty levels one, two, and three. And I said for four and five, we most likely would need some heavier LLMs, which we are not using in this case. We're just using simple Phi. These one,"
    },
    {
      "time": 709,
      "speaker": "Instructor",
      "text": "two, and three Phi models would be able to handle pretty much everything easily. So we've got all the adversarial files, and this is synthetic, by the way. So we create the synthetic data to challenge, and this is also a very powerful way of training your own loop. So now let's go back and train our loop as well. And then evaluate. So by evaluating we will know what is working and what is not working. So we can see here while evaluating, obviously, the expected and unexpected cases which are not fixed. So that's"
    },
    {
      "time": 744,
      "speaker": "Instructor",
      "text": "why it's 13 by 4. We cannot fix everything, but we can fix many of them, and we can see there are still 85 needing mutation, still unresolved after mutation zero. So now all we're going to do is run the loop. By the way, the evaluate command will only do the dry run. It won't do the full run. And now the loop is actually running and generating more data for us. It is right now generating a mutation request, and as it anticipated, mutation needed 65 and"
    },
    {
      "time": 786,
      "speaker": "Instructor",
      "text": "unresolved after mutation zero. So it was pretty much successful, and if you can see here we got very much here, and these are the mutations we recorded, and these all were generated after the deterministic pass, obviously, because the deterministic path wasn't able to complete them. So let's go and now validate our dashboard. I actually need to also run the dashboard command. Observe is the same as dashboard just in case you want to reprint what the last run is, but observe will just"
    },
    {
      "time": 830,
      "speaker": "Instructor",
      "text": "reprint exactly what the last run is. And this is now 8501. So I'm just going to refresh it and even try it two ways. This is the last run, or this last turn on top. But you can also select the current artifact for the last run, and you can see what we processed. It will show you everything that we have produced as output, and it will also show us in data quality what we actually produced. So we can see how many were processed deterministically. Adversarial"
    },
    {
      "time": 869,
      "speaker": "Instructor",
      "text": "mutation playbook, how the adversarial mutation playbooks have been processed. We can see what the anomaly reasons were, like impossible dates on these invoices, and it will give you very much detail as a report about what happened, and how, and where things got stopped, with very, very detailed observability as well. So yeah, you can actually see it on every run. So these are all different runs of invoice INV-005, and this is how we can actually compare whether the invoice"
    },
    {
      "time": 910,
      "speaker": "Instructor",
      "text": "INV-005 failed before, and whether the invoice worked this time, and that's why what we previously discussed in observability is important. So this is the overall idea which I give you for this judge self-challenging lesson. And I think I have messed up between number four and number five, which I have to fix anyway. But I will fix that in GitHub so you guys have direct access to that. But other than those commands which I misplaced in"
    },
    {
      "time": 949,
      "speaker": "Instructor",
      "text": "the exercise, it's pretty important, guys. From here what we are looking at is something more serious. Earlier we just saw that we send the data to the LLM and get the mutation surface. But now it's a point of how we can actually improve our mutation surface, how we can self-generate those hints, how we can self-generate direction per prompts, and a lot more things. There are other areas which I would say, when you're talking about the judge, challenger, and arena, there are other"
    },
    {
      "time": 983,
      "speaker": "Instructor",
      "text": "areas which are not covered in this particular course. But keep an eye on my channel. I'm going to release a course on prompt mutation, and I'm going to release a course on behavioral learning. By the loops themselves, one maintains a behavioral skill, and it mutates the skill to keep the learning in long-term memory, and prompt mutation is also long-term to the operational memory perspective, and it also generates a lot of adversarial hints about how to handle"
    },
    {
      "time": 1018,
      "speaker": "Instructor",
      "text": "different adversarial use cases. Both overlap, by the way. All three overlap. All three are different mutation surfaces. They all overlap, but with all three of them we can actually have a long-term behavioral understanding, and in judgment and training we have mutation surfaces by code, and we also have the mutation surface by prompt invocation. So these three will always make things better. All of my use cases, all of my examples, or the real-life implementations are"
    },
    {
      "time": 1050,
      "speaker": "Instructor",
      "text": "basically with all these three. There are very few where I have actually gone to reinforcement learning. I have a couple of agents where we use reinforcement learning, but they are very advanced use cases and generally not needed for day-to-day purposes. But having said that, this is more important to understand from a theoretical and example point of view because you're picking up those things. But as I said, I'm going to have those two courses as well. And when"
    },
    {
      "time": 1080,
      "speaker": "Instructor",
      "text": "we have all three courses, it will make a lot of sense together, and you will be able to make really advanced self-improving agents. It doesn't matter whether it's a data agent or a stock agent, or a trader, or whatever you would like to make. But with these three capabilities and abilities in your hand, you will be able to practically build any business-case agent as you wish, with complex workflows, with reinforcement learning as well. So that's good, and I would"
    },
    {
      "time": 1115,
      "speaker": "Instructor",
      "text": "suggest that you go ahead and implement these exercises as well. It will help you understand the concept far better. Now let's go back to our presentation. Right, so now your loop isn't just running, it's under pressure, and as I said, the adversarial pressure, we keep pushing levels 1, 2, 3, 4, 5, and the judge stays fixed, and the challenger keeps pushing, and the executor has no choice but to improve. That's how the new system evolves. Next you go even further. And by the way, before"
    },
    {
      "time": 1152,
      "speaker": "Instructor",
      "text": "I end this lesson, there are two different ways an evolution system can work. One is with human observation, and one is without human observation. And both are very powerful techniques. As I said, when we have all three, then we will also have a bonus lesson on human-observed and human- independent evolution processes. Both are very interesting topics to discuss as well. But next we go even further. We introduce best-of-N and re-ranking. You have heard re-ranking in,"
    },
    {
      "time": 1189,
      "speaker": "Instructor",
      "text": "for example, RAGs where you have better candidates and you choose among those candidates. This is exactly the same concept, but we will choose between candidate mutations. We will choose the better mutation for use cases, and so the system can compare multiple candidates before committing to a mutation. Make sure you are subscribed so you don't miss that, because it's really getting interesting from here, and I would really love for you"
    },
    {
      "time": 1218,
      "speaker": "Instructor",
      "text": "to continue this whole course, and I'll see you in the next lesson as well. Take care then. Bye-bye."
    }
  ],
  "test-time-search": [
    {
      "time": 5,
      "speaker": "Instructor",
      "text": "Think of your pipeline like hiring a candidate. If you only interview one person, you're gambling. But if you shortlist a few strong candidates and compare them side by side and then choose, you make a far better decision. That's exactly what test-time search does. Instead of trusting one proposal, you generate a small set, compare them, and pick the best one before the final evaluation. Now here is the trade-off. More options equal better quality, but also more cost and latency."
    },
    {
      "time": 35,
      "speaker": "Instructor",
      "text": "I remember working on a more quantitative pipeline when I was trying to introduce a map-reduce style layer for forward curve generation. The tricky part was that the different seasonal patterns would fit completely different algorithms. One model performed better in stable periods, while the other one with hyperparameters better handled the volatility. Initially I relied on a single-shot approach, but it was not getting us there where we wanted. So later we let both algorithms run in"
    },
    {
      "time": 64,
      "speaker": "Instructor",
      "text": "parallel, and then using the judge and a feedback reranker we actually shortlisted which one would probably perform the best and then generated the full forward curve. If you are building a real AI system, this is where things will get really interesting. So one request, if you want to keep building systems like this with me, make sure you hit subscribe and press the notification icon. This course is designed to take you from basic to production-grade thinking. I want you to"
    },
    {
      "time": 95,
      "speaker": "Instructor",
      "text": "always think this course is one big example. We are not stacking random ideas. We are building a pipeline where every piece keeps running underneath. In the previous lesson we increased the challenge pressure but kept the judge fixed. We are not replacing anything here. We are just extending the same mutation loop by adding the bounded search layer before the evaluation. So keep the system in your head: proposal, judge, and feedback. Now we are upgrading proposal from"
    },
    {
      "time": 124,
      "speaker": "Instructor",
      "text": "one guess to best-of-few, and that's a shift. Here is the mental model I use. One failure comes in, we fan out into multiple candidates. We compare them and then we pick the one survivor. Then send only that forward. It's like a tournament. Instead of betting everything on one answer, you sample a few. This is especially useful when outputs are unstable, prompts are ambiguous, or quality varies run to run. But yeah, you're paying for it. More tokens, more money, more latency. This is the"
    },
    {
      "time": 157,
      "speaker": "Instructor",
      "text": "underrated part. The reranker doesn't ask, \"Is this good?\" It asks, \"Which one is better?\" That's a completely different kind of intelligence. And it's usually cheaper if you need to run all the candidates in parallel before choosing it than letting every candidate go through the full evaluation. This is engineering reality. There's no magic, and you're trading higher reliability for higher compute cost. You need to ask, is the improvement worth it? Let me explain with my previous example."
    },
    {
      "time": 191,
      "speaker": "Instructor",
      "text": "When we actually had a forward curve, because of the forward curve's inefficiency there was a material loss of trade, and that was a good enough reason for us to actually go for best-of- N cases. Not every use case will support or actually afford best-of-N cases, but it's definitely, as I said, a case-by-case basis. If it is worth money, then it is worth money. Let's zoom out again: small fan-out, cheap comparison, one survivor, controlled cost, and that's how you"
    },
    {
      "time": 225,
      "speaker": "Instructor",
      "text": "keep search practical. Before we jump into lab, you will find the full implementation in the GitHub repo link below in the description. Make sure you pull it before we are about to walk through together. Now let's get started. So now, before you get your repo ready and the CleanLoop implementation, the goal here isn't just to run it. The goal is to think like an operator. What you're going to do is run the pipeline in one-shot mode. Then enable best-of-N search and observe where the"
    },
    {
      "time": 256,
      "speaker": "Instructor",
      "text": "candidates are generated, where the reranking is happening, which one gets selected. What you look for when you run those examples, look for: do multiple candidates differ meaningfully, does the reranking pick what you expected, and does the final judge still behave the same way? This is the key. Judge does not change. Only input and quality improve. That's the boundary that keeps this system stable. Now once you've done that, we'll come back on the presentation. So let's go on hands-on."
    },
    {
      "time": 297,
      "speaker": "Instructor",
      "text": "We are hands-on now, and best place to start is Lesson Six here. So on that Lesson Six you already saw the diagram, and if you want to catch up you can catch up on the previous lessons as well. Test-time is a common algorithm in search: spend the compute on selection, not training. Now there are multiple ways of implementing test-time. One is a full implementation. That means we get the final results and then compare. The other one is a partial result. In a mathematical sense,"
    },
    {
      "time": 334,
      "speaker": "Instructor",
      "text": "many machine learning algorithms can actually tell us what a 25th optimization round looks like. What does a sampling look like? So you can always run based on sampling. You can always run based on distribution. You can always run based on any other selection criteria that can reduce from full run to a partial run. But make sure the amount of partial run you do is meaningful. So whatever the reranker decides is a lightning scenario. But if the partial run cannot be trusted,"
    },
    {
      "time": 367,
      "speaker": "Instructor",
      "text": "then there is unfortunately no other best way, but you have to make the full run and then make a choice. However, if partial can be supported, then it's a best use case. Most mathematical solutions can be precursors. That means we can actually identify the best candidate way before we complete the process. And that means we will only let the process move forward beyond a point where we have full confidence. Or you can choose in a waterfall manner, which means it starts with"
    },
    {
      "time": 399,
      "speaker": "Instructor",
      "text": "10, then filter out five, then filter out three, and then remaining two runs to the end and one gets picked up. So there are many cases how you can implement test-time search. There is no one particular answer. Isolation is a part of the search contract. So please make sure the candidates run in a sandbox or a temp directory, they are not influencing each other or contaminating the result. The fixed judge makes reranking meaningful. This is one other important pillar which I want to ensure, that every candidate is"
    },
    {
      "time": 432,
      "speaker": "Instructor",
      "text": "scored by the same judge. Make sure the judge and the hints provided are fair. They are not biased, otherwise generally it will produce a biased result, and that's one of the problem areas where people struggle to figure out why the wrong result has been selected. It's not because it was intentional, but unintentionally some of the hints are biased. That means the main anchor and the judge is always picking up and leaning toward one sort of choice, whether"
    },
    {
      "time": 461,
      "speaker": "Instructor",
      "text": "they are right or wrong, because they don't ask the question, \"Right or wrong?\" They ask, \"Where is the better score?\" and that's why we need to make sure the score is as honest as possible and search doesn't stack the deck on token cost, which we already discussed. There is no one better answer, or there is no one best answer. You have to pick up the right approach based on your use cases and also how much cost we can actually incur to get that kind of business value. So there is sufficient"
    },
    {
      "time": 494,
      "speaker": "Instructor",
      "text": "documentation here, and I would recommend these code anchors. So if you go on the best-of- N cases, you will find out what these algorithms look like and how we have created them, and there is enough documentation paths to actually visit in the examples, and in the exercises we actually ask you to do some more work on it. So it might be interesting for you to evaluate and actually write your own reranker. In real-world cases there will always be multiple rerankers. They are similar"
    },
    {
      "time": 528,
      "speaker": "Instructor",
      "text": "like RAG rerankers, but they're deterministic. Here you can also have nondeterministic rerankers too. I have also seen many top-end research organizations use similar packs as a harness agent to actually do RAG retrieval. And this is a very powerful method. If you have very high-value research going on and you want to find almost pin-perfect context for LLMs, this is a very good model which can actually lead the mutation-level, mutation-based content"
    },
    {
      "time": 566,
      "speaker": "Instructor",
      "text": "finding with proper reranking. It's one of the topmost patterns and implementations that you can go for for highest accuracy at this point in where we are, basically in terms of technical advancement. This is the highest possible quality setup that you can have for near-perfect recall and near-perfect retrieval. So we already know how status, verify, reset, and evaluate works. I'm probably not going to do that, but if you want to rerank, it's very simple. Here just use this function"
    },
    {
      "time": 604,
      "speaker": "Instructor",
      "text": "and command which will rerank, and it will create two candidates: conservative and value-first. So not very difficult to understand. But however, let me honestly first put a disclosure. This example is not very deep for actual reranker use cases. We need to have a very, very close-to-real- world example, and to be honest, hardly five or six percent of use cases in real world can actually justify the reranking process. So in this one we are just demonstrating how it works from the pattern"
    },
    {
      "time": 639,
      "speaker": "Instructor",
      "text": "perspective. There is no real value out of the reranker. We haven't got that complex algorithm and that complex use case, because if you put even that complex use case, the challenge is for most of the learners, that example will become very difficult to handle. So here we can see what happened. There is a value-first approach. The candidate two and conservative was the first approach. You can see that they have both used different tokens, different values,"
    },
    {
      "time": 668,
      "speaker": "Instructor",
      "text": "and all sorts of stuff. Finally they sorted out everything, picked up, they basically fixed 54 rows, still need mutation 65, and then the mutation patched it, and then results to many events. So out of around 54 was actually fixed by the mutation preview itself, and that's what says, fixed rows 54, played by the mutation itself. So that's basically an outcome we are talking about. Now go with the exercises, and you can see here most of them are medium or hard,"
    },
    {
      "time": 705,
      "speaker": "Instructor",
      "text": "but I would say these are one of the harder exercises to actually achieve. The dashboard is also running here. So we can go on dashboard and validate what the last run looked like. The current artifacts, you won't see kind of a difference here, but yeah, it will be helpful to understand what each run and how it processes different things. Now reranking can also be extended into more advanced patterns which we are not covering in this course,"
    },
    {
      "time": 742,
      "speaker": "Instructor",
      "text": "called hybrid fusion. Now fusion is where two or three different candidates process the sections of code where we are not evaluating at the atomic level of the candidate, but actually we validate the subatomic level, and that means individual groups of records which algorithm is dealing better, and then based on that we actually merge it. So we fuse it. We don't actually select 1, 2, 3 out of that, but maybe 30 rows from one, 60 rows from two, and 30"
    },
    {
      "time": 776,
      "speaker": "Instructor",
      "text": "rows from three, and then we merge like a git merge and then produce a final result. It's also a very powerful pattern and that also can deliver us some advanced results, but that's not covered here. For delivering something like that you need a very strong merge logic. And that's also a sort of a data-structure challenge for anyone who would like to implement extension in this example and put a PR. We will be able to share with everyone if you"
    },
    {
      "time": 808,
      "speaker": "Instructor",
      "text": "manage to get that through as well. But yeah, that sounds good, and now I'm going to go back without wasting a lot of time there. But here you can see the pretty much latest score, 13/14. So we are good with it. Okay, we are back now. So now your loop can search, compare, and choose instead of blindly committing to the output. That's a huge step. But remember this only works because it's so bounded. And in any self-improvement agent, bounded is"
    },
    {
      "time": 842,
      "speaker": "Instructor",
      "text": "the key word more than self-improvement, because self-improvement without bounded is most likely anarchy and randomness. But with the boundary it can be a very meaningful purpose. So you control how many candidates, how much cost and latency, and that's the engineering. Next we are closing this course by adding the production safety rails and gradually the autonomy model. So your system doesn't just work, it behaves responsibly at scale. And if you made it this far, subscribe."
    },
    {
      "time": 872,
      "speaker": "Instructor",
      "text": "stick with me and let's finish this strong. Take care. I'll see you another video."
    }
  ],
  "production-safety": [
    {
      "time": 6,
      "speaker": "Instructor",
      "text": "Think of a system like a self-driving car. It's impressive that it can move on its own, but nobody trusts it unless there are brakes, sensors, and override controls. That's exactly what production safety is. A self-improving loop is only valuable and viable if it can operate safely under real constraints. That means containment, anomaly detection, hard stop signals, and controlled autonomy. This lesson is where everything becomes real. You're not just building a loop anymore. We're"
    },
    {
      "time": 40,
      "speaker": "Instructor",
      "text": "building something that you can actually deploy. I want you to zoom out for a second, and the entire course is one real-world example. Every lesson added a new mechanism, but none of those earlier pieces have disappeared. They're still running. Let's recap what we have built. A bounded genome, a deterministic orchestrator, a feedback signal that you can actually read, challenge pressure to avoid lazy convergence, and search and reranking for better candidates. Now the question is, can"
    },
    {
      "time": 74,
      "speaker": "Instructor",
      "text": "they survive production? We are not adding something optional. We are wrapping up everything that we have built inside a defensible safety model. So keep the system in your head. Mutation, evaluation, feedback, selection. And now we add safety around every step. And that's the final layer. I think of this as a layered defense system. At the core, you've got a sandbox and anomaly detection around it, and then permission control. Here's the mindset shift. You assume"
    },
    {
      "time": 108,
      "speaker": "Instructor",
      "text": "things will go wrong. Not maybe, not rarely, always. So instead of hoping your candidates behave, you contain them, like running untrusted code in a sandbox. Let me share a very, very good example that actually happened to us. We had a debugging agent, and that debugging agent actually had root control because it needed to run LLDB or a C++ debugger. Now somehow the LLM figured out that this control had administrative privileges. The LLM was not able to find a way to run certain"
    },
    {
      "time": 148,
      "speaker": "Instructor",
      "text": "git commands. However, it sensed that it could, and it actually jailbroke by identifying that one debugging agent could actually fire root execution commands, and it attempted an rm command. However, it was very quickly spotted by us because there was also a hook protecting those particular commands, which we anticipated and did not want to run. However, that gave us so many reasons to worry about it because we knew that this command could actually cause a"
    },
    {
      "time": 183,
      "speaker": "Instructor",
      "text": "problem, and we put in a hook. But there might be a command that we didn't know, and it could actually cause real damage. We have seen many online examples where jailbreaking is a real case. So let's always make sure sandboxing is a must. It is not optional. Some failures are fine. Repeated failures are not. You install tripwires. Same failure patterns, same failures, patterns repeating, metrics degrading consistently, unexpected drift. When that all happens, you stop"
    },
    {
      "time": 223,
      "speaker": "Instructor",
      "text": "the loop. Not retry, not let it run, just stop. This is where a lot of teams make mistakes. They jump straight to fully autonomous. And that's the classic mistake. Instead, they should move through levels such as manual, assisted, supervised, autonomous. Promotion only happens when evidence proves it is safe. Let's zoom out one last time. Contain execution, monitor behavior, stop damage early, increase autonomy slowly, and that's how you make it real. And before we jump"
    },
    {
      "time": 257,
      "speaker": "Instructor",
      "text": "into the lab, the full implementation in the GitHub repo link is below in the description. Make sure you have it open before we do the walkthrough and the controls together. All right, let's close this properly. I'm sure you've got the GitHub repo checked out and everything is ready. What do we do? Inspect the sandbox boundaries. Figure out the failure scenarios and observe. Three questions we should ask: Does it get contained? Does the system detect it? Does it stop or retry? What should you focus on?"
    },
    {
      "time": 295,
      "speaker": "Instructor",
      "text": "Where execution is isolated, where the state reset happens, and how the autonomy label is exposed. A production system is not pretending to be fully autonomous. It is showing you control. That's what production systems do. And one last request: if you want to keep building systems like this, hit the notification bell and subscribe to our channel. So we are on the hands-on lab, and the best place to start is 07 production safety. You have a diagram here, and you have three flows which"
    },
    {
      "time": 328,
      "speaker": "Instructor",
      "text": "help you understand how the code actually works. We already start safety with containment. There's nothing more we need to add. Human oversight using a dashboard. We already spoke about it. Trust should rise and fall with evidence. Always ensure that your decisions are evidence-based and not assumption-based. That's one of the classic mistakes most teams do make. Reset is a control, not a convenience. The tripwire or the kill switch is very important."
    },
    {
      "time": 362,
      "speaker": "Instructor",
      "text": "If you have seen the advertisements from many large AI companies about the kill-switch engineer, what is that kill-switch engineer? It is exactly this. A kill switch is the most important control in terms of cybersecurity, and never, ever let it lapse. Safe loops need explicit operator modes. Ensure you have clear modes, and between those modes the proper containment boundaries are defined so you can do safe promotions. Now this is more or less, in this lesson, instead of doing everything in real"
    },
    {
      "time": 402,
      "speaker": "Instructor",
      "text": "terms, we are going to simulate a lot because bear in mind, if we add real sandboxing, the system will become very complex. So we will make sandboxing a simulation, but that will help us understand what sandboxing should mean. Also, the other aspect that we will check, the autonomy and the promotions, we will basically simulate those things. I'm more interested in explaining the process, and I'm more interested in sharing the pattern"
    },
    {
      "time": 437,
      "speaker": "Instructor",
      "text": "and practices, because all of those elements are courses on their own. For example, sandboxing. Sandboxing is a course on its own, around five or six lessons. How we can use Docker or how we can build sandboxing boundaries, least privilege principles, the cloud, and other access points that we have to control. That's quite a lengthy conversation to have. Autonomy is also quite a lengthy conversation to have. So what I'm going to do in this particular"
    },
    {
      "time": 469,
      "speaker": "Instructor",
      "text": "course is make them simulated. Simulation will help you understand the concept, and simulation will help you understand what, in real-world cases, you should expect about it, and there will be some nice exercises at the end of it. So it will also help you explore some more ideas and dig for better solutions than what we have implemented, or more advanced solutions than what we have implemented. There are a couple of pins I have added in here. I"
    },
    {
      "time": 503,
      "speaker": "Instructor",
      "text": "would strongly recommend you visit those. Those pins will help you understand what the sandbox looks like. In terms of sandbox, we are just doing nothing but firing the exit button, and we are just checking the sandboxing as a wrapper. Then we have autonomy. The autonomy is nothing but just a simple state function that can add trust, and it can let it go on and on as an infinite loop. However, the infinite loop can also have constraints, such as"
    },
    {
      "time": 539,
      "speaker": "Instructor",
      "text": "how much tokens it can consume or, in real terms, what amount of money it can spend, for example, five dollars or six dollars, if you have cost calculations as well. So there are a lot of things you can apply there as those elements as well, and here you can see how to run those and how to observe and validate them as well. And there are a lot of exercises as well. So what I'm going to do is basically just clear this up, and we're going to run the sandbox. We already"
    },
    {
      "time": 575,
      "speaker": "Instructor",
      "text": "ran the reranking before, so we're just going to run the sandbox. And by the way, this is just simply doing the simulation based on a previous run. So it's not actually going anywhere. But you can see here, it executed the same command, same process, using the simulator itself. Now if we go back and fire autonomy up to five rounds, then you can see how it simulated. So what it did is actually run it, actually took the five previous runs, and actually held on. Based on that,"
    },
    {
      "time": 612,
      "speaker": "Instructor",
      "text": "what level it should use. So currently we are at the supervised level, meaning that it should not go to autonomous level. The reason it should not go to autonomous level is because the readings are coming very low, and it's very inconsistent. So that's the idea. When you make a self-improving agent, they can also make this recommendation about what level they are at the moment, what maturity level they are at, and can they actually go with the autonomy as well. Then from history, if you"
    },
    {
      "time": 641,
      "speaker": "Instructor",
      "text": "see here, the label is supervised. But in history, we got a couple of very good runs where the rolling score is around 93, and that will allow them to actually move on to further levels. But here is my point. Even though they are simulated, they explain to you how to implement, how to design those principles in your project, and how to build more comfortable systems, but well constrained systems. Bear in mind, autonomy or autonomous systems are not the real solution. The"
    },
    {
      "time": 677,
      "speaker": "Instructor",
      "text": "real solution is to define the correct constraint boundaries and containment for those systems. Without them, they'll just become random. They will not deliver the objectives, and they will not fulfill the core area that we want to achieve out of it. So always make sure it is well constrained. Now I think that's more than enough, in my opinion, to discuss why these are very deep concepts and we can keep going and keep going. Every concept that I discuss has five or six different alternate patterns to implement."
    },
    {
      "time": 709,
      "speaker": "Instructor",
      "text": "I have tried my best to design these exercises for understanding these concepts as clearly as possible. However, they do not give you the full practical experience, such as using a virtual machine from a cloud or using an individual machine to run the agent itself, with a more secure machine to run the agent, or Docker containers to run the agent. The reason is because I don't want to diverge from understanding and designing principles to actual operational and implementation perspectives."
    },
    {
      "time": 749,
      "speaker": "Instructor",
      "text": "However, as I said, there will be a course coming next month, and that's all about design, security, and sandboxing and these constraint mechanisms. So I'm sure that will fulfill far more purpose than if I'm adding it here. So let's wait for that. So make sure you subscribe and add the notification. I'm sure that next month you will find the remaining gaps that are not there in the production lifecycle, but it will be more general. So it can apply on any agentic architecture. So obviously this is sufficiently good"
    },
    {
      "time": 789,
      "speaker": "Instructor",
      "text": "enough because this is a self-improving agent. Anyways, let's go back to our presentation. Then now you have the full picture: bounded mutation, AutoGen orchestration, observability, challenge pressure, reranking, and production safety. That's a complete mutation cycle. But here is the truth. It only matters if you apply it. Start small. Pick one surface in your system and build a trustworthy loop around it. That's how the real system began. And if it helps you think differently, subscribe,"
    },
    {
      "time": 826,
      "speaker": "Instructor",
      "text": "stick around, and let's keep building. I'll see you in another course. Take care."
    }
  ],
};
