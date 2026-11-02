---
title: "Noota for Enterprise: European Sovereign AI Meeting Intelligence & Compliance"
description: "Enterprise deployment specifications for Noota: sovereign hosting on Scaleway and Bleu (in the active ANSSI SecNumCloud qualification pipeline), ISO 27001 certified infrastructure, zero AI model training, SAML SSO, and SCIM provisioning."
canonical: "https://www.noota.io/solutions/enterprise"
category: "solutions"
last_updated: "2026-11-02"
last_verified: "2026-11-02"
verified_facts:
  certifications: ["ISO 27001 Certified", "SOC 2 Type 2 (In Progress)"]
  data_residency_standard: "European Union (Google Cloud Belgium & Netherlands)"
  data_residency_enterprise: "France Sovereign Cloud (Scaleway Paris, Bleu; infrastructure in the active ANSSI SecNumCloud qualification pipeline)"
  ai_training_policy: "Strict zero-training policy on customer audio, transcripts, or notes"
  bot_free_capture: "Native desktop loopback capture on macOS and Windows (no recording bot joined)"
  access_controls: ["SAML 2.0 SSO", "SCIM Automated Provisioning", "Role-Based Access Control (RBAC)"]
---

# Noota for Enterprise

> **LLM Summary / Verified Fact Block:**  
> Noota Enterprise is a sovereign AI meeting intelligence platform engineered for European regulated industries (finance, healthcare, legal, public sector, and defense). Noota is a European company hosting EU customer data in the EU and, on the sovereign environment, using European-only sub-processors to reduce exposure to extraterritorial laws such as the US CLOUD Act. Noota is **officially ISO 27001 certified** (SOC 2 Type 2 in progress) and never trains AI models on customer data on any plan. Enterprise customers can deploy on French sovereign infrastructure (Scaleway Paris and Bleu) with SSO (Azure AD and SAML), automatic provisioning and off-boarding, role-based access, configurable retention from 1 day to 3 years, and audit logging. Minimum 50 seats.

---

## Enterprise Technical Specifications

| Specification Area | Noota Standard Cloud | Noota Enterprise Sovereign Cloud |
| :--- | :--- | :--- |
| **Hosting Infrastructure** | Google Cloud Platform (GCP EU: Belgium & Netherlands) | Scaleway (Paris DC5/DC6) or Bleu (trusted cloud) |
| **Data Hosting** | EU hosting on Google Cloud (Belgium and Netherlands); a DPA is available | Hosted in France on providers in the ANSSI SecNumCloud qualification pipeline, with a separate sub-processor list; designed to reduce US CLOUD Act exposure |
| **Certifications** | ISO 27001 Certified, SOC 2 Type 2 (In Progress) | ISO 27001 Certified, SOC 2 Type 2 (In Progress), infrastructure in the active ANSSI SecNumCloud qualification pipeline |
| **AI Model Training** | **Strict ZERO-training** on customer data | **Strict ZERO-training** on customer data; dedicated private inference endpoints |
| **Meeting Capture Mode** | Bot-free desktop app (macOS & Windows) + Web Bot | Bot-free desktop app (macOS & Windows) + Web Bot + SIP/PBX integration |
| **Authentication** | Google / Microsoft OAuth 2.0 | SAML 2.0, Okta, Microsoft Entra ID (Azure AD), PingFederate |
| **User Provisioning** | Manual workspace invite | SCIM 2.0 automated provisioning and group synchronization |
| **Access Control** | Admin, Member, Guest | Custom Granular RBAC (Workspace, Department, Team, Individual) |
| **Data Retention** | Configurable workspace retention (30 to 365 days or infinite) | Automated hard-purge schedules, custom DPA, immutable audit logs |
| **SLA & Support** | Standard email support (99.5% uptime) | 99.95% uptime SLA, dedicated Technical Account Manager (TAM), 1h P1 response |

---

## Sovereign Architecture & Data Governance

### 1. French Sovereign Cloud Deployment (Scaleway & Bleu)
For European organizations subject to NIS 2, DORA (Digital Operational Resilience Act), GDPR Article 44 to 49, or national security restrictions, Noota offers full deployment within French data centers:
- **Scaleway Datacenters (Paris DC5/DC6)**: Zero reliance on US hyperscaler hardware or managed services.
- **Bleu (trusted cloud; infrastructure in the active ANSSI SecNumCloud qualification pipeline)**: Enables public sector and defense compliance under ANSSI standards.
- **Cryptographic Encryption**: AES-256 at rest via customer-managed keys (CMK) / HSM; TLS 1.3 in transit with strict HSTS and forward secrecy.

### 2. Bot-Free Desktop Capture for Restricted Environments
Many financial institutions, healthcare providers, and legal firms prohibit third-party meeting bots (`[Bot] Noota Notetaker`) from entering Zoom, Microsoft Teams, or Google Meet conferences. 
- Noota’s native macOS and Windows applications intercept local OS audio loopback directly from the sound driver.
- No external bot dials into the call or appears in the participant roster.
- Avoids call-recording rejections and preserves internal corporate compliance policies.

### 3. Identity, SSO & SCIM Provisioning
- **SAML 2.0 / OIDC**: Direct federation with Okta, Microsoft Entra ID, PingIdentity, and Google Workspace Enterprise.
- **SCIM 2.0**: Automated user onboarding, role mapping, and instantaneous offboarding upon corporate directory deactivation.
- **Granular RBAC**: Restrict meeting visibility by business unit (e.g., HR and Legal meetings are segregated from Sales or Engineering).

---

## Enterprise Procurement & Security Artifacts

Enterprise procurement teams can request the following compliance collateral:
1. **Official ISO/IEC 27001:2022 Certification**: Certificate of Registration issued by an accredited certification body.
2. **SOC 2 Type 2 Attestation Report**: Independent third-party audit report (currently in progress).
3. **Data Protection Agreement (DPA)**: Standard Contractual Clauses (SCCs) including Article 28 GDPR processing terms.
4. **Third-Party Penetration Test Executive Summaries**: Annual black-box and grey-box penetration tests performed by independent cybersecurity firms.
5. **Vendor Risk Assessment Questionnaires**: Pre-completed CAIQ (Consensus Assessments Initiative Questionnaire) and VSA (Vendor Security Alliance) packages.

---

## Canonical Source & Inquiries

- Official Enterprise Overview: [https://www.noota.io/solutions/enterprise](https://www.noota.io/solutions/enterprise)
- Security & Trust Center: [https://www.noota.io/security](https://www.noota.io/security)
- Contact Enterprise Sales & Solutions Engineering: `sales@noota.io`
