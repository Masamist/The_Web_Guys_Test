import Image from 'next/image'

// styles and Material UI
import Button from '@mui/material/Button'
import SouthEastSharpIcon from '@mui/icons-material/SouthEastSharp';
import Typography from '@mui/material/Typography';

function ButtonWithArrow(props) {
  return (
      <Button 
        variant="outlined" 
        // endIcon={<SouthEastSharpIcon sx={{}} />} 
        sx={{
          borderRadius:10,
          borderColor:'#fff',
          color: '#fff',
          fontFamily: 'neue-haas-grotesk-display',
          fontWeight: 200,
          fontSize: 21,
          paddingRight: 5.7,
          paddingLeft: 5.6,
          paddingTop: 1,
          paddingBottom: 1,
          textDecoration: 'none',
          '&:hover': {
            borderColor:'#fff',
            opacity:.4,
            boxShadow: 'none',
          }
        }}
      >
        {props.children}
        <Image 
          src="/images/ArrowRight.svg"
          alt='down menu'
          width={55}
          height={55}
          style={{
            paddingLeft: 20,
          }}
        /> 
      </Button>
  )
}

export default ButtonWithArrow