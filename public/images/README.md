# Images Directory

이 디렉토리는 정적 이미지 파일들을 저장하는 곳입니다.

## 디렉토리 구조

```
/public/images/
├── hero/              # Hero 섹션 배경 이미지
│   └── hero-background.webp (권장: 2560×1440px)
├── features/          # 기능 섹션 이미지
├── projects/          # 프로젝트 관련 이미지
└── logos/             # 로고 및 파트너 이미지
```

## 이미지 사용 방법

### 일반 img 태그
```html
<img src="/images/hero/hero-background.jpg" alt="Description" />
```

### Next.js Image 컴포넌트 (권장)
```jsx
import Image from 'next/image';

<Image 
  src="/images/hero/hero-background.webp" 
  alt="Description"
  width={2560}
  height={1440}
  priority
/>
```

## 파일 명명 규칙

- 소문자와 하이픈 사용: `hero-background.webp`
- 의미 있는 이름 사용: `dashboard-mockup.jpg`
- 버전 관리: `logo-v2.png`

## 최적화 가이드

- **WebP 형식 우선 사용**
- 파일 크기: 300KB 이하 권장
- 고해상도 이미지: @2x 버전 제공
- Lazy loading 활용 (Next.js Image는 자동)

