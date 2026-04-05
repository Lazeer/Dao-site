import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.daorest.ru"),
  title: {
    default: "DAO",
    template: "%s | DAO"
  },
  description: "Premium modern Asian bistro in Moscow."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
