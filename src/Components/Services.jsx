import React from 'react'
import Card from './Card3'
import './service.css'
const Services = () => {
  return (

  <>
  <div className="container-fluid  " id='background' style={{backgroundColor:'black',backgroundImage:'https://cdn.leonardo.ai/users/8b49d567-5c2e-49dc-9bc4-d236e559f380/generations/45000c8d-0f17-4864-a80f-8002efb0d61e/Leonardo_Phoenix_10_A_visually_appealing_slider_image_for_a_Fi_1.jpg'}}>

  </div>
  <h1 className='my-5 text-center text-white' style={{fontWeight:"boldest", fontSize:"8vh"}}>Our Services</h1>
  <div className="container-fluid d-flex justify-content-evenly flex-wrap my-1" style={{backgroundColor:"black"}}>

   <Card image="https://cdn.leonardo.ai/users/8b49d567-5c2e-49dc-9bc4-d236e559f380/generations/d18a766b-1a50-4315-86e1-72b77c3448de/Leonardo_Phoenix_10_Create_a_modern_easytoread_logo_for_a_home_3.jpg" name="Home Delivary"/>
   <Card image="https://cdn.leonardo.ai/users/8b49d567-5c2e-49dc-9bc4-d236e559f380/generations/42d29f53-0661-48eb-bba9-9fce3107d0c4/Leonardo_Phoenix_10_Design_a_highquality_logo_that_exudes_simp_1.jpg?w=512" name="Real Ingredients"/>
   <Card image='https://cdn.leonardo.ai/users/8b49d567-5c2e-49dc-9bc4-d236e559f380/generations/578693e0-f61d-4384-8fc5-9c585338bf2f/Leonardo_Phoenix_10_Create_a_stylized_logo_featuring_a_harmoni_3.jpg' name="Natural Products"/>

  </div>
  
  </>
  )
}

export default Services