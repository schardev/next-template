import siteConfig from "@/lib/siteConfig";
import "@/styles/global.css";
import clsx from "clsx";
import { type Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-family-sans",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      // { url: "/icon.svg", type: "image/svg+xml" },
    ],
    // apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    title: {
      default: siteConfig.title,
      template: `%s | ${siteConfig.title}`,
    },
    description: siteConfig.description,
    siteName: siteConfig.title,
    // url: <site url>,
    // images: [ <og image> ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          `${inter.variable} bg-black text-white min-h-screen font-sans`,
        )}>
        {children}
      </body>
    </html>
  );
}
