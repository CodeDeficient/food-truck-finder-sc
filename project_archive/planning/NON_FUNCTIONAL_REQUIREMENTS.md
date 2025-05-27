# SC Food Truck Finder - Non-Functional Requirements (NFRs)

This document outlines the Non-Functional Requirements (NFRs) for the SC Food Truck Finder application. These define the quality attributes and operational characteristics of the system. They are intended to be measurable and testable where possible. This document complements the functional requirements detailed in `prd.txt` and `tasks/development_wbs.md`.

## 1. Performance

*   **P1. Page Load Time (Web - MVP):**
    *   **Requirement:** Core pages (Main Finder, Truck Detail) should achieve a Largest Contentful Paint (LCP) of under 2.5 seconds for 75% of users on a standard broadband connection.
    *   **Measurement:** Google PageSpeed Insights, WebPageTest, or Lighthouse scores.
    *   **Note:** Initial focus on perceived performance; optimization will be iterative.
*   **P2. API Response Time (Backend - Phase 2 onwards):**
    *   **Requirement:** Key API endpoints (e.g., fetching truck lists, details, user favorites) should respond in under 500ms (p90) under typical load.
    *   **Measurement:** Firebase Functions logs, custom monitoring.
*   **P3. Map Interaction Smoothness (Web - MVP):**
    *   **Requirement:** Map panning, zooming, and marker interactions should feel fluid with no noticeable lag on target desktop and mobile browsers.
    *   **Measurement:** Qualitative user testing, browser performance profiling for frame rates (aim for >30fps during interactions).
*   **P4. Client-Side Filtering Speed (Web - MVP):**
    *   **Requirement:** Client-side filtering of truck lists (e.g., by cuisine) should update the visible list in under 300ms after filter selection.
    *   **Measurement:** Browser performance profiling.

## 2. Scalability

*   **S1. Concurrent Users (Web - Phase 2):**
    *   **Requirement:** The system (Firebase backend and Vercel frontend) should support at least 1,000 concurrent users browsing and interacting with core features without significant performance degradation (API p90 < 1s, LCP < 4s).
    *   **Measurement:** Stress testing (e.g., using k6, Artillery) against staging environment; monitoring production Firebase/Vercel limits and usage.
*   **S2. Data Volume (Firestore - Phase 2):**
    *   **Requirement:** Firestore should efficiently handle data for up to 5,000 food trucks and their associated schedules/details, with list queries completing within acceptable performance NFRs (P2).
    *   **Measurement:** Query performance monitoring in Firebase console, testing with scaled datasets in a staging environment.

## 3. Security

*   **SEC1. Authentication & Authorization (MVP & ongoing):**
    *   **Requirement:** Secure user login via Firebase Authentication. Role-Based Access Control (RBAC) for future Truck Owner Portal, ensuring owners can only manage their own data.
    *   **Measurement:** Security rule unit tests, penetration testing (future phase), manual verification of access controls. (WBS 4.2, 10.2, 16)
*   **SEC2. Data Protection (MVP & ongoing):**
    *   **Requirement:** Firestore security rules must enforce least privilege, default-deny, and protect all user PII and sensitive application data. All data in transit must use HTTPS.
    *   **Measurement:** Comprehensive security rule unit tests, regular review of rules, SSL Labs test for HTTPS configuration. (WBS 4.2, 10.2)
*   **SEC3. API Key Management (MVP & ongoing):**
    *   **Requirement:** All third-party API keys (LLMs, Google Places, etc.) must be stored securely as environment variables (e.g., Firebase Function config, GitHub secrets for CI) and never exposed client-side or committed to the repository.
    *   **Measurement:** Code reviews, static analysis tools (if available for secret detection). (WBS 4.1, 10.1, 12.2)
*   **SEC4. Input Validation (MVP & ongoing):**
    *   **Requirement:** All user-supplied input (forms, API parameters) and data from external sources (scraping, LLM output) must be rigorously validated on the backend (Firebase Functions, Firestore security rules) before processing or storage.
    *   **Measurement:** Code reviews, specific test cases for invalid inputs. (WBS 10.1, 10.2, 16)
*   **SEC5. Threat Modeling (Phase 2):**
    *   **Requirement:** Conduct a basic threat modeling exercise for key components (e.g., user authentication, data scraping pipeline, owner portal) to identify and mitigate potential vulnerabilities.
    *   **Measurement:** Documented threat model and mitigation plan.

