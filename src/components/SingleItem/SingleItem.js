import React from 'react';
import './SingleItem.css'

const SingleItem = (props) => {
    const { name, img, price } = props.product
    const { addToCart } = props
    return (
        <div>
            <div className='single-item'>
                <div className='image'>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h2>{name}</h2>
                    <h4>Price : ${price}</h4>
                </div>
                <div>
                    <button onClick={() => addToCart(props.product)} className='btn'>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default SingleItem;