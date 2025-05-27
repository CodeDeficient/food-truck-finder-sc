# Issue Management Plan: SC Food Truck Finder

## 1. Introduction

This document outlines the process for identifying, logging, tracking, prioritizing, and resolving issues (bugs, defects, enhancements, tasks) for the SC Food Truck Finder project. Effective issue management is crucial for maintaining software quality, addressing problems promptly, and ensuring smooth development.

## 2. Goals of Issue Management

*   Ensure all identified issues are captured and documented.
*   Prioritize issues based on severity, impact, and project goals.
*   Track the status of each issue from identification to resolution.
*   Facilitate communication about issues among stakeholders (initially the primary developer).
*   Provide a historical record of issues and their resolutions for learning and future reference.
*   Support the "Suggest a Truck / Report an Issue" feature outlined in PRD Section 4.9 by providing a backend process for handling user submissions.

## 3. Issue Sources

Issues can be identified from various sources:

*   **Testing:** Bugs found during unit, integration, E2E, usability, or other testing activities (see `TESTING_DOCUMENTATION.md`).
*   **Developer Identification:** Issues found by the developer during coding or refactoring.
*   **User Feedback:** Issues reported by users through the "Report an Issue" feature in the app.
*   **AI/LLM Failures:** Errors or inaccuracies in AI-parsed data or AI-generated code.
*   **Feature Requests/Enhancements:** New ideas or improvements suggested by users or identified by the developer.
*   **Technical Debt:** Areas of the codebase that need refactoring or improvement.

## 4. Issue Tracking System

*   **Initial Phase (Solo Developer):**
    *   **Markdown-based list:** A simple `ISSUES_LOG.md` file within the `planning` directory.
    *   **GitHub Issues:** Utilize the built-in issue tracker for the project's GitHub repository. This is recommended as it integrates well with version control and project boards.
*   **Future (If team expands or complexity increases):**
    *   Continue with GitHub Issues, leveraging more advanced features like labels, milestones, and project boards.
    *   Consider dedicated tools like Jira if the project scales significantly.

## 5. Issue Lifecycle & Statuses

An issue will typically go through the following statuses:

1.  **New/Open:** The issue has been reported and logged but not yet reviewed.
2.  **Acknowledged/Under Review:** The issue has been reviewed and its validity is being assessed.
3.  **To Do/Assigned:** The issue is confirmed, prioritized, and assigned for work (or placed in a backlog).
4.  **In Progress:** Work has started to address the issue.
5.  **Resolved/Fixed:** The necessary changes have been made, and the issue is believed to be resolved.
6.  **In Verification/Testing:** The fix is deployed to a test environment and is awaiting verification.
7.  **Closed:** The fix has been verified, and the issue is confirmed resolved.
8.  **Rejected/Won't Fix:** The issue is deemed invalid, out of scope, a duplicate, or will not be addressed for other reasons.
9.  **Deferred:** The issue is valid but will be addressed in a future release or phase.

## 6. Issue Attributes (Information to Log)

Each issue should be documented with the following information (as applicable):

*   **Issue ID:** Unique identifier (e.g., GitHub Issue #).
*   **Title:** A concise summary of the issue.
*   **Description:** Detailed explanation of the issue, including:
    *   Steps to reproduce (for bugs).
    *   Expected behavior.
    *   Actual behavior.
    *   Screenshots or error messages (if applicable).
*   **Source:** How the issue was identified (e.g., "Testing - E2E", "User Report").
*   **Reported By:** Who reported the issue.
*   **Date Reported:** When the issue was logged.
*   **Severity/Priority:** See Section 7.
*   **Status:** Current status in the lifecycle (see Section 5).
*   **Assignee:** Who is responsible for addressing the issue.
*   **Affected Version/Module:** Which part of the application is affected.
*   **Resolution:** Description of how the issue was resolved.
*   **Date Resolved:** When the fix was implemented.
*   **Linked Tasks/Commits:** References to related development tasks or code commits.
*   **Labels/Tags:** Keywords for categorization (e.g., "bug", "enhancement", "ui", "backend", "ai-parsing").

## 7. Prioritization Matrix

Issues will be prioritized based on a combination of Severity and Impact.

### 7.1. Severity

*   **Critical (S1):** System crash, data loss, major security vulnerability, or complete inability to use a core feature. No workaround.
*   **High (S2):** Major functionality impairment, significant user impact, or a difficult workaround exists.
*   **Medium (S3):** Minor functionality impairment, moderate user impact, or an easy workaround exists.
*   **Low (S4):** Cosmetic issue, minor UI defect, or low user impact.

### 7.2. Priority

*   **Urgent (P1):** Must be fixed immediately (typically S1 issues).
*   **High (P2):** Should be fixed in the current development cycle/sprint.
*   **Medium (P3):** Should be fixed in an upcoming release.
*   **Low (P4):** Can be fixed when time permits or deferred.

**General Guideline:**
*   S1 issues are usually P1.
*   S2 issues are usually P1 or P2.
*   S3 issues are usually P2 or P3.
*   S4 issues are usually P3 or P4.

## 8. Issue Resolution Workflow

1.  **Log Issue:** Create a new issue in the tracking system with all relevant details.
2.  **Review & Triage:** Assess the issue's validity, severity, and priority. Assign it to the appropriate backlog or developer.
3.  **Develop Fix:** Implement the necessary code changes or actions to address the issue.
4.  **Test Fix:** Unit test the changes. Deploy to a test environment for integration/E2E testing.
5.  **Verify Fix:** Confirm that the issue is resolved and no new issues (regressions) have been introduced.
6.  **Close Issue:** Update the issue status to "Closed" and document the resolution.
7.  **Communicate (if necessary):** Inform stakeholders or the original reporter about the resolution.

## 9. Handling User-Reported Issues

Issues submitted via the "Suggest a Truck / Report an Issue" feature (PRD 4.9) will be:

1.  Automatically (or manually initially) logged into the issue tracking system.
2.  Reviewed and triaged like any other issue.
3.  If valid, prioritized for correction or investigation.
4.  Consider providing feedback to the user if they provided contact information (future enhancement).

## 10. Tools

*   **Primary:** GitHub Issues for the project repository.
*   **Supporting:** Screenshots, logs, and links to relevant PRD sections or code.

## 11. Revision History

*   YYYY-MM-DD: Initial draft.
