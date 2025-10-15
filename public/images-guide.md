# 이미지 사용 가이드

## 📁 디렉토리 구조

```
/public/
├── images/
│   ├── hero/              # Hero 섹션 배경 이미지
│   │   └── hero-background.webp (2560×1440px)
│   ├── features/          # 기능 섹션 이미지
│   ├── projects/          # 프로젝트 관련 이미지
│   └── logos/             # 로고 및 파트너 이미지
└── favicon.ico            # 자동으로 /app/favicon.ico에서 복사됨
```

## 🎯 Hero 배경 이미지 추가 방법

### 1단계: 이미지 준비
- **파일 이름**: `hero-background.webp` (또는 `.jpg`)
- **권장 사이즈**: 2560 × 1440px
- **파일 크기**: 300KB 이하
- **포맷**: WebP (1순위) 또는 JPEG

### 2단계: 파일 배치
이미지를 다음 경로에 저장:
```
/public/images/hero/hero-background.webp
```

### 3단계: 코드 수정
`app/page.tsx` 파일에서 주석 처리된 코드를 해제:

#### 방법 1: 일반 img 태그 (간단)
```jsx
<img 
  src="/images/hero/hero-background.webp" 
  alt="SmartBioCity Platform" 
  className="w-full h-full object-cover"
/>
```

#### 방법 2: Next.js Image 컴포넌트 (최적화)
```jsx
import Image from 'next/image';

<Image 
  src="/images/hero/hero-background.webp" 
  alt="SmartBioCity Platform"
  fill
  className="object-cover"
  priority
  quality={85}
/>
```

### 4단계: Gradient Placeholder 제거
실제 이미지 추가 후, gradient placeholder 코드 삭제:
```jsx
// 이 부분 삭제
<div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-brand-info/10 to-brand-accent/20" />
```

## 🖼️ 이미지 최적화 도구

### WebP 변환
```bash
# ImageMagick 사용
convert input.jpg -quality 85 output.webp

# Online 도구
https://squoosh.app/
https://cloudconvert.com/
```

### 파일 크기 최적화
```bash
# WebP 최적화
cwebp -q 85 input.jpg -o output.webp

# JPEG 최적화
jpegoptim --max=85 input.jpg
```

## 📱 반응형 이미지 (선택사항)

다양한 디바이스를 위한 여러 사이즈:

```
/public/images/hero/
├── hero-background-mobile.webp   (1080×1920px - 세로)
├── hero-background-tablet.webp   (1536×1024px)
└── hero-background-desktop.webp  (2560×1440px)
```

사용 예시:
```jsx
<picture>
  <source 
    media="(max-width: 768px)" 
    srcSet="/images/hero/hero-background-mobile.webp" 
  />
  <source 
    media="(max-width: 1024px)" 
    srcSet="/images/hero/hero-background-tablet.webp" 
  />
  <img 
    src="/images/hero/hero-background-desktop.webp" 
    alt="SmartBioCity Platform"
    className="w-full h-full object-cover"
  />
</picture>
```

## ✅ 체크리스트

- [ ] 이미지를 `/public/images/hero/` 폴더에 저장
- [ ] 파일 이름이 올바른지 확인
- [ ] 파일 크기가 300KB 이하인지 확인
- [ ] WebP 또는 JPEG 포맷인지 확인
- [ ] `page.tsx`에서 주석 해제
- [ ] Gradient placeholder 삭제
- [ ] 브라우저에서 이미지 확인

## 🔗 외부 이미지 사용 (CDN)

외부 URL의 이미지를 사용하려면 `next.config.js` 설정 필요:

```javascript
// next.config.js
module.exports = {
  images: {
    domains: ['example.com', 'cdn.example.com'],
  },
}
```

## 💡 추가 팁

1. **Lazy Loading**: Hero 이미지는 `priority` 속성 사용 (즉시 로딩)
2. **Alt Text**: SEO를 위한 설명적인 alt 텍스트 작성
3. **Object Fit**: `object-cover`로 비율 유지하며 영역 채우기
4. **Blur Placeholder**: 로딩 중 블러 효과로 UX 개선

```jsx
<Image 
  src="/images/hero/hero-background.webp"
  alt="SmartBioCity Platform 도시개발 프로젝트 대시보드"
  fill
  className="object-cover"
  priority
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQ..." // 작은 블러 이미지
/>
```

