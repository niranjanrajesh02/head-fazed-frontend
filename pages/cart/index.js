import CartItem from '@components/CartItem/CartItem'
import Navbar from '@components/Navbar/Navbar'
import React, { useEffect, useState, useContext } from 'react'
import styles from './cart.module.css'
import { UserContext } from '../../HOC/UserContext';
import axios from 'axios';
import LoadingSpinner from '@components/LoadingSpinner';
import { useRouter } from 'next/router'

const Cart = () => {
  const [cart, setCart] = useState(null);
  const [updated, setUpdated] = useState(false);
  const { userDB } = useContext(UserContext)
  const router = useRouter();

  function updateHandler() {
    setUpdated(true);
  }

  useEffect(() => {
    if (userDB) {
      console.log(userDB.user_id);
      var config = {
        method: 'get',
        url: `/cart/${userDB.user_id}`,
        headers: {
          'Content-Type': 'application/json'
        },
      };
      axios(config)
        .then(function (response) {
          console.log((response.data));
          setCart(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [userDB])


  return (
    <>
      {!cart && (<LoadingSpinner />)}
      {cart && (
        <>
          <Navbar />
          <div className={styles.pageCont}>
            <div className={styles.header}>
              <h1>Your Cart</h1>
            </div>
            <div className={styles.cartContainer}>
              <div className={styles.itemsContainer}>
                {cart.products.map((item, ind) => (
                  <CartItem product={item} updateHandler={updateHandler} user_id={userDB.user_id} setCart={setCart} />
                ))}
              </div>
              <div className={styles.summaryContainer}>
                {!updated && (
                  <div>
                    <h3>Total: ₹<span>{cart.total_val}</span></h3>
                    <button className={styles.checkoutBtn}>Checkout</button>
                    <button className={styles.continueBtn} onClick={() => Router.push("/shop/all")}>Continue Shopping</button>
                  </div>
                )}
                {updated && <button className={styles.checkoutBtn}>Update Cart</button>}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Cart
