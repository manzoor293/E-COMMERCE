import Button from "@mui/material/Button";
import { useState } from "react";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";

const QtyBox = () => {
  const [qtyValue, setQtyValue] = useState(1);

  const plusQty = () => {
    setQtyValue(qtyValue + 1);
  };

  const minusQty = () => {
    if (qtyValue === 1) {
      setQtyValue(1);
    } else {
      setQtyValue(qtyValue - 1);
    }
  };

  return (
    <div className="qtyBox flex items-center relative">
      <input
        type="number"
        min={1}
        value={qtyValue}
        className="w-full! h-10! p-2! pl-5! text-[15px] focus:outline-none border border-[rgba(0,0,0,0.2)] rounded-md"
      />
      <div className="flex items-center flex-col justify-between h-10! absolute right-0 top-0 z-50">
        <Button
          className="min-w-6.25! w-6.25! h-5! text-black! rounded-none! hover:bg-[#f1f1f1]"
          onClick={plusQty}
        >
          <FaAngleUp className="text-[12px] opacity-55" />
        </Button>
        <Button
          className="min-w-6.25! w-6.25! h-5! text-black! rounded-none! hover:bg-[#f1f1f1]"
          onClick={minusQty}
        >
          <FaAngleDown className="text-[12px] opacity-55" />
        </Button>
      </div>
    </div>
  );
};

export default QtyBox;
