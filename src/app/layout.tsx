import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meet Room App",
  description: "This is app for video conferences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" h-full">
      <body className="h-full bg-gray-200">
        <main className="h-full">{children}</main>
      </body>
    </html>
  );
}
