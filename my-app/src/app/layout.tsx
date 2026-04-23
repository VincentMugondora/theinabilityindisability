import type { Metadata } from "next";
import "../styles/globals.css";
import SiteNavbar from "@/components/layout/SiteNavbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "The Ability in Disability Trust | Inclusive Community Support",
  description: "Supporting inclusive development, empowerment and community impact in Zimbabwe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col font-sans">
        <SiteNavbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
