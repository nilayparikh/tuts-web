---
title: "Test-Time Search & Re-Ranking: Why One Candidate Is Usually Not Enough"
description: Why best-of-N search outperforms one-shot mutation proposals when the search space is wide and the judge is stable.
publishedAt: 2026-05-07T08:00:00.000Z
series: "Self-evolving Data Engineer - An AI Agent"
authors:
  - name: Nilay Parikh
    href: https://www.linkedin.com/in/niparikh
    avatarUrl: /brand/nilay_parikh.jpeg
tags:
  - AI
  - Test-Time Search
  - Reranking
  - CleanLoop
traits:
  - Search and Reranking
relatedPosts:
  - lesson-05-judge-self-challenging
  - lesson-07-production-safety
---

# Test-Time Search & Re-Ranking: Why One Candidate Is Usually Not Enough

You trust a single LLM output because it is fast and cheap. But one generation is a gamble on a lucky answer. The model might get it right. It might not.

That is the cost of the one-shot assumption. You trade search width for speed, and you pay for it with missed mutations.

---

## Prerequisites

- Lessons 01 through 05 of this course (mutation engine framing, genome boundary, orchestrator control shell, observability, and the fixed referee)
- Familiarity with best-of-N selection: generate multiple candidates, compare them, pick the winner
- Understanding that the loop runs in a bounded contract: one mutable file, one fixed judge, one artifact trail

---

## The One-Shot Problem

Every loop round so far has followed the same pattern. The reader compresses failures into a focus area. The repair forge asks the LLM for one mutation. The crucible grades the result.

That works. But it assumes the first proposal is the best proposal. It is not.

When you ask a model to fix currency normalization, it might suggest a lookup table. It might suggest a regex. One of those might be the right approach. But you only get one shot. If the model picks the wrong one, the judge rejects it, and the loop moves on with no improvement.

The alternative is not to trust the model more. The alternative is to give it more shots and compare them.

## Best-of-N Search

Best-of-N search is a simple idea with outsized returns. Instead of asking the model for one mutation, you ask it for N mutations. Then you grade all N candidates against the same judge. The winner has the highest score.

The search happens at test time. Not training time. You spend compute on selection, not on retraining a model.

Here is what the difference looks like:

```text
# One-shot (no reranking)
python util.py loop --max-iterations 1

# Best-of-2 search
python util.py loop --max-iterations 1 --rerank --candidates 2
```

The `--rerank` flag triggers the search. The `--candidates` flag sets the width. Two candidates is the minimum useful width.

The code lives in `reranker.py`. It generates N proposals and returns them as a list. The loop caller in `loop.py` plugs the reranker into the evaluation path. Each candidate runs through the same referee in `prepare.py`. Same judge, same rules, same dataset.

| Approach  | Proposals per Round | Judge Runs | Selection                |
| --------- | ------------------- | ---------- | ------------------------ |
| One-shot  | 1                   | 1          | First is the only option |
| Best-of-2 | 2                   | 2          | Higher score wins        |
| Best-of-N | N                   | N          | Highest score wins       |

The reranker does not need to be smart. It just needs to generate different candidates. The judge does the hard work. The selection rule stays deterministic: highest score wins.

## Isolation as Contract

Each candidate must run in isolation. That is a mechanical requirement, not a best practice.

If candidate A writes to the same temporary directory as candidate B, you get cross-contamination. The judge might grade a hybrid result. The score becomes meaningless.

The contract is simple: each candidate gets its own temp directory. The mutation runs. The judge grades. The directory is cleaned up before the next candidate. No residue. No shared state.

Without isolation, the scores are not comparable. You cannot rank candidates if they share state.

## The Fixed Referee

Reranking only works if the same judge scores all candidates. If candidate A is graded by one referee and candidate B by another, the scores are not comparable. Different thresholds mean different winners.

The fixed referee is the anchor. The same evaluation code runs against every candidate. Same dataset. Same pass-fail rules. When the referee is fixed, you can say "candidate B beat candidate A by one row." That is a real comparison.

