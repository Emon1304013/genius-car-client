import React, { useContext } from "react";
import { Link } from "react-router-dom";
import image from "../../assets/images/login/login.svg";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { AuthContext } from "../../contexts/UserContext";

const Register = () => {
    const {createUser,user} = useContext(AuthContext)


    const handleRegister = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      createUser(email,password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      })
    }



  return (
    <div className="hero mb-10">
      <div className="hero-content grid grid-cols-1 lg:grid-cols-2 px-10">
        <div className="text-center lg:text-left w-2/3 mx-auto">
          <img src={image} alt="" />
        </div>
        <div className="card flex w-full max-w-sm mx-auto shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <h1 className="text-5xl font-bold text-center">Sign Up</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                name='name'
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name='email'
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name='password'
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link to="" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#FF3811] border-none text-white">
                Sign Up
              </button>
            </div>

            <p className="text-center">Or sign Up with</p>

            <div className="flex justify-center gap-4">
              <Link className="bg-gray-200 p-2 rounded-full text-[#3B5998]"><FaFacebookF></FaFacebookF></Link>
              <Link className="bg-gray-200 p-2 rounded-full text-[#0A66C2]"><FaLinkedinIn></FaLinkedinIn></Link>
              <Link className="bg-gray-200 p-2 rounded-full text-[#0F9D58]"><FaGoogle></FaGoogle></Link>
            </div>

            <label className="label">
              <p className="text-center">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="underline text-[#FF3811] font-bold"
                >
                  Login
                </Link>
              </p>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
