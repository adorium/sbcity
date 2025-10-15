# SmartBioCity Platform

도시개발 프로젝트 기획 및 투명한 파이낸싱 플랫폼

## 🏗️ 프로젝트 소개

SmartBioCity는 주거·업무·복합 단지 개발 시 프로젝트 기획부터 투자자-시행사 간 투명한 파이낸싱까지 모든 프로세스를 하나의 플랫폼에서 관리할 수 있는 온라인 솔루션입니다.

### 주요 기능

- 🏢 **프로젝트 기획**: 체계적인 도시개발 프로젝트 기획과 수익성 분석
- 💰 **투명한 파이낸싱**: 실시간 자금 현황 공유와 투명한 정산
- 🤝 **이해관계자 연결**: 투자자, 시행사, 시공사 통합 관리
- 📊 **데이터 분석**: 프로젝트 진행 현황 및 재무 지표 실시간 시각화

## 🚀 시작하기

### 필수 요구사항

- Node.js 18.0 이상
- npm 또는 yarn

### 설치

```bash
# 의존성 설치
npm install

# 또는
yarn install
```

### 개발 서버 실행

```bash
# 개발 모드로 실행
npm run dev

# 또는
yarn dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 빌드

```bash
# 프로덕션 빌드
npm run build

# 또는
yarn build
```

## 🎨 디자인 시스템

### 색상 팔레트 (Tailwind Classes)

```js
// tailwind.config.ts에 정의됨
colors: {
  brand: {
    primary: "#0463AE",    // bg-brand-primary, text-brand-primary
    secondary: "#477DA5",  // bg-brand-secondary
    accent: "#22A699",     // bg-brand-accent
    info: "#588CDC",       // bg-brand-info
  },
  surface: {
    bg: "#F5F7FA",        // bg-surface-bg
    panel: "#FFFFFF",     // bg-surface-panel
  },
  text: {
    main: "#1B2A3A",      // text-text-main
    muted: "#607089",     // text-text-muted
  },
  stroke: "#E5EAF1",      // border-stroke
}
```

### 타이포그래피

- **Headline**: Inter / SF Pro Display (700-800 weight)
- **Body**: Noto Sans KR / Inter (400-500 weight)
- **Scale**: 44/36/28/22/18/16/14 (text-44, text-36 등)

### 스페이싱

4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64 (px) - Tailwind 기본 스케일 확장

### 컴포넌트

- **Buttons**: Primary (`<Button>`) / Outline (`<Button variant="outline">`) / Ghost (`<Button variant="ghost">`)
- **Cards**: Elevated (기본) / 2xl border-radius
- **Badges**: Info / Success tone

## 🛠️ 기술 스택

- **Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: TailwindCSS
- **Animation**: Framer Motion
- **Icons**: Custom SVG (인라인)
- **Language**: TypeScript

## 📁 프로젝트 구조

```
sbcity/
├── app/
│   ├── globals.css        # 전역 스타일
│   ├── layout.tsx         # 루트 레이아웃
│   └── page.tsx           # 메인 랜딩 페이지
├── components/
│   ├── icons.tsx          # 커스텀 SVG 아이콘 모음
│   └── ui/
│       ├── button.tsx     # 버튼 컴포넌트
│       └── card.tsx       # 카드 컴포넌트
├── lib/
│   └── utils.ts           # 유틸리티 함수
├── public/                # 정적 파일
├── next.config.js         # Next.js 설정
├── tailwind.config.ts     # Tailwind 설정
├── tsconfig.json          # TypeScript 설정
└── package.json           # 프로젝트 의존성
```

## 🎨 커스텀 아이콘

lucide-react를 제거하고 모든 아이콘을 SVG 인라인으로 구현했습니다. `components/icons.tsx`에서 사용 가능한 아이콘:

- `Building2Icon` - 빌딩
- `ShieldCheckIcon` - 보안 체크
- `LineChartIcon` - 차트
- `LayersIcon` - 레이어
- `NetworkIcon` - 네트워크
- `SparklesIcon` - 스파클
- `CheckCircle2Icon` - 체크 서클
- `ArrowRightIcon` - 오른쪽 화살표
- `FileDownIcon` - 파일 다운로드
- `LockIcon` - 잠금
- `TrendingUpIcon` - 상승 추세
- `UsersIcon` - 사용자
- `FileCheckIcon` - 파일 체크
- `BriefcaseIcon` - 브리프케이스
- `HomeIcon` - 홈
- `AwardIcon` - 어워드

### 사용 예시

```tsx
import { Building2Icon, CheckCircle2Icon } from "@/components/icons";

<Building2Icon className="h-6 w-6 text-brand-primary" />
<CheckCircle2Icon className="h-4 w-4 text-brand-accent" />
```

## 📝 라이선스

© 2025 SmartBioCity. All rights reserved.

## 📧 문의

프로젝트에 대한 문의사항이 있으시면 언제든지 연락주세요.

