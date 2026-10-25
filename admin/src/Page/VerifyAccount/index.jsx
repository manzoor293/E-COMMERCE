import { Button } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { CgLogIn } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import OtpBox from "../../../../my-project/src/components/OtpBox";
import { useState } from "react";

const VerifyAccount = () => {
  const [otp, setOtp] = useState("");

  const handleOtpChange = (value) => {
    setOtp(value);
  };

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
          <img src="verify3.png" alt="logo" className="m-auto w-40" />
        </div>

        <h1 className="text-center text-[30px] font-[800] mt-4">
          Welcome Back!
          <br />
          Please Verify your Email.
        </h1>

        <br />

        <p className="text-center text-[15px]">
          OTP send to &nbsp;
          <span className="text-[#3067e5] font-bold">
            manzoorahmadm293@gmail.com
          </span>
        </p>

        <br />

        <div className="flex items-center justify-center flex-col">
          <OtpBox length={6} onChange={handleOtpChange} />
        </div>

        <br />
        <div className="w-[300px] m-auto">
          <Button className="btn-blue w-full">Verify OTP</Button>
        </div>
      </div>
    </section>
  );
};
export default VerifyAccount;
