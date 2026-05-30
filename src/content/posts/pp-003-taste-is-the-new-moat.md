---
title: AI Raised the Baseline. Taste Is the New Moat.
slug: pp-003-taste-is-the-new-moat
edition_label: "PP-003"
category: opinion
pestle:
  - Technological
  - Social
  - Economic
form: long
published_at: 2026-05-30
description: Meng To has shipped 1,000+ iterations per product against a single design.md file. Google open-sourced the same format in April 2026. AI slop pages convert 91% 
reading_time: 9
topic: "AI raised the baseline. Taste is the new moat. Meng To + Google's DESIGN.md + the anti-slop movement."
sources:
  - "https://youtu.be/oLu32YpiIJw"
  - "https://www.creativeainews.com/blog/google-design-md-open-source-ai-brand-design-stitch/"
  - "https://departmentofproduct.substack.com/p/designmd-explained-the-format-reshaping"
  - "https://www.925studios.co/blog/ai-slop-web-design-guide"
  - "https://www.tasteskill.dev/"
  - "https://www.developersdigest.tech/blog/ai-design-slop-and-how-to-spot-it"
source_layers:
  - 3
  - 4
  - 5
article_scores:
  - 4.8
  - 4.5
  - 4.5
big_number:
  label: Iterations Meng To runs per product against a single design.md file
  value: 1,000+
  context: The most-watched walkthrough of an AI-native design workflow in May 2026 is not about prompts. It is about iteration count against a codified system.
stats:
  - value: "1,000+"
    label: "Iterations per product (Meng To)"
  - value: "~$500K"
    label: "Token spend per product (Meng To)"
  - value: "91%"
    label: "Lower conversion on AI slop pages"
  - value: "90 / 10"
    label: "Iterate vs remix split"
  - value: "6 steps"
    label: "Reference → Generate → Inspect → Systematize → Iterate → Remix"
infographic_path: "/posts/pp-003-taste-is-the-new-moat-infographic.png"
infographic_type: by_the_numbers
---

## Context

Three signals from the past 30 days converge on one finding most teams have not yet acted on. Designer Meng To, who has spent close to $500K on AI tokens building products, published a workflow centered on a single file — design.md — that he iterates 1,000-plus times per product. Google open-sourced a near-identical format (DESIGN.md, Apache 2.0) on April 23, 2026, originally built for its Stitch design tool and consumable by Claude Code, Cursor, and Copilot at launch. And the Taste Skill open-source framework arrived in May with the same goal — give AI agents explicit taste constraints. The reason all three landed in the same month: AI lowered the cost of producing design output to near zero, which raised — not lowered — the bar for what counts as work that converts. Generic AI-generated landing pages already record 91% lower conversion rates than non-generic peers. The moat has moved from access to taste.

## Three Signals, Same Conclusion: The Bar Just Rose

Meng To, the designer behind Design+Code and a former Apple designer, sat with Greg Isenberg on May 6 and walked through what he has actually been doing with the current generation of AI tools. The numbers are unusual. Close to half a million dollars spent on AI tokens to build one product. 1,000-plus iterations per surface. A workflow that has compressed from six tools to one file — design.md — that he iterates against and remixes outward to landing page, motion design, slide decks, social cards, and short-form video. The interview is not a tutorial. It is an existence proof that what separates output that converts from output that disappears into the feed is not access to the tools. It is the depth and patience of iteration against a codified system.

On April 23, 2026, Google open-sourced a near-identical format — DESIGN.md — under Apache 2.0, originally built for its Stitch design tool. The spec pairs precise design values (color tokens, typography scales, spacing) with human-readable context so that AI coding agents can produce brand-consistent output without re-briefing. At launch, the format is compatible with Claude Code, Cursor, and Copilot, and the accompanying CLI handles validation, comparison, and export to Tailwind CSS or W3C DTCG. The release reframes what design.md is. It is not Meng To's personal trick. It is a candidate for the open standard the design tooling stack settles on.

