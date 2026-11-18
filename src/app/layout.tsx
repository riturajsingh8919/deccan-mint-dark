import type { Metadata } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";

const editorial = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500"],
  style: ["normal", "italic"],
  variable: "--font-editorial",
  display: "swap",
});

const body = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const description = "Deccan Mint by Sai Surya Gold. Explore gold and silver coins for personal collections, gifting and meaningful occasions.";

export const metadata: Metadata = {
  metadataBase: new URL("https://deccanmint.com"),
  title: {
    default: "Deccan Mint | Gold & Silver Coins by Sai Surya Gold",
    template: "%s | Deccan Mint",
  },
  description,
  openGraph: {
    title: "Deccan Mint | Gold & Silver Coins",
    description,
    siteName: "Deccan Mint",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/images/hero-metals.webp", width: 1536, height: 854, alt: "An illustrative gold and silver coin study" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/hero-metals.webp"] },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      className={`${editorial.variable} ${body.variable} scroll-pt-24`}
    >
      <body className="min-h-screen bg-[#12110f] font-(family-name:--font-body) text-[#f3ede1] antialiased scheme-dark selection:bg-[#d7b16d] selection:text-[#17130e] [&_:focus-visible]:outline-2 [&_:focus-visible]:outline-offset-4 [&_:focus-visible]:outline-[#e1bc7b]">
        {children}
      </body>
    </html>
  );
}
