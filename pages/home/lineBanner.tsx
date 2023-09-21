// styles & custom components
import styles from '@/pages/home/lineBanner.module.css'

// Material UI
import Typography from '@mui/material/Typography'

const LineBanner = () => {
  return(
    <div>
      <div className={styles.line_banner_container}>
          <div className={styles.scroll_m_container}>
            <span>
              <Typography variant='h2' sx={{ display: 'inline-block' }}>SBG SYSTEMS</Typography>
            </span>
            <span className={styles.brand_logo_container_sbgsystems}></span>
            <span>
              <Typography variant='h2' sx={{ display: 'inline-block' }}>GPA SEABOTS</Typography>
            </span>
            <span className={styles.brand_logo_container_seabots}></span>
            <span>
              <Typography variant='h2' sx={{ display: 'inline-block' }}>HEMISPHERE</Typography>
            </span>
            <span className={styles.brand_logo_container_hemisphere}></span>
            <span>
              <Typography variant='h2' sx={{ display: 'inline-block' }}>FURUNO</Typography>
            </span>
          </div>
        </div>
    </div>
  )
}

export default LineBanner