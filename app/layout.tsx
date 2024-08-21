import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Daniel Hernandez',
  description: '@luisdanielhj.com',
  openGraph: {
    images: [
      {
        url: '/daniel-hernandez.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    images: ['/daniel-hernandez.png'],
  },
  icons: {
    icon: '/daniel.png',
    apple: '/daniel.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}