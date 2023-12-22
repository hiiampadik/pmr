import Layout from "../components/Layout";
import React from "react";
import client from "../client";
import styles from '../styles/List.module.scss'
import useSound from "use-sound";

export default function Home({data, soundtrack}) {


    const [play] = useSound(soundtrack.file);


  return (
    <Layout handleClick={() => play()}>
      <ul className={styles.listContainer}>
        {data?.sounds.map((sound, index) => {
          return (
              <Line key={index} sound={sound}/>
          )
        })}
      </ul>
    </Layout>
  );
}



export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"

    const data = await client.fetch(
        `
        *[_type == 'sounds'][0]
        {
            "sounds": sounds[]{
                "url": asset->url,
                "caption": caption,
                "author": author
              }
        }
      `,
        ""
    );

    const soundtrack = await client.fetch(
        `
        *[_type == 'about'][0]
        {
            "file": file.asset->url
        }
      `,
        ""
    );

  return {
    props: {
      data,
        soundtrack
    },
    revalidate: 10,
  };
}

export function Line({sound}) {

    const [play] = useSound(sound.url);

    return (
        <li>
            <div className={styles.play} onClick={play}>
            </div>
            <div className={styles.author}>
                {sound.author === 'other' && '-'}
                {sound.author === 'hanak' && 'Hanák'}
                {sound.author === 'xzibit' && 'XZibit'}
            </div>
            <div className={styles.caption}>{sound.caption}</div>
        </li>
    )

}
