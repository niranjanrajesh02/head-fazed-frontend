import { ChevronDown, ChevronUp, ShoppingBag } from '@components/icons'
import Dropdown from '@components/Navbar/Dropdown'
import SortDropdown from '@components/SortDropdown/SortDropdown'
import React, { useState } from 'react'
import styles from './shop.module.css'

const Shop = () => {
  const [sortDropdown, setSortDropdown] = useState(false)
  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <div className={styles.title}>
          <ShoppingBag />
          <h1>Shop All</h1>
        </div>
        <div className={styles.sortContainer}>
          <div className={styles.sortController} onClick={() => setSortDropdown(!sortDropdown)}>
            <p>SORT</p>
            {!sortDropdown && <ChevronDown />}
            {sortDropdown && <ChevronUp />}
          </div>
          {sortDropdown && <SortDropdown />}
        </div>
      </div>
      <div className={styles.body}>

      </div>
    </div>
  )
}

export default Shop
