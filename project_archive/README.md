# SC Food Truck Finder

## Vision & Goal

**Vision:** To be the definitive, user-friendly, and visually engaging platform for discovering and tracking food trucks across South Carolina, providing accurate, near real-time availability, diverse cuisine details, and trustworthy ratings.

**Goal:** To create a highly marketable, open-source web application that serves as a robust portfolio piece, showcasing advanced full-stack development, AI integration, data engineering, and debugging capabilities, leading to freelance opportunities and potential direct revenue.

## Project Description

The SC Food Truck Finder is a web application designed to help users easily locate and get information about food trucks in South Carolina. The platform aims to solve the common problem of finding up-to-date food truck locations and schedules, which are often scattered across various social media platforms and event listings.

The UI/UX theme is a "Retro-Modern Fusion," characterized by a dark base, vibrant "candy apple red" accents, and subtle neon highlights, aiming for a sleek and engaging visual experience.

## Key Features (MVP & Planned)

*   **Interactive Map View:** Users can see food truck locations on a map (powered by Leaflet.js).
*   **Scrollable List View:** Trucks are also displayed in a filterable list.
*   **Cuisine Filtering:** Users can filter trucks by cuisine type (e.g., Mexican, BBQ, Vegan).
*   **Detailed Truck Information:** View specific truck details, including current status, schedule, and description.
*   **User Accounts & Personalization (Planned):**
    *   User registration and login (Firebase Authentication).
    *   Ability to "favorite" trucks.
    *   Personalized notifications for favorited trucks.
*   **AI-Powered Data Collection (Planned):**
    *   Automated scraping of food truck data from public sources.
    *   LLM integration (Google Gemini, with OpenAI as a potential fallback) for parsing unstructured text into structured data (location, time, events) with a linter feedback loop.
*   **Advanced Discovery (Planned):**
    *   Enhanced search functionality (potentially with Algolia/Typesense).
    *   Integration with Google Places/Yelp for ratings and reviews.
*   **Mobile App (Planned):**
    *   Android application built using Capacitor.
    *   Over-the-Air (OTA) updates via Capgo.
*   **Truck Owner Portal (Planned):**
    *   Dedicated section for truck owners to manage their profiles, schedules, and menus.
*   **Monetization Features (Planned):**
    *   Premium truck listings.
    *   Ethical in-app advertising.
    *   Anonymized data insights.

## Tech Stack

*   **Frontend:**
    *   Next.js (App Router, TypeScript)
    *   React
    *   Tailwind CSS
    *   Leaflet.js (via React-Leaflet) for mapping
    *   Zustand (for state management)
*   **Backend:**
    *   Firebase (Firestore, Firebase Authentication, Firebase Functions, Firebase Scheduled Functions)
    *   Node.js (for Firebase Functions)
*   **AI/LLM Integration:**
    *   Google Gemini API (Primary), OpenAI API (Fallback)
*   **Mobile (Planned):**
    *   Capacitor
    *   Capgo (for OTA updates)
*   **Analytics:**
    *   Plausible Analytics
*   **Payments (Planned):**
    *   Polar.sh / Stripe
*   **Development & CI/CD:**
    *   Bun (Primary Package Manager) / pnpm (Fallback)
    *   Git & GitHub
    *   ESLint, Prettier
    *   Jest, React Testing Library, `jest-axe`
    *   GitHub Actions for CI
    *   Vercel (for frontend deployment)

## Project Status

Currently, the project is in the planning and initial MVP development phase. The initial `index.html` serves as a UI concept mockup and is being migrated to a Next.js application.

**Phases:**
1.  **Phase 1: Minimum Viable Product (MVP):** Focus on migrating `index.html` to Next.js, core discovery features (map, list, filter), and establishing the technical architecture.
2.  **Phase 2: Post-Launch Enhancements:** Automated data updates, user accounts, personalization, advanced discovery.
3.  **Phase 3: Advanced Features & Monetization:** Truck owner portal, analytics, monetization.

## Getting Started

This project is currently under active development. Setup instructions will be provided here once the initial Next.js application structure is stable and runnable.

General steps will involve:
1.  Cloning the repository.
2.  Installing dependencies using `bun install`.
3.  Setting up Firebase project and environment variables.
4.  Running the development server: `bun run dev`.

## Folder Structure (Conceptual)

```
.
├── public/                     # Static assets, service workers
├── src/
│   ├── app/                    # Next.js App Router (pages, layouts, API routes)
│   ├── components/             # Reusable React components
│   ├── lib/                    # Utility functions, helper modules
│   ├── store/                  # Zustand state management
│   ├── styles/                 # Global styles (if not solely in app/globals.css)
│   └── types/                  # TypeScript type definitions
├── planning/                   # All project planning documents
│   ├── DATA_MODEL.md
│   ├── DEFINITION_OF_DONE.md
│   ├── epics_and_user_stories.md
│   ├── NON_FUNCTIONAL_REQUIREMENTS.md
│   └── planning_phase_plan.md
├── tasks/
│   └── development_wbs.md      # Work Breakdown Structure
├── .github/
│   └── workflows/              # GitHub Actions CI/CD workflows
├── index.html                  # Original UI concept mockup
├── prd.txt                     # Product Requirements Document
├── PORTFOLIO_SHOWCASE_GUIDE.md # Guide for showcasing project skills
├── README.md                   # This file
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── package.json
└── bun.lockb                   # Bun lockfile
```

## Key Planning Documents

This project is extensively planned. Key documents include:
*   `prd.txt`: Product Requirements Document.
*   `tasks/development_wbs.md`: Detailed Work Breakdown Structure.
*   `planning/epics_and_user_stories.md`: High-level epics and user stories.
*   `planning/DEFINITION_OF_DONE.md`: Criteria for task and feature completion.
*   `planning/NON_FUNCTIONAL_REQUIREMENTS.md`: Quality attributes and operational characteristics.
*   `planning/DATA_MODEL.md`: Conceptual Firestore data model.
*   `PORTFOLIO_SHOWCASE_GUIDE.md`: Developer's guide to showcasing skills within this project.

## How to Contribute

Contribution guidelines will be added here as the project matures. For now, please refer to the planning documents and WBS for areas of development.

## License

This project will likely be licensed under the MIT License. Details to be confirmed.

## Contact

Project Author: [Your Name/Handle Here]
Contact: [Your Email/Link Here]

---

This README provides a comprehensive overview of the SC Food Truck Finder project.
