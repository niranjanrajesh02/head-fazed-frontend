import React from 'react'
import styles from './ProductTile.module.css'
import Image from 'next/image'
import { EmptyStar, FullStar } from '@components/icons'
import { useRouter } from 'next/router'

const ProductTile = ({ key, product }) => {
  const fullStarNo = Math.floor(product.avg_rating)
  const emptyStarNo = 5 - fullStarNo
  const router = useRouter()
  const isShop = router.pathname.includes("shop")
  return (
    <div className={styles.tileContainer} key={key}>
      <div className={styles.thumbnailContainer}>
        <Image src={product.images[0]} width={200} height={200} layout="responsive" />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{product.name}</h2>
        <p className={styles.shortDesc}>{product.short_desc}</p>
        <p className={styles.price}>₹{product.price}</p>
      </div>
      {isShop && (

        <div className={styles.ratingContainer}>
          <div>
            {[...Array(fullStarNo)].map((item, ind) => <FullStar key={ind} />)}
            {[...Array(emptyStarNo)].map((item, ind) => <EmptyStar key={ind} />)}
          </div>
          <p>({product.reviews})</p>
        </div>
      )}
    </div>
  )
}

export default ProductTile
