import Image from 'next/image'

// Material UI
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

function CardNews(props) {
  return (
  <Card sx={{ width: {xs:'20rem', md:'25rem', xl:'32rem'} }}>
    <CardMedia
      component="img"
      alt="news"
      image={props.url}
      sx={{
        height: {xs:'17rem', md:'25rem'},
        padding: 3.5,
      }}
    />
    <CardContent key={props.key}>
      <Typography gutterBottom variant="h5" component="div" px={1.5}>
        {props.title}
      </Typography>
    </CardContent>
    <CardActions>
      <Grid container justifyContent='space-between' pt={4} pb={1}>
        <Grid item pl={2}>
          <Button size="small">View</Button>
        </Grid>
      </Grid>
      <Grid item pt={2}>
        <Button size="small">
          <Image 
          src="/images/ArrowRight.svg"
          alt='arrow-icon'
          width={40}
          height={40}
          style={{transform: "rotate(-45deg)"}}
        />
        </Button>
      </Grid>
      
    </CardActions>
  </Card>
  )
}

export default CardNews