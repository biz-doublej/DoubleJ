import { getDictionary } from "@/lib/i18n/dictionaries";
import Teams from "@/components/Teams";

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

      {/* Brands section (ko locale content as provided) */}
      {params.locale === 'ko' && (
        <section>
          <div className="container">
            <h2>주요 브랜드</h2>
            <ul className="cards">
              <li className="card">
                <h3>Oniv</h3>
                <p><strong>Warm Commerce, Modern Lifestyle</strong><br />
                Oniv는 단순한 쇼핑몰이 아니라, 고객의 취향을 먼저 이해하고 따뜻한 경험을 제공하는 글로벌 이커머스 플랫폼입니다.</p>
                <ul>
                  <li>Home & Lifestyle 중심 인테리어, 생활용품, 디자인 제품 드롭쉬핑</li>
                  <li>AI 기반 큐레이션으로 개인 맞춤형 추천 제공</li>
                  <li>미국 시장을 시작으로 캐나다, 유럽으로 확장 예정</li>
                </ul>
              </li>
              <li className="card">
                <h3>Timora AI</h3>
                <p><strong>Campus Scheduling AI</strong><br />
                Timora는 대학의 수강신청 및 시간표 배정을 혁신하는 AI 플랫폼입니다.</p>
                <ul>
                  <li>AI 기반 자동 시간표 편성</li>
                  <li>공실 활용 분석 및 시각화 대시보드</li>
                  <li>외부 대여·결제 모듈 연동</li>
                  <li>Explainable AI로 투명한 조정 가능</li>
                </ul>
              </li>
              <li className="card">
                <h3>Oniv AI</h3>
                <p><strong>Personalized Shopping Recommender</strong><br />
                Oniv AI는 Oniv 전용 AI 추천 시스템이자, 외부 파트너에게 제공 가능한 SaaS 플랫폼입니다.</p>
                <ul>
                  <li>고객의 검색·구매·체류 데이터를 기반으로 취향 파악</li>
                  <li>개인 맞춤형 상품 및 프로모션 자동화</li>
                  <li>다국어 지원으로 글로벌 맞춤 경험 제공</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
      )}

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

      {/* Company overview section (ko) */}
      {params.locale === 'ko' && (
        <section>
          <div className="container">
            <h2>회사 개요</h2>
            <ul className="facts">
              <li className="fact"><strong>회사명</strong><span>DoubleJ</span></li>
              <li className="fact"><strong>창업자</strong><span>Gabriel (KR), William (US)</span></li>
              <li className="fact"><strong>브랜드</strong><span>Oniv, Timora, Oniv AI, Pawday(추후 런칭 예정)</span></li>
              <li className="fact"><strong>본사</strong><span>Philadelphia, USA</span></li>
              <li className="fact"><strong>개발 오피스</strong><span>Seoul, KR</span></li>
              <li className="fact"><strong>핵심 가치</strong><span>Global · Innovation · Trust</span></li>
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
