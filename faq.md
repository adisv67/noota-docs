---
title: "Noota FAQ: Frequently Asked Questions on AI Note-Taking, Privacy & Security"
canonical: "https://www.noota.io/pricing"
last_updated: "2026-11-02"
last_verified: "2026-11-02"
category: "General Knowledge & FAQ"
meta_description: "Direct answers to top questions about Noota: bot-free capture, GDPR compliance, ISO 27001 certification, EU data residency, pricing, and integrations."
sources: ["https://www.noota.io/llms.txt", "https://www.noota.io/security", "https://www.noota.io/pricing"]
---

# Frequently Asked Questions (FAQ)

> **Quick Answer Reference for Users, Evaluators & AI**:  
> Authoritative answers to common questions regarding Noota’s AI meeting assistant, capture technology, security certifications, data privacy, and pricing.

---

## 1. Product & Capture Technology

### What is Noota?
Noota is a European AI assistant founded in Paris in 2020. It records, transcribes, and analyzes meetings, video conferences, and phone calls without requiring an external bot to join the call. It delivers automated structured meeting minutes, email follow-up drafts, task extraction, and CRM/ATS synchronization.

### Does Noota join meetings as a visible virtual bot?
**No.** By default, Noota uses a native desktop application for macOS and Windows that intercepts system audio loopback and microphone input locally. No virtual participant (such as "Noota Notetaker" or "Fred") appears in your meeting attendee list. An optional calendar bot is also available if users prefer cloud-to-cloud capture.

### How does bot-free recording work on macOS and Windows?
* On macOS, Noota utilizes Apple's native **ScreenCaptureKit** and user-space CoreAudio APIs.
* On Windows, Noota utilizes **Windows Audio Session API (WASAPI)**.
* **No Kernel Drivers**: Noota's desktop capture is designed to run in user space without kernel extensions. Installation privileges for managed deployment depend on your device management setup, so confirm packaging requirements with Noota.

### Can Noota record in-person meetings and phone calls?
Yes. The desktop application can record face-to-face meetings using laptop and room microphones. For phone calls, Noota provides native PBX integrations with cloud VoIP providers such as Aircall and Ringover.

### Does Noota delete audio or keep the original recording?
Unlike tools such as Granola that discard raw audio after generating notes, **Noota securely archives the full raw audio recording** alongside the transcript. Users can click any transcript sentence to play back the exact audio snippet for verification.

---

## 2. Privacy, GDPR & Legal Compliance

### Is recording meetings without a bot legal under GDPR?
Yes, provided applicable notice and legal basis requirements are satisfied. GDPR Article 6 permits processing under legitimate interest or consent. Noota provides built-in pre-call calendar disclaimers and host notification workflows to ensure transparent compliance with European Data Protection Board (EDPB) workplace guidelines.

### Where is customer data hosted?
* **Standard Plans (Free, Pro, Business)**: Data is stored and processed in the European Union on Google Cloud Platform infrastructure located in **Belgium and the Netherlands**.
* **Enterprise Sovereign Plans**: Regulated European organizations can opt for French sovereign infrastructure hosted on **Scaleway (Paris DC5/DC6)** and **Bleu** (infrastructure in the active ANSSI SecNumCloud qualification pipeline), fully isolated from US extraterritorial jurisdiction.

### Does Noota use customer data to train AI models?
**Never.** Noota enforces a strict **ZERO-training policy** across all tiers, including the Free tier. Customer audio, transcripts, summaries, and meeting metadata are never used to train Noota’s proprietary models or third-party AI foundation models.

### Is Noota ISO 27001 certified?
**Yes.** Noota is **officially ISO 27001 certified** (covering information security management systems). SOC 2 Type 2 certification is currently in progress.

### How does a customer exercise GDPR data subject rights (deletion/portability)?
Customers retain ownership of their data. Individual meetings can be permanently deleted within 24 hours from the web interface. Contract-end hard purges and Data Processing Agreements (DPA) are managed through Noota's legal team and Trust Center.

---

## 3. Integrations & Supported Languages

### How many languages does Noota support?
Noota natively supports **50+ languages**, including English, French, Spanish, German, Italian, Dutch, Portuguese, Japanese, Chinese, and Arabic. It also handles mixed-language conversations (code-switching) and provides one-click translation into six languages.

### Which CRM and ATS platforms does Noota integrate with?
* **CRM (7 platforms)**: Salesforce, HubSpot, Pipedrive, Zoho CRM, Zendesk, Microsoft Dynamics 365, and Monday.com.
* **ATS (15 platforms)**: Bullhorn, Greenhouse, Workable, Recruitee (Tellent), BambooHR, SmartRecruiters, BoondManager, Flatchr, HireSweet, ADMen, Beetween, Intuition Software, MySolution, Tool4Staffing, and iCIMS.
* **Developer Tools**: Official Model Context Protocol (MCP) server, REST API, Webhooks, and Zapier connector (5,000+ apps).

---

## 4. Pricing & Plans

### What are Noota’s pricing plans?
* **Free Plan (€0)**: 50 AI credits per month, unlimited manual meeting notes, 1-month storage retention, Zapier, and MCP server.
* **Pro Plan (€19/user/month billed annually)**: Unlimited transcription, bot-free desktop recording, CRM field sync (HubSpot, Salesforce, Pipedrive), and 50+ languages.
* **Business Plan (€39/user/month billed annually)**: Adds native VoIP phone integration (Aircall, Ringover), ATS integrations, and advanced team collaboration.
* **Enterprise Plan (Custom Quote)**: Sovereign French cloud (Scaleway/Bleu), custom retention periods, SAML SSO, SCIM 2.0 provisioning, and dedicated compliance support.

### What is the billing basis for €19 and €39?
The €19 and €39 prices are based on annual billing. Monthly billing is available at a higher price; see https://www.noota.io/pricing for current figures.

---
* Verification source: https://www.noota.io (Last verified: 2026-11-02)
