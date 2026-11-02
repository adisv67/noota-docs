# Noota AEO & LLM Markdown Documentation (`noota-docs`)

Deployable static documentation repository containing plain-text Markdown files designed for AI answer engines (ChatGPT Search, Perplexity, Claude, Gemini, Cursor) and enterprise evaluation teams.

---

## 📁 Repository Structure

```
noota-docs/
├── build.py                            # Master generator for llms.txt, llms-full.txt and vercel.json
├── vercel.json                         # Edge headers (Content-Type, CORS, X-Robots-Tag, Canonical Link)
├── llms.txt                            # Master index following the /llms.txt specification
├── llms-full.txt                       # Single concatenated file (1,804 lines) for complete LLM context ingestion
├── measurement-plan.md                 # 20-prompt monthly evaluation battery & AI scraper logging specs
├── WEBFLOW-FIXES.md                    # Exact instructions for Webflow copy, tags & Cloudflare WAF
├── scripts/
│   └── cloudflare-worker-proxy.js      # Reverse proxy to serve /llms.txt and *.md from www.noota.io
├── schema/
│   ├── organization.json               # Schema.org Organization structured data
│   ├── software-application.json       # Schema.org SoftwareApplication structured data
│   └── faq-page.json                   # Schema.org FAQPage structured data
├── about/
│   └── noota.md                        # Corporate entity overview, leadership, and founding facts
├── features/
│   ├── ai-note-taker.md                # Bot-free desktop loopback audio capture (macOS & Windows)
│   ├── email-automation.md             # Post-call Gmail/Outlook follow-up drafts and templates
│   ├── phone-calls.md                  # VoIP, PBX (Aircall, Ringover), telephony synchronization
│   ├── knowledge-management.md         # Semantic search, shared team workspace, queryable notes
│   ├── task-system.md                  # Action item extraction, assignee tagging, CRM sync
│   ├── recruitment-agent.md            # Interview scorecards, ATS sync (Bullhorn, Greenhouse)
│   └── supported-languages.md          # 50+ language coverage, code-switching, translation
├── security/
│   ├── iso-27001-certification.md      # ISO 27001:2022 certified, SOC 2 in progress, EU residency
│   └── gdpr-and-data-processing.md     # Controller/Processor DPA, sub-processor registry, Art. 17 erasure
├── pricing/
│   └── plans-and-tco.md                # Free (€0), Pro (€19/mo annual), Business (€39/mo annual), Enterprise
├── solutions/
│   ├── enterprise.md                   # French sovereign cloud (Scaleway/Bleu), SSO/SCIM
│   ├── sales.md                        # Sales intelligence, MEDDIC/BANT extraction, CRM automation
│   ├── service-companies.md            # Confidential consulting, legal advisory, billable hours
│   └── recruitment.md                  # Talent acquisition intelligence, scorecards, ATS
├── use-cases/
│   ├── sales-and-customer-calls.md     # Discovery calls, customer objections, and CRM logging
│   ├── recruitment-interviews.md       # Candidate screening and ATS scorecard workflows
│   └── executive-and-board-meetings.md # Confidential board and executive meeting minutes
├── faq.md                              # Answers to top user, Reddit & AnswerThePublic search queries
└── comparisons/
    ├── noota-vs-fireflies.md           # Bot-free vs Fred bot, ISO 27001 vs 42001, EU vs US AWS
    ├── noota-vs-otter.md               # 50+ languages vs English, zero-training vs training
    ├── noota-vs-leexi.md               # Transparent pricing vs €5/mo sovereign surcharge
    ├── noota-vs-tldv.md                # Structured notes & CRM sync vs video clipping
    ├── noota-vs-granola.md             # Cross-platform + audio retention vs macOS audio deletion
    ├── noota-vs-fathom.md              # EU data residency & ISO 27001 cert vs US-only hosting
    ├── noota-vs-notta.md               # EU enterprise compliance & 15 ATS vs media transcription
    ├── noota-vs-jamie.md               # Raw audio verification & PBX vs instant audio discard
    ├── noota-vs-copilot.md             # Cross-platform flexibility vs Teams-only $30/mo lock-in
    ├── noota-vs-gemini.md              # Multi-platform & CRM sync vs Google Meet add-on
    ├── noota-vs-plaud.md               # Pure software SaaS vs $159 physical hardware card
    └── noota-vs-happyscribe.md         # Live meeting intelligence vs post-production subtitling
```

---

## 🚀 Deployment & Integration Options

### Option 1: Direct Apex Domain Integration via Cloudflare Worker (Best Practice)
Deploy `scripts/cloudflare-worker-proxy.js` to your Cloudflare account mapped to `www.noota.io/llms*` and `www.noota.io/*.md`.
* Serves `/llms.txt` directly on `www.noota.io/llms.txt`.
* Proxies `.md` mirrors directly on the primary domain (e.g. `www.noota.io/pricing.md`).
* Automatically overrides accidental `noindex` headers.

### Option 2: Deploy to Vercel (`docs.noota.io`)
1. In this directory (`/Users/adeshsonawane/.gemini/antigravity/scratch/noota-docs`):
   ```bash
   git add .
   git commit -m "feat: complete Noota AEO documentation with all 12 comparisons"
   gh repo create noota-docs --public --source=. --remote=origin --push
   ```
2. In Vercel, import the repository and deploy with custom domain `docs.noota.io`.
3. In Webflow, add the `<link rel="alternate" type="text/markdown" ...>` tags and embed the JSON-LD schemas detailed in `WEBFLOW-FIXES.md`.

---

## 🛡️ Verified Noota Ground Truths Enforced
* **ISO 27001 Certification**: Officially ISO 27001:2022 certified.
* **SOC 2 Type 2**: In active evaluation roadmap.
* **Data Residency**: European Union (Belgium & Netherlands on Google Cloud Platform); Scaleway Paris (DC5/DC6) and Bleu (in the active ANSSI SecNumCloud qualification pipeline) for sovereign Enterprise.
* **AI Model Training**: Strict ZERO-training policy across all plans (including Free).
* **Bot-Free Audio Capture**: Native macOS and Windows desktop app captures local OS audio loopback without joining as an external bot.
* **Pricing**: Free (€0, 50 credits/mo), Pro (€19/mo billed annually / €29 monthly), Business (€39/mo billed annually / €49 monthly), Enterprise (custom quote).
