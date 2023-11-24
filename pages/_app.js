import "../styles/globals.scss";

import { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";


function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      {/*<Script*/}
      {/*  id="ga"*/}
      {/*  strategy="lazyOnload"*/}
      {/*  src={`https://www.googletagmanager.com/gtag/js?id=G-733EGJQ16E`}*/}
      {/*/>*/}
      {/*<Script strategy="lazyOnload" id="ga2">*/}
      {/*  {`*/}
      {/*        window.dataLayer = window.dataLayer || [];*/}
      {/*        function gtag(){dataLayer.push(arguments);}*/}
      {/*        gtag('js', new Date());*/}
      {/*        gtag('config', 'G-733EGJQ16E', {*/}
      {/*            page_path: window.location.pathname,*/}
      {/*        });*/}
      {/*    `}*/}
      {/*</Script>*/}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
