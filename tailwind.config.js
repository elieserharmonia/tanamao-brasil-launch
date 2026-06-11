/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brandYellow: '#FFD100',
        brandBlack: '#0D0D0D',
        brandWhite: '#FFFFFF',
        brandGray: '#F5F5F5',
        brandGrayDark: '#1F1F1F'
      },
      boxShadow: {
        soft: '0 18px 60px rgba(0, 0, 0, 0.12)'
      },
      borderRadius: {
        brand: '24px'
      }
    }
  },
  plugins: []
};
