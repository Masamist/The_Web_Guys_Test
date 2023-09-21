import React, { useState, useEffect } from 'react'
// styles & custom components
import CardNews from '../../components/ui/cardNews'
import styles from '../home/latestNews.module.css'

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
      "url": "images/06.jpg",
    },
  ]

  const [newsOder, setNewsOder]= useState([1, 2, 3, 4])
  const [currentNews, setCurrentNews] = useState(news)

  const handleClick = () => {
    const nums = []
    for(let i =0; i < newsOder.length; i++){    
      nums.push(newsOder[i] < 4 ? newsOder[i] + 1 : 1)
      
    }
    setNewsOder(nums)

    let arrangeOder=[]
    for(let i = 0; i < newsOder.length; i++){
      let nItem = news.find((item) => item.key === newsOder[i])
      console.log(nItem)
      arrangeOder.push(nItem)
    }
    setCurrentNews(arrangeOder)
    console.log(currentNews)
    console.log(news)
  }

  return(
    <div>
      <Grid 
        container
        wrap='nowrap'
        pl={6} 
        pb={36}
      >
        {/* <Grid item xs={2} md={1.1}> */}
        <Grid item sx={{ minWidth: '9.5%' }}>
          <Typography variant='h6'>05</Typography>
        </Grid>
        <Grid item sx={{ minWidth: '28%' }}>
        {/* <Grid item xs={2} md={3.2}> */}
          <Typography variant='h6'>LATEST NEWS</Typography>
        </Grid>

        {/* <NewsCars /> */}
        { currentNews.map((singleNews) => (
          <Grid item mr={2} key={singleNews.key} onClick={handleClick}>
            <div className={styles.slide_left}>
              <CardNews title={singleNews.title} url={singleNews.url} />
            </div>   
          
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default LatestNews