import React, { useState } from 'react'
import { EmptyStar, FullStar } from '@components/icons'
import styles from './FilterMenu.module.css'
const FilterMenu = () => {
  const [starHover, setStarHover] = useState(null)
  function starHoverSetter(num) {
    if (num === -1) {
      setStarHover(null)
    }
    else {
      setStarHover(num)
    }
  }
  return (
    <div className={styles.filterSection}>
      <h3>FILTERS</h3>
      <div className={styles.priceSection}>
        <h4>Price</h4>
        <div className={styles.minMaxCont}><h5>Min:</h5><input type="number" min={0} max={9999} placeholder="" /></div>
        <div className={styles.minMaxCont}><h5>Max:</h5><input type="number" min={100} max={99999} placeholder="" /></div>
      </div>
      <div className={styles.sortReviewSection} >
        <h4>Ratings</h4>
        <div className={styles.starsRow} onMouseEnter={() => starHoverSetter(5)} onMouseLeave={() => starHoverSetter(-1)}>
          {starHover === 5 && (
            <>
              <FullStar />
              <FullStar />
              <FullStar />
              <FullStar />
              <FullStar />
            </>
          )}
          {!(starHover === 5) && (
            <>
              <EmptyStar />
              <EmptyStar />
              <EmptyStar />
              <EmptyStar />
              <EmptyStar />
            </>
          )}

        </div>
        <div className={styles.starsRow} onMouseEnter={() => starHoverSetter(4)} onMouseLeave={() => starHoverSetter(-1)}>
          {(starHover === 4) && (
            <>
              <FullStar />
              <FullStar />
              <FullStar />
              <FullStar />
              <p>+</p>
            </>
          )}
          {!(starHover === 4) && (
            <>
              <EmptyStar />
              <EmptyStar />
              <EmptyStar />
              <EmptyStar />
              <p>+</p>
            </>
          )}
        </div>
        <div className={styles.starsRow} onMouseEnter={() => starHoverSetter(3)} onMouseLeave={() => starHoverSetter(-1)}>
          {(starHover === 3) && (
            <>
              <FullStar />
              <FullStar />
              <FullStar />
              <p>+</p>
            </>
          )}
          {!(starHover === 3) && (
            <>
              <EmptyStar />
              <EmptyStar />
              <EmptyStar />
              <p>+</p>
            </>
          )}
        </div>
        <div className={styles.starsRow} onMouseEnter={() => starHoverSetter(2)} onMouseLeave={() => starHoverSetter(-1)}>
          {(starHover === 2) && (
            <>
              <FullStar />
              <FullStar />
              <p>+</p>
            </>
          )}
          {!(starHover === 2) && (
            <>
              <EmptyStar />
              <EmptyStar />
              <p>+</p>
            </>
          )}
        </div>
        <div className={styles.starsRow} onMouseEnter={() => starHoverSetter(1)} onMouseLeave={() => starHoverSetter(-1)}>
          {(starHover === 1) && (
            <>
              <FullStar />
              <p>+</p>
            </>
          )}
          {!(starHover === 1) && (
            <>
              <EmptyStar />
              <p>+</p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default FilterMenu
