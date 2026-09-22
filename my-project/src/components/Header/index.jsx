import { Link } from "react-router-dom";
import Search from "../Search";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import Tooltip from "@mui/material/Tooltip";
import Navigation from "../Header/Navigation/index";
import { myContext } from "../../App";
import { useContext, useState } from "react";
import Button from "@mui/material/Button";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FaRegUser } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";

import CategoryPanel from "./Navigation/CategoryPanel";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  // const [isOpenMobileNav, setIsOpenMobileNav] = useState(false);
  // const [fashionOpen, setFashionOpen] = useState(false);

  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

  const context = useContext(myContext);

  return (
    <header className="bg-white">
      {/* TOP STRIP — compact single line, secondary links hidden below sm */}
      <div className="top-strip py-1.5! sm:py-2 border-t-[1px]border-b-[1px] border-gray-250">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-0 text-center sm:text-left">
            <div className="col1 w-full sm:w-[50%]">
              <p className="text-[10px] sm:text-[12px] font-[500] truncate">
                Get up to 50% off new season styles, limited time only!
              </p>
            </div>
            <div className="col2 hidden sm:flex items-center justify-end w-full sm:w-[50%]">
              <ul className="flex items-center gap-3">
                <li className="list-none">
                  <Link
                    to="/help-center"
                    className="text-[13px] font-[500] link transition"
                  >
                    Help Center
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to="/order-tracking"
                    className="text-[13px] font-[500] link transition"
                  >
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN HEADER ROW — one compact row on mobile: [menu icon] [logo] [icon cluster] */}
      <div className="header py-2.5! md:py-4 border-b border-gray-250">
        <div className="container flex items-center justify-between gap-2 md:gap-3">
          {/* was setIsOpenMobileNav(true) */}
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 shrink-0 -ml-1"
            onClick={() => setIsOpenCatPanel(true)}
            aria-label="Open menu"
          >
            <RiMenu3Line className="text-[22px]" />
          </button>

          {/* LOGO — centered on mobile, left-aligned at md: */}
          <div className="col1 flex-1 md:flex-none flex justify-center md:justify-start md:w-[30%]">
            <Link to={"/"}>
              <img
                src="/logo.png"
                alt="Logo"
                className="w-[100px] sm:w-[130px] md:w-[160px] h-auto"
              />
            </Link>
          </div>

          {/* SEARCH — desktop only here; mobile version is its own row below */}
          <div className="col2 hidden md:block md:w-[40%] md:order-2">
            <Search />
          </div>

          {/* RIGHT: account + compare + wishlist + cart — always pinned to the true right edge */}
          <div className="col3 md:order-3 md:w-[35%] flex items-center justify-end shrink-0 min-w-0 pl-2! md:pl-7!">
            <ul className="flex items-center justify-end gap-0.5 sm:gap-1 md:gap-3 min-w-0">
              {context.isLogin === false ? (
                <li className="list-none">
                  <Link
                    to="/login"
                    className="link transition text-[13px] sm:text-[15px] font-medium"
                  >
                    Login
                  </Link>{" "}
                  | &nbsp;
                  <Link
                    to="/register"
                    className="link transition text-[13px] sm:text-[15px] font-medium"
                  >
                    Register
                  </Link>
                </li>
              ) : (
                <>
                  <Button
                    className="text-black myAccountWrap flex items-center gap-3 cursor-pointer !min-w-0 !p-1.5 sm:!p-2"
                    onClick={handleClick}
                  >
                    <span className="w-[36px]! h-[36px]! sm:w-[40px]! sm:h-[40px]! min-w-[36px]! flex items-center justify-center rounded-full! bg-#f1f1f1!">
                      <FaRegUser className="text-[15px]! sm:text-[16px]! text-[rgba(0,0,0,0.7)]!" />
                    </span>

                    <div className="info hidden md:flex flex-col min-w-0">
                      <h4 className="leading-3 text-[14px] text-[rgba(0,0,0,0.7)] font-medium mb-0! capitalize text-left justify-start truncate">
                        Manzoor Ahmad
                      </h4>
                      <span className="text-[13px] text-[rgba(0,0,0,0.7)] font-[400] mb-0! capitalize text-left justify-start truncate">
                        manzoorahmadm293@gmail.com
                      </span>
                    </div>
                  </Button>

                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    slotProps={{
                      paper: {
                        elevation: 0,
                        sx: {
                          overflow: "visible",
                          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                          mt: 1.5,
                          "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                          },
                          "&::before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                          },
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <Link to="/my-account" className="w-full block">
                      <MenuItem
                        onClick={handleClose}
                        className="flex gap-2 py-2!"
                      >
                        <FaRegUser className="text-[18px]" />
                        <span className="text-[14px]">My account</span>
                      </MenuItem>
                    </Link>
                    <Link to="/my-orders" className="w-full block">
                      <MenuItem
                        onClick={handleClose}
                        className="flex gap-2 py-2!"
                      >
                        <IoBagCheckOutline className="text-[18px]" />
                        <span className="text-[14px]">Orders</span>
                      </MenuItem>
                    </Link>
                    <Link to="/my-list" className="w-full block">
                      <MenuItem
                        onClick={handleClose}
                        className="flex gap-2 py-2!"
                      >
                        <IoMdHeartEmpty className="text-[18px]" />
                        <span className="text-[14px]">My List</span>
                      </MenuItem>
                    </Link>
                    <MenuItem
                      onClick={handleClose}
                      className="flex gap-2 py-2!"
                    >
                      <IoIosLogOut className="text-[18px]" />
                      <span className="text-[14px]">Logout</span>
                    </MenuItem>
                  </Menu>
                </>
              )}

              <li>
                <Tooltip title="Compare">
                  <IconButton aria-label="compare" className="p-1.5! sm:p-2!">
                    <StyledBadge badgeContent={4} color="secondary">
                      <IoGitCompareOutline />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>

              <li>
                <Tooltip title="Wishlist">
                  <IconButton aria-label="wishlist" className="p-1.5! sm:p-2!">
                    <StyledBadge badgeContent={4} color="secondary">
                      <FaRegHeart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>

              <li>
                <Tooltip title="Cart">
                  <IconButton
                    aria-label="cart"
                    className="p-1.5! sm:p-2!"
                    onClick={() => context.setOpenCartPanel(true)}
                  >
                    <StyledBadge badgeContent={4} color="secondary">
                      <MdOutlineShoppingCart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>

        {/* SEARCH — mobile-only, full width, sits right under the main row */}
        <div className="container mt-3! md:hidden">
          <Search />
        </div>
      </div>

      <Navigation setIsOpenCatPanel={setIsOpenCatPanel} />

      <CategoryPanel
        isOpenCatPanel={isOpenCatPanel}
        setIsOpenCatPanel={setIsOpenCatPanel}
      />
    </header>
  );
};
export default Header;
