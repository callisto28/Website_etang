import React from 'react'
import Typical from 'react-typical'

const steps = [
  'du 1er samedi de MAI 2021 ', 3000,
  "jusqu'au 1 er dimanche d'OCTOBRE 2021", 3000,
  
];

const Dynamic = () => (

  <div className="simply">
    <Typical wrapper="span" steps={steps} loop={Infinity} />
  </div>
  
)




export default Dynamic;