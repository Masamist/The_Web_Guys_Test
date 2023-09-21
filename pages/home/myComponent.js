import React, { useState, useEffect, useRef } from 'react'
import BIRDS from 'node_modules/vanta/dist/vanta.birds.min'
import styles from './styles.module.css'

// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const MyComponent = () => {
  
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
    useEffect(() => {
      if (!vantaEffect) {
        setVantaEffect(BIRDS({
          el: myRef.current
        }))
      }
      return () => {
        if (vantaEffect) vantaEffect.destroy()
      }
    }, [vantaEffect])

    
  return (
    <main className={styles.container}>
      <div ref={myRef}>
        <h2>
          Hahaha
        </h2>
        <h5>
        Foreground content goes here
        </h5>
      Foreground content goes here

      </div>
      <script src="three.r134.min.js"></script>
    </main>
  )
}
export default MyComponent