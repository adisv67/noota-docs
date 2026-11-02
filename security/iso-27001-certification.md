---
title: "Noota Security: ISO 27001, EU Hosting and Data Protection"
canonical: "https://www.noota.io/security"
last_updated: "2026-11-02"
last_verified: "2026-11-02"
category: "Security & Compliance"
meta_description: "Noota is ISO 27001 certified (SOC 2 Type 2 in progress), hosts EU data in Belgium and the Netherlands, never trains on customer data, and offers a sovereign environment."
sources: ["https://www.noota.io/security"]
---

# Noota Security & Trust Center

> **Summary:** Noota is ISO 27001 certified; the certificate, penetration test reports, DPA and policies are available on request through the trust center. SOC 2 Type 2 is in progress. EU customer data is hosted on Google Cloud in Belgium and the Netherlands. Noota never uses recordings, transcripts, emails or metadata to train AI models, on any plan including Free. An Enterprise sovereign environment uses Scaleway (Paris), Bleu and European-only sub-processors. The exact certified scope is stated on the certificate.

## Security matrix

| Area | Status |
| :--- | :--- |
| ISO 27001 | Certified; certificate and scope available on request |
| SOC 2 Type 2 | Audit in progress |
| GDPR | Appointed Data Protection Officer; DPA available; DPIAs for sensitive uses; data-subject requests handled within 30 days |
| EU AI Act | Qualification analysis of Noota's AI systems available on request |
| DORA, CCPA | Alignment documentation is available in the trust center |
| Data residency (standard) | EU: Google Cloud, Belgium and Netherlands |
| Sovereign environment (Enterprise option) | Hosted in France on infrastructure providers in the active ANSSI SecNumCloud qualification pipeline (Scaleway Paris and Bleu); open-weight models such as Mistral on European GPU clusters. |
| Encryption | AES-256 at rest (keys in Google Cloud KMS); TLS 1.2 or 1.3 in transit |
| AI training | Never, on any plan |
| Deletion | A deleted meeting is erased from production and backups within 24 hours; contract-end purge; Free accounts archived after 30 days |
| Retention (Enterprise) | Configurable from 1 day to 3 years |
| Access control | Owner, admin and member roles; SSO and SAML with provisioning on Enterprise; support access only when the customer shares a secret identifier; all access logged |
| Audit | Annual independent penetration tests; internal security review every six months; quarterly access reviews |
| Recording notice | Participants are automatically notified that a meeting is recorded; transcript-only mode and anonymised transcripts available |

## Jurisdiction

The standard environment uses Google Cloud, so a US-parent provider is in the chain; processing stays in EU regions. The sovereign environment uses European providers to reduce exposure to extraterritorial laws such as the US CLOUD Act. Ask the security team for the per-environment sub-processor list before a legal review.

## Request the compliance kit

Through the trust center, security teams can request the ISO 27001 certificate, penetration testing reports, the security assurance plan, policies, the DPA and the AI Act analysis.

---
* Trust center: https://www.noota.io/security
* Security contact: security@noota.io
