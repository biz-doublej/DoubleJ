import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary } from "@/lib/i18n/dictionaries";
import LiquidBackground from "@/components/LiquidBackground";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "DoubleJ",
    template: "%s | DoubleJ",
  },
  description: "DoubleJ corporate website",
  metadataBase: new URL("https://example.com"),
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const dict = await getDictionary(params.locale as any);
  return (
    <html lang={params.locale} className={inter.variable}>
      <body>
        <LiquidBackground />
        <div className="site">
          <Header
            locale={params.locale}
            labels={dict.nav}
            brand={dict.brand}
          />
          <main>{children}</main>
          <Footer legal={dict.footer.legal} />
        </div>
      </body>
    </html>
  );
}
