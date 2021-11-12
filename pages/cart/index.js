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
  const { userDB } = useContext(UserContext)
  const router = useRouter();



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

  function checkoutCart() {
    let data = JSON.stringify({
      "cart_id": cart._id,
      "user_id": userDB.user_id
    });

    let config = {
      method: 'post',
      url: '/orders/checkout',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log((response.data));
        router.push('/account')
      })
      .catch(function (error) {
        console.log(error);
      });

  }

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
            {cart.products.length === 0 && (
              <div className={styles.emptyContainer}>
                <h2>Your Cart is Empty!</h2>
                <button className={styles.checkoutBtn} onClick={() => router.push("/shop/all")}>Continue Shopping</button>
              </div>
            )}
            {cart.products.length > 0 && (
              <div className={styles.cartContainer}>
                <div className={styles.itemsContainer}>
                  {cart.products.map((item, ind) => (
                    <CartItem product={item} user_id={userDB.user_id} setCart={setCart} />
                  ))}
                </div>
                <div className={styles.summaryContainer}>
                  <h3>Total: ₹<span>{cart.total_val}</span></h3>
                  <button className={styles.checkoutBtn} onClick={checkoutCart} >Checkout</button>
                  <button className={styles.continueBtn} onClick={() => router.push("/shop/all")}>Continue Shopping</button>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </>
  )
}

export default Cart
