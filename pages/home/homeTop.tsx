import React, { useState } from 'react'
import { animated, useSpring } from '@react-spring/web'
import { Waypoint } from 'react-waypoint'

// styles & custom components
import styles from '@/pages/home/homeTop.module.css'
import OutlineButtonArrow from '@/components/ui/outlineButtonArrow'

// Material UI
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

const HomeTop = () => {

  const [visible, toggle] = useState<boolean>(false)
  const animation = useSpring({
    opacity: visible ? 1 : 0,
    y: visible ? 0 : 40,
    config: { mass: 10, tension: 280, friction: 60 }
  })

  return(
    <div className={styles.hometop_bg}>
      <Waypoint onEnter={() => toggle(true)} />
        <animated.div style={animation}>
          <Box sx={{ 
            flexGrow: 1,
            width: {xs: '32.3rem', md: '50rem', xd: '65rem' },
            paddingTop: { xs: 20, md: 41 },
            paddingLeft: { xs: 3, md: 6 },
            }}
          >
            <Typography variant='h4' pb={1}>SEA IT ALL</Typography>
            <Typography variant="h2" >MULTIBEAM SONAR PRODUCTS & SOLUTIONS.</Typography>
          </Box>
              
          <Grid 
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="flex-end"
            sx={{ 
              flexGrow: 1, 
              paddingTop: { xs: 58, md: 44 }, 
              paddingLeft:{ xs: 3, md: 0 },
              paddingBottom:{ xs: 3, md: 0},
            }}
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
              item xs={12}
              sx={{ 
                height: 89.5,
                background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0%), rgba(5, 36, 54, 100%), rgba(5, 36, 54, 100%))',
              }}
            >
          </Grid>
      </Grid>
    </animated.div>
  </div>
  )
}

export default HomeTop