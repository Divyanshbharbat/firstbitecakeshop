import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Toaster,toast } from 'react-hot-toast';
const Navbar = () => {
  const [first, setFirst] = useState();
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true); // React state for navbar collapse
  let navigate=useNavigate()
  // Handle logout
  let handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      // Assuming token is stored in localStorage
      const response = await axios.get(`${import.meta.env.VITE_URL}/logout`, {
        headers: {
          Authorization: `Bearer ${token}`, // Send token in Authorization header
        },
        withCredentials: true, // Include cookies if needed
      });
      if (response.data === "fail") {
        toast.error("Something went wrong")
      }
      else {
        toast.success("Logout Successfully")
        navigate("/signup")
      }

    }
    catch (err) {
     console.log("divyansh")
    }
    await axios.get(`${import.meta.env.VITE_URL}/logout`);
  };

  // Check the navbar status
  let y = async () => {
   
    try {
      const token = localStorage.getItem("token"); // Assuming token is stored in localStorage
      const response = await axios.get(`${import.meta.env.VITE_URL}/getnavbar`, {
        headers: {
          Authorization: `Bearer ${token}`, // Send token in Authorization header
        },
        withCredentials: true, // Include cookies if needed
      });
  
      if (response.data === "success") {
        setFirst(true);
      } else if (response.data === "fail") {
        setFirst(false);
      }
    } catch (err) {
      console.log('YOu areLogout');
    }
  };

  useEffect(() => {
    y();
  }, []); // Calls on first render

  // Toggle the navbar visibility
  const toggleNavbar = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };

  return (
    <>
    <Toaster/>
      <nav id='navbar' className="navbar navbar-expand-lg  " >
        <div className="container-fluid">
        <NavLink className="navbar-brand py-4 fs-2 px-3 " ><img src="https://cdn.leonardo.ai/users/8b49d567-5c2e-49dc-9bc4-d236e559f380/generations/90f7f5c1-64af-4929-903b-65551d4c6aeb/Leonardo_Phoenix_10_Design_a_logo_for_FirstBit_Cake_Shop_featu_0.jpg?w=512" className='img-fluid' alt="" style={{height:'15vh' ,width:'15vh',borderRadius:'50%'}} /></NavLink>
          <button
            className="navbar-toggler bg-info"
            type="button "
            aria-controls="navbarSupportedContent"
            aria-expanded={isNavbarCollapsed ? "false" : "true"}
            aria-label="Toggle navigation"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isNavbarCollapsed ? '' : 'show'}`} id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item" onClick={()=> setIsNavbarCollapsed(true)} >
                <NavLink id='list' className="nav-link mx-3 fs-5" to="/" >Home</NavLink>
              </li>
              <li className="nav-item" onClick={()=> setIsNavbarCollapsed(true)}>
                <NavLink id='list' className="nav-link mx-3 fs-5" to="/about">About us</NavLink>
              </li>
              <li className="nav-item" onClick={()=> setIsNavbarCollapsed(true)}>
                <NavLink  id='list' className="nav-link mx-3 fs-5" to="/contact">Contact</NavLink>
              </li>
              <li className="nav-item" onClick={()=> setIsNavbarCollapsed(true)}>
                <NavLink id='list' className="nav-link mx-3 fs-5" to="/services">Services</NavLink>
              </li>
              <li className="nav-item" onClick={()=> setIsNavbarCollapsed(true)}>
                {first ? (
                  <NavLink className="nav-link mx-3 fs-5 bg-white text-black " style={{borderRadius:"1vh",fontWeight:"bold"}} id='logout' onClick={handleLogout}>Logout</NavLink>
                ) : (
                  <NavLink id='signup' className="nav-link mx-3 fs-5 bg-info text-black" to='/signup'>Signup</NavLink>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
