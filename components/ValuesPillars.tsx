import Reveal from "@/components/Reveal";

type Props = { locale: string };

export default function ValuesPillars({ locale }: Props) {
  const ko = locale === 'ko';
  const zh = locale === 'zh';

  const t = ko
    ? {
        title: '핵심 가치',
        pillars: [
          { icon: '🌍', title: 'Global', desc: '로컬 공감과 글로벌 스케일을 동시에 추구합니다.' },
          { icon: '⚡️', title: 'Innovation', desc: '빠르게 실험하고 학습하며, 안전하게 확장합니다.' },
          { icon: '🛡️', title: 'Trust', desc: '프라이버시 우선, 투명한 운영, 책임 있는 AI.' },
        ],
      }
    : zh
    ? {
        title: '核心价值',
        pillars: [
          { icon: '🌍', title: 'Global', desc: '以本地共情服务全球规模。' },
          { icon: '⚡️', title: 'Innovation', desc: '快速试验与学习，安全扩展。' },
          { icon: '🛡️', title: 'Trust', desc: '隐私优先、透明运营、负责任的 AI。' },
        ],
      }
    : {
        title: 'Core Values',
        pillars: [
          { icon: '🌍', title: 'Global', desc: 'Local empathy with global scale.' },
          { icon: '⚡️', title: 'Innovation', desc: 'Experiment fast, learn faster, scale safely.' },
          { icon: '🛡️', title: 'Trust', desc: 'Privacy‑first, transparent ops, responsible AI.' },
        ],
      };

  return (
    <section>
      <div className="container">
        <h2>{t.title}</h2>
        <div className="pillars">
          {t.pillars.map((p, i) => (
            <Reveal key={p.title} variant="up" delay={i * 90}>
              <div className="pillar glass">
                <div className="pillar-head">
                  <span className="pillar-icon" aria-hidden>
                    {p.icon}
                  </span>
                  <strong>{p.title}</strong>
                </div>
                <p style={{ margin: 0 }}>{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
