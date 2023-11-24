import Layout from "../components/Layout";
import React from "react";
import client from "../client";

export default function Home({sounds}) {

  return (
    <Layout>


    </Layout>
  );
}



export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"

  const about = await client.fetch(
      `*[_type == 'sounds'][0]`
  );

  return {
    props: {
      about,
    },
    revalidate: 10,
  };
}
