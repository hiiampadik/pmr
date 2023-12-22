import Layout from "../components/Layout";
import React from "react";
import client from "../client";
import styles from '../styles/List.module.scss'

export default function Home({data, soundtrack}) {

  return (
    <Layout handleClick={() => document.getElementById('soundtrack').play()}>
        <audio id={'soundtrack'} src={soundtrack.file}/>
      <ul className={styles.listContainer}>
        {data?.sounds.map((sound, index) => {
          return (
              <Line key={index} index={index} sound={sound}/>
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

export function Line({sound, index}) {

    return (
        <li>
            <audio id={index} src={sound.url}/>

            <div className={styles.play} onClick={() => document.getElementById(index).play()}>
            </div>
            {/*<div className={styles.author}>*/}
            {/*    {sound.author === 'other' && '-'}*/}
            {/*    {sound.author === 'hanak' && 'Hanák'}*/}
            {/*    {sound.author === 'xzibit' && 'XZibit'}*/}
            {/*</div>*/}
            <div className={styles.caption}>{sound.caption}</div>
        </li>
    )

}
