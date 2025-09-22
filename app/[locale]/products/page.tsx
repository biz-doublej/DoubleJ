import { getDictionary } from "@/lib/i18n/dictionaries";

export default async function ProductsPage({ params }: { params: { locale: string } }) {
  const t = await getDictionary(params.locale as any);
  return (
    <section>
      <div className="container">
        <h2>{t.pages.products.title}</h2>
        <ul className="cards">
          <li id="campuson" className="card">
            <h3>CampusON</h3>
            <p>대학교 특화 AI 교육 플랫폼. 강의/과제/연구를 위한 AI 도구 제공.</p>
          </li>
          <li id="ecommerce" className="card">
            <h3>E-commerce Brand</h3>
            <p>글로벌 홈 & 인테리어 쇼핑몰. 드롭시핑/글로벌 풀필먼트.</p>
          </li>
          <li id="saas" className="card">
            <h3>AI SaaS</h3>
            <p>팀/기업용 AI 도구. 구독제 및 API 제공.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
