type Props = { locale: string };

export default function VisionTiles({ locale }: Props) {
  const ko = locale === 'ko';
  const zh = locale === 'zh';

  const t = ko
    ? {
        title: '우리의 비전',
        short: '단기',
        mid: '중기',
        long: '장기',
        shortP: '글로벌 쇼핑 플랫폼 확장 (Oniv)',
        midP: 'AI SaaS 플랫폼 안정화 (Timora, Oniv AI)',
        longP: '블록체인·하드웨어 기반 차세대 생태계',
      }
    : zh
    ? {
        title: '愿景',
        short: '短期',
        mid: '中期',
        long: '长期',
        shortP: '全球电商平台扩张（Oniv）',
        midP: 'AI SaaS 平台稳定（Timora, Oniv AI）',
        longP: '区块链/硬件驱动的新生态',
      }
    : {
        title: 'Our Vision',
        short: 'Short‑term',
        mid: 'Mid‑term',
        long: 'Long‑term',
        shortP: 'Expand global shopping platform (Oniv)',
        midP: 'Stabilize AI SaaS (Timora, Oniv AI)',
        longP: 'Next‑gen stack with blockchain/hardware',
      };

  return (
    <section>
      <div className="container">
        <h2>{t.title}</h2>
        <div className="tiles">
          <div className="tile">
            <div className="badge">{t.short}</div>
            <p>{t.shortP}</p>
          </div>
          <div className="tile">
            <div className="badge">{t.mid}</div>
            <p>{t.midP}</p>
          </div>
          <div className="tile">
            <div className="badge">{t.long}</div>
            <p>{t.longP}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

