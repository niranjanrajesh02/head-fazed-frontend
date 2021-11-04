import React, { useState } from 'react'
import styles from './SortDropdown.module.css'

const SortDropdown = () => {
  const sortNames = [
    { title: "Featured", link: "/brands" },
    { title: "User Ratings", link: "/brands" },
    { title: "Price: Ascending", link: "/brands" },
    { title: "Price: Descending", link: "/brands" },
    { title: "Alphabetical: Ascending", link: "/brands" },
    { title: "Alphabetical: Descending", link: "/brands" },
  ]

  return (
    <>
      <div className={`${styles.dropdownMenu}`} >
        {sortNames.map((item, index) => {
          return (
            <div className={styles.dropdownItem} key={index}>
              <p>{item.title}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default SortDropdown
