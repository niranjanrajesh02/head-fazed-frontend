import React from 'react'
import styles from './Searchbar.module.css'
import Image from 'next/image'
import Link from 'next/link'

const SearchDrop = ({ products }) => {
  return (
    <div className={styles.dropCont}>
      {products.length === 0 && (<h4>No results</h4>)}
      {products.length !== 0 && (
        <>
          {products.map((item, ind) => (
            <Link href={`/product/${item._id}`} key={ind}>
              <div className={styles.resultCont}>
                <div className={styles.imgCont}>
                  <Image src={item.images[0]} height={200} width={200}
                    layout="responsive" />
                </div>
                <div className={styles.textCont}>
                  <h4>{item.name}</h4>
                  <h5>₹{item.price}</h5>
                </div>
              </div>
            </Link>
          ))}
        </>
      )}
    </div >
  )
}

export default SearchDrop
