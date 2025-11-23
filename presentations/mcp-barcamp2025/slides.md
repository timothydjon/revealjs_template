<!-- .slide: class="title-slide" -->

# Beyond API Calls

## How MCP is Revolutionizing AI Agent Development

<div class="author">Timothy - BarCamp 2025</div>
<div class="date">November 2025</div>

Note: Welcome! Today we're exploring MCP - Model Context Protocol - and why it's changing how we build AI agents. We're going to be technical, practical, and focused. Press 'S' for speaker notes.

---

<!-- .slide: data-background-color="#e74c3c" -->

## The Brain in a Jar Problem

<div style="text-align: center; margin: 40px 0;">
<h1>🧠</h1>
<p style="font-size: 0.9em; color: #fff;">LLMs are trapped behind text boxes</p>
</div>

<div class="columns" style="margin-top: 40px;">
  <div class="column">

**Can Talk About:**
- Linear tickets
- GitHub PRs
- Database queries
- Slack messages

  </div>
  <div class="column">

**Can't Actually:**
- ❌ Create tickets
- ❌ Merge code
- ❌ Query data
- ❌ Send messages

  </div>
</div>

<h3 class="fragment" style="color: #fff; margin-top: 40px;">
N AI Tools × M Data Sources = N×M Integration Hell
</h3>

Note: LLMs are incredibly smart but isolated. They can discuss work eloquently but can't DO work. Every AI tool needs custom integrations for every data source. 5 AI tools × 10 systems = 50 custom integrations. This is unsustainable.

---

<!-- .slide: data-background-color="#16a085" -->

## The Solution: MCP = USB-C for AI

<div style="text-align: center; margin: 40px 0;">
<h1 style="font-size: 3em;">🔌</h1>
</div>

**Model Context Protocol** - One standard, infinite connections

<div class="columns" style="margin-top: 40px;">
  <div class="column">

### Write Once
Build one MCP server for your data

  </div>
  <div class="column">

### Works Everywhere
- Claude Desktop
- VS Code / Cursor
- Any MCP client
- Future AI tools

  </div>
</div>

Note: MCP is the USB-C port for AI. Just like USB-C standardized device connections, MCP standardizes AI-to-data connections. Write your server once, and it works with Claude, IDEs, and future agents simultaneously. No more N×M problem.

---

## Architecture

```
┌──────────────┐                    ┌──────────────┐
│     Host     │                    │  MCP Server  │
│   (Claude)   │◄──────MCP─────────►│  (Your Data) │
└──────────────┘                    └──────────────┘
                   JSON-RPC 2.0
                  stdio or HTTP
```

<div class="columns" style="margin-top: 40px;">
  <div class="column">

**Server Exposes:**
- Resources (data)
- Tools (actions)
- Prompts (templates)
- **NEW: UI (interfaces)**

  </div>
  <div class="column">

**Transport:**
- Local: stdio
- Remote: HTTP+SSE
- Standard: JSON-RPC 2.0

  </div>
</div>

Note: Simple, clean architecture. MCP Servers expose your data and tools. Hosts (AI applications) connect via JSON-RPC 2.0. Can be local using stdio or remote using HTTP with Server-Sent Events. The protocol is standardized, proven, and simple.

---

## Building a Secure MCP Server

```python
# mcp_server.py
from mcp.server.fastmcp import FastMCP

mcp = FastMCP("Secure-DB")

@mcp.tool()
def query_customer_data(customer_id: str) -> str:
    """Read-only access to customer records"""

    # SECURITY: We control the access here, not the LLM
    if not is_authorized(customer_id):
        return "Error: Unauthorized"

    return db.execute(
        "SELECT * FROM customers WHERE id = ?",
        customer_id
    )

# Server automatically handles JSON-RPC protocol
```

<p style="font-size: 0.9em; margin-top: 30px;">
<i class="fas fa-shield-alt" style="color: #2ecc71;"></i> **Key Point:** You control security at the server level, not the AI
</p>

Note: This is enterprise-ready code. The MCP server controls what the AI can access. We validate permissions, sanitize inputs, and restrict operations. The AI can only do what you explicitly allow. This is how you safely connect AI to production databases.

