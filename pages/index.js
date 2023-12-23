import Layout from "../components/Layout";
import React, {useEffect, useState} from "react";
import client from "../client";
import styles from '../styles/List.module.scss'
import ReactGA from 'react-ga';

export default function Home({data, soundtrack}) {

    if (data === undefined || soundtrack === undefined){
        return  <Layout></Layout>
    }

    return (
        <List data={data} soundtrack={soundtrack} />
    );
}

 function List ({data, soundtrack}) {
     const [playing, setPlaying] = useState(undefined)
     const [stats, setStats] = useState(undefined);

     useEffect(() => {
         const statsData = JSON.parse(localStorage.getItem("stats"));
         if (statsData) {
             setStats(statsData);
         } else {
             setStats(new Array(data.sounds.length).fill(0))
         }

     }, [data.sounds]);

     useEffect(() => {
         localStorage.setItem("stats", JSON.stringify(stats));
     }, [stats])


     const increaseStats = (index) => {
         let newStats;
         newStats = [...stats];
         newStats[index] += 1;
         setStats([...newStats]);
     }

     const handleClick = (index) => {

         if (playing !== undefined){
             let playingAudioElement = document.getElementById(playing)
             playingAudioElement.pause();
             playingAudioElement.currentTime = 0;
         }

         document.getElementById(index).play()
         setPlaying(index)

          ReactGA.event({
             category: 'User',
             action: `${data.sounds[index].caption}`,
         });
     }

     return (
         <Layout handleClick={() => document.getElementById('soundtrack').play()}>
             <audio id={'soundtrack'} src={soundtrack.file}/>
             <div className={styles.listContainer}>
                 {data.sounds.map((sound, index) => {
                     return (
                         <Item key={index} index={index} sound={sound} handleClick={(index) => {
                             increaseStats(index)
                             handleClick(index)
                         }} count={stats ? stats[index] : 0}/>
                     )
                 })}
             </div>
         </Layout>
     );
 }

 function Item ({sound, index, handleClick, count}) {

    return (
        <div className={styles.item} onClick={() => handleClick(index)}>
            <audio id={index} src={sound.url}/>
            <span className={styles.caption}>{sound.caption}</span>
            {count !== 0 ?
                <div className={styles.number}>
                    {count}
                </div>
                :
                <div className={styles.play}>
                </div>

            }
        </div>
    )

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
