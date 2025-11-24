import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";

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
        className={`${geistSans.variable} ${geistMono.variable} bg-linear-to-br from-gray-950 via-zinc-900 to-stone-900 text-white antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          
          <main className="md:32 relative container mx-auto min-h-screen pt-40">
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-pink-600/20 blur-3xl" />
              <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-orange-600/20 blur-3xl" />
            </div>

            <div className="relative z-10 min-h-[90vh]">{children}</div>

            {/* Footer */}

            <footer className="mx-auto max-w-7xl border-t border-gray-800/50 px-6 py-8">
              <div className="text-sm text-gray-400">
                Made with ❤️ by Gobi Mahato
              </div>
            </footer>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
