import React, { useContext } from "react";
import { Link } from "react-router-dom";
import image from "../../assets/images/login/login.svg";
import { AuthContext } from "../../contexts/UserContext";

const Login = () => {
  const {signInUser,loading,setLoading} = useContext(AuthContext); 

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email,password)
    .then(result => {
      const user = result.user;
      console.log(user);
      setLoading(false);
      alert("User logged in successfully");
      form.reset();
    })
    .catch(error => {
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
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-5xl font-bold text-center">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
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
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link to='' className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#FF3811] border-none text-white ">
                {loading ? 'Loading...': 'Login'}
              </button>
            </div>

            <label className="label">
                  <p className="text-center">New to Genius Car? <Link to='/register' className="underline text-[#FF3811]">Register</Link></p>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
