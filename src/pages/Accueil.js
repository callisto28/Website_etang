import React from 'react';
import "./Accueil.css";

const Accueil = () => {
    return (
<div className="flex justify-center bg-coolGray maw-w-lg">
            une envie de cliquer
            <br/>
        <div className="flex justify-center space-x-4 md:py-8">
            
                <button class="bg-coolGray-500 text-blanc-200 hover:text-bleu-500 shadow-lg maw-w-lg" >
                    <a href="./Contact" className="bg-green-500 text-lg" class=""> click here</a>
                </button>
            </div>
        </div>



    );
};

export default Accueil;
