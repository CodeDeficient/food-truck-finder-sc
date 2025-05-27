# SC Food Truck Finder - Planning Phase Plan

This document outlines the detailed plan for the planning phase of the SC Food Truck Finder web application, focusing on UI/UX design, non-functional requirements, technical architecture, and data strategy, based on the provided Product Requirements Document (PRD) and subsequent research.

## 0. Guiding Principles & Senior SWE Best Practices

*   **Iterative Development:** The project will follow a phased approach (MVP, Post-Launch Enhancements, Advanced Features) allowing for iterative planning, development, and feedback incorporation.
*   **Thorough Documentation:** All significant technical decisions, architectural choices, and their rationale will be documented. This includes maintaining this planning document, the WBS, and potentially creating Architecture Decision Records (ADRs) for key choices.
*   **Clear Communication:** Regular updates and clear communication will be maintained regarding progress, challenges, and decisions.
*   **Risk Management:** Potential risks will be identified, and mitigation strategies planned. (A more formal risk register can be developed if needed).
*   **Quality Assurance:** A focus on quality will be maintained through planned testing (unit, integration, E2E, accessibility, performance). (A detailed QA plan can be developed).
*   **Scope Management:** Adherence to the defined scope for each phase, particularly the MVP, to avoid scope creep. Changes will be managed through a defined process.
*   **User-Centricity:** User feedback mechanisms (e.g., "Suggest/Report" feature) will be implemented, and user needs will guide development priorities.
*   **Automation:** Leverage automation where possible (CI/CD, testing, scheduled tasks) to improve efficiency and reliability.

## 1. Establish Tailwind CSS Configuration for Black Metallic Glassmorphism Theme

*   **Action:** [ ] Create or update `tailwind.config.js` to extend the default theme with the custom color palette based on `index.html`. This will involve adding a `theme.extend.colors` object.
    *   Define `colors` with semantic names like `primary-bg` (`#000000` or near black), `secondary-bg` (`#1a1a1a` or near black), `primary-text` (`#f9fafb` - gray-50), `accent-red` (`#b91c1c` - red-700), `accent-neon` (`#38b2ac` - cyan-400).
    *   Map these names to the specific hex codes or Tailwind shades used in `index.html` to ensure consistency.
*   **Action:** [ ] Plan the application of Tailwind utility classes and custom CSS for core styling, aligning with the black metallic glassmorphism effect. This includes:
    *   Using Tailwind's `rounded-xl` and `rounded-2xl` classes for generous rounded corners on elements like panels and cards, as observed in `index.html`.
    *   Planning for the implementation of the radial gradient background (`background: radial-gradient(circle at top left, #1a1a1a 0%, #000000 70%);`) for the `body`. This might require a custom CSS entry or a Tailwind plugin if direct utility classes are insufficient.
    *   Planning for the glassmorphism effect (`backdrop-filter`, `background-color` with alpha, `border`, `box-shadow`) by defining a reusable custom CSS class (e.g., `.glass-panel`) and applying it with Tailwind's `@apply` directive or directly in components.
    *   Configuring the 'Inter' font family in `tailwind.config.js` under `theme.extend.fontFamily` and planning its application using `font-sans` or a custom font utility class.
    *   Planning the use of specific Tailwind shadow utilities (`shadow-md`, `shadow-xl`) and custom inset shadows to replicate the "backlit" and depth effects from `index.html`.
    *   Investigating methods for implementing the subtle light streak pseudo-element effect (`.glass-panel::before`) for panels, potentially using Tailwind's `before:` pseudo-class or custom CSS.
*   **Action:** [ ] Identify recurring UI patterns (e.g., buttons, input fields, cards, navigation items) and plan to create reusable React components. These components will be styled using a combination of Tailwind utility classes and the custom glassmorphism CSS to ensure consistency and maintainability across the application, directly reflecting the styles established in `index.html`.
*   **Action:** [ ] Document the chosen color names, specific utility class conventions for the theme, the structure and usage of custom CSS classes (like `.glass-panel`), and the overall structure for reusable components in this planning document. This documentation will serve as a style guide for future development, ensuring strict alignment with `index.html`.

## 2. Plan Mobile-First and Responsive Layouts

