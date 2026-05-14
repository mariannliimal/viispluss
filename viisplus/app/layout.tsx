import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Viis+ Paigaldus — Kleebiste paigalduse ekspert",
  description:
    "Professionaalne kleebiste paigaldus fassaadidele, kontoritele ja erilahenduste projektidele üle Eesti.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="et">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