---

## The Missing Link: Configuration

```json
// claude_desktop_config.json
{
  "mcpServers": {
    "my-db": {
      "command": "uv",
      "args": ["run", "mcp-server-postgres",
               "--url", "postgres://..."]
    },
    "github": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-github"]
    }
  }
}
```

<div style="margin-top: 40px;">

**No client code needed. Just config.**

- Drop in config file
- Restart Claude
- Your data is connected

</div>

Note: This is the magic - no client code! Just configuration. Drop this JSON in Claude's config directory, restart, and your MCP servers are connected. The Host handles all the protocol complexity. You just point to your servers.

---

<!-- .slide: data-background-color="#8e44ad" -->

## New in Nov 2025: MCP Apps & UI

<div class="columns">
  <div class="column">

### Yesterday (Text Only)
```
User: "Show AAPL stock"
AI: "Apple is at $150.20"
```
Just text. Static. Limited.

  </div>
  <div class="column">

### Today (MCP Apps)
```
User: "Show AAPL stock"
AI: [Interactive Chart UI]
```
<small>Live candlestick chart embedded in chat!</small>

  </div>
</div>

<div style="margin-top: 40px;">

**Technical Detail:** MCP servers can now return `ui://` resources
- Sandboxed HTML/JS interfaces
- Interactive components in chat
- Live data visualization
- Forms and inputs

</div>

Note: Game changer! MCP isn't just a data pipe anymore. Servers can return actual UI components. Ask for stock data, get an interactive chart. Ask for a form, get live inputs. The UI renders directly in the chat window, sandboxed and secure. This is the future of AI interaction.

---

## The Ecosystem

<div style="text-align: center;">

### Pre-built MCP Servers

<div style="font-size: 2em; margin: 30px 0;">
  <i class="fab fa-github"></i>
  <i class="fab fa-google-drive" style="margin-left: 30px;"></i>
  <i class="fab fa-slack" style="margin-left: 30px;"></i>
  <i class="fas fa-database" style="margin-left: 30px;"></i>
</div>

**GitHub • Google Drive • Slack • PostgreSQL • MongoDB • Linear • Notion**

</div>

<div style="margin-top: 40px;">

### Who's Using MCP

**Anthropic Claude** • **Cursor** • **Zed** • **Replit** • **Sourcegraph**

</div>

Note: The ecosystem is thriving. Pre-built servers for major platforms exist today. Major AI and developer tools have adopted MCP. This isn't experimental - it's production-ready and growing fast.

---

## Getting Started

```bash
# Install
pip install mcp

# Create server
from mcp.server.fastmcp import FastMCP

mcp = FastMCP("my-service")

@mcp.tool()
async def my_tool(param: str):
    # Your business logic here
    return {"result": "data"}

# That's it. 5 lines to production.
```

<div style="margin-top: 40px;">
<p style="font-size: 0.9em;">
<i class="fas fa-book"></i> **Docs:** modelcontextprotocol.io
<i class="fab fa-github" style="margin-left: 30px;"></i> **GitHub:** github.com/modelcontextprotocol
</p>
</div>

Note: Dead simple to start. Install the SDK, create a server, add tools with decorators. Your existing business logic becomes AI-accessible. Five lines of code and you're in production. Full documentation and examples available.

---

<!-- .slide: class="title-slide" data-background-color="#16a085" -->

# Start Building

<div style="margin-top: 50px;">

## <i class="fas fa-rocket"></i> Your Next Steps

1. **Pick one data source** (start small)
2. **Build an MCP server** (use the examples)
3. **Connect to Claude** (just config)
4. **Share with the community**

</div>

<div style="margin-top: 60px; font-size: 0.9em;">
<p><i class="fas fa-globe"></i> modelcontextprotocol.io</p>
<p><i class="fab fa-github"></i> github.com/modelcontextprotocol</p>
</div>

Note: Stop building one-off integrations. Start building for the ecosystem. Pick your most important data source, build an MCP server, and connect it to Claude. Share it with the community. Let's build the future of AI integration together. Thank you!