import React, { useState } from 'react'
import styles from "./Navbar.module.css"
import Image from "next/image"
import Dropdown from './Dropdown';
import { useMediaQuery } from 'react-responsive';
import { BackArrow, Cart, Cross, Menu, RightArrow, User } from '@components/icons';

const Navbar = () => {
  const [brandsDropdown, setBrandsDropdown] = useState(false);
  const [useDropdown, setUseDropdown] = useState(false);
  const [typeDropdown, setTypeDropdown] = useState(false);
  const [secondaryDisplay, setSecondaryDisplay] = useState(false)
  const [tertiaryDisplay, setTertiaryDisplay] = useState(null)
  const isMobile = useMediaQuery({ maxWidth: '1024px' })

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

  const largeNavbar = (
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

  const mobNavbar = (
    <>
      <div className={styles.navbarMob}>
        <div onClick={() => setSecondaryDisplay(true)}>
          <Menu />
        </div>
        <div className={styles.logoContainerMob} >
          <Image src="/images/NamelessLogo.png" width={70} height={70} />
        </div>
      </div>
      {secondaryDisplay && (
        <div className={styles.sideDrawer}>
          <div onClick={() => setSecondaryDisplay(false)}>
            <Cross />
          </div>
          <div className={styles.menuItemsMob}>
            <div onClick={() => setTertiaryDisplay('brands')}><p>BRANDS</p></div>
            <div onClick={() => setTertiaryDisplay('uses')}><p>BY USE</p></div>
            <div onClick={() => setTertiaryDisplay('types')}><p>BY TYPE</p></div>
            <div onClick={() => setTertiaryDisplay('accesories')}><p>ACCESORIES</p></div>
          </div>
          <div className={styles.bottomMenuMob}>
            <div className={styles.bottomMenuItemMob}>
              <User />
              <p>Your Account</p>
            </div>
            <div className={styles.bottomMenuItemMob}>
              <Cart />
              <p>Your Cart</p>
            </div>
          </div>
        </div>
      )}
      {tertiaryDisplay && (
        <div className={styles.sideDrawerTertiary}>
          <div onClick={() => setTertiaryDisplay(null)}>
            <BackArrow />
          </div>
          {tertiaryDisplay === "brands" && (
            <div className={styles.tertiaryMenuMob}>
              <h3>{tertiaryDisplay}</h3>
              <div className={styles.menuItemListMob}>
                <div><p>Audio-Technica</p></div>
                <div><p>Bose</p></div>
                <div><p>Beats</p></div>
                <div><p>JBL</p></div>
                <div><p>Skullcandy</p></div>
                <div className={styles.seeMore}><p>See More</p><RightArrow /></div>
              </div>
            </div>
          )}
          {tertiaryDisplay === "uses" && (
            <div className={styles.tertiaryMenuMob}>
              <h3>{tertiaryDisplay}</h3>
              <div className={styles.menuItemListMob}>
                <div><p>Casual</p></div>
                <div><p>Sports</p></div>
                <div><p>Audiophile</p></div>
                <div><p>Gaming</p></div>
                <div className={styles.seeMore}><p>See More</p><RightArrow /></div>
              </div>
            </div>
          )}
          {tertiaryDisplay === "types" && (
            <div className={styles.tertiaryMenuMob}>
              <h3>{tertiaryDisplay}</h3>
              <div className={styles.menuItemListMob}>
                <div><p>Wired</p></div>
                <div><p>Wireless</p></div>
                <div><p>Over-ear</p></div>
                <div><p>In-ear</p></div>
                <div className={styles.seeMore}><p>See More</p><RightArrow /></div>
              </div>
            </div>
          )}
          {tertiaryDisplay === "accesories" && (
            <div className={styles.tertiaryMenuMob}>
              <h3>{tertiaryDisplay}</h3>
              <div className={styles.menuItemListMob}>
                <div><p>Cables</p></div>
                <div><p>Cases</p></div>
                <div><p>AMPs</p></div>
                <div><p>Speakers</p></div>
                <div className={styles.seeMore}><p>See More</p><RightArrow /></div>
              </div>
            </div>
          )}

        </div>
      )}


    </>

  )


  return (
    <>
      {!isMobile && largeNavbar}
      {isMobile && mobNavbar}
    </>
  )
}

export default Navbar
