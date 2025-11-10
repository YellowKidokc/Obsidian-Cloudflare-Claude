/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Obsidian-inspired dark theme colors
        obsidian: {
          darker: '#1e1e1e',
          dark: '#202020',
          mid: '#2a2a2a',
          light: '#3a3a3a',
          accent: '#483699',
          purple: '#7c3aed',
          text: '#dcddde',
          'text-muted': '#888888',
          'text-faint': '#555555',
          link: '#8ab4f8',
          'link-hover': '#adc6ff',
        },
        // Callout colors
        callout: {
          info: '#3b82f6',
          success: '#22c55e',
          danger: '#ef4444',
          warning: '#f59e0b',
          formula: '#8b5cf6',
          mindmap: '#06b6d4',
          abstract: '#6366f1',
          audio: '#ec4899',
          podcast: '#f97316',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.obsidian.text'),
            a: {
              color: theme('colors.obsidian.link'),
              '&:hover': {
                color: theme('colors.obsidian.link-hover'),
              },
            },
            h1: {
              color: theme('colors.obsidian.text'),
              fontWeight: '600',
            },
            h2: {
              color: theme('colors.obsidian.text'),
              fontWeight: '600',
            },
            h3: {
              color: theme('colors.obsidian.text'),
              fontWeight: '600',
            },
            strong: {
              color: theme('colors.obsidian.text'),
            },
            code: {
              color: theme('colors.obsidian.text'),
              backgroundColor: theme('colors.obsidian.light'),
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
