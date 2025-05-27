# SC Food Truck Finder - Epics & User Stories

This document outlines high-level Epics and illustrative User Stories that provide context for the detailed tasks in `tasks/development_wbs.md`. It integrates and expands upon the user stories found in `prd.txt`.

## Core User Personas

*   **Foodie Frank:** (Corresponds to "Food Truck Enthusiast" in PRD) A general user looking for food trucks.
*   **Truck Owner Tina:** (Corresponds to "Secondary Users (Future)" in PRD) A food truck owner managing her presence on the platform.
*   **Admin Alex:** (Corresponds to "App Developer/Admin" in PRD) A platform administrator responsible for data integrity and system operation.
*   **Developer Team:** Represents the internal team building and maintaining the platform, focusing on technical enablement and quality.

## Epics & User Stories

### Epic 1: MVP - Basic Food Truck Discovery & Migration
*Description: Migrate the existing HTML/CSS/JS prototype to a robust Next.js application, allowing users to find food trucks via map and list, and filter by cuisine. This corresponds to WBS Phase 1.*
*Goal: Launch a functional MVP with core discovery features, validate UI/UX, and establish technical architecture.*
*WBS Sections: Primarily 1-9.*

*   **User Story (Foodie Frank):** As a Food Truck Enthusiast, I want to easily see which food trucks are active nearby today on a map and in a list, so I can plan my meal. (Adapted from PRD 3)
*   **User Story (Foodie Frank):** As a Food Truck Enthusiast, I want to filter food trucks by cuisine type, so I can find exactly what I'm craving. (Adapted from PRD 3)
*   **User Story (Foodie Frank):** As a Food Truck Enthusiast, I want to view a specific truck's detailed schedule and location, so I know where to find them. (Adapted from PRD 3)
*   **User Story (Developer Team):** As a Developer, I want to migrate the existing UI to Next.js with Tailwind CSS, so that the application is built on a modern, maintainable, and performant stack. (New, implied by WBS 1.1, 1.2)
*   **User Story (Developer Team):** As a Developer, I want to set up robust Firebase security rules for initial data, so that public data is readable and protected from unauthorized writes during the MVP phase. (New, implied by WBS 4.2)

### Epic 2: Enhanced Data & AI-Powered Insights
*Description: Automate data collection for food trucks and leverage AI to parse unstructured data, improving the richness and accuracy of information. This corresponds to WBS Section 10.*
*Goal: Provide more comprehensive and up-to-date food truck information, reducing manual data entry and showcasing AI capabilities.*

*   **User Story (Admin Alex):** As an App Developer/Admin, I want an automated system to collect and parse food truck data from various online sources, so that the platform's data is richer and more current with less manual intervention. (Adapted from PRD 3)
*   **User Story (Admin Alex):** As an App Developer/Admin, I want to monitor the accuracy of AI-parsed data and easily correct errors, so that data quality is maintained and the AI system can be improved. (Adapted from PRD 3)
*   **User Story (Developer Team):** As a Developer, I want to integrate Google Gemini (with OpenAI as a fallback) with a linter feedback loop to parse unstructured text about food truck events into structured JSON, so that we can reliably incorporate data from diverse sources like social media. (New, implied by WBS 10.1)

### Epic 3: User Accounts & Personalization
*Description: Allow users to create accounts, save favorite trucks, and receive relevant notifications. This corresponds to WBS Section 11.*
*Goal: Enhance user engagement and provide personalized experiences, making the app more valuable to repeat users.*

*   **User Story (Foodie Frank):** As a Food Truck Enthusiast, I want to create an account and sign in easily (e.g., via Google or email link), so that I can access personalized features and save my preferences. (New, implied by WBS 11.1)
*   **User Story (Foodie Frank):** As a Food Truck Enthusiast, I want to "favorite" trucks, so I can quickly find them later and receive updates. (Adapted from PRD 3)
*   **User Story (Foodie Frank):** As a Food Truck Enthusiast, I want to receive notifications when my favorite trucks update their location or schedule, so I don't miss them. (Adapted from PRD 3)
*   **User Story (Foodie Frank):** As a Food Truck Enthusiast, I want to manage my notification preferences, so I only receive updates I care about. (New, implied by WBS 11.2, 4.7)

### Epic 4: Advanced Discovery & External Integrations
*Description: Implement advanced search, comprehensive filtering, and integrate external APIs for richer content like ratings/reviews. This corresponds to WBS Section 12.*
*Goal: Make it easier for users to find exactly what they're looking for and get more detailed, trustworthy information.*

