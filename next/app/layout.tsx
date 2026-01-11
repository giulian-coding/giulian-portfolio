import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "700"]
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"]
});

export const metadata: Metadata = {
  title: "Giulian | Portfolio",
  description: "Full-Stack Developer Portfolio - Building modern web applications with passion and precision",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable} suppressHydrationWarning>
      <body
        className={`${roboto.variable} ${robotoMono.variable} antialiased min-h-screen`}
      >
        <ThemeProvider>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