Two weeks later, the Taste Skill framework launched as an open-source set of skill files that give AI coding agents explicit taste constraints — the inverse problem from the same direction. Three independent signals in 30 days, all aimed at the same gap: AI tools produce generic output by default because their training data is generic, and the way out is opinionated specification, not better prompts.

The economic stakes have data behind them now. 925 Studios' 2026 analysis of what it calls 'distributional convergence' — the tendency of LLM-driven design tools to default to the most common patterns in their training corpus — documents the result. Inter font. Purple-to-blue gradients. Oversized hero sections with vague headlines. Cards with uniform 16px border radius. AI slop landing pages, the report finds, record 91% lower conversion rates than non-generic peers. The AI website builder market is projected at $6.3 billion in 2026, which means the supply of slop is being industrialized at the same time the cost of generic is being measured.

## By the Numbers

![By the Numbers: AI raised the baseline. Taste is the new moat. Meng To + Google's DESIGN.md + the anti-slop movement.](/posts/pp-003-taste-is-the-new-moat-infographic.png)

## What Actually Changed — And What to Do About It

The conventional read of AI in design — that the tools lowered the bar so a one-person team can ship like a ten-person team — is half right. AI did remove the friction between idea and first draft; work that used to take three days now takes 30 minutes. But the same compression that benefits the operator also benefits every other operator, which means the floor rose for everyone. What used to count as 'a good landing page' is now what AI ships in a single prompt. The new bar is whatever takes 1,000 iterations against a system — because that is what differentiated work looks like when the default is free. Meng To's own framing of the moment is direct: AI is not making him lazier; AI is making him work more.

The 6-step workflow Meng To codifies is unflashy on purpose. Reference: collect a tight set of designs to actually admire — not a generic Pinterest board, a curated set of three to five examples. Generate: prompt with the references, not just the goal. Inspect: pull apart what the model produced and identify the three or four moves that made it work. Systematize: codify those moves into design.md — the color tokens, type ratios, motion principles, copywriting voice, the specific kind of imperfection that makes the output feel human-made. Iterate: 1,000 small refinements against design.md, each one tuning a detail rather than starting over. Remix: take the systematized look and adapt it to the next medium. The landing page becomes a slide. The slide becomes a 30-second motion piece. The motion piece becomes a paid ad. One taste-laden file, infinite consistent outputs.

Meng To's split between iterate and remix is 90 to 10. Most operators do the inverse — they generate, generate, generate, hoping volume produces quality, and only occasionally port a winning piece to a new medium. The data on AI slop suggests that pattern is now economically penalized. Distributional convergence is not just an aesthetic problem; it is a measurable conversion problem, and the cost of it scales with how much you publish. Pick one strong opinion and commit to it. A loud color. A bold type choice. An uncommon layout. Photography or typography that carries personality. Then defend the choice across every surface by writing it down — in design.md or whatever your equivalent is — so the system enforces consistency even when individual prompts drift.

Google open-sourcing DESIGN.md matters less for the format itself and more for what it signals. The biggest distributor of generic design output on the planet — Google's own Stitch tool, the broader AI website builder ecosystem, every Copilot and Cursor session producing UI — is moving toward consumable taste files because the market has noticed the slop. Within 12 months, design.md or its successor is likely to be standard tooling, the way Tailwind config files became standard. Operators who have already started codifying their visual system will move faster than the ones who treat AI as a labor-saving device. Volume without taste is noise. Taste without volume is rare. The combination is the moat, and it is being built one file at a time.

## Further Reading

- [My AI Design Workflow That Doesn't Ship Slop](https://youtu.be/oLu32YpiIJw) — 50-minute conversation walking through the 6-step process and live demos on a real landing page.
- [Google DESIGN.md: AI-Readable Brand Design Format](https://www.creativeainews.com/blog/google-design-md-open-source-ai-brand-design-stitch/) — April 23, 2026 open-source release. Apache 2.0. Compatible with Claude Code, Cursor, Copilot.
- [AI Slop Web Design: Complete Guide to Spotting and Fixing Generic Websites](https://www.925studios.co/blog/ai-slop-web-design-guide) — The 91% lower conversion data and the distributional-convergence framing live here.
