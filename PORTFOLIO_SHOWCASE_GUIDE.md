# Portfolio Showcase Guide: SC Food Truck Finder

This document serves as a developer's index to highlight key skills, features, and planning details within the SC Food Truck Finder project. It maps significant project aspects to their respective locations in the planning documentation, making it easier to showcase capabilities to potential clients or employers.

**Core Planning Documents Referenced:**
*   `prd.txt` (Product Requirements Document)
*   `tasks/development_wbs.md` (Work Breakdown Structure)
*   `planning/epics_and_user_stories.md` (Epics & User Stories)
*   `planning/DEFINITION_OF_DONE.md` (Definition of Done)
*   `planning/NON_FUNCTIONAL_REQUIREMENTS.md` (Non-Functional Requirements)
*   `planning/DATA_MODEL.md` (Conceptual Data Model)
*   `index.html` (UI Concept Mockup)

---

## 1. Full-Stack Development Capabilities

*   **End-to-End Project Lifecycle Planning:** Demonstrated by the comprehensive suite of planning documents.
    *   **Overall Vision & Phasing:** `prd.txt` (Sections 1, 2)
    *   **Detailed Task Breakdown:** `tasks/development_wbs.md` (Entire document)
    *   **User-Centric Feature Definition:** `planning/epics_and_user_stories.md`
*   **Frontend Development (Next.js & React):**
    *   **Component-Based Architecture:** `tasks/development_wbs.md` (Section 1.2: Core UI Component Development)
    *   **UI Migration (HTML to Next.js):** `tasks/development_wbs.md` (Section 1.1, 1.2)
    *   **State Management (Zustand):** `tasks/development_wbs.md` (Section 3.2, 3.3)
    *   **SSR/SSG Implementation:** `tasks/development_wbs.md` (Section 14.1), `planning/NON_FUNCTIONAL_REQUIREMENTS.md` (P1)
*   **Backend Development (Firebase & Node.js):**
    *   **Serverless Functions (Firebase Functions):** `prd.txt` (Section 6), `tasks/development_wbs.md` (Sections 10.1, 11.2, 12.2)
    *   **Database Design (Firestore NoSQL):** `planning/DATA_MODEL.md`, `tasks/development_wbs.md` (Sections 4.2, 10.2)
    *   **User Authentication (Firebase Auth):** `tasks/development_wbs.md` (Section 11.1)

## 2. Specific Technology Expertise

*   **Next.js & React:**
    *   **App Router Usage:** `tasks/development_wbs.md` (Section 1.1, 3.1, 14.1)
    *   **Static Export for Capacitor:** `tasks/development_wbs.md` (Section 15.1)
    *   **`next/image`, `next/font`, `next/dynamic`:** `tasks/development_wbs.md` (Sections 1.1, 3.1, 5.2, 15.1)
*   **Firebase Suite:**
    *   **Firestore:** `planning/DATA_MODEL.md`, `tasks/development_wbs.md` (Sections 4.2, 10.2, 11.2)
    *   **Firebase Authentication:** `tasks/development_wbs.md` (Section 11.1)
    *   **Firebase Functions:** `tasks/development_wbs.md` (Sections 10.1, 11.2, 12.2)
    *   **Firebase Scheduled Functions:** `tasks/development_wbs.md` (Section 10.1)
    *   **Firebase Security Rules:** `tasks/development_wbs.md` (Sections 4.2, 10.2)
    *   **Firebase Emulator Suite:** `tasks/development_wbs.md` (Section 4.2, 9.3)
    *   **Firebase Cloud Messaging (FCM):** `tasks/development_wbs.md` (Section 11.2)
*   **Tailwind CSS:**
    *   **Integration & Configuration:** `tasks/development_wbs.md` (Section 1.1)
    *   **Customization & Theming:** `tasks/development_wbs.md` (Section 1.1)
*   **Mapping (Leaflet.js):**
    *   **Integration with React-Leaflet:** `tasks/development_wbs.md` (Section 3.1)
    *   **Custom Markers & Popups:** `tasks/development_wbs.md` (Section 3.1)
*   **AI / LLM Integration (Google Gemini - Primary, OpenAI - Fallback, etc.):**
    *   **Data Parsing Strategy:** `prd.txt` (Section 6, 7), `tasks/development_wbs.md` (Section 10.1)
    *   **Prompt Engineering & Structured Output:** `tasks/development_wbs.md` (Section 10.1.2.3)
    *   **Linter Feedback Loop for AI Output:** `tasks/development_wbs.md` (Section 10.1.3)
