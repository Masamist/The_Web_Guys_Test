import React, { useState, CSSProperties, useEffect, Fragment } from 'react'

// styles & custom components
import styles from '@/pages/home/latestNewsTest.module.css'
import CardNews from '../../components/ui/cardNews'
//Material ui
import Grid from '@mui/material/Grid'
// Animation
import { useTransition, animated, AnimatedProps, useSpringRef } from '@react-spring/web'

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


const pages: ((props: AnimatedProps<{ style: CSSProperties }>) => React.ReactElement)[] = [
  ({ style }) => <animated.div style={{ ...style, background: 'transparent', fontSize: 50 }}>
    <Fragment>
      <CardNews key='1' title="South Pacific reopens for superyachts, a top charter spot." url="images/03.jpg" />
      <CardNews key='1' title="South Pacific reopens for superyachts, a top charter spot." url="images/04.jpg" />
      <CardNews key='1' title="South Pacific reopens for superyachts, a top charter spot." url="images/05.jpg" />
    </Fragment>
    
  </animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'transparent', fontSize: 50  }}>
    <CardNews key='2' title="South Pacific reopens for superyachts, a top charter spot." url="images/03.jpg" />
    <CardNews key='2' title="South Pacific reopens for superyachts, a top charter spot." url="images/05.jpg" />
    <CardNews key='2' title="South Pacific reopens for superyachts, a top charter spot." url="images/05.jpg" />

  </animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'transparent', fontSize: 50  }}>
    <CardNews key='2' title="South Pacific reopens for superyachts, a top charter spot." url="images/05.jpg" />
    <CardNews key='2' title="South Pacific reopens for superyachts, a top charter spot." url="images/03.jpg" />

  </animated.div>,


]

const LatestNewsTest = () => {
  const [index, set] = useState(0)
  const onClick = () => set(state => (state + 1) % 3)
  const transRef = useSpringRef()
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  useEffect(() => {
    transRef.start()
  }, [index])
  return (
    <div className={`flex fill ${styles.container}`} onClick={onClick}>
      {transitions((style, i) => {
        const Page = pages[i]
        return <Page style={style} />
      })}
    </div>
  )
}

export default LatestNewsTest