import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grovia | Intelligent Automation Platform",
  description:
    "Grovia unifies AI voice agents, custom web experiences, and automation strategy so modern businesses can grow faster with less effort.",
  metadataBase: new URL("https://agentic-96d14797.vercel.app"),
  openGraph: {
    title: "Grovia | Intelligent Automation Platform",
    description:
      "AI voice agents, custom digital experiences, and growth strategy inside one platform tailored to modern business teams.",
    url: "https://agentic-96d14797.vercel.app",
    siteName: "Grovia",
    images: [
      {
        url: "https://dummyimage.com/1200x630/0f172a/ffffff.png&text=Grovia",
        width: 1200,
        height: 630,
        alt: "Grovia platform overview illustration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grovia | Intelligent Automation Platform",
    description:
      "Automate what slows teams down—voice agents, websites, and operations optimized in one Grovia workspace.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
