import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from './Product.module.css'
import { EmptyStar, FullStar } from '@components/icons'
import ImageGallery from 'react-image-gallery';
import ProductTile from '@components/ProductTile/ProductTile';
import Navbar from '@components/Navbar/Navbar';
import axios from 'axios';
import LoadingSpinner from '@components/LoadingSpinner';

const testProduct = {
  id: 1,
  name: "AKG - K72",
  price: 3299,
  short_desc: "Very small short desc for K72",
  description: "The new AKG K72 are over-ears, closed-back headphones that provide you the perfect combination of sound quality and comfort. Fitted with a powerful 40mm driver unit the K72 delivers solid bass, with well-defined mids and clear highs. What you get is a perfect unparalleled audio experience. The cable runs 3m long, making these perfect for all your studio applications. It aims at delivering an extended frequency response that reveals every detail of your music.",
  images: ["https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-AKG-K72-3_800x.jpg?v=1622269593", "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-AKG-K72-2_800x.jpg?v=1622269604", "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-AKG-K72-4_2000x.jpg?v=1622269608", "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-AKG-K72-6_800x.jpg?v=1622269617"],
  seller: "AKG",
  avg_rating: 4.1,
  reviews: [
    {
      user_name: "Bob Ross",
      rating: 4,
      review_text: "The best pair of headphones I have ever worn in my life.",
      verified: true
    },
    {
      user_name: "Jack Ma",
      rating: 5,
      review_text: "Yummy"
    },
    {
      user_name: "Donald Trump",
      rating: 1,
      review_text: "Sorry losers and haters, but my I.Q. is one of the highest -and you all know it! Please don’t feel so stupid or insecure,it’s not your fault. Heheheheheheheh."
    },
  ],
  categories: ["Over Ear", "Audiophile", "Wired"]
}
const recommendedProducts = [
  {
    id: 1,
    name: "AKG - K72",
    price: 3299,
    short_desc: "Very small short desc for K72",
    description: "The new AKG K72 are over-ears, closed-back headphones that provide you the perfect combination of sound quality and comfort. Fitted with a powerful 40mm driver unit the K72 delivers solid bass, with well-defined mids and clear highs. What you get is a perfect unparalleled audio experience. The cable runs 3m long, making these perfect for all your studio applications. It aims at delivering an extended frequency response that reveals every detail of your music.",
    images: ["https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-AKG-K72-3_800x.jpg?v=1622269593", "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-AKG-K72-2_800x.jpg?v=1622269604", "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-AKG-K72-4_2000x.jpg?v=1622269608", "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-AKG-K72-6_800x.jpg?v=1622269617"],
    seller: "AKG",
    avg_rating: 4.1,
    categories: ["Over Ear", "Audiophile", "Wired"]
  },
  {
    id: 1,
    name: "AKG - K72",
    price: 3299,
    short_desc: "Very small short desc for K72",
    description: "The new AKG K72 are over-ears, closed-back headphones that provide you the perfect combination of sound quality and comfort. Fitted with a powerful 40mm driver unit the K72 delivers solid bass, with well-defined mids and clear highs. What you get is a perfect unparalleled audio experience. The cable runs 3m long, making these perfect for all your studio applications. It aims at delivering an extended frequency response that reveals every detail of your music.",
    images: ["https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-AKG-K72-3_800x.jpg?v=1622269593", "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-AKG-K72-2_800x.jpg?v=1622269604", "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-AKG-K72-4_2000x.jpg?v=1622269608", "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-AKG-K72-6_800x.jpg?v=1622269617"],
    seller: "AKG",
    avg_rating: 4.1,
    categories: ["Over Ear", "Audiophile", "Wired"]
  },
  {
    id: 1,
    name: "AKG - K72",
    price: 3299,
    short_desc: "Very small short desc for K72",
    description: "The new AKG K72 are over-ears, closed-back headphones that provide you the perfect combination of sound quality and comfort. Fitted with a powerful 40mm driver unit the K72 delivers solid bass, with well-defined mids and clear highs. What you get is a perfect unparalleled audio experience. The cable runs 3m long, making these perfect for all your studio applications. It aims at delivering an extended frequency response that reveals every detail of your music.",
    images: ["https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-AKG-K72-3_800x.jpg?v=1622269593", "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-AKG-K72-2_800x.jpg?v=1622269604", "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-AKG-K72-4_2000x.jpg?v=1622269608", "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-AKG-K72-6_800x.jpg?v=1622269617"],
    seller: "AKG",
    avg_rating: 4.1,
    categories: ["Over Ear", "Audiophile", "Wired"]
  }
]

