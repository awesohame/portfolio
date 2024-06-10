import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import { Toaster } from "react-hot-toast";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "awesohame",
  description: "awesohame's personal website",
  icons: {
    icon: "/assets/icon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-dark-2 text-light-1`}>
        {children}
        <Toaster />
      </body>

    </html>
  );
}
