import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";

const MyListItems = () => {
  return (
    <div className="cartItem w-full p-3 flex flex-col sm:flex-row items-center gap-4 pb-5! border-b border-[rgba(0,0,0,0.1)]">
      <div className="img w-full sm:w-[15%] rounded-md overflow-hidden!">
        <Link to="/product/45789" className="group block">
          <img
            src="https://images.pexels.com/photos/10591429/pexels-photo-10591429.jpeg"
            className="w-full h-35.5! object-cover! group-hover:scale-105 transition-all"
          />
        </Link>
      </div>
      <div className="info w-full sm:w-[85%] relative">
        <IoCloseSharp className="cursor-pointer absolute top-0 right-0 text-[22px] link transition-all" />
        <span className="text-[13px]">Watches</span>
        <h3 className="text-[15px]">
          <Link className="link">Apple Watch Series 9</Link>
        </h3>

        <Rating name="size-small" defaultValue={4} size="small" readOnly />

        <div className="flex items-center gap-4 mt-2! mb-2!">
          <span className="price text-[14px] font-semibold">$25.00</span>
          <span className="oldPrice line-through text-gray-500 text-[14px] font-medium">
            $58.00
          </span>

          <span className="price text-primary text-[14px] font-semibold">
            55% OFF
          </span>
        </div>

        <Button className="btn-org btn-sm">Add to Cart</Button>
      </div>
    </div>
  );
};
export default MyListItems;
