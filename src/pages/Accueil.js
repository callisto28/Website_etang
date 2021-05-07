import React, { useState } from 'react';
import site from '../data/site';


const Accueil = ({title}) => {

    const [showSite] = useState("http:// truc.com")
    return (
        <div className="flex flex-col justify-evenly">

            <h1 class="flex flex-col items-center  self-center font-black text-green-300  mb-8 sm:text-center lg:text-left md:text-right">{title}
            <img src="/img/panneau.jpg" alt="panneau champs-romain" width="180" className="pb-4" />
            </h1>

            <div className="self-center font-black text-black-500  sm:text-center lg:text-left md:text-right">
                La commune de champs-romain a le plaisir de vous annoncer l'ouverture de la pêche sur l'etang communal.<br />
                <p className="self-center text-green-500 mb-5 sm:text-center lg:text-left md:text-right p-1">Un magnifique petit étang, idéal pour les pique-niques et une partie de pêche en famille.</p>
                <p className="self-center text-black-500 mb-5 sm:text-center lg:text-left md:text-right">INFORMATIONS GÉNÉRALES </p>
                <p className>sur notre page <a href="/service" alt="" className="underline text-green-300">Services</a>, vous pouvez retrouver les dates légales d'ouverture ainsi que les tarifs et les lieux de ventes des cartes de pêche</p>

            </div>
            <h1 className="self-center font-black text-green-300 sm:text-center lg:text-left md:text-right">VOUS AIMEREZ AUSSI</h1>
            <div className="grid lg:grid-cols-3 gap-1  sd:grid-cols-6 md:grid-cols-2">
            {site.map((site) => {
                return (
                    <div className="flex flex-col justify-between items-center text-center border-4 border-green-400 border-opacity-55 m-2">
                        <h2 className="underline self-center transition-shadows  ">
                            {site.lieux}            
                        </h2>
                        <img src={site.img} alt="" width="300" className="p-2" />
                        <p className="text-sm">{site.description}</p>

                        <a href={site.url} className="text-center text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 m-1 p-1 " target="_blank" rel="noreferrer noopener">{site.lieux} </a>

                    </div>
                )
            })}
            {showSite === true}

        </div>
        </div>

    );
};

export default Accueil;
