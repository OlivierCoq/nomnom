import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "NomNom",
  description: "recipe app made by an annoyed dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="h-screen bg-zinc-300 dark:bg-zinc-900 text-neutral-800 dark:text-white font-mono"
      >
        {children}
      </body>
    </html>
  );
}
