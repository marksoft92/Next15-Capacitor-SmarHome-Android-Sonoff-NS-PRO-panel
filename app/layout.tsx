"use client"
import localFont from "next/font/local";

import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={` antialiased flex flex-row`}
      >
        {children}
      </body>
    </html>
  );
}
