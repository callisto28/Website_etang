import React, { useState } from 'react';
import tarifs from '../data/tarifs';
import Dynamic from '../components/Dynamic';

const Service = () => {

    const [showSponsor, setShowSponsor] = useState(false);

    return (
        <div className="flex flex-col justify-evenly">
            <section className="flex flex-col sm:flex-wrap">

                <h1 class="self-center text-green-500 mb-5 sm:text-center lg:text-left md:text-right"> Voici les tarifs en vigueur pour la saison 2021</h1>

                <div className="self-center sm:text-center lg:text-left md:text-right">Accès possible :
                <div className="dynamic-text">
                 <span id="text-target">
                        <h2 className="self-center text-red-500 sm:text-center lg:text-left md:text-right" > <Dynamic /> </h2>
                        </span>
                        
                </div>
                </div>
                    <div class="flex md-flex-col border-black border-opacity-100 justify-around sm:flex-wrap ">
                        {tarifs.map((tarif) => {
                            return (
                                <div className="ticket bg-blue-50 border-2 border-blue-400 border-opacity-55 rounded-xl m-8 p-5 flex flex-col justify-between">
                                    <h2 className="ticket_saison flex flex-col items-center text-black-300 text-opacity-75 h-20">{tarif.description}</h2>
                                    <p className="ticket_saison flex flex-col items-center h-20">{tarif.ici} </p>
                                    <button
                                        class="transition duration-500 ease-in-out bg-green-200 hover:bg-green-600 transform hover:-translate-x-1 hover:scale-110"
                                        onClick={() => (setShowSponsor(true))}
                                    >
                                        <a href="/lieux" className="h-5 w-5 mr-3 text-lg" viewBox="2 0 24 24"> Acheter vos tickets ici {tarif.price}</a>
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                    {showSponsor === true && <h1 class="self-center text-red-300">Vous allez être rediriger vers nos points de ventes</h1>}
            </section>

                <section>
                    <div className="flex flex-row  sm:flex-wrap">
                        <img src="./img/etang1.jpg" alt="etang_champs_romain1" className="float-none p-2 " width="600"/>
                        <img src="./img/etang2.jpg" alt="etang_champs_romain2" className="float-none p-2" width="600"/>
                    </div>
                </section>

        </div>
    );
};

export default Service;