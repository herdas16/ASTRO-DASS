/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Surface hierarchy (Light mode)
        'surface': '#ffffff',
        'surface-dim': '#f8fafc',
        'surface-bright': '#ffffff',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#f8fafc',
        'surface-container': '#f1f5f9',
        'surface-container-high': '#e2e8f0',
        'surface-container-highest': '#cbd5e1',
        'surface-variant': '#f1f5f9',
        // Text
        'on-surface': '#0f172a',
        'on-surface-variant': '#334155',
        'text-dim': '#64748b',
        // Primary — Elegant Dark (replacing Blue)
        'primary': '#0f172a',
        'primary-light': '#334155',
        // Secondary — Amber/CTA
        'secondary': '#fbbf24',
        'secondary-hover': '#f59e0b',
        'on-secondary': '#000000',
        // Brand signature
        'brand': '#e02020',
        // Tertiary
        'tertiary': '#cbd5e1',
        'tertiary-container': '#94a3b8',
        // Error
        'error': '#ef4444',
        'error-container': '#991b1b',
        // Outline
        'outline': '#94a3b8',
        'outline-variant': '#cbd5e1',
        // Component-specific
        'card': '#ffffff',
        'card-border': '#e2e8f0',
        'input-border': '#cbd5e1',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['64px', { lineHeight: '72px', letterSpacing: '-0.02em', fontWeight: '900' }],
        'display-xl-mobile': ['40px', { lineHeight: '48px', letterSpacing: '-0.01em', fontWeight: '900' }],
        'headline-lg': ['32px', { lineHeight: '40px', letterSpacing: '0.02em', fontWeight: '800' }],
        'headline-lg-mobile': ['24px', { lineHeight: '32px', fontWeight: '800' }],
        'headline-md': ['24px', { lineHeight: '32px', fontWeight: '700' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '20px', fontWeight: '300' }],
        'label-bold': ['12px', { lineHeight: '16px', letterSpacing: '0.05em', fontWeight: '700' }],
      },
      borderRadius: {
        'sm': '0.125rem',
        'DEFAULT': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
      },
      spacing: {
        'gutter': '24px',
        'margin-desktop': '64px',
        'margin-mobile': '20px',
        'stack-sm': '8px',
        'stack-md': '16px',
        'stack-lg': '32px',
        'section-gap': '120px',
      },
      maxWidth: {
        'container': '1280px',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%': { boxShadow: '0 0 0 0 rgba(251, 191, 36, 0.4)' },
          '70%': { boxShadow: '0 0 0 12px rgba(251, 191, 36, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(251, 191, 36, 0)' },
        },
      },
    },
  },
  plugins: [],
};
