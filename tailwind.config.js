module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          50: "#EFF6FF", // blue-50
          100: "#DBEAFE", // blue-100
          500: "#3B82F6", // blue-500
          600: "#2563EB", // blue-600 - Main primary
          700: "#1D4ED8", // blue-700
          900: "#1E3A8A", // blue-900
          DEFAULT: "#2563EB", // blue-600
        },
        // Secondary Colors
        secondary: {
          100: "#F1F5F9", // slate-100
          200: "#E2E8F0", // slate-200
          300: "#CBD5E1", // slate-300
          400: "#94A3B8", // slate-400
          500: "#64748B", // slate-500 - Main secondary
          600: "#475569", // slate-600
          700: "#334155", // slate-700
          DEFAULT: "#64748B", // slate-500
        },
        // Accent Colors
        accent: {
          100: "#FEF3C7", // amber-100
          500: "#F59E0B", // amber-500 - Main accent
          600: "#D97706", // amber-600
          DEFAULT: "#F59E0B", // amber-500
        },
        // Background Colors
        background: "#FAFAFA", // gray-50
        surface: "#FFFFFF", // white
        // Text Colors
        text: {
          primary: "#1E293B", // slate-800
          secondary: "#64748B", // slate-500
        },
        // Status Colors
        success: {
          100: "#D1FAE5", // emerald-100
          500: "#10B981", // emerald-500
          DEFAULT: "#10B981", // emerald-500
        },
        warning: {
          100: "#FEF3C7", // amber-100
          500: "#F59E0B", // amber-500
          DEFAULT: "#F59E0B", // amber-500
        },
        error: {
          100: "#FEE2E2", // red-100
          500: "#EF4444", // red-500
          DEFAULT: "#EF4444", // red-500
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'base': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'modal': '0 10px 25px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'card': '8px',
        'button': '6px',
        'input': '4px',
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '200ms',
        'slow': '300ms',
        'layout': '500ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 300ms ease-out',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
}
