'use client';

import { useState } from 'react';
import Reveal from "@/components/Reveal";

type Props = { locale: string };

export default function BrandShowcase({ locale }: Props) {
  const ko = locale === 'ko';
  const zh = locale === 'zh';

  const brands = ko
    ? [
        {
          key: 'oniv',
          name: 'Oniv',
          tagline: 'Warm Commerce · Modern Lifestyle',
          chips: ['Home & Lifestyle', 'AI 큐레이션', '글로벌'],
          details: [
            '취향 우선의 따뜻한 쇼핑 경험',
            '개인화 추천과 프로모션 자동화',
            '미국 → 북미/유럽 확장',
          ],
        },
        {
          key: 'timora',
          name: 'Timora AI',
          tagline: 'Campus Scheduling AI',
          chips: ['자동 시간표', '공실 분석', '대여/결제', 'XAI'],
          details: [
            'AI 기반 강의/공간 편성',
            '대시보드로 운영 인사이트 제공',
            '투명한 조정이 가능한 Explainable AI',
          ],
        },
        {
          key: 'onivai',
          name: 'Oniv AI',
          tagline: 'Personalized Shopping Recommender',
          chips: ['Behavior Graph', 'Promo 자동화', '다국어'],
          details: [
            '검색·구매·체류 데이터로 취향 파악',
            '상품/프로모션 개인화',
            'SaaS 형태로 파트너 제공 가능',
          ],
        },
      ]
    : zh
    ? [
        {
          key: 'oniv',
          name: 'Oniv',
          tagline: 'Warm Commerce · Modern Lifestyle',
          chips: ['家居生活', 'AI 推荐', '全球'],
          details: ['温暖体验的电商平台', '个性化与自动化', '美国起步，扩展至北美/欧洲'],
        },
        {
          key: 'timora',
          name: 'Timora AI',
          tagline: 'Campus Scheduling AI',
          chips: ['自动排课', '空闲分析', '租借/支付', 'XAI'],
          details: ['AI 排课与空间编排', '仪表盘洞察', '可解释 AI'],
        },
        {
          key: 'onivai',
          name: 'Oniv AI',
          tagline: 'Personalized Shopping Recommender',
          chips: ['行为图谱', '促销自动化', '多语言'],
          details: ['理解偏好', '商品/活动个性化', 'SaaS 对外提供'],
        },
      ]
    : [
        {
          key: 'oniv',
          name: 'Oniv',
          tagline: 'Warm Commerce · Modern Lifestyle',
          chips: ['Home & Lifestyle', 'AI Curation', 'Global'],
          details: ['Warm, taste‑first shopping', 'Personalized promotions', 'US → North America/Europe'],
        },
        {
          key: 'timora',
          name: 'Timora AI',
          tagline: 'Campus Scheduling AI',
          chips: ['Auto Timetable', 'Vacancy Analytics', 'Rent/Payments', 'XAI'],
          details: ['AI scheduling', 'Ops insights via dashboards', 'Explainable adjustments'],
        },
        {
          key: 'onivai',
          name: 'Oniv AI',
          tagline: 'Personalized Shopping Recommender',
          chips: ['Behavior Graph', 'Promo Automation', 'Multilingual'],
          details: ['Preference modeling', 'Product/promo personalization', 'Offered as SaaS'],
        },
      ];

  const [active, setActive] = useState(brands[0].key);
  const cta = ko ? '자세히' : zh ? '了解更多' : 'Learn more';

  return (
    <section>
      <div className="container">
        <div className="brand-grid">
          {brands.map((b, i) => {
            const is = active === b.key;
            return (
              <Reveal key={b.key} variant="up" delay={i * 90}>
                <div
                  className={`brand-card${is ? ' active' : ''}`}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActive(b.key)}
                  onKeyDown={(e) => e.key === 'Enter' && setActive(b.key)}
                  aria-expanded={is}
                >
                  <div className="brand-head">
                    <div className="brand-mark" aria-hidden>◎</div>
                    <div>
                      <strong>{b.name}</strong>
                      <div className="muted" style={{fontSize:13}}>{b.tagline}</div>
                    </div>
                  </div>
                  <div className="chips" style={{marginTop:10}}>
                    {b.chips.map((c) => (
                      <span key={c} className="chip">{c}</span>
                    ))}
                  </div>
                  {is && (
                    <div className="brand-detail">
                      <ul>
                        {b.details.map((d) => (
                          <li key={d}>{d}</li>
                        ))}
                      </ul>
                      <a className="btn" href={`/${locale}/products`}>{cta}</a>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
