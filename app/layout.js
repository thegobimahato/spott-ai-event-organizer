import { Geist, Geist_Mono } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { ThemeProvider } from "../components/theme-provider";
import "./globals.css";

import { ConvexClientProvider } from "@/components/convex-client-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Spott",
  description: "Discover and create amazing events",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-linear-to-br from-gray-950 via-zinc-900 to-stone-900 text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ClerkProvider
            appearance={{
              theme: dark,
            }}
          >
            <ConvexClientProvider>
              <Header />

              <main className="relative container mx-auto min-h-screen] pt-40 md:pt-32">
                {/* Background glow effects (behind everything) */}
                <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                  <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-pink-600/20 blur-3xl" />
                  <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-orange-600/20 blur-3xl" />
                </div>

                {/* Page content (above glow) */}
                <div className="relative z-10">{children}</div>
              </main>

              <Footer />
            </ConvexClientProvider>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
