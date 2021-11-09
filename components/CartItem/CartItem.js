import React, { useState } from 'react'
import Image from 'next/image'
import styles from './CartItem.module.css'
import { Minus, Plus } from '@components/icons'


const CartItem = ({ product, updateHandler }) => {
  const [quantity, setQuantity] = useState(1);
  function decrementQuantity() {
    if (quantity === 1) {
      return
    }
    else {
      setQuantity(quantity - 1)
      updateHandler();
    }
  }
  function incrementQuantity() {
    if (quantity === 10) {
      return
    }
    else {
      setQuantity(quantity + 1);
      updateHandler();
    }
  }
  return (
    <div className={styles.itemCont}>
      <div className={styles.imgCont}>
        <Image src={product.images[0]} height={200} width={200} layout="responsive" />
      </div>
      <div className={styles.textCont}>
        <div>
          <h2>{product.name}</h2>
          <p>₹{product.price}</p>
        </div>
        <div className={styles.quantityCont}>
          <a onClick={decrementQuantity}><Minus /></a>
          <p>{quantity}</p>
          <a onClick={incrementQuantity}><Plus /></a>
        </div>
        <p className={styles.delete}>Remove</p>
      </div>
    </div>
  )
}

export default CartItem

