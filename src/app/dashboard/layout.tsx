import type { Metadata } from "next";
import Header from "./header/page";
import "./styles.css";
import Footer from "./footer/page";


export const metadata: Metadata = {
  title: "Klima360 Web portal",
  description: "Generated klima360 web team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
        <Header />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
