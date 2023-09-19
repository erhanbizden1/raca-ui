import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div id="app">
      <Head>
        <link rel="icon" href="https://res.cloudinary.com/dyuydfuew/image/upload/v1687694132/RACA_Logo_26bb189bd5.svg" sizes="any" />
        <script>
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '275300132114169');
fbq('track', 'PageView');`}
        </script>
        <noscript><img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=275300132114169&ev=PageView&noscript=1"
        /></noscript>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>)
}

export default MyApp
