import { getDictionary } from "@/lib/i18n/dictionaries";

export default async function InvestorsPage({ params }: { params: { locale: string } }) {
  const t = await getDictionary(params.locale as any);
  return (
    <section>
      <div className="container">
        <h2>{t.pages.investors.title}</h2>
        <div className="cards">
          <div className="card">
            <h3>IR</h3>
            <p>
              {t.brand} investment overview and growth plan.
            </p>
            <a className="btn" href="/ir/DoubleJ_IR.pdf" download>
              {t.pages.investors.downloadDeck}
            </a>
            <p style={{color:'var(--muted)', marginTop:8}}>
              Place your IR PDF at <code>public/ir/DoubleJ_IR.pdf</code>.
            </p>
          </div>
          <div className="card">
            <h3>Partners</h3>
            <p>파트너 로고/협업 사례 영역</p>
          </div>
          <div className="card">
            <h3>Contact</h3>
            <a className="btn primary" href={`/${params.locale}/contact`}>
              {t.ctas.contactPartnership}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
