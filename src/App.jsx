import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar.jsx'
import Home from './Components/Home.jsx'
import './App.css'
import Adminlogin from './Components/Adminlogin.jsx'

import Admins from './Components/Admins.jsx'
import Placeorder2 from './Components/Placeorder2.jsx'
import Footer from './Components/Footer.jsx'
import Contact from './Components/contact.jsx'
import Chocklate from './Components/Chocklate.jsx'
import Signup from './Components/Signup.jsx'
import Login from './Components/Login.jsx'
import About from './Components/About.jsx'
import Redvelvet from './Components/Redvelvet.jsx'

import Birthdaycake from './Components/Birthdaycake.jsx'
import Wcake from './Components/Wcake.jsx'
import Blackforeste from './Components/Blackforest.jsx'
import Services from './Components/Services.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
const App = () => {
  const [cart2, setcart2] = useState([]);
 const [total,settotal]=useState(0)
let addtotal=(totalPrice)=>
{
   settotal(totalPrice)
}
 
let sendcart=(name,id,image,price,quantity)=>
{
   let r={name,id,image,price,quantity}
    setcart2([...cart2,r,]);
    
}

  const router=createBrowserRouter([
    {
      path:"/",
      element:<>
      <Navbar cart2={cart2.length} />
      <Home sendcart={sendcart}/>
    <Footer/>
      
      </>
    },{
path:"/about",
element:<>
<Navbar cart2={cart2.length}  />
<About/>
<Footer/>
</>



    },{

 path:"/signup",
 element:<>
<Signup/>
 </>

    },{
      path:"/login",
      element:<>
  <Login/>
      </>
    },{
path:"/contact",
element:<>
<Navbar cart2={cart2.length} />
<Contact/>
<Footer/>

</>
    },{
      path:'/services',
      element:<>
      <Navbar cart2={cart2.length}/>
      <Services/>
      <Footer/>
      </>
    },
    {
      path:'/Birthday',
      element:<>
       <Navbar />
<Birthdaycake/>
       <Footer/>
      </>
    },
    {
      path:'/Wedding',
      element:<>
       <Navbar />
        <Wcake/>
       <Footer/>
      </>
    },
    {
      path:'/Black Forest',
      element:<>
       <Navbar />
<Blackforeste/>
       <Footer/>
      </>
    },
    {
      path:'/adminlogin',
      element:<>
       <Navbar />
<Adminlogin/>
       <Footer/>
      </>
    },
    {
      path:'/Redvelvet',
      element:<>
       <Navbar />
<Redvelvet/>
       <Footer/>
      </>
    },
   
    {
      path:'/ChocolateCake',
      element:<>
   <Navbar/>
   <Chocklate/>
   <Footer/>
      </>
    },
    {
      path:"/placeorder/:_id",
      element:<>
      <Navbar />
      <Placeorder2  />
      <Footer/>
      </>
    },
    {
      path:"/admin",
      element:<>
      <Navbar />
     <Admins/>
      <Footer/>
      </>
    }
  ])
  return (
  <>
 <RouterProvider router={router} />
  
  </>
  )
}

export default App