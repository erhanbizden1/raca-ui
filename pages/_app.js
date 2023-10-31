import Head from 'next/head'
import Script from 'next/script'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div id="app">
      <Head>
        {/* Google Tag Mamager */}
        <script type='text/javascript' async dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M5NTRQTN');`}} />
        {/* End Google Tag Manager */}
        <Script>
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
        </Script>
        <Script><img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=275300132114169&ev=PageView&noscript=1"
        /></Script>
        <link rel="icon" href="https://res.cloudinary.com/dyuydfuew/image/upload/v1687694132/RACA_Logo_26bb189bd5.svg" sizes="any" />

      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
      {/* Google Tag Manager (noscript) */}
      <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M5NTRQTN" height="0" width="0" style="display:none;visibility:hidden"></iframe>` }}></noscript>
    </div>)
}

export default MyApp
