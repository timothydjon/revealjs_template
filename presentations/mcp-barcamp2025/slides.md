<!-- .slide: class="title-slide" -->

# Beyond API Calls

## How MCP is Revolutionizing AI Agent Development

<div class="author">Timothy - BarCamp 2025</div>
<div class="date">November 2025</div>

Note: Welcome! Today we're exploring MCP - Model Context Protocol - and why it's changing how we build AI agents. Press 'S' for speaker notes.

---

## What Are AI Agents?

<div class="fragment">

**Not just chatbots anymore**

AI systems that can:

- Understand complex goals
- Break down tasks into steps
- Use tools to take actions
- Iterate until completion

</div>

Note: Let's start with basics. AI agents are fundamentally different from chatbots. Chatbots respond to messages. Agents actually DO things. They take your high-level goal, figure out the steps, use tools, and execute until the job is done. Think of it as the difference between a consultant who gives advice versus an assistant who actually does the work.

---

## Modern AI Agents You Can Use Today

<div class="columns">
  <div class="column fragment">

### Coding Assistants

- **Cursor** - AI-powered IDE
- **Windsurf** - Agentic editor
- **Claude Code** - CLI agent
- **GitHub Copilot** - Code completion+

  </div>
  <div class="column fragment">

### General Purpose

- **Claude Desktop** - File access, shell commands
- **ChatGPT** - Browse, analyze, execute
- **Custom agents** - Your own tools

  </div>
</div>

Note: These aren't hypothetical. You can use these TODAY. Cursor and Windsurf are full IDEs with AI that can refactor entire codebases. Claude Code works from the command line and can understand whole projects. Claude Desktop can read your files, run shell commands, analyze data. These agents have real capabilities and real limitations - which brings us to the problem.

---

## What Can These Agents Actually Do?

<div class="columns" style="margin-top: 30px;font-size: 0.8em;">
  <div class="column fragment">

**Impressive Built-in Capabilities:**

- 📁 Read/write files
- 🖥️ Execute commands
- 🔍 Search codebases
- 📊 Analyze data
- 🌐 Browse web
- 🔧 Debug & fix code
- 🧪 Run tests

  </div>
  <div class="column fragment" style="font-size: 0.8em;">

**The Gap:**

- ❌ Can't access YOUR database
- ❌ Can't post to YOUR Slack
- ❌ Can't create YOUR Jira tickets
- ❌ Can't query YOUR CRM
- ❌ Can't deploy to YOUR servers
- ❌ Can't read YOUR internal docs

  </div>
</div>

Note: Here's where it gets interesting. These agents are incredibly powerful with generic tasks. Claude Code can refactor your entire codebase. Cursor can implement complex features. But they hit a wall when it comes to YOUR specific infrastructure. They can write code but can't deploy it to your Kubernetes cluster. They can draft tickets but can't create them in your Jira. There's a fundamental disconnect.

---

## Real Example: A Day with Claude Code

```bash
User: "Refactor the auth system to use OAuth2"
Claude Code: *reads files* *updates code* *runs tests*
Result: ✅ Code refactored, tests passing

User: "Deploy to staging and notify the team"
Claude Code: "I cannot access your deployment system"
Claude Code: "I cannot post to your Slack workspace"
User: *copies deploy command* *runs manually* *opens Slack*
```

<p class="fragment" style="margin-top: 30px; color: #e74c3c;">
Back to manual work... 😔
</p>

Note: Here's the reality we all live with. Claude Code brilliantly refactors your authentication system, updates all the tests, makes sure everything works. But then you hit the wall. It can't deploy to your staging environment. Can't notify your team on Slack. Can't create the PR in GitHub. Suddenly you're back to being a human API - copying, pasting, clicking through UIs. The AI did the hard part but you're stuck doing the integration work.

---

<!-- .slide: data-background-color="#e74c3c" -->

# The Problem

<div class="columns">
  <div class="column">

### N AI Apps

- Claude Desktop
- ChatGPT
- Cursor/Windsurf
- Custom agents

  </div>
  <div class="column">

### M Data Sources

- Slack
- GitHub
- Databases
- Google Drive

  </div>
</div>

<h2 class="fragment" style="color: #fff; margin-top: 40px;">= N×M custom integrations</h2>

Note: Every AI app needs custom code for every data source. 5 apps × 10 sources = 50 integrations. This doesn't scale.

---

## Today's Reality

```python
# Every AI tool needs its own integration
chatgpt_slack = SlackAPI(token_1)
claude_github = GitHubAPI(credentials)
copilot_db = PostgreSQL(conn)

# Different APIs, different auth, different patterns
```

<p class="fragment" style="color: #e74c3c; margin-top: 30px;">
<i class="fas fa-times"></i> Fragmented • Duplicated • Doesn't scale
</p>

Note: Modern AI agents need access to YOUR data. But every tool requires custom integrations. We're all solving the same problem repeatedly.

---

<!-- .slide: data-background-color="#16a085" -->

<div style="text-align: center;">

