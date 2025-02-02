import React from 'react'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
<>
<div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="800"  className="container-fluid py-4 "style={{backgroundColor:"black",color:'white'}}>

<center>
  <h1>First bite</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, quia.</p>
  <p>&copy; Copyright <b>FirstBite</b> All Rights Reserved</p>
  <p>Designed by @Divyansh</p>
</center>
<center>
  <h1 >Quick Links</h1>
 <div className="col-lg-4 col-sm-12 d-flex flex-column fs-2 ">
<NavLink className='my-3 text-info  ' to="/">Home</NavLink>
<NavLink className='my-3 text-info ' to='/about'>About</NavLink>
<NavLink className='my-3 text-info ' to='/contact'>Contact</NavLink>
<NavLink className='my-3 text-info ' to='/services'>Services</NavLink>
<NavLink style={{color:"black"}}  to='/adminlogin'>Adminlogin</NavLink>
 </div>
</center>
</div>


</>
  )
}

export default Footer