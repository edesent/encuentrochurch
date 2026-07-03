import type { Metadata, Viewport } from "next";
import { Archivo, Inter, Caveat } from "next/font/google";
import { SITE } from "@/config/site";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Iglesia Bilingüe en Houston`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "iglesia hispana Houston",
    "iglesia bilingüe Houston",
    "iglesia cristiana Houston",
    "bilingual church Houston",
    "Hispanic church Houston TX",
    "iglesia en español Houston",
    "Encuentro Church",
    "plantación de iglesia Houston",
    "iglesia 77035",
    "church near me Houston",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${SITE.name} — Iglesia Bilingüe en Houston`,
    description: SITE.shortDescription,
    url: SITE.url,
    type: "website",
    locale: "es_US",
    alternateLocale: "en_US",
    siteName: SITE.name,
    images: [
      {
        url: "/og-image.jpg",
        width: 1400,
        height: 1080,
        alt: "Encuentro Church — Iglesia hispana bilingüe en Houston",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Iglesia Bilingüe en Houston`,
    description: SITE.shortDescription,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: SITE.name,
    statusBarStyle: "black-translucent",
  },
  formatDetection: { telephone: true, email: true, address: true },
  category: "religion",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: SITE.themeColor,
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${archivo.variable} ${inter.variable} ${caveat.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-cream">{children}</body>
    </html>
  );
}
