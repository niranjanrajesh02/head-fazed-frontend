import React, { useState } from 'react'
import styles from './Dropdown.module.css'

const Dropdown = ({ menuName }) => {
  const [click, setClick] = useState(false);
  const brandNames = [
    { title: "Audio-Technica", link: "/brands" },
    { title: "Bose", link: "/brands" },
    { title: "Beats", link: "/brands" },
    { title: "JBL", link: "/brands" },
    { title: "Skullcandy", link: "/brands" },
  ]
  const useNames = [
    { title: "Casual", link: "/brands" },
    { title: "Sport", link: "/brands" },
    { title: "Audiophile", link: "/brands" },
    { title: "Gaming", link: "/brands" },
  ]
  const typeNames = [
    { title: "Wired", link: "/brands" },
    { title: "Wireless", link: "/brands" },
    { title: "Over-ear", link: "/brands" },
    { title: "In-ear", link: "/brands" },
  ]
  const accessoryNames = [
    { title: "Cables", link: "/brands" },
    { title: "Cases", link: "/brands" },
    { title: "AMPs", link: "/brands" },
    { title: "Speakers", link: "/brands" },
  ]
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
      <div className={`${styles.dropdownMenu} ${menuName === "shopsort" ? styles.dropSort : null}`} >
        {menuName === "brands" && brandNames.map((item, index) => {
          return (
            <div className={styles.dropdownItem} key={index}>
              <p>{item.title}</p>
            </div>
          )
        })}
        {menuName === "use" && useNames.map((item, index) => {
          return (
            <div className={styles.dropdownItem} key={index}>
              <p>{item.title}</p>
            </div>
          )
        })}
        {menuName === "type" && typeNames.map((item, index) => {
          return (
            <div className={styles.dropdownItem} key={index}>
              <p>{item.title}</p>
            </div>
          )
        })}
        {menuName === "accessory" && accessoryNames.map((item, index) => {
          return (
            <div className={styles.dropdownItem} key={index}>
              <p>{item.title}</p>
            </div>
          )
        })}
        {menuName === "shopsort" && sortNames.map((item, index) => {
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

export default Dropdown
