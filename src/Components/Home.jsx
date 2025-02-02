import React, { useEffect, useState } from 'react'
import Card2 from './Card2.jsx'
import './Home.css'
import Container from './Container.jsx'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import Review from './Review.jsx'
import { toast, Toaster } from 'react-hot-toast'
import pic from './divpic.jpg';
import { NavLink } from 'react-router-dom'

const Home = () => {
  const { register, reset, handleSubmit, formState: { errors } } = useForm();
  const [box, setbox] = useState([])
  let y = async () => {

    try {
      const token = localStorage.getItem("token"); // Assuming token is stored in localStorage
      const response = await axios.get(`${import.meta.env.VITE_URL}/gethomedata`, {
        headers: {
          Authorization: `Bearer ${token}`, // Send token in Authorization header
        },
        withCredentials: true, // Include cookies if needed
      });
      if (response.data === "fail") {
        navigate("/login")
      }
      else {
        setbox(response.data)
      }

    }
    catch (err) {
      console.log(err)
    }

  }
  let f = async () => {

    await axios.get(`${import.meta.env.VITE_URL}/joy`).then((res) => setjoy(res.data))
  }
  useEffect(() => {
    f()
  }, [])
  let review = async () => {
    await axios.get(`${import.meta.env.VITE_URL}/review`).then((res) => {
      setreview2(res.data)

    }
    ).catch(err => toast.error("Something went wrong"))

  }
  useEffect(() => {
    review()
  }, [])
  const [review2, setreview2] = useState([])
  const [joy, setjoy] = useState([])
  useEffect(() => {
    y()
  }, [])

  let onreview = async (data) => {
    await axios.post(`${import.meta.env.VITE_URL}/review`, data).then((res) => {
      toast.success("Your Review Created successfully");

      reset();
      setTimeout(() => {
        review()
      }, 100);

    }).catch(err => console.log(err))


  }

  return (
    <>
      <Toaster />

      <img id='home' width='100%' src="https://cdn.leonardo.ai/users/8b49d567-5c2e-49dc-9bc4-d236e559f380/generations/99f4ce3b-ad6d-4743-a7df-15c104dd0787/Leonardo_Phoenix_10_A_beautifully_styled_and_welllit_photograp_1.jpg" alt="" />



      <div data-aos="fade-down" className="container-fluid text-center my-5">

        <h1 style={{ fontWeight: "boldest", fontSize: "6vh" }}> <u>For Various Occassions</u> </h1>
        <hr classN ame='mx-4' />
        <div className="container-fluid d-flex flex-wrap justify-content-evenly">
          {
            box.map((v) => {
              return (
                <>



                  {<Card2 data-aos="flip-up" name={v.name} image={v.image} />}


                </>
              )
            })
          }
        </div>

      </div>
      <div data-aos="zoom-out-down" className="container-fluid text-center my-5">
        <h1 className="my-5" style={{ fontWeight: "boldest", fontSize: "6vh" }} data-aos="fade-down">Enjoy Every Moments</h1>
        <hr />
        <div data-aos="fade-down" className="container-fluid d-flex justify-content-evenly flex-wrap  ">
          {
            joy.map((v) => {
              return (
                <>


                  <Container data-aos="flip-up" name={v.name} image={v.image} />


                </>
              )
            })
          }
        </div>
      </div>
      <h1 className='fw-bolder text-center my-5'>Variety Of Cakes</h1>
      <div className="slider" style={{ overflowX: "auto", width: "100%" }}>
        <div className="slider2 d-flex justify-content-between p-5 " style={{ width: "max-content",backgroundColor:"#eaeaea" }}>
          <div  className="card mx-5" style={{ width: "18rem",border:"none" }}>
            <img className="card-img-top img-fluid" src="https://cdn.leonardo.ai/users/118bee21-3556-43e1-98c9-4b99fc9984fb/generations/96847f8f-b99f-4b6c-b3e9-d4d5a4b2c050/Leonardo_Phoenix_10_A_vibrant_and_colorful_still_life_photogra_3.jpg?w=512" alt="Card image cap" />
            <div class="card-body">
              <p style={{fontFamily:"cursive"}} class="card-text text-center fs-2">First Bite Cakes</p>
      <p className='text-center my-3'>     <NavLink to={"/Birthday"}>             <button  type="button" style={{fontFamily:"cursive"}} class="btn btn-primary">Visit</button></NavLink></p>
            </div>
          </div>
          <div className="card mx-5"  style={{ width: "18rem",border:"none" }}>
            <img  className="card-img-top img-fluid" src="https://cdn.leonardo.ai/users/118bee21-3556-43e1-98c9-4b99fc9984fb/generations/96847f8f-b99f-4b6c-b3e9-d4d5a4b2c050/Leonardo_Phoenix_10_A_vibrant_and_colorful_still_life_photogra_2.jpg" alt="Card image cap" />
            <div class="card-body">
            <p style={{fontFamily:"cursive"}} class="card-text text-center fs-2">First Bite Cakes</p>
            <p className='text-center my-3'>     <NavLink to={"/Birthday"}>             <button  type="button" style={{fontFamily:"cursive"}} class="btn btn-primary">Visit</button></NavLink></p>
            </div>
          </div>
          <div className="card mx-5"  style={{ width: "18rem",border:"none" }}>
            <img  className="card-img-top img-fluid" src="https://cdn.leonardo.ai/users/118bee21-3556-43e1-98c9-4b99fc9984fb/generations/3dbd3bd0-b4c1-4932-90b8-9cb555c1044b/Leonardo_Phoenix_10_A_vibrant_and_eclectic_assortment_of_cakes_3.jpg?w=512" alt="Card image cap" />
            <div class="card-body">
            <p style={{fontFamily:"cursive"}} class="card-text text-center fs-2">First Bite Cakes</p>
            <p className='text-center my-3'>     <NavLink to={"/Birthday"}>             <button  type="button" style={{fontFamily:"cursive"}} class="btn btn-primary">Visit</button></NavLink></p>
            </div>
          </div>
          <div className="card mx-5"  style={{ width: "18rem",border:"none" }}>
            <img  className="card-img-top img-fluid" src="https://cdn.leonardo.ai/users/118bee21-3556-43e1-98c9-4b99fc9984fb/generations/3dbd3bd0-b4c1-4932-90b8-9cb555c1044b/Leonardo_Phoenix_10_A_vibrant_and_eclectic_assortment_of_cakes_1.jpg?w=512" alt="Card image cap" />
            <div class="card-body">
            <p style={{fontFamily:"cursive"}} class="card-text text-center fs-2">First Bite Cakes</p>
            <p className='text-center my-3'>     <NavLink to={"/Birthday"}>             <button  type="button" style={{fontFamily:"cursive"}} class="btn btn-primary">Visit</button></NavLink></p>
            </div>
          </div>
          <div className="card mx-5" style={{ width: "18rem",border:"none" }}>
            <img className="card-img-top img-fluid" src="https://cdn.leonardo.ai/users/118bee21-3556-43e1-98c9-4b99fc9984fb/generations/a9b21909-79ce-4ba5-8dc4-437165666ee8/Leonardo_Phoenix_10_A_vibrant_and_mouthwatering_still_life_pho_0.jpg" alt="Card image cap" />
            <div class="card-body">
            <p style={{fontFamily:"cursive"}} class="card-text text-center fs-2">First Bite Cakes</p>
            <p className='text-center my-3'>     <NavLink to={"/Birthday"}>             <button  type="button" style={{fontFamily:"cursive"}} class="btn btn-primary">Visit</button></NavLink></p>
            </div>
          </div>
          <div className="card mx-5" style={{ width: "18rem",border:"none" }}>
            <img className="card-img-top img-fluid" src="https://cdn.leonardo.ai/users/118bee21-3556-43e1-98c9-4b99fc9984fb/generations/96847f8f-b99f-4b6c-b3e9-d4d5a4b2c050/Leonardo_Phoenix_10_A_vibrant_and_colorful_still_life_photogra_3.jpg?w=512" alt="Card image cap" />
            <div class="card-body">
            <p style={{fontFamily:"cursive"}} class="card-text text-center fs-2">First Bite Cakes</p>
            <p className='text-center my-3'>     <NavLink to={"/Birthday"}>             <button  type="button" style={{fontFamily:"cursive"}} class="btn btn-primary">Visit</button></NavLink></p>
            </div>
          </div>
          <div className="card mx-5" style={{ width: "18rem",border:"none" }}>
            <img className="card-img-top img-fluid" src="https://cdn.leonardo.ai/users/118bee21-3556-43e1-98c9-4b99fc9984fb/generations/a9b21909-79ce-4ba5-8dc4-437165666ee8/Leonardo_Phoenix_10_A_vibrant_and_mouthwatering_still_life_pho_1.jpg" alt="Card image cap" />
            <div class="card-body">
            <p style={{fontFamily:"cursive"}} class="card-text text-center fs-2">First Bite Cakes</p>
            <p className='text-center my-3'>     <NavLink to={"/Birthday"}>             <button  type="button" style={{fontFamily:"cursive"}} class="btn btn-primary">Visit</button></NavLink></p>
            </div>
          </div>
          <div className="card mx-5" style={{ width: "18rem",border:"none" }}>
            <img className="card-img-top img-fluid" src="https://cdn.leonardo.ai/users/118bee21-3556-43e1-98c9-4b99fc9984fb/generations/a9b21909-79ce-4ba5-8dc4-437165666ee8/Leonardo_Phoenix_10_A_vibrant_and_mouthwatering_still_life_pho_1.jpg?w=512" alt="Card image cap" />
            <div class="card-body">
            <p style={{fontFamily:"cursive"}} class="card-text text-center fs-2">First Bite Cakes</p>
            <p className='text-center my-3'>     <NavLink to={"/Birthday"}>             <button  type="button" style={{fontFamily:"cursive"}} class="btn btn-primary">Visit</button></NavLink></p>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up"
        data-aos-duration="3000" className="container-fluid  p-5" style={{ overflow: 'auto' }}>
        <h1 className='my-4' style={{ fontWeight: "boldest", fontSize: "6vh" }}>Comments</h1>
        <hr />

        <div className="container-fluid d-flex  text-center  " style={{ overflow: 'auto', backgroundColor: "#eaeaea" }}>
          <div className="row d-flex flex-wrap">
            <div className="col-lg-6 col-sm-12 d-flex align-item-center justify-content-center">
              {
                review2.map((v) => {
                  return (
                    <div className="container-fluid py-5 mx-3">
                      <Review key={v._id} createAt={v.createAt} comment={v.comment} rating={v.rating} />
                    </div>
                  );
                })
              }
            </div>


          </div>
        </div>


      </div>
      <div className="container-fluid px-5 my-5">
        <h1 style={{ fontWeight: "boldest", fontSize: "6vh" }}>Create Review</h1>
        <div className="container  text-white p-1 my-5" style={{ backgroundColor: "black" }}>
          <form onSubmit={handleSubmit(onreview)} >


            <div className="input my-2 p-3">
              <h3>Rate Us</h3>
              <input type="range" style={{ color: 'white' }} {...register("rating")} min='1' max='5' />
            </div>
            <div className="input my-2  p-3">
              <h3>Review</h3>
              <textarea  {...register("comment")} placeholder='Comment' style={{ width: "90%" }}>


              </textarea>
            </div>
            <div className="btn">
              <button type="submit" class="btn btn-light">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div data-aos="fade-up" className="container-fluid  text-black p-5">
        <div className="row">
          <div data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" className="col-lg-6 col-sm-12 col-12 p-3">
            <h1 className='my-5  p-5 text-white' style={{ borderRadius: "2vh",backgroundColor:"black", fontWeight: "boldest", fontSize: '6vh' }}>About Me</h1>
            <p style={{backgroundColor:"black"}} className='fs-4  p-5 text-white'>I am <strong className='text-info' style={{ textDecoration: 'underline' }}>Divyansh Bharbat</strong>, a 2nd-year IT student at <strong className='text-info ' style={{ textDecoration: 'underline' }}>ST. Vincent Pallotti College of Engineering</strong>, with a passion for full-stack development. I specialize in building dynamic and responsive web applications, seamlessly integrating front-end and back-end technologies. With a strong foundation in Data Structures and Algorithms, coupled with proficiency in modern development frameworks like React, I am eager to tackle challenging projects and contribute to innovative solutions. My goal is to grow as a versatile developer and make a significant impact in the tech industry.

              Feel free to modify it based on your specific strengths or achievements!</p>
          </div>
          <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" className="col-lg-6 col-sm-12 col-12 p-2 d-flex justify-content-center">
            <img src={pic} className='img-fluid  mt-5 ' style={{ height: "50%", boxShadow: "1vh 1vh 5vh black" }} alt="" />
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="container-fluid" style={{ width: '100%' }}>
        <h1 className='my-4' style={{ fontWeight: "boldest", fontSize: "6vh" }}>Our Location</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.695031823702!2d79.16214237503537!3d21.164531580518997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c72d16822d2d%3A0x53514ad5ae604998!2sMR%20Celebration!5e0!3m2!1sen!2sin!4v1736508323582!5m2!1sen!2sin" width="100%" height='300vh' style={{ border: "0", margin: "16vh 0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  )
}

export default Home