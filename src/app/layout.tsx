import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
//coloca a variable para poder mudar quando quiser.
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
//tirou o description e mudou o titulo para DevStore
export const metadata: Metadata = {
  title: "DevStore",
};
//mudou o className para inter.variable pra ser mais dinamico na hora de mudar
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={inter.variable} lang="pt">
      <body className="bg-zinc-950 text-zinc-50 antialiased">{children}</body>
    </html>
  );
}

//lembrar de ver os arquivos talwind.config.ts, global.css, e o page.tsx que mudou tudo do original quando cria o projeto