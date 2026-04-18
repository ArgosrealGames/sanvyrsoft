import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sanvyrsoft | Architects of the Digital Future",
  description: "Global enterprise specializing in Software Development, SaaS, Games, and Enterprise Management Systems.",
  keywords: "Sanvyrsoft, Software Development, SaaS, Games, ERP, Management Systems, AI, Technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
