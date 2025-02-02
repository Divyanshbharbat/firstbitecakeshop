import React from 'react'
import {toast,Toaster} from 'react-hot-toast'

const Container = ({image,name}) => {
  
  return (
 <>
 <Toaster/>
<button  onClick={()=>
  {
     toast("Scroll down To buy the Cake")
    //  setTimeout(navigate("/"), 100);
  }
} style={{border:"none"}}>

 <div  className="card my-5 p-5  " style={{border:"none",backgroundColor:"black"}}>
<h3  >{name}</h3>
  <div className="card-body ">
 <img src={image} height='50vh' width="550vh" className='img-fluid  bg-success' alt="" />
   
  </div>
</div>
</button>
 </>
  )
}

export default Container