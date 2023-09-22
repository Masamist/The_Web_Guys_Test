import React, { useState, useEffect } from 'react';
import { animated, useSpring } from '@react-spring/web'
import { Waypoint } from 'react-waypoint'

// styles & custom components
import styles from '@/pages/home/features.module.css'
import OutlineButton from '@/components/ui/outlineButton'

// Material UI
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

const Features = () => {

  const [visible, toggle] = useState(false)
  const animation = useSpring({
    opacity: visible ? 1 : 0,
    config: { 
      mass: 180,
      tension: 300, 
      friction: 80
     }
  })
  
  const list = [
    {
      "id": 1,
      "title": "High Resolution Chirp Sounder",
      "text": "Lorem ipsum dolor sit amet consectetur. Arcu commodo nibh elementum facilisis tellus. Sit malesuada volutpat ut eget. Quis purus commodo enim auctor libero malesuada. Ornare facilisis pharetra tortor mi ac elementum leo sed mi. Quis dui proin mi ipsum enim.",
    },
    {
      "id": 2,
      "title": "120° side to side coverage",
      "text": "Commodo nibh elementum facilisis tellus. Sit malesuada volutpat ut eget. Quis purus commodo enim auctor libero malesuada. Ornare facilisis pharetra tortor mi ac elementum .",
    },
    {
      "id": 3,
      "title": "Realtime CDX Mapping",
      "text": "Arcu commodo nibh elementum facilisis tellus. Sit malesuada volutpat ut eget. Quis purus commodo enim auctor libero malesuada. Quis dui proin mi ipsum enim.",
    },
    {
      "id": 4,
      "title": "Realtime 3D View CDX",
      "text": "Sit malesuada volutpat ut eget. Quis purus. Ornare facilisis pharetra tortor mi ac elementum leo sed mi. Quis dui proin mi ipsum enim.",
    },
    {
      "id": 5,
      "title": "Backscatter license",
      "text": "Lorem ipsum dolor sit amet consectetur. Arcu commodo nibh elementum facilisis tellus. Sit malesuada volutpat ut eget. Quis purus commodo enim auctor libero malesuada ac elementum leo sed mi. Quis dui proin mi ipsum enim.",
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
  
  const [article, setArticle] = useState([])
  const [buttonActive, setButtonActive] = useState()

  useEffect(() => {
    const firstItem = list.find(item => item.id === 1)
    setArticle(firstItem)
    setButtonActive(1)
  },[])

  const handleClick = (e, id) => {
    e.preventDefault();
    console.log('clicked')
    const clickedItem = list.find(item => item.id === id)
    setArticle(clickedItem)
    setButtonActive(id)
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
        <Waypoint
          bottomOffset="60%" 
          onEnter={() => toggle(true)}
         />
        <animated.div style={animation}>  
          <Grid container pt={40} pl={6} pb={55}>
            <Grid item xs={2} md={1.1} pb={5}>
              <Typography variant='h6'>03</Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography variant='h6'>features</Typography>
            </Grid>
            <Grid item xs={12} md={7}>

            {/* The button shoud be horizontally lined when it is xs !!!!!!!!!!!!!!! */}
              {list.map((item) => (
                <OutlineButton 
                  key={item.id}
                  active={item.id===buttonActive? true: false}
                  onClick={(e) => handleClick(e, item.id)} >
                  <Typography variant='h6' pr={2}>{"0" + item.id.toString()}</Typography>
                  {item.title}</OutlineButton>
              ))}
              <Articles />
            </Grid>
          </Grid>
        </animated.div>
      </div>
    )
  }

export default Features;