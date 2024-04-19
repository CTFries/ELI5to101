import type { Metadata } from "next";
import { Cabin_Sketch, Proza_Libre } from "next/font/google";
import { Navbar } from "./components/nav";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";
import "app/global.css";

const cabinSketch = Cabin_Sketch({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "ELI5 to 101",
    template: "%s | ELI5 to 101",
  },
  description: "",
  openGraph: {
    title: "",
    description: "",
    url: baseUrl,
    siteName: "ELI5 to 101",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cabinSketch.className}>
      <body>
        <main className="min-h-screen">
          <Navbar />
          <article className="prose p-6 antialiased max-w-5xl min-w-xl mx-auto">
            {children}
          </article>
          <Footer />
        </main>
      </body>
    </html>
  );
}
