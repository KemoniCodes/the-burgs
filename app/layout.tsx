import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Banner from "./components/home/banner";

const neueMontreal = localFont({
  src: "./fonts/PPNeueMontreal-Book.otf",
  variable: "--font-neueMontreal",
  weight: "200 300 400 500 600",
});

const rightGrotesk = localFont({
  src: "./fonts/PPRightGroteskText-Regular.otf",
  variable: "--font-rightGrotesk",
  weight: "200 300 400 500 600",
});

export const metadata: Metadata = {
  title: "The 'Burgs",
  description:
    "Your friendly neighborhood burger joint. 100% grass-fed beef brought to you by your pals at The 'Burgs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${neueMontreal} ${rightGrotesk} antialiased bg-bunBeige`}>
        <Banner />
        {children}
      </body>
    </html>
  );
}
