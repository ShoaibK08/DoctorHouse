import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // add or remove weights as needed
});

export const metadata: Metadata = {
  title: "Doctor House",
  description: "Doctor House",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.svg" />
      </head>
      <body className={poppins.className} suppressHydrationWarning={true}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
