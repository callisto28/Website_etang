import React from 'react'
import Typical from 'react-typical'


const steps = [
    
  'Venez nombreux le 12 juin lors de notre journée Truite', 3000,
  
];

const Dynamic2 = () => (

  <div className="simply">
    <Typical wrapper="span" steps={steps} loop={Infinity} />
  </div>
  
)





export default Dynamic2;