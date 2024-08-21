import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daniel Hernandez",
  description: "@luisdanielhj.com",
  openGraph: {
    images: [
      {
        url: "/daniel-hernandez.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    images: ["/daniel-hernandez.png"],
  },
  icons: {
    icon: "/daniel.png",
    apple: "/daniel.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:title" content="Daniel Hernandez" />
        <meta property="og:description" content="@luisdanielhj" />
        <meta property="og:image" content="/daniel-hernandez.png" />
        <meta property="og:url" content="https://luisdanielhj.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content="/daniel-hernandez.png" />
        <meta name="twitter:image:type" content="website" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
        <meta property="og:image:alt" content="Daniel Hernandez" />
        <meta property="twitter:image:alt" content="Daniel Hernandez" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