## 4. Reliability & Availability

*   **R1. System Uptime (Production - Phase 2 onwards):**
    *   **Requirement:** Target 99.9% uptime for core user-facing services (web app, key API functions).
    *   **Measurement:** Vercel/Firebase uptime monitoring, external uptime monitoring service (e.g., UptimeRobot free tier).
*   **R2. Error Handling (MVP & ongoing):**
    *   **Requirement:** Graceful error handling for API calls, data scraping, and AI parsing. Automated retries for transient issues where appropriate. User-friendly error messages.
    *   **Measurement:** Code reviews, testing of error paths, review of logs for unhandled exceptions. (WBS 10.1, 12.2)
*   **R3. Data Backup & Recovery (Firestore - Implicit):**
    *   **Requirement:** Rely on Firestore's built-in point-in-time recovery (PITR) capabilities. For critical user data, consider scheduled exports if deemed necessary in later phases.
    *   **Measurement:** Confirmation of PITR enabled in Firebase console.

## 5. Usability & Accessibility

*   **U1. Intuitive Navigation (MVP):**
    *   **Requirement:** Users should be able to complete core tasks (find a truck, filter, view details) with minimal confusion. Navigation should be consistent.
    *   **Measurement:** Qualitative user testing (e.g., think-aloud protocol with 3-5 users), heuristic evaluation against usability principles.
*   **U2. Responsive Design (MVP):**
    *   **Requirement:** The application must be fully responsive and provide an optimal viewing experience across common device sizes (mobile, tablet, desktop).
    *   **Measurement:** Testing on various emulators and physical devices. (WBS 2.1)
*   **U3. Accessibility Standards (MVP & ongoing):**
    *   **Requirement:** Adhere to Web Content Accessibility Guidelines (WCAG) 2.1 Level AA for key user flows and components.
    *   **Measurement:** Automated accessibility checks (e.g., Axe, Lighthouse), manual testing with assistive technologies (e.g., screen reader for core flows), `jest-axe` in component tests. (WBS 6, 9.3)
*   **U4. Clarity of Information (MVP):**
    *   **Requirement:** Information presented (truck status, schedules, locations) must be clear, unambiguous, and easy to understand.
    *   **Measurement:** User feedback, content review.

## 6. Maintainability

*   **M1. Code Quality (MVP & ongoing):**
    *   **Requirement:** Codebase should be clean, well-commented, follow consistent coding standards (enforced by ESLint/Prettier), and organized into a modular architecture.
    *   **Measurement:** Code reviews, static analysis tool reports, cyclomatic complexity checks (future).
*   **M2. Documentation (MVP & ongoing):**
    *   **Requirement:** Key architectural decisions, complex logic, API contracts (for internal APIs/Functions), and setup procedures should be documented.
    *   **Measurement:** Review of project documentation (READMEs, WBS, planning docs, code comments).
*   **M3. Test Coverage (Phase 2 onwards):**
    *   **Requirement:** Aim for >80% unit test coverage for critical backend logic and utility functions. Meaningful integration test coverage for key user flows.
    *   **Measurement:** Code coverage reports from testing tools. (WBS 9.3)

## 7. Cost-Effectiveness (MVP & ongoing)

*   **C1. Service Usage:**
    *   **Requirement:** Prioritize free tiers of Firebase, Vercel, and other third-party services during MVP and early phases. Monitor usage closely to avoid unexpected costs.
    *   **Measurement:** Regular review of billing dashboards for all services.
*   **C2. API Call Optimization (Phase 2 onwards):**
    *   **Requirement:** Optimize LLM API calls and other paid API usage to minimize cost (e.g., caching responses, using smaller models where feasible, batching requests if appropriate).
    *   **Measurement:** Monitoring API call volume and associated costs. (WBS 10.1, 12.2)

## 8. Portability (Capacitor - Phase 2)

*   **POR1. Web Asset Compatibility:**
    *   **Requirement:** Web assets (HTML, CSS, JS) built for the Next.js application should function correctly within the Capacitor WebView on Android (and potentially iOS in future).
    *   **Measurement:** Testing on target mobile platforms/emulators. (WBS 15.1)

---
These NFRs will be reviewed and updated throughout the project lifecycle.
