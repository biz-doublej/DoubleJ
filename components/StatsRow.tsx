import Reveal from "@/components/Reveal";

type Props = { locale: string };

export default function StatsRow({ locale }: Props) {
  const ko = locale === 'ko';
  const zh = locale === 'zh';

  const t = ko
    ? { founded: '창립', hq: '본사', dev: '개발 오피스' }
    : zh
    ? { founded: '创立', hq: '总部', dev: '研发办公室' }
    : { founded: 'Founded', hq: 'HQ', dev: 'Dev Office' };

  return (
    <div className="stat-cards">
      <Reveal variant="up" delay={0}>
        <div className="stat">
          <div className="stat-k">2025.08</div>
          <div className="stat-l">{t.founded}</div>
        </div>
      </Reveal>
      <Reveal variant="up" delay={90}>
        <div className="stat">
          <div className="stat-k">Philadelphia, USA</div>
          <div className="stat-l">{t.hq}</div>
        </div>
      </Reveal>
      <Reveal variant="up" delay={180}>
        <div className="stat">
          <div className="stat-k">Seoul, KR</div>
          <div className="stat-l">{t.dev}</div>
        </div>
      </Reveal>
    </div>
  );
}
