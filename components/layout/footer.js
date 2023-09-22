// styles & custom components
import styles from './footer.module.css'
import OutlineButtonArrow from '../ui/outlineButtonArrow'

// Material UI
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

function Footer() {
  const footerNav=['Home', 'Products', 'About ENL', 'Multibeam Technology', 'News', 'Resources', 
  'Contact']

  const socialNetwork=['Facebook', 'Instagram', 'Youtube']

  const locations=['Office', 'Auckland - NZ', 'Essex - UK']

  return (
    <footer className={styles.footer_container}>
      <Grid container pt={36} pl={6} pb={10}>
        <Grid item xs={12} md={5.6} xl={7.8} >
          <Typography variant='h5' pb={10}>Dui duis facilisis id et ullamcorper<br /> diam est. Vulputate ac magna in id.</Typography>
          <OutlineButtonArrow>Contact</OutlineButtonArrow>
          <Button 
            variant='text' 
            sx={{
              textDecoration: 'underline',
              textDecorationThickness: 1,
              display:'block',
              paddingTop: { xs: 7, md: 15},
              paddingBottom: { xs: 7, md: 15},
            }}>
            Subscribe to our newsletter</Button>
        </Grid>
        <Grid item xs={4} md={3.4} xl={2.7}>
          <Box pb={3.5}>
            {footerNav.map((navlink) => (
              <Typography key={navlink} variant="body1" color="#fff" pb={1.8}>{navlink}</Typography>
            ))}
          </Box>
          <Box>
            {socialNetwork.map((socialLink) => (
              <Typography key={socialLink} variant="body1" color="#fff" pb={1.8}>{socialLink}</Typography>
            ))}
          </Box>            
        </Grid>

        <Grid item md={2} xl={1.1}>
          <Grid container direction="column" justifyContent="space-between">
            <Grid item sx={{ hight: 50}}>
              {locations.map((location) => (
                <Typography key={location} variant="body1" color="#fff" pb={2}>{location}</Typography>
              ))}
            </Grid>
            <Grid item>
            <Typography variant='body1'>©2023 WASSP</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Bug Here!!! Font size does not change */}
        <Typography 
          variant='h1'
          align='center'
          pb={3}
          sx={{ fontSize: { xs:"6rem", md:"8rem", xl:"12rem" }, color: "rgb(1, 15, 51)"}}
          >
            WASSP MULTIBEAM
        </Typography>
  </footer>
  );
}

export default Footer;