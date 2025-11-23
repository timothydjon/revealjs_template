<!-- .slide: class="title-slide" -->

# Beyond API Calls

## How MCP is Revolutionizing AI Agent Development

<div class="author">Timothy - BarCamp 2025</div>
<div class="date">November 2025</div>

Note: Welcome! Today we're exploring MCP - Model Context Protocol - and why it's changing how we build AI agents. Press 'S' for speaker notes.

---

<!-- .slide: data-background-color="#e74c3c" -->

# The Problem

<div class="columns">
  <div class="column">

### N AI Apps

- ChatGPT
- Claude
- Copilot
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

# Enter MCP

**Model Context Protocol**

Universal standard for connecting AI to data

<p style="font-size: 0.9em; margin-top: 40px;">Like USB-C for AI agents</p>

Note: MCP is an open protocol. One standard way to connect any AI to any data source. Write once, use everywhere.

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

<!-- .slide: class="title-slide" data-background-color="#16a085" -->

# Call to Action

<div style="margin-top: 50px;">

## <i class="fas fa-code"></i> Start Building

Pick one data source, create an MCP server

## <i class="fas fa-users"></i> Join the Community

GitHub • Discord • Open source

## <i class="fas fa-rocket"></i> Stop one-off integrations

Build for the ecosystem

</div>

Note: Start small - pick one data source and build an MCP server. Join the community. Most importantly, stop building one-off integrations. Build MCP servers that work with every AI tool.

---

## Resources

<div class="columns">
  <div class="column">

### Docs

[modelcontextprotocol.io](https://modelcontextprotocol.io)

### GitHub

[github.com/modelcontextprotocol](https://github.com/modelcontextprotocol)

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

<div class="author" style="margin-top: 60px;">
  <i class="fas fa-globe"></i> modelcontextprotocol.io<br>
  <i class="fab fa-github"></i> github.com/modelcontextprotocol<br>
  <i class="fas fa-code"></i> Start building with MCP today!
</div>

Note: Thanks for your attention! I'm excited to answer questions about MCP, implementation details, use cases, or anything else.
