import Navbar from '@components/Navbar/Navbar'
import Head from 'next/head'
import ImageGallery from 'react-image-gallery';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import styles from './index.module.css'
import React from 'react';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';
import ProductTile from '@components/ProductTile/ProductTile';
const featuredProducts = [
  {
    "_id": "618c46627d71813b2103579d",
    "name": "ATH-M20x",
    "short_description": "Closed-Back Studio Monitors",
    "long_description": "An entry level monitoring headphone that you will find in studios around the world. The Audio-Technica ATH-M20x is an essential tool for budding musicians and producers for it's flat and accurate response and outstanding value for money",
    "price": 5000,
    "images": [
      "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Audio-technica-m20x-1160-1160_2000x.jpg?v=1590482291",
      "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Audio-technica-m20x-1160-1160-1_400x.jpg?v=1590482291",
      "https://cdn.shopify.com/s/files/1/0153/8863/products/audio-technica-ath-m20x-headphone-zone-13979077017663_2000x.jpg?v=1579701938",
      "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Audio-technica-m20x-1160-1160-2_2000x.jpg?v=1590482291"
    ],
    "date": "2021-11-10T22:23:27.659Z",
    "seller": "618c4274b6e5af216a832623",
    "ratings": [
      3,
      5,
      5,
      5,
      5,
      5
    ],
    "reviews": [
      "618c6fea801916d671c08e7e",
      "618c72d239849f488dd5b305",
      "618c746339849f488dd5b326",
      "618c74b539849f488dd5b32f",
      "618c7dd839849f488dd5b3b0",
      "618dbe74b8ef26323971e190",
      "618dbe79b8ef26323971e19b",
      "618dbea9b8ef26323971e1a9"
    ],
    "wishlisted": [],
    "categories": [
      "studio",
      "over-ear",
      "wired",
      "audio-technica"
    ],
    "__v": 0,
    "avg_rating": 4.67
  },
  {
    "_id": "618c48787d71813b210357a0",
    "name": "LIVE 200BT",
    "short_description": "Feel Alive with the LIVE200BT",
    "long_description": "JBL has teamed up with numerous experts to give you a great sound. The large 8mm drivers give you the signature JBL sound thereby ensuring great clarity. The LIVE 200BT's drivers deliver a precise, powerful sound for an exceptional listening experience.",
    "price": 2999,
    "images": [
      "https://cdn.shopify.com/s/files/1/0153/8863/products/0137d82339d56d7e89ccc9a57c2f8881_2000x.jpg?v=1636458989",
      "https://cdn.shopify.com/s/files/1/0153/8863/products/9247ef7afb7ab8656957dd974e1bd633_2000x.jpg?v=1636458989",
      "https://cdn.shopify.com/s/files/1/0153/8863/products/9247ef7afb7ab8656957dd974e1bd633_2000x.jpg?v=1636458989",
      "https://cdn.shopify.com/s/files/1/0153/8863/products/4dbc456ca2700d7cb3b23f4986048794_2000x.jpg?v=1636458989"
    ],
    "date": "2021-11-10T22:23:27.659Z",
    "seller": "618c4296b6e5af216a832629",
    "ratings": [
      4,
      3
    ],
    "reviews": [
      "618d322d267388001db5e647",
      "618d5f12a91c4ead21a4befb"
    ],
    "wishlisted": [],
    "categories": [
      "casual",
      "wireless",
      "in-ear",
      "jbl"
    ],
    "__v": 0,
    "avg_rating": 3.5
  },
  {
    "_id": "618c498f7d71813b210357a8",
    "name": "Kraken V3 X",
    "short_description": "Bring your A-Game with the Krakern V3 X",
    "long_description": "Immerse yourself into your gaming world with a super lightweight Razer Kraken V3 X. Weighing at around 285g, the Kraken V3 X sports a slim form factor for absolute wearing comfort. These USB PC gaming headphones are designed to let you play games comfortably for hours. With the patented Razer™ TriForce drivers, experience realistic sound and have a competitive edge over your opponent.",
    "price": 7200,
    "images": [
      "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Razer-Kraken-V3-X-Gaming-Headset-gallery-1_2000x.jpg?v=1618918980",
      "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Razer-Kraken-V3-X-Gaming-Headset-gallery-2_2000x.jpg?v=1618918980",
      "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Razer-Kraken-V3-X-Gaming-Headset-gallery-3_2000x.jpg?v=1618918981",
      "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Razer-Kraken-V3-X-Gaming-Headset-gallery-4_2000x.jpg?v=1618918980"
    ],
    "date": "2021-11-10T22:23:27.659Z",
    "seller": "618c48897d71813b210357a5",
    "ratings": [
      4,
      1
    ],
    "reviews": [
      "618d5e2d86b0c9fedafdb853",
      "618d5e5d86b0c9fedafdb860"
    ],
    "wishlisted": [],
    "categories": [
      "gaming",
      "wired",
      "over-ear",
      "razer"
    ],
    "__v": 0,
    "avg_rating": 2.5
  },
  {
    "_id": "618c4ab37d71813b210357ab",
    "name": "Dime",
    "short_description": "Compact True Wireless Stereo Earbuds",
    "long_description": "Skullcandy Dime earbuds pack a punch. Embedded with the signature Skullcandy® supreme sound, it delivers a full and rich listening experience usually found in much more expensive earbuds. Dual microphones allow you to use either earbud solo, even when you’re taking a call. Dime is sweat and water-resistant so it will stand up to workouts and outdoor adventures, and you can listen without worry.",
    "price": 2799,
    "images": [
      "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Skullcandy-Dime-True-Black-1160-1160-01_2000x.jpg?v=1635859607",
      "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Skullcandy-Dime-True-Black-1160-1160-06_2000x.jpg?v=1635859607",
      "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Skullcandy-Dime-06_2000x.jpg?v=1635925603",
      "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Skullcandy-Dime-04_2000x.jpg?v=1635925603"
    ],
    "date": "2021-11-10T22:23:27.659Z",
    "seller": "618c429cb6e5af216a83262b",
    "ratings": [
      5,
      2
    ],
    "reviews": [
      "618d5ed4a91c4ead21a4beea",
      "618d6b60c1368b69a1afe184"
    ],
    "wishlisted": [],
    "categories": [
      "casual",
      "wireless",
      "in-ear",
      "skullcandy"
    ],
    "__v": 0,
    "avg_rating": 3.5
  }]
