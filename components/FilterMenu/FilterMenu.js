import React, { useEffect, useState } from 'react'
import { EmptyStar, FullStar } from '@components/icons'
import styles from './FilterMenu.module.css'
const FilterMenu = ({ setStarFilter, setMinPriceFilter, setMaxPriceFilter, resetFilters }) => {
  const [starsSelected, setStarsSelected] = useState(0);
  const [minSelected, setMinSelected] = useState(0)
  const [maxSelected, setMaxSelected] = useState(99999)

  useEffect(() => {
    if (starsSelected) {
      setStarFilter(starsSelected);
    }
  }, [starsSelected])

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


  return (
    <div className={styles.filterSection}>
      <h3>FILTERS</h3>
      <div className={styles.priceSection}>
        <h4>Price</h4>
        <div className={styles.minMaxCont}><h5>Min:</h5><input value={minSelected} onChange={(e) => setMinSelected(Number(e.target.value))} type="number" min={0} max={9999} placeholder="" /></div>
        <div className={styles.minMaxCont}><h5>Max:</h5><input value={maxSelected} onChange={(e) => setMaxSelected(Number(e.target.value))} type="number" min={100} max={99999} placeholder="" /></div>
        <button className={styles.submitBtn} onClick={handlePriceSubmit}>Set Price Filter</button>
      </div>
      <div className={styles.sortReviewSection} >
        <h4>Ratings</h4>
        <div className={styles.starsSection}>
          <div className={styles.starsRow} onClick={() => setStarsSelected(4)}>
            {starsSelected !== 4 && (
              <>
                <EmptyStar />
                <EmptyStar />
                <EmptyStar />
                <EmptyStar />
                <p>+</p>
              </>
            )}
            {starsSelected === 4 && (
              <>
                <FullStar />
                <FullStar />
                <FullStar />
                <FullStar />
                <p>+</p>
              </>
            )}
          </div>
          <div className={styles.starsRow} onClick={() => setStarsSelected(3)}>
            {starsSelected !== 3 && (
              <>
                <EmptyStar />
                <EmptyStar />
                <EmptyStar />
                <p>+</p>
              </>
            )}
            {starsSelected === 3 && (
              <>
                <FullStar />
                <FullStar />
                <FullStar />
                <p>+</p>
              </>
            )}
          </div>
          <div className={styles.starsRow} onClick={() => setStarsSelected(2)}>
            {starsSelected !== 2 && (
              <>
                <EmptyStar />
                <EmptyStar />
                <p>+</p>
              </>
            )}
            {starsSelected === 2 && (
              <>
                <FullStar />
                <FullStar />
                <p>+</p>
              </>
            )}
          </div>
          <div className={styles.starsRow} onClick={() => setStarsSelected(1)}>
            {starsSelected !== 1 && (
              <>
                <EmptyStar />
                <p>+</p>
              </>
            )}
            {starsSelected === 1 && (
              <>
                <FullStar />
                <p>+</p>
              </>
            )}
          </div>
        </div>
      </div>
      <div>
        <button className={styles.resetBtn} onClick={resetLocal}>Reset Filters</button>
      </div>
    </div>
  )
}

export default FilterMenu
