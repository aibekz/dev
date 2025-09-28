import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevCoder | devcoder.me | devcoder.xyz",
  description: "DevCoder - Crafting Code, Building Dreams. Full-Stack Developer | Open Source Enthusiast | Tech Blogger",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceCodePro.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
