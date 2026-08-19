import Sidebar from "../../components/Sidebar";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ProductItem from "../../components/ProductItem";
import ProductItemListView from "../../components/ProductItemListView";
import Button from "@mui/material/Button";
import { IoGridSharp } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import Pagination from "@mui/material/Pagination";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

const ProductListing = () => {
  const [itemView, setItemView] = useState("grid");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <section className="py-5! pb-0!">
        <div className="container">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transiton delay-100"
            >
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transiton delay-100"
            >
              Fashion
            </Link>
          </Breadcrumbs>
        </div>

        <div className="bg-white p-2! mt-4!">
          <div className="container flex gap-3">
            <div className="sidebarWrapper w-[20%] h-full bg-white">
              <Sidebar />
            </div>
            <div className="rightContent w-[80%] py-3!">
              <div className="bg-[#f1f1f1] p-2! w-full mb-4! rounded-md flex items-center justify-between">
                <div className="col1 flex items-ceter itemViewActions">
                  <Button
                    className={`w-10! height-[40px]! min-w-10!  text-black! rounded-full! ${itemView === "list" && "active"}`}
                    onClick={() => setItemView("list")}
                  >
                    <LuMenu className="text-[rgba(0,0,0,0.7)]" />
                  </Button>
                  <Button
                    className={`w-10! height-[40px]! min-w-10!  text-black! rounded-full! ${itemView === "grid" && "active"}`}
                    onClick={() => setItemView("grid")}
                  >
                    <IoGridSharp className="text-[rgba(0,0,0,0.7)]" />
                  </Button>

                  <span className="text-[14px]! font-medium! pl-3! text-[rgba(0,0,0,0.7)] ">
                    There are 27 products
                  </span>
                </div>

                <div className="col2 flex items-center justify-end gap-3! pr-4!">
                  <span className="text-[14px]! font-medium! pl-3! text-[rgba(0,0,0,0.7)] ">
                    Sort By:
                  </span>

                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    className="bg-white! text-[12px]! text-black! capitalize! border-2! border-black!"
                  >
                    Sales, highest to lowest
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem
                      onClick={handleClose}
                      className="text-[13px]! text-black! capitalize!"
                    >
                      Sales, highest to lowest
                    </MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      className="text-[13px]! text-black! capitalize!"
                    >
                      Relevance
                    </MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      className="text-[13px]! text-black! capitalize!"
                    >
                      Name, A to Z
                    </MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      className="text-[13px]! text-black! capitalize!"
                    >
                      Name, Z to A
                    </MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      className="text-[13px]! text-black! capitalize!"
                    >
                      Price, low to high
                    </MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      className="text-[13px]! text-black! capitalize!"
                    >
                      Price, high to low
                    </MenuItem>
                  </Menu>
                </div>
              </div>

              <div
                className={`grid ${itemView === "grid" ? "grid-cols-2 md:grid-cols-4" : "grid-cols-1 md:grid-cols-1"} gap-4`}
              >
                {itemView === "grid" ? (
                  <>
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                  </>
                ) : (
                  <>
                    <ProductItemListView />
                    <ProductItemListView />
                    <ProductItemListView />
                    <ProductItemListView />
                    <ProductItemListView />
                    <ProductItemListView />
                    <ProductItemListView />
                    <ProductItemListView />
                  </>
                )}
              </div>

              <div className="flex items-center justify-center mt-10!">
                <Pagination count={10} showFirstButton showLastButton />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductListing;
