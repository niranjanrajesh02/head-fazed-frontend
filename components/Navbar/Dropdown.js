import React, { useState } from 'react'
import styles from './Dropdown.module.css'

const Dropdown = ({ menuName }) => {
  const [click, setClick] = useState(false);
  const brandNames = [
    { title: "AKG", link: "/brands" },
    { title: "Audio Technica", link: "/brands" },
    { title: "Audio Technica", link: "/brands" },
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

  return (
    <>
      <div className={`${styles.dropdownMenu} ${menuName === "use" ? styles.dropdownMenuUse : null} ${menuName === "type" ? styles.dropdownMenuType : null}`} >
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
      </div>
    </>
  )
}

export default Dropdown
