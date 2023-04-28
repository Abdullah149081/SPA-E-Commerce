import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { userContext } from "../provider/AuthProvider";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { signInUser, googleSign } = useContext(userContext);
  const location = useLocation();
  const navigate = useNavigate();
  // location.state?.from?.pathname || "/";
  const from = location.state?.from?.pathname || "/";

  const handlerLogin = (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err?.message);
      });
  };
  const handlerGoogleLogin = () => {
    googleSign()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch(() => {});
  };

  const handlerShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="hero mt-20 ">
      <div className="hero-content  flex-col w-full  lg:w-5/6 ">
        <div className="card rounded-md border flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="text-center mt-7 ">
            <h1 className="text-2xl lg:text-4xl font-bold">Login</h1>
          </div>
          <form onSubmit={handlerLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="hover:bg-white input input-bordered" />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" />
            </div>

            <div className="mt-4">
              <button type="button" onClick={handlerShowPassword} className={`cursor-pointer  ${showPassword ? "text-[#1a73e8] font-bold" : "text-black"}  `}>
                Show Password
              </button>
            </div>
            <p className="text-error font-medium">{error}</p>
            <div className="form-control mt-6 ">
              <button type="submit" className="btn hover:bg-tertiary  rounded-sm bg-tertiary border-0 text-textColor ">
                Login
              </button>
            </div>

            <div className="flex justify-between items-center">
              <label className="label">
                <span className="label-text-alt link link-hover">Forgot password?</span>
              </label>
            </div>

            <div className="form-control mt-2">
              <button onClick={handlerGoogleLogin} type="button" className="btn hover:bg-white border-[#95A0A7;] border rounded-sm text-textColor bg-white space-x-2">
                <svg width="26px" height="26px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                  <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                </svg>
                <span>Continue with Google</span>
              </button>
            </div>
          </form>
          <div className="text-center mb-8 font-semibold ">
            <label className="text-textColor text-sm">
              New to Ema-john?
              <span>
                <Link to="/sign-up" className="label-text-alt link link-hover text-btnPrimary ml-2 ">
                  Create New Account
                </Link>
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
