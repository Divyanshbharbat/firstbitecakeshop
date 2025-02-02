import React from 'react'
import { NavLink } from 'react-router-dom'

const Card2 = ({image,name}) => {
  return (
   <>
 <NavLink to={`/${name}`}>

 

<div className="card my-5 p-2 mx-2" style={{width:"18rem"}}>
<div className="card-body">
    <p className="card-text fs-1">{name}</p>
  </div>
  <img src={image} className="card-img-top" alt="..."/>
 
</div>

 </NavLink>




   {/* <div className="card m-3" style={{height:"30%"}}>
  {<img src={image} height='50%' className="card-img-top" alt="..."/> }
  <div className="card-body text-center">
    <p className="card-text fs-4">{name}</p>
 <NavLink to={`/${name}`} >   <button type="button" className="btn btn-light">Visit</button></NavLink>
  </div>
</div> */}
   </>
  )
}

export default Card2