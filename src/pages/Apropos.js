import React from 'react';

const Apropos = () => {
    return (
        <div className="lg:flex-col sm:flex-wrap ">
            <span className="text-red-700">  <img src="./img/etang-panoram-2.jpg" width="1250" alt="" className="shadow-lg rounded-md" /></span>
            <div className="flex flex-wrap sm:flex-wrap font-black m-5">Composition du bureau :
           
                <div className=" flex flex-wrap lg:text-left md:text-right sd:flex-col sd:text-center">
                    <ul className="flex flex-col font-serif">
                        <li className="president m-2"> Président : 
                        <p className="text-blue">André-Yves Gandon</p> </li>
                        <li className="vie_president m-2"> Vice Président :
                        <p>Alain Berland</p></li> 
                        <li className="tresorierm m-2"> Trésorier :
                        <p>Pierre Faure</p></li> 
                        <li className="secreataire m-2"> Secrétaire :
                        <p>Gérard Diot</p></li> 
                    
                  
                </ul>
                <img src="./img/canne1.jpg" width="450" alt="" className="shadow-lg rounded-md" />
               
                </div>
                
            </div>
        </div>
    );
};

export default Apropos;