import TopMenu from "./TopMenu";

import React from "react";
import Head from "next/head";

export default function Layout({ 
  title = 'Pimp Maj Rajt',
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
      </Head>
      <TopMenu />
      <main>{children}</main>
    </>
  );
}
