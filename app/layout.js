import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/comman/Header/Header";
import Footer from "@/components/comman/Footer/Footer";
import qs from "qs";
import { fetchStrapi } from "@/lib/strapiApi";
import { globalPopulate } from "@/lib/populateMap";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RenewEdge Solutions",
  description:
    "Empowering Smarter Growth Through Technology, Design, and Digital Innovation",
};


export default async function RootLayout({ children }) {
   const global = await fetchStrapi('global', {
    populate: globalPopulate.populate,
    tag: 'global',
    revalidate: 3600,
  });
   

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
        <Header HeaderData={global.TopNav} />
        {children}
        <Footer FooterData={global.Footer}/>
      </body>
    </html>
  );
}
