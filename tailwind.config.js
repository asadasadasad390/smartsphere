module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class', // enable class-based dark mode
  theme: {
    extend: {
      colors: {
        'ai-primary': 'var(--color-ai-primary)',
        'ai-secondary': 'var(--color-ai-secondary)',
        'glass': 'var(--color-glass)',
        'glass-border': 'var(--color-glass-border)'
      }
    }
  },
  plugins: []
};
