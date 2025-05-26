# SC Food Truck Finder - Definition of Done (DoD)

This document outlines the criteria that must be met for various work items to be considered "Done." This DoD is a living document and may be updated as the project progresses.

## I. DoD for Individual WBS Tasks (Technical Tasks)

A WBS task (typically a sub-task or sub-sub-task in `tasks/development_wbs.md`) is considered "Done" when:
1.  **Code Complete:** All planned coding for the task is finished.
2.  **Functionality Verified:** The implemented functionality works as described in the task.
3.  **Self-Tested:** The developer has performed basic testing of their changes.
4.  **Code Clean & Commented:** Code adheres to project styling guidelines (to be defined, e.g., ESLint/Prettier rules) and includes necessary comments for clarity.
5.  **Unit Tests Written & Passing (if applicable):** For tasks involving testable logic (utility functions, complex component logic), relevant unit tests are written and pass with sufficient coverage (target >80%). (Relates to WBS 9.3)
6.  **Integration Tests Updated & Passing (if applicable):** If the task impacts an existing integration test, that test is updated and passes. New integration tests are created if the task completes a significant interaction point. (Relates to WBS 9.3)
7.  **No New Linter/Build Errors:** The changes do not introduce new linting errors or break the project build.
8.  **Relevant WBS Item Checked:** The corresponding checklist item in `tasks/development_wbs.md` is marked as complete.
9.  **Documentation Updated (if applicable):** Any relevant technical documentation (e.g., code comments, README sections, architectural notes related to the task) is updated.
10. **Secrets Handled Securely:** No secrets (API keys, passwords) are hardcoded; they are managed via environment variables or a secure secrets management system as per project standards. (Relates to WBS 4.1, 10.1, 12.2, etc.)

## II. DoD for User Stories / Features

A User Story (from `planning/epics_and_user_stories.md`) or a distinct feature (often an "Action" level item in the WBS) is considered "Done" when:
1.  **All Associated WBS Tasks Done:** All individual technical tasks contributing to the user story/feature meet their DoD (see Section I).
2.  **Acceptance Criteria Met:** All specific acceptance criteria defined for that user story are satisfied. (Acceptance Criteria to be defined per story as development progresses).
3.  **Functionality Works End-to-End:** The feature works as expected from a user's perspective in a development or staging environment.
4.  **Code Reviewed & Approved:** Code changes for the feature have been reviewed by at least one other developer (or by AI code review tools if a solo project, with careful consideration) and any critical feedback has been addressed.
5.  **Accessibility Checks Passed (if UI feature):** Basic accessibility checks (e.g., using `jest-axe` for components, manual checks for WCAG AA guidelines) have been performed and issues addressed. (Relates to WBS 6, 9.3)
6.  **Performance Considerations Met (if applicable):** The feature does not negatively impact key performance metrics (e.g., page load, API response times) beyond acceptable thresholds (to be defined in NFRs).
7.  **Security Considerations Met (if applicable):** The feature adheres to security best practices; any new data or endpoints are covered by appropriate security rules/checks. (Relates to WBS 4, 10.2)
8.  **User-Facing Documentation/Guides Updated (if applicable):** If the feature introduces new user interactions or requires explanation, relevant user guides or FAQs are updated.
9.  **Plausible Analytics Tracking Implemented (if applicable):** Relevant custom events for tracking user interaction with the feature are implemented and tested. (Relates to WBS 17)
10. **Deployed to Staging/Preview Environment:** The feature is deployed and testable in a pre-production environment.
11. **(Future - Team Context) Product Owner Acceptance:** The Product Owner (or primary stakeholder) has reviewed and accepted the feature.

## III. DoD for a Sprint / Iteration (Future - if adopting formal sprints)

A Sprint or development iteration is considered "Done" when:
1.  All User Stories/Features committed to the sprint meet their DoD (see Section II).
2.  Sprint Goal achieved.
3.  Sprint Review meeting conducted (demo of completed work).
4.  Sprint Retrospective meeting conducted (team reflects on process and identifies improvements).
5.  Build is stable and potentially shippable/releasable.

## IV. DoD for a Project Phase / Major Release (e.g., MVP, Phase 2)

A Project Phase or Major Release is considered "Done" when:
1.  All Epics and User Stories/Features planned for that phase/release meet their DoD (see Section II).
2.  All planned Non-Functional Requirements (NFRs) for that phase are met (see `planning/NON_FUNCTIONAL_REQUIREMENTS.md`).
3.  Thorough end-to-end testing, regression testing, and User Acceptance Testing (UAT) completed and passed.
4.  All critical and high-priority bugs fixed.
5.  Final security review and vulnerability scans completed and issues addressed.
6.  Performance and load testing completed against NFR targets.
7.  All necessary documentation (technical, user, operational) is complete and up-to-date.
8.  Deployment plan executed successfully to the production environment.
9.  Post-deployment monitoring plan is active.
10. Stakeholder sign-off obtained.

---
This DoD will serve as a quality checklist throughout the development lifecycle.
