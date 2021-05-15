import React, { useState } from 'react';
import shop from '../data/shop';

const Cart = () => {

    const [showCart] = useState()

    return (
        <div className="flex flex-col justify-evenly">
        <h1 className="flex flex-col items-center  self-center font-black text-green-300  mb-8 sm:text-center lg:text-left md:text-right">Ci-dessous veuillez trouver nos points de ventes</h1>
        <div className="flex flex-wrap sm:flex-wrap">
             
            {shop.map((cart) => {
                return (
                    
                    <div className="flex-wrap text-center p-2 border-4 border-green-400 border-opacity-55 m-10">
                       
                        <h2 className="underline self-center transition-shadows  ">
                            {cart.lieux}
                        </h2>
                        <p className="adresse">{cart.adresse} </p>
                        <p className="clock">{cart.horaire}</p>
                        <img src={cart.img} alt="" width="480" className="mt-10 py-3" />
                        <button
                                        class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
                                        onClick >
                                        <a href={cart.url} className="text-center" target="_blank" rel="noreferrer noopener">Visiter le point de vente</a>
                                    </button>
                        

                    </div>
                )
            })}
            {showCart === true}

        </div>
        </div>
    );
};

export default Cart;