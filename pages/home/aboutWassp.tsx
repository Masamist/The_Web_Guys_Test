import React, { useState } from 'react'
import { animated, useSpring, config } from '@react-spring/web'
import { Waypoint } from 'react-waypoint'

// styles & custom components
import styleCss from '@/pages/home/aboutWassp.module.css'
import OutlineButtonArrow from '@/components/ui/outlineButtonArrow'

// Material UI
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'


const AboutWassp = () => {

  const [visible, toggle] = useState<boolean>(false)
  const animation = useSpring({
  opacity: visible ? 1 : 0,
  y: visible ? 0 : 40,
  config: config.slow
  })

  return(
    <div className={styleCss.about_bg}>

    <Waypoint
        bottomOffset="60%" 
        onEnter={() => toggle(true)} 
        />
      <animated.div style={animation}>

        <Grid 
        container
        justifyContent={'flex-end'}
        sx={{ 
          flexGrow: 1,
          paddingTop: { xs: 24, md: 41 },
          paddingLeft: 3,
          paddingBottom: 30,
          }}
        >
          <Grid item xs={12} md={9}>
            <Typography 
              variant='h2' 
              sx={{ paddingBottom: { xs: 2.5, md: 6 }}}>
              welcome to the world of<br />wassp multibeam
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Grid container>
              <Grid item xs={2} md={1.5}>
                <Typography variant='h6' sx={{paddingBottom: { xs: 5.9, md: 0 }}}>01</Typography>
              </Grid>
              <Grid item xs={10} md={3}>
                <Typography variant='h6'>ABOUT WASSP</Typography>
              </Grid>
              <Grid item xs={12} md={4.5}>
                <Typography 
                  variant='body1' pb={5} 
                  sx={{ paddingRight: { xs: 4, md: 0 }, paddingBottom: { xs: 8.4, md: 5.5 }}}>
                WASSP, a powerful multi-beam sounder with 120-degree coverage and models for deep exploration, 
                offers unparalleled accuracy, detail, and versatility. Target fish with steerable sounders, 
                generate real-time 3D charts, map fish in water, 
                and make better decisions with the user-friendly advanced mode.
                </Typography>
                <OutlineButtonArrow>Our Story</OutlineButtonArrow>
              </Grid>
            </Grid>
          </Grid>

        </Grid>
        </animated.div>
    </div>
  )
}

export default AboutWassp;