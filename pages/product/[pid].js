import React, { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import styles from './Product.module.css'
import { BackArrow, Cross, EmptyStar, FullStar } from '@components/icons'
import ImageGallery from 'react-image-gallery';
import ProductTile from '@components/ProductTile/ProductTile';
import Navbar from '@components/Navbar/Navbar';
import axios from 'axios';
import LoadingSpinner from '@components/LoadingSpinner';
import { UserContext } from '../../HOC/UserContext';


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



const Product = () => {
  const [product, setProduct] = useState(null);
  const fullStarNo = (product?.avg_rating) ? Math.round(product.avg_rating) : 0
  const emptyStarNo = 5 - fullStarNo
  const [recommended, setRecommended] = useState(null);
  const [reviewModal, setReviewModal] = useState(false);
  const [reviewStars, setReviewStars] = useState(0);
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewBody, setReviewBody] = useState("");
  const { userDB } = useContext(UserContext)
  const [cartUpdated, setCartUpdated] = useState(false);
  // console.log(userDB);
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
          // console.log((response.data));
          setProduct(response.data)


        })
        .catch(function (error) {
          console.log(error);
        });
    }


  }, [pid, userDB])

  useEffect(() => {
    if (product) {
      let config2 = {
        method: 'get',
        url: `/products/recommended/${product._id}`,
        headers: {}
      };

      axios(config2)
        .then(function (response) {
          // console.log((response.data));
          setRecommended(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [product])


  const images = [];
  product?.images.forEach((item) => images.push({ original: item }))

  function addToCart() {
    let data = JSON.stringify({
      "u_id": userDB.user_id,
      "product_id": product._id,
      "action": "cQuantity",
      "quantity": 1
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
        // setReloaded(true);
        // router.reload()
        setCartUpdated(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function addToWishlist() {
    var data = JSON.stringify({
      "user_id": userDB.user_id,
      "product_id": product._id
    });

    var config = {
      method: 'patch',
      url: '/wishlist',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log((response.data));
        router.push("/wishlist", null, { shallow: false })
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  function removeFromWishlist() {
    var data = JSON.stringify({
      "user_id": userDB.user_id,
      "product_id": product._id
    });

    var config = {
      method: 'patch',
      url: '/wishlist/remove',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log((response.data));
        router.push("/wishlist", null, { shallow: false })
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function submitReviewHandler() {
    //TODO set up context for user id and user name
    var data = JSON.stringify({
      "reviewTitle": reviewTitle,
      "reviewText": reviewBody,
      "userId": userDB.user_id,
      "productId": product._id,
      "userName": userDB.name,
      "rating": reviewStars
    });

    var config = {
      method: 'post',
      url: 'reviews',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log((response.data));

        router.reload(window.location.pathname)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <Navbar />
      <div className={styles.pageCont}>
        {(product) && (
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
                <div className={styles.interestedCont}>
                  <p> {product.wishlisted.length} {product.wishlisted.length === 1 ? "person is interested" : "people are interested"}</p>
                </div>
                <div className={styles.purchaseCont}>
                  <h2>₹{product.price}</h2>
                  {!cartUpdated && <button className={styles.cartBtn} onClick={addToCart}>Add to Cart</button>}
                  {cartUpdated && <a className={styles.cartAnchor} href="/cart">Go to Cart</a>}
                  {product.wishlisted.includes(userDB?.user_id) && <button className={styles.removeBtn} onClick={removeFromWishlist}>Remove from Wishlist</button>}
                  {!product.wishlisted.includes(userDB?.user_id) && <button className={styles.wishlistBtn} onClick={addToWishlist}>Add to Wishlist</button>}
                </div>
                <div className={styles.descCont}>
                  <p>{product.long_description}</p>
                </div>
              </div>
            </div>

            {recommended && (
              <div className={styles.recommendedCont}>
                <h1>Recommended Products</h1>
                <div className={styles.recommendedGallery}>
                  {recommended.map((item, ind) => {
                    return (
                      <ProductTile product={item} />
                    )
                  })}
                </div>
              </div>
            )}
            {!recommended && (<LoadingSpinner />)}
            <div className={styles.reviewsCont}>
              {reviewModal && (
                <div className={styles.createReviewCont}>
                  <div className={styles.createTitle}>
                    <a onClick={() => setReviewModal(false)}><BackArrow /></a>
                    <h1>Write your review for {product.name}</h1>
                  </div>
                  <div className={styles.createFields}>
                    <input type="text" placeholder="Review Title" onChange={(e) => setReviewTitle(e.target.value)} />
                    <textarea rows={10} placeholder="Review Body" onChange={(e) => setReviewBody(e.target.value)} />
                  </div>
                  <div className={styles.createStars}>
                    <h4>Stars</h4>
                    <input type="number" min={1} max={5} onChange={(e) => setReviewStars(e.target.value)}></input>
                  </div>
                  <button className={styles.reviewBtn} onClick={submitReviewHandler}>
                    Submit Review
                  </button>
                </div>
              )}
              {!reviewModal && (
                <>
                  <div className={styles.reviewTitleCont}>
                    <h1>Reviews for {product.name}</h1>
                  </div>
                  <div>
                    <button className={styles.reviewBtn} onClick={() => setReviewModal(true)}>
                      Write a Review
                    </button>
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
                      const fullStarNoSingle = (item.rating > 0) ? (item.rating) : 0
                      const emptyStarNoSingle = 5 - fullStarNoSingle
                      return (
                        <div className={styles.review}>
                          <h3>{item.reviewTitle}</h3>
                          <p className={styles.reviewText}>{item.reviewText}</p>
                          <div>
                            {[...Array(fullStarNoSingle)].map((item, ind) => <FullStar />)}
                            {[...Array(emptyStarNoSingle)].map((item, ind) => <EmptyStar />)}
                          </div>
                          <div className={styles.userDetails}>
                            <h4>- {item.userName}</h4>
                            {item.verified && <span>Verified</span>}
                          </div>
                        </div>
                      )
                    })}
                    {(product.reviews.length === 0) && <h3 style={{ color: "#40e0d0", fontWeight: 400 }}>No reviews for this product yet. Why don't you create one?</h3>}
                  </div>
                </>
              )}

            </div>
          </>
        )}
        {!product && <LoadingSpinner />}
      </div>
    </>
  )
}

export default Product
