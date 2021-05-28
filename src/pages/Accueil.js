import React, { useState } from 'react';
import site from '../data/site';
import regle from '../data/regle'
import Dynamic2 from '../components/Dynamic2';




const Accueil = ({ title }) => {
    const [showModal, setShowModal] = useState(false)

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
                <p className>sur notre page <a href="/service" alt="" className="underline text-green-300">Services</a>, vous pouvez retrouver les dates légales d'ouverture ainsi que les tarifs et les points de ventes des cartes de pêche, n'oubliez pas de consulter


                    <button className="bg-red-500 text-white active:bg-green-500 font-bold uppercase text-sm px-2 py-0.2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" onClick={() => setShowModal(true)}> LE REGLEMENT </button>

                </p>
            </div>
            {regle.map((regle) => {
                return (
                    <>
                        {showModal ? (
                            <div className="flex sm:text-center lg:text-left md:text-right">
                                <div
                                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                >
                                    <div className="relative w-auto my-6 mx-auto max-w-3xl sm:text-center lg:text-left md:text-right">
                                        {/*content*/}
                                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                            {/*header*/}
                                            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                                <h4 className="text-3xl font-semibold sm:text-l">
                                                    {regle.title}
                                                </h4>

                                            </div>
                                            {/*body*/}
                                            <div className="relative p-6 flex-auto">
                                                <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                                    {regle.max}
                                                </p>

                                                <p className="my-4 text-green-500 text-lg leading-relaxed">
                                                    <ol>
                                                        <li>. 3 lignes sont autorisées par pêcheur - intervalle :  3m environ.</li>
                                                        <li>. 1 ligne est autorisée par enfant de -12 ans, accompagné d'un adulte.</li>
                                                        <li>. La pêche au leurre, à la cuillère, au mort-manié est <span className="font-semibold text-red-500">INTERDITE</span>.</li>
                                                        <li>. L'amorce est autorisée le jour même, et <span className="font-semibold text-red-500">INTERDITE</span> la veille. </li>
                                                        <li>. Les chiens doivent être <span className="font-semibold text-red-500">TENUS EN LAISSE</span></li>
                                                        <li>. Les promenades ainsi que les pique-niques sont libres.</li>
                                                        <li>. La pêche nocturne est <span className="font-semibold text-red-500">INTERDITE</span>  .</li>
                                                    </ol>
                                                </p>
                                                <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                                    {regle.circulation}<span className="font-semibold">strictement interdit</span>,{regle.interdiction}
                                                </p>
                                            </div>
                                            {/*footer*/}
                                            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                                <button
                                                    className="bg-red-500 rounded-lg text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    Close
                  </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                            </div>
                        ) : null}
                    </>
                )
            })}



            <h1 className="self-center font-black text-green-300 sm:text-center lg:text-left md:text-right">Découverte proche de Champs-Romain</h1>
            <div className="grid lg:grid-cols-3 gap-1  sd:grid-cols-6 md:grid-cols-2 select-none ">
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
