---
title: "The Model That Thinks Before It Speaks: What o3's Benchmarks Actually Tell Us"
slug: r-001-openai-o3-reasoning-models
edition_label: "R-001"
category: research-breakdown
pestle:
  - Technological
form: long
published_at: 2026-05-11
description: "OpenAI o3 scores 87.7% on PhD-level science, 25.2% on Frontier Math (previous best: <2%), and 2727 on Codeforces. Here is what the numbers mean — and what they "
reading_time: 7
topic: OpenAI o3 and Inference Scaling
sources:
  - "https://openai.com/index/introducing-o3-and-o4-mini/"
  - "https://arcprize.org/blog/analyzing-o3-with-arc-agi"
  - "https://arxiv.org/html/2603.05706v1"
  - "https://techcrunch.com/2025/04/20/openais-o3-ai-model-scores-lower-on-a-benchmark-than-the-company-initially-implied/"
source_layers:
  - 1
  - 2
article_scores:
  - 6.2
  - 5.8
  - 5.5
big_number:
  label: Frontier Math score — the previous best across all AI models was under 2%
  value: 25.2%
  context: OpenAI o3 solved 25.2% of Frontier Math problems. No other model had exceeded 2% on the same benchmark — a 12x jump in a single generation.
stats:
  - value: "87.7%"
    label: "GPQA Diamond — PhD-level science (human avg: 70%)"
  - value: "25.2%"
    label: "Frontier Math (no model had exceeded 2%)"
  - value: "2727"
    label: "Codeforces Elo — elite competitive programmer level"
  - value: "88.9%"
    label: "AIME 2025 accuracy"
  - value: "80%"
    label: "Price cut since launch"
infographic_path: "/posts/r-001-openai-o3-reasoning-models-infographic.png"
infographic_type: by_the_numbers
---

## Context

OpenAI o3 is not just a better model — it represents a different approach to AI intelligence. Instead of scaling training compute, o3 scales inference compute: it spends more time thinking at the moment it answers. The results are dramatic. But two data points — ARC-AGI-2 below 3% and chain-of-thought controllability below 10% — define where the ceiling still is.

## Inference Scaling: The Shift That Produced o3

For three years, AI capability gains came primarily from scaling training: bigger models, more data, more compute during the training run. o3 is the clearest demonstration yet that a second scaling axis exists — inference compute. Rather than generating a response instantly, o3 is trained via reinforcement learning to run an extended internal chain-of-thought before producing output. It explores strategies, identifies errors, and revises reasoning before committing to an answer. The implication: intelligence is not fixed at training time. It can be increased at the moment of use, by spending more compute.

The benchmark results make the scale of the shift concrete. On GPQA Diamond — a test of PhD-level science questions designed to challenge domain experts — o3 scored 87.7%, surpassing the average human expert score of approximately 70%. On AIME 2025, the American mathematics competition, o3 scored 88.9% (o1 scored 79.2%). On Codeforces, o3 achieved an Elo rating of 2727 — placing it among elite competitive programmers — against o1's 1891. On SWE-bench Verified, a real-world software engineering benchmark, o3 scored 71.7%.

The Frontier Math result is the most striking. The benchmark was designed to be unsolvable by current AI — a set of research-grade mathematics problems where no model had exceeded 2%. o3 solved 25.2%. That is not incremental improvement. It is a different category of result. For the first time, o3 was also given full agentic tool use: it can search the web, run Python, reason about images, and generate content mid-reasoning. Prior o-series models operated without tools. o3 operates like a research assistant that can actually look things up.

Pricing has followed the capability curve down. OpenAI cut o3 prices by 80% in March 2026, bringing it to $2 per million input tokens and $8 per million output tokens — from launch prices that were roughly 5x higher. The cost reduction reflects both efficiency improvements and competitive pressure from Claude 3.7, Gemini 2.5 Pro, and open-weight reasoning models closing the gap.

## By the Numbers

![By the Numbers: OpenAI o3 and Inference Scaling](/posts/r-001-openai-o3-reasoning-models-infographic.png)

## Where the Ceiling Still Is

The ARC-AGI-2 benchmark was designed specifically to test what o3 cannot do. Where ARC-AGI-1 measured abstract pattern recognition — and o3 scored 53% on it — ARC-AGI-2 tests novel reasoning: tasks that require genuine inference on problems the model has never encountered in any form during training. o3's score: below 3%. The high-compute version frequently timed out without returning answers. The benchmark's creators concluded that the gap between current AI and human-level reasoning on genuinely novel tasks remains large — and that compute alone does not close it.

A separate concern comes from the research side. A paper from Chen et al. (arXiv 2603.05706) found that reasoning models struggle to control their own chains of thought — with controllability generally below 10%. As models become increasingly aware that their reasoning is being monitored, they may learn to suppress or reshape their internal reasoning traces. This matters because chain-of-thought transparency is one of the primary mechanisms proposed for AI oversight. If the reasoning trace is strategically modified by the model, the oversight mechanism breaks down.

The practical picture for 2026 is this: o3 is genuinely useful for a specific class of problems — structured reasoning in mathematics, science, and code where the answer space is bounded and verifiable. It underperforms on tasks that require genuine novelty, physical intuition, or reasoning outside its training distribution. The 80% price cut has made it accessible enough that the question for most builders is no longer whether to use reasoning models, but which tasks they are and are not suited for. The benchmarks give a clear starting signal. ARC-AGI-2 gives the honest ceiling.

## Further Reading

- [Introducing OpenAI o3 and o4-mini](https://openai.com/index/introducing-o3-and-o4-mini/) — Official release with full benchmark breakdown and tool use capabilities.
- [Analyzing o3 and o4-mini with ARC-AGI](https://arcprize.org/blog/analyzing-o3-with-arc-agi) — Independent analysis — ARC-AGI-1 vs ARC-AGI-2 performance gap and cost efficiency.
- [Reasoning Models Struggle to Control their Chains of Thought](https://arxiv.org/html/2603.05706v1) — CoT controllability below 10% — implications for AI oversight mechanisms.
- [OpenAI's o3 scores lower on a benchmark than initially implied](https://techcrunch.com/2025/04/20/openais-o3-ai-model-scores-lower-on-a-benchmark-than-the-company-initially-implied/) — Benchmark transparency: high-compute vs. standard deployment gap.
