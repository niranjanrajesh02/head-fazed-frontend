import React, { useState } from 'react'
import styles from './SortDropdown.module.css'

const SortDropdown = ({ setSortOption }) => {
  const sortNames = [
    { title: "Featured", value: null },
    { title: "User Ratings", value: "avg_rating: -1" },
    { title: "Price: Ascending", value: "price:1" },
    { title: "Price: Descending", value: "price:-1" },
    { title: "Alphabetical: Ascending", value: "name:1" },
    { title: "Alphabetical: Descending", value: "name:-1" },
  ]

  return (
    <>
      <div className={`${styles.dropdownMenu}`} >
        {sortNames.map((item, index) => {
          return (
            <div className={styles.dropdownItem} key={index} onClick={() => setSortOption(item.value)}>
              <p>{item.title}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default SortDropdown
