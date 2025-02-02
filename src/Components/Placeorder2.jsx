import React, { useEffect, useState, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { useForm } from 'react-hook-form'
import './Placeorder.css'
import { toast, Toaster } from 'react-hot-toast'
const Placeorder2 = () => {
  let navigate = useNavigate()
  const [quantity, setquantity] = useState(1)
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  let _id = useParams()
  let u = async () => {

    try {
      const token = localStorage.getItem("token");
      console.log(token) // Assuming token is stored in localStorage
      const response = await axios.post(`${import.meta.env.VITE_URL}/getproduct`, _id, {
        headers: {
          Authorization: `Bearer ${token}`, // Send token in Authorization header
        },
        withCredentials: true, // Include cookies if needed
      });
      if (response.data == "fail") {
        navigate("/login")
      }
      else {
        (toast("Placed an Order"))
        setbox(response.data)
      }

    }
    catch (err) {
      console.log(err)
    }
    // 
  }
  useEffect(() => {
    u()
  }, [])
  let on = async ({ price, quantity, username, mobile, address }) => {
    try {
      const token = localStorage.getItem("token");
      console.log(token) // Assuming token is stored in localStorage
      const response = await axios.post(`${import.meta.env.VITE_URL}/placeorder`, { price, quantity, username, mobile, address, _id }, {
        headers: {
          Authorization: `Bearer ${token}`, // Send token in Authorization header
        },
        withCredentials: true, // Include cookies if needed
      });
      if (response.data == "fail") {
        toast.error("Order failed. Please try again.");
        navigate("/login");

      }
      else {
        reset()
        toast.success("Order placed successfully!");
        setTimeout(() => navigate("/"), 1000)



      }

    }
    catch (err) {
      console.log(err);
      toast.error("An error occurred while placing the order.");
    }
  }

  const [box, setbox] = useState('')
  return (
    <>
      <Toaster richColors />
      <div data-aos="fade-up" className="container-fluid my-1">
        <div className="row">
          <div className="col-lg-6 col-sm-12 bg-secondary text-black " >
            <h1 className='py-5 px-4'>Your order</h1>
            <div className="container-fluid my-0 text-center">

              <img data-aos="flip-left" src={box.image} alt="" className='img-fluid ' style={{ borderRadius: '50%' }} />

            </div>
          </div>
          <div className="col-lg-6 col-sm-12 bg-secondary ">
            <div className="container-fluid my-5">
              <h1 className='mb-5 px-4'>Order Summary</h1>
              <div data-aos="flip-left" className=" py-5 px-4 " style={{ borderRadius: '1px 100px 1px', backgroundColor: "black"  }} >
                <h1 className='my-5 text-white'>Your Product Details</h1>


                <form onSubmit={handleSubmit(on)} >


                  <div className="input my-3 text-white">
                    <h4 className='my-4'>Product Name: <span className='text-info'>{box.name}</span></h4>
                 

                    <h4 className='my-4'>Product Price: <span className=' text-info '>Rs. <input   {...register("price")} id='number' className='text-info' value={box.price} name='price' type="number" /></span> </h4>

                    <h4>Product Quantity: <span><input placeholder='1'

                      min={1} {...register("quantity")} className='bg-light text-dark' id='number2' type="number" /></span></h4>



                  </div>
                  <div className="input my-3 ">
                    <input placeholder='Username' {...register("username", { required: { value: true } })} type="text" />
                  </div>

                  <div className="input my-3">
                    <input placeholder='Mobile No.' minLength={10} {...register("mobile", { required: { value: true } })} type="text" />
                  </div>
                  <div id='text' className="input my-3">
                    <textarea placeholder='Address' name='address'  {...register("address", { required: { value: true } })}></textarea>
                  </div>
                  <div className="input my-3 ">
                    <input type="submit" className='bg-info text-white' value='Submit' />
                  </div>

                </form>

              </div>

              
            </div>


          </div>
        </div>
      </div>

    </>
  )
}

export default Placeorder2