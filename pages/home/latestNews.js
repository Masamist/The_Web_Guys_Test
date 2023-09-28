import React, { useRef } from 'react'
import { useDraggable } from "react-use-draggable-scroll"

// styles & custom components
import CardNews from '../../components/ui/cardNews'
import styles from '../home/latestNews.module.css'

// Material UI
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'

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


const LatestNews = () => {
  const ref = useRef()
  const { events } = useDraggable(ref, {
    decayRate: 0.96,
  })

  return(
    <div>
      <Grid 
        container
        wrap='nowrap'
        sx={{ direction: { xs: 'column', md: 'row'} }}
        pl={6} 
        pb={36}
      >
        <Grid item sx={{ minWidth: '37.5%' }}>

          <Grid container >
            <Grid item sx={{ minWidth: '28%' }}>
              <Typography variant='h6'>05</Typography>
            </Grid>
            <Grid item>
              <Typography variant='h6'>LATEST NEWS</Typography>
            </Grid>
          </Grid>

        </Grid>


        <Grid item>
          <div
            className={styles.draggableContainer}
            {...events}
            ref={ref} // add reference and events to the wrapping div
          >
            { news.map((singleNews) => (
              <div>
                <CardNews title={singleNews.title} url={singleNews.url} />
              </div>             
            ))}
          </div>
        </Grid>
        
      </Grid>
    </div>
  )
}

export default LatestNews