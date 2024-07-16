import React from 'react'
import './Header.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

function Header({ cartItems }) {
    //   const count = cartItems.reduce((carry, item) => {
    //     return carry + item.count;
    //   }, 0);
    let totalcount = 0;
    for (let cartItem of cartItems) {
        totalcount += cartItem.count;
    }
    return (
        <div>
            <header className='header'>
                <h1>Your Cart</h1>
                <div className="cart-icon">
                    <i className="fa-sharp fa-solid fa-cart-plus"></i>
                    <p>{totalcount}</p>
                </div>

            </header>
        </div>
    )
}

export default Header