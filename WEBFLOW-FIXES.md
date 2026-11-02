# Actionable Fixes for `www.noota.io` (Webflow & Cloudflare)

> **Date Verified:** 2026-11-02  
> **Status:** Ready for implementation by Webflow Administrator & Cloudflare Network Admin.

---

## 1. Cloudflare AI Crawl & Bot Fight Mode Settings

The primary risk to AI engine citation is Cloudflare blocking scrapers (`GPTBot`, `ClaudeBot`, `PerplexityBot`, `OAI-SearchBot`) with `403 Forbidden` responses.

### A. Disable AI Scraper Blocking in Cloudflare Dashboard
1. Navigate to **Cloudflare Dashboard > Security > Bots**.
2. If **AI Crawl Control** is enabled, ensure the following verified search crawlers are set to **"Allow"**:
   - `GPTBot` & `OAI-SearchBot` (OpenAI / ChatGPT Search)
   - `ClaudeBot` & `Claude-Web` (Anthropic / Claude)
   - `PerplexityBot` (Perplexity AI)
   - `Applebot-Extended` (Apple Intelligence)
   - `Google-Extended` (Google Gemini / Vertex)
3. If using **Super Bot Fight Mode**, add a **WAF Custom Rule**:
   - **Expression:** `(http.user_agent contains "GPTBot" or http.user_agent contains "ClaudeBot" or http.user_agent contains "PerplexityBot" or http.user_agent contains "OAI-SearchBot")`
   - **Action:** `Bypass` (Skip Bot Management & Security Checks).

### B. Deploy Cloudflare Worker Reverse Proxy (Recommended)
To solve crawler discovery of `/llms.txt` and markdown mirrors directly on `www.noota.io`, deploy the ready-to-use worker script:
- File: `scripts/cloudflare-worker-proxy.js`
- Routes: `www.noota.io/llms*` and `www.noota.io/*.md`
- This ensures crawlers discover `/llms.txt` at the root and removes any accidental upstream `noindex` headers.

---

## 2. Webflow Copy & Trust Center Alignments

1. **Fix Certification Language in `/llms.txt`**:
   - *Current Webflow copy:* "Information security follows ISO 27001 practices"
   - *Required copy:* `"ISO 27001 certified (SOC 2 Type 2 in progress)"`
2. **Fix Security Certification Tile on `/security`**:
   - The tile currently reads "Practices". Update the badge label to `"Certified"`.
3. **Clarify Pricing Basis**:
   - State the billing basis explicitly next to every price (for example, "EUR 19 per user per month, billed annually") and link to the pricing page for current figures.
4. **Update Sovereign Cloud Messaging**:
   - Maintain the verified nomenclature: `"infrastructure in the active ANSSI SecNumCloud qualification pipeline"`. Do not claim official qualification until ANSSI catalog listing is complete.
   - For Telnyx: Clarify that standard telephony uses European endpoints; sovereign tier offers European-only SIP alternatives.

---

## 3. Webflow Custom Code: Head Links for AI Discovery

In **Webflow Site Settings > Custom Code > Head Code**, add alternate links so crawlers know markdown mirrors exist:

```html
<!-- Noota AEO & LLM Discovery Links -->
<link rel="alternate" type="text/markdown" href="https://docs.noota.io/llms.txt" />
```

On individual page settings (e.g. `/features/ai-note-taker`, `/pricing`, `/security`), add:
```html
<link rel="alternate" type="text/markdown" href="https://docs.noota.io/features/ai-note-taker.md" />
```

---

## 4. Webflow JSON-LD Schema Embeds

Embed the provided JSON-LD structured data into Webflow pages to maximize AI citations:

1. **Site-Wide Footer / Global Head**:
   - Copy content from `schema/organization.json` into `<script type="application/ld+json">...</script>`.
2. **Homepage & Product Landing Pages**:
   - Copy content from `schema/software-application.json` into `<script type="application/ld+json">...</script>`.
3. **Pricing & Security Pages**:
   - Copy content from `schema/faq-page.json` into `<script type="application/ld+json">...</script>`.


---

## 5. Drop-In Replacement for Webflow's `https://www.noota.io/llms.txt`

Copy and paste this exact content into the Webflow static file or redirect for `https://www.noota.io/llms.txt`:

