import React from 'react';



const Accueil = () => {
    return (
        <div className="flex flex-col justify-evenly">

            <h1 class="flex flex-col items-center  self-center font-black text-green-500 m-2 mb-8 sm:text-center lg:text-left md:text-right">CHAMPS-ROMAIN
            <img src="/img/panneau.jpg" alt="panneau champs-romain" width="180" className="pb-4" />
            </h1>

            <div className="self-center font-black text-black-500 mb-8 sm:text-center lg:text-left md:text-right">
                La commune de champs-romain a le plaisir de vous annoncer l'ouverture de la pêche sur l'etang communal.<br />
                <p className="self-center text-green-400 mb-8 sm:text-center lg:text-left md:text-right p-2">Un magnifique petit étang, idéal pour les pique-niques et une partie de pêche en famille.</p>
                <p className="self-center text-black-500 mb-8 sm:text-center lg:text-left md:text-right">INFORMATIONS GÉNÉRALES </p>
                <p className>sur notre pages <a href="/service" alt="" className="underline">Services</a>, vous pouvez retrouver les dates légales d'ouverture ainsi que les tarifs et les lieux de ventes des cartes de pêche</p>

            </div>
            <h1 className="self-center font-black text-green-300 sm:text-center lg:text-left md:text-right">VOUS AIMEREZ AUSSI</h1>
            <div className="self-center text-green-500 sm:text-center lg:text-left md:text-right">

                <h2 className="self-center font-bold text-green-500 sm:text-center lg:text-left md:text-right">Le saut du Chalard</h2>
                <img src="./img/le-saut-du-chalard-2.jpg" alt="Saut du chalard" className="float-none bg-auto md:flex-col" width="400" height="400" />
                <p className="font-medium">Une légende entoure la cascade :
                Il se dit qu'une des cloches du village voisin d'Abjat est immergée dans les eaux du saut du Chalard et qu'elle carillonne chaque jeudi vers 14h.

                Cette légende remonte au 17e siècle.

                Le seigneur local tomba fou amoureux d'une jeune fille originaire d'Abjat. Mais, comme dans toute bonne histoire, le cœur de la belle était déjà pris. Le seigneur tenta de l'enlever mais les villageois résistèrent et tuèrent le seigneur dans l'affrontement.

                En punition, le Roi fit pendre les habitants du village et enlever toutes les cloches du village.L'une d'elle roula pendant son transport et finit sa course dans les eaux de la Dronne.

Il se dit également que la belle mourut de chagrin et que l'on peut apercevoir sa silhouette volant dans le clocher d'Abjat, qui, depuis, a retrouvé ses cloches.</p>

            </div>

        </div>



    );
};

export default Accueil;
