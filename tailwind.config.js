/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'modal-pattern': "url('./IMG_1260.jpg')",
        'cv-avatar': "url('./cv-avatar.jpg')",
        'wehelp-logo':"url('./wehelp_logo.png')",
        'corteva-logo':"url('./corteva_logo.jpg')",
        'basf-logo': "url('./BASF-Logo.jpg')",
        'ntu-logo':"url('./ntu_logo.jpg')",
        'nchu-logo':"url('./nchu_logo.jpg')",
        'parkinglot-logo': "url('./parkinglot_logo.png')",
        'taipeidaytrip-logo': "url('./taipei_icon.png')",
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

