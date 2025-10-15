"use client";

import React from "react";
import { Building2Icon, CoinsIcon, FileTextIcon, ShieldCheckIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Container = ({ className = "", children }: { className?: string; children: React.ReactNode }) => (
  <div className={`mx-auto max-w-7xl px-5 md:px-8 ${className}`}>{children}</div>
);

export default function STOPage() {
  return (
    <div className="min-h-screen w-full bg-surface-bg text-text-main">
      {/* NAV */}
      <header className="sticky top-0 z-30 w-full backdrop-blur bg-white/70 border-b border-stroke">
        <Container className="flex h-20 items-center justify-between py-4">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary text-white">
              <Building2Icon className="h-5 w-5" />
            </div>
            <span className="font-bold tracking-tight text-lg leading-tight">SBCity Platform</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="/#features" 
              className="py-2 px-1 text-sm font-medium text-text-muted hover:text-text-main transition-colors inline-block"
            >
              솔루션
            </a>
            <a 
              href="/#how" 
              className="py-2 px-1 text-sm font-medium text-text-muted hover:text-text-main transition-colors inline-block"
            >
              프로세스
            </a>
            <a 
              href="/#trust" 
              className="py-2 px-1 text-sm font-medium text-text-muted hover:text-text-main transition-colors inline-block"
            >
              신뢰성
            </a>
            <a 
              href="/#cases" 
              className="py-2 px-1 text-sm font-medium text-text-muted hover:text-text-main transition-colors inline-block"
            >
              활용 사례
            </a>
            <a 
              href="/sto" 
              className="py-2 px-1 text-sm font-medium text-brand-primary hover:text-text-main transition-colors inline-block"
            >
              STO
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Button className="h-10 px-6 text-sm font-medium">데모 요청</Button>
          </div>
        </Container>
      </header>

      {/* HERO */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-brand-info/10 text-brand-info border border-current/10">
              Security Token Offering
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight">
              부동산 프로젝트를 <span className="text-brand-primary">디지털 증권</span>으로
            </h1>
            <p className="mt-6 text-lg text-text-muted">
              블록체인 기반 증권형 토큰으로 부동산 개발 프로젝트에 대한 투자를 혁신합니다.
              소액 투자부터 대규모 자금 조달까지, 투명하고 효율적인 STO 솔루션을 제공합니다.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button className="px-8 py-6 text-base">
                STO 신청하기
              </Button>
              <Button variant="outline" className="px-8 py-6 text-base">
                자세히 알아보기
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* KEY FEATURES */}
      <section className="py-16 bg-white border-y border-stroke">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">STO의 장점</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: CoinsIcon,
                title: "소액 투자 가능",
                desc: "높은 진입 장벽 없이 소액으로 부동산 프로젝트에 투자할 수 있습니다."
              },
              {
                icon: ShieldCheckIcon,
                title: "규제 준수",
                desc: "금융당국의 규제를 준수하는 합법적인 증권형 토큰입니다."
              },
              {
                icon: FileTextIcon,
                title: "투명한 기록",
                desc: "블록체인 기반으로 모든 거래가 투명하게 기록됩니다."
              },
              {
                icon: Building2Icon,
                title: "유동성 확보",
                desc: "전통적인 부동산 투자 대비 높은 유동성을 제공합니다."
              }
            ].map((feature) => {
              const IconComponent = feature.icon;
              return (
                <Card key={feature.title} className="h-full">
                  <CardHeader className="space-y-3">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primary/10">
                      <IconComponent className="h-6 w-6 text-brand-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-text-muted leading-relaxed">{feature.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* COMING SOON */}
      <section className="py-20">
        <Container>
          <Card className="max-w-2xl mx-auto text-center">
            <CardHeader className="space-y-4 pt-12 pb-8">
              <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-accent/10">
                <CoinsIcon className="h-8 w-8 text-brand-accent" />
              </div>
              <CardTitle className="text-2xl">서비스 준비 중입니다</CardTitle>
            </CardHeader>
            <CardContent className="pb-12">
              <p className="text-text-muted mb-6">
                SBCity Platform의 STO 서비스는 현재 개발 및 금융당국 승인 절차를 진행 중입니다.
                출시 소식을 가장 먼저 받아보시려면 아래 버튼을 눌러 알림을 신청해주세요.
              </p>
              <Button className="px-8 py-6">출시 알림 신청</Button>
            </CardContent>
          </Card>
        </Container>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-stroke bg-white">
        <Container className="py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-primary text-white">
                <Building2Icon className="h-5 w-5" />
              </div>
              <span className="font-bold tracking-tight text-lg">SBCity Platform</span>
            </div>
            <p className="text-sm text-text-muted">
              © {new Date().getFullYear()} SBCity. All rights reserved.
            </p>
          </div>
        </Container>
      </footer>
    </div>
  );
}

