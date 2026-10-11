import { Button } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { CgLogIn } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import { useState } from "react";

import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [loadingFb, setLoadingFb] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);

  function handleClickGoogle() {
    setLoadingGoogle(true);
  }

  function handleClickFb() {
    setLoadingFb(true);
  }
  return (
    <section className="bg-white w-full fixed top-0 left-0 h-screen overflow-y-auto">
      <header className="sticky top-0 z-10 bg-red-400 w-full px-4 py-3 flex items-center justify-between border-b border-[rgba(0,0,0,0.1)]">
        <Link to="/">
          <img src="gemini-svg.svg" alt="logo" className="w-50" />
        </Link>
        <div className="flex items-center gap-4">
          <NavLink to="/login" exact={true} activeClassName="isActive">
            <Button
              className="rounded-full! text-[rgba(0,0,0,0.8)]! px-5! flex gap-1"
              onClick={() => console.log("Login clicked")}
            >
              <CgLogIn className="text-[15px]" />
              Login
            </Button>
          </NavLink>

          <NavLink to="/sign-up" exact={true} activeClassName="isActive">
            <Button
              className=" rounded-full! text-[rgba(0,0,0,0.8)]! px-5! flex gap-1"
              onClick={() => console.log("Sign Up clicked")}
            >
              <FaRegUser className="text-[15px]" />
              Sign Up
            </Button>
          </NavLink>
        </div>
      </header>
      <img
        src="/patern.webp"
        alt=""
        className="pointer-events-none w-full fixed top-0 left-0 opacity-5"
      />

      <div className="loginBox card w-[600px] h-auto pb-52 mx-auto pt-10 relative z-50">
        <div className="text-center">
          <img src="gemini-svg.svg" alt="logo" className="m-auto w-70" />
        </div>

        <h1 className="text-center text-[35px] font-[800] mt-4">
          Welcome Back! <br />
          Sign in with your Credentials.
        </h1>

        <div className="flex items-center justify-center w-full mt-5 gap-4">
          <Button
            size="small"
            onClick={handleClickGoogle}
            endIcon={<FcGoogle />}
            loading={loadingGoogle}
            loadingPosition="end"
            variant="outlined"
            className="bg-none! py-2! text-[15px]! capitalize! px-5! text-[rgba(0,0,0,0.7)]! flex gap-1"
          >
            Signin with Google
          </Button>
          <Button
            size="small"
            onClick={handleClickFb}
            endIcon={<BsFacebook />}
            loading={loadingFb}
            loadingPosition="end"
            variant="outlined"
            className="bg-none! py-2! text-[15px]! capitalize! px-5! text-[rgba(0,0,0,0.7)]! flex gap-1"
          >
            Signin with Facebook
          </Button>
        </div>

        <br />

        <div className="w-full flex items-center justify-center gap-3">
          <span className="flex items-center w-20 h-[1px] bg-[rgba(0,0,0,0.2)]"></span>
          <span className="text-[15px]">or, Sign in with your Email</span>
          <span className="flex items-center w-20 h-[1px] bg-[rgba(0,0,0,0.2)]"></span>
        </div>

        <br />

        <form className="w-full px-8 mt-3" action="">
          <div className="form-group w-full mb-4">
            <h4 className="text-[14px] font-medium mb-1">Email</h4>
            <input
              type="email"
              placeholder="Email"
              className="w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md px-3 focus:border-[rgba(0,0,0,0.7)]! focus:outline-none! focus:ring-0! focus:shadow-none!"
            />
          </div>

          <div className="form-group w-full mb-4">
            <h4 className="text-[14px] font-medium mb-1">Password</h4>
            <div className="relative w-full">
              <input
                type={isShowPassword === false ? "password" : "text"}
                placeholder="Password"
                className="w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md px-3 focus:border-[rgba(0,0,0,0.7)]! focus:outline-none! focus:ring-0! focus:shadow-none!"
              />
              <Button
                className="absolute! top-2 right-3 z-50 rounded-full! w-9! h-9! min-w-9! text-gray-600!"
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {isShowPassword === false ? (
                  <FaRegEye className="text-[18px]" />
                ) : (
                  <FaEyeSlash className="text-[18px]" />
                )}
              </Button>
            </div>
          </div>

          <div className="form-group w-full flex items-center justify-between mb-4">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-[14px] text-[rgba(0,0,0,0.7)]">
                Remember me
              </span>
            </label>
            <Link
              to="/forgot-password"
              className="text-[14px] font-semibold text-blue-600 hover:underline hover:text-gray-700"
            >
              Forgot Password?
            </Link>
          </div>

          <Button className="btn-blue btn-lg w-full">Sign In</Button>
        </form>
      </div>
    </section>
  );
};
export default Login;
