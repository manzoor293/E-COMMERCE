import { Button } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { CgLogIn } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import { useState } from "react";

import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const ChangePassword = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowPassword2, setIsShowPassword2] = useState(false);

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
          You can change your password from here.
        </h1>

        <br />

        <br />

        <form className="w-full px-8 mt-3" action="">
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

          <div className="form-group w-full mb-4">
            <h4 className="text-[14px] font-medium mb-1">Confirm Password</h4>
            <div className="relative w-full">
              <input
                type={isShowPassword2 === false ? "password" : "text"}
                placeholder="Password"
                className="w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md px-3 focus:border-[rgba(0,0,0,0.7)]! focus:outline-none! focus:ring-0! focus:shadow-none!"
              />
              <Button
                className="absolute! top-2 right-3 z-50 rounded-full! w-9! h-9! min-w-9! text-gray-600!"
                onClick={() => setIsShowPassword2(!isShowPassword2)}
              >
                {isShowPassword2 === false ? (
                  <FaRegEye className="text-[18px]" />
                ) : (
                  <FaEyeSlash className="text-[18px]" />
                )}
              </Button>
            </div>
          </div>

          <Button className="btn-blue btn-lg w-full">Change Password</Button>
        </form>
      </div>
    </section>
  );
};
export default ChangePassword;
