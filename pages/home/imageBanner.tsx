import Image from 'next/image'

// styles & custom components
import styles from '@/pages/home/imageBanner.module.css'

const ImageBanner = () => {
  const images = [
    {
      "id": 1,
      "url": "/images/05.jpg",
    },
    {
      "id": 2,
      "url": "/images/06.jpg"
    },
    {
      "id": 3,
      "url": "/images/07.jpg",
    },
    {
      "id": 4,
      "url": "/images/08.jpg",
    },
    {
      "id": 5,
      "url": "/images/09.jpg",
    },
    {
      "id": 6,
      "url": "/images/10.jpg",
    },
    {
      "id": 7,
      "url": "/images/11.jpg",
    },
    {
      "id": 8,
      "url": "/images/12.jpg",
    },
    {
      "id": 9,
      "url": "/images/13.jpg",
    },
    {
      "id": 10,
      "url": "/images/05.jpg",
    },
    {
      "id": 11,
      "url": "/images/06.jpg"
    },
    {
      "id": 12,
      "url": "/images/07.jpg",
    },
    {
      "id": 13,
      "url": "/images/08.jpg",
    },
    {
      "id": 14,
      "url": "/images/09.jpg",
    },
    {
      "id": 15,
      "url": "/images/10.jpg",
    },
    {
      "id": 16,
      "url": "/images/11.jpg",
    },
    {
      "id": 17,
      "url": "/images/12.jpg",
    },
    {
      "id": 18,
      "url": "/images/13.jpg",
    },
  ]

  return(
    <div>
      <div className={styles.image_banner_container}>
        <div className={styles.scroll_m_container}>
          {images.map((image) =>(
            <span key={image.id}>
              <Image 
                src={image.url}
                alt={image.url}
                width={210}
                height={210}
                style={{padding: 20}}
              />
            </span>
            ))}
          </div>
          
        </div>
    </div>
  )
}

export default ImageBanner