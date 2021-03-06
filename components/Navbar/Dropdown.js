import React, { useState } from 'react'
import styles from './Dropdown.module.css'
import Link from 'next/link'

const Dropdown = ({ menuName, setSortOption }) => {
  const [click, setClick] = useState(false);
  const brandNames = [
    { title: "Audio-Technica", link: "/shop/Audio-Technica" },
    { title: "JBL", link: "/shop/JBL" },
    { title: "Razer", link: "/shop/Razer" },
    { title: "Skullcandy", link: "/shop/Skullcandy" },
    { title: "Sony", link: "/shop/Sony" },
  ]
  const useNames = [
    { title: "Casual", link: "/shop/Casual" },
    { title: "Studio", link: "/shop/Studio" },
    { title: "Audiophile", link: "/shop/Audiophile" },
    { title: "Gaming", link: "/shop/Gaming" },
  ]
  const typeNames = [
    { title: "Wired", link: "/shop/Wired" },
    { title: "Wireless", link: "/shop/Wireless" },
    { title: "Over-ear", link: "/shop/Over-ear" },
    { title: "In-ear", link: "/shop/In-ear" },
  ]
  const accessoryNames = [
    { title: "Cables", link: "/shop/Cables" },
    { title: "Cases", link: "/shop/Cases" },
    { title: "AMPs/DACs", link: "/shop/AMPs+DACs" },
    { title: "Speakers", link: "/shop/Speakers" },
  ]
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
      <div className={`${styles.dropdownMenu} ${menuName === "shopsort" ? styles.dropSort : null}  ${menuName === "mobSort" ? styles.mobSort : null}`} >
        {menuName === "brands" && brandNames.map((item, index) => {
          return (
            <div className={styles.dropdownItem} key={index}>
              <Link href={item.link}><p>{item.title}</p></Link>
            </div>
          )
        })}
        {menuName === "use" && useNames.map((item, index) => {
          return (
            <div className={styles.dropdownItem} key={index}>
              <Link href={item.link}><p>{item.title}</p></Link>
            </div>
          )
        })}
        {menuName === "type" && typeNames.map((item, index) => {
          return (
            <div className={styles.dropdownItem} key={index}>
              <Link href={item.link}><p>{item.title}</p></Link>
            </div>
          )
        })}
        {menuName === "accessory" && accessoryNames.map((item, index) => {
          return (
            <div className={styles.dropdownItem} key={index}>
              <Link href={item.link}><p>{item.title}</p></Link>
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
        {menuName === "mobSort" && sortNames.map((item, index) => {
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

export default Dropdown
