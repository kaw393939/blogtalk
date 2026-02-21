---
title: "Hello from the GitHub API"
date: "2026-02-20"
excerpt: "This post was created entirely through the GitHub Content API — no local git needed."
tags: ["api", "automation", "github"]
---

This blog post was created using the GitHub Content API! No cloning, no local editor — just a simple HTTP request.

## Why This Matters

Being able to create posts via the API opens up possibilities:

- **Mobile publishing** — post from your phone with a simple API call
- **Automation** — scripts or bots can publish content on a schedule
- **CMS integration** — build a custom admin panel that writes posts via the API
- **CI/CD workflows** — generate posts from data pipelines

## How It Works

The GitHub Content API lets you create, update, and delete files in a repository. Combined with GitHub Actions, pushing a new markdown file automatically triggers a rebuild and deploy of the site.

Pretty neat, right?