*   **Capacitor (for Mobile App Deployment):**
    *   **Integration with Next.js Static Export:** `tasks/development_wbs.md` (Section 15.1.1)
    *   **Android Build & Customization:** `tasks/development_wbs.md` (Section 15.2.1)
    *   **OTA Updates (Capgo):** `tasks/development_wbs.md` (Section 15.3.1, 15.3.2, 15.3.3)
*   **Payment Integration (Polar.sh, Stripe):**
    *   **Checkout & Webhook Handling:** `tasks/development_wbs.md` (Section 18.1.3)

## 3. UI/UX Design and Implementation

*   **UI Concept Mockup:** `index.html`
*   **Design Principles (Retro-Modern Fusion):** `prd.txt` (Section 8)
*   **Component-Based UI Development:** `tasks/development_wbs.md` (Section 1.2)
*   **Responsive Design (Mobile-First):** `prd.txt` (Section 5: Usability), `tasks/development_wbs.md` (Section 2.1), `planning/NON_FUNCTIONAL_REQUIREMENTS.md` (U2)
*   **CSS Migration & Tailwind Integration:** `tasks/development_wbs.md` (Section 1.1)
*   **Accessibility (WCAG 2.1 AA):** `prd.txt` (Section 5: Usability), `tasks/development_wbs.md` (Section 6, 9.3), `planning/NON_FUNCTIONAL_REQUIREMENTS.md` (U3)

## 4. Backend Architecture and Development

*   **Serverless Architecture (Firebase Functions):** `prd.txt` (Section 6), `tasks/development_wbs.md` (Sections 10.1, 11.2, 12.2)
*   **NoSQL Database Design (Firestore):** `planning/DATA_MODEL.md`, `tasks/development_wbs.md` (Sections 4.2, 10.2)
*   **API Design (Implicit via Callable Functions & Triggers):** `tasks/development_wbs.md` (Sections 10.1, 11.2, 12.2)
*   **User Authentication & Authorization:** `tasks/development_wbs.md` (Section 11.1, 16 - RBAC)
*   **Scheduled Tasks / Cron Jobs:** `tasks/development_wbs.md` (Section 10.1 - Firebase Scheduled Functions)

## 5. Data Engineering and Management

*   **Data Modeling (NoSQL - Firestore):** `planning/DATA_MODEL.md`, `tasks/development_wbs.md` (Sections 4.2, 10.2)
*   **Data Scraping (Ethical Practices):** `prd.txt` (Section 7), `tasks/development_wbs.md` (Section 10.1)
*   **Data Parsing (LLM-based):** `prd.txt` (Section 7), `tasks/development_wbs.md` (Section 10.1)
*   **Data Validation (Client, Server, DB Rules):** `planning/DATA_MODEL.md` (Section: Data Validation), `tasks/development_wbs.md` (Sections 10.1.2.5, 10.1.3, 10.2.2, 16.2)
*   **Data Caching Strategies (External APIs):** `tasks/development_wbs.md` (Section 12.2.1.4)
*   **Data Anonymization & Aggregation (for Insights):** `tasks/development_wbs.md` (Section 18.3.2)

## 6. AI / Machine Learning Integration

*   **LLM for Unstructured Data Parsing:**
    *   **Concept & Strategy:** `prd.txt` (Section 6: AI/LLM Integration, Section 7: AI Parsing), `planning/epics_and_user_stories.md` (Epic 2)
    *   **Detailed Implementation Plan:** `tasks/development_wbs.md` (Section 10.1.2)
    *   **Output Validation & Linter Feedback Loop:** `tasks/development_wbs.md` (Section 10.1.3)
*   **Risk Mitigation for AI:** `prd.txt` (Section 11: Risks & Mitigations - AI Parsing Accuracy)
*   **Cost Optimization for LLM Usage:** `tasks/development_wbs.md` (Section 10.1.2.7)

## 7. Security Best Practices

