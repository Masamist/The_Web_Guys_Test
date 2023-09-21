// styles & custom components
import styles from '@/pages/home/testimonials.module.css'

// Material UI
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

const Testimonials = () => {
  return(
    <div className={styles.testimonials_bg }>
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
    </div>
  )
}

export default Testimonials