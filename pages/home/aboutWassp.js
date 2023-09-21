import React, { useEffect } from 'react'
// styles & custom components
import styles from '@/pages/home/aboutWassp.module.css'

import OutlineButtonArrow from '@/components/ui/outlineButtonArrow'

// Material UI
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'


const AboutWassp = () => {

  // useEffect(() => {
  //   const script = document.createElement('script')
  //   script.sec = "https://tympanus.net/codrops/adpacks/analytics.js"
  //   script.async = true
  //   document.body.appendChild(script)

  //   const script2 = document.createElement('script')
  //   script2.sec = "https://tympanus.net/codrops/adpacks/cda_sponsor.js"
  //   script2.async = true
  //   document.body.appendChild(script2)

  //   const script3 = document.createElement('script')
  //   script3.sec = "../../animation/textScroll.js"
  //   script3.async = true
  //   document.body.appendChild(script3)

  //   document.documentElement.className = "js";

  //   return () =>{
  //     document.body.removeChild(script)
  //     document.body.removeChild(script2)
  //     document.body.removeChild(script3)
  //   }
  // })


            {/* for textScroll */}
          {/* <link rel="stylesheet" href="https://use.typekit.net/zda3gdw.css" />
          <link rel="stylesheet" type="text/css" href="../animation/textScroll.css" />
          <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script>
          <script type="text/javascript" src="../components/utils/headTextScrollScript.js"></script>
          <script src="//tympanus.net/codrops/adpacks/analytics.js"></script> */}
  // useEffect(() => {
  //   // Set the class name of <html> element
  //   document.documentElement.className = 'js';

  //   // Check for CSS variable support
  //   const supportsCssVars = () => {
  //     const styleElement = document.createElement('style');
  //     styleElement.innerHTML = 'root: { --tmp-var: bold; }';
  //     document.head.appendChild(styleElement);
  //     const isSupported = !!(window.CSS && window.CSS.supports && window.CSS.supports('font-weight', 'var(--tmp-var)'));
  //     document.head.removeChild(styleElement);
  //     return isSupported;
  //   };

  //   // Check for CSS variable support and show an alert if not supported
  //   if (!supportsCssVars()) {
  //     alert('Please view this demo in a modern browser that supports CSS Variables.');
  //   }
  // }, []);
  useEffect(() => {

    const script = document.createElement('script');
    
    // Set the type attribute
    script.type = 'text/javascript';

    // Set the script content
    script.innerHTML = `
      document.documentElement.className = "js";
      
      var supportsCssVars = function() {
        var e, t = document.createElement("style");
        t.innerHTML = "root: { --tmp-var: bold; }";
        document.head.appendChild(t);
        e = !!(window.CSS && window.CSS.supports && window.CSS.supports("font-weight", "var(--tmp-var)"));
        t.parentNode.removeChild(t);
        return e;
      };
      
      supportsCssVars() || alert("Please view this demo in a modern browser that supports CSS Variables.");
    `;

    // Append the script to the document
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    }
  }, []);




  return(
    //<div className='demo-2 loading'>
      <div className={styles.about_bg}>
      
{/* 
      <main>
        <div class="frame">
                <div class="frame__title">
                    <a aria-label="Back to the article" class="frame__title-back" href="https://tympanus.net/codrops/?p=69734">
                        <span>Back to the article</span>
                        <svg width="18px" height="18px" viewBox="0 0 24 24">
                            <path vector-effect="non-scaling-stroke" d="M18.25 15.5a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75h-9a.75.75 0 000 1.5h7.19L6.22 16.72a.75.75 0 101.06 1.06L17.5 7.56v7.19c0 .414.336.75.75.75z"></path>
                        </svg>
                    </a>
                </div>
                <a class="frame__prev" href="https://tympanus.net/Tutorials/LoopScrolling/">Previous demo</a>
                <nav class="frame__demos">
                    <a href="index.html">Set 1</a>
                    <span>Set 2</span>
                </nav>
            </div>

            <div className="content">
                <h2 className="content__title" data-splitting data-effect17><span>Stubborn</span><span>Naivety</span></h2>
            </div>
            <div className="content">
                <p>It is in this surrender that we may find the truth of who we are, the essence of our being that lies just beyond the veil of illusion. We let go of our striving, our constant seeking, and instead allow ourselves to be swept up in the infinite mystery of existence.</p>
            </div>
            <div className="content">
                <h2 class="content__title" data-splitting data-effect18><span className="font-16 font-upper">Surrender to reality</span><span className="font-16 font-upper">Step into the light</span></h2>
            </div>
            <div className="content">
                <p>This surrender does not mean giving up, nor does it mean accepting the status quo. It is, in fact, quite the opposite. It is a willingness to let go of the illusions that have been holding us back, to see beyond the limitations of our own beliefs, and to embrace the fullness of life itself.</p>
            </div>
            <div className="content">
                <h2 class="content__title" data-splitting data-effect19><span className="font-21 font-upper">Intense</span><span className="font-21 font-upper">Nature</span></h2>
            </div>

        </main>
        

 */}
      <div class="content content--canvas">
				<h2 class="content__title">Shift</h2>
        <h2 class="content__title">Shift</h2>
        <h2 class="content__title">Shift</h2>
        <h2 class="content__title">Shift</h2>
			</div>


        <Grid 
        container
        justifyContent={'flex-end'}
        sx={{ 
          flexGrow: 1,
          paddingTop: { xs: 24, md: 41 },
          paddingLeft: 3,
          paddingBottom: 30,
          }}
        >
          <Grid item xs={12} md={9}>
            <Typography 
              variant='h2' 
              sx={{ fontSize: { xs: '3.1rem', md: '4.2rem' }, paddingBottom: { xs: 2.5, md: 6 }}}>
              welcome to the world of<br />wassp multibeam
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Grid container>
              <Grid item xs={2} md={1.5}>
                <Typography variant='h6' sx={{paddingBottom: { xs: 5.9, md: 0 }}}>01</Typography>
              </Grid>
              <Grid item xs={10} md={3}>
                <Typography variant='h6'>ABOUT WASSP</Typography>
              </Grid>
              <Grid item xs={12} md={4.5}>
                <Typography 
                  variant='body1' pb={5} 
                  sx={{ paddingRight: { xs: 4, md: 0 }, paddingBottom: { xs: 8.4, md: 5.5 }}}>
                WASSP, a powerful multi-beam sounder with 120-degree coverage and models for deep exploration, 
                offers unparalleled accuracy, detail, and versatility. Target fish with steerable sounders, 
                generate real-time 3D charts, map fish in water, 
                and make better decisions with the user-friendly advanced mode.
                </Typography>
                <OutlineButtonArrow>Our Story</OutlineButtonArrow>
              </Grid>
            </Grid>
          </Grid>

        </Grid>
        <script src="../../animation/noise.min.js"></script>
		    <script src="../../animation/util.js"></script>
        <script src="../../animation/shift.js"></script>
        
      </div>
     //<script src="https://tympanus.net/codrops/adpacks/cda_sponsor.js"></script>
      //<script type="module" src="../../animation/textScroll.js"></script>
   // </div>
  )
}

export default AboutWassp;