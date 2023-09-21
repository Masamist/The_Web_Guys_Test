// styles & custom components
import styles from '@/pages/home/features.module.css'

import OutlineButtonArrow from '@/components/ui/outlineButtonArrow'

// Material UI
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

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

export default HomeTop