import type { Metadata } from "next";
// Removed GeistSans import as it was causing a module not found error.
// import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"; // Import Toaster

export const metadata: Metadata = {
  title: "Uttam's Digital Canvas",
  description: "Portfolio website for Uttam Aggarwal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Removed GeistSans.variable and font-sans class */}
      <body className="antialiased">
        {children}
        <Toaster /> {/* Add Toaster component here */}
      </body>
    </html>
  );
}
