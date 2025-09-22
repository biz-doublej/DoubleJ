import type { Locale } from "./locales";

type Nav = {
  home: string;
  about: string;
  business: string;
  products: string;
  investors: string;
  news: string;
  contact: string;
};

export type Dict = {
  brand: string;
  slogan: string;
  ctas: {
    ecommerce: string;
    ai: string;
    blockchain: string;
    about: string;
    getStarted: string;
    shopNow: string;
    contactPartnership: string;
  };
  nav: Nav;
  footer: {
    legal: string;
  };
  pages: {
    about: {
      title: string;
      identity: string;
      vision: string;
      history: string;
      values: string;
      overview: string;
      founded: string; // e.g., 2025.08
      headquarters: string; // e.g., USA
      teamsTitle: string;
      teamAI: string;
      teamMarketing: string;
      teams: Array<{
        key: string;
        name: string;
        summary: string;
        description: string;
        services: string[];
        backends: string[];
      }>;
    };
    business: { title: string };
    products: { title: string };
    investors: { title: string; downloadDeck: string };
    news: { title: string };
    contact: { title: string; offices: string; email: string; phone: string };
  };
};

const ko: Dict = {
  brand: "DoubleJ",
  slogan: "DoubleJ – Global Innovation in E-commerce, AI & Blockchain",
  ctas: {
    ecommerce: "E-commerce",
    ai: "AI Services",
    blockchain: "Blockchain",
    about: "About Us",
    getStarted: "Get Started",
    shopNow: "Shop Now",
    contactPartnership: "Contact for Partnership",
  },
  nav: {
    home: "홈",
    about: "회사 소개",
    business: "사업 영역",
    products: "서비스 소개",
    investors: "투자자/파트너",
    news: "뉴스/블로그",
    contact: "문의",
  },
  footer: { legal: "사업자정보 · 이용약관 · 개인정보처리방침" },
  pages: {
    about: {
      title: "회사 소개",
      identity: "한국과 미국 창업자가 만든 글로벌 테크 스타트업",
      vision: "AI와 이커머스, 블록체인을 연결하는 차세대 혁신 생태계 구축",
      history: "연혁",
      values: "핵심 가치: Global / Innovation / Trust",
      overview: "DoubleJ는 미국에 본사를 둔 혁신적인 기술 회사입니다. 우리는 사용자 중심의 디지털 플랫폼을 개발하여 사람들이 더 나은 온라인 경험을 할 수 있도록 돕고 있습니다.",
      founded: "창립 2025.08",
      headquarters: "본사: 미국",
      teamsTitle: "주요 팀",
      teamAI: "DoubleJ AI — AI 연구팀",
      teamMarketing: "DoubleJ Marketing — 마케팅팀",
      teams: [
        {
          key: "ai",
          name: "DoubleJ AI",
          summary: "AI 연구팀",
          description:
            "대학교 특화 AI 플랫폼 CampusON과 범용 AI SaaS를 연구/개발합니다. 대화형 에이전트, RAG, 평가/관찰 도구를 포함합니다.",
          services: [
            "CampusON",
            "AI SaaS",
            "Conversational Agents",
            "Inference APIs",
          ],
          backends: [
            "Python/Node",
            "Next.js",
            "Vector DB (RAG)",
            "Model APIs",
            "GPU Inference",
            "AWS/GCP",
          ],
        },
        {
          key: "marketing",
          name: "DoubleJ Marketing",
          summary: "마케팅팀",
          description:
            "글로벌 이커머스 성장을 위한 퍼포먼스/콘텐츠/브랜딩을 운영합니다. 데이터 기반 의사결정과 자동화를 중시합니다.",
          services: [
            "E‑commerce Growth",
            "Performance Ads",
            "SEO/Content",
            "Brand Studio",
          ],
          backends: [
            "Headless Commerce",
            "CDP/CRM",
            "GA4/BigQuery",
            "ETL/Data Pipeline",
            "Email/SMS",
          ],
        },
      ],
    },
    business: { title: "사업 영역" },
    products: { title: "서비스 소개" },
    investors: { title: "투자자/파트너", downloadDeck: "IR Deck 다운로드" },
    news: { title: "뉴스/블로그" },
    contact: { title: "문의하기", offices: "글로벌 사무실", email: "이메일", phone: "전화" },
  },
};

