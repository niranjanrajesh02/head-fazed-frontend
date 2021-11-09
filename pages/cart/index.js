
import CartItem from '@components/CartItem/CartItem'
import React, { useEffect, useState } from 'react'
import styles from './cart.module.css'
const testProducts = [
  {
    id: 1,
    name: "K72",
    price: 3299,
    short_desc: "Very small short desc for K72",
    description: "The new AKG K72 are over-ears, closed-back headphones that provide you the perfect combination of sound quality and comfort. Fitted with a powerful 40mm driver unit the K72 delivers solid bass, with well-defined mids and clear highs. What you get is a perfect unparalleled audio experience. The cable runs 3m long, making these perfect for all your studio applications. It aims at delivering an extended frequency response that reveals every detail of your music.",
    images: ["https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-AKG-K72-3_800x.jpg?v=1622269593", "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-AKG-K72-2_800x.jpg?v=1622269604", "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-AKG-K72-4_2000x.jpg?v=1622269608", "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-AKG-K72-6_800x.jpg?v=1622269617"],
    seller: "AKG",
    avg_rating: 4.1,
    reviews: 2019,
    categories: ["Over Ear", "Audiophile", "Wired"]
  },
  {
    id: 2,
    name: "Airpods Pro",
    price: 24900,
    short_desc: "Very small short desc for Airpods",
    description: "AirPods Pro have been designed to deliver Active Noise Cancellation for immersive sound, Transparency mode so you can hear your surroundings, and a customizable fit for all-day comfort. Just like AirPods, AirPods Pro connect magically to your Apple devices. And they’re ready to use right out of the case.",
    images: ["https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1591634795000", "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1591634652000", "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1591634643000", "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22_AV3?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1591634662000"],
    seller: "Apple",
    avg_rating: 3.2,
    reviews: 982,
    categories: ["In Ear", "Everyday", "True Wireless"]
  }
]
const Cart = () => {
  const [products, setProducts] = useState(testProducts);
  const [updated, setUpdated] = useState(false)
  const [total, setTotal] = useState(0);
  //initial calc
  useEffect(() => {
    let sum = 0;
    products.forEach((product) => sum += product.price)
    setTotal(sum);
  }, [])
  function updateHandler() {
    setUpdated(true);
    //TODO update price with PUT request to update cart ??
  }


  return (
    <div className={styles.pageCont}>
      <div className={styles.header}>
        <h1>Your Cart</h1>
      </div>
      <div className={styles.cartContainer}>
        <div className={styles.itemsContainer}>
          {products.map((item, ind) => (
            <CartItem product={item} updateHandler={updateHandler} />
          ))}

        </div>
        <div className={styles.summaryContainer}>
          {!updated && (
            <div>
              <h3>Total: ₹<span>{total}</span></h3>
              <button className={styles.checkoutBtn}>Checkout</button>
              <button className={styles.continueBtn}>Continue Shopping</button>
            </div>
          )}
          {updated && <button className={styles.checkoutBtn}>Update Cart</button>}
        </div>
      </div>
    </div>
  )
}

export default Cart