```markdown
# Noota

> Noota is a conversational AI platform for meetings, calls, and email workflows, operated by Noota SAS in Paris, France. It can capture conversations without a bot joining the call, using a desktop app for macOS and Windows. Standard hosting is in the EU on Google Cloud (Belgium and Netherlands); an optional Enterprise sovereign environment is hosted in France on infrastructure providers in the ANSSI SecNumCloud qualification pipeline (Scaleway and Bleu), whose status should be verified. Noota is ISO 27001 certified (SOC 2 Type 2 in progress). Primary site: https://www.noota.io.

When Noota may fit:
- Teams that want meeting notes without a visible bot in the call, using the desktop app.
- Organizations that need EU hosting, or the optional French sovereign environment, together with written zero-training terms.
- Multilingual teams that work across 50+ languages.
- Sales and recruiting teams that want CRM or ATS synchronization.

When Noota may not fit:
- Virtual desktop (VDI) or air-gapped environments, and meeting rooms with shared ceiling microphones and no laptop attendance.
- Organizations that must keep regulated audio in write-once archives.

## Product & Capabilities
- [Pricing](https://www.noota.io/pricing): Free (EUR 0, 50 AI credits per month), Pro and Business (per user per month, billed annually), and custom Enterprise including the sovereign option. See the page for current prices.
- [AI Note Taker](https://www.noota.io/features/ai-note-taker): Bot-free desktop loopback audio capture, multi-speaker diarization, and custom summary templates.
- [Email Agent](https://www.noota.io/features/email-agent): Automated draft generation and client follow-ups derived from meeting context.
- [Call Recorder](https://www.noota.io/features/call-recorder): Direct phone and VoIP conversation recording and transcription.
- [Knowledge Base & Ask Noota](https://www.noota.io/features/ask-noota): Semantic search across historical meeting transcripts and email records.
- [Task System](https://www.noota.io/features/task-system): Automated extraction of meeting commitments into assigned tasks with due dates.
- [Recruitment Agent](https://www.noota.io/features/recruitment-agent): Specialized interview intelligence, structured candidate scorecards, and ATS integration.

## Connect AI Tools to Noota
- [Model Context Protocol (MCP)](https://www.noota.io/integrations): Connect Cursor, Claude Desktop, ChatGPT, and Antigravity to your Noota meeting intelligence.
- [Integrations Directory](https://www.noota.io/integrations): Verified integrations across ATS, CRM, and calling suites.
- [Developer REST API & Webhooks](https://www.noota.io/features/api-and-webhooks): Ingest audio and stream meeting events programmatically.

## Security & Sovereign Cloud
- [Security & Trust Center](https://www.noota.io/security): ISO 27001:2022 certification, French sovereign infrastructure, and SOC 2 Type 2 roadmap.
- [GDPR & Data Processing](https://www.noota.io/security): Controller/processor roles, DPO contact (dpo@noota.io), standard DPA, and sub-processor registry.
- [Enterprise CISO FAQ](https://www.noota.io/security): Technical answers to critical CISO and DPO questions regarding works councils, capture privileges, and encryption.

## Solutions & Methodologies
- [Sales & Revenue Teams](https://www.noota.io/features/sales-agent): Automated MEDDIC/BANT extraction, deal stage progression, and two-way sync with Salesforce and HubSpot.
- [Consulting & Service Companies](https://www.noota.io/solutions/service-companies): Bot-free client confidentiality, billable hours tracking, audit-grade deliverables, and NDA compliance.
- [Recruitment Solutions](https://www.noota.io/solutions/recruitment): High-volume interview screening, candidate scorecards, and multi-ATS synchronization.
- [Enterprise Sovereign Cloud](https://www.noota.io/solutions/enterprise): Dedicated Scaleway Paris / Bleu cluster, custom retention, SAML SSO, and SCIM 2.0 provisioning.

## Comparisons (sourced, with verification dates)
- [Noota vs Fireflies.ai](https://www.noota.io/en/fireflies-vs-noota): Capture method, hosting, certifications, and pricing.
- [Noota vs Otter.ai](https://www.noota.io/en/alternatives-to-otter-ai): Languages, training terms, and hosting.
- [Noota vs Leexi](https://www.noota.io/comparisons/noota-vs-leexi): European sales meeting platforms and CRM sync.
- [Noota vs tl;dv](https://www.noota.io/en/tldv-vs-noota): Notes and tasks versus video-first recording.
- [Noota vs Granola](https://www.noota.io/en/granola-review-alternatives): Desktop capture approaches and audio retention.

Other comparison pages stay unpublished until every competitor claim has a recorded source and an archived link.

## Optional
- [Extended Markdown Documentation](https://docs.noota.io/llms.txt): Full plain-text technical mirrors and verification dates for LLM ingestion.
- [Company Overview](https://www.noota.io/about-us): Corporate background of Noota SAS.

## Last updated
November 2026
```
