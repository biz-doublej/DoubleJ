import { getDictionary } from "@/lib/i18n/dictionaries";

export default async function BusinessPage({ params }: { params: { locale: string } }) {
  const t = await getDictionary(params.locale as any);
  return (
    <section>
      <div className="container">
        <h2>{t.pages.business.title}</h2>
        <ul className="cards">
          <li id="ecommerce" className="card">
            <h3>🛒 E-commerce</h3>
            <p>글로벌 홈 & 인테리어 중심 쇼핑몰 (드롭시핑 기반)</p>
          </li>
          <li id="ai" className="card">
            <h3>🤖 AI Services</h3>
            <p>CampusON (대학교 특화 AI 교육 플랫폼), 범용 SaaS AI</p>
          </li>
          <li id="blockchain" className="card">
            <h3>⛏ Blockchain</h3>
            <p>미국 내 코인 마이닝 시설 구축 예정 · 장기적으로 장비 개발/판매</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
