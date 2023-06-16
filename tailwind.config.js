module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'merriweather': ['Merriweather', 'serif'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        sm: '79px',
        lg: '30px',
        xl: '40px',
        '2xl': '40px',
      },
      screens:{
        sm: '600px',
        md: '768px',
        lg: '1023px',
        xl: '1440px',
      }
    },
    extend: {
      colors: {
        'black': '#000C1F',
        'blue':"#003A8F",
        'white':"#EBECED",
        'grey-light':'#C2C5C9',
        'grey':'#3D4655',
        'bg-blue': '#00193D',
        "black-blue":'#1E1E1E',
        'border':'#CBB181'
      },
    },
  },
  plugins: [],
}
