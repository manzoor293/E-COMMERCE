import { useState } from "react";

const OtpBox = ({ length, onChange }) => {
  const [otp, setOtp] = useState(Array(length).fill(""));

  const handleChange = (element, index) => {
    const value = element.value; // only number is allowed
    if (isNaN(value)) return;

    // Update OTP value
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    onChange(newOtp.join(""));

    // Focus on next input field
    if (value && index < length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (event, index) => {
    if (eventkey === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  return (
    <div className="otpBox flex justify-center gap-2">
      {otp.map((data, index) => (
        <input
          key={index}
          type="text"
          id={`otp-input-${index}`}
          maxLength={1}
          value={otp[index]}
          onChange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className="w-11 h-12 text-center text-xl font-semibold rounded-md border-2 border-gray-300 text-black outline-none focus:border-blue-500 transition-colors"
        />
      ))}
    </div>
  );
};

export default OtpBox;
