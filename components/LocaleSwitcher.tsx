'use client';

import { usePathname, useRouter } from 'next/navigation';
import { locales } from '@/lib/i18n/locales';

export default function LocaleSwitcher({ current }: { current: string }) {
  const router = useRouter();
  const pathname = usePathname();

  function switchTo(next: string) {
    if (!pathname) return;
    const parts = pathname.split('/');
    if (locales.includes(parts[1] as any)) {
      parts[1] = next;
    } else {
      parts.splice(1, 0, next);
    }
    router.push(parts.join('/') || '/');
    document.cookie = `NEXT_LOCALE=${next};path=/;max-age=31536000`;
  }

  return (
    <div className="row" aria-label="Language switcher">
      {locales.map((l) => (
        <button
          key={l}
          className={l === current ? 'nav-link active' : 'nav-link'}
          onClick={() => switchTo(l)}
          style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