*   **Action:** [ ] Implement a mobile-first approach by default, applying styles without prefixes first (for mobile) and then using responsive prefixes (`sm:`, `md:`, `lg:`) to override styles for larger breakpoints.
*   **Action:** [ ] Design core layouts (e.g., the main finder screen with map and list view) using Tailwind's flexbox and grid utilities, ensuring they reflow and adapt gracefully across different screen sizes.
*   **Action:** [ ] Evaluate specific components (e.g., complex cards, filter modals) to determine if container queries would provide better encapsulation and responsiveness compared to viewport-based media queries. Plan implementation if necessary.
*   **Action:** [ ] Ensure interactive elements like buttons and links have sufficient size and spacing for easy touch interaction on mobile devices, adhering to recommended touch target sizes (e.g., 44x44 pixels).
*   **Action:** [ ] Document the responsive design strategy, including breakpoint usage and common responsive patterns, in this planning document.

## 3. Integrate Security Best Practices

*   **Action:** [ ] Plan the setup and integration of Firebase Authentication in the React application for handling user registration, login, and session management.
*   **Action:** [ ] Design and write comprehensive Firebase Security Rules for Firestore and Cloud Storage. Start with rules that deny all read/write access by default and progressively add rules to grant access based on authentication status and user roles (for future features).
*   **Action:** [ ] Plan the strategy for securely storing and accessing sensitive API keys (e.g., for LLMs, external services) using environment variables, ensuring they are not committed to version control and are accessed only on the backend (Firebase Functions).
*   **Action:** [ ] Plan for implementing robust input validation on all forms and data inputs on the frontend.
*   **Action:** [ ] Plan for implementing server-side input validation within Firebase Functions to ensure data integrity and security, even if frontend validation is bypassed.
*   **Action:** [ ] Document the security plan, including authentication flows, security rule structure, and API key management strategy, in this planning document.

## 4. Incorporate Accessibility Best Practices

*   **Action:** [ ] Verify that the chosen color palette combinations (text on background, interactive elements) meet WCAG color contrast standards, adjusting Tailwind color shades in `tailwind.config.js` if necessary.
*   **Action:** [ ] Plan to use semantic HTML5 elements (`<nav>`, `<main>`, `<aside>`, `<article>`, `<section>`, `<header>`, `<footer>`) to structure content and improve navigation for assistive technologies.
*   **Action:** [ ] Plan for adding appropriate ARIA attributes (e.g., `aria-label`, `aria-hidden`, `aria-expanded`) to custom interactive components to convey their purpose and state to screen readers.
*   **Action:** [ ] Ensure all interactive elements are keyboard-focusable and that the tab order is logical. Plan for implementing skip links for main navigation.
*   **Action:** [ ] Plan for conducting accessibility testing using automated tools (e.g., Lighthouse, axe-core) and manual testing with screen readers to identify and fix accessibility issues.
*   **Action:** [ ] Document accessibility considerations and implementation details in this planning document.

## 5. Strategize for Performance Optimization

*   **Action:** [ ] Configure Tailwind CSS build process to effectively use PurgeCSS (or the JIT compiler) to eliminate unused styles and produce the smallest possible CSS bundle.
*   **Action:** [ ] Plan for optimizing all images (compression, appropriate formats like WebP) and other assets to reduce file sizes and improve loading times.
*   **Action:** [ ] Implement code splitting at the route level and consider lazy loading for components that are not immediately needed on page load to reduce the initial JavaScript bundle size.
*   **Action:** [ ] If using Next.js, plan to utilize SSR for initial page loads where dynamic data is required and SSG for static content to improve perceived performance and SEO. If using Vite, explore alternative strategies for pre-rendering or server-side rendering if necessary.
*   **Action:** [ ] Design data fetching strategies from Firestore to be efficient, using queries with limits, pagination, and real-time listeners judiciously to minimize the amount of data transferred and processed on the client.
*   **Action:** [ ] Plan for implementing caching strategies where appropriate to reduce redundant data fetches.
*   **Action:** [ ] Document the performance optimization plan, including build process configurations, asset optimization strategies, and data fetching patterns, in this planning document.

## 6. Refine Technical Architecture and Data Strategy