const average = arr => arr.reduce((p, c) => p + c, 0) / arr.length;

const Product = () => {
  const [product, setProduct] = useState(null);
  let fullStarNo = 0;
  if (product && product.ratings.length > 0) {
    fullStarNo = Math.floor(average(product.ratings))
  }
  const emptyStarNo = 5 - fullStarNo
  const [recommended, setRecommended] = useState(null);
  const router = useRouter()
  const { pid } = router.query
  useEffect(() => {
    if (pid) {
      let config = {
        method: 'get',
        url: `/products/find/${pid}`,
        headers: {
          'Content-Type': 'application/json'
        },
      };

      axios(config)
        .then(function (response) {
          console.log((response.data));
          setProduct(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    // setProduct(testProduct)
    // setRecommended(recommendedProducts)
  }, [pid])
  const images = [];

  product?.images.forEach((item) => images.push({ original: item }))


  return (
    <>
      <Navbar />
      <div className={styles.pageCont}>
        {product && (
          <>
            <div className={styles.mainDisplay}>
              <div className={styles.imgGallery}>
                <ImageGallery items={images} showFullscreenButton={false} autoplay={true}
                  showPlayButton={false} infinite={false} />
              </div>
              <div className={styles.textCont}>
                <h3>{product.seller.name}</h3>
                <h1>{product.name}</h1>
                <h5>{product.short_description}</h5>
                <div className={styles.ratingContainer}>
                  <div>
                    {[...Array(fullStarNo)].map((item, ind) => <FullStar />)}
                    {[...Array(emptyStarNo)].map((item, ind) => <EmptyStar />)}
                  </div>
                  <p>({product.reviews.length})</p>
                </div>
                <div className={styles.purchaseCont}>
                  <h2>₹{product.price}</h2>
                  <button className={styles.cartBtn}>Add to Cart</button>
                </div>
                <div className={styles.descCont}>
                  <p>{product.long_description}</p>
                </div>
              </div>
            </div>
            <div className={styles.reviewsCont}>
              <div className={styles.reviewTitleCont}>
                <h1>Reviews for {product.name}</h1>
              </div>
              <div className={styles.ratingsBox}>
                <div>
                  {[...Array(fullStarNo)].map((item, ind) => <FullStar />)}
                  {[...Array(emptyStarNo)].map((item, ind) => <EmptyStar />)}
                </div>
                <p>Based on {product.reviews.length} reviews</p>
              </div>
              <div className={styles.reviewsBox}>
                {product.reviews.map((item, ind) => {
                  const fullStarNo = Math.floor(item.rating)
                  const emptyStarNo = 5 - fullStarNo
                  return (
                    <div className={styles.review}>
                      <div className={styles.userDetails}>
                        <h4>{item.user_name}</h4>
                        {item.verified && <span>Verified</span>}
                      </div>
                      <div>
                        {[...Array(fullStarNo)].map((item, ind) => <FullStar />)}
                        {[...Array(emptyStarNo)].map((item, ind) => <EmptyStar />)}
                      </div>
                      <p className={styles.reviewText}>{item.review_text}</p>
                    </div>
                  )
                })}
                {(product.reviews.length === 0) && <h3 style={{ color: "#40e0d0", fontWeight: 400 }}>No reviews for this product yet. Why don't you create one?</h3>}
              </div>
            </div>
            <div className={styles.recommendedCont}>
              <h1>Recommended Products</h1>
              <div className={styles.recommendedGallery}>
                {recommendedProducts.map((item, ind) => {
                  return (
                    <ProductTile product={item} />
                  )
                })}
              </div>
            </div>
          </>
        )}
        {!product && <LoadingSpinner />}
      </div>
    </>
  )
}

export default Product
