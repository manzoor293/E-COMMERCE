import OtpBox from "../../components/OtpBox";
import Button from "@mui/material/Button";
import { useState } from "react";

const Verify = () => {
  const [otp, setOtp] = useState("");

  const handleOtpChange = (value) => {
    setOtp(value);
  };

  const verifyOTP = (e) => {
    e.preventDefault();
    alert(otp);
  };

  return (
    <section className="section py-10!">
      <div className="container">
        <div className="card shadow-md w-100! m-auto! bg-white rounded-md p-5! px-10!">
          <div className="text-center flex items-center justify-center">
            <img src="/verify2.png" alt="verify-icon" width={80} />
          </div>
          <h3 className="text-center! text-[18px]! text-black! mt-4! mb-1!">
            Verify OTP
          </h3>
          <p className="text-center mt-0! mb-4!">
            OTP send to{" "}
            <span className="text-primary font-bold">
              manzoorahmadm@gmail.com
            </span>
          </p>
          <form onSubmit={verifyOTP}>
            <div className="mt-5!">
              <OtpBox length={6} onChange={handleOtpChange} />
            </div>

            <div className="flex items-center justify-center mt-5! px-2!">
              <Button type="submit" className="w-full! btn-org btn-lg">
                Verify OTP
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Verify;
