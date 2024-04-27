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
    <html lang="en" className="h-full">
      <body
        className="h-full"
        style={{
          backgroundImage: "url('/assets/images/6106991.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        suppressHydrationWarning={true}
      >
        <main className="h-full relative">{children}</main>
      </body>
    </html>
  );
}
