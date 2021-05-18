import React from 'react';

const Apropos = () => {
    return (
        <div className="flex flex-wrap ">
       
            <div className="flex flex-col sm:flex-wrap font-black m-5">Composition du bureau :
            <img src="./img/canne1.jpg" width="450" alt="" className="shadow-lg rounded-md" />
                <div className=" flex font-bold sm:text-center lg:text-left md:text-right">
                <ul>
                   <li className="president m-2"> Président : 
                   <p className="text-blue">André-Yves Gandon</p> </li>
                   <li className="vie_president m-2"> Vice Président :
                   <p>Alain Berland</p></li> 
                   <li className="tresorierm m-2"> Trésorier :
                   <p>Pierre Faure</p></li> 
                   <li className="secreataire m-2"> Secrétaire :
                   <p>Gérard Diot</p></li> 
                    
                    
                </ul>
                <span className="text-red-700">  <img src="./img/etang-panoram-1.jpg" width="450" alt="" className="shadow-lg rounded-md" /></span>
                </div>
                
            </div>
        </div>
    );
};

export default Apropos;