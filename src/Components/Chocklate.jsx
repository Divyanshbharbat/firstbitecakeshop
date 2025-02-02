import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './Card'
import { useNavigate } from 'react-router-dom'
const Chocklate = () => {
  let navigate=useNavigate()
    const [box, setbox] = useState([])
    let y=async()=>
      {
  
        try{
          const token = localStorage.getItem("token");
          console.log("token",token) // Assuming token is stored in localStorage
              const response =  await axios.get(`${import.meta.env.VITE_URL}/getdata5`, {
                headers: {
                  Authorization: `Bearer ${token}`, // Send token in Authorization header
                },
                withCredentials: true, // Include cookies if needed
              });
          if(response.data==="fail")
          {
            navigate("/login")
          }
          else{
           setbox(response.data)
        
          }
          
         } 
         catch(err)
         {
          console.log(err)
         }
      
      }
  useEffect(()=>
  {
    y()
  },[])
  return (
  
    <>
 <h1  className=' my-5  text-center mx-5 ' style={{color:"black",fontSize:"9vh" ,fontWeight:"bolder"}}>Chocolate Cakes</h1>
    <div data-aos="fade-up" className="container-fluid d-flex justify-content-evenly flex-wrap">
        < div data-aos="fade-up" className="container-fluid" >
          <div className=' d-flex justify-content-evenly  flex-wrap my-5'>
            {
              box.map((v) => {
                return (
                  <>
                    { <Card name={v.name} _id={v._id} image={v.image} price={v.price} />  }
              
                  
                  </>
                )
              })
            }

          </div>
        </div >

      </div>
    </>
  )
}

export default Chocklate