const en: Dict = {
  brand: "DoubleJ",
  slogan: "DoubleJ – Global Innovation in E-commerce, AI & Blockchain",
  ctas: {
    ecommerce: "E-commerce",
    ai: "AI Services",
    blockchain: "Blockchain",
    about: "About Us",
    getStarted: "Get Started",
    shopNow: "Shop Now",
    contactPartnership: "Contact for Partnership",
  },
  nav: {
    home: "Home",
    about: "About Us",
    business: "Our Business",
    products: "Products & Platforms",
    investors: "Investors & Partners",
    news: "News & Insights",
    contact: "Contact",
  },
  footer: { legal: "Company · Terms · Privacy" },
  pages: {
    about: {
      title: "About Us",
      identity: "A global tech startup founded by Korean and US entrepreneurs",
      vision: "Building a next-gen innovation ecosystem connecting AI, E-commerce, and Blockchain",
      history: "Timeline",
      values: "Core Values: Global / Innovation / Trust",
      overview: "DoubleJ is an innovative technology company headquartered in the United States. We build user‑centric digital platforms that help people have better online experiences.",
      founded: "Founded 2025.08",
      headquarters: "HQ: United States",
      teamsTitle: "Key Teams",
      teamAI: "DoubleJ AI — Research",
      teamMarketing: "DoubleJ Marketing — Marketing",
      teams: [
        {
          key: "ai",
          name: "DoubleJ AI",
          summary: "AI Research Team",
          description:
            "We build CampusON (university-focused AI platform) and general-purpose AI SaaS: conversational agents, RAG, eval/observability.",
          services: [
            "CampusON",
            "AI SaaS",
            "Conversational Agents",
            "Inference APIs",
          ],
          backends: [
            "Python/Node",
            "Next.js",
            "Vector DB (RAG)",
            "Model APIs",
            "GPU Inference",
            "AWS/GCP",
          ],
        },
        {
          key: "marketing",
          name: "DoubleJ Marketing",
          summary: "Marketing Team",
          description:
            "We drive global e‑commerce growth across performance, content, and brand with data‑driven automation.",
          services: [
            "E‑commerce Growth",
            "Performance Ads",
            "SEO/Content",
            "Brand Studio",
          ],
          backends: [
            "Headless Commerce",
            "CDP/CRM",
            "GA4/BigQuery",
            "ETL/Data Pipeline",
            "Email/SMS",
          ],
        },
      ],
    },
    business: { title: "Our Business" },
    products: { title: "Products & Platforms" },
    investors: { title: "Investors & Partners", downloadDeck: "Download IR Deck" },
    news: { title: "News & Insights" },
    contact: { title: "Contact Us", offices: "Global Offices", email: "Email", phone: "Phone" },
  },
};

const zh: Dict = {
  brand: "DoubleJ",
  slogan: "DoubleJ – 电子商务、AI 与区块链的全球创新",
  ctas: {
    ecommerce: "电商",
    ai: "AI 服务",
    blockchain: "区块链",
    about: "关于我们",
    getStarted: "开始体验",
    shopNow: "立即购买",
    contactPartnership: "合作咨询",
  },
  nav: {
    home: "首页",
    about: "关于我们",
    business: "业务领域",
    products: "产品与平台",
    investors: "投资者与合作伙伴",
    news: "新闻与洞察",
    contact: "联系",
  },
  footer: { legal: "公司信息 · 条款 · 隐私" },
  pages: {
    about: {
      title: "关于我们",
      identity: "由韩国与美国创业者创立的全球科技初创公司",
      vision: "构建连接 AI、电商与区块链的下一代创新生态",
      history: "发展历程",
      values: "核心价值：全球化 / 创新 / 信任",
      overview: "DoubleJ 是一家总部位于美国的创新科技公司。我们打造以用户为中心的数字平台，帮助人们获得更好的在线体验。",
      founded: "创立于 2025.08",
      headquarters: "总部：美国",
      teamsTitle: "核心团队",
      teamAI: "DoubleJ AI — 研究团队",
      teamMarketing: "DoubleJ Marketing — 市场团队",
      teams: [
        {
          key: "ai",
          name: "DoubleJ AI",
          summary: "AI 研究团队",
          description:
            "构建 CampusON（高校 AI 平台）与通用 AI SaaS，涵盖对话式智能体、RAG、评测/可观测性。",
          services: [
            "CampusON",
            "AI SaaS",
            "Conversational Agents",
            "Inference APIs",
          ],
          backends: [
            "Python/Node",
            "Next.js",
            "向量数据库 (RAG)",
            "模型 API",
            "GPU 推理",
            "AWS/GCP",
          ],
        },
        {
          key: "marketing",
          name: "DoubleJ Marketing",
          summary: "市场团队",
          description:
            "以数据驱动的自动化赋能全球电商增长，覆盖投放、内容与品牌。",
          services: [
            "电商增长",
            "效果广告",
            "SEO/内容",
            "品牌工作室",
          ],
          backends: [
            "无头电商",
            "CDP/CRM",
            "GA4/BigQuery",
            "ETL/数据管道",
            "邮件/短信",
          ],
        },
      ],
    },
    business: { title: "业务领域" },
    products: { title: "产品与平台" },
    investors: { title: "投资者与合作伙伴", downloadDeck: "下载 IR Deck" },
    news: { title: "新闻与洞察" },
    contact: { title: "联系我们", offices: "全球办公室", email: "邮箱", phone: "电话" },
  },
};

export async function getDictionary(locale: Locale) {
  switch (locale) {
    case "en":
      return en;
    case "zh":
      return zh;
    default:
      return ko;
  }
}
