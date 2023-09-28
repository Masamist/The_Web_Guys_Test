// styles & custom components
import styles from '@/pages/home/lineBanner.module.css'

// Material UI
import Typography from '@mui/material/Typography'

const banners = [
  {
    "key": 1,
    "title": "SBG SYSTEMS",
  },
  {
    "key": 2,
    "cssStyle": "brand_logo_container_sbgsystems",
  },
  {
    "key": 3,
    "title": "GPA SEABOTS",
  },
  {
    "key": 4,
    "cssStyle": "brand_logo_container_seabots"
  },
  {
    "key": 5,
    "title": "HEMISPHERE",
  },
  {
    "key": 6,
    "cssStyle": "brand_logo_container_hemisphere",
    
  },
  {
    "key": 7,
    "title": "FURUNO",
  },
]

const LineBanner = () => {
  return(
    <div>
      <div className={styles.line_banner_container}>
          <div className={styles.scroll_m_container}>

            {/* Logos are wrong position */}

            { banners.map((item) => (            
              !item.cssStyle? (
                <span key={item.key}>
                <Typography variant='h2' sx={{ display: 'inline-block' }} >{item.title}</Typography>
                </span> 
                ) :(
                  <span key={item.key} className={styles[item.cssStyle]}>No images</span>
                )            
            ))}
          </div>
        </div>
    </div>
  )
}

export default LineBanner