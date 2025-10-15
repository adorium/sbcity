import type { Metadata } from "next";
import { Inter, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSansKr = Noto_Sans_KR({ 
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-noto-sans-kr"
});

export const metadata: Metadata = {
  title: "SmartBioCity - 도시개발 프로젝트 기획 및 투자 플랫폼",
  description: "주거·업무·복합 단지 개발 시 프로젝트 기획과 투자자-시행사 간 투명한 파이낸싱을 지원하는 온라인 플랫폼",
  keywords: "도시개발, 부동산 개발, 프로젝트 파이낸싱, 복합단지, 주거개발, 업무단지",
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${inter.variable} ${notoSansKr.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}


