import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://porfolioin1597.vercel.app/"),

  title: "Sheikh Siam | Software Developer Portfolio",
  description:
    "Sheikh Siam is a premium software developer specializing in high-fidelity web experiences and modern applications.",

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  openGraph: {
    title: "Sheikh Siam | Software Developer Portfolio",
    description:
      "Sheikh Siam is a premium software developer specializing in high-fidelity web experiences and modern applications.",
    url: "https://porfolioin1597.vercel.app/",
    siteName: "Sheikh Siam Portfolio",
    images: [
      {
        url: "/opengraph-image.png",   // ✅ handled by Next.js in src/app/
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sheikh Siam | Software Developer Portfolio",
    description:
      "Sheikh Siam is a premium software developer specializing in high-fidelity web experiences and modern applications.",
    images: ["/opengraph-image.png"],
  },
};

import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-dark-bg text-white">
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}