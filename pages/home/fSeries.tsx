import React, { useState } from 'react'
import { animated, useSpring, config } from '@react-spring/web'
import { Waypoint } from 'react-waypoint'

// styles & custom components
import styles from '@/pages/home/fSeries.module.css'

// Material UI
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

const FSeries = () => {

  const [visible, toggle] = useState<boolean>(false)
  const animation = useSpring({
    opacity: visible ? 1 : 0,
    y: visible ? 0 : 40,
    config: config.slow
  })

  return(
    <div className={styles.fishing_series_bg}>
      <Waypoint
        bottomOffset="60%" 
        onEnter={() => toggle(true)} 
        />
        <animated.div style={animation} className={styles.aniDiv}>        
          <Grid container 
            justifyContent={'space-between'} 
            alignItems={'flex-end'} 
            pl={6} pr={2}
            sx={{ paddingTop: {xs:'0', md:'45rem', xl:'50rem'}}}
          >
            <Grid item xs={12} md={8}>
              <Grid  container spacing={2} pb={4}>
                <Grid item>
                  <Typography variant='h6'>01</Typography>
                </Grid>              
                <Grid item>
                  <Box 
                    sx={{ borderTop: 1, width:180, marginTop:1.5}}
                  ></Box>
                </Grid>
                <Grid item>
                  <Typography variant='h6'>03</Typography>
                </Grid>
              </Grid>
                
              <Typography variant='h6' pb={4} sx={{ display:{xs:"none", md:"block"}}}>(FISHING SERIES)</Typography>
              <Typography variant='h1'>F - SERIES</Typography>
            </Grid>

          <Grid item xs={12} md={3.5}>
            <Typography variant='body1' pb={2}>F - SERIES</Typography>
            <Typography 
              variant='body1' 
              pb={5} 
              sx={{ width: {xs:'20rem', md:'100%'}}}>
              WASSP Multibeam finds fish and habitat over a wider area than single-beam systems.
            </Typography>

            <Button 
              variant='text' 
              sx={{
                textDecoration: 'underline',
                textDecorationThickness: 1
              }}>
              Explore Now</Button>
          </Grid>
        </Grid>
      </animated.div>
    </div>
  )
}

export default FSeries