module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
       perspective: {
      '1000': '1000px',
      transform: ["group-hover"],
    },
    },
  },
  plugins: [],
}; 