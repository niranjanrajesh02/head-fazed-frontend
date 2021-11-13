import { Edit, RightArrow } from '@components/icons'
import React, { useEffect, useState, useContext } from 'react'
import styles from './account.module.css'
import Link from 'next/link'
import Navbar from '@components/Navbar/Navbar'
import axios from 'axios'
import { UserContext } from '../../HOC/UserContext';
import { useRouter } from 'next/router'

const Account = () => {
  const router = useRouter();
  const [editMode, setEditMode] = useState(false)
  const [nameField, setNameField] = useState(null);
  const [contactField, setContactField] = useState(null);
  const [addressField, setAddressField] = useState(null);
  const { userDB } = useContext(UserContext)
  useEffect(() => {
    if (userDB) {
      var config = {
        method: 'get',
        url: `/users/${userDB.email}`,
      };
      axios(config)
        .then(function (response) {
          // console.log((response.data));
          setNameField(response.data.username);
          setContactField(response.data.contact_no);
          setAddressField(response.data.shipping_add)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [userDB])

  function submitProfile() {
    let data = JSON.stringify({
      "user_id": userDB.user_id,
      "username": nameField,
      "contact_no": contactField,
      "shipping_add": addressField
    });

    let config = {
      method: 'patch',
      url: '/users/details',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log((response.data));
        router.reload()
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  return (
    <>
      {userDB && (
        <>
          <Navbar />
          <div className={styles.pageCont}>
            <div className={styles.logOutCont}>
              <a href="/api/auth/logout">Log Out</a>
            </div>
            <div className={styles.header}>
              <h1>Hello, {userDB.name}</h1>
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
                  {!editMode && <p>{nameField}</p>}
                  {editMode && <input type="text" onChange={(e) => setNameField(e.target.value)} value={nameField}></input>}
                </div>
                <div>
                  <h4>Contact No:</h4>
                  {!editMode && <p>{contactField}</p>}
                  {editMode && <input type="text" onChange={(e) => setContactField(e.target.value)} value={contactField}></input>}
                </div>
                <div>
                  <h4>Shipping Address:</h4>
                  {!editMode && <p>{addressField}</p>}
                  {editMode && <input type="text" value={addressField} onChange={(e) => setAddressField(e.target.value)}></input>}
                </div>
                {editMode && (
                  <div className={styles.buttonCont}>
                    <button className={styles.cancelButton} onClick={() => setEditMode(false)}>Cancel</button>
                    <button className={styles.submitButton} onClick={submitProfile}  >Submit</button>
                  </div>
                )}
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
