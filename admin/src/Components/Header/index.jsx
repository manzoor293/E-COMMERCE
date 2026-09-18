import { Button } from "@mui/material";
import { RiMenu2Line } from "react-icons/ri";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { FaRegUser } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";

import { useState } from "react";

const Header = () => {
  const [anchorMyAcc, setAnchorMyAcc] = useState(null);
  const openMyAcc = Boolean(anchorMyAcc);
  const handleClickMyAcc = (event) => {
    setAnchorMyAcc(event.currentTarget);
  };
  const handleCloseMyAcc = () => {
    setAnchorMyAcc(null);
  };
  return (
    <header className="w-full! h-auto py-2 pl-72 pr-7 bg-white shadow-md flex items-center justify-between">
      <div className="part1">
        <Button className="w-10! h-10! min-w-10! rounded-full! text-gray-800! hover:bg-gray-200!">
          <RiMenu2Line className="text-[18px] text-gray-800" />
        </Button>
      </div>

      <div className="part2 w-[40%] flex items-center justify-end gap-5">
        <IconButton aria-label="show new notifications">
          <Badge color="secondary" variant="dot">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        <div className="relative">
          <div
            className="w-8 h-8 rounded-full overflow-hidden cursor-pointer"
            onClick={handleClickMyAcc}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf5KqJtGTk_A8qyCHQ4sn9GSfGbi6uyYitAFLeSSpVsw&s=10"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <Menu
            anchorEl={anchorMyAcc}
            id="account-menu"
            open={openMyAcc}
            onClose={handleCloseMyAcc}
            onClick={handleCloseMyAcc}
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
            <MenuItem onClick={handleCloseMyAcc} className="bg-white!">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf5KqJtGTk_A8qyCHQ4sn9GSfGbi6uyYitAFLeSSpVsw&s=10"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="info">
                  <h3 className="text-[15px] font-medium leading-5">
                    Admin Manzoor
                  </h3>
                  <p className="text-[12px] text-gray-500">admin@example.com</p>
                </div>
              </div>
            </MenuItem>
            <Divider />
            <MenuItem
              onClick={handleCloseMyAcc}
              className="flex items-center gap-3"
            >
              <FaRegUser className="text-[16px]" />
              <span className="text-[14px]">Profile</span>
            </MenuItem>

            <MenuItem
              onClick={handleCloseMyAcc}
              className="flex items-center gap-3"
            >
              <IoMdLogOut className="text-[18px]" />
              <span className="text-[14px]">Sign Out</span>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </header>
  );
};
export default Header;
