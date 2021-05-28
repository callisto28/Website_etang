import React from "react";
import {CopyToClipboard} from "react-copy-to-clipboard";

const Contact = () => {
  
    return (
     
        <main className="flex self-center sm:text-center lg:text-center md:text-center">
         
                 <div className="flex flex-col self-center sm:text-center lg:text-left md:text-right">
                    <div className="address">
                        <div className="content">
                            <h3> - Coordonnées de l'etang Communnal - </h3>
                            <h4>Adresse : </h4>
                            <p> Champs-Romain</p>
                            <p> 24470 Champs Romain</p>
                        </div>
                    </div>
                    {/* <div className="phone">
                        <div className="content">
                            <h4>Téléphone</h4>
                            <CopyToClipboard text="0614357031" className="hover">
                    <p style={{cursor:'pointer'}} className="clipboard" onClick={() =>{
                        alert("Téléphone copié !");
                            
                    }}>06 14 35 70 31</p>
                            </CopyToClipboard>
                           
                        </div>
                    </div> */}
                    <div className="email">
                        <div className="content">
                            <h4> Notre Email : </h4>
                            <CopyToClipboard text="sebastien.fourny28@gmail.com" className="hover">
                    <p style={{cursor:'pointer'}} className="clipboard" onClick={() =>{
                        alert("Email copié !");
                            
                    }}>etang.champs.romain@gmail.com</p>
                            </CopyToClipboard>
                            
                        </div>
                    </div>
                  
                   
                </div> 
               
               
          
        </main>
    )
}








export default Contact;