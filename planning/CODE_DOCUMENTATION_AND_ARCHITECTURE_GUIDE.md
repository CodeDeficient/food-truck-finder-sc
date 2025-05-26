# Code Documentation and System Architecture Guide: SC Food Truck Finder

## 1. Introduction

This document provides guidelines for code documentation and an overview of the system architecture for the SC Food Truck Finder application. Consistent documentation and a clear understanding of the architecture are vital for maintainability, scalability, collaboration (future), and onboarding new developers (even if that's just the future self of the current developer).

This guide complements the technical architecture outlined in PRD Section 6 and the non-functional requirements in `planning/NON_FUNCTIONAL_REQUIREMENTS.md`.

## 2. Code Documentation Standards

"Clean, well-commented codebase" (PRD Section 5) is the goal.

### 2.1. General Principles

*   **Write for Clarity:** Code should be as self-documenting as possible through clear variable names, function names, and logical structure. Comments should explain *why* something is done, not just *what* is being done if the "what" is obvious from the code.
*   **Be Concise:** Avoid overly verbose comments.
*   **Keep Comments Up-to-Date:** Outdated comments are worse than no comments. Update comments when code changes.
*   **Consistency:** Follow the chosen commenting style consistently across the codebase.

### 2.2. Inline Comments

*   Use for clarifying complex logic, non-obvious decisions, or workarounds.
*   Place comments on the line above the code they refer to, or at the end of a line for very short clarifications.
*   **Example (JavaScript/TypeScript):**
    ```javascript
    // Calculate distance using Haversine formula due to map projection inaccuracies for short distances
    const distance = haversine(userLocation, truckLocation);

    if (truck.isSpecialEvent) { // Special events have different display logic
      // ...
    }
    ```

### 2.3. Function/Method Documentation (JSDoc / TSDoc)

*   All significant functions and methods should have a documentation block.
*   Use JSDoc for JavaScript (`.js` files) and TSDoc for TypeScript (`.ts` files).
*   **Minimum requirements:**
    *   Brief description of the function's purpose.
    *   `@param` for each parameter: name, type (in TS, often inferred), and description.
    *   `@returns` for the return value: type (in TS, often inferred) and description.
    *   `@throws` if the function can throw specific errors.
*   **Example (TypeScript with TSDoc):**
    ```typescript
    /**
     * Fetches active food trucks near a given geographic coordinate.
     *
     * @param coordinates - The latitude and longitude to search around.
     * @param radiusInKm - The search radius in kilometers.
     * @param cuisineFilter - Optional array of cuisine types to filter by.
     * @returns A promise that resolves to an array of FoodTruck objects.
     * @throws Error if Firestore query fails.
     */
    async function getNearbyActiveTrucks(
      coordinates: { lat: number; lon: number },
      radiusInKm: number,
      cuisineFilter?: string[]
    ): Promise<FoodTruck[]> {
      // ... implementation ...
    }
    ```

### 2.4. Component Documentation (React)

*   For React components, document:
    *   The component's purpose and primary responsibility.
    *   Props: name, type, default value (if any), and description.
    *   Key state variables and their purpose if not obvious.
*   **Example (React with TypeScript):**
    ```typescript
    interface TruckCardProps {
      /** The food truck data to display. */
      truck: FoodTruck;
      /** Callback function when the card is clicked. */
      onClick: (truckId: string) => void;
    }

    /**
     * Displays a summary card for a single food truck.
     * Used in the main list view.
     */
    const TruckCard: React.FC<TruckCardProps> = ({ truck, onClick }) => {
      // ... component logic and JSX ...
    };
    ```

### 2.5. Module/File Level Comments

*   At the top of significant files/modules, include a brief comment explaining the module's purpose and its main exports/responsibilities.
*   **Example:**
    ```typescript
    /**
     * @file Firebase utility functions for interacting with the 'trucks' Firestore collection.
     * @author Daniel (Vibecoder)
     */

    // ... imports and code ...
    ```

### 2.6. TODOs and FIXMEs

*   Use `// TODO:` for planned enhancements or incomplete features.
*   Use `// FIXME:` for known bugs or areas needing correction.
*   Include a brief explanation and ideally a reference to an issue ID if one exists.
    *   `// TODO: Implement pagination for truck list (Issue #123)`
    *   `// FIXME: Address potential race condition when updating user favorites`

## 3. System Architecture Overview

This section expands on PRD Section 6, providing a more detailed view. Diagrams (e.g., using Mermaid.js in Markdown) can be added here as the system is built.

### 3.1. High-Level Components

*   **Frontend (Client-Side Application):**
    *   Built with: React (Next.js or Vite + React)
    *   Styling: Tailwind CSS
    *   Mapping: Leaflet.js
    *   Responsibilities: UI rendering, user interaction, client-side state management, API calls to backend.
    *   Deployment: Vercel
*   **Backend (Serverless):**
    *   Platform: Firebase
    *   Logic: Firebase Functions (Node.js/TypeScript)
    *   Database: Firestore (NoSQL Document Database)
    *   Authentication: Firebase Authentication
    *   Responsibilities: API endpoints, business logic, data storage and retrieval, scheduled tasks (scraping, AI parsing).
*   **AI/LLM Integration:**
    *   Providers: Google Gemini (Primary), OpenAI, Anthropic (as needed).
    *   Purpose: Parsing unstructured data into structured format.
    *   Interaction: Primarily via Firebase Functions calling LLM APIs. Linter feedback loop for self-correction.
*   **External Integrations (Future):**
    *   Google Maps Platform / Yelp API (for reviews).
    *   Transactional Email Service (SendGrid, Mailgun via Firebase Functions).
    *   SMS/Push Notifications (Twilio, Firebase Cloud Messaging).

### 3.2. Key Data Flows

*(This section will be detailed with diagrams and descriptions as features are implemented. Examples below.)*

*   **User Views Food Trucks:**
    1.  User opens app -> Frontend requests truck data from Firebase Function API.
    2.  Firebase Function queries Firestore for active/relevant trucks.
    3.  Firestore returns data -> Firebase Function formats response -> Frontend receives data.
    4.  Frontend renders map (Leaflet.js) and list with truck data.
*   **AI Data Parsing Flow:**
    1.  Scheduled Firebase Function triggers -> Scrapes data from a source (e.g., social media page).
    2.  Scraped text sent to LLM API (e.g., Gemini) via another Firebase Function.
    3.  LLM prompt (from `PROMPT_AND_RULES_GUIDE.md`) instructs extraction of structured data (location, time, etc.).
    4.  LLM returns JSON/YAML -> Firebase Function validates/lints output.
        *   If invalid: Error fed back to LLM for retry (linter feedback loop).
        *   If valid: Data transformed and stored/updated in Firestore.
*   **User Submits "Suggest a Truck":**
    1.  User fills form in Frontend -> Frontend sends data to "suggestTruck" Firebase Function API.
    2.  Firebase Function validates input -> Stores suggestion in a dedicated Firestore collection (e.g., `suggested_trucks`).
    3.  (Future) Admin interface or process to review and approve suggestions.

### 3.3. Directory Structure (Proposed)

A logical directory structure is key for maintainability. (This will evolve but provides a starting point).

```
sc-food-truck-finder/
├── .git/
├── .vscode/
├── node_modules/
├── planning/                 # All planning documents (PRD, this guide, etc.)
│   ├── PRD.md
│   ├── PROMPT_AND_RULES_GUIDE.md
│   ├── TESTING_DOCUMENTATION.md
│   ├── PROGRESS_TRACKER_PLAN.md
│   ├── ISSUE_MANAGEMENT_PLAN.md
│   ├── CODE_DOCUMENTATION_AND_ARCHITECTURE_GUIDE.md
│   ├── DATA_MODEL.md
│   ├── DEFINITION_OF_DONE.md
│   ├── NON_FUNCTIONAL_REQUIREMENTS.md
│   └── ...
├── public/                   # Static assets for frontend (images, favicons)
├── src/                      # Source code
│   ├── app/                  # Next.js app router (or components/pages for Vite)
│   │   ├── (routes)/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── api/              # Next.js API routes (if not using separate Firebase Functions for all backend)
│   │   └── ...
│   ├── components/           # Reusable React components
│   │   ├── ui/               # Generic UI elements (Button, Card, Modal)
│   │   ├── map/              # Map-specific components
│   │   └── features/         # Feature-specific components (TruckList, FilterPanel)
│   ├── lib/                  # Helper functions, utilities, constants (client-side)
│   │   ├── firebaseClient.ts # Firebase client-side setup
│   │   └── utils.ts
│   ├── styles/               # Global styles, Tailwind config
│   │   └── globals.css
│   ├── types/                # TypeScript type definitions
│   │   └── index.ts
├── functions/                # Firebase Functions source code (if separate from src/app/api)
│   ├── src/
│   │   ├── index.ts          # Main entry point for functions
│   │   ├── trucks.ts         # Truck related API endpoints
│   │   ├── scrape.ts         # Scraping and AI parsing logic
│   │   └── utils/            # Backend utilities
│   ├── package.json
│   └── tsconfig.json
├── tests/                    # Test files
│   ├── unit/
│   └── integration/
├── .gitignore
├── package.json
├── tsconfig.json             # Root TypeScript config
├── next.config.js            # Next.js config (or vite.config.js)
└── README.md
```

### 3.4. Key Architectural Decisions & Rationale

*(This section will document significant architectural choices as they are made.)*

*   **Decision:** Use Firebase as the primary backend.
    *   **Rationale:** Generous free tier, serverless architecture simplifies ops, integrated services (Auth, Firestore, Functions), good for rapid MVP development. (PRD Section 6)
*   **Decision:** Next.js for the frontend framework.
    *   **Rationale:** SSR/SSG benefits, efficient routing, Vercel integration, strong community. (PRD Section 6)
    *   *(Alternative: Vite + React for simpler SPA if SSR is not critical initially)*
*   **Decision:** Tailwind CSS for styling.
    *   **Rationale:** Utility-first approach speeds up development, highly customizable, good for responsive design. (PRD Section 6)

## 4. Tools for Documentation

*   **Markdown:** For all textual documentation within the repository.
*   **JSDoc/TSDoc:** For inline code documentation.
*   **Mermaid.js:** (Optional) For embedding diagrams (flowcharts, sequence diagrams) directly into Markdown files.
    ```mermaid
    graph TD;
        A[Client] -->|Request| B(API Gateway);
        B --> C{Firebase Function};
        C -->|Query| D[Firestore];
        D -->|Data| C;
        C -->|Response| A;
    ```
*   **IDE Integration:** VS Code extensions for JSDoc/TSDoc generation and Markdown preview.

## 5. Revision History

*   YYYY-MM-DD: Initial draft.
