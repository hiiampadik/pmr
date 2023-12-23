import "../styles/globals.scss";
import Script from "next/script";

import ReactGA from 'react-ga';

function MyApp({ Component, pageProps }) {

    if (typeof window !== "undefined") {
        ReactGA.initialize('G-PV0H6J5W2Y');
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    return (
        <>
          {/*  <Script*/}
          {/*      id="ga"*/}
          {/*      strategy="lazyOnload"*/}
          {/*      src={`https://www.googletagmanager.com/gtag/js?id=G-PV0H6J5W2Y`}*/}
          {/*  />*/}
          {/*  <Script strategy="lazyOnload" id="ga2">*/}
          {/*      {`*/}
          {/*      window.dataLayer = window.dataLayer || [];*/}
          {/*      function gtag(){dataLayer.push(arguments);}*/}
          {/*      gtag('js', new Date());*/}

          {/*      gtag('config', 'G-PV0H6J5W2Y');*/}
          {/*`}*/}
          {/*  </Script>*/}
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
