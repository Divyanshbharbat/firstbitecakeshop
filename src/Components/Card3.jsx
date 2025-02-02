import React, { useEffect,useRef } from 'react'
import './Card.css'

import { useState } from 'react';

const Card3 = ({name,image,message}) => {
  const [click, setclick] = useState(true)


  return (
 <>
 
 <div className="card text-light" style={{width:"24rem",border:'none',margin:"5vh "}}>
  <img src={image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-center fs-2">{name}</h5>
  
    <p className="card-text text-center"></p>

     <div className="text-center">
    
     </div>
  </div>
</div>
 </>
  )
}

export default Card3