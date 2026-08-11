import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Sanvyrsoft | Inovação em Tecnologia, HealthTech e Games",
  description: "Desenvolvimento de tecnologias de alto impacto: SML-3000 (Sistema Patenteado de Prevenção de Quedas Hospitalares), Sanders Mocap Studio e Games para Consoles.",
  keywords: "Sanvyrsoft, SML-3000, Prevenção de Quedas, Healthtech, Patente INPI, Sanders Mocap, Dark Mean City, PlayStation, Inovação",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
