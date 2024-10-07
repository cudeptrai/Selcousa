/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#333fff', // Màu chủ đạo
        grayTitle: '#c5c5c5',
        grayContent: '#767676',
        bgfooter: '#252525',
        bgfooterBot: '#1c1c1c',
        colorContent: '#404040',
        codeProducts:'#fe9c00',
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'], // Thêm font Oswald
      },
      
    },
  },
  plugins: [],
}
