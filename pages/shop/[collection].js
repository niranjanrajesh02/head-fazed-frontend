import React, { useState } from 'react'
import FilterMenu from '@components/FilterMenu/FilterMenu'
import { ChevronDown, ChevronUp, ShoppingBag } from '@components/icons'
import MegaDrop from '@components/MegaDrop/MegaDrop'
import { useMediaQuery } from 'react-responsive'
import SortDropdown from '@components/SortDropdown/SortDropdown'
import styles from './shop.module.css'
import Dropdown from '@components/Navbar/Dropdown'
import Gallery from '@components/Gallery/Gallery'
import { useRouter } from 'next/router'

const Collection = () => {
  const router = useRouter()
  const { collection } = router.query
  const [sortDropdown, setSortDropdown] = useState(false)
  const [filterView, setFilterView] = useState(false)
  const [sortView, setSortView] = useState(false);
  function starHoverSetter(num) {
    if (num === -1) {
      setStarHover(null)
    }
    else {
      setStarHover(num)
    }
  }
  const isMobile = useMediaQuery({ maxWidth: '1024px' })
  return (
    <>
      {!isMobile && (
        <div className={styles.pageContainer}>
          <div className={styles.header}>
            <div className={styles.title}>
              <ShoppingBag />
              <h1>Shop {collection}</h1>
            </div>
            <div className={styles.sortContainer}>
              <div className={styles.sortController} onClick={() => setSortDropdown(!sortDropdown)}>
                <p>SORT</p>
                {!sortDropdown && <ChevronDown />}
                {sortDropdown && <ChevronUp />}
              </div>
              {sortDropdown && <SortDropdown />}
            </div>
          </div>
          <div className={styles.shopBody}>
            <FilterMenu />
            <Gallery page="shop" />
          </div>
        </div>
      )}
      {isMobile && (
        <div className={styles.pageContainerMob}>
          <div className={styles.filterSortBox}>
            <div className={styles.filterSortItem} onClick={() => { setFilterView(!filterView); setSortView(false) }}>
              <h3>Filters</h3>
              {!filterView && <ChevronDown />}
              {filterView && <ChevronUp />}
            </div>
            <div className={styles.filterSortItem} onClick={() => { setSortView(!sortView); setFilterView(false) }}>
              <h3>Sort</h3>
              {!sortView && <ChevronDown />}
              {sortView && <ChevronUp />}
            </div>
          </div>
          <div className={styles.dynamicDisplay}>
            {filterView && (
              <MegaDrop use="shopFilterMob" />
            )}
            {sortView && (
              <Dropdown menuName="mobSort" />
            )}
          </div>
          <Gallery />
        </div>
      )}
    </>
  )
}

export default Collection
