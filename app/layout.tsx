import type { Metadata } from "next";
import { Fira_Code as firaCode } from "next/font/google";
import "./globals.css";
import MyApp from "@/components/_app";
import CustomCursor from "@/components/custom-cursor";

const fira = firaCode({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CodaBytez",
    template: "%s | CodaBytez",
  },
  description:
    "Welcome to my world!!! I'm a Frontend Web Developer. This portfolio features a variety of beautiful, responsive and functional websites created using Tailwind CSS, React, Next.js, and other modern web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fira.variable}>
        <CustomCursor />
        <MyApp>{children}</MyApp>
      </body>
    </html>
  );
}
