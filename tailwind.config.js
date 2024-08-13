/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-logo': "url('./src/assets/images/logo_bg.jpg')"
      },
      height: {
        '20p': '20%',
        '50p': '50%',
        '75p': '75%'
        // 可以添加更多的百分比高度
      }
    }
  },
  plugins: []
};
