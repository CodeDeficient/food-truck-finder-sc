# Prompt and Rules Guide: SC Food Truck Finder

## 1. Introduction

This document serves as a living repository for effective prompts, rules, and strategies for interacting with AI models (e.g., Google Gemini, OpenAI GPT-series, Anthropic Claude) during the development of the SC Food Truck Finder application. Its purpose is to enhance the efficiency, consistency, and quality of AI-assisted coding, data parsing, and content generation.

This guide will be updated iteratively as new insights are gained and best practices are discovered.

## 2. General Principles for Prompting

*   **Be Specific and Clear:** Clearly define the task, desired output format, and any constraints. Avoid ambiguity.
*   **Provide Context:** Include relevant information from the PRD, existing code, or previous AI interactions to guide the AI.
*   **Define the Persona/Role (if applicable):** Instruct the AI to act as a "senior software engineer," "data analyst," or "UX copywriter" to influence its response style and focus.
*   **Iterate and Refine:** Start with a basic prompt and refine it based on the AI's output. Small changes can lead to significant improvements.
*   **Request Specific Formats:** Ask for output in JSON, YAML, Markdown, or specific code structures (e.g., "a React functional component").
*   **Specify Constraints:** Include negative constraints (e.g., "do not use class components," "avoid using external libraries for this task").
*   **Break Down Complex Tasks:** For multi-step processes, prompt the AI for each step individually.
*   **Temperature and Other Parameters:** Experiment with model parameters (e.g., temperature for creativity vs. determinism) if the platform allows.

## 3. Prompts for Code Generation

### 3.1. Frontend (React/Next.js/Vite, Tailwind CSS, Leaflet.js)

*   **Component Scaffolding:**
    *   "Generate a React functional component named `[ComponentName]` using Next.js. It should accept the following props: `[propName1 (type), propName2 (type)]`. Style it with Tailwind CSS to achieve `[brief description of appearance/layout]`. The component should render `[description of elements and their purpose]`."
    *   "Create a skeleton for the `[ScreenName]` screen as described in the PRD (Section 4.X). Use placeholder data for now. Ensure it's responsive using Tailwind CSS."
*   **Function Logic:**
    *   "Write a JavaScript function `[functionName]` that takes `[parameters]` and `[description of logic]`. It should return `[expected output]`."
    *   "Implement the client-side logic for the search filter on the Main Finder Screen. It should take filter criteria (cuisine, location, open now) and update the displayed list of food trucks."
*   **Leaflet.js Integration:**
    *   "Provide a React component that initializes a Leaflet.js map centered on South Carolina. It should display markers for a list of food trucks, where each truck object has `latitude`, `longitude`, and `name` properties. Clicking a marker should display a popup with the truck's name."

### 3.2. Backend (Firebase Functions - Node.js/TypeScript)

*   **API Endpoint:**
    *   "Create a Firebase Function (HTTP trigger) in TypeScript named `[functionName]` that handles `[GET/POST/etc.]` requests to `/api/[endpointPath]`. It should `[describe request handling, data fetching/manipulation from Firestore, and response structure]`."
    *   "Write a Firebase Function to handle user suggestions for new food trucks. It should validate the input (truck name, cuisine, website) and store it in the 'suggested_trucks' Firestore collection."
*   **Scheduled Tasks (Scraping/Data Processing):**
    *   "Draft a Firebase Scheduled Function (pub/sub) in Node.js that runs daily. This function will be responsible for `[describe the high-level goal of the scraping/processing task, e.g., fetching data from a specific type of source]`." *(Further prompts will detail specific parsing logic)*

### 3.3. AI/LLM Integration (Client or Server-side)

*   **Prompt for LLM Call:**
    *   "Construct a prompt for `[LLM Provider, e.g., Gemini]` to parse unstructured text describing a food truck's schedule and location. The input text is: `[example input text]`. The desired output is a JSON object with fields: `truckName (string)`, `date (YYYY-MM-DD)`, `startTime (HH:MM)`, `endTime (HH:MM)`, `address (string)`, `eventName (optional string)`."
    *   "Refine the previous prompt to improve accuracy in extracting addresses, especially when only a street name and city are provided."

## 4. Prompts for Data Parsing (LLM-based)

