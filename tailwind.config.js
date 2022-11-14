// tailwind.config.js
module.exports = {
  content: ['./public/**/*.html',
            './src/**/*.html',],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants:{
    extend:{
      // opacity : ['disabled'],
      // backgroundColor: ['checked'],
      // borderColor: ['checked'],
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
