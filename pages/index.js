import Navbar from '@components/Navbar/Navbar'
import Head from 'next/head'
import ImageGallery from 'react-image-gallery';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import styles from './index.module.css'
import React from 'react';
import Image from 'next/image';

export default function Home() {
  const carouselImages = [
    {
      original: "https://res.cloudinary.com/dghdxukxy/image/upload/v1636730872/headfazed/Carousel_All_wf9ltn.png"
    },
    {
      original: "https://res.cloudinary.com/dghdxukxy/image/upload/v1636730873/headfazed/Carousel_Audiophile_hlbzq7.png"
    },
    {
      original: "https://res.cloudinary.com/dghdxukxy/image/upload/v1636730873/headfazed/Carousel_Gaming_lqm1as.png"
    },
    {
      original: "https://res.cloudinary.com/dghdxukxy/image/upload/v1636730874/headfazed/Carousel_Wireless_wdseiw.png"
    }

  ];
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
    loop: true
  })
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
                  <div className={styles.imgCont}>
                    <Image src={carouselImages[0].original} height={200} width={1000}
                      layout="responsive" objectFit="contain" />
                  </div>
                </div>
                <div className="keen-slider__slide">
                  <div className={styles.imgCont}>
                    <Image src={carouselImages[1].original} height={200} width={1000}
                      layout="responsive" objectFit="contain" />
                  </div>
                </div>
                <div className="keen-slider__slide">
                  <div className={styles.imgCont}>
                    <Image src={carouselImages[2].original} height={200} width={1000}
                      layout="responsive" objectFit="contain" />
                  </div>
                </div>
                <div className="keen-slider__slide">
                  <div className={styles.imgCont}>
                    <Image src={carouselImages[3].original} height={200} width={1000}
                      layout="responsive" objectFit="contain" />
                  </div>
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