*   **Core Task:** Extracting structured data (location, time, date, event name) from unstructured text (social media posts, event descriptions).
*   **Example Prompt Structure:**
    ```
    You are an AI assistant specialized in extracting structured information about food truck schedules and locations from unstructured text.
    Given the following text, extract the relevant details and provide them in a JSON format.

    Text:
    """
    [Paste unstructured text here]
    """

    Desired JSON Output Fields:
    - truckName: String (If identifiable, otherwise null)
    - date: String (Format: YYYY-MM-DD. If multiple dates, use the primary or first mentioned. Infer year if missing, assuming current or next upcoming.)
    - startTime: String (Format: HH:MM in 24-hour format. e.g., 17:00 for 5 PM)
    - endTime: String (Format: HH:MM in 24-hour format. If not specified, can be null or inferred if a duration is mentioned.)
    - address: String (Full street address if available. If only venue name, use that. Prioritize specific addresses over general locations.)
    - city: String
    - state: String (Default to "SC" if not specified but context implies South Carolina)
    - zipCode: String (If available)
    - eventName: String (Name of the event, if any. e.g., "Food Truck Rodeo")
    - notes: String (Any other relevant details or ambiguities)

    Rules for Extraction:
    1. If a date range is given (e.g., "Fri-Sun"), extract the start date.
    2. If multiple times are mentioned for a single event, try to determine the primary operating window.
    3. If the text is ambiguous, prioritize the most likely interpretation for a food truck schedule.
    4. If a field cannot be determined, use `null` for its value.
    5. Pay close attention to relative dates like "tomorrow," "next Friday," and convert them based on a reference date of [Current Date - YYYY-MM-DD].

    Provide only the JSON object as output.
    ```
*   **Refinement Strategies:**
    *   **Few-shot learning:** Provide 2-3 examples of input text and desired JSON output in the prompt.
    *   **Chain-of-thought:** Ask the LLM to "think step-by-step" before providing the final JSON (useful for debugging, then remove for production).
    *   **Feedback loop:** If parsing fails (e.g., linter error on JSON output), feed the error back to the LLM with the original prompt and ask it to correct its output. (See PRD Section 6).

## 5. Prompts for Content Generation (UI Text, Docs)

*   **UI Microcopy:**
    *   "Write a concise and friendly welcome message for the onboarding screen of the SC Food Truck Finder app. Max 20 words. Highlight the app's main benefit."
    *   "Suggest 3 alternative button labels for 'Apply Filters', keeping them short and action-oriented."
*   **Documentation:**
    *   "Generate a Markdown section explaining the `[featureName]` feature for the user documentation. Focus on `[key benefits/how-to steps]`."
    *   "Write inline comments for the following TypeScript function, explaining its purpose, parameters, and return value: `[paste code snippet]`."

## 6. Rules for AI Interaction & Output Handling

1.  **Always Validate LLM Output:**
    *   For JSON/YAML: Use a linter (e.g., `JSON.parse()`, `js-yaml.load()`) with schema validation if possible.
    *   For Code: Review generated code for correctness, security, and adherence to project standards.
2.  **Iterative Refinement is Key:** Do not expect perfect output on the first try. Plan for multiple iterations.
3.  **Store and Version Prompts:** Keep a record of successful (and unsuccessful) prompts, especially complex ones, for reuse and learning. This document is the primary place for that.
4.  **Human Oversight:** AI is a tool. A human developer must always review, test, and approve AI-generated artifacts before integration.
5.  **Cost Awareness:** Be mindful of API call costs for LLMs. Optimize prompts and batch requests where feasible.
6.  **Ethical Considerations:** Ensure AI usage aligns with ethical guidelines, especially regarding data privacy and bias in generated content.
7.  **Security:** Never embed sensitive information (API keys, PII) directly into prompts sent to external LLM services. Use placeholders and inject sensitive data securely in your backend if necessary.

## 7. Specific AI Model Notes

### 7.1. Google Gemini

*   Strengths: [Note observed strengths, e.g., multimodal capabilities, specific task performance]
*   Quirks: [Note any observed quirks or common failure modes]
*   Optimal Prompts: [Record prompts that work particularly well with Gemini]

### 7.2. OpenAI (GPT-3.5/4)

*   Strengths: [Note observed strengths, e.g., general code generation, conversational understanding]
*   Quirks: [Note any observed quirks]
*   Optimal Prompts: [Record prompts that work particularly well with OpenAI models]

### 7.3. Anthropic Claude

*   Strengths: [Note observed strengths, e.g., handling long context, safety features]
*   Quirks: [Note any observed quirks]
*   Optimal Prompts: [Record prompts that work particularly well with Claude]

*(This section will be populated as experience is gained with different models on this project.)*

## 8. Revision History

*   YYYY-MM-DD: Initial draft.
