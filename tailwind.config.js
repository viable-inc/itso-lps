module.exports = {
  content: ['docs/index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans JP"', 'sans-serif'],
      },
      colors: {
        primary: '#53C8D2',
        primaryLight: {
          100: '#F0FEFF', // 90% 薄くした色
          200: '#D8FBFF', // 80% 薄くした色
          300: '#B7EFF5', // 60% 薄くした色
          400: '#95E2EA', // 40% 薄くした色
          500: '#74D5DE', // 20% 薄くした色
        },
      },
    },
  },
  plugins: [],
}
