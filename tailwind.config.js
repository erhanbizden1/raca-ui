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
        DEFAULT: '15px',
        sm: '30px',
        lg: '30px',
        xl: '40px',
        '2xl': '40px',
      },
      screens:{
        sm: '600px',
        md: '768px',
        lg: '1320px',
        xl: '1750px',
      }
    },
    extend: {
      colors: {
        'black': '#000C1F',
        'blue':"#003A8F",
        'white':"#EBECED",
        'grey':'#3D4655',
        'bg-blue': '#00193D',
      },
    },
  },
  plugins: [],
}