const carouselImages = [
  {
    original: "https://res.cloudinary.com/dghdxukxy/image/upload/v1636730872/headfazed/Carousel_All_wf9ltn.png"
  },
  {
    original: "https://res.cloudinary.com/dghdxukxy/image/upload/v1636759633/headfazed/carousel_audiop_ogrglw.png"
  },
  {
    original: "https://res.cloudinary.com/dghdxukxy/image/upload/v1636759635/headfazed/carousel_gaming_1_dbpgxb.png"
  },
  {
    original: "https://res.cloudinary.com/dghdxukxy/image/upload/v1636730874/headfazed/Carousel_Wireless_wdseiw.png"
  }

];
const tileImages = [
  ["/images/JBLTile.png", "/product/618e789775d0f410531e7830"],
  ["/images/RazerTile.png", "/product/618e5f1075d0f410531e7808"]
]
export default function Home() {

  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
    loop: true
  })

  const isMobile = useMediaQuery({ maxWidth: 1024 })
  return (
    <>
      <Head>
        <title>HeadFazed</title>
      </Head>
      <main>
        <Navbar />
        <div className={styles.pageCont}>
          <div className={styles.mainCarousel}>
            {/* <ImageGallery items={carouselImages} showFullscreenButton={false} autoplay={true}
              showPlayButton={false} infinite={true} /> */}
            <div className="navigation-wrapper">
              <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide">
                  <Link href="/shop/All">
                    <div className={styles.imgCont}>
                      {!isMobile && <Image src={carouselImages[0].original} height={200} width={1000}
                        layout="responsive" objectFit="contain" />}
                      {isMobile && <Image src={carouselImages[0].original} height={400} width={1000}
                        layout="responsive" objectFit="cover" />}
                    </div>
                  </Link>
                </div>
                <div className="keen-slider__slide">
                  <Link href="/shop/Studio">
                    <div className={styles.imgCont}>
                      {!isMobile && <Image src={carouselImages[1].original} height={200} width={1000}
                        layout="responsive" objectFit="contain" />}
                      {isMobile && <Image src={carouselImages[1].original} height={400} width={1000}
                        layout="responsive" objectFit="cover" />}
                    </div>
                  </Link>
                </div>
                <div className="keen-slider__slide">
                  <Link href="/shop/Gaming">
                    <div className={styles.imgCont}>
                      {!isMobile && <Image src={carouselImages[2].original} height={200} width={1000}
                        layout="responsive" objectFit="contain" />}
                      {isMobile && <Image src={carouselImages[2].original} height={400} width={1000}
                        layout="responsive" objectFit="cover" />}
                    </div>
                  </Link>
                </div>
                <div className="keen-slider__slide">
                  <Link href="/shop/Wireless">
                    <div className={styles.imgCont}>
                      {!isMobile && <Image src={carouselImages[3].original} height={200} width={1000}
                        layout="responsive" objectFit="contain" />}
                      {isMobile && <Image src={carouselImages[3].original} height={400} width={1000}
                        layout="responsive" objectFit="cover" />}
                    </div>
                  </Link>
                </div>

              </div>
              {slider && (
                <>
                  <ArrowLeft
                    onClick={(e) => e.stopPropagation() || slider.prev()}
                    disabled={currentSlide === 0}
                  />
                  <ArrowRight
                    onClick={(e) => e.stopPropagation() || slider.next()}
                    disabled={currentSlide === slider.details().size - 1}
                  />
                </>
              )}
            </div>
            {slider && (
              <div className="dots">
                {[...Array(slider.details().size).keys()].map((idx) => {
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        slider.moveToSlideRelative(idx)
                      }}
                      className={"dot" + (currentSlide === idx ? " active" : "")}
                    />
                  )
                })}
              </div>
            )}
          </div>
          <div className={styles.featuredCont}>
            <h1>Featured Products</h1>
            <div className={styles.featuredGallery}>
              {featuredProducts.map((item, ind) => <div key={ind}><ProductTile product={item} /></div>)}
            </div>
          </div>
          <div className={styles.adsCont}>
            <h1>Check Out These Products!</h1>
            <div className={styles.featuredGallery}>
              {tileImages.map((item, ind) => (
                <div key={ind} className={styles.adImgCont}>
                  <Link href={item[1]}><Image src={item[0]} height={200} width={200} layout="responsive" /></Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

    </>
  )
}

function ArrowLeft(props) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={"arrow arrow--left" + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  )
}

function ArrowRight(props) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={"arrow arrow--right" + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  )
}

