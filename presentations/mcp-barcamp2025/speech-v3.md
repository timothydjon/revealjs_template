## **Title Slide — “Beyond API Calls: How MCP is Revolutionizing AI Agent Development”**

\*“Hello everyone! My name is Timothy, and welcome to BarCamp 2025.
Today, we’re going to explore something that is genuinely transforming the way developers build AI agents: the Model Context Protocol — or MCP.

If you haven’t heard of it yet, don’t worry. By the end of this talk, you’ll understand not only what it is, but why it’s unlocking the next generation of powerful, tool-using AI systems.”\*

---

## **Slide: What Are AI Agents?**

\*“Let’s start with the basics. AI agents are not just chatbots.
Modern agents can understand complex goals, break them into multiple steps, use tools to take real actions, and iterate until the job is done.

Think of the difference between a consultant who gives advice… versus an assistant who actually completes the task for you. That’s the leap from chatbots to agents.”\*

---

## **Slide: Modern AI Agents You Can Use Today**

\*“And these aren’t theoretical anymore — there are real, usable AI agents today.
Tools like Cursor and Windsurf are full IDEs with agentic coding. Claude Code can understand entire projects and run commands. Claude Desktop can read your files, run shell commands, and browse the web. ChatGPT can search the web, analyze data, and execute tasks.

These tools are extremely capable… but they still have a missing piece. And that’s what we’re going to look at next.”\*

---

## **Slide: What Can These Agents Actually Do?**

\*“So yes, these agents can do a LOT: read and write files, run tests, browse, debug, analyze data — all the standard tasks.

But here’s the gap: they can’t access _your_ systems. Your database. Your Slack. Your Jira. Your CRM. Your deployment pipeline. Your internal docs.

They can help you write the code, but not deploy it. They can draft a Slack message, but not send it. They can plan the work, but not create the ticket.”\*

---

## **Slide: Real Example — A Day with Claude Code**

\*“Here’s a realistic scenario.

You ask Claude Code to refactor your auth system to use OAuth2.
It reads everything, rewrites the code, updates the tests, runs them, and everything passes.

Then you say: ‘Okay, deploy to staging and notify the team.’
And Claude says… ‘I can’t access your deployment system. I can’t post to your Slack workspace.’

You end up copying commands, switching tabs, posting messages manually.

The AI did the hard part… but _you_ are still the integration glue.”\*

---

## **Slide: The Problem — N AI Apps × M Data Sources**

\*“Let’s zoom out.
There are many AI apps — ChatGPT, Claude, Cursor, Windsurf, custom agents…
And many data sources — Slack, GitHub, databases, Google Drive, etc.

Without a standard protocol, every AI app must integrate with every data source.
That means N times M integrations. It doesn’t scale. It’s fragmented, duplicated, and messy.”\*

---

## **Slide: Today’s Reality**

\*“Here’s how it looks today:
Each app has its own Slack integration.
Each app has its own GitHub integration.
Each app has its own database client.
Different APIs. Different authentication. Different patterns.

We’re all recreating the same wheel over and over.”\*

---

## **Slide: Enter MCP**

\*“So Anthropic introduced MCP — the Model Context Protocol — in late 2024.
And the idea is simple: give AI agents a universal way to connect to tools and data.

Just like USB-C standardized chargers, MCP standardizes AI-to-tool connections.

Write one MCP server for Slack, and _every_ MCP-compatible agent can use it.
Write one MCP client in your agent, and you suddenly have access to thousands of data sources.”\*

---

## **Slide: How It Works**

\*“The architecture is beautifully simple.

On one side, you have the AI agent — Claude, ChatGPT, Cursor, anything.
On the other side, you have an MCP server — your Slack integration, your database, your CRM.

Clients and servers talk via JSON-RPC, over either stdio or HTTP.
Servers expose resources, tools, and prompts.
Clients consume them.

That’s the magic.”\*

---

## **Slide: Building an MCP Server**

\*“And the best part?
Writing an MCP server is incredibly straightforward.

Here’s all it takes: import the SDK, define your server, and attach tools with decorators.

Now your CRM or your internal system is available to any MCP-compatible AI agent — securely, consistently, and instantly.”\*

---

## **Slide: Example: Slack**

\*“Here’s an example MCP server that integrates with Slack.
Just two tools: `send_message` and `get_history`.

And just like that, any AI agent can now send messages to your team or read recent conversations — without custom code for each AI.”\*

---

## **Slide: Database Example**

_“Here’s a Postgres example.
Notice the security: tools can impose rules, like allowing only SELECT queries.
You define what the AI is allowed to do.
You control the boundary of capability.
MCP gives you the framework.”_

---

## **Slide: The Protocol**

\*“Under the hood, it’s simply JSON-RPC 2.0.
A client calls a tool by name, passes arguments, and the server returns structured results.

This familiarity is a huge reason developers adopt MCP quickly — it works with patterns they already know.”\*

---

## **Slide: Real-World Adoption**

\*“Now let’s talk adoption.
Major companies are already using MCP — OpenAI, Google DeepMind, Replit, Zed, Sourcegraph.

There are pre-built servers for Google Drive, Slack, GitHub, databases, Docker, and more.
Plus thousands of community-created integrations.

It’s becoming a real ecosystem.”\*

---

## **Slide: The Impact — Write Once, Use Everywhere**

\*“This is the core benefit:
Instead of building dozens of integrations for each AI app, you write ONE MCP server.

From that point forward, ChatGPT, Claude, Zed, Replit, and future AI tools can all connect instantly.

Write once.
Use everywhere.”\*

---

## **Slide: The Vision**

_“This is bridging the gap between AI and real-world systems.
A universal standard, open-source, no vendor lock-in.
Agents become truly capable when they can safely access your tools and data.”_

---

## **Slide: Future of MCP — MCP Apps**

_“Now we’re seeing MCP evolve beyond servers.
We’re beginning to get entire MCP-native applications — apps built on top of the protocol.
This means deeper integration, smoother workflows, and a unified ecosystem of AI-capable tools.”_

---

## **Slide: Problems to Solve**

\*“Of course, it’s not perfect.
Tool definitions consume tokens — sometimes thousands of them.
Large servers like Playwright MCP can use 14k tokens just to describe tools.
And too many available tools can overwhelm agents.

These are active areas of improvement in the community.”\*

---

## **Slide: Getting Started**

\*“Getting started is surprisingly easy.
Install `mcp`, create a server, define a couple tools, and run it.
You can test it instantly in Claude Code or any MCP-aware client.

The docs and examples are all open-source and well maintained.”\*

---

## **Slide: Resources**

_“For anyone who wants to dive deeper, here are the main resources:
The official website, GitHub repo, blogs, tutorials, examples, and community guides.
Everything is open and available.”_

---

## **Final Slide — Thank You!**

\*“And that brings us to the end!
Thank you all so much for your attention.
I’m excited to hear your questions — whether about MCP, AI agent workflows, implementation details, or real-world use cases.

Let’s open it up for discussion!”\*
