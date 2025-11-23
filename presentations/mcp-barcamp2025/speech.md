# MCP Presentation Speech Script
*Total time: ~10 minutes*

---

## Slide 1: Title
*[30 seconds]*

Good morning everyone! I'm Timothy, and for the next 10 minutes, we're going to talk about something that's fundamentally changing how we build AI agents.

We've all been building API integrations for years. But what if I told you there's now a universal standard that makes every custom integration you're building obsolete?

Let's dive into MCP - the Model Context Protocol - and why it matters for every developer in this room.

*[NEXT SLIDE]*

---

## Slide 2: Brain in a Jar Problem
*[1 minute]*

Here's the reality we're all living with. Look at this brain emoji. This represents every large language model today - incredibly intelligent, but trapped. They're brains in jars.

Think about your last interaction with ChatGPT or Claude. It can brilliantly discuss how to fix a bug in your code, design a database schema, or plan a sprint. It can talk about creating Linear tickets all day long. But can it actually CREATE that ticket? No. Can it actually query your production database? No. Can it merge that PR it just reviewed? Absolutely not.

And here's where it gets worse - look at the math. You've got N different AI tools - ChatGPT, Claude, Copilot, your custom agents. You've got M different data sources - Slack, GitHub, your PostgreSQL database, Google Drive.

Without a standard, you need N times M custom integrations. Five AI tools, ten data sources? That's FIFTY separate integrations to build and maintain. And every company is building the same fifty integrations. It's insane.

*[NEXT SLIDE]*

---

## Slide 3: The Solution - USB-C for AI
*[45 seconds]*

So here's the solution, and I want you to think about this analogy because it's perfect. MCP is the USB-C port for AI.

Remember when every device had its own charger? Nokia had one, Motorola had another, your camera had a third. Then USB-C came along - one port, universal compatibility.

That's MCP for AI. You write ONE server for your data source. Just one. And it works with Claude Desktop today. It works with Cursor and VS Code today. And here's the kicker - it will work with every future AI tool that supports MCP, without you changing a single line of code.

Write once, works everywhere. No more N times M problem.

*[NEXT SLIDE]*

---

## Slide 4: Architecture
*[45 seconds]*

Let's look at the architecture - and don't worry, this is simpler than it looks.

You've got a Host - that's your AI application like Claude. You've got an MCP Server - that's the code you write that exposes your data. They talk to each other using JSON-RPC 2.0 - same protocol that VS Code extensions use, by the way. Proven, reliable, boring technology.

The transport can be stdio for local servers - super fast, super simple. Or HTTP with Server-Sent Events for remote servers.

And here's what's new - see that "UI" in the server list? As of November 2025, MCP servers can return actual user interfaces. We'll see that in a moment.

*[NEXT SLIDE]*

---

## Slide 5: Building a Secure MCP Server
*[1 minute 15 seconds]*

Alright, let's look at real code. This is a production-ready MCP server with security built in.

Look how simple this is. Import FastMCP, create your server instance. Then you just decorate your existing functions with `@mcp.tool()`.

But here's the critical part - look at that security check. The AI doesn't control access - YOU do. Before any database query, we check if the request is authorized. We validate inputs. We sanitize everything.

This is how you safely connect AI to production systems. The AI can only do what you explicitly allow in your server code. It can't go rogue, it can't access unauthorized data, it can't drop tables. You're in complete control.

And notice what you DON'T see here? No JSON-RPC handling, no protocol implementation, no transport layer code. The MCP library handles all of that. You just write your business logic.

*[NEXT SLIDE]*

---

## Slide 6: Configuration - The Missing Link
*[1 minute]*

Now here's the magic part that blew my mind when I first saw it. You don't write ANY client code. None.

This is Claude Desktop's config file. You just specify which MCP servers to connect to. Look at this - we're connecting to a Postgres server and a GitHub server. That's it.

Drop this file in Claude's config directory, restart Claude, and boom - your AI assistant can now query your database and manage GitHub issues. No client libraries, no SDK integration, no authentication dance. The Host handles everything.

And if you want to add another data source? Add three lines to this JSON file. That's it. Your data is connected.

This completely changes the deployment story. You can give your MCP server to anyone, and they just add it to their config. No installation process, no dependencies to manage.

*[NEXT SLIDE]*

---

## Slide 7: New in Nov 2025 - MCP Apps & UI
*[1 minute 15 seconds]*

Okay, this is the game-changer that just shipped. MCP isn't just about data anymore - it's about user interfaces.

