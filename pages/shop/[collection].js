import React, { useEffect, useState } from 'react'
import FilterMenu from '@components/FilterMenu/FilterMenu'
import { ChevronDown, ChevronUp, ShoppingBag } from '@components/icons'
import MegaDrop from '@components/MegaDrop/MegaDrop'
import { useMediaQuery } from 'react-responsive'
import SortDropdown from '@components/SortDropdown/SortDropdown'
import styles from './shop.module.css'
import Dropdown from '@components/Navbar/Dropdown'
import Gallery from '@components/Gallery/Gallery'
import { useRouter } from 'next/router'
import Navbar from '@components/Navbar/Navbar'
import axios from 'axios'
import LoadingSpinner from '@components/LoadingSpinner'

const Collection = () => {
  const router = useRouter()
  const { collection } = router.query
  const [sortDropdown, setSortDropdown] = useState(false)
  const [filterView, setFilterView] = useState(false)
  const [sortView, setSortView] = useState(false);
  const [products, setProducts] = useState(null);
  const [sortOption, setSortOption] = useState(-1);
  const [minPriceFilter, setMinPriceFilter] = useState(0);
  const [maxPriceFilter, setMaxPriceFilter] = useState(99999);
  const [starFilter, setStarFilter] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: '1024px' })
  useEffect(() => {
    if (collection) {
      setSortDropdown(false);
      let config = {
        method: 'get',
        url: `/products?cid=${collection.toLowerCase()}&minPrice=${minPriceFilter}&maxPrice=${maxPriceFilter}&minStars=${starFilter}&sort=${sortOption}`,
        headers: {
          'Content-Type': 'application/json'
        },
      };
      axios(config)
        .then(function (response) {
          // console.log((response.data));
          setProducts(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [collection, minPriceFilter, maxPriceFilter, starFilter, sortOption])

  function resetFilters() {
    setMinPriceFilter(0);
    setMaxPriceFilter(99999);
    setStarFilter(0);
    setSortOption(-1);
  }

  return (
    <>
      <Navbar />
      <>
        {products && (
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
                    {sortDropdown && <SortDropdown setSortOption={setSortOption} />}
                  </div>
                </div>
                <div className={styles.shopBody}>
                  <FilterMenu
                    setMinPriceFilter={setMinPriceFilter}
                    setMaxPriceFilter={setMaxPriceFilter}
                    setStarFilter={setStarFilter}
                    resetFilters={resetFilters}
                  />
                  <Gallery products={products} />
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
                    <MegaDrop use="shopFilterMob" setMinPriceFilter={setMinPriceFilter}
                      setMaxPriceFilter={setMaxPriceFilter}
                      setStarFilter={setStarFilter}
                      resetFilters={resetFilters} />
                  )}
                  {sortView && (
                    <Dropdown menuName="mobSort" setSortOption={setSortOption} />
                  )}
                </div>
                <Gallery products={products} />
              </div>
            )}
          </>
        )}
        {!products && (
          <LoadingSpinner />
        )}
      </>

    </>
  )
}

export default Collection
