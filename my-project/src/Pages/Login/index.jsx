import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useContext, useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { myContext } from "../../App";

const Login = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });
  const context = useContext(myContext);
  const history = useNavigate();

  const forgotPassword = () => {
    context.openAlertBox("success", "OTP Send");
    history("/verify");
  };
  return (
    <section className="section py-10!">
      <div className="container">
        <div className="card shadow-md w-100! m-auto! bg-white rounded-md p-5! px-10!">
          <h3 className="text-center! text-[18px]! text-black!">
            Login to your account
          </h3>

          <form className="w-full! mt-5!">
            <div className="form-group w-full! mb-5!">
              <TextField
                type="email"
                id="email"
                label="Email Id *"
                variant="outlined"
                className="w-full!"
                name="name"
              />
            </div>
            <div className="form-group w-full! mb-5! relative">
              <TextField
                type={showPassword === true ? "password" : "text"}
                id="password"
                label="Password *"
                variant="outlined"
                className="w-full!"
                name="password"
              />
              <Button
                className="absolute! top-2.5! right-2.5! z-50 w-8.75! h-8.75! min-w-8.75! rounded-full! text-black!"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword === true ? (
                  <IoMdEye className="text-[25px]! opacity-75!" />
                ) : (
                  <IoMdEyeOff className="text-[25px]! opacity-75!" />
                )}
              </Button>
            </div>

            <span
              className="link text-[14px]! font-semibold cursor-pointer! block mb-2"
              onClick={forgotPassword}
            >
              Forgot Password?
            </span>

            <div className="flex items-center w-full! mt-3!">
              <Button className="btn-org btn-lg w-full!">Login</Button>
            </div>

            <p className="text-center">
              Not Registered?{" "}
              <Link
                to="/register"
                className="link text-[14px]! text-primary font-semibold cursor-pointer! "
              >
                Sign Up
              </Link>
            </p>

            <p className="text-center font-medium">
              Or Continue with social account
            </p>

            <Button className="flex gap-3! w-full! bg-[#f1f1f1]! btn-lg! text-black! m-auto!">
              <FcGoogle className="text-[25px]!" />
              Login with Google
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
