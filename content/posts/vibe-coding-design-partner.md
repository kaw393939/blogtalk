---
title: "Vibe Coding: What Actually Happens When You Treat AI as a Design Partner"
date: "2026-02-08"
excerpt: "I built a complete Swiss design portfolio in 10 hours through 200+ AI interactions. Not by prompting — by collaborating. Here's what vibe coding actually looks like, and why 'everyone can do this now' is dangerously wrong."
tags: ["vibe-coding", "ai", "development"]
---

Let me be direct about something: AI is an intellectual bulldozer. You can move massive amounts of work — design systems, code generation, content creation, testing infrastructure — in hours instead of weeks. But the wrong move demolishes as easily as the right move builds.

I recently built a complete portfolio site with an authentic Swiss design system, 7 blog posts, 5 pages, 100/100 Lighthouse scores, and production deployment — in about 10 hours through 200+ AI interactions. But here's what the "AI will replace developers" crowd misses: **the 10-hour build was preceded by 9 months of learning how to collaborate with AI effectively.**

## Prompting Is Not Enough

Early on, I treated AI like a tool: "Do this specific thing." It worked, sort of. The output looked right but broke accessibility. Vague instructions led to duplicated logic across files. One moment of not checking the AI's work and it would fill in blanks with confident nonsense.

The breakthrough came when I stopped prompting and started engineering context.

**Bad approach:** "Here's my code, fix it." The AI doesn't see the full structure. It can't check if the fix breaks something else. It can't verify the solution works.

**What actually works:** Give the AI workspace access. Let it read the entire codebase, search for patterns, test its changes, catch its own mistakes, and iterate until it works. Build quality gates — automated tests, CI/CD pipelines, design audits — so the AI's errors get caught systematically.

This is context engineering. You're not just giving requirements. You're building the environment and processes that make the AI productive and accurate.

## The Moment Everything Changed

Around interaction 40 of the portfolio project, I said: "This isn't really about me. It's about the Town Hall series I'm launching." The portfolio pivoted to a community leadership platform. Requirements evolved through conversation, not through a spec document.

Then around interaction 85, I looked at what we'd built and said: "This is a mess. Is this the gold standard of Swiss design?"

I was right. The AI had implemented Swiss aesthetics but violated Swiss principles. Spacing was bloated — hero sections had 121.5px padding, headings consumed 72-108px of vertical space. The AI had used a Golden Ratio multiplier that was mathematically elegant but functionally wasteful on mobile.

That honest critique triggered a comprehensive audit revealing 48% vertical space waste. We systematically reduced typography scale by 33-44% and spacing by 40-60%. Blog posts went from 8,000px tall to 6,200px on mobile. The Town Hall page shrank 35%.

**The lesson:** Humans communicate in feelings, not specs. "This is a mess" wasn't technical feedback — it was a gut reaction. Translating that feeling into measurable problems and systematic fixes is what makes the collaboration work.

## What the AI Can't Do

After 200+ interactions and 9 months of practice, here's what I know the AI cannot provide:

- **Understanding your users' lived experience.** I've taught 10,000 students over 23 years. I know they use phones. I know they scan, not read. The AI doesn't know that until I tell it.
- **Gut reactions that catch problems.** "This is a mess" led to a 35% mobile optimization. No amount of automated testing would have caught that — it was a feeling based on experience.
- **Strategic decisions about trade-offs.** When to ship, when to polish, when to pivot — these require judgment that comes from building things for decades, not from training data.
- **Business context.** The AI doesn't know I'm building for corporate training clients who need trust signals AND students who need accessibility. That context shapes every design decision.

## The Impossible Expert Problem

Maybe it would be better to hire a dedicated Swiss design expert. Sure. But where do you find a Swiss design expert who's also an expert software engineer, an accessibility specialist, a content strategist, a copywriter, and a DevOps engineer — available immediately and affordable?

That person doesn't exist. What AI gives me is access to all those domains simultaneously. I don't need to be a Swiss design expert. I need to know when the design is working and how to communicate what needs to change. That's a different skill — and arguably more valuable in a world where AI provides domain expertise on demand.

## Operating the Bulldozer

Operating an intellectual bulldozer effectively means:

- Knowing when to be specific ("mobile-first, students use phones")
- Knowing when to be open-ended ("what would Swiss design suggest here?")
- Catching AI weaknesses (sycophantic, fills blanks, duplicates code)
- Building quality gates so errors get caught
- Developing strategic prompting ("run a design audit," "do a 5-Why analysis on this error")

The wrong words can ruin things as easily as the right words create something amazing. That's not "everyone can do this now." That's "this is a new professional skill that takes practice to master."

## Results, Not Code

Here's what people forget when they get precious about "AI-generated code": nobody pays you for code. They pay you for solving problems, delivering reliably, making it maintainable, and getting it done fast.

Does it matter if I wrote 10,000 lines of CSS by hand or if the AI generated it based on Swiss design principles I specified? No. What matters is: does it work, is it accessible, can I iterate on it, and did we deliver in 10 hours instead of 4 weeks?

This isn't AI replacing human expertise. It's AI bridging expertise so humans can synthesize solutions they couldn't access before. My professional value didn't decrease because I used AI. It increased because I learned to conduct an orchestra of expertise across multiple domains I don't individually possess.

That's the future of work with AI. Not replacement. Orchestration.
