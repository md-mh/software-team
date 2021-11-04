import React, { useEffect, useState } from 'react';
import Person from './Person/Person';
import Cart from './Cart/Cart';
import './Main.css'

const Main = () => {

    const [users, setUsers] = useState([]); //collect data from useeffect
    const [cart, setCart] = useState([]);   //collect data from handleCart function

    // import json fake file using useefferct 
    useEffect(() => {
        fetch('./heros.JSON')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])

    // cost calculate function
    const handleCart = user => {
        const updateCart = [...cart, user];
        setCart(updateCart);
    }
    return (
        <div className='container'>

            {/* user/person list component option  */}
            <div className="person-container">
                {
                    users.map(user => <Person key={user.id} user={user} handleCart={handleCart}></Person>)
                }
            </div>

            {/* cart component option  */}
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Main;