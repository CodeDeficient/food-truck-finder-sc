# Image Optimization Strategy

This document outlines the strategy for handling different types of images within the SC Food Truck Finder project.

## SVG Icons

SVG icons used throughout the application (e.g., for navigation, buttons, map markers) are typically stored as string literals or imported as React components.

**Optimization:**
- All SVG string literals should be optimized using a tool like [SVGO](https://github.com/svg/svgo).
- Optimization should focus on removing redundant information, minimizing path data, and stripping unnecessary attributes without affecting visual fidelity.
- The `viewBox` attribute should generally be preserved to ensure proper scaling.
- If SVGs are imported as React components (e.g., using `@svgr/webpack`), ensure that the SVGO loader is configured as part of the build process if possible, or that source SVGs are pre-optimized.

Currently, inline SVG strings used in `src/data/mockFoodTrucks.ts` have undergone a basic illustrative optimization. For future SVGs, a more automated SVGO process is recommended.

## Raster Images (PNG, JPG, WebP)

For any future raster images (e.g., food truck photos, user profile pictures, promotional banners) added to the project, **Next.js's built-in `next/image` component MUST be used.**

**Benefits of `next/image`:**
- **Automatic Optimization:** Next.js automatically optimizes images in modern formats like WebP (when the browser supports it), reducing file sizes without significant quality loss.
- **Lazy Loading:** Images are loaded only when they enter the viewport, improving initial page load performance.
- **Responsive Sizing:** `next/image` can automatically generate and serve appropriately sized images based on the device's screen resolution and the image's layout size.
- **CLS Prevention:** Helps prevent Cumulative Layout Shift by correctly reserving space for images before they load.

**Usage Guidelines:**
- Refer to the [official Next.js documentation for `next/image`](https://nextjs.org/docs/pages/api-reference/components/image) for detailed usage instructions, including:
    - Local images (stored in the `public` directory).
    - Remote images (requiring configuration of `next.config.js` for allowed domains).
    - Required props like `src`, `width`, `height`, and `alt`.
    - Optional props like `quality`, `priority`, `layout` (or `fill`, `sizes` for newer versions).

By adhering to these guidelines, we can ensure optimal performance and user experience related to image assets in the application.
