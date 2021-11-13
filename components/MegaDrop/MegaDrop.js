import React, { useEffect, useState } from 'react'
import styles from './MegaDrop.module.css'
import { FullStar } from '@components/icons'

const MegaDrop = ({ use, setMinPriceFilter, setMaxPriceFilter, setStarFilter, resetFilters }) => {
  const [starsSelected, setStarsSelected] = useState(0);
  const [minSelected, setMinSelected] = useState(0)
  const [maxSelected, setMaxSelected] = useState(99999)

  function handlePriceSubmit() {
    setMaxPriceFilter(maxSelected);
    setMinPriceFilter(minSelected);
  }
  function resetLocal() {
    setMinSelected(0)
    setMaxSelected(99999)
    setStarsSelected(0)
    resetFilters()
  }
  useEffect(() => {
    if (starsSelected) {
      setStarFilter(starsSelected);
    }
  }, [starsSelected])




  return (
    <div className={styles.dropdownMenu}>
      {use === "shopFilterMob" && (
        <div className={styles.filterSectionMob}>
          <h4>Price</h4>
          <div className={styles.priceSection}>
            <div className={styles.minMaxCont}><h5>Min:</h5>
              <input type="number" min={0} value={minSelected} onChange={e => setMinSelected(e.target.value)} max={9999} />
            </div>
            <div className={styles.minMaxCont}><h5>Max:</h5>
              <input type="number" min={100} max={99999} value={maxSelected} onChange={e => setMaxSelected(e.target.value)} />
            </div>
            <button className={styles.submitBtn} onClick={handlePriceSubmit}>Set Price Filter</button>
          </div>
          <h4>Ratings</h4>
          <div className={styles.sortReviewSection} >
            <div className={styles.starsRow} onClick={() => setStarsSelected(4)}>
              <>
                <FullStar />
                <FullStar />
                <FullStar />
                <FullStar />
                <p>+</p>
              </>
            </div>
            <div className={styles.starsRow} onClick={() => setStarsSelected(3)}>
              <>
                <FullStar />
                <FullStar />
                <FullStar />
                <p>+</p>
              </>
            </div>
            <div className={styles.starsRow} onClick={() => setStarsSelected(2)}>
              <>
                <FullStar />
                <FullStar />
                <p>+</p>
              </>
            </div>
            <div className={styles.starsRow} onClick={() => setStarsSelected(1)}>
              <>
                <FullStar />
                <p>+</p>
              </>
            </div>
          </div>
          <div>
            <button onClick={resetLocal} className={styles.resetButton}>Reset Filters</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default MegaDrop
