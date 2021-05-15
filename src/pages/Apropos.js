import React from 'react';

const Apropos = () => {
    return (
        <div className="le_bureau">
            <div className="flex font-black">Composition du bureau :
                <div className="flex flex-col m-5">
                <ul>
                   <li className="president"> André-Yves Gandon Président</li>
                   <li className="vie_president">Alain Berland Vice Président</li> 
                   <li className="tresorier">Pierre Faure Trésorier</li> 
                   <li className="secreataire">Gérard Diot Secrétaire</li> 
                    
                    
                </ul>
                <span className="text-red-700"> Mettre photo canne a pêche</span>
                </div>
            </div>
        </div>
    );
};

export default Apropos;