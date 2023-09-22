import Head from 'next/head';
import Layout from '../components/layout/layout'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider, createTheme } from '@mui/material/styles'

import type { AppProps } from 'next/app'
import '@/styles/globals.css'

const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: '#1h1h1h',
  //   },
  // },
  typography: {
    fontFamily: 'norwester',
    fontWeightLight: 200,
    fontWeightRegular: 300,
    fontWeightMedium: 400,
    fontWeightBold: 500,
    h1:{
      fontSize: '4.2rem',
      '@media (min-width:900px)': {
        fontSize: '6rem',
      },
      '@media (min-width:1200px)': {
        fontSize: '8.1rem',
      },
    },
    h2:{
      fontSize: '3.1rem',
      '@media (min-width:900px)': {
        fontSize: '4.2rem',
      },
      '@media (min-width:1200px)': {
        fontSize: '5.8rem',
      },
      lineHeight: 1.2,
    },
    h3:{
      fontFamily: 'neue-haas-grotesk-display',
      fontSize: '5rem',
      '@media (min-width:900px)': {
        fontSize: '5.5rem',
      },
      '@media (min-width:1200px)': {
        fontSize: '6rem',
      },
      lineHeight: 1.25,
    },
    h4:{
      fontSize: '1.5rem',
      '@media (min-width:900px)': {
        fontSize: '1.5rem',
      },
      '@media (min-width:1200px)': {
        fontSize: '2.1rem',
      },
    },
    h5:{
      fontFamily: 'neue-haas-grotesk-display',
      fontSize: '1.9rem',
      '@media (min-width:800px)': {
        fontSize: '1.5rem',
      },
      '@media (min-width:1200px)': {
        fontSize: '2.2rem',
      },
      lineHeight: 1.1,
    },
    h6:{
      fontSize: '1rem',
      '@media (min-width:800px)': {
        fontSize: '1.2rem',
      },
      '@media (min-width:1200px)': {
        fontSize: '1.4rem',
      },
    },
    body1:{
      fontFamily: 'neue-haas-grotesk-display',
      fontSize: '1.2rem',
      lineHeight:1.25 ,
      '@media (min-width:800px)': {
        fontSize: '1.3rem',
        lineHeight:1.2,
      },
      '@media (min-width:1200px)': {
        fontSize: '1.4rem',
      },

    },
  },
  components:{
    MuiButton:{
      styleOverrides:{
        root:{
          fontSize: 21,
          fontFamily:'neue-haas-grotesk-display',
          color:'#fff',
          textTransform: 'none',
          '&:hover': {
            borderColor:'#fff',
            opacity:.5,
          }
        }
      }
    },
    MuiCard:{
      styleOverrides:{
        root:{
          border:'1px solid #fff',
          backgroundColor: 'transparent',
          color: '#fff'
        }
      }
    }
  }
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Head>
          <title>wassp</title>
          <meta name="description" content="wassp webpage" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
    
  )
}


          {/* for textScroll */}
          {/* <link rel="stylesheet" href="https://use.typekit.net/zda3gdw.css" /> */}
          {/* <link rel="stylesheet" type="text/css" href="../animation/textScroll.css" /> */}
          {/* <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script> */}
          {/* <script type="text/javascript" src="../components/utils/headTextScrollScript.js"></script> */}
          {/* <script src="//tympanus.net/codrops/adpacks/analytics.js"></script> */}