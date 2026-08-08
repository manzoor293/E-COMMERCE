import {Link} from "react-router-dom";
import Rating from "@mui/material/Rating";
import { MdZoomOutMap } from "react-icons/md";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

import "./style.css";
import Button from "@mui/material/Button";

const ProductItem = () => {
  return (
    <div className="productItem shadow-lg rounded-md overflow-hidden border-1 border-[rgba(0,0,0,0.1)]">

      <div className="group imgWrapper !w-[100%] rounded-md relative">
        <Link to="/">
        <div className="img !h-[250px] overflow-hidden">
          <img
            src="https://m.media-amazon.com/images/I/71JXoGTYOwL._AC_SL1500_.jpg"
            alt="product-item"
            className="!w-full"
          />
          <img
            src="https://m.media-amazon.com/images/I/71CyGEV-tPL._AC_SL1500_.jpg"
            alt="product-item"
            className="!w-full transition-all duration-700 absolute top-0 left-0 opacity-1 group-hover:opacity-100 group-hover:scale-100"
          />

        </div>
      
     
        </Link>
        <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-primary text-white !p-1 rounded-lg text-[12px] font-[500]">
          10%
        </span>

        <div className="actions absolute top-[-200px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px] transition-all duration-300 group-hover:top-[15px] opacity-0 group-hover:opacity-100">

          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-gray-500 !text-black hover:!bg-red-500 hover:!text-white group">
            <MdZoomOutMap className="text-[18px] text-black group-hover:!text-white" />
          </Button>

             <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-gray-500 !text-black hover:!bg-red-500 hover:!text-white group">
            <IoGitCompareOutline className="text-[18px] text-black group-hover:!text-white" />
          </Button>

             <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-gray-500 !text-black hover:!bg-red-500 hover:!text-white group">
            <FaRegHeart className="text-[18px] text-black group-hover:!text-white" />
          </Button>
        </div>
      </div>

      <div className="info !p-3 !py-5">
        <h6 className="text-[13px]">
          <Link to="/" className="link tansition-all">
            Soylent Green
          </Link>
        </h6>
        <h3 className="text-[13px] title mt-1 font-[500] text-[rgba(0,0,0,0.9)] mb-1">
          <Link to="/" className="link tansition-all">
            Hanes Men's Zip-up Hoodie
          </Link>
        </h3>
        <Rating name="size-small" defaultValue={4} size="small" readOnly />

        <div className="flex items-center gap-4">
          <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
            $58.00
          </span>
          <span className="newPrice text-primary text-[15px] font-[600]">
            $40.00
          </span>
        </div>
      </div>
    </div>
  );
};
export default ProductItem;
