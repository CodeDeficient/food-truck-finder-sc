import type { Metadata } from "next";
// Removed Geist font imports
import { Inter } from "next/font/google"; // Added Inter font
import "./globals.css";
import HeaderComponent from "@/components/layout/HeaderComponent"; // Import HeaderComponent

// Initialize Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // This CSS variable is referenced in tailwind.config.ts
});

export const metadata: Metadata = {
  title: "SC Food Truck Finder", // Updated title
  description: "Find the best food trucks in South Carolina.", // Updated description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased flex flex-col`} // Apply Inter font variable, Tailwind's font-sans utility, and flex layout
      >
        <HeaderComponent />
        <main className="flex-1 overflow-y-auto"> {/* Added main tag for content area */}
          {children}
        </main>
        <BottomNavComponent /> {/* Added BottomNavComponent */}
      </body>
    </html>
  );
}
