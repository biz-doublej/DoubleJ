'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

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
};

export default function Nav({ locale, labels }: Props) {
  const pathname = usePathname();
  const links = [
    { href: `/${locale}`, label: labels.home },
    { href: `/${locale}/about`, label: labels.about },
    { href: `/${locale}/business`, label: labels.business },
    { href: `/${locale}/products`, label: labels.products },
    { href: `/${locale}/investors`, label: labels.investors },
    { href: `/${locale}/news`, label: labels.news },
    { href: `/${locale}/contact`, label: labels.contact },
  ];

  return (
    <nav className="nav">
      {links.map((l) => {
        const active = pathname === l.href || pathname.startsWith(l.href + "/");
        return (
          <Link
            key={l.href}
            href={l.href}
            className={active ? "nav-link active" : "nav-link"}
            aria-current={active ? 'page' : undefined}
          >
            {l.label}
          </Link>
        );
      })}
    </nav>
  );
}
