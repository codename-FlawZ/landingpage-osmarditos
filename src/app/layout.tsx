import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Conheça Osmar Ditos",
  description: "Osmar Ditos é uma banda de Bluegrass/Punk Roça que tem tudo pra te impressionar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
