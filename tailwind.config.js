/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'serif'],
        script: ['Caveat', 'cursive'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: {
          50: '#fffdf8',
          100: '#fdf7ec',
          200: '#f8edd5',
          300: '#f1dcae',
          400: '#e7c483',
        },
        roseblush: {
          300: '#f7a8c4',
          400: '#f488b0',
          500: '#ec5e98',
          600: '#d83f7e',
        },
        ambergold: {
          400: '#f5b840',
          500: '#e8a020',
          600: '#c98012',
        },
        sage: {
          300: '#c2d9b6',
          400: '#9bbb8c',
          500: '#7a9c6b',
        },
        ink: {
          700: '#5b4a3a',
          800: '#473a2d',
          900: '#332a20',
        },
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'soft-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.06)', opacity: '0.85' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'drift': {
          '0%': { transform: 'translateY(0) rotate(0deg)' },
          '100%': { transform: 'translateY(-120vh) rotate(360deg)' },
        },
        'flicker': {
          '0%, 100%': { transform: 'scale(1) rotate(-1deg)', opacity: '1' },
          '25%': { transform: 'scale(1.05) rotate(1deg)', opacity: '0.92' },
          '50%': { transform: 'scale(0.97) rotate(-2deg)', opacity: '1' },
          '75%': { transform: 'scale(1.03) rotate(1deg)', opacity: '0.95' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.9s cubic-bezier(0.22,1,0.36,1) forwards',
        'soft-pulse': 'soft-pulse 3s ease-in-out infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'drift': 'drift linear infinite',
        'flicker': 'flicker 0.5s ease-in-out infinite',
        'shimmer': 'shimmer 6s linear infinite',
        'spin-slow': 'spin-slow 24s linear infinite',
      },
    },
  },
  plugins: [],
};
