import { getDictionary } from "@/lib/i18n/dictionaries";
import Teams from "@/components/Teams";

export const dynamic = "force-static";

export default async function AboutPage({ params }: { params: { locale: string } }) {
  const t = await getDictionary(params.locale as any);
  return (
    <section>
      <div className="container">
        <h2>{t.pages.about.title}</h2>
        <p>{t.pages.about.overview}</p>
        <p className="muted">{t.pages.about.identity}</p>

        <div className="badges" style={{margin: '14px 0 6px'}}>
          <span className="badge">{t.pages.about.founded}</span>
          <span className="badge">{t.pages.about.headquarters}</span>
          <span className="badge">Brand: DoubleJ</span>
        </div>

        <h3 style={{marginTop: 18}}>{t.pages.about.values}</h3>
        <p>Global / Innovation / Trust</p>

        <Teams teams={t.pages.about.teams as any} title={t.pages.about.teamsTitle} />

        <h3 style={{marginTop: 18}}>{t.pages.about.history}</h3>
        <p>2025.08 — Present</p>
      </div>
    </section>
  );
}