# <i class="fas fa-plug" style="color: #fff;"></i> Enter MCP

<h2 style="color: #ecf0f1; font-weight: 300; margin: 30px 0; font-size: 1.8em;">
Model Context Protocol
</h2>

<div style="background: rgba(255,255,255,0.15); padding: 30px; border-radius: 15px; margin: 40px auto; max-width: 800px;">
<p style="font-size: 1.3em; color: #fff; margin: 0; line-height: 1.6;">
Universal standard for connecting<br/>AI agents to data sources
</p>
</div>

<div class="fragment" style="margin-top: 40px;">
<p style="font-size: 1.4em; color: #fff;">
<i class="fas fa-usb"></i> Like USB-C for AI agents
</p>
</div>

<div class="fragment" style="margin-top: 50px; font-size: 0.9em; color: #ecf0f1; opacity: 0.9;">
<i class="fas fa-info-circle"></i> Created by Anthropic • Late 2024 • Open Protocol
</div>

</div>

Note: Anthropic created MCP in late 2024 and released it as an open protocol - not proprietary, not locked to Claude. They saw this N×M problem coming and decided to solve it at the industry level. The vision: create a universal standard like USB-C, where any AI agent can connect to any data source through one protocol. Write an MCP server once for Slack, and suddenly every MCP-compatible agent - Claude, Cursor, your custom tools - can use it. Write an MCP client once in your agent, and it can connect to thousands of data sources. One protocol to rule them all.

---

## How It Works

```
┌─────────────┐                      ┌──────────────┐
│ AI Client   │                      │  MCP Server  │
│ (Claude)    │                      │  (Your Data) │
└──────┬──────┘                      └──────┬───────┘
       │                                    │
       │         ┌──────────────┐           │
       └────────►│  JSON-RPC    │◄──────────┘
                 │ stdio / HTTP │
                 └──────────────┘
```

<div class="columns" style="margin-top: 20px;">
  <div class="column">

**Server** exposes:

- Resources (data)
- Tools (actions)
- Prompts (templates)

  </div>
  <div class="column">

**Protocol:**

- JSON-RPC 2.0
- stdio or HTTP

  </div>
</div>

Note: Simple architecture. MCP servers expose your data and tools. MCP clients (AI apps) connect via JSON-RPC. Can be local or remote.

---

## Building an MCP Server

```python
from mcp.server import Server

server = Server("customer-crm")

@server.tool()
async def get_customer(customer_id: str):
    """Fetch customer from CRM"""
    customer = await db.query(customer_id)
    return {
        "name": customer.name,
        "email": customer.email,
        "status": customer.status
    }

@server.tool()
async def create_ticket(customer_id: str, issue: str):
    """Create support ticket"""
    return await tickets.create(customer_id, issue)
```

Note: This is a complete MCP server. Two tools wrapped with decorators. That's it. Any MCP client can now use these tools to access your CRM and create tickets.

---

## Real Example: Slack

```python
from mcp.server import Server
import slack_sdk

server = Server("slack")

@server.tool()
async def send_message(channel: str, text: str):
    """Send Slack message"""
    client = slack_sdk.WebClient(token=SLACK_TOKEN)
    response = client.chat_postMessage(
        channel=channel,
        text=text
    )
    return {"ok": response["ok"]}

@server.tool()
async def get_history(channel: str, limit: int = 10):
    """Get recent messages"""
    client = slack_sdk.WebClient(token=SLACK_TOKEN)
    response = client.conversations_history(
        channel=channel,
        limit=limit
    )
    return [{"user": m["user"], "text": m["text"]}
            for m in response["messages"]]
```

Note: Real Slack integration. Two tools: send messages and read history. This MCP server gives any AI access to your Slack workspace through a standard protocol.

---

## Database Example

```python
server = Server("postgres")

@server.tool()
async def query(sql: str):
    """Execute SQL query (read-only)"""
    # Security: only allow SELECT
    if not sql.strip().upper().startswith("SELECT"):
        return {"error": "Only SELECT allowed"}

    conn = await asyncpg.connect(DATABASE_URL)
    results = await conn.fetch(sql)
    await conn.close()

    return [dict(row) for row in results]
```

<p style="font-size: 0.9em; margin-top: 30px;">
<i class="fas fa-shield-alt"></i> Security built-in • Host controls permissions
</p>

Note: Database server with security. Only allows SELECT queries. AI can explore your schema and query data safely. You control permissions at the server level.

---

## The Protocol

```json
// Client → Server
{
  "method": "tools/call",
  "params": {
    "name": "get_customer",
    "arguments": {"customer_id": "12345"}
  }
}

// Server → Client
{
  "result": {
    "name": "Acme Corp",
    "email": "contact@acme.com",
    "status": "active"
  }
}
```

Note: Under the hood it's simple JSON-RPC 2.0 messages. Same protocol used by VS Code extensions. Proven and reliable.

---

<!-- .slide: data-background-color="#8e44ad" -->

## Real-World Adoption

### Pre-built Servers

