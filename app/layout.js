import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/comman/Header/Header";
import Footer from "@/components/comman/Footer/Footer";
import qs from "qs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RenewEdge Solutions",
  description:
    "Empowering Smarter Growth Through Technology, Design, and Digital Innovation",
};

async function getHeaderData() {
  const query = qs.stringify(
    {
      populate: {
        TopNav: {
          populate: {
            logo: { populate: '*' },
            headerLink: { populate: '*' },
          },
        },
      },
    },
    { encodeValuesOnly: true }
  );

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/global?${query}`,
      {
        next: { tags: ["global"], revalidate: 3600 },
      }
    );

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Strapi fetch error in layout:", res.status, errorText);
      return [];
    }

    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching header menu links:", error);
    return [];
  }
}


async function getFooterData() {
  const query = qs.stringify(
    {
      populate: {
        Footer: {
          populate : {
            customization_prompt: { populate: '*' },
            start_journey: { populate: '*' },
            footer_social: { populate: '*' },
            footer_navigation: { populate: '*' },
            location: { populate: '*' },
            renew_edge: { populate: '*' },
            privacy_policy: { populate: '*' },
          }
        },
      },
    },
    { encodeValuesOnly: true }
  );

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/global?${query}`,
      {
        next: { tags: ["global"], revalidate: 3600 },
      }
    );

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Strapi fetch error in layout:", res.status, errorText);
      return [];
    }

    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching footer data:", error);
    return [];
  }
}


export default async function RootLayout({ children }) {
 const HeaderData = await getHeaderData();
  const FooterData = await getFooterData();
   console.log("🚀 ~ RootLayout ~ FooterData:", JSON.stringify(FooterData))
   

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
        <Header HeaderData={HeaderData} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
