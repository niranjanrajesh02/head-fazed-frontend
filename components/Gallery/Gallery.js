import ProductTile from '@components/ProductTile/ProductTile'
import React from 'react'
import styles from './Gallery.module.css'
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
const Gallery = ({ products }) => {
  console.log(products);
  return (
    <>
      {products && (
        <div className={styles.gallerySection}>
          {products.map((item, ind) => <ProductTile ind={ind} product={item} key={ind} />)}
        </div>
      )}
    </>
  )
}

export default Gallery
