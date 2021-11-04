import React from 'react';
import './Cart.css'
const Cart = (props) => {

    // take data from parants using props 
    const { cart } = props;

    // total cost loop 
    let total = 0;
    for (const user of cart) {
        total = total + user.salary
    }

    // maping person card for hiring card 
    const person = cart.map(user => < p className="cartUser" key={user.id} ><img className='cartImg' src={user.img} alt="user-img" /><span>{user.name}</span></p >)
    return (
        <div className='hire'>

            <h2>Hiring Cost</h2><hr />
            <h3>Number of Hire: {cart.length}</h3>

            {/* hire members cart list  */}
            <h3>Hire Members </h3>
            <div>{person}</div>

            <h3>Total Cost: ${total}</h3>
            <button>Hire Them  <i className="far fa-hand-pointer"></i></button>


        </div>
    );
};

export default Cart;