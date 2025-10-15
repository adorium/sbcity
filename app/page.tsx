"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2Icon, 
  ShieldCheckIcon, 
  LineChartIcon, 
  LayersIcon, 
  NetworkIcon, 
  SparklesIcon, 
  CheckCircle2Icon, 
  ArrowRightIcon, 
  FileDownIcon, 
  LockIcon, 
  TrendingUpIcon,
  UsersIcon,
  FileCheckIcon,
  BriefcaseIcon,
  HomeIcon,
  AwardIcon,
  ChevronUpIcon
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * SmartBioCity — Landing Page + Embedded Design System (v1)
 *
 * ✅ What's included in this single file
 * 1) Fully working landing page (hero → features → how it works → trust → use cases → CTA → footer)
 * 2) Embedded design system preview (colors, typography, spacing, components)
 *
 * 🎨 Color Tokens (Tailwind)
 * {
 *   "brand.primary": "#0463AE",
 *   "brand.secondary": "#477DA5",
 *   "brand.accent": "#22A699",
 *   "brand.info": "#588CDC",
 *   "surface.bg": "#F5F7FA",
 *   "surface.panel": "#FFFFFF",
 *   "text.main": "#1B2A3A",
 *   "text.muted": "#607089",
 *   "stroke": "#E5EAF1"
 * }
 *
 * 🔠 Typography
 * - Headline: Inter/SF Pro Display, 700–800
 * - Body: Noto Sans KR / Inter 400–500
 * - Scale: 44/36/28/22/18/16/14
 *
 * 📐 Spacing Scale
 * - 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64 (px)
 *
 * 🧱 Components
 * - Buttons: primary / secondary / ghost
 * - Cards: elevated / outline
 * - Badges: soft (info, success)
 */

const Section = ({ id, className = "", children }: { id?: string; className?: string; children: React.ReactNode }) => (
  <section id={id} className={`w-full ${className}`}>{children}</section>
);

const Container = ({ className = "", children }: { className?: string; children: React.ReactNode }) => (
  <div className={`mx-auto max-w-7xl px-5 md:px-8 ${className}`}>{children}</div>
);