*   **Action:** [ ] Finalize the frontend framework choice between Next.js and Vite.
    *   **Rationale for Next.js:** Strong support for SSR/SSG (crucial for SEO and performance), mature ecosystem, Vercel optimization, file-system routing, API routes for potential backend-for-frontend (BFF) patterns.
    *   **Rationale for Vite + React:** Simpler setup for SPAs, faster development server, flexible.
    *   **Decision Point:** Given the emphasis on SEO, performance, and potential for future complexity, **Next.js is the recommended choice**. This will be documented with a more formal ADR if required.
*   **Action:** [ ] Document the rationale for the chosen framework.
*   **Action:** [ ] Detail the structure of the Firestore database. Define collections (e.g., `trucks`, `users`, `schedules`, `favorites`, `reports`) and the fields within each document based on the functional requirements outlined in the PRD.
*   **Action:** [ ] Write the initial set of Firebase Security Rules for the defined Firestore structure, ensuring basic read/write permissions are set according to the planned security practices.
*   **Action:** [ ] Further detail the AI/LLM integration plan.
    *   **LLM Provider Selection:** Initially focus on one primary provider (e.g., OpenAI due to extensive documentation and community support, or Google Gemini for potential Firebase integration benefits). Plan to allow for flexibility to switch or use multiple providers later. Document the rationale for the initial choice.
    *   **Prompt Engineering Strategy:** Develop a library of version-controlled prompts for different data extraction tasks. Plan for iterative refinement of prompts based on parsing accuracy.
    *   **Output Format:** Prioritize JSON for LLM output due to its widespread support and ease of parsing in JavaScript/Node.js environments, but keep YAML as a fallback if JSON proves unreliable for specific LLM outputs.
*   **Action:** [ ] Specify the chosen LLM providers (OpenAI, Google Gemini, Anthropic) and outline the prompt engineering strategy for extracting structured data from unstructured text.
*   **Action:** [ ] Plan the implementation of the linter feedback loop mechanism for AI-parsed data, including the specific validation steps and how errors will be fed back to the LLM for regeneration attempts.
*   **Action:** [ ] Detail the data collection strategy:
    *   **Data Sources:** Public social media (Facebook, Instagram, Twitter posts/events), local event calendars, food truck association websites, individual truck websites/blogs.
    *   **Scraping:** Use Firebase Scheduled Functions to trigger scraping scripts (e.g., Node.js with Puppeteer or Cheerio) daily or more frequently.
    *   **Ethical Practices:** Adhere to robots.txt, implement strict rate limiting with delays, use descriptive User-Agent strings, handle errors with exponential backoff, focus on publicly accessible data, and promote original sources.
    *   **AI Parsing:** Utilize LLMs (OpenAI, Google Gemini, Anthropic - to be selected) via Firebase Functions to parse unstructured text into structured data (truck name, cuisine, location, date, time, event name).
        *   Develop robust prompt engineering strategies.
        *   Test LLM output in JSON and YAML for reliability.
    *   **Linter Feedback Loop:** Implement a system where generated LLM output is immediately validated by a linter (e.g., JSON.parse() with schema validation, js-yaml parser). If validation fails, error details are fed back to the LLM for a regeneration attempt.
    *   **Data Verification:** Initial manual verification. Post-launch, use user submissions ("Suggest a Truck," "Report an Issue") and potentially AI-driven anomaly detection for scraped data.
*   **Action:** [ ] Detail the Firestore Database Plan:
    *   **Collections & Schema:**
        *   `trucks`: (truckId, name, cuisineTags: array, description, heroImageUrl, socialMediaLinks: object, currentStatus: object {isOpen, locationString, latitude, longitude, openUntil}, etc.)
        *   `schedules`: (scheduleId, truckId, startTime, endTime, locationString, latitude, longitude, eventName) - Consider subcollection under `trucks`.
        *   `users`: (userId, email, displayName, photoURL, favoriteTruckIds: array, notificationPreferences: object)
        *   `reports`: (reportId, truckId, issueType, description, reportedByUserId, timestamp)
        *   `suggestions`: (suggestionId, truckName, cuisine, website, notes, submittedByUserId, timestamp)
    *   **Data Relationships:** Define how collections relate (e.g., `favoriteTruckIds` in `users` refers to `truckId` in `trucks`).
    *   **Indexing:** Plan necessary Firestore indexes for common queries (e.g., filtering trucks by cuisine, finding schedules by date).