Look at the left side - this is what we had yesterday. You ask for Apple's stock price, you get text. "Apple is at one fifty point twenty." That's it. Static. Boring. Limited.

Now look at the right side - this is TODAY. You ask for Apple's stock price, and the MCP server returns a `ui://` resource. That's not text - that's an actual interactive candlestick chart that renders right in your chat window. You can zoom, pan, hover for details, change timeframes.

The technical implementation is brilliant. MCP servers can now return sandboxed HTML and JavaScript interfaces. These render in secure iframes in the chat. The AI can return forms that users fill out, charts they interact with, even mini-applications.

We've gone from AI that can only talk to AI that can build and deliver actual user interfaces on demand. This changes everything.

*[NEXT SLIDE]*

---

## Slide 8: The Ecosystem
*[45 seconds]*

The ecosystem is already huge. Look at these logos - GitHub, Google Drive, Slack, PostgreSQL. These aren't coming soon - these MCP servers exist TODAY. You can connect Claude to your Google Drive in literally two minutes.

And adoption? Anthropic obviously, since they created it. But also Cursor - the AI code editor everyone's switching to. Zed, Replit, Sourcegraph - all the modern dev tools are adding MCP support.

This isn't a proposal or a beta. This is production-ready with real adoption. The network effect has already started.

*[NEXT SLIDE]*

---

## Slide 9: Getting Started
*[45 seconds]*

Let me show you how simple it is to get started.

`pip install mcp` - that's your installation.

Five lines of code to create a production MCP server. Import FastMCP, create your instance, decorate a function with `@mcp.tool()`, put your business logic inside. Done.

This function is now callable by any MCP client. Claude can use it, Cursor can use it, future AI tools can use it. Five lines of code and you're in production.

The documentation at modelcontextprotocol.io is excellent. Full examples, best practices, security guides. Everything you need.

*[NEXT SLIDE]*

---

## Slide 10: Call to Action
*[1 minute]*

So here's what I want you to do - and I mean literally this week.

First, pick ONE data source. Don't try to boil the ocean. Pick your most annoying integration. The one where you're constantly copy-pasting between Claude and your database. Build an MCP server for that.

Second, use the examples. Don't start from scratch. There are dozens of example servers on GitHub. Find one similar to what you need, fork it, modify it. You'll have something working in an hour.

Third, connect it to Claude Desktop with that config file we saw. Start using it. Feel the difference between copy-pasting and having Claude directly query your data.

And finally - share it with the community. Put it on GitHub. Tell people about it. Every server we add to the ecosystem makes every AI tool more powerful.

Stop building one-off integrations. Stop writing the same Slack connector that thousands of other developers are writing. Build for the ecosystem. Build MCP servers.

This is how we make AI actually useful with real-world data. Not by building another chatbot, but by connecting AI to the tools we already use.

Thank you! I'm happy to answer any questions about MCP, show some live demos, or help you brainstorm what MCP server you should build first.

*[QUESTIONS]*

---

## Q&A Prep - Common Questions

**Q: Is this only for Anthropic/Claude?**
A: No! It's an open standard. OpenAI could adopt it tomorrow. Any AI tool can become an MCP client.

**Q: What about security?**
A: YOU control security at the server level. The AI can only do what your server allows. You validate every request, check permissions, sanitize inputs.

**Q: Can I use this with my existing APIs?**
A: Yes! MCP servers are just wrappers around your existing code. You're not replacing anything, just exposing it through a standard protocol.

**Q: What about rate limiting?**
A: Implement it in your server. You have complete control over rate limiting, caching, whatever you need.

**Q: Is this production-ready?**
A: Yes. Companies are using this in production today. The protocol is stable, the SDKs are mature.

**Q: How is this different from LangChain/function calling?**
A: MCP is a protocol, not a framework. It's about standardizing how AI connects to data sources, not about how AI chains operations together. They're complementary.

---

## Demo Ideas (if time permits)

1. **Live Config**: Show adding a new MCP server to Claude Desktop config and watching it instantly appear
2. **Security Demo**: Show an MCP server rejecting unauthorized requests
3. **UI Demo**: Show an MCP App returning an interactive chart
4. **Speed Test**: Query database directly through MCP vs copy-paste workflow

---

## Key Points to Emphasize

- This is NOT vendor lock-in (open standard, Apache 2.0 license)
- You're not replacing your existing code, just wrapping it
- Security is better than direct API access because you control it
- The network effect has already started - join now
- This works TODAY, not "coming soon"