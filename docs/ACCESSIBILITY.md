# Accessibility (a11y) Approach

This document outlines the accessibility approach for the SC Food Truck Finder project. Our goal is to make the application usable and accessible to the widest possible audience, including individuals with disabilities.

## Commitment to Accessibility

We are committed to providing an accessible user experience by striving to meet or exceed the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. Accessibility is an ongoing effort, and we aim to incorporate best practices throughout the development lifecycle.

## Foundation: Semantic HTML

The foundation of our accessibility strategy is the correct and meaningful use of semantic HTML5 elements. This includes:
- Using `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>` (when applicable) to define page structure.
- Employing appropriate heading levels (`<h1>` - `<h6>`) to create a logical content hierarchy.
- Using `<button>` for interactive controls and `<a>` for navigation links.
- Ensuring list structures (`<ul>`, `<ol>`, `<li>`) are used for lists of items.

## Basic ARIA Attributes Implemented

To enhance the accessibility of components where semantic HTML alone might not be sufficient, the following ARIA (Accessible Rich Internet Applications) attributes have been implemented:

- **`aria-label`**: Used for icon-only buttons (e.g., menu, profile buttons in the header) to provide a descriptive text alternative for screen readers. Also used for the search input field to provide an accessible name.
  - Example: `<button aria-label="Open menu">...</button>`
- **`aria-current="page"`**: Used for navigation links (e.g., in the bottom navigation bar) to indicate the current page within a set of navigation links.
  - Example: `<a href="/map" aria-current="page">Map</a>`
- **`aria-pressed="true/false"`**: Used for toggle buttons (e.g., filter buttons) to indicate their current pressed state.
  - Example: `<button aria-pressed="true">Mexican</button>`
- **`aria-hidden="true"`**: Used for decorative SVG icons that are accompanied by a text label (e.g., on a button with `aria-label`) to prevent redundant announcements by screen readers.

## Future Accessibility Improvements

We recognize that accessibility is an iterative process. Future improvements and areas of focus include:

- **Comprehensive ARIA for Dynamic Regions:** Implementing `aria-live` regions for dynamic content updates (e.g., search results, map updates if they are not announced automatically).
- **Keyboard Navigation & Focus Management:**
    - Rigorous testing of keyboard-only navigation to ensure all interactive elements are focusable and operable.
    - Ensuring a logical focus order throughout the application.
    - Managing focus appropriately when dialogs, modals, or dynamic UI elements appear and disappear.
- **Advanced Form Accessibility:** Ensuring all form inputs have associated labels (visible or ARIA) and that error messages are clearly associated with their respective inputs.
- **WCAG Compliance Checks:** Regularly auditing the application against WCAG 2.1 AA criteria using automated tools and manual testing.
- **Screen Reader Testing:** Performing tests with common screen readers (e.g., NVDA, JAWS, VoiceOver) to ensure a good user experience.
- **User Testing:** Involving users with disabilities in testing phases, if possible.
- **Color Contrast:** Verifying that text and UI elements meet minimum color contrast ratios.
- **Further Semantic Enhancements:** For instance, considering `<article>` for `FoodTruckCardComponent` if it evolves into a more self-contained, syndicatable piece of content.
- **Page Titles and Headings:** Ensuring each page has a unique and descriptive `<h1>` (or that `document.title` is well-managed for SPAs if an `<h1>` is not always present visually).

By focusing on these areas, we aim to continuously improve the accessibility of the SC Food Truck Finder application.
