import { getDictionary } from "@/lib/i18n/dictionaries";
import Reveal from "@/components/Reveal";

export default async function HomePage({ params }: { params: { locale: string } }) {
  const dict = await getDictionary(params.locale as any);
  return (
    <section className="hero">
      <div className="container">
        <Reveal variant="up" delay={0}>
          <h1>{dict.brand}</h1>
        </Reveal>
        <Reveal variant="up" delay={70}>
          <p className="lead">{dict.slogan}</p>
        </Reveal>

        <Reveal variant="up" delay={120}>
          <div className="cta-row" style={{ marginBottom: 10 }}>
            <a className="btn primary" href={`/${params.locale}/business#ecommerce`}>{dict.ctas.ecommerce}</a>
            <a className="btn" href={`/${params.locale}/business#ai`}>{dict.ctas.ai}</a>
            <a className="btn" href={`/${params.locale}/business#blockchain`}>{dict.ctas.blockchain}</a>
            <a className="btn" href={`/${params.locale}/about`}>{dict.ctas.about}</a>
          </div>
        </Reveal>

        <Reveal variant="up" delay={180}>
          <div className="cta-row">
            <a className="btn" href={`/${params.locale}/products`}>{dict.ctas.getStarted}</a>
            <a className="btn" href={`/${params.locale}/products#ecommerce`}>{dict.ctas.shopNow}</a>
            <a className="btn" href={`/${params.locale}/investors`}>{dict.ctas.contactPartnership}</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