*   **Action:** [ ] Detail Firebase Security Rules:
    *   Default deny all.
    *   `trucks`: Allow public read. Admin/specific roles write.
    *   `schedules`: Allow public read. Admin/specific roles write.
    *   `users`: Authenticated users can read/write their own data. Admin read.
    *   `favorites`: Authenticated users can read/write their own favorites.
    *   `reports`/`suggestions`: Authenticated users can create. Admin read/write.
    *   Implement input validation within security rules where possible.
*   **Action:** [ ] Plan for integrating **Plausible Analytics** as the open-source, lightweight web analytics tool.
    *   **Rationale:** Meets the requirement for an open-source, easier alternative to Google Analytics/Firebase Analytics, privacy-focused, and offers self-hosting or cloud options.
    *   This will involve setting up a self-hosted instance (if preferred for data control and cost) or using their cloud service, and integrating its tracking script into the React application.
*   **Action:** [ ] Document the refined technical architecture, detailed data strategy (scraping, parsing, verification), comprehensive database plan (schema, relationships, indexing), security rules logic, and the chosen analytics solution in this planning document.

## 7. Detailed Task Breakdown

*   **Action:** [ ] Review the refined planning phase plan (Sections 1-6) and break down each action item into smaller, actionable tasks and subtasks required for implementation.
*   **Action:** [ ] Organize the tasks logically, grouping related items (e.g., all tasks related to setting up Tailwind CSS, all tasks related to Firebase Authentication).
*   **Action:** [ ] Define dependencies between tasks where necessary (e.g., setting up Firebase Authentication must be completed before implementing login/signup UI).
*   **Action:** [ ] Prioritize tasks based on the MVP requirements outlined in the PRD (Section 2.1).
*   **Action:** [ ] Document the detailed task breakdown, including task descriptions, dependencies, and initial prioritization, in this planning document or a separate task management file (e.g., `tasks/tasks.json` if using Task Master).

## 8. Deployment Plan (Vercel)

*   **Action:** [ ] Create a new project on Vercel and connect it to the GitHub repository (`https://github.com/CodeDeficient/food-truck-finder-sc`).
*   **Action:** [ ] Configure the Vercel project settings, ensuring the correct framework preset (React, Next.js, or Vite) is detected or manually selected.
*   **Action:** [ ] Plan for securely adding environment variables in Vercel for sensitive Firebase configuration and API keys, ensuring they are available during the build and runtime phases.
*   **Action:** [ ] If using Firebase Functions for the backend, plan for deploying these functions and ensuring they are accessible from the Vercel frontend. This may involve configuring API routes or serverless functions within the Vercel project if not using a Next.js API route approach.
*   **Action:** [ ] Plan for configuring custom domains on Vercel if necessary.
*   **Action:** [ ] Document the deployment process on Vercel, including environment variable configuration and backend integration steps, in this planning document.

## 9. Secrets Management (GitHub Secrets)

*   **Action:** [ ] Identify all sensitive information (e.g., Firebase configuration keys, API keys for LLMs or external services) that should not be stored directly in the codebase.
*   **Action:** [ ] Plan to store these sensitive details securely as GitHub Secrets within the project repository settings.
*   **Action:** [ ] Plan how these GitHub Secrets will be accessed and utilized during the Vercel deployment process. This typically involves configuring Vercel to read environment variables that are populated from GitHub Secrets via a CI/CD workflow (e.g., GitHub Actions).
*   **Action:** [ ] Document the process for adding, updating, and managing GitHub Secrets, as well as how they are linked to Vercel environment variables, in this planning document.
*   **Action:** [ ] Consider implementing best practices for GitHub Secrets, such as using Role-Based Access Control (RBAC) if applicable and limiting the scope of secrets.

## 10. SEO and AI Search Optimization

