import ProductTile from '@components/ProductTile/ProductTile'
import React from 'react'
import styles from './Gallery.module.css'

const Gallery = ({ products }) => {
  return (
    <>
      {products && (
        <div className={styles.gallerySection}>
          {products.map((item, ind) => <ProductTile ind={ind} product={item} key={ind} />)}
        </div>
      )}
    </>
  )
}

export default Gallery
