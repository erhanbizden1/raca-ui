import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div id="app">
      <Head>
        <title>THE ROYAL - AUTOMOBILE CLUB OF AUSTRALIA</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>)
}

export default MyApp
