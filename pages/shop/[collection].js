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
import getSortedProducts from 'functions/getSortedProducts'

const Collection = () => {
  const router = useRouter()
  const { collection } = router.query
  const [sortDropdown, setSortDropdown] = useState(false)
  const [filterView, setFilterView] = useState(false)
  const [sortView, setSortView] = useState(false);
  const [products, setProducts] = useState(null);
  const [sortOption, setSortOption] = useState(-1);
  const [minPriceFilter, setMinPriceFilter] = useState(null);
  const [maxPriceFilter, setMaxPriceFilter] = useState(null);
  const [starFilter, setStarFilter] = useState(null);
  const isMobile = useMediaQuery({ maxWidth: '1024px' })
  useEffect(() => {
    if (collection) {
      console.log(collection.toLowerCase());
      if (collection === "All") {
        let config = {
          method: 'get',
          url: '/products',
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
      else {
        let config = {
          method: 'get',
          url: `/products/collection/${collection.toLowerCase()}`,
          headers: {
            'Content-Type': 'application/json'
          },
        };
        console.log(config);

        axios(config)
          .then(function (response) {
            console.log((response.data));
            setProducts(response.data)
          })
          .catch(function (error) {
            console.log(error);
          });

      }
    }
  }, [collection])

  useEffect(() => {
    setSortDropdown(false);
    if (collection === "All") {
      let config = {
        method: 'get',
        url: `/products?sort=${sortOption}`,
      };
      axios(config)
        .then(function (response) {
          console.log((response.data));
          setProducts(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      let config = {
        method: 'get',
        url: `/products/collection/${collection.toLowerCase()}?sort=${sortOption}`,
      };
      axios(config)
        .then(function (response) {
          console.log((response.data));
          setProducts(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });
    }


  }, [sortOption])

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
                  <FilterMenu />
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
        )}
        {!products && (
          <LoadingSpinner />
        )}
      </>

    </>
  )
}

export default Collection
