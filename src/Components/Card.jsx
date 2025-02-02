import React, { useEffect, useRef } from 'react'
import './Card.css'

import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({ name, price, image, _id }) => {
  const [click, setclick] = useState(true)


  return (
    <>

      <div className="card" style={{ width: "18rem", border: 'none', margin: "5vh ", boxShadow: "1vh 1vh 5vh black" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center fs-2">{name}</h5>

          <p className="card-text text-center">Rs. &nbsp; {price}</p>

          <div className="text-center">

            {<NavLink to={`/placeorder/${_id}`} ><button className='btn btn-light' >Add To cart</button> </NavLink>}
          </div>
        </div>
      </div>
    </>
  )
}

export default Card