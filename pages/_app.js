import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div id="app">
      <Head>
        <link rel="icon" href="https://res.cloudinary.com/dyuydfuew/image/upload/v1687694132/RACA_Logo_26bb189bd5.svg" sizes="any" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>)
}

export default MyApp
