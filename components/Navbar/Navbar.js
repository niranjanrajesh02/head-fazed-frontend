import React, { useState, useContext, useEffect } from 'react'
import styles from "./Navbar.module.css"
import Image from "next/image"
import Dropdown from './Dropdown';
import { useMediaQuery } from 'react-responsive';
import { BackArrow, Cart, CartSmall, Cross, Menu, RightArrow, User, UserIcon } from '@components/icons';
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import { UserContext } from 'HOC/UserContext';
import Searchbar from '@components/Searchbar/Searchbar';

const Navbar = () => {
  const [brandsDropdown, setBrandsDropdown] = useState(false);
  const [useDropdown, setUseDropdown] = useState(false);
  const [typeDropdown, setTypeDropdown] = useState(false);
  const [accessoryDropdown, setAccessoryDropdown] = useState(false);
  const [secondaryDisplay, setSecondaryDisplay] = useState(false)
  const [tertiaryDisplay, setTertiaryDisplay] = useState(null)
  const [cartItems, setCartItems] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: '1024px' })
  const { userDB } = useContext(UserContext)
  const { user, error, isLoading } = useUser();
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
    else if (menu === "accessory") {
      setAccessoryDropdown(true);
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
    else if (menu === "accessory") {
      setAccessoryDropdown(false)
    }
  };

  useEffect(() => {
    if (userDB) {
      setCartItems(userDB.cart_items)
    }
  }, [userDB])
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
        <div className={styles.menuItem} onMouseEnter={() => onMouseEnter("accessory")} onMouseLeave={() => onMouseLeave("accessory")}>
          <p>ACCESSORIES</p>
          {accessoryDropdown && <Dropdown menuName="accessory" />}
        </div>
      </div>
      <div className={styles.logoContainer}>
        <Link href="/" >
          <Image src="/images/MainLogo.png" width={110} height={110} />
        </Link>
      </div>
      <div className={styles.rightContainer}>
        <div>
          <Searchbar />
        </div>
        {user && (
          <>

            <Link href="/account">
              <div className={styles.cartCont}>
                <a><UserIcon /></a>
              </div>
            </Link>
            <Link href="/cart">
              <div className={styles.cartCont}>
                <a><CartSmall /></a>
                <p>{cartItems}</p>
              </div>
            </Link>

          </>
        )}
        {!user && (
          <div>
            <a href="/api/auth/login">Log In</a>
          </div>
        )}
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
                <Link href="/shop/Audio-Technica"><div><p>Audio-Technica</p></div></Link>
                <Link href="/shop/JBL"><div><p>JBL</p></div></Link>
                <Link href="/shop/Razer"><div><p>Razer</p></div></Link>
                <Link href="/shop/Skullcandy"><div><p>Skullcandy</p></div></Link>
                <Link href="/shop/Sony"><div><p>Sony</p></div></Link>
              </div>
            </div>
          )}
          {tertiaryDisplay === "uses" && (
            <div className={styles.tertiaryMenuMob}>
              <h3>{tertiaryDisplay}</h3>
              <div className={styles.menuItemListMob}>
                <Link href="/shop/Casual"><div><p>Casual</p></div></Link>
                <Link href="/shop/Studios"><div><p>Studios</p></div></Link>
                <Link href="/shop/Audiophile"><div><p>Audiophile</p></div></Link>
                <Link href="/shop/Gaming"><div><p>Gaming</p></div></Link>

              </div>
            </div>
          )}
          {tertiaryDisplay === "types" && (
            <div className={styles.tertiaryMenuMob}>
              <h3>{tertiaryDisplay}</h3>
              <div className={styles.menuItemListMob}>
                <Link href="/shop/Wired"><div><p>Wired</p></div></Link>
                <Link href="/shop/Wireless"><div><p>Wireless</p></div></Link>
                <Link href="/shop/Over-ear"><div><p>Over-ear</p></div></Link>
                <Link href="/shop/In-ear"><div><p>In-ear</p></div></Link>

              </div>
            </div>
          )}
          {tertiaryDisplay === "accesories" && (
            <div className={styles.tertiaryMenuMob}>
              <h3>{tertiaryDisplay}</h3>
              <div className={styles.menuItemListMob}>
                <Link href="/shop/Cables"><div><p>Cables</p></div></Link>
                <Link href="/shop/Cases"><div><p>Cases</p></div></Link>
                <Link href="/shop/AMPs+DACs"><div><p>AMPs/DACs</p></div></Link>
                <Link href="/shop/Speakers"><div><p>Speakers</p></div></Link>
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
