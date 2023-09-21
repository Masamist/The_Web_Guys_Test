// styles & custom components
import styles from '@/pages/home/fSeries.module.css'
import CardNews from '../../components/ui/cardNews'

// Material UI
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

const LatestNews = () => {
  const news = [
    {
      "key": 1,
      "title": "South Pacific reopens for superyachts, a top charter spot.",
      "url": "images/03.jpg",
    },
    {
      "key": 2,
      "title": "WASSP’s Bluebeam brings major feature advancements",
      "url": "images/04.jpg"
    },
    {
      "key": 3,
      "title": "Namibia’s kelp utilizes WASSP for marine industry surveys",
      "url": "images/05.jpg",
    },
    {
      "key": 4,
      "title": "Namibia’s kelp utilizes WASSP for marine industry surveys",
      "url": "images/05.jpg",
    },
  ]
  return(
    <div className={styles.news_bg}>
      <Grid 
        container
        wrap='nowrap'
        pl={6} 
        pb={36}
        // sx={{ overflow: "auto", overflowY: "auto", overflowX: "hidden", }}
      >
        {/* <Grid item xs={2} md={1.1}> */}
        <Grid item sx={{ minWidth: '9.5%' }}>
          <Typography variant='h6'>05</Typography>
        </Grid>
        <Grid item sx={{ minWidth: '28%' }}>
        {/* <Grid item xs={2} md={3.2}> */}
          <Typography variant='h6'>LATEST NEWS</Typography>
        </Grid>
              {/* news cards */}
          {news.map((singleNews) => (
            <Grid item mr={2} key={singleNews.key} >
              <CardNews title={singleNews.title} url={singleNews.url} />

            </Grid>
            ) )}
           

      </Grid>
    </div>
  )
}

export default LatestNews