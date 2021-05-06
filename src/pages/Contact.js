import React from "react";
// import {CopyToClipboard} from "react-copy-to-clipboard";
// import ButtonsBottom from "../components/ButtonsBottom";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";

const Contact = () => {
    // const pageTransition = {
    //     in: {
    //       opacity: 1,
    //       x: -400,
    //     },
    //     out: {
    //       opacity: 0,
    //       x: 300,
    //     },
    //   };
    
    //   const transition = {
    //     ease: [.03,.87,.73,.9],
    //     duration: .6,
    //   }
    return (
     
        <main className="flex self-center sm:text-center lg:text-center md:text-center">
       
       <motion.div
        className="contact"
        exit="out"
        animate="in"
        initial="out"
        // variants={pageTransition}
        // transition={transition}
      >
               
                <ContactForm />
                {/* <div className="flex flex-col self-center sm:text-center lg:text-left md:text-right">
                    <div className="address">
                        <div className="content">
                            <h3>Coordonnées de</h3>
                            <h4>Adresse</h4>
                            <p> 7 rue de machefer</p>
                            <p> 28300 Jouy</p>
                        </div>
                    </div>
                    <div className="phone">
                        <div className="content">
                            <h4>Téléphone</h4>
                            <CopyToClipboard text="0614357031" className="hover">
                    <p style={{cursor:'pointer'}} className="clipboard" onClick={() =>{
                        alert("Téléphone copié !");
                            
                    }}>06 14 35 70 31</p>
                            </CopyToClipboard>
                           
                        </div>
                    </div>
                    <div className="email">
                        <div className="content">
                            <h4>Email</h4>
                            <CopyToClipboard text="sebastien.fourny28@gmail.com" className="hover">
                    <p style={{cursor:'pointer'}} className="clipboard" onClick={() =>{
                        alert("Email copié !");
                            
                    }}>sebastien.fourny28@gmail.com</p>
                            </CopyToClipboard>
                            
                        </div>
                    </div>
                   <div className="credits">
                       <p>SebFourDev - 2021</p>
                   </div>
                   
                </div> */}
               
               
            </motion.div>
        </main>
    )
}








export default Contact;