import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import {Toaster,toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
const Admins = () => {
   let navigate=useNavigate()

   let userdata=async(data)=>
   {
      await axios.post(`${import.meta.env.VITE_URL}/admin/admindata2`,data)
   }
   let y = async () => {

      try {
        const token = localStorage.getItem("token"); // Assuming token is stored in localStorage
        const response = await axios.get(`${import.meta.env.VITE_URL}/admin/getadmin`, {
          headers: {
            Authorization: `Bearer ${token}`, // Send token in Authorization header
          },
          withCredentials: true, // Include cookies if needed
        });
        if (response.data === "fail") {
          navigate("/login")
        }
       
  
      }
      catch (err) {
        console.log(err)
      }
  
    }
    useEffect(()=>
   {
      y()
   },[])
    const [box, setbox] = useState([])


   let user=async()=>
   {
      await axios.get(`${import.meta.env.VITE_URL}/admin/user`).then((res)=>{
        setbox(res.data)
      }).catch(err=>console.log(err))

   }
   let handlelogout=async()=>
   {
      await axios.get(`${import.meta.env.VITE_URL}/admin/logout`).then((res)=>{
        if(res.data=="success")
        {
         toast.success("Successfully Logout")
         navigate("/signup")
        }
       }).catch(err=>console.log(err))
   }
   useEffect(()=>
   {
      user()
   },[])
 let {handleSubmit,register}=useForm()
let sub=async (data)=>
{
   await axios.post(`${import.meta.env.VITE_URL}/admin/data`,data)
}
let deletedata=async (data)=>
{
   await axios.post(`${import.meta.env.VITE_URL}/admin/deletedata`,data)
}
   return (
      <>
   <div className="container-fluid">
      <button className='text-white fs-1 my-5 p-2' style={{backgroundColor:"black"}} onClick={handlelogout}>Logout</button>
   <h1>Insert data</h1>
      
      <form  onSubmit={handleSubmit(sub)}>
      <input type="text" placeholder='model' {...register('model')} />
         <select name="" id="divy">
            <option value="bdata">bdata</option>
            <option value="wdata">wdata</option>
            <option value="reddata">reddata</option>
            <option value="blackdata">blackdata</option>
            <option value="chocklatedata">chocklatedata</option>
         </select>
         <input type="text" placeholder='name' {...register("name")} />
         <input type="text" placeholder='image' {...register("image")} />
         <input type="number"  placeholder='price'  {...register("price")}/>
         <button>click</button>
      </form>
   </div>

    <div className="container-fluid">
    <h1>deletedata</h1>
<form onSubmit={handleSubmit(deletedata)}>
   <input type="text" placeholder='model' {...register('model2')} />
<select  id="d" >
   <option value="">select option</option>
            <option value="bdata">bdata</option>
            <option value="wdata">wdata</option>
            <option value="reddata">reddata</option>
            <option value="blackdata">blackdata</option>
            <option value="chocklatedata">chocklatedata</option>
         </select>
  <textarea name="div" className='bg-dark text-white' {...register("username")}>
 
  </textarea>
   <button>sub</button>
</form>
    </div>
<div className="container-fluid">
<h2> users</h2>
{
   
      box.map((v) => {
        return (
          <>

            <div className="container-fluid d-flex flex-column justify-content-center flex-wrap bg-success my-5 ">

            <div className="col">
            <h1> name: {v.username}</h1>
            </div>
           <div className="col">
           <h1>Email: {v.email}</h1>
           </div>
            </div>

          </>
        )
      })
    
}
</div>
<form onSubmit={handleSubmit(userdata)} >
   <input type="text"{...register('admin')} />
   <input type="text"{...register('password')} />
   <button>submit</button>
</form>

      </>
   )
    }
    
 

export default Admins