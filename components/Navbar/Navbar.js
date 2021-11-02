import React from 'react'
import styles from "./Navbar.module.css"
import Image from "next/image"

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.menuCategories} >
        <div>
          <p>BRANDS</p>
        </div>
        <div>
          <p>BY USE</p>
        </div>
        <div>
          <p>BY TYPE</p>
        </div>
        <div>
          <p>ACCESSORIES</p>
        </div>
      </div>
      <div className={styles.logoContainer}>
        <Image src="/images/MainLogo.png" width={110} height={110} />
      </div>
      <div className={styles.searchBarContainer}>
        <input type="text" placeholder="Search" />
      </div>
      <div className={styles.dynamicContainer}>
        <div>
          <p>My Account</p>
        </div>
        <div>
          <p>Login</p>
        </div>
        <div>
          <p>Cart</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
