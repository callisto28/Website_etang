import React, { useState } from 'react';
import shop from '../data/shop';

const Cart = () => {

    const [showCart] = useState()

    return (

        <div className="flex flex-row sm:flex-wrap">
            {shop.map((cart) => {
                return (
                    <div className="flex-wrap text-center p-2 border-4 border-green-400 border-opacity-55 m-10">
                        <h2 className="underline self-center transition-shadows  ">
                            {cart.lieux}
                        </h2>
                        <p className="adresse">{cart.adresse} </p>
                        <p className="clock">{cart.horaire}</p>
                        <img src={cart.img} alt="" width="480" className="mt-10 py-3" />
                        <a href={cart.url} className="text-center underline " target="_blank" rel="noreferrer noopener"> {cart.url}</a>

                    </div>
                )
            })}
            {showCart === true}

        </div>
    );
};

export default Cart;