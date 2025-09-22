import Link from "next/link";
import Nav from "@/components/Nav";
import LocaleSwitcher from "@/components/LocaleSwitcher";

type Props = {
  locale: string;
  labels: {
    home: string;
    about: string;
    business: string;
    products: string;
    investors: string;
    news: string;
    contact: string;
  };
  brand?: string;
};

export default function Header({ locale, labels, brand = "DoubleJ" }: Props) {
  return (
    <header className="header">
      <div className="container row space-between">
        <Link href={`/${locale}`} className="brand">
          <img src="/image.png" alt={brand} width={28} height={28} />
          <span>{brand}</span>
        </Link>
        <div className="row" style={{ gap: 8 }}>
          <Nav locale={locale} labels={labels} />
          <LocaleSwitcher current={locale} />
        </div>
      </div>
    </header>
  );
}
