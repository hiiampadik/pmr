import Layout from "../components/Layout";
import client from "../client";
import ReactGA from 'react-ga';

export default function About() {

  return (
    <Layout title={"Info"}>
    </Layout>
  );
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const about = await client.fetch(
      `
        *[_type == 'about'][0]
      `,
      ""
  );

  return {
    props: {
      about,
    },
    revalidate: 10,
  };
}
