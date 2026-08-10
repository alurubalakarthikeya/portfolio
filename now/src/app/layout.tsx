import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Suspense } from "react";
import "./globals.css";
import MobileNav from "./components/MobileNav";
import SearchKeywordHighlighter from "./components/SearchKeywordHighlighter";
import PageLoader from "./components/PageLoader";
import ResumeDownloadFab from "./components/ResumeDownloadFab";
import DisableCopySelect from "./components/DisableCopySelect";
import RoutePixelBackground from "./components/RoutePixelBackground";
import ThemeProvider from "./components/ThemeProvider";
import ThemeToggle from "./components/ThemeToggle";
import MoonButton from "./components/MoonButton";
import MusicToggleWrapper from "./components/MusicToggleWrapper";
import logo from "./assets/imgs/logo.png";

const doto = localFont({
  src: "./assets/fonts/Doto/Doto-VariableFont_ROND,wght.ttf",
  variable: "--font-doto",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Karthikeya | Home",
    template: "Karthikeya | %s",
  },
  description: "Portfolio of Bala Karthikeya, Full Stack & ServiceNow Developer",
  icons: {
    icon: logo.src,
    shortcut: logo.src,
    apple: logo.src,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Be+Vietnam+Pro:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        {/* Inline script: sets data-theme synchronously before hydration to prevent flash / hydration mismatch */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('portfolio-theme');
                  if (t === 'light' || t === 'dark') {
                    document.documentElement.dataset.theme = t;
                  } else {
                    // Mobile: dark mode, Desktop: light mode
                    var isMobile = window.innerWidth < 768;
                    document.documentElement.dataset.theme = isMobile ? 'dark' : 'light';
                  }
                } catch(e) {
                  var isMobile = window.innerWidth < 768;
                  document.documentElement.dataset.theme = isMobile ? 'dark' : 'light';
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${doto.variable} antialiased min-h-screen flex flex-col`}>
        <ThemeProvider>
          <DisableCopySelect />
          <RoutePixelBackground />
          <PageLoader />
          <Suspense fallback={null}>
            <SearchKeywordHighlighter />
          </Suspense>
          <ResumeDownloadFab />
          <ThemeToggle />
          <MoonButton />
          <MusicToggleWrapper />
          <div className="flex-1 w-full relative z-10 flex flex-col">
            {children}
          </div>
          <MobileNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
