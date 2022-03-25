import React, { useState } from 'react';

const Cart = (props) => {
    const { cart } = props
    const [name, setName] = useState('')

    for (const pd of name) {
        const name = [...cart, pd.name]
        setName(name)
    }

    return (
        <div>
            <p>length : {props.cart.length}</p>
            <h4>Name : {name}</h4>
        </div>
    );
};

export default Cart;