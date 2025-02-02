import React from 'react'
import Image from './about img.jpg'

const About = () => {
 
  return (
    <>
    
      <div  data-aos="fade-up" className="container-fluid bg-secondary text-dark ">
        <div className="row">
          <div data-aos="fade-right" className="col-lg-6 col-sm-12 col-12 p-5">
            <h1 className='my-4'style={{fontWeight:"boldest", fontSize:"8vh"}}>About Us</h1>
            <h5>Welcome to First Bite, where every cake begins with a smile and ends with pure joy! At First Bite, we’re more than just a cake shop – we’re passionate creators of unforgettable moments, one slice at a time. Our mission is to make every occasion extra special with cakes that not only look stunning but taste absolutely divine.

              From our carefully selected ingredients to our innovative designs, we take pride in crafting each cake with love and attention to detail. Whether it's a birthday, wedding, or just a sweet indulgence, we offer a wide range of flavors, styles, and sizes to suit every taste and occasion.

              At First Bite, we believe that the first bite should be just as delightful as the last, which is why we make sure every cake is fresh, moist, and bursting with flavor. Our team of skilled bakers and designers are here to bring your cake vision to life, ensuring it’s a perfect fit for your celebration.

              Thank you for choosing First Bite to be part of your special moments. We can’t wait to make your first bite a truly memorable one!</h5>
          </div>
          <div className="col-lg-6 col-sm-12 col-12 p-5">
            <img src={Image} className='img-fluid mt-5 ' alt="" />
          </div>
        </div>
      </div>

      <div   className="container-fluid bg-secondary text-dark ">
        <div  data-aos="fade-left" className="row">
        <div className="col-lg-6 col-sm-12 col-12 p-5">
            <img src='https://cdn.leonardo.ai/users/91c398ec-b0c3-4153-970f-9ac8075e2f67/generations/cfa5478e-ad2f-4741-9bd2-1992fc3cc322/segments/1:4:1/Flux_Dev_A_highly_detailed_realistic_image_of_a_wealthy_shopke_0.jpeg' className='img-fluid mt-5 ' alt="" />
          </div>
          <div className="col-lg-6 col-sm-12 col-12 p-5">
            <h1 className='my-4' style={{fontWeight:"boldest", fontSize:"8vh"}}>Our Mission</h1>
            <h5>
              At First Bite, our mission is simple: to create unforgettable cakes that bring joy to every occasion. We are dedicated to crafting the highest quality, delicious cakes that are as beautiful as they are flavorful. Our goal is to exceed your expectations with every bite, providing not just a dessert, but an experience that enhances the special moments of your life.

              We are committed to using only the finest ingredients, supporting local suppliers, and blending creativity with skill to produce cakes that tell a story. Whether you’re celebrating a milestone or simply indulging in a sweet treat, we strive to make every cake a reflection of the love and joy you wish to share.

              Every cake we create is baked with care, passion, and a commitment to excellence – because at First Bite, we believe the first bite should always be the start of something extraordinary.
            </h5>
          </div>
         
        </div>

      </div>
<div  data-aos="fade-up" className="container-fluid my-5" style={{width:'100%'}}>
  <h1 style={{fontWeight:"boldest", fontSize:"6vh"}} >Our Location</h1>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.695031823702!2d79.16214237503537!3d21.164531580518997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c72d16822d2d%3A0x53514ad5ae604998!2sMR%20Celebration!5e0!3m2!1sen!2sin!4v1736508323582!5m2!1sen!2sin" width="100%" height='300vh'  style={{border:"0",margin:"16vh 0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
    </>
  )
}

export default About