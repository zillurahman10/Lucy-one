import React, { useEffect, useState } from 'react';
import './items.css'
import SingleItem from '../SingleItem/SingleItem';
import Cart from '../Cart/Cart';

const Items = () => {
    const [items, setItems] = useState([])
    const [cart, setCart] = useState([])
    const [selectedItem, setSelectedItem] = useState([])


    const addToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
        const a = [...cart, product]
        setSelectedItem(a)
    }


    const getRandomName = (min, max) => {
        let step1 = max - min + 1;
        let step2 = Math.random() * step1
        let result = Math.floor(step2) + min
        return result;
    }

    const random = () => {
        let index = getRandomName(0, selectedItem.length - 1)
        alert('You can but this item : ' + selectedItem[index].name);
    }

    const reset = () => {
        setSelectedItem([])
    }



    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    if (selectedItem.length > 8) {

    }
    else {
        return (
            <div>
                <h1 className='header-text'>Chose your Favaourite Item!!</h1>
                <div className='item-container'>
                    <div className='items'>
                        {
                            items.map(item => <SingleItem product={item} key={item.id} addToCart={addToCart}></SingleItem>)
                        }
                    </div>
                    <div className='selected-items'>
                        <h1>Selected Laptops</h1>
                        {
                            selectedItem.map(item => <Cart item={item.name} key={item.id}></Cart>)
                        }
                        <button onClick={random}>Chose 1</button>
                        <br />
                        <button onClick={reset}>Reset All</button>
                    </div>
                </div>
            </div>
        );
    }


};


export default Items;