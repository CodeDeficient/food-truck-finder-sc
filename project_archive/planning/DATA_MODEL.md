# SC Food Truck Finder - Conceptual Data Model (Firestore)

This document outlines the conceptual data model for the SC Food Truck Finder application using Firestore. It describes the main collections, their purpose, key fields, and relationships. This model is designed based on anticipated query patterns and may evolve.

## Guiding Principles for Firestore Data Modeling:

*   **Query-Driven:** Structure data to optimize for common read operations.
*   **Denormalization where appropriate:** Duplicate data to avoid complex queries if read performance is critical and data consistency can be managed.
*   **Use Subcollections for Bounded Lists:** For one-to-many relationships where the "many" side is typically accessed with the "one" (e.g., a user's favorites).
*   **Root Collections for Independent Entities:** For top-level entities that are queried independently (e.g., `trucks`).

## Main Collections & Document Structures

### 1. `trucks`
*   **Purpose:** Stores detailed information about each food truck.
*   **Document ID:** Auto-generated unique ID.
*   **Key Fields (Illustrative - see WBS 4.2, 16 for more):**
    *   `name: string`
    *   `cuisine: string[]` (array of cuisine types)
    *   `description: string`
    *   `profileImageUrl: string`
    *   `bannerImageUrl: string`
    *   `ownerUid: string` (links to `users/{userId}` if owner is registered)
    *   `contactInfo: { phone: string, email: string, website: string }`
    *   `isActive: boolean` (for admin control)
    *   `createdAt: timestamp`
    *   `updatedAt: timestamp`
*   **Relationships:**
    *   Logically linked to `schedules` (one truck to many schedules, often queried together).
    *   Logically linked to `users` (via `ownerUid`).

### 2. `schedules`
*   **Purpose:** Stores individual schedule entries for food trucks (location, date, time).
*   **Document ID:** Auto-generated unique ID.
*   **Key Fields:**
    *   `truckId: string` (links to `trucks/{truckId}`)
    *   `startDateTime: timestamp`
    *   `endDateTime: timestamp`
    *   `locationName: string` (e.g., "Main Street Park")
    *   `address: string`
    *   `latitude: number`
    *   `longitude: number`
    *   `notes: string` (optional)
    *   `isRecurring: boolean` (future consideration)
    *   `createdAt: timestamp`
*   **Relationships:**
    *   Many-to-one with `trucks`. Queries will often fetch schedules for a specific `truckId`.

### 3. `users` (Firebase Authentication provides UIDs)
*   **Purpose:** Stores public-facing user profile information and application-specific user data. Firebase Auth handles sensitive credentials.
*   **Collection Path:** `users/{userId}` (where `userId` is the Firebase Auth UID)
*   **Key Fields (Illustrative - see WBS 10.2, 11.1):**
    *   `displayName: string`
    *   `photoURL: string` (optional)
    *   `email: string` (for reference, primary managed by Auth)
    *   `createdAt: timestamp`
    *   `updatedAt: timestamp`
    *   `notificationPreferences: map` (e.g., `{ newTruckAlerts: true, weeklyDigest: false }`)
    *   `fcmTokens: string[]` (array of FCM registration tokens for push notifications)
    *   `customClaims: map` (e.g., `{ isTruckOwner: true }` - managed by backend, read by client)
*   **Subcollections:**
    *   `favorites`
    *   `notifications`

### 4. `users/{userId}/favorites`
*   **Purpose:** Stores a user's favorited trucks.
*   **Document ID:** `truckId` (ID of the favorited truck from the `trucks` collection).
*   **Key Fields:**
    *   `favoritedAt: timestamp`
*   **Relationships:**
    *   Many-to-many link between `users` and `trucks`. Each document links one user to one truck.

### 5. `users/{userId}/notifications`
*   **Purpose:** Stores notifications specific to a user.
*   **Document ID:** Auto-generated unique ID.
*   **Key Fields (Illustrative - see WBS 10.2, 11.2):**
    *   `title: string`
    *   `body: string`
    *   `type: string` (e.g., 'alert', 'info', 'promo')
    *   `readStatus: boolean` (default: false)
    *   `createdAt: timestamp`
    *   `relatedTruckId: string` (optional, if notification is about a specific truck)
    *   `deepLinkUrl: string` (optional, for in-app navigation)

### 6. `external_api_cache`
*   **Purpose:** Caches responses from external APIs (e.g., Google Places/Yelp) to reduce costs and latency.
*   **Document ID:** Unique key derived from API and query (e.g., `google_places_truckId_XYZ`).
*   **Key Fields:**
    *   `cachedAt: timestamp`
    *   `responseData: map` (the transformed data from the external API)
    *   `sourceApi: string` (e.g., 'google_places', 'yelp_fusion')
*   **Note:** TTL logic will be applied by querying `cachedAt`.

### 7. `admins` (Potential - for RBAC)
*   **Purpose:** Stores UIDs of users who have administrative privileges.
*   **Document ID:** `userId` (Firebase Auth UID of the admin).
*   **Key Fields:**
    *   `isAdmin: boolean` (true)
    *   `grantedAt: timestamp`
*   **Note:** Used by security rules (e.g., `isAdmin()` helper function).

## Conceptual Relationships (Mermaid Diagram - Illustrative)

\`\`\`mermaid
erDiagram
    USERS {
        string userId PK "Auth UID"
        string displayName
        string photoURL
        map notificationPreferences
        string_array fcmTokens
    }
    TRUCKS {
        string truckId PK "Auto-ID"
        string name
        string_array cuisine
        string ownerUid FK "Nullable"
    }
    SCHEDULES {
        string scheduleId PK "Auto-ID"
        string truckId FK
        timestamp startDateTime
        timestamp endDateTime
        string locationName
    }
    FAVORITES {
        string userId FK
        string truckId FK
        timestamp favoritedAt
    }
    NOTIFICATIONS {
        string notificationId PK "Auto-ID"
        string userId FK
        string title
        boolean readStatus
    }

    USERS ||--o{ FAVORITES : "has many"
    TRUCKS ||--o{ FAVORITES : "favorited by many"
    USERS ||--o{ NOTIFICATIONS : "receives"
    TRUCKS ||--o{ SCHEDULES : "has many"
    USERS ||--o{ TRUCKS : "owns (optional)"

    %% Note: Mermaid ERD doesn't perfectly represent NoSQL/Firestore.
    %% This is a conceptual view. 'FAVORITES' and 'NOTIFICATIONS' are subcollections.
    %% 'ownerUid' in TRUCKS is a direct reference to a user's UID.
\`\`\`

## Data Validation
Data validation will be enforced primarily through:
1.  **Firestore Security Rules:** Using `.validate` clauses for type checking, string lengths, formats, required fields, enums, and cross-document existence checks where feasible. (Detailed in WBS 4.2, 10.2)
2.  **Firebase Functions (Backend Logic):** For more complex validation before writing data, especially for data coming from external sources or user inputs that require business logic checks.
3.  **Client-Side Validation:** For immediate user feedback in forms, but always re-validated on the backend.

---
This data model will be refined as development progresses and query needs become more concrete.
