import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useContext, useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { myContext } from "../../App";

const ForgotPassword = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [showPassword2, setShowPassword2] = useState(true);

  const context = useContext(myContext);

  return (
    <section className="section py-10!">
      <div className="container">
        <div className="card shadow-md w-100! m-auto! bg-white rounded-md p-5! px-10!">
          <h3 className="text-center! text-[18px]! text-black!">
            Forgot Password
          </h3>

          <form className="w-full! mt-5!">
            <div className="form-group w-full! mb-5! relative">
              <TextField
                type={showPassword === true ? "password" : "text"}
                id="password"
                label="New Password"
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
            <div className="form-group w-full! mb-5! relative">
              <TextField
                type={showPassword2 === true ? "password" : "text"}
                id="confirm-password"
                label="Confirm Password"
                variant="outlined"
                className="w-full!"
                name="confirm-password"
              />
              <Button
                className="absolute! top-2.5! right-2.5! z-50 w-8.75! h-8.75! min-w-8.75! rounded-full! text-black!"
                onClick={() => setShowPassword2(!showPassword2)}
              >
                {showPassword2 === true ? (
                  <IoMdEye className="text-[25px]! opacity-75!" />
                ) : (
                  <IoMdEyeOff className="text-[25px]! opacity-75!" />
                )}
              </Button>
            </div>

            <div className="flex items-center w-full! mt-3!">
              <Button className="btn-org btn-lg w-full!">Reset Password</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
