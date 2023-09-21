import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

// Page components
import AboutWassp from './home/aboutWassp'
import FSeries from './home/fSeries'
import Features from './home/features'
import LineBanner from './home/lineBanner'
import Testimonials from './home/testimonials'
import LatestNews from './home/latestNews'
import ImageBanner from './home/imageBanner'

// styles & custom components
import styles from '@/styles/Home.module.css'

import OutlineButtonArrow from '../components/ui/outlineButtonArrow'
import CardNews from '../components/ui/cardNews'

// Material UI
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'


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


const HomeTop = () => {
  return(
    <div className={styles.hometop_bg}>
      <Box sx={{ 
        flexGrow: 1,
        paddingTop: { xs: 20, md: 41 },
        paddingLeft: { xs: 3, md: 6 }
        }}
      >
        <Typography variant='h4' pb={1}>SEA IT ALL</Typography>
        <Typography variant="h2">MULTIBEAM SONAR<br />PRODUCTS & SOLUTIONS.</Typography>
      </Box>

      <Grid 
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-end"
        sx={{ flexGrow: 1, paddingTop: { xs: 58, md: 44 }, paddingLeft:{ xs: 3, md: 0 } }}
      >
      <Grid item xs={12} md={5} sx={{ paddingBottom:{ xs: 6.5, md: 0 } }}>
        <Box sx={{ width: { xs: 320, md: 300 } }}>
          <Typography variant='body1'>WASSP multi-beam enables sustainable fishing, 
          exploration, and surveys with versatility and detail.</Typography>
        </Box>        
      </Grid>
      <Grid item xs={12} md={4} xl={2}>
        <OutlineButtonArrow>Contact Us</OutlineButtonArrow>
      </Grid>
      <Grid 
        item
        xs={12}
        sx={{ 
          height: 89.5,
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0%), rgba(5, 36, 54, 100%), rgba(5, 36, 54, 100%))',
          }}
      >
      </Grid>
    </Grid>
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
