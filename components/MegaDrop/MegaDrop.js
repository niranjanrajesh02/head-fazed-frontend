import React from 'react'
import styles from './MegaDrop.module.css'
import { FullStar } from '@components/icons'

const MegaDrop = ({ use }) => {

  return (
    <div className={styles.dropdownMenu}>
      {use === "shopFilterMob" && (
        <div className={styles.filterSectionMob}>
          <h4>Price</h4>
          <div className={styles.priceSection}>
            <div className={styles.minMaxCont}><h5>Min:</h5><input type="number" min={0} max={9999} placeholder="" /></div>
            <div className={styles.minMaxCont}><h5>Max:</h5><input type="number" min={100} max={99999} placeholder="" /></div>
          </div>
          <h4>Ratings</h4>
          <div className={styles.sortReviewSection} >
            <div className={styles.starsRow}>
              <>
                <FullStar />
                <FullStar />
                <FullStar />
                <FullStar />
                <FullStar />
              </>
            </div>
            <div className={styles.starsRow}>
              <>
                <FullStar />
                <FullStar />
                <FullStar />
                <FullStar />
                <p>+</p>
              </>
            </div>
            <div className={styles.starsRow}>
              <>
                <FullStar />
                <FullStar />
                <FullStar />
                <p>+</p>
              </>
            </div>
            <div className={styles.starsRow}>
              <>
                <FullStar />
                <FullStar />
                <p>+</p>
              </>
            </div>
            <div className={styles.starsRow}>
              <>
                <FullStar />
                <p>+</p>
              </>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MegaDrop
