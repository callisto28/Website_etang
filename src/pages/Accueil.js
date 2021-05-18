import React, { useState } from 'react';
import site from '../data/site';
import Dynamic2 from '../components/Dynamic2';



const Accueil = ({ title }) => {

    const [showSite] = useState("")
    return (
        <div className="flex flex-col justify-evenly">

            <h1 class="flex flex-col items-center  self-center font-black text-green-300  mb-8 sm:text-center lg:text-left md:text-right">{title}
                <img src="/img/panneau.jpg" alt="panneau champs-romain" width="180" className="pb-4" />
            </h1>

            <div className=" flex flex-col  items-center self-center font-black text-black-500  sm:text-center lg:text-left md:text-right">
                La commune de champs-romain (24470) située dans le Périgord Vert, a le plaisir de vous annoncer l'ouverture de la pêche sur l'etang communal.<br />
                <h2 className="text-center text-red-500 sm:text-center lg:text-left md:text-right" > <Dynamic2 /> </h2>
                <p className="self-center text-green-500 mb-5 sm:text-center lg:text-left md:text-right p-1">Un magnifique étang, idéal pour les pique-niques et une partie de pêche en famille.</p>

                <video controls width="600" height="600"
                    autoplay loop muted
                    poster="./img/etang-panoram-1.jpg" class="p-2">

                    <source src="./video/etang.mp4" type="video/mp4"></source>
                    <p>Votre navigateur ne prend pas en charge les vidéos HTML5. Voici, à la place, un <a href="./video/etang.mp4">lien à la vidéo</a>.</p>
                   
                </video>
                


                <p className="self-center text-black-500 mb-5 sm:text-center lg:text-left md:text-right">INFORMATIONS GÉNÉRALES </p>
                <p className>sur notre page <a href="/service" alt="" className="underline text-green-300">Services</a>, vous pouvez retrouver les dates légales d'ouverture ainsi que les tarifs et les lieux de ventes des cartes de pêche</p>

            </div>
            <h1 className="self-center font-black text-green-300 sm:text-center lg:text-left md:text-right">Découverte proche à Champs-Romain</h1>
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
