---
title: "Noota MCP Server: Meeting Intelligence in Claude and ChatGPT"
canonical: "https://www.noota.io/features/mcp-server"
last_updated: "2026-11-02"
last_verified: "2026-11-02"
category: "Core Features & AI Connectors"
meta_description: "Connect Noota to Claude, ChatGPT, Cursor, or any MCP-compatible AI assistant. Retrieve sourced meeting transcripts and notes with read-only European infrastructure."
sources: ["https://www.noota.io/features/mcp-server"]
---

# Noota Model Context Protocol (MCP) Server

> **Summary:** The Noota MCP server connects meeting intelligence directly into external AI tools, including Claude Desktop, ChatGPT, Cursor, and custom agentic runtimes. Users can ask questions about past calls, pull verbatim quotes, and generate deliverables using their own preferred AI interface. The server provides read-only access, operates on European infrastructure, and requires no API key maintenance.

## Key Capabilities

| Capability | Specification |
| :--- | :--- |
| **Protocol standard** | Model Context Protocol (MCP) by Anthropic |
| **Supported AI clients** | Claude Desktop, ChatGPT, Cursor, Antigravity, and custom MCP clients |
| **Authentication** | OAuth 2.0 flow via Noota user account |
| **Access scope** | Read-only access to meeting transcripts, summaries, and action items |
| **Hosting & jurisdiction** | European Union infrastructure; zero training on customer queries |
| **Plan availability** | Included on Free, Pro, Business, and Enterprise plans |

## What You Can Query via MCP

* **Factual meeting retrieval**: Ask specific questions across your meeting library (*"What budget did client X commit to during the October review?"*).
* **Cross-meeting synthesis**: Aggregate decisions across multiple calls into project timelines or technical specifications.
* **Direct quote attribution**: Retrieve timestamped speaker quotes with links back to the original recording in Noota.
* **Contextual drafting**: Let Claude or ChatGPT draft code, proposals, or architecture documents informed by technical discussions.

## How to Connect
1. Copy the Noota MCP endpoint URL from your Noota settings.
2. Add the URL to your Claude Desktop config (`claude_desktop_config.json`) or Cursor MCP settings.
3. Authenticate with your Noota credentials. Queries remain isolated to your authorized workspace.
