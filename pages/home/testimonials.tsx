import React, { useState } from 'react'
import { animated, useSpring, easings } from '@react-spring/web'
import { Waypoint } from 'react-waypoint'

// styles & custom components
import styles from '@/pages/home/testimonials.module.css'

// Material UI
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'


const Testimonials = () => {

  const [visible, toggle] = useState<boolean>(false)
  const animation = useSpring({
    opacity: visible ? 1 : 0,
    x: visible ? 0 : -10,
    y: visible ? 0 : 40,
    config: { 
      mass: 200,
      tension: 280, 
      friction: 80, 
      easings: easings.easeInQuart  }
  })

  return(
    <div className={styles.testimonials_bg }>
      <Waypoint onEnter={() => toggle(true)} />
      <animated.div style={animation}>     
        <Grid container pt={25} pl={6} pb={40}>
          <Grid item md={1.1}>
            <Typography variant='h6'>04</Typography>
          </Grid>
          <Grid item md={3.2}>
            <Typography variant='h6'>TESTIMONIALS</Typography>
          </Grid>
          <Grid item md={7.5}>
            <Typography variant='h2' pb={4.5}>
              “WASSP LETS ME GO TO WHERE I WOULD NEVER HAVE FISHED BEFORE,
              GIVING ME A HIGHER CATCH WITH REDUCED FUEL CONSUMPTION.”
            </Typography>
            <Typography variant='body1'>
              Dominique Faou<br />Owner/Skipper, France
            </Typography>
          </Grid>
        </Grid>
      </animated.div>
    </div>
  )
}

export default Testimonials