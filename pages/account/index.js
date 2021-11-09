import { Edit, RightArrow } from '@components/icons'
import React, { useState } from 'react'
import styles from './account.module.css'
const Account = () => {
  const [editMode, setEditMode] = useState(false)
  return (
    <div className={styles.pageCont}>
      <div className={styles.logOutCont}>
        <h3>Log Out</h3>
      </div>
      <div className={styles.header}>
        <h1>Hello, USERNAME</h1>

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
          <div className={styles.navButton}>
            <h2>Your Wishlist</h2>
            <RightArrow />
          </div>
          <div className={styles.navButton}>
            <h2>Your Cart</h2>
            <RightArrow />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account
