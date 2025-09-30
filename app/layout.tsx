import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevCoder",
  description:
    "DevCoder - software engineer, problem solver, and tech enthusiast.",
  icons: {
    icon: "/favicon.svg",
  },
  keywords: [
    "devcoder",
    "devCoder",
    "DevCoder",
    "Devcoder",
    "developer",
    "software developer",
    "full-stack developer",
    "programmer",
    "coding",
    "technology",
    "web development",
    "frontend",
    "backend",
  ],
  authors: [{ name: "DevCoder", url: "https://devcoder.me" }],
  creator: "DevCoder",
  publisher: "DevCoder",
  openGraph: {
    title: "DevCoder",
    description:
      "DevCoder - software engineer, problem solver, and tech enthusiast.",
    url: "https://devcoder.me",
    siteName: "DevCoder",
    images: [
      {
        url: "/favicon.svg",
        alt: "DevCoder",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceCodePro.variable} antialiased text-sm md:text-base lg:text-lg min-w-0 md:min-w-[60em] px-3 md:px-0`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
