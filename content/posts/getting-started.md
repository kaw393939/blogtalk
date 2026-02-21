---
title: "Getting Started with BlogTalk"
date: "2026-02-20"
excerpt: "Learn how to write and publish posts on your new BlogTalk blog."
tags: ["getting-started", "tutorial"]
---

Welcome to your first blog post! BlogTalk makes it simple to write and publish content using Markdown files.

## Writing a Post

To create a new blog post, simply add a `.md` file to the `content/posts/` directory. Each post should include **frontmatter** at the top:

```yaml
---
title: "Your Post Title"
date: "2026-02-20"
excerpt: "A short description of your post."
tags: ["tag1", "tag2"]
---
```

## Markdown Features

You can use all standard Markdown features:

- **Bold** and *italic* text
- [Links](https://example.com)
- Code blocks with syntax highlighting
- Blockquotes, lists, and more

> "The best way to predict the future is to create it." — Peter Drucker

## Deploying Your Blog

Every time you push to the `main` branch, GitHub Actions will automatically build and deploy your site to GitHub Pages. No manual steps needed!

## What's Next?

- Customize the homepage by editing `content/pages/home.md`
- Add more posts to `content/posts/`
- Modify the layout and styles in `src/app/`
- Make it yours!
