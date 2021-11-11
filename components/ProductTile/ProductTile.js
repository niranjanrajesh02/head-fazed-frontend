import React from 'react'
import styles from './ProductTile.module.css'
import Image from 'next/image'
import { EmptyStar, FullStar } from '@components/icons'
import { useRouter } from 'next/router'
import Link from 'next/link'




const ProductTile = ({ product, ind }) => {
  console.log(product);
  const fullStarNo = (product?.avg_rating) ? Math.round((product.avg_rating)) : 0
  const emptyStarNo = 5 - fullStarNo
  const router = useRouter()
  const isShop = router.pathname.includes("shop")
  return (
    <Link href={`/product/${product._id}`}>
      <div className={styles.tileContainer} key={ind}>
        <div className={styles.thumbnailContainer}>
          <Image src={product.images[0]} width={200} height={200} layout="responsive" />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>{product.name}</h2>
          <p className={styles.shortDesc}>{product.short_description}</p>
          <p className={styles.price}>₹{product.price}</p>
        </div>
        {isShop && (
          <div className={styles.ratingContainer}>
            <div>
              {[...Array(fullStarNo)].map((item, ind) => <a key={ind}><FullStar /></a>)}
              {[...Array(emptyStarNo)].map((item, ind) => <a key={ind}><EmptyStar /></a>)}
            </div>
            <p>({product.reviews.length})</p>
          </div>
        )}
      </div>
    </Link>
  )
}

export default ProductTile
