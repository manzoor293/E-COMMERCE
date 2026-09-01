import { useState } from "react";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { GoTriangleDown } from "react-icons/go";
import Rating from "@mui/material/Rating";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const CartItems = (props) => {
  const [selectedSize, setSelectedSize] = useState(props.size);
  const [sizeAnchorEl, setSizeAnchorEl] = useState(null);
  const openSize = Boolean(sizeAnchorEl);

  const [selectedQty, setSelectedQty] = useState(props.qty);
  const [qtyAnchorEl, setQtyAnchorEl] = useState(null);
  const openQty = Boolean(qtyAnchorEl);

  const handleClickSize = (event) => {
    setSizeAnchorEl(event.currentTarget);
  };

  const handleClickQty = (event) => {
    setQtyAnchorEl(event.currentTarget);
  };

  const handleCloseSize = (value) => {
    if (value !== null) {
      setSelectedSize(value);
    }
    setSizeAnchorEl(null);
  };

  const handleCloseQty = (value) => {
    if (value !== null) {
      setSelectedQty(value);
    }
    setQtyAnchorEl(null);
  };

  return (
    <div className="cartItem w-full p-3 flex items-center gap-4 pb-5! border-b border-[rgba(0,0,0,0.1)]">
      <div className="img w-[15%] rounded-md overflow-hidden!">
        <Link to="/product/45789" className="group">
          <img
            src="https://images.pexels.com/photos/10591429/pexels-photo-10591429.jpeg"
            className="w-full h-35.5! group-hover:scale-105 transition-all "
          />
        </Link>
      </div>
      <div className="info w-[85%] relative">
        <IoCloseSharp className="cursor-pointer absolute top-0 right-0 text-[22px] link transition-all" />
        <span className="text-[13px]">Watches</span>
        <h3 className="text-[15px]">
          <Link className="link">Apple Watch Series 9</Link>
        </h3>

        <Rating name="size-small" defaultValue={4} size="small" readOnly />

        <div className="flex items-center gap-4 mt-2!">
          <div className="relative">
            <span
              className="flex items-center justify-center bg-[#f1f1f1] px-2! py-1! rounded-full text-[11px] cursor-pointer font-semibold"
              onClick={handleClickSize}
            >
              Size: {selectedSize} <GoTriangleDown />
            </span>
            <Menu
              id="size-menu"
              anchorEl={sizeAnchorEl}
              open={openSize}
              onClose={() => handleCloseSize(null)}
            >
              <MenuItem onClick={() => handleCloseSize("S")}>S</MenuItem>
              <MenuItem onClick={() => handleCloseSize("M")}>M</MenuItem>
              <MenuItem onClick={() => handleCloseSize("L")}>L</MenuItem>
              <MenuItem onClick={() => handleCloseSize("XL")}>XL</MenuItem>
              <MenuItem onClick={() => handleCloseSize("XXL")}>XXL</MenuItem>
            </Menu>
          </div>

          <div className="relative">
            <span
              className="flex items-center justify-center bg-[#f1f1f1] px-2! py-1! rounded-full text-[11px] cursor-pointer font-semibold"
              onClick={handleClickQty}
            >
              Qty: {selectedQty} <GoTriangleDown />
            </span>
            <Menu
              id="size-menu"
              anchorEl={qtyAnchorEl}
              open={openQty}
              onClose={() => handleCloseQty(null)}
            >
              <MenuItem onClick={() => handleCloseQty(1)}>1</MenuItem>
              <MenuItem onClick={() => handleCloseQty(2)}>2</MenuItem>
              <MenuItem onClick={() => handleCloseQty(3)}>3</MenuItem>
              <MenuItem onClick={() => handleCloseQty(4)}>4</MenuItem>
              <MenuItem onClick={() => handleCloseQty(5)}>5</MenuItem>
              <MenuItem onClick={() => handleCloseQty(6)}>6</MenuItem>
              <MenuItem onClick={() => handleCloseQty(7)}>7</MenuItem>
              <MenuItem onClick={() => handleCloseQty(8)}>8</MenuItem>
              <MenuItem onClick={() => handleCloseQty(9)}>9</MenuItem>
              <MenuItem onClick={() => handleCloseQty(10)}>10</MenuItem>
            </Menu>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-2!">
          <span className="price text-[14px] font-semibold">$25.00</span>
          <span className="oldPrice line-through text-gray-500 text-[14px] font-medium">
            $58.00
          </span>

          <span className="price text-primary text-[14px] font-semibold">
            55% OFF
          </span>
        </div>
      </div>
    </div>
  );
};
export default CartItems;
