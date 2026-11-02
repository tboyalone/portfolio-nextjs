import type { Metadata } from "next";
import type { ReactNode } from "react";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import "./globals.css";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: {
    default: "Alex Morgan — Frontend Developer",
    template: "%s — Alex Morgan",
  },
  description:
    "The portfolio of Alex Morgan, a frontend developer building thoughtful digital experiences.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <main className="site-main" id="main-content">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
