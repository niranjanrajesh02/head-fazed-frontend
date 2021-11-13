import React, { useEffect, useState } from 'react'
import styles from './Searchbar.module.css'
import SearchDrop from './SearchDrop'
import Fuse from 'fuse.js'
import axios from 'axios'
import LoadingSpinner from '@components/LoadingSpinner'

const testProducts = [
  {
    "_id": "618c46627d71813b2103579d",
    "name": "ATH-M20x",
    "short_description": "Closed-Back Studio Monitors",
    "long_description": "An entry level monitoring headphone that you will find in studios around the world. The Audio-Technica ATH-M20x is an essential tool for budding musicians and producers for it's flat and accurate response and outstanding value for money",
    "price": 5000,
    "images": [
      "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Audio-technica-m20x-1160-1160_2000x.jpg?v=1590482291",
      "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Audio-technica-m20x-1160-1160-1_400x.jpg?v=1590482291",
      "https://cdn.shopify.com/s/files/1/0153/8863/products/audio-technica-ath-m20x-headphone-zone-13979077017663_2000x.jpg?v=1579701938",
      "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Audio-technica-m20x-1160-1160-2_2000x.jpg?v=1590482291"
    ],
    "date": "2021-11-10T22:23:27.659Z",
    "seller": "618c4274b6e5af216a832623",
    "ratings": [
      3,
      5,
      5,
      5,
      5,
      5
    ],
    "reviews": [
      "618c6fea801916d671c08e7e",
      "618c72d239849f488dd5b305",
      "618c746339849f488dd5b326",
      "618c74b539849f488dd5b32f",
      "618c7dd839849f488dd5b3b0",
      "618dbe74b8ef26323971e190",
      "618dbe79b8ef26323971e19b",
      "618dbea9b8ef26323971e1a9"
    ],
    "wishlisted": [],
    "categories": [
      "studio",
      "over-ear",
      "wired",
      "audio-technica"
    ],
    "__v": 0,
    "avg_rating": 4.67
  },
  {
    "_id": "618c48787d71813b210357a0",
    "name": "LIVE 200BT",
    "short_description": "Feel Alive with the LIVE200BT",
    "long_description": "JBL has teamed up with numerous experts to give you a great sound. The large 8mm drivers give you the signature JBL sound thereby ensuring great clarity. The LIVE 200BT's drivers deliver a precise, powerful sound for an exceptional listening experience.",
    "price": 2999,
    "images": [
      "https://cdn.shopify.com/s/files/1/0153/8863/products/0137d82339d56d7e89ccc9a57c2f8881_2000x.jpg?v=1636458989",
      "https://cdn.shopify.com/s/files/1/0153/8863/products/9247ef7afb7ab8656957dd974e1bd633_2000x.jpg?v=1636458989",
      "https://cdn.shopify.com/s/files/1/0153/8863/products/9247ef7afb7ab8656957dd974e1bd633_2000x.jpg?v=1636458989",
      "https://cdn.shopify.com/s/files/1/0153/8863/products/4dbc456ca2700d7cb3b23f4986048794_2000x.jpg?v=1636458989"
    ],
    "date": "2021-11-10T22:23:27.659Z",
    "seller": "618c4296b6e5af216a832629",
    "ratings": [
      4,
      3
    ],
    "reviews": [
      "618d322d267388001db5e647",
      "618d5f12a91c4ead21a4befb"
    ],
    "wishlisted": [],
    "categories": [
      "casual",
      "wireless",
      "in-ear",
      "jbl"
    ],
    "__v": 0,
    "avg_rating": 3.5
  },
  {
    "_id": "618c498f7d71813b210357a8",
    "name": "Kraken V3 X",
    "short_description": "Bring your A-Game with the Krakern V3 X",
    "long_description": "Immerse yourself into your gaming world with a super lightweight Razer Kraken V3 X. Weighing at around 285g, the Kraken V3 X sports a slim form factor for absolute wearing comfort. These USB PC gaming headphones are designed to let you play games comfortably for hours. With the patented Razer™ TriForce drivers, experience realistic sound and have a competitive edge over your opponent.",
    "price": 7200,
    "images": [
      "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Razer-Kraken-V3-X-Gaming-Headset-gallery-1_2000x.jpg?v=1618918980",
      "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Razer-Kraken-V3-X-Gaming-Headset-gallery-2_2000x.jpg?v=1618918980",
      "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Razer-Kraken-V3-X-Gaming-Headset-gallery-3_2000x.jpg?v=1618918981",
      "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Razer-Kraken-V3-X-Gaming-Headset-gallery-4_2000x.jpg?v=1618918980"
    ],
    "date": "2021-11-10T22:23:27.659Z",
    "seller": "618c48897d71813b210357a5",
    "ratings": [
      4,
      1
    ],
    "reviews": [
      "618d5e2d86b0c9fedafdb853",
      "618d5e5d86b0c9fedafdb860"
    ],
    "wishlisted": [],
    "categories": [
      "gaming",
      "wired",
      "over-ear",
      "razer"
    ],
    "__v": 0,
    "avg_rating": 2.5
  }
]

const Searchbar = () => {
  const [products, setProducts] = useState(null);
  const [slicedProducts, setSlicedProducts] = useState(null);
  const [searchProducts, setSearchProducts] = useState([]);
  const [searchText, setSearchText] = useState("")
  const [searchDropView, setSearchDropView] = useState(false)
  function handleSearchChange(text) {
    setSearchText(text)
  }
  let fuse;
  if (products) {
    fuse = new Fuse(products, {
      keys: ['name'],
      includeScore: true,
      threshold: 0.4
    })
  }
  useEffect(() => {
    if (products) {
      if (searchText.length > 1) {
        setSearchDropView(true);
        const results = fuse.search(searchText);
        let newResults = [];
        results.forEach((item, ind) => newResults.push(item.item))
        console.log("searchResults:", newResults);
        setSlicedProducts(newResults.slice(0, 3));
      }
      else {
        setSlicedProducts(products.slice(0, 3))
        setSearchDropView(false);
      }
    }
  }, [searchText])

  useEffect(() => {
    var config = {
      method: 'get',
      url: '/products',
    };

    axios(config)
      .then(function (response) {
        // console.log((response.data));
        setProducts(response.data)
        setSlicedProducts(response.data.slice(0, 3))
      })
      .catch(function (error) {
        console.log(error);
      });

  }, [])

  return (
    <div className={styles.searchContainer}>


      <input className={styles.searchBarInput}
        onChange={(e) => handleSearchChange(e.target.value)} type="text"
        placeholder="Search" />

      {searchDropView && (
        <>
          {slicedProducts && <SearchDrop products={slicedProducts} />}
          {!slicedProducts && <p>Loading</p>}
        </>
      )}



    </div>
  )
}

export default Searchbar
