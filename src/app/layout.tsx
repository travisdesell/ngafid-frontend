import type { Metadata } from "next";
import { StoreProvider } from "./StoreProvider"; 

import './global.css';

export const metadata: Metadata = {
  title: "The National General Aviation Flight Information Database (NGAFID)",
  description: "Generated by create next app",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
    <html lang="en">
      <body>{children}</body>
    </html>
    </StoreProvider>
  );
}

export default RootLayout;