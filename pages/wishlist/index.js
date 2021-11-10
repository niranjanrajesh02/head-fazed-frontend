import Gallery from '@components/Gallery/Gallery'
import Navbar from '@components/Navbar/Navbar'
import React from 'react'
import styles from './wishlist.module.css'

const Wishlist = () => {
  return (
    <>
      <Navbar />
      <div className={styles.pageCont}>
        <div className={styles.header}>
          <h1>Your Wishlist</h1>
        </div>
        <Gallery page="wishlist" />
      </div>
    </>
  )
}

export default Wishlist
