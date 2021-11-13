import Gallery from '@components/Gallery/Gallery'
import Navbar from '@components/Navbar/Navbar'
import React, { useEffect, useState, useContext } from 'react'
import styles from './wishlist.module.css'
import axios from 'axios'
import { UserContext } from 'HOC/UserContext'
import LoadingSpinner from '@components/LoadingSpinner'

const Wishlist = () => {
  const { userDB } = useContext(UserContext)
  const [products, setProducts] = useState(null);
  useEffect(() => {
    if (userDB) {
      var config = {
        method: 'get',
        url: `/wishlist/${userDB.user_id}`,
        headers: {
          'Content-Type': 'application/json'
        }
      };
      axios(config)
        .then(function (response) {
          console.log((response.data));
          setProducts(response.data.products)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [userDB])



  return (
    <>
      <Navbar />
      <div className={styles.pageCont}>
        {products && (
          <>
            <div className={styles.header}>
              <h1>Your Wishlist</h1>
            </div>
            <Gallery page="wishlist" products={products} />
          </>
        )}
        {!products && <LoadingSpinner />}
      </div>
    </>
  )
}

export default Wishlist
