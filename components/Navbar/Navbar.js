import React, { useState } from 'react'
import styles from "./Navbar.module.css"
import Image from "next/image"
import Dropdown from './Dropdown';

const Navbar = () => {
  const [brandsDropdown, setBrandsDropdown] = useState(false);
  const [useDropdown, setUseDropdown] = useState(false);
  const [typeDropdown, setTypeDropdown] = useState(false);

  const onMouseEnter = (menu) => {
    if (menu === "brands") {
      setBrandsDropdown(true);
    }
    else if (menu === "use") {
      setUseDropdown(true);
    }
    else if (menu === "type") {
      setTypeDropdown(true);
    }
  };

  const onMouseLeave = (menu) => {
    if (menu === "brands") {
      setBrandsDropdown(false);
    }
    else if (menu === "use") {
      setUseDropdown(false);
    }
    else if (menu === "type") {
      setTypeDropdown(false);
    }
  };


  return (
    <div className={styles.navbarContainer}>
      <div className={styles.menuCategories} >
        <div className={styles.menuItem} onMouseEnter={() => onMouseEnter("brands")} onMouseLeave={() => onMouseLeave("brands")}>
          <p>BRANDS</p>
          {brandsDropdown && <Dropdown menuName="brands" />}
        </div>
        <div className={styles.menuItem} onMouseEnter={() => onMouseEnter("use")} onMouseLeave={() => onMouseLeave("use")}>
          <p>BY USE</p>
          {useDropdown && <Dropdown menuName="use" />}
        </div>
        <div className={styles.menuItem} onMouseEnter={() => onMouseEnter("type")} onMouseLeave={() => onMouseLeave("type")}>
          <p>BY TYPE</p>
          {typeDropdown && <Dropdown menuName="type" />}
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