*   **User Story (Foodie Frank):** As a Food Truck Enthusiast, I want to use an advanced search bar to find trucks by name or keywords, so that I can quickly locate specific trucks or types of food. (Implied by PRD 4.1 Search Bar, detailed in WBS 12.1)
*   **User Story (Foodie Frank):** As a Food Truck Enthusiast, I want to see trustworthy ratings for food trucks, so I can make informed choices. (Adapted from PRD 3, detailed in WBS 12.2)
*   **User Story (Foodie Frank):** As a Food Truck Enthusiast, I want to suggest new food trucks or report incorrect information, so the app stays accurate and comprehensive. (Adapted from PRD 3, detailed in WBS 4.9)

### Epic 5: SEO, Mobile App Deployment & Live Updates
*Description: Optimize the web app for search engines, package it as a native mobile app for Android, and enable Over-the-Air updates. This corresponds to WBS Sections 14, 15.*
*Goal: Increase discoverability, reach a wider audience through mobile app stores, and maintain the app efficiently.*

*   **User Story (Developer Team):** As a Developer, I want to implement SSR/SSG and structured data (JSON-LD), so that search engines can effectively crawl and index the site, improving its organic visibility. (New, implied by WBS 14.1, 14.2)
*   **User Story (Foodie Frank):** As a Mobile User, I want to be able to download and use the SC Food Truck Finder as a native Android app, so that I can have a dedicated, convenient mobile experience. (New, implied by WBS 15)
*   **User Story (Developer Team):** As a Developer, I want to integrate Capacitor and configure live updates (OTA) with Capgo, so that we can efficiently deploy web asset changes and bug fixes to the mobile app without requiring a full app store resubmission. (New, implied by WBS 15.3)

### Epic 6: Truck Owner Portal
*Description: Provide a dedicated portal for food truck owners to manage their listings, schedules, and menus. This corresponds to WBS Section 16.*
*Goal: Empower truck owners to keep their information accurate and up-to-date, enhancing data quality for all users.*

*   **User Story (Truck Owner Tina):** As a Truck Owner, I want to sign up for an owner account and manage my truck's profile (name, description, cuisine, images), so that I can accurately represent my business to potential customers. (New, implied by WBS 16)
*   **User Story (Truck Owner Tina):** As a Truck Owner, I want to update my truck's schedule and locations easily through a dedicated portal, so that users always have the latest information on where to find me. (New, implied by WBS 16)
*   **User Story (Truck Owner Tina):** As a Truck Owner, I want to manage my truck's menu items and prices, so that customers know what to expect. (New, implied by WBS 16)

### Epic 7: Advanced Analytics & Reporting
*Description: Implement comprehensive analytics to understand user behavior, application performance, and gather insights for data-driven decisions. This corresponds to WBS Section 17.*
*Goal: Enable continuous improvement of the application based on user interaction and performance metrics.*

*   **User Story (Developer Team/Product Manager):** As a Product Manager, I want to track key custom events (e.g., `TruckFavorited`, `FilterApplied`, `SearchPerformed`) in Plausible, so that I can understand how users are interacting with core features and identify popular actions. (New, implied by WBS 17)
*   **User Story (Developer Team/Product Manager):** As a Product Manager, I want to access custom reports and dashboards visualizing key KPIs (e.g., user engagement, feature adoption rates, top search terms), so that I can monitor the application's success and make informed decisions for future development. (New, implied by WBS 17)

### Epic 8: Monetization Strategy & Implementation
*Description: Implement features to generate revenue from the platform, supporting its long-term sustainability and demonstrating business acumen. This corresponds to WBS Section 18.*
*Goal: Explore and establish viable revenue streams while maintaining a positive user experience.*

*   **User Story (Truck Owner Tina):** As a Truck Owner, I want the option to purchase a premium listing for my truck, so that it gets featured placement and increased visibility to attract more customers. (New, implied by WBS 18)
*   **User Story (Developer Team/Business Stakeholder):** As a Business Stakeholder, I want to integrate a secure payment system (e.g., Polar.sh or Stripe) to handle premium listing subscriptions, so that we can process transactions reliably and manage entitlements. (New, implied by WBS 18)
*   **User Story (Developer Team/Business Stakeholder):** As a Business Stakeholder, I want to investigate and potentially implement ethical in-app advertising models, so that we can generate revenue while respecting user experience. (New, implied by WBS 18)
*   **User Story (Developer Team/Business Stakeholder):** As a Business Stakeholder, I want to explore offering aggregated and anonymized data insights to interested parties (e.g., local businesses, researchers), so that we can create an additional revenue stream while ensuring user privacy. (New, implied by WBS 18)
