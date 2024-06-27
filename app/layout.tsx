import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReactQueryProviders from "./_provider/reactQuery-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Playground",
  description: "nextjs 갖고 놀자!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactQueryProviders>
        <body className={inter.className}>{children}</body>
      </ReactQueryProviders>
    </html>
  );
}
