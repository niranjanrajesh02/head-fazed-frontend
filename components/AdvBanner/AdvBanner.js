import React from 'react'
import styles from "./AdvBanner.module.css"
import Image from 'next/image'

const AdvBanner = () => {
    return (

        /*dunno why it won't stack sideways :( */
    <div className={styles.advBannerContainer}>
        <div className={styles.adBanner}>
            <Image src="/images/SonyAdBanner.png" width={200} height={200} layout="responsive"/>
            <Image src="/images/SonyAdBanner.png" width={200} height={200} layout="responsive"/>
            <Image src="/images/SonyAdBanner.png" width={200} height={200} layout="responsive"/>
        </div>        
    </div>

    )
}

export default AdvBanner