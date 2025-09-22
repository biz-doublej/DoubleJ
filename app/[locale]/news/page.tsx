import { getDictionary } from "@/lib/i18n/dictionaries";

export default async function NewsPage({ params }: { params: { locale: string } }) {
  const t = await getDictionary(params.locale as any);
  return (
    <section>
      <div className="container">
        <h2>{t.pages.news.title}</h2>
        <p style={{ color: 'var(--muted)' }}>
          Company updates, tech blog, research, and hiring news.
        </p>
        <ul className="cards">
          <li className="card">
            <h3>Welcome to DoubleJ News</h3>
            <p>첫 포스트를 여기에 게시하세요.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
