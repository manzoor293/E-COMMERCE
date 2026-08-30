import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { MdZoomOutMap } from "react-icons/md";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

import "./style.css";
import Button from "@mui/material/Button";
import { myContext } from "../../App";
import { useContext } from "react";

const ProductItem = () => {
  const context = useContext(myContext);

  return (
    <div className="productItem shadow-lg rounded-md overflow-hidden border border-[rgba(0,0,0,0.1)] flex items-center">
      <div className="group imgWrapper w-[25%]! rounded-md relative">
        <Link to="/">
          <div className="img h-62.5! overflow-hidden relative">
            <img
              src="https://m.media-amazon.com/images/I/71JXoGTYOwL._AC_SL1500_.jpg"
              alt="product-item"
              className="w-full!"
            />
            <img
              src="https://m.media-amazon.com/images/I/71CyGEV-tPL._AC_SL1500_.jpg"
              alt="product-item"
              className="w-full! transition-all duration-700 absolute top-0 left-0 opacity-1 group-hover:opacity-100 group-hover:scale-100"
            />
          </div>
        </Link>
        <span className="discount flex items-center absolute top-2.5 left-2.5 z-50 bg-primary text-white p-1! rounded-lg text-[12px] font-medium">
          10%
        </span>

        <div className="actions absolute -top-50 right-1.25 z-50 flex items-center gap-2 flex-col w-12.5 transition-all duration-300 group-hover:top-3.75 opacity-0 group-hover:opacity-100">
          <Button
            className="w-8.75! h-8.75! min-w-8.75! rounded-full! bg-gray-500! text-black! hover:bg-red-500! hover:text-white! group"
            onClick={() => context.setOpenProductDetailsModal(true)}
          >
            <MdZoomOutMap className="text-[18px] text-black group-hover:text-white!" />
          </Button>

          <Button className="w-8.75! h-8.75! min-w-8.75! rounded-full! bg-gray-500! text-black! hover:bg-red-500! hover:text-white! group">
            <IoGitCompareOutline className="text-[18px] text-black group-hover:text-white!" />
          </Button>

          <Button className="w-8.75! h-8.75! min-w-8.75! rounded-full! bg-gray-500! text-black! hover:bg-red-500! hover:text-white! group">
            <FaRegHeart className="text-[18px] text-black group-hover:text-white!" />
          </Button>
        </div>
      </div>

      <div className="info p-3! py-5! px-8! w-[75%]">
        <h6 className="text-[15px]  font-normal!">
          <Link to="/" className="link tansition-all">
            Soylent Green
          </Link>
        </h6>
        <h3 className="text-[18px] title mt-3! mb-3! font-medium text-[rgba(0,0,0,0.9)] ">
          <Link to="/" className="link tansition-all">
            Hanes Men's Zip-up Hoodie
          </Link>
        </h3>

        <p className="text-[14px] text-[rgba(0,0,0,0.7)] mb-3!">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.{" "}
        </p>
        <Rating name="size-small" defaultValue={4} size="small" readOnly />

        <div className="flex items-center gap-4">
          <span className="oldPrice line-through text-gray-500 text-[15px] font-medium">
            $58.00
          </span>
          <span className="newPrice text-primary text-[15px] font-semibold">
            $40.00
          </span>
        </div>

        <Button className="btn-org mt-3! flex gap-2">
          <MdOutlineShoppingCart className="text-[20px]" /> Add to Cart
        </Button>
      </div>
    </div>
  );
};
export default ProductItem;
