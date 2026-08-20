import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Sanvyrsoft | Desenvolvimento de Software B2B/ERP, Engenharia Eletrônica & PICs, HealthTech e Games",
  description: "Desenvolvimento de tecnologia de alto impacto: Softwares de Gestão B2B e ERP, Projetos Eletrônicos com Microcontroladores PICs (chips), Equipamentos Hospitalares Patenteados (SML-3000) e Games para Consoles e PC.",
  keywords: "Sanvyrsoft, Software de Gestao, ERP, B2B, Projetos Eletronicos, Microcontroladores PIC, SML-3000, HealthTech, Equipamentos Hospitalares, Games PC Console, PlayStation, Inovacao",
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
