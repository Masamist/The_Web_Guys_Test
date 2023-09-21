import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

// Page components
import HomeTop from './home/homeTop'
import AboutWassp from './home/aboutWassp'
import FSeries from './home/fSeries'
import Features from './home/features'
import LineBanner from './home/lineBanner'
import Testimonials from './home/testimonials'
import LatestNews from './home/latestNews'
import ImageBanner from './home/imageBanner'

// styles & custom components
import styles from '@/styles/Home.module.css'


//const inter = Inter({ subsets: ['latin'] })
const Home = () => {
  return(
    <div className={styles.background_gradient}>
      <HomeTop />
      <AboutWassp  />
      <FSeries />
      <Features />
      <LineBanner />
      <Testimonials />
      <LatestNews />
      <ImageBanner /> 
    </div>
  )
}

// const Home: NextPage<{ characters:Character[] }> = ({characters}) =>{
//   return (
//     <div>
//       <Head>
//         <title>wassp</title>
//         <meta name="description" content="wassp webpage" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       {characters.map((character) => {
//         return (
//           <div key={character.id}>
//             {character.name}
//             <Image
//               src={character.image}
//               alt={character.name}
//               width="200"
//               height="200"
//               />
//           </div>
//         )
//         })}
//     </div>
//   )
// }

// export const getStaticProps: GetStaticProps = async (context) =>{
//   const res = await fetch("https://rickandmortyapi.com/api/character")
//   const { results }: GetCharacterResults = await res.json()

//   return{
//     props:{
//       characters: results,
//     },
//   }
// }

export default Home
