import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './SingleItem.css'

const SingleItem = (props) => {
    const { name, img, price, id } = props.product
    const { addToCart } = props
    return (
        <div>
            <div className='single-item'>
                <div className='image'>
                    <img src={img} alt="" />
                </div>
                <div className='text'>
                    <h2>{name}</h2>
                    <h4>Price : $ {price}</h4>
                    <p>Id : {id}</p>
                </div>
                <div className='btn'>
                    <button onClick={() => addToCart(props.product)} className='btn'>Add to cart
                        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleItem;