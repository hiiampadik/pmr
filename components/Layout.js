import TopMenu from "./TopMenu";

import React from "react";
import Head from "next/head";

export default function Layout({ 
  title = 'Pimp Maj Rajt',
  handleClick,
  children 
}) {
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="pimp maj rajt"
        />
        <link rel="stylesheet" href="https://use.typekit.net/ynq5zhh.css" />

          <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png"/>
          <link rel="manifest" href="/favicon_io/site.webmanifest"/>
      </Head>
      <TopMenu handleClick={() => handleClick()}/>
      <main>{children}</main>
    </>
  );
}
