import { Button } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { CgLogIn } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";

const ForgotPassword = () => {
  return (
    <section className="bg-white w-full h-100vh">
      <header className="sticky top-0 left-0 z-10 bg-red-400 w-full px-4 py-3 flex items-center justify-between border-b border-[rgba(0,0,0,0.1)]">
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
          Having trouble to sign in?
          <br />
          Reset your password.
        </h1>

        <br />

        <form className="w-full px-8 mt-3" action="">
          <div className="form-group w-full mb-4">
            <h4 className="text-[14px] font-medium mb-1">Email</h4>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md px-3 focus:border-[rgba(0,0,0,0.7)]! focus:outline-none! focus:ring-0! focus:shadow-none!"
            />
          </div>

          <Button className="btn-blue btn-lg w-full">Reset Password</Button>
          <br />
          <br />

          <div className="text-center flex items-center justify-center gap-2">
            <span>Don't want to reset?</span>
            <Link
              to="/login"
              className="text-[#3067e5] font-[700] text-[15px] hover:underline hover:text-gray-700"
            >
              Sign In?
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};
export default ForgotPassword;