const Badge = ({ children, tone = "info" }: { children: React.ReactNode; tone?: "info" | "success" | "light" }) => {
  const tones = {
    info: "bg-brand-info/10 text-brand-info",
    success: "bg-brand-accent/10 text-brand-accent",
    light: "bg-white/20 text-white backdrop-blur-sm border-white/40",
  } as const;
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${tones[tone]} border border-current/10`}>
      {children}
    </span>
  );
};

const Feature = ({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) => (
  <Card className="h-full">
    <CardHeader className="space-y-3">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primary/10">
        <Icon className="h-6 w-6 text-brand-primary" />
      </div>
      <CardTitle className="text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-text-muted leading-relaxed">{desc}</p>
    </CardContent>
  </Card>
);

const Step = ({ num, title, desc }: { num: string; title: string; desc: string }) => (
  <div className="relative pl-10">
    <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary text-white text-sm font-semibold">
      {num}
    </div>
    <h4 className="text-text-main font-semibold mb-2">{title}</h4>
    <p className="text-text-muted">{desc}</p>
  </div>
);

const Divider = () => <div className="h-px w-full bg-stroke" />;

const HEADER_HEIGHT = 80; // sticky header height in pixels

export default function LandingPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offsetPosition = element.offsetTop - HEADER_HEIGHT;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen w-full bg-surface-bg text-text-main">
      {/* NAV */}
      <header className="sticky top-0 z-30 w-full backdrop-blur bg-white/70 border-b border-stroke">
        <Container className="flex h-20 items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary text-white">
              <Building2Icon className="h-5 w-5" />
            </div>
            <span className="font-bold tracking-tight text-lg leading-tight">SmartBioCity</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#features" 
              onClick={(e) => handleNavClick(e, "features")}
              className="py-2 px-1 text-sm font-medium text-text-muted hover:text-text-main transition-colors inline-block cursor-pointer"
            >
              솔루션
            </a>
            <a 
              href="#how" 
              onClick={(e) => handleNavClick(e, "how")}
              className="py-2 px-1 text-sm font-medium text-text-muted hover:text-text-main transition-colors inline-block cursor-pointer"
            >
              프로세스
            </a>
            <a 
              href="#trust" 
              onClick={(e) => handleNavClick(e, "trust")}
              className="py-2 px-1 text-sm font-medium text-text-muted hover:text-text-main transition-colors inline-block cursor-pointer"
            >
              신뢰성
            </a>
            <a 
              href="#cases" 
              onClick={(e) => handleNavClick(e, "cases")}
              className="py-2 px-1 text-sm font-medium text-text-muted hover:text-text-main transition-colors inline-block cursor-pointer"
            >
              활용 사례
            </a>
            <a 
              href="/sto" 
              className="py-2 px-1 text-sm font-medium text-text-muted hover:text-text-main transition-colors inline-block"
            >
              STO
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Button className="h-10 px-6 text-sm font-medium">데모 요청</Button>
          </div>
        </Container>
      </header>

      {/* SCROLL TO TOP BUTTON */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary text-white shadow-lg hover:bg-brand-secondary transition-colors"
            aria-label="Scroll to top"
          >
            <ChevronUpIcon className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* HERO */}
      <Section id="hero" className="relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Hero Background Image */}
          <img 
            src="/images/hero/smartBioCity_hero.webp" 
            alt="SmartBioCity Platform" 
            className="w-full h-full object-cover"
          />
          
          {/* Dark overlay for text readability - Enhanced for better contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        {/* Content */}
        <Container className="relative z-10 py-24 md:py-32 lg:py-40">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge tone="light">프로젝트 기획 × 투명한 파이낸싱</Badge>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-lg">
              데이터로 기획하고, <span className="text-brand-accent">투명하게</span> 연결하는
              <br />도시개발 플랫폼
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
              주거·업무·복합 단지 개발 시 프로젝트 기획부터 투자자-시행사 간 투명한 파이낸싱까지, 모든 프로세스를 하나의 플랫폼에서 관리하세요.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Button className="h-12 px-8 text-base shadow-xl">
                프로젝트 시작하기 <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="h-12 px-8 text-base bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 shadow-xl">
                솔루션 소개서 받기 <FileDownIcon className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm md:text-base text-white/90">
              <div className="flex items-center gap-2 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full">
                <CheckCircle2Icon className="h-5 w-5 text-brand-accent"/>
                실시간 프로젝트 현황
              </div>
              <div className="flex items-center gap-2 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full">
                <CheckCircle2Icon className="h-5 w-5 text-brand-accent"/>
                투명한 자금 관리
              </div>
              <div className="flex items-center gap-2 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full">
                <CheckCircle2Icon className="h-5 w-5 text-brand-accent"/>
                데이터 기반 의사결정
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* SOCIAL PROOF */}
      <Section className="py-10">
        <Container className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: ShieldCheckIcon, text: "데이터 보안 인증" },
            { icon: AwardIcon, text: "부동산 개발 전문성" },
            { icon: FileCheckIcon, text: "법무 검토 완료" },
            { icon: UsersIcon, text: "투자자 네트워크" }
          ].map((item, i) => {
            const IconComponent = item.icon;
            return (
              <div key={i} className="flex items-center justify-center gap-2 rounded-2xl border border-stroke bg-white py-4 text-sm text-text-muted">
                <IconComponent className="h-4 w-4" /> {item.text}
              </div>
            );
          })}
        </Container>
      </Section>

      <Divider />

      {/* PROBLEM → SOLUTION */}
      <Section className="py-16">
        <Container className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-4">도시개발의 과제</h2>
            <p className="text-text-muted leading-relaxed mb-4">
              복잡한 이해관계자 구조, 불투명한 자금 흐름, 분절된 정보 관리—도시개발 프로젝트는 기획 단계부터 많은 어려움에 직면합니다.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-text-muted">
                <div className="h-1.5 w-1.5 rounded-full bg-brand-primary mt-2 shrink-0" />
                <span>투자자와 시행사 간 정보 비대칭</span>
              </li>
              <li className="flex items-start gap-2 text-text-muted">
                <div className="h-1.5 w-1.5 rounded-full bg-brand-primary mt-2 shrink-0" />
                <span>수기 중심의 비효율적인 프로젝트 관리</span>
              </li>
              <li className="flex items-start gap-2 text-text-muted">
                <div className="h-1.5 w-1.5 rounded-full bg-brand-primary mt-2 shrink-0" />
                <span>실시간 현황 파악의 어려움</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">SBCity의 솔루션</h2>
            <p className="text-text-muted leading-relaxed mb-4">
              단일 플랫폼에서 프로젝트 기획·투자·운영을 통합 관리하고, 투자자와 시행사 간 실시간 투명한 정보 공유를 제공합니다.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-text-muted">
                <CheckCircle2Icon className="h-5 w-5 text-brand-accent shrink-0" />
                <span>통합 대시보드로 프로젝트 전체 현황 한눈에 파악</span>
              </li>
              <li className="flex items-start gap-2 text-text-muted">
                <CheckCircle2Icon className="h-5 w-5 text-brand-accent shrink-0" />
                <span>실시간 자금 흐름 추적 및 투명한 회계 관리</span>
              </li>
              <li className="flex items-start gap-2 text-text-muted">
                <CheckCircle2Icon className="h-5 w-5 text-brand-accent shrink-0" />
                <span>데이터 기반 의사결정 지원 시스템</span>
              </li>
            </ul>
          </div>
        </Container>
      </Section>

      {/* FOUR PILLARS / FEATURES */}
      <Section id="features" className="py-16 md:py-20">
        <Container>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">핵심 기능</h3>
            <p className="text-text-muted max-w-2xl mx-auto">
              도시개발 프로젝트의 성공을 위한 4가지 핵심 기능을 제공합니다.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Feature 
              icon={LayersIcon} 
              title="프로젝트 기획" 
              desc="주거, 업무, 복합 단지 개발 프로젝트의 체계적인 기획과 수익성 분석을 지원합니다." 
            />
            <Feature 
              icon={TrendingUpIcon} 
              title="투명한 파이낸싱" 
              desc="투자자와 시행사 간 실시간 자금 현황 공유와 투명한 정산 프로세스를 제공합니다." 
            />
            <Feature 
              icon={NetworkIcon} 
              title="이해관계자 연결" 
              desc="투자자, 시행사, 시공사 등 모든 이해관계자를 하나의 플랫폼에서 연결합니다." 
            />
            <Feature 
              icon={LineChartIcon} 
              title="데이터 분석" 
              desc="프로젝트 진행 현황, 재무 지표, 리스크 요인을 실시간으로 분석하고 시각화합니다." 
            />
          </div>
        </Container>
      </Section>

      {/* HOW IT WORKS */}
      <Section id="how" className="py-16 bg-white border-y border-stroke">
        <Container className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">어떻게 작동하나요?</h3>
            <p className="text-text-muted">
              간단한 3단계로 프로젝트를 시작하고 관리할 수 있습니다.
            </p>
            <Step 
              num="1" 
              title="프로젝트 등록" 
              desc="토지 정보, 개발 계획, 사업 구조 등 기본 정보를 등록합니다. 민감한 데이터는 암호화되어 안전하게 보관됩니다." 
            />
            <Step 
              num="2" 
              title="투자자 매칭" 
              desc="등록된 프로젝트에 관심 있는 투자자를 매칭하고, 상세 정보를 공유합니다. 전자서명으로 빠르고 안전하게 계약을 진행합니다." 
            />
            <Step 
              num="3" 
              title="실시간 관리" 
              desc="프로젝트 진행 현황, 자금 집행 내역, 주요 이슈를 실시간으로 모니터링하고 이해관계자들과 투명하게 공유합니다." 
            />
          </div>
          <div className="rounded-3xl border border-stroke bg-surface-bg p-6 shadow-sm">
            <div className="space-y-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm text-text-muted flex items-center gap-2">
                    <TrendingUpIcon className="h-4 w-4" />
                    수익률 추이
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-32 w-full rounded-lg bg-gradient-to-r from-brand-primary/20 via-brand-info/20 to-brand-accent/20 flex items-end justify-around p-2">
                    {[40, 55, 45, 70, 65, 80, 75].map((h, i) => (
                      <div 
                        key={i} 
                        className="w-6 bg-brand-primary rounded-t opacity-70 hover:opacity-100 transition-opacity"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm text-text-muted flex items-center gap-2">
                    <LockIcon className="h-4 w-4" />
                    최근 활동 로그
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <FileCheckIcon className="h-4 w-4 text-brand-primary"/> 
                    <span className="text-text-muted">투자 계약서 전자서명 완료</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheckIcon className="h-4 w-4 text-brand-primary"/> 
                    <span className="text-text-muted">1차 자금 집행 승인 (₩50B)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SparklesIcon className="h-4 w-4 text-brand-primary"/> 
                    <span className="text-text-muted">월간 리포트 자동 생성</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* TRUST & SECURITY */}
      <Section id="trust" className="py-16">
        <Container>
          <div className="text-center mb-12">
            <Badge tone="success">신뢰성 & 보안</Badge>
            <h3 className="text-2xl md:text-3xl font-bold mt-4 mb-3">안전하고 투명한 플랫폼</h3>
            <p className="text-text-muted max-w-2xl mx-auto">
              금융급 보안 체계와 투명한 정보 공개로 모든 참여자의 신뢰를 보장합니다.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "데이터 암호화",
                items: ["AES-256 암호화", "안전한 데이터 저장소", "접근 권한 관리"]
              },
              {
                title: "투명한 기록",
                items: ["모든 거래 이력 추적", "변경 불가능한 로그", "실시간 감사 추적"]
              },
              {
                title: "규제 준수",
                items: ["금융 규정 준수", "개인정보보호법 대응", "정기 보안 감사"]
              }
            ].map((category) => (
              <Card key={category.title}>
                <CardHeader>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-text-muted">
                  {category.items.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2Icon className="h-4 w-4 text-brand-accent shrink-0"/> 
                      {item}
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* USE CASES */}
      <Section id="cases" className="py-16 bg-white border-y border-stroke">
        <Container>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">활용 사례</h3>
            <p className="text-text-muted max-w-2xl mx-auto">
              다양한 유형의 도시개발 프로젝트에 최적화된 솔루션을 제공합니다.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: HomeIcon,
                title: "주거 단지 개발",
                desc: "아파트, 빌라 등 주거 시설 개발 프로젝트",
                metrics: ["평균 수익률 7-9%", "투자자 만족도 높음", "안정적인 수요 예측"]
              },
              {
                icon: BriefcaseIcon,
                title: "업무 시설 개발",
                desc: "오피스 빌딩, 업무용 복합시설 개발",
                metrics: ["임대 수익 안정적", "장기 투자 선호", "프라임 입지 중심"]
              },
              {
                icon: Building2Icon,
                title: "복합 단지 개발",
                desc: "주거·상업·업무가 결합된 대규모 개발",
                metrics: ["높은 시너지 효과", "다각화된 수익 구조", "지역 랜드마크"]
              }
            ].map((useCase) => {
              const IconComponent = useCase.icon;
              return (
                <Card key={useCase.title} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-10 w-10 rounded-xl bg-brand-primary/10 flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-brand-primary" />
                      </div>
                      <CardTitle className="text-lg">{useCase.title}</CardTitle>
                    </div>
                    <p className="text-sm text-text-muted">{useCase.desc}</p>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-text-muted">
                    {useCase.metrics.map((metric) => (
                      <div key={metric} className="flex items-center gap-2">
                        <CheckCircle2Icon className="h-4 w-4 text-brand-accent shrink-0"/> 
                        {metric}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* FINAL CTA */}
      <Section className="py-16">
        <Container>
          <div className="rounded-3xl border border-stroke bg-gradient-to-br from-white to-surface-bg p-8 md:p-12 shadow-sm text-center">
            <h3 className="text-2xl md:text-3xl font-bold">지금 바로 시작하세요</h3>
            <p className="mt-3 text-text-muted max-w-2xl mx-auto">
              복잡한 도시개발 프로젝트, SBCity 플랫폼으로 간편하게 관리하세요. 
              투자자와 시행사 모두에게 투명하고 효율적인 경험을 제공합니다.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button className="px-8 py-6 text-base">
                무료 데모 신청하기
              </Button>
              <Button variant="outline" className="px-8 py-6 text-base">
                투자자로 시작하기
              </Button>
            </div>
            <div className="mt-6 flex items-center justify-center gap-8 text-sm text-text-muted">
              <div className="flex items-center gap-2">
                <CheckCircle2Icon className="h-4 w-4 text-brand-accent"/>
                신용카드 불필요
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2Icon className="h-4 w-4 text-brand-accent"/>
                5분 내 시작 가능
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2Icon className="h-4 w-4 text-brand-accent"/>
                언제든 문의 가능
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* DESIGN SYSTEM PREVIEW */}
      <Section id="design-system" className="py-20 bg-white border-t border-stroke">
        <Container>
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">디자인 시스템</h3>
              <p className="text-text-muted">색상 · 타이포그래피 · 스페이싱 · 컴포넌트</p>
            </div>
            <Badge tone="success">v1.0</Badge>
          </div>

          {/* Colors */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold mb-4">색상 팔레트</h4>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {[
                {name:"Primary", color:"bg-brand-primary", val:"#0463AE", desc: "주요 브랜드 색상"},
                {name:"Secondary", color:"bg-brand-secondary", val:"#477DA5", desc: "보조 색상"},
                {name:"Accent", color:"bg-brand-accent", val:"#22A699", desc: "강조 색상"},
                {name:"Info", color:"bg-brand-info", val:"#588CDC", desc: "정보 색상"},
                {name:"Background", color:"bg-surface-bg", val:"#F5F7FA", desc: "배경 색상"},
                {name:"Text", color:"bg-text-main", val:"#1B2A3A", desc: "텍스트 색상"}
              ].map((c)=> (
                <div key={c.name} className="rounded-2xl border border-stroke overflow-hidden">
                  <div className={`h-24 ${c.color}`} />
                  <div className="p-3">
                    <div className="text-sm font-semibold mb-1">{c.name}</div>
                    <code className="text-xs text-text-muted">{c.val}</code>
                    <p className="text-xs text-text-muted mt-1">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Typography */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold mb-4">타이포그래피</h4>
            <div className="space-y-3 rounded-2xl border border-stroke p-6">
              <div className="text-44">헤드라인 1 — The quick brown fox</div>
              <div className="text-36">헤드라인 2 — 도시를 개발합니다</div>
              <div className="text-28">헤드라인 3 — Project Planning</div>
              <div className="text-22">헤드라인 4 — 투명한 파이낸싱</div>
              <div className="text-18">본문 Large — 주거·업무·복합 단지 개발의 모든 것</div>
              <div className="text-16">본문 Medium — SBCity 플랫폼으로 시작하세요</div>
              <div className="text-14 text-text-muted">캡션 — 실시간 프로젝트 현황을 확인하세요</div>
            </div>
          </div>

          {/* Spacing */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold mb-4">스페이싱 스케일</h4>
            <div className="flex flex-wrap gap-4 rounded-2xl border border-stroke p-6">
              {[4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64].map((s)=>(
                <div key={s} className="flex flex-col items-center gap-2">
                  <div 
                    className="rounded-lg bg-brand-info/20 border border-brand-info/30" 
                    style={{ width: `${s}px`, height: `${s}px` }} 
                  />
                  <div className="text-xs text-text-muted font-mono">{s}px</div>
                </div>
              ))}
            </div>
          </div>

          {/* Components */}
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">버튼</h4>
              <div className="flex flex-col gap-3">
                <Button>Primary Button</Button>
                <Button variant="outline">Secondary Button</Button>
                <Button variant="ghost">Ghost Button</Button>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">카드</h4>
              <div className="space-y-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">카드 제목</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-text-muted">
                    이것은 기본 카드 컴포넌트입니다. 다양한 콘텐츠를 담을 수 있습니다.
                  </CardContent>
                </Card>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">배지</h4>
              <div className="flex flex-wrap gap-2">
                <Badge>Information</Badge>
                <Badge tone="success">Success</Badge>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-stroke bg-white">
        <Container className="py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-primary text-white">
                  <Building2Icon className="h-5 w-5" />
                </div>
                <span className="font-bold tracking-tight text-lg">SmartBioCity</span>
              </div>
              <p className="text-sm text-text-muted max-w-sm">
                주거·업무·복합 단지 개발의 기획부터 투자, 운영까지 모든 프로세스를 데이터와 투명성으로 연결합니다.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-3">솔루션</h5>
              <ul className="space-y-2 text-sm text-text-muted">
                <li><a href="#features" className="hover:text-text-main">프로젝트 기획</a></li>
                <li><a href="#features" className="hover:text-text-main">투명한 파이낸싱</a></li>
                <li><a href="#features" className="hover:text-text-main">데이터 분석</a></li>
                <li><a href="#cases" className="hover:text-text-main">활용 사례</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">회사</h5>
              <ul className="space-y-2 text-sm text-text-muted">
                <li><a href="#" className="hover:text-text-main">회사 소개</a></li>
                <li><a href="#" className="hover:text-text-main">팀</a></li>
                <li><a href="#" className="hover:text-text-main">채용</a></li>
                <li><a href="#" className="hover:text-text-main">문의하기</a></li>
              </ul>
            </div>
          </div>
          <Divider />
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-text-muted">
              © {new Date().getFullYear()} SBCity. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-text-muted hover:text-text-main">개인정보처리방침</a>
              <a href="#" className="text-text-muted hover:text-text-main">이용약관</a>
              <a href="#" className="text-text-muted hover:text-text-main">보안정책</a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
