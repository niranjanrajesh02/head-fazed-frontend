import Gallery from '@components/Gallery/Gallery'
import Navbar from '@components/Navbar/Navbar'
import React, { useEffect, useContext, useState } from 'react'
import styles from './orders.module.css'
import axios from 'axios'
import { UserContext } from '../../HOC/UserContext';
import LoadingSpinner from '@components/LoadingSpinner'
import Image from 'next/image'

const Orders = () => {
  const { userDB } = useContext(UserContext)
  const [orders, setOrders] = useState(null)

  useEffect(() => {
    if (userDB) {
      let config = {
        method: 'get',
        url: `/orders/${userDB.user_id}`,
        headers: {}
      };

      axios(config)
        .then(function (response) {
          // console.log((response.data));
          setOrders(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [userDB])
  function convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  return (
    <>
      <Navbar />
      <div className={styles.pageCont}>
        <div className={styles.header}>
          <h1>Your Orders</h1>
        </div>
        {orders && (
          <div className={styles.orderGallery}>
            {orders.map((item, ind) => {
              let numberOfProducts = item.products.length
              return (
                <div className={styles.orderCont} key={ind}>
                  <div className={styles.imgCont}>
                    <Image src={item.products[0].image} width={50} height={50} layout="responsive" />
                  </div>
                  <div className={styles.textCont}>
                    {numberOfProducts > 1 && <h3>{item.products[0].name} + {numberOfProducts - 1} more </h3>}
                    {numberOfProducts <= 1 && <h3>{item.products[0].name} </h3>}
                    <h3>Total Value: ₹{item.total_val}</h3>
                    <h4>Date Ordered: {convert(Date(item.date))}</h4>
                  </div>
                </div>
              )
            })}
          </div>
        )}
        {!orders && <LoadingSpinner />}
      </div>
    </>
  )
}

export default Orders
