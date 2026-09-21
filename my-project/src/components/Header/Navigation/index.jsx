import Button from "@mui/material/Button";
import { RiMenu2Fill, RiMenu3Line } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import CategoryPanel from "./CategoryPanel";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import { IoCloseSharp } from "react-icons/io5";
import { FaRegSquarePlus, FaRegSquareMinus } from "react-icons/fa6";

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);
  const [isOpenMobileNav, setIsOpenMobileNav] = useState(false);
  const [fashionOpen, setFashionOpen] = useState(false);

  const openCategoryPanel = () => setIsOpenCatPanel(true);

  return (
    <>
      <nav>
        <div className="container flex items-center justify-between md:justify-end gap-3 md:gap-8">
          {/* MOBILE: hamburger, shown only below md */}
          <button
            className="md:hidden flex items-center gap-2 text-[14px] font-medium py-3!"
            onClick={() => setIsOpenMobileNav(true)}
          >
            <RiMenu3Line className="text-[20px]" />
            Menu
          </button>

          {/* DESKTOP: your original three columns, unchanged, just hidden on mobile */}
          <div className="col_1 hidden md:block md:w-[20%]">
            <Button
              className="!text-black gap-2 !w-full"
              onClick={openCategoryPanel}
            >
              <RiMenu2Fill className="text-[18px]" />
              Shop By Categories
              <LiaAngleDownSolid className="!text-[13px] !ml-auto !font-bold" />
            </Button>
          </div>

          <div className="col_2 hidden md:block md:w-[60%]">
            <ul className="flex items-center gap-3 nav">
              <li className="list-none">
                <Link
                  to={"/"}
                  className=" link transition text-[14px] !font-[500]"
                >
                  <Button className="link transition font-[500]! text-[rgba(0,0,0,0.8)]! hover:!text-[#ff5252] !py-4">
                    Home
                  </Button>
                </Link>
              </li>

              <li className="list-none !relative">
                <Link
                  to={"/"}
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="link transition font-[500]! text-[rgba(0,0,0,0.8)]! hover:!text-[#ff5252] !py-4">
                    Fashion
                  </Button>
                </Link>

                <div className="submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white shadow-md opacity-0 transition-all">
                  <ul>
                    <li className="list-none w-full relative">
                      <Link to={"/"} className="w-full">
                        <Button className="w-full !text-left !justify-start !rounded-none">
                          Men
                        </Button>
                      </Link>

                      <div className="submenu absolute top-0 left-[120%] min-w-[200px] bg-white shadow-md opacity-0 transition-all">
                        <ul>
                          <li className="list-none w-full">
                            <Link to={"/"} className="w-full">
                              <Button className="w-full !text-left !justify-start !rounded-none">
                                T-Shirt
                              </Button>
                            </Link>
                          </li>

                          <li className="list-none w-full">
                            <Link to={"/"} className="w-full">
                              <Button className="w-full !text-left !justify-start !rounded-none">
                                Jeans
                              </Button>
                            </Link>
                          </li>

                          <li className="list-none w-full">
                            <Link to={"/"} className="w-full">
                              <Button className="w-full !text-left !justify-start !rounded-none">
                                FootWear
                              </Button>
                            </Link>
                          </li>

                          <li className="list-none w-full">
                            <Link to={"/"} className="w-full">
                              <Button className="w-full !text-left !justify-start !rounded-none">
                                Watch
                              </Button>
                            </Link>
                          </li>

                          <li className="list-none w-full">
                            <Link to={"/"} className="w-full">
                              <Button className="w-full !text-left !justify-start !rounded-none">
                                Pants
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="list-none w-full">
                      <Link to={"/"} className="w-full">
                        <Button className="w-full !text-left !justify-start !rounded-none">
                          Women
                        </Button>
                      </Link>
                    </li>

                    <li className="list-none w-full">
                      <Link to={"/"} className="w-full">
                        <Button className="w-full !text-left !justify-start !rounded-none">
                          Kids
                        </Button>
                      </Link>
                    </li>

                    <li className="list-none w-full">
                      <Link to={"/"} className="w-full">
                        <Button className="w-full !text-left !justify-start !rounded-none">
                          Girls
                        </Button>
                      </Link>
                    </li>

                    <li className="list-none w-full">
                      <Link to={"/"} className="w-full">
                        <Button className="w-full !text-left !justify-start !rounded-none">
                          Boys
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="list-none">
                <Link
                  to={"/"}
                  className=" link transition text-[14px] font-[500]"
                >
                  <Button className="link transition font-[500]! text-[rgba(0,0,0,0.8)]! hover:!text-[#ff5252] !py-4">
                    Electronics
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link
                  to={"/"}
                  className=" link transition text-[14px] font-[500]"
                >
                  <Button className="link transition font-[500]! text-[rgba(0,0,0,0.8)]! hover:!text-[#ff5252] !py-4">
                    Bags
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link
                  to={"/"}
                  className=" link transition text-[14px] font-[500]"
                >
                  <Button className="link transition font-[500]! text-[rgba(0,0,0,0.8)]! hover:!text-[#ff5252] !py-4">
                    Footwear
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link
                  to={"/"}
                  className=" link transition text-[14px] font-[500]"
                >
                  <Button className="link transition font-[500]! text-[rgba(0,0,0,0.8)]! hover:!text-[#ff5252] !py-4">
                    Groceries
                  </Button>
                </Link>
              </li>

              <li className="list-none">
                <Link
                  to={"/"}
                  className=" link transition text-[14px] font-[500]"
                >
                  <Button className="link transition font-[500]! text-[rgba(0,0,0,0.8)]! hover:!text-[#ff5252] !py-4">
                    Beauty
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/"}
                  className=" link transition text-[14px] font-[500]"
                >
                  <Button className="link transition font-[500]! text-[rgba(0,0,0,0.8)]! hover:!text-[#ff5252] !py-4">
                    Wellness
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/"}
                  className=" link transition text-[14px] font-[500]"
                >
                  <Button className="link transition font-[500]! text-[rgba(0,0,0,0.8)]! hover:!text-[#ff5252] !py-4">
                    Jewellery
                  </Button>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col_3 hidden md:flex md:w-[20%] justify-end items-center">
            <p className="text-[14px] font-[500] flex items-center gap-3 mb-0 mt-0">
              <GoRocket className="text-[18px]" /> Free International Delivery
            </p>
          </div>
        </div>
      </nav>
      {/* Existing categories drawer — unchanged */}
      <CategoryPanel
        isOpenCatPanel={isOpenCatPanel}
        setIsOpenCatPanel={setIsOpenCatPanel}
      />

      {/* NEW: mobile nav drawer — same links as desktop, just vertical */}
      <Drawer open={isOpenMobileNav} onClose={() => setIsOpenMobileNav(false)}>
        <Box sx={{ width: 260 }} role="presentation">
          <h3 className="!p-3 text-[16px] font-[500] flex items-center justify-between border-b border-[#e5e5e5]">
            Menu
            <IoCloseSharp
              onClick={() => setIsOpenMobileNav(false)}
              className="cursor-pointer text-[20px]"
            />
          </h3>

          <ul className="w-full">
            <li className="list-none">
              <Link to="/" onClick={() => setIsOpenMobileNav(false)}>
                <Button className="w-full! !justify-start !px-4 text-[rgba(0,0,0,0.8)]!">
                  Home
                </Button>
              </Link>
            </li>

            <li className="list-none">
              <div className="flex items-center justify-between">
                <Link
                  to="/"
                  className="flex-1"
                  onClick={() => setIsOpenMobileNav(false)}
                >
                  <Button className="w-full! !justify-start !px-4 text-[rgba(0,0,0,0.8)]!">
                    Fashion
                  </Button>
                </Link>
                {fashionOpen ? (
                  <FaRegSquareMinus
                    className="cursor-pointer mr-4"
                    onClick={() => setFashionOpen(false)}
                  />
                ) : (
                  <FaRegSquarePlus
                    className="cursor-pointer mr-4"
                    onClick={() => setFashionOpen(true)}
                  />
                )}
              </div>
              {fashionOpen && (
                <ul className="pl-4">
                  {["Men", "Women", "Kids", "Girls", "Boys"].map((item) => (
                    <li className="list-none" key={item}>
                      <Link to="/" onClick={() => setIsOpenMobileNav(false)}>
                        <Button className="w-full! !justify-start !px-4 text-[rgba(0,0,0,0.7)]!">
                          {item}
                        </Button>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {[
              "Electronics",
              "Bags",
              "Footwear",
              "Groceries",
              "Beauty",
              "Wellness",
              "Jewellery",
            ].map((item) => (
              <li className="list-none" key={item}>
                <Link to="/" onClick={() => setIsOpenMobileNav(false)}>
                  <Button className="w-full! !justify-start !px-4 text-[rgba(0,0,0,0.8)]!">
                    {item}
                  </Button>
                </Link>
              </li>
            ))}
          </ul>

          <p className="text-[13px] font-[500] flex items-center gap-2 px-4 py-4 mt-2 border-t border-[#e5e5e5]">
            <GoRocket className="text-[16px]" /> Free International Delivery
          </p>
        </Box>
      </Drawer>
    </>
  );
};

export default Navigation;
