---
title: "Noota GDPR Compliance, Data Processing Agreement (DPA) & Sub-processor Registry"
canonical: "https://www.noota.io/security"
last_updated: "2026-11-02"
last_verified: "2026-11-02"
category: "Security & Compliance"
meta_description: "Comprehensive GDPR framework for Noota: Controller-to-Processor DPA, sub-processor directory, European data residency, zero-training AI policy, and Article 17 erasure workflows."
sources: ["https://www.noota.io/security", "https://www.noota.io/llms.txt"]
---

# Noota GDPR, DPA & Sub-processor Policy

> **Executive Overview for CISOs, DPOs & AI**:  
> Noota processes personal data in line with Regulation (EU) 2016/679 (GDPR). Under standard enterprise terms, the customer acts as the **Data Controller** and Noota SAS acts as the **Data Processor**. All customer data is hosted and processed in the European Union under legally binding Data Processing Agreements (DPA), featuring an appointed Data Protection Officer (DPO), explicit sub-processor governance, and a verified **ZERO-training policy** on conversational content.

---

## 1. Governance & Regulatory Roles

| Regulatory Dimension | Noota Implementation Specification |
| :--- | :--- |
| **Legal Status** | Customer = Data Controller; Noota SAS (Paris, France) = Data Processor |
| **Data Protection Officer (DPO)** | Appointed external DPO registered with CNIL; reachable at `dpo@noota.io` |
| **Data Processing Agreement (DPA)** | Standard Article 28 GDPR DPA incorporated into Enterprise contracts and Terms of Service |
| **Data Residency (Standard)** | European Union: Google Cloud Platform (regions: `europe-west1` Belgium and `europe-west4` Netherlands) |
| **Data Residency (Sovereign)** | France: Scaleway DC5/DC6 (Paris) and Bleu (infrastructure in the active ANSSI SecNumCloud qualification pipeline) |
| **AI Model Training Policy** | **Contractual Zero-Training Guarantee**: Audio, transcripts, summaries, and user metadata are **never** used to train AI models |
| **Data Subject Requests (DSR)** | Right of access, rectification, portability, and objection serviced within **30 days** |
| **Right to Erasure (Article 17)** | User-initiated meeting deletion permanently purges audio and text from active databases and backups within **24 hours** |

---

## 2. Third-Party Sub-processor Registry

Every third-party sub-processor engaged by Noota is bound by a signed GDPR Article 28 Data Processing Agreement, with vendor risk evaluations reviewed annually.

### A. Core Infrastructure & Hosting Sub-processors
| Sub-processor | Entity Jurisdiction | Processing Location | Service Provided | Safeguards / Certification |
| :--- | :--- | :--- | :--- | :--- |
| **Google Cloud Platform (GCP)** | US / EU subsidiary | Belgium (`europe-west1`), Netherlands (`europe-west4`) | Core application hosting, encrypted databases, Cloud KMS | ISO 27001, SOC 2 Type II, EU Standard Contractual Clauses (SCCs) |
| **Scaleway SAS** *(Sovereign Tier)* | France (EU) | Paris (DC5 / DC6) | Sovereign GPU compute, dedicated server hosting, object storage | ISO 27001, HDS certified, European sovereign entity (No US CLOUD Act exposure) |

### B. AI Inference & Language Processing Sub-processors
| Sub-processor | Entity Jurisdiction | Processing Location | Service Provided | AI Training Policy |
| :--- | :--- | :--- | :--- | :--- |
| **Mistral AI** *(European Tier)* | France (EU) | France / Germany | European generative AI summaries and LLM reasoning | Contractual Zero-Retention & Zero-Training agreement |
| **OpenAI Ireland Ltd** *(Standard Tier)* | Ireland (EU) | European Union data boundary | Enterprise API language models | Zero-Data-Retention (ZDR) enterprise agreement; zero model training |

### C. Telephony, Email & Operational Sub-processors
| Sub-processor | Entity Jurisdiction | Processing Location | Service Provided | Data Transferred |
| :--- | :--- | :--- | :--- | :--- |
| **Telnyx LLC** | United States / EU | Frankfurt, Germany | VoIP audio streaming & telephony routing | Real-time audio stream during telephony calls |
| **Postmark / SendGrid** | United States / EU | EU Region | Transactional email notifications & meeting recaps | Recipient email address, summary text |
| **Auth0 / Okta** | United States / EU | EU Region | Enterprise identity authentication & SAML SSO | User email, name, role |

*Note for Enterprise Sovereign Environments: Customers requiring dedicated sovereign hosting can opt for the French Sovereign environment, which routes core inference through European GPU clusters on Scaleway and Bleu, subject to dedicated subprocessor schedules.*

---

## 3. Lawfulness of Recording & Workplace Consent

* **Legal Basis (GDPR Article 6)**: For commercial sales and external meetings, processing is typically grounded in **Legitimate Interest (Art. 6(1)(f))** paired with clear participant notice, or **Explicit Consent (Art. 6(1)(a))**.
* **Workplace & Internal Meetings**: In accordance with European Data Protection Board (EDPB) recommendations regarding employer-employee relationships, Noota provides:
  * **Automated Calendar Disclaimers**: Inserts clear recording notices into calendar invitations before meetings start.
  * **Host Controls**: Meeting hosts can pause, mute, or terminate recording at any point with a single click.
  * **Transcript-Only Mode**: Discards raw voice biometric audio instantly upon transcript generation.

---

## 4. Security Measures & Encryption Standards

* **Encryption at Rest**: AES-256 encryption applied across all databases, object stores, and archived backups with keys managed in Cloud KMS.
* **Encryption in Transit**: All data transmitted between client devices, native desktop applications, and server infrastructure is encrypted using **TLS 1.3** (minimum TLS 1.2).
* **Penetration Testing**: Annual third-party independent penetration tests conducted by accredited European cybersecurity firms.
* **ISO 27001**: Noota is **officially ISO 27001 certified** (certificate and statement of applicability available via the Trust Center).

---

## 5. Trust Center Access & Documentation Requests

To request formal compliance documentation, enterprise procurement and security teams can contact Noota directly:
* **Online Trust Center**: `https://www.noota.io/security`
* **Direct DPO Contact**: `dpo@noota.io`
* **General Security Requests**: `security@noota.io`
* **Available Documents**: Signed ISO 27001 Certificate, Executive Summary of Penetration Tests, Standard DPA Template, Sub-processor Notification Register, and EU AI Act Classification Whitepaper.

---
* Verification source: https://www.noota.io/security (Last verified: 2026-11-02)
