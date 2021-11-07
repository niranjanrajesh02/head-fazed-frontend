import React from 'react'
import styles from "./AdvBanner.module.css"
import Image from 'next/image'

const AdvBanner = () => {
    return (

    <div className={styles.advBannerContainer}>
        <div className={styles.adBanner}>
            <div>
                <Image src="/images/SonyAdBanner.png" layout="fill" objectFit='contain' />
            </div>
            <div>
                <Image src="/images/SonyAdBanner.png" layout="fill" objectFit='contain' />
            </div>
            <div>
                <Image src="/images/SonyAdBanner.png" layout="fill" objectFit='contain' />
            </div>
        </div>
    </div>

    )
}

export default AdvBanner