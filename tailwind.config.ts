import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#6F8D6A",
          secondary: "#ACBBA3",
          accent: "#9DC595",
          info: "#6F8D6A",
        },
        surface: {
          bg: "#F5F7FA",
          panel: "#FFFFFF",
        },
        text: {
          main: "#1B2A3A",
          muted: "#607089",
        },
        stroke: "#E5EAF1",
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'var(--font-noto-sans-kr)', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter)', 'SF Pro Display', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '44': ['44px', { lineHeight: '56px', fontWeight: '800' }],
        '36': ['36px', { lineHeight: '44px', fontWeight: '700' }],
        '28': ['28px', { lineHeight: '36px', fontWeight: '700' }],
        '22': ['22px', { lineHeight: '30px', fontWeight: '600' }],
        '18': ['18px', { lineHeight: '28px', fontWeight: '500' }],
        '16': ['16px', { lineHeight: '26px', fontWeight: '400' }],
        '14': ['14px', { lineHeight: '22px', fontWeight: '400' }],
      },
      spacing: {
        // Tailwind 기본값 유지하면서 커스텀 값 추가
        '4.5': '18px',
        '18': '72px',
      },
      borderRadius: {
        'lg': '12px',
        'xl': '16px',
        '2xl': '20px',
        '3xl': '24px',
      },
    },
  },
  plugins: [],
};
export default config;

