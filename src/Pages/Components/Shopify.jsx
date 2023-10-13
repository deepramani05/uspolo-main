import React from 'react'
import { Link } from 'react-router-dom'
import "../Css/Home.css";

const Shopify = () => {
  return (
    <div className='shopiy-main'>
        <div className='shopify-sub'>
            <div className='shopify-img'>
                <img src="https://uspoloassn.in/cdn/shop/files/Artboard_1_1800x.jpg?v=1691138724" alt="" />
            </div>
            <div className='shopify-text'>
                <h1>Sport   Meets   Fashion</h1>
                <p>U.S. Polo Assn. is more than just a brand- it’s an experience. When you purchase U.S. Polo Assn. products, you own a piece of the sport of polo.</p>
                <h3>We are the official clothing brand of the United States Polo Association (USPA)—one of the oldest sports in the United States.</h3>
                <p>This is a proud distinction that links our illustrious past to a bright future that you are an important part of.</p>
                <Link><p>Learn More</p></Link>
            </div>
        </div>
    </div>
  )
}

export default Shopify