import type { Metadata } from "next";
import { geistSans, geistMono } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Example Next.js Product",
  description: "Example Next.js Product",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
