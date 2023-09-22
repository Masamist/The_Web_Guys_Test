// styles and Material UI
import Button from '@mui/material/Button'
// import style from './ounlineButton.module.css'

function OutlineButton(props) {
  return (
    <Button 
      variant="outlined" 
      onClick={props.onClick}
      sx={{
        borderRadius:10,
        borderColor:'#fff',
        color: '#fff',
        fontFamily: 'neue-haas-grotesk-display',
        fontWeight: 200,
        fontSize: 21,
        paddingRight: 5,
        paddingLeft: 6,
        paddingTop: 1,
        paddingBottom: 1,
        textDecoration: 'none',
        marginRight:2,
        marginBottom: 1.9,
        '&:hover': {
          borderColor:'#fff',
          opacity:.4,
          boxShadow: 'none',
        },
        '&:active': {
          backgroundColor:'#fff',
          boxShadow: 'none',
        },
      }}
    >
      {props.children}
    </Button>

    /////// Trying to make the button active
    /////// normal html element does not work
    //   <button
    //   type="button"
    //   className={style.oButton}>
    //     {props.children}
    // </button>
  )
}

export default OutlineButton