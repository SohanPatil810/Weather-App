import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        glass: '0 20px 80px rgba(15, 23, 42, 0.18)'
      },
      backgroundImage: {
        gradientGlass: 'radial-gradient(circle at top left, rgba(59, 130, 246, 0.2), transparent 36%), radial-gradient(circle at bottom right, rgba(234, 179, 8, 0.18), transparent 32%)'
      }
    }
  },
  plugins: []
};
