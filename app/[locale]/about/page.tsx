import { getDictionary } from "@/lib/i18n/dictionaries";
import Teams from "@/components/Teams";
import StatsRow from "@/components/StatsRow";
import BrandShowcase from "@/components/BrandShowcase";
import VisionTiles from "@/components/VisionTiles";

export const dynamic = "force-static";

export default async function AboutPage({ params }: { params: { locale: string } }) {
  const t = await getDictionary(params.locale as any);
  return (
    <>
      <section className="about-hero">
        <div className="container about-grid">
          <div>
            <h1 style={{margin: 0}}>{t.brand}</h1>
            <p className="lead" style={{marginTop: 8}}>{t.pages.about.overview}</p>
            <p className="muted">{t.pages.about.identity}</p>
            <div className="badges" style={{margin: '14px 0 6px'}}>
              <span className="badge">{t.pages.about.founded}</span>
              <span className="badge">{t.pages.about.headquarters}</span>
              <span className="badge">Brand: DoubleJ</span>
            </div>
          </div>
          <div>
            <div className="glass holo tilt" aria-hidden="false">
              <div className="row" style={{justifyContent:'space-between'}}>
                <div className="row" style={{gap:10}}>
                  <img src="/image.png" alt="DoubleJ" width={36} height={36} style={{borderRadius:8}} />
                  <div>
                    <strong style={{display:'block'}}>DoubleJ</strong>
                    <small className="muted">Future‑ready digital platforms</small>
                  </div>
                </div>
                <span className="badge">{t.pages.about.founded}</span>
              </div>
              <div className="chips" style={{marginTop:12}}>
                <span className="chip">AI</span>
                <span className="chip">E‑commerce</span>
                <span className="chip">Blockchain</span>
              </div>
              <p style={{marginTop:12}}>{t.pages.about.vision}</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <StatsRow locale={params.locale} />
        </div>
      </section>

      <BrandShowcase locale={params.locale} />

      <section>
        <div className="container">
          <h2>{t.pages.about.values}</h2>
          <p>Global / Innovation / Trust</p>

          <Teams teams={t.pages.about.teams as any} title={t.pages.about.teamsTitle} />

          <h3 style={{marginTop: 18}}>{t.pages.about.history}</h3>
          <div className="timeline" aria-label="Company timeline">
            <div className="tl-item">
              <div className="tl-dot" />
              <div className="tl-content">
                <strong>2025.08</strong>
                <p style={{margin:0}}>Founded in the United States</p>
              </div>
            </div>
            <div className="tl-item">
              <div className="tl-dot" />
              <div className="tl-content">
                <strong>Present</strong>
                <p style={{margin:0}}>Building user‑centric platforms across AI and commerce</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <VisionTiles locale={params.locale} />
    </>
  );
}
