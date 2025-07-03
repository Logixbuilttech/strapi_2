import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/comman/Header/Header";
import Footer from "@/components/comman/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RenewEdge Solutions",
  description:
    "Empowering Smarter Growth Through Technology, Design, and Digital Innovation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Archivo:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
