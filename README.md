# DoubleJ 회사 사이트 (베이스)

TypeScript + Next.js(App Router) 기반의 회사 웹사이트 베이스입니다.

## 실행 방법

1) 패키지 설치

```bash
npm install
# 또는
pnpm install
# 또는
yarn
```

2) 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:3000` 접속

## 스택

- Next.js 14 (App Router, `app/`)
- React 18
- TypeScript 5
- CSS(전역 + 간단한 유틸 클래스)

## 구조

```
app/
  [locale]/        # 다국어 라우팅 (ko/en/zh)
    layout.tsx     # 공통 레이아웃, 메타데이터, 헤더/푸터
    page.tsx       # 홈
    about/page.tsx
    business/page.tsx
    products/page.tsx
    investors/page.tsx
    news/page.tsx
    contact/page.tsx
  globals.css      # 전역 스타일 및 테마 변수
components/
  Header.tsx
  Footer.tsx
  Nav.tsx
  LocaleSwitcher.tsx
lib/
  i18n/
    locales.ts
    dictionaries.ts
public/
  image.png
  ir/DoubleJ_IR.pdf (배치 시 다운로드 제공)
middleware.ts       # 루트 -> 기본 언어(ko)로 리다이렉트
```

## 커스터마이징 가이드

- 색상/타이포: `app/globals.css`의 CSS 변수 수정
- 네비게이션: `components/Nav.tsx`는 `labels` prop으로 라벨을 받습니다
- 메타데이터: `app/[locale]/layout.tsx`의 `metadata` 수정 (도메인/설명 등)
- 지원 언어: `lib/i18n/locales.ts` 수정 (기본값은 `ko`)
- 기본 언어 리다이렉트: `middleware.ts`에서 `defaultLocale` 변경 가능

## 배포

```bash
npm run build
npm start
```

Vercel 배포도 권장됩니다.

## 라이선스

사내/개인 프로젝트 베이스로 자유롭게 수정하여 사용하세요.
