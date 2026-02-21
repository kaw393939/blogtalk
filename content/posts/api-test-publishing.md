---
title: "API Test: Publishing from Anywhere"
date: "2026-02-20"
excerpt: "A test post proving you can publish to BlogTalk from anywhere using the GitHub Content API."
tags: ["api", "test"]
---

This post proves the concept: you can publish to BlogTalk without ever touching a code editor or running git commands.

## The Workflow

1. Write your post in Markdown
2. Base64 encode it
3. Send a PUT request to the GitHub Content API
4. GitHub Actions automatically builds and deploys

## The Result

Within minutes of the API call, this post appeared on the live site. The entire publishing pipeline is automated end to end.
