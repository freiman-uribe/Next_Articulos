import type { Metadata } from "next";
import { PT_Serif } from "next/font/google";
import { SiteFooter, SiteHeader } from "@/features/layout";
import "./globals.css";

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Next Articulos",
    template: "%s | Next Articulos",
  },
  description:
    "Proyecto editorial construido con Next.js para publicar articulos con una base moderna y escalable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${ptSerif.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SiteHeader />

        <main className="flex-1 mx-auto w-full max-w-[1040px] px-8 pt-10 pb-16">
          {children}
        </main>

        <SiteFooter />
      </body>
    </html>
  );
}
