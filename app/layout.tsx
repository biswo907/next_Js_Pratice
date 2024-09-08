import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { useRouter } from "next/router";

export const metadata: Metadata = {
  title: "Movie app",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-100">
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
