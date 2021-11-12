import { Edit, RightArrow } from '@components/icons'
import React, { useState } from 'react'
import styles from './account.module.css'
import Link from 'next/link'
import Navbar from '@components/Navbar/Navbar'
import { useUser } from '@auth0/nextjs-auth0'

const Account = () => {
  const [editMode, setEditMode] = useState(false)
  const { user, error, isLoading } = useUser();
  return (

    <>
      {!isLoading && (
        <>
          <Navbar />
          <div className={styles.pageCont}>
            <div className={styles.logOutCont}>
              <a href="/api/auth/logout">Log Out</a>
            </div>
            <div className={styles.header}>
              <h1>Hello, {user.nickname}</h1>
            </div>
            <div className={styles.bodyCont}>
              <div className={styles.profileInfoSection}>
                {!editMode && (
                  <div className={styles.editButton} onClick={() => setEditMode(true)}>
                    <Edit />
                  </div>
                )}
                <h3>Profile Details </h3>
                <div>
                  <h4>Name:</h4>
                  {!editMode && <p>XXXXXXX</p>}
                  {editMode && <input type="text"></input>}
                </div>
                <div>
                  <h4>Contact No:</h4>
                  {!editMode && <p>XXXXXXX</p>}
                  {editMode && <input type="text"></input>}
                </div>
                <div>
                  <h4>Shipping Address:</h4>
                  {!editMode && <p>XXXXXXX</p>}
                  {editMode && <input type="text"></input>}
                </div>
                {editMode && <button className={styles.submitButton} onClick={() => setEditMode(false)}>Submit</button>}
              </div>
              <div className={styles.navButtonContainer}>
                <Link href="/wishlist">
                  <div className={styles.navButton}>
                    <h2>Your Wishlist</h2>
                    <RightArrow />
                  </div>
                </Link>
                <Link href="/cart">
                  <div className={styles.navButton}>
                    <h2>Your Cart</h2>
                    <RightArrow />
                  </div>
                </Link>
                <Link href="/orders">
                  <div className={styles.navButton}>
                    <h2>Your Orders</h2>
                    <RightArrow />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Account
