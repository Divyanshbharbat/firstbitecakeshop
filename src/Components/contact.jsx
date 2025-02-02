import React from 'react'

import './Contact.css'
import { useForm } from 'react-hook-form'
import {toast,Toaster} from 'react-hot-toast'
import axios from 'axios';
const Contact = () => {
      const { register,reset, handleSubmit, formState: { errors } } = useForm();

let onsubmit=async (data)=>
{
    await axios.post(`${import.meta.env.VITE_URL}/contacts`,data).then((res)=>toast.success("Your Message is Sent Successfully")).catch(err=>toast.error("Something went wrong"))
   reset()
}

    return (
        <>
          <Toaster/>
            <div data-aos="fade-down" className="container-fluid my-1 ">
                <div className="row">
                    <div className="col-lg-6 col-sm-12 col-12 p-5 text-white" style={{backgroundColor:"black"}}>
                        <h1 className='my-4' style={{fontWeight:"boldest", fontSize:"8vh"}}>Let's Get In Touch</h1>
                        <h5>Have a question or want to get in touch? We’d love to hear from you! Whether you’re looking for the perfect cake for your next celebration, need help with an order, or just want to say hello, our team at First Bite is here to assist you.</h5>
                        <h5>Want a custom cake made just for you? Tell us your vision, and we’ll bring it to life! Whether it’s a themed birthday cake, a wedding cake, or a delicious treat for any occasion, we’re ready to bake something special for you.</h5>
                        <div className="container-fluid p-3">
                            <div className="row d-flex flex-row my-3">
                                <i className='bx bxs-location-plus fs-5'><span className='mx-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, explicabo.</span></i>

                            </div>
                            <div className="row">
                                <i className='bx bx-phone-call my-3  fs-5' ><span className='mx-3'>9850364491</span></i>
                            </div>
                            <div className="row my-3 mb-4">
                                <i className='bx bx-envelope  fs-5' ><span className='mx-3' type='email'>bharbatdivyansh1@gmail.com</span></i>
                            </div>
                            <div className="row my-5 ">
                                <h1 style={{fontWeight:"boldest", fontSize:"8vh"}}>Contact With Us</h1>
                                <div className="box text-dark">
                                    <i className='bx bxl-instagram-alt fs-1 mx-3 my-3 ' id='insta'></i>
                                    <i className='bx bxl-facebook-circle fs-1 mx-3 my-3 text-primary' ></i>
                                    <i className='bx bxl-whatsapp fs-1 mx-3 my-3 text-success' ></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-12 bg-secondary text-black d-flex justify-content-center">
                       

                            <form onSubmit={handleSubmit(onsubmit)}>

                                <h1 className='my-5 'style={{fontWeight:"boldest", fontSize:"8vh"}} >Contact Us</h1>
                                <div className="input my-4">
                                    <input placeholder='Username' {...register("username",{required:true})} type="text" />
                                </div>
                                <div className="input  my-4 ">
                                    <input placeholder='Email' {...register("email",{required:true})} type="text" />
                                </div>
                                <div className="input my-4">
                                    <input placeholder='Mobile No.'minLength={10} {...register("mobile",{required:true})} type="text" />
                                </div>
                                <div className="input my-4">
                                    <textarea placeholder='Message'  {...register("message",{required:true})} name="message" type="text" id="message"></textarea>
                                </div>
                                <div className="input my-4">
                                    <input value='Submit' type="submit" />
                                </div>

                            </form>
                        </div>


                </div>
            </div>
            <div  data-aos="fade-up" className="container-fluid" style={{width:'100%'}}>
  <h1 className='mt-5'>Our Location</h1>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.695031823702!2d79.16214237503537!3d21.164531580518997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c72d16822d2d%3A0x53514ad5ae604998!2sMR%20Celebration!5e0!3m2!1sen!2sin!4v1736508323582!5m2!1sen!2sin" width="100%" height='300vh'  style={{border:"0",margin:"16vh 0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
        </>
    )
}

export default Contact