This is the same pattern from Lesson 05. The fixed referee is the foundation. Without it, the loop has no selection rule. With it, you can safely widen the search space.

## Search Width as Budget

Every additional candidate costs tokens and latency. That is the trade-off.

A best-of-2 search doubles the LLM calls per round. Best-of-4 quadruples them. The token cost scales linearly with the number of candidates.

| Candidates | Token Multiplier | Improvement Odds    |
| ---------- | ---------------- | ------------------- |
| 1          | 1x               | Baseline            |
| 2          | 2x               | Moderate            |
| 4          | 4x               | Good                |
| 8          | 8x               | Diminishing returns |

The search width is an engineering knob. Not free magic. Two candidates is the sweet spot for most loops — meaningful comparison without blowing the token budget. Beyond four, the marginal improvement drops.

The key insight: search width is a budget decision, not a quality decision. You widen the search to hedge against variance. The cost is explicit.

## When Reranking Pays Off

Reranking is not always worth the extra spend. Widen the search when the mutation space is wide and the judge is stable. Keep it narrow when the fix is obvious, the judge is noisy, or the budget is tight.

A stable judge makes the comparison meaningful. A noisy judge just gives you more noise to rank.

## The Scoreboard

The best way to see whether reranking works is to compare rounds. Take one-shot rounds. Take reranked rounds. Compare the average score.

The pattern is consistent. Reranked rounds score higher on average. Not because the model is better — because the search gave the loop more options to choose from.

| Metric             | One-Shot  | Best-of-2 | Best-of-4 |
| ------------------ | --------- | --------- | --------- |
| Average Score      | 12.3 / 14 | 13.1 / 14 | 13.4 / 14 |
| Rounds to Converge | 8         | 5         | 4         |
| Token Cost         | 1x        | 2x        | 4x        |

The reranked rounds converge faster. Fewer rounds to reach the same score. But each round costs more tokens. The total cost depends on where the trade-off sits for your use case.

The important number is not the score. It is the convergence rate. Fewer rounds means less total latency. Even if each round is more expensive, fewer rounds can still be cheaper overall.

## Trade-offs

Test-time search is not a silver bullet. Token cost scales linearly. Latency is additive. Beyond four candidates, diminishing returns set in. The trade-off is intentional: you pay for better odds. The question is whether the quality improvement justifies the spend.

## Bridge to Safety

Search widens the mutation space. That is a feature and a risk. When you generate eight candidates, some might be dangerous — a mutation that deletes the dataset, a proposal that writes to the wrong file, a fix that breaks the judge itself.

The loop needs safety controls. Guardrails that catch bad mutations before they run. That is the topic of the next lesson. Search without safety is just faster at finding bad ideas.

---

## Related Reading

- **Previous:** [Lesson 05: The Judge & Self-Challenging Loops](lesson-05-judge-self-challenging.md) — Why harder data beats easier grading and how the loop challenges itself.
- **Next:** [Lesson 07: Production Safety](lesson-07-production-safety.md) — Why sandboxing, trust controls, and reset are non-negotiable in production.
- **Project anchor:** [CleanLoop Example](cleanloop-example.md) — Review how reranking, isolated candidate evaluation, and scoreboard evidence fit the full repo.

---

## Next Steps

This article covers test-time search and re-ranking — the pattern that turns one-shot guessing into structured candidate comparison. The full lesson includes a live demo of best-of-N reranking and a scoreboard that shows convergence improvement.

**Watch Lesson 06:** [Test-Time Search & Re-Ranking](https://www.youtube.com/watch?v=bsfxRJGhzYM)

**Next in series:** Lesson 07 adds safety controls. Wider search means more variance — you need guardrails to keep the loop bounded.

The full course and example code are open source on [GitHub](https://github.com/nilayparikh/tuts-agentic-ai-examples/tree/main/self-improving-agent/cleanloop).

---

_This article is part of the Self-Evolving Data Engineer series. Search width is a budget decision. The fixed referee makes the comparison meaningful._
