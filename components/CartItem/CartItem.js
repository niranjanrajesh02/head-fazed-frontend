import React, { useState } from 'react'
import Image from 'next/image'
import styles from './CartItem.module.css'
import { Minus, Plus } from '@components/icons'
import axios from 'axios'


const CartItem = ({ product, updateHandler, serial, user_id, setCart }) => {

  function updateCart(q) {
    var data = JSON.stringify({
      "u_id": user_id,
      "product_id": product.productId,
      "action": "cQuantity",
      "quantity": q
    });
    var config = {
      method: 'patch',
      url: '/cart',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        // console.log((response.data));
        setCart(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function removeFromCart() {
    let data = JSON.stringify({
      "u_id": user_id,
      "product_id": product.productId,
      "action": "remove"
    });

    let config = {
      method: 'patch',
      url: '/cart',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log((response.data));
        setCart(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  function decrementQuantity() {
    if (product.quantity === 1) {
      return
    }
    else {
      // setQuantity(quantity - 1)
      updateCart(product.quantity - 1);
    }
  }
  function incrementQuantity() {
    if (product.quantity === 10) {
      return
    }
    else {
      // setQuantity(quantity + 1);
      updateCart(product.quantity + 1);
    }
  }

  return (
    <div className={styles.itemCont}>
      <div className={styles.imgCont}>
        <Image src={product.image} height={200} width={200} layout="responsive" />
      </div>
      <div className={styles.textCont}>
        <div>
          <h2>{product.name}</h2>
          <p>₹{product.price}</p>
        </div>
        <div className={styles.quantityCont}>
          <a onClick={decrementQuantity}><Minus /></a>
          <p>{product.quantity}</p>
          <a onClick={incrementQuantity}><Plus /></a>
        </div>
        <p className={styles.delete} onClick={removeFromCart}>Remove</p>
      </div>
    </div>
  )
}

export default CartItem

