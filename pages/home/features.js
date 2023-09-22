import React, { useState, useEffect } from 'react';

// styles & custom components
import styles from '@/pages/home/features.module.css'
import OutlineButton from '@/components/ui/outlineButton'

// Material UI
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

const Features = () => {

  const list = [
    {
      "id": 1,
      "title": "High Resolution Chirp Sounder",
      "text": "Lorem ipsum dolor sit amet consectetur. Arcu commodo nibh elementum facilisis tellus. Sit malesuada volutpat ut eget. Quis purus commodo enim auctor libero malesuada. Ornare facilisis pharetra tortor mi ac elementum leo sed mi. Quis dui proin mi ipsum enim.",
    },
    {
      "id": 2,
      "title": "120° side to side coverage",
      "text": "Lorem ipsum dolor sit amet consectetur. Arcu commodo nibh elementum facilisis tellus. Sit malesuada volutpat ut eget. Quis purus commodo enim auctor libero malesuada. Ornare facilisis pharetra tortor mi ac elementum leo sed mi. Quis dui proin mi ipsum enim.",
    },
    {
      "id": 3,
      "title": "Realtime CDX Mapping",
      "text": "Lorem ipsum dolor sit amet consectetur. Arcu commodo nibh elementum facilisis tellus. Sit malesuada volutpat ut eget. Quis purus commodo enim auctor libero malesuada. Ornare facilisis pharetra tortor mi ac elementum leo sed mi. Quis dui proin mi ipsum enim.",
    },
    {
      "id": 4,
      "title": "Realtime 3D View CDX",
      "text": "Lorem ipsum dolor sit amet consectetur. Arcu commodo nibh elementum facilisis tellus. Sit malesuada volutpat ut eget. Quis purus commodo enim auctor libero malesuada. Ornare facilisis pharetra tortor mi ac elementum leo sed mi. Quis dui proin mi ipsum enim.",
    },
    {
      "id": 5,
      "title": "Backscatter license",
      "text": "Lorem ipsum dolor sit amet consectetur. Arcu commodo nibh elementum facilisis tellus. Sit malesuada volutpat ut eget. Quis purus commodo enim auctor libero malesuada. Ornare facilisis pharetra tortor mi ac elementum leo sed mi. Quis dui proin mi ipsum enim.",
    },
    {
      "id": 6,
      "title": "High Resolution Side Scan",
      "text": "Lorem ipsum dolor sit amet consectetur. Arcu commodo nibh elementum facilisis tellus. Sit malesuada volutpat ut eget. Quis purus commodo enim auctor libero malesuada. Ornare facilisis pharetra tortor mi ac elementum leo sed mi. Quis dui proin mi ipsum enim.",
    },
    {
      "id": 7,
      "title": "Third-Party Software Integration",
      "text": "Lorem ipsum dolor sit amet consectetur. Arcu commodo nibh elementum facilisis tellus. Sit malesuada volutpat ut eget. Quis purus commodo enim auctor libero malesuada. Ornare facilisis pharetra tortor mi ac elementum leo sed mi. Quis dui proin mi ipsum enim.",
    },
    {
      "id": 8,
      "title": "Multiple WASSP Transducers",
      "text": "Lorem ipsum dolor sit amet consectetur. Arcu commodo nibh elementum facilisis tellus. Sit malesuada volutpat ut eget. Quis purus commodo enim auctor libero malesuada. Ornare facilisis pharetra tortor mi ac elementum leo sed mi. Quis dui proin mi ipsum enim.",
    },
  ]
  
  const [article, setArticle] = useState([]);

  useEffect(() => {
    const firstItem = list.find(item => item.id === 1)
    setArticle(firstItem)
  },[])

  const handleClick = (e, id) => {
    e.preventDefault();
    console.log('clicked')
    const clickedItem = list.find(item => item.id === id)
    setArticle(clickedItem)
  }

  const Articles =() =>{
    return(
      <Box key={article.title}>
        <Typography variant='body1' pt={3.5} pb={4.5} sx={{ fontSize: 38}}>{"0" + article.id}</Typography>
        <Typography variant='h3' pb={2} sx={{ fontSize: { xs:'2.8rem', md: '4rem', xl:'5rem'}}}>{article.title}</Typography>
        <Typography variant='body1' sx={{ paddingRight:{ xs: 3, md: 10, xl: 30 }}}>{article.text}
        </Typography>
      </Box>
    )
  }
  
    return ( 
      <div className={styles.feature_bg}>
        <Grid container pt={40} pl={6} pb={55}>
          <Grid item xs={2} md={1.1} sx={{ paddingBottom: {xs: '3rem', md:'5', xl:'0'}}}>
            <Typography variant='h6'>03</Typography>
          </Grid>
          <Grid item xs={8} md={3.3}>
            <Typography variant='h6'>features</Typography>
          </Grid>
          <Grid item md={7}>

          {/* The button shoud be horizontally lined when it is xs !!!!!!!!!!!!!!! */}

            {list.map((item) => (
              <OutlineButton key={item.id} onClick={(e) => handleClick(e, item.id)}>
                <Typography variant='h6' pr={2}>{"0" + item.id.toString()}</Typography>
                {item.title}</OutlineButton>
            ))}
            <Articles />
          </Grid>
        </Grid>
      </div>
    )
  }

export default Features;