import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div id="app">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>)
}

export default MyApp
