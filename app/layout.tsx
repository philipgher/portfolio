import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Archivo } from 'next/font/google'
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Philip Ghering - Full Stack NodeJS Developer",
  description: "Portfolio of Philip Ghering, a Full Stack NodeJS Developer with expertise in building scalable and secure cloud applications. Remote and on-site in The Netherlands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="fAI9FIFLZXjoM_aZMYg7N1WebaaQf0-Mi9lW9tJv0Gg" />
      </head>
      <body
        className={`${archivo.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
