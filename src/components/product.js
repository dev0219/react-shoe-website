import React from 'react'
import "../product.css";

const Product = ({}) => (
    <div className="rounded-background-box">
        <div className="left-rounded-column">
            <div className="product">
            <img className="tablet float" src="https://preview.ibb.co/cRRaiy/nike.png" />
            </div>
        </div>
        <div className="right-rounded-column">
            <div className="product-info">
                <h3>Men's shoe</h3>
                <h1> Nike Air Max 270 </h1>
                <p><a className="link-active" href="#"><span style={{fontWeight:600}}>Choose size</span></a> | <a className="link" href="#"><span style={{fontWeight:600}}>Reviews</span></a> | <a className="link" href="#"><span style={{fontWeight:600}}>Delivery & returns</span></a></p>
                <p> The Nike Air Max 270 Men's Shoe is inspired by two icons of big Air: the Air Max 180 and Air Max 93. It features Nike's biggest heel Air unit yet for a super-soft ride that feels as impossible as it looks.</p> 
            </div>
            <div className="cart-price">
                <button className="button1"> Add to Bag </button>
                <h2>£114.95</h2>
            </div>
        </div>
    </div>
)


export default Product;