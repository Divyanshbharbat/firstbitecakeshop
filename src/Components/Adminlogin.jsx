import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast'
import { NavLink } from 'react-router-dom';
const Adminlogin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  let navigate = useNavigate()
  const onSubmit = async (data) => {


    await axios.post(`${import.meta.env.VITE_URL}/adminlogin`, data, { useNewUrlParser: true, useUnifiedTopology: true }, { withCredentials: true }).then((res) => {
      if (res.data == 'success') {

        toast.success("Login Successfully")
        setTimeout(() => {
          navigate("/admin");

        }, 1000)
      }
    })
      .catch(error => {
        toast.error("Something went Wrong")
      });

  };

  return (
    <div className="row">
      <div className="col-lg-6 col-sm-12">
      <div className="container-fluid d-flex justify-content-center my-4 py-5  " style={{ backgroundColor: "black" }}>
        <div className="head border" style={{ height: '70vh', width: "90vh", borderRadius: "2vh" }}>
          <h1 className="text-center text-white my-5">AdminLogin</h1>
          <div className="container-fluid text-center my-5">
            <form className='b' onSubmit={handleSubmit(onSubmit)}>
              <div className="input my-5 mx-3">
                <input
                  type="text"
                  {...register("admin", { required: "Email is required" })}
                  placeholder="Email"
                  style={{
                    backgroundColor: "#eaeaea",
                    border: "none",
                    height: "6vh",
                    borderRadius: '1vh',
                    padding: "1vh"
                  }}
                />
                {errors.username && <p className='my-2 text-white'>{errors.username.message}</p>}
              </div>
              <div className="input my-5 mx-3">
                <input
                  type="password" name='password' id='password'
                  {...register("password", { required: "Password is required" })}
                  placeholder="Password"
                  style={{
                    backgroundColor: "#eaeaea",
                    border: "none",
                    height: "6vh",
                    borderRadius: '1vh',
                    padding: "1vh"
                  }}
                />
                {errors.password && <p className='my-2 text-white'>{errors.password.message}</p>}
              </div>
              <div className="text-primary my-3">
                <NavLink to='/contact' className='text-white'> Forgot password?</NavLink>

              </div>
              <div className="button d-flex justify-content-center">
                <NavLink to={'/signup'}> <button type="button" className="btn btn-light text-dark mx-3">Signup</button></NavLink>
                <button type="submit" className="btn btn-light mx-3">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>
  
  );
};

export default Adminlogin;
