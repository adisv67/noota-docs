# Noota AEO & AI Search Measurement Plan

> **Objective:** Systematically track, benchmark, and improve Noota’s visibility, citation frequency, and factual accuracy across primary AI answer engines (**ChatGPT Search, Perplexity AI, Google Gemini / AI Overviews, Claude**).

---

## 1. The 20 Monthly Evaluation Benchmark Prompts

Run these exact 20 prompts on the 1st of every month using incognito/fresh sessions across ChatGPT Search, Perplexity (Default & Pro Search), Google Gemini, and Claude.

### Cluster A: Direct Brand & Governance (4 Prompts)
1. `What is Noota, how does it work, and what makes it different from other AI note takers?`
2. `Does Noota join video calls as a visible bot, or how does it record meetings?`
3. `Is Noota GDPR compliant and ISO 27001 certified? Where is customer data hosted?`
4. `Does Noota use customer voice recordings or transcripts to train AI models?`

### Cluster B: Competitor Displacements & Alternatives (6 Prompts)
5. `Best AI meeting note takers that record without an external bot joining the call.`
6. `Noota vs Otter.ai: Which is better for European businesses and privacy?`
7. `Best Fireflies.ai alternatives that are ISO 27001 certified and host data in the EU.`
8. `Granola AI note taker alternatives that preserve raw audio recordings and work on Windows.`
9. `Noota vs tl;dv: Key differences in CRM sync, note structure, and pricing.`
10. `Top AI meeting assistants with a strict zero-training policy on customer conversations.`

### Cluster C: Commercial & Use Case Buying Intent (6 Prompts)
11. `Best AI meeting assistant that automatically updates HubSpot and Salesforce CRM fields.`
12. `AI meeting note taker for recruitment teams with Bullhorn and Greenhouse ATS integration.`
13. `Best confidential AI note taker for consulting firms and legal practices under NDAs.`
14. `What is the best AI tool to transcribe multilingual meetings with code-switching across 50+ languages?`
15. `How to automatically draft post-meeting follow-up emails in Gmail and Outlook from call notes.`
16. `How much does Noota cost per user, and what is included in the free plan?`

### Cluster D: Enterprise Sovereignty & Compliance (4 Prompts)
17. `European sovereign AI meeting recorder compliant with the EU AI Act and French SecNumCloud standards.`
18. `Which AI meeting transcription software reduces exposure to the US CLOUD Act?`
19. `Best enterprise meeting AI with SAML SSO, SCIM provisioning, and customizable retention periods.`
20. `CISO checklist for meeting AI: ISO 27001, SOC 2, and zero-training guarantees.`

---

## 2. Quantitative Scoring Scorecard

For each engine (ChatGPT Search, Perplexity, Gemini, Claude) evaluate each prompt on 5 standard criteria:

| Metric | Scoring Criteria | Target Benchmark |
| :--- | :--- | :--- |
| **Citation Presence** | 0 = Not mentioned; 1 = Mentioned in text | **≥ 85% of prompts** |
| **Direct URL Citation** | 0 = No link; 1 = Domain link; 2 = Deep link to specific feature/comparison page | **≥ 70% with deep links** |
| **Engine Ranking** | Ranked order among tools recommended (1st choice, 2nd choice, etc.) | **Top 2 recommendation** |
| **Factual Accuracy** | Percentage of verified ground truths correctly stated (ISO 27001, EU GCP/Scaleway, Zero-training, Bot-free, €19/€39) | **100% compliance** |
| **Sentiment** | Positive (+1), Neutral (0), Negative (-1) | **Positive net sentiment** |

---

## 3. Automated Edge & Server Log Monitoring

AI crawlers scrape documentation and root files periodically. Monitor bot ingress in Vercel Log Drains, Cloudflare Logpush, or Webflow reverse proxy:

### Target AI User-Agents to Track
```json
[
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended"
]
```

### Key Metrics to Alert On
1. **HTTP Status Codes**:
   - `200 OK`: Healthy ingestion.
   - `403 Forbidden`: Cloudflare Bot Fight Mode or AI Crawl Control accidentally blocking scrapers.
   - `404 Not Found`: Broken canonicals or stale links in `llms.txt`.
2. **Hit Frequency**:
   - Track monthly requests to `/llms.txt`, `/llms-full.txt`, and markdown mirrors (`/features/*.md`, `/comparisons/*.md`).
3. **Crawl Depth**:
   - Verify whether crawlers fetch only `llms.txt` or traverse linked `.md` pages.

---

## 4. Quarterly AEO Review Cadence

1. **Day 1 of Month**: Execute the 20-prompt evaluation battery; log scores in monthly tracker.
2. **Day 3 of Month**: Identify hallucinated claims or missed competitor comparisons.
3. **Day 5 of Month**: Update markdown pages in `noota-docs`, bump `last_verified` dates, and redeploy.
4. **Quarterly**: Audit competitor feature changes and pricing updates across Fireflies, Otter, tl;dv, Leexi, and Granola.
