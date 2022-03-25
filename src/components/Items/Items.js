import React, { useEffect, useState } from 'react';
import './items.css'
import SingleItem from '../SingleItem/SingleItem';
import Cart from '../Cart/Cart';

const Items = () => {
    const [items, setItems] = useState([])
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
        console.log(newCart);
    }

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div>
            <h1>Are confuse to select item in store then use me</h1>
            <div className='item-container'>
                <div className='items'>
                    {
                        items.map(item => <SingleItem product={item} key={item.id} addToCart={addToCart}></SingleItem>)
                    }
                </div>
                <div>
                    <h1>Order Summary</h1>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Items;