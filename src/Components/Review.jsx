import React, { useState } from 'react'

const Review = ({comment,rating,createAt}) => {
  
 
  return (
   <>
   <div className="container-fluid text-white py-3 px-3  mx-5 bg-dark" style={{borderRadius:'5vh',width:"60vh"}}>
 <h3>{createAt}</h3>
 <h3>Rating : <span className='text-white'> {rating} <span>Stars</span> </span>  </h3>
<textarea value={comment} style={{width:"100%",backgroundColor:'#eaeaea',border:'none',color:'black',padding:'1vh'}}></textarea>
   </div>
   
   
   </>
  )
}

export default Review