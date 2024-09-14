/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'modal-pattern': "url('./IMG_1260.jpg')",
        'cv-avatar': "url('./cv-avatar.jpg')",
        'corteva-logo':"url('./corteva_logo.jpg')",
        'basf-logo': "url('./BASF-Logo.jpg')",
        'ntu-logo':"url('./ntu_logo.jpg')",
        'nchu-logo':"url('./nchu_logo.jpg')",
        'parkinglot-logo': "url('./parkinglot_logo.png')",
        'weatherapp-logo':"url('./weatherapp_logo.webp')"
      },
      // backgroundSize:{
      //   'cover': 'cover'
      // },
      // backgroundPosition:{
      //   'center': 'center'
      // }
    },
  },
  plugins: [
    // require('@tailwindcss/line-clamp'),
  ],
}

