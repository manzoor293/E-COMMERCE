import { FaCloudUploadAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { NavLink } from "react-router";
import Button from "@mui/material/Button";

const AccountSidebar = () => {
  return (
    <div className="card bg-white! shadow-md! rounded-md! sticky top-3!">
      <div className="w-full p-5! flex items-center justify-center flex-col">
        <div className="w-27.5! h-27.5! rounded-full! overflow-hidden mb-4! relative group">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRArtD0CDiEjLudfj5O33FNm2WfOut42JJEw3Y1oWzrzg&s=10"
            alt=""
            className="w-full! h-full! object-cover"
          />

          <div className="overlay w-[100%] h-[100%] absolute! top-0 left-0 z-50 bg-[rgba(0,0,0,0.7)] flex items-center justify-center cursor-pointer opacity-0 transition-all group-hover:opacity-100">
            <FaCloudUploadAlt className="text-#f1f1f1 text-[25px]!" />
            <input
              type="file"
              className="w-full h-full absolute top-0 left-0 opacity-0"
            />
          </div>
        </div>

        <h3>Manzoor Ahmad</h3>
        <h6 className="text-[13px] font-medium">manzoor@example.com</h6>
      </div>

      <ul className="list-none pb-5! bg-#f1f1f1! myAccountTabs">
        <li className="w-full">
          <NavLink to="/my-account" exact={true} activeClassName="isActive">
            <Button className="w-full text-left! justify-start! py-2! px-5! capitalize text-[rgba(0,0,0,0.8)]! rounded-none flex items-center gap-2">
              <FaRegUser className="text-[15px]" /> My Profile
            </Button>
          </NavLink>
        </li>
        <li className="w-full">
          <NavLink to="/my-list" exact={true} activeClassName="isActive">
            <Button className="w-full text-left! justify-start! py-2! px-5! capitalize text-[rgba(0,0,0,0.8)]! rounded-none flex items-center gap-2">
              <IoMdHeartEmpty className="text-[17px]" /> My List
            </Button>
          </NavLink>
        </li>
        <li className="w-full">
          <NavLink to="/my-orders" exact={true} activeClassName="isActive">
            <Button className="w-full text-left! justify-start! py-2! px-5! capitalize text-[rgba(0,0,0,0.8)]! rounded-none flex items-center gap-2">
              <IoBagCheckOutline className="text-[17px]" /> My Orders
            </Button>
          </NavLink>
        </li>
        <li className="w-full">
          <NavLink to="/logout" exact={true} activeClassName="isActive">
            <Button className="w-full text-left! justify-start! py-2! px-5! capitalize text-[rgba(0,0,0,0.8)]! rounded-none flex items-center gap-2">
              <IoIosLogOut className="text-[18px]" /> Logout
            </Button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default AccountSidebar;
