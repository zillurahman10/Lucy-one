import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { item } = props
    return (
        <div>
            <h4>{item}</h4>
        </div>
    );
};

export default Cart;