*   **Action:** [ ] Plan for implementing Server-Side Rendering (SSR) or Static Site Generation (SSG) using the chosen React framework (Next.js or Vite with a plugin) to ensure content is crawlable by search engines and AI bots.
*   **Action:** [ ] Plan to use semantic HTML5 elements extensively to provide clear structure and meaning to the content for improved understanding by search algorithms and AI.
*   **Action:** [ ] Plan for dynamic management of page titles, meta descriptions, and Open Graph (OG) tags based on the content of each page or route.
*   **Action:** [ ] Plan to structure content within pages to be clear, well-organized (using headers, lists, etc.), and directly answer potential user questions to facilitate parsing by AI search bots.
*   **Action:** [ ] Plan for implementing structured data (Schema Markup), such as for businesses, locations, or events, to provide explicit information about the content to search engines and AI.
*   **Action:** [ ] Plan for creating a clean and descriptive URL structure for all routes.
*   **Action:** [ ] Consider strategies for building internal links to create a well-connected content structure.
*   **Action:** [ ] Plan for optimizing content with relevant keywords, using conversational language where appropriate.
*   **Action:** [ ] Plan for monitoring the application's visibility and representation in both traditional search results and AI search tools.
*   **Action:** [ ] Document the SEO and AI search optimization strategy and implementation details in this planning document.

## 11. Mobile App Store Deployment (Android)

*   **Action:** [ ] Plan for integrating a web-to-native wrapping tool, such as Ionic Capacitor, into the project to create a native Android container for the web application.
*   **Action:** [ ] Outline the steps for initializing Capacitor in the project and configuring it for the Android platform.
*   **Action:** [ ] Plan for using Android Studio to build, customize (e.g., app icon, splash screen), and prepare the Android application package (APK or AAB) for submission to the Google Play Store.
*   **Action:** [ ] Investigate strategies for handling updates to the web content within the wrapped Android application, potentially exploring live update features offered by tools like Ionic Appflow to bypass frequent app store review cycles for web code changes.
*   **Action:** [ ] Document the mobile app store deployment plan, including the chosen wrapping tool, build process, customization steps, and update strategy, in this planning document.

## 12. Development Workflow & Quality Assurance

*   **Action:** [ ] Define and document the Git workflow.
    *   **Branching Strategy:** Plan to use a feature-branch workflow (e.g., Gitflow or GitHub Flow). All new work will be done on feature branches, then merged into a `develop` or `main` branch via Pull Requests.
    *   **Commit Conventions:** Adopt conventional commit messages (e.g., `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`, `chore:`) for clarity and to potentially automate changelog generation.
*   **Action:** [ ] Plan the CI/CD Pipeline Stages with Vercel and GitHub Actions.
    *   **Linting & Formatting:** Integrate ESLint and Prettier, run on pre-commit hooks and in CI.
    *   **Automated Testing:**
        *   Unit Tests (Jest, React Testing Library): Run on every push to a feature branch and before merging to `main`/`develop`.
        *   Integration Tests: Run on every push to a feature branch and before merging.
        *   E2E Tests (Cypress/Playwright): Run on a schedule or before deployment to staging/production.
    *   **Build:** Vercel will automatically build the application upon pushes to the connected GitHub repository.
    *   **Deployment:**
        *   Automatic deployment to a preview environment for every Pull Request by Vercel.
        *   Manual or automatic deployment to a dedicated Staging environment from the `develop` branch.
        *   Manual or automatic deployment to Production from the `main` branch after successful staging tests and approvals.
*   **Action:** [ ] Define a comprehensive Testing Strategy.
    *   **Unit Testing:** Focus on individual components and utility functions. Aim for reasonable test coverage of critical logic.
    *   **Integration Testing:** Test interactions between components and services (e.g., Firebase interactions).
    *   **End-to-End (E2E) Testing:** Simulate key user flows (e.g., searching for a truck, viewing details, filtering).
    *   **Accessibility Testing:** Incorporate automated checks (axe-core in E2E tests) and manual reviews.
    *   **Performance Testing:** Use tools like Lighthouse in CI or manually to monitor performance metrics.
*   **Action:** [ ] Establish a Code Review Process.
    *   All code changes must be submitted via Pull Requests (PRs).
    *   Require at least one approval from another team member (or the user, in this context) before merging.
    *   Define a code review checklist (e.g., adherence to coding standards, functionality, tests, documentation).
*   **Action:** [ ] Document the development workflow, CI/CD pipeline details, testing strategy, and code review process in this planning document.

This document will be updated as we continue to detail the planning phase.
