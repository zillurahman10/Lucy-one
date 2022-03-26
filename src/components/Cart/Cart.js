import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { item, img } = props
    return (
        <div className='cart-container'>
            <img className='img' src={img} alt="" />
            <h4>{item}</h4>
        </div>
    );
};

export default Cart;