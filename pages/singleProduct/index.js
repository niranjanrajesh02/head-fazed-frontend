import image from 'next/image'
import React from 'react'
import styles from './singleProduct.module.css'

const singleProduct = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.container1}>
               
                <a href="#">Aryaman and <span>Riyoshas</span> single product page</a>
           
                

            </div>
       
            <section className = {styles.hero}>
            <div className={styles.productpics}>
            <img id="product-ct" class="productpic" src="https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Sony-WF-XB700-1160-1160-Black-7_2000x.jpg?v=1592900566" alt="FirstProduct" width="480" height="480"/>
            </div>
            <div className={styles.productDetails}>
                <div className={styles.companyname}>
            
                <h1><a href="#">Sony</a></h1>
            </div>
                <div className={styles.ModelName}>
                    <h1>Sony - WF-XB700</h1>
            </div>
                <div className={styles.ProductType}>
                    <p>TRUE WIRELESS EARBUDS</p>
                    <p>For Sports and Gym</p>
                    </div>
                    <div className={styles.ranking}>
                        <p>#2 BEST SELLER IN</p>
                        <a href="#">TRUE WIRELESS EARBUDS</a>
                        </div>
                    
                    <div className={styles.rating}>
                    <a href="#">RATING STARS</a>


                        </div>

                    <div className={styles.Pricing}>
                        <p>MRP: <del>₹6969</del></p>
                        <p>MRP: ₹6000</p>
                        <p>You save ₹969 (13.9%)</p>
            </div>
                    <div className={styles.BuyNOWbutton}>
                    <a href="#">BUY NOW</a>


            </div>



            </div>

            </section>


        <section class = "testimonials.section">
            <div className={styles.container}>
                <ul>
                    <li>
                        <blockquote>these headphones are ass</blockquote>
                        <cite>- Riyosha</cite>

                    </li>
                    <li>
                        <blockquote>these headphones are ass</blockquote>
                        <cite>- Riyosha</cite>

                    </li>
                    <li>
                        <blockquote>these headphones are ass</blockquote>
                        <cite>- Riyosha</cite>

                    </li>


                </ul>


            </div>
        </section>
        </div>
        
            






    )
}

export default singleProduct