*   **Comprehensive Security Planning:** `prd.txt` (Section 5: Security), `planning/NON_FUNCTIONAL_REQUIREMENTS.md` (Section 3: Security)
*   **Secure Authentication & Authorization (Firebase Auth, RBAC):** `tasks/development_wbs.md` (Sections 11.1, 16)
*   **Firestore Security Rules (Default Deny, Least Privilege, Validation):** `tasks/development_wbs.md` (Sections 4.2, 10.2)
*   **Secure API Key Management:** `planning/NON_FUNCTIONAL_REQUIREMENTS.md` (SEC3)
*   **Input Validation (Multi-Layered):** `planning/NON_FUNCTIONAL_REQUIREMENTS.md` (SEC4)
*   **HTTPS Enforcement:** `prd.txt` (Section 5: Security)
*   **Threat Modeling (Planned):** `planning/NON_FUNCTIONAL_REQUIREMENTS.md` (SEC5)
*   **Payment Integration Security (PCI Compliance via 3rd parties):** `tasks/development_wbs.md` (Section 18)

## 8. Testing and Quality Assurance

*   **Overall Testing Strategy:** `tasks/development_wbs.md` (Section 9.3)
*   **Definition of Done (DoD):** `planning/DEFINITION_OF_DONE.md` (Sections I, II, III, IV)
*   **Unit Testing (Jest, React Testing Library):** `tasks/development_wbs.md` (Section 9.3.2)
*   **Integration Testing:** `tasks/development_wbs.md` (Section 9.3.3)
*   **Security Rule Testing (Firebase Emulator):** `tasks/development_wbs.md` (Section 4.2.2.5)
*   **Accessibility Testing (`jest-axe`):** `tasks/development_wbs.md` (Section 9.3.4)
*   **End-to-End Testing (Manual/Future Automated):** Implied by DoD for features/phases.

## 9. DevOps and CI/CD

*   **CI/CD Pipeline Setup (GitHub Actions):** `tasks/development_wbs.md` (Section 9.2)
    *   **Automated Builds, Linting, Testing:** `tasks/development_wbs.md` (Section 9.2)
    *   **Dependency Caching (Bun & Next.js):** `tasks/development_wbs.md` (Section 9.2)
*   **Deployment (Vercel):** `prd.txt` (Section 6: Frontend Deployment)
*   **Infrastructure as Code (IaC - Basic via Firebase/Vercel config):** Implicit in Firebase/Vercel setup.
*   **Over-the-Air (OTA) Updates for Mobile (Capgo):** `tasks/development_wbs.md` (Section 15.3)

## 10. Mobile App Development (Capacitor)

*   **Cross-Platform Strategy (Web to Mobile):** `tasks/development_wbs.md` (Section 15)
*   **Capacitor Integration with Next.js:** `tasks/development_wbs.md` (Section 15.1)
*   **Native Android Build & Customization (Android Studio, Gradle):** `tasks/development_wbs.md` (Section 15.2)
*   **App Store Preparation (AAB, Signing):** `tasks/development_wbs.md` (Section 15.2)
*   **Live Updates (OTA with Capgo):** `tasks/development_wbs.md` (Section 15.3)

## 11. Project Planning and Management

*   **Phased Development Approach:** `prd.txt` (Section 2)
*   **Detailed Work Breakdown Structure (WBS):** `tasks/development_wbs.md`
*   **User Story & Epic Mapping:** `planning/epics_and_user_stories.md`
*   **Risk Identification & Mitigation:** `prd.txt` (Section 11), embedded throughout `tasks/development_wbs.md` risk ratings and detailed sub-tasks.
*   **Non-Functional Requirements Definition:** `planning/NON_FUNCTIONAL_REQUIREMENTS.md`
*   **Definition of Done for Quality Control:** `planning/DEFINITION_OF_DONE.md`
*   **Iterative Refinement of Plans:** Demonstrated by the process of creating these documents.

## 12. Monetization Strategies

*   **Planning for Multiple Revenue Streams:** `prd.txt` (Section 10), `tasks/development_wbs.md` (Section 18)
    *   **Premium Listings (Subscription/One-Time):** `tasks/development_wbs.md` (Section 18.1)
    *   **In-App Advertising (Ethical Considerations):** `tasks/development_wbs.md` (Section 18.2)
    *   **Data Insights (Anonymized & Aggregated):** `tasks/development_wbs.md` (Section 18.3)
*   **Payment Gateway Integration (Polar.sh, Stripe):** `tasks/development_wbs.md` (Section 18.1.3)

---
This guide should help navigate the project's planning artifacts to highlight specific skills and comprehensive planning efforts.