Google Drive • Slack • GitHub • PostgreSQL • MongoDB • Filesystem • Git • Docker

### Companies Using MCP

**OpenAI** • **Google DeepMind** • **Zed** • **Replit** • **Sourcegraph**

<p style="margin-top: 40px;">Thousands of community servers available</p>

<p style="font-size: 0.9em; margin-top: 20px;">
<i class="fas fa-link"></i> <a href="https://mcpmarket.com/server" target="_blank">mcpmarket.com/server</a>
</p>

Note: This isn't theoretical. Pre-built servers exist for common services. Major AI companies and dev tools have adopted MCP. The ecosystem is growing fast.

---

## The Impact

<div class="columns">
  <div class="column">

### Before

```python
# 50 integrations
SlackAPI_v1()
SlackAPI_v2()
CustomClient()
# ... 47 more
```

  </div>
  <div class="column">

### After

```python
# 1 MCP server
@server.tool()
def slack_send():
    pass

# Works with ALL
# MCP clients!
```

  </div>
</div>

<h3 style="color: #2ecc71; margin-top: 30px;">
Write once, use everywhere
</h3>

Note: Instead of N×M integrations, write ONE MCP server. Every MCP-compatible AI can use it. ChatGPT, Claude, future tools - all work immediately.

---

<!-- .slide: data-background-color="#2c3e50" -->

## The Vision

> "Open technologies like MCP are bridges that connect AI to real-world applications"
>
> <small>— Jack Dorsey, Block CTO</small>

<div style="margin-top: 50px;">

- Any AI agent + Any data source
- Write once, use everywhere
- Open standard, not vendor lock-in

</div>

Note: We're building the infrastructure layer for AI. One standard protocol so any agent can access any data. Open source, community-driven.

---

## Future of MCP

<div style="margin-top: 30px;">

**MCP Apps:** Standalone applications powered by MCP

</div>

<div class="columns" style="margin-top: 40px;">
  <div class="column fragment">

### Traditional MCP
- Servers expose data/tools
- AI agents consume them
- Client ↔ Server model

  </div>
  <div class="column fragment">

### MCP Apps
- Full applications built on MCP
- Native MCP integration
- Unified AI ecosystem

  </div>
</div>

Note: MCP is evolving beyond just servers. Now we're seeing full applications built with native MCP integration. Instead of just exposing data through MCP servers, these are complete apps that use MCP as their foundation. This creates a unified ecosystem where any AI can seamlessly work with any MCP-native application.

---

<!-- .slide: data-background-color="#c0392b" -->

## Problems to Solve

<div style="margin-top: 60px; font-size: 1.3em;">

- MCP tool definitions consume tokens
- Playwright MCP: ~14k tokens
- Too many tools overwhelm agents

</div>

Note: MCP isn't perfect yet. Each MCP server's tool definitions eat into your token budget - Playwright MCP alone uses about 14k tokens just for tool definitions. And when you combine multiple servers, too many tools can confuse the agent. These are active areas of development.

---

## Getting Started

```bash
# Install
pip install mcp

# Create server
from mcp.server import Server
server = Server("my-service")

@server.tool()
async def my_tool(param: str):
    return {"result": "your business logic"}

# Run
async with stdio_server() as (read, write):
    await server.run(read, write)
```

<p style="margin-top: 30px; font-size: 0.9em;">
<i class="fas fa-book"></i> modelcontextprotocol.io • <i class="fab fa-github"></i> github.com/modelcontextprotocol
</p>

Note: Getting started is straightforward. Install SDK, wrap your code, run it. Test with Claude Code which has built-in MCP support. Full docs available.

---

## Resources

<div class="columns">
  <div class="column">

### Docs

[modelcontextprotocol.io](https://modelcontextprotocol.io)

### GitHub

[github.com/modelcontextprotocol](https://github.com/modelcontextprotocol)

### Blog

[Code Execution with MCP](https://www.anthropic.com/engineering/code-execution-with-mcp)

[MCP Apps](https://blog.modelcontextprotocol.io/posts/2025-11-21-mcp-apps/)

[What if you don't need MCP?](https://mariozechner.at/posts/2025-11-02-what-if-you-dont-need-mcp/)

### Video

[MCP Explained](https://www.youtube.com/watch?v=HyzlYwjoXOQ&t=110s)

  </div>
  <div class="column">

### Install

```bash
pip install mcp
```

### Quick Start

```python
from mcp.server import Server
server = Server("my-data")

@server.tool()
async def my_tool():
    return {"data": "..."}
```

  </div>
</div>

Note: All resources you need. Full documentation, examples, SDKs. Everything is open source. Start building today.

---

<!-- .slide: class="title-slide" -->

# Thank You!

## Questions?

<div style="margin-top: 60px;">
  <a href="https://timothydjon.github.io/revealjs_template/" target="_blank">timothydjon.github.io/revealjs_template</a>
</div>

Note: Thanks for your attention! I'm excited to answer questions about MCP, implementation details, use cases, or anything else.
