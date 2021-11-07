import React from 'react'
import styles from "./AdvBanner.module.css"
import Image from 'next/image'

const AdvBanner = () => {
    return (

        /*dunno why it won't stack sideways :( */
    <div className={styles.advBannerContainer}>

            <Image src="/images/SonyAdBanner.png" layout="fill" objectFit='contain' />
            <Image src="/images/SonyAdBanner.png" layout="fill" objectFit='contain' />
            <Image src="/images/SonyAdBanner.png" layout="fill" objectFit='contain' />
        
    </div>

    )
}

export default AdvBanner