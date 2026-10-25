import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Page/Dashboard";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import React, { createContext, useState } from "react";
import Login from "./Page/Login";
import SignUp from "./Page/SignUp";
import { Products } from "./Page/Products";
import AddProduct from "./Page/Products/addProduct";

// Add Products Panel from mu
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { IoMdClose } from "react-icons/io";
import Slide from "@mui/material/Slide";
import { HomeSliderBanners } from "./Page/HomeSliderBanners";
import AddHomeSlide from "./Page/HomeSliderBanners/addHomeSlide";
import { CategoryList } from "./Page/Category";
import AddCategory from "./Page/Category/addCategory";
import { SubCategoryList } from "./Page/Category/subCatList";
import AddSubCategory from "./Page/Category/addSubCategory";
import { Users } from "./Page/Users";
import { Orders } from "./Page/Orders";
import ForgotPassword from "./Page/ForgotPassword";
import VerifyAccount from "./Page/VerifyAccount";
import ChangePassword from "./Page/ChangePassword";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MyContext = createContext();

function App() {
  const [isSidebarOpen, setisSidebarOpen] = useState(true);
  const [isLogin, setisLogin] = useState(false);

  const [isOpneFullScreenPanel, setIsOpneFullScreenPanel] = useState({
    open: false,
    model: "",
  });

  const router = createBrowserRouter([
    {
      path: "/",
      exact: true,
      element: (
        <>
          <section className="main">
            <Header />
            <div className="contentMain flex">
              <div
                className={`sidebarWrapper overflow-hidden ${isSidebarOpen === true ? "w-[18%]" : "w-[0px] opacity-0"} transition-all`}
              >
                <Sidebar />
              </div>

              <div
                className={`contentRight py-4 px-5 ${isSidebarOpen === false ? "w-[100%]" : "w-[82%]"} transition-all`}
              >
                <Dashboard />
              </div>
            </div>
          </section>
        </>
      ),
    },
    {
      path: "/login",
      exact: true,
      element: (
        <>
          <Login />
        </>
      ),
    },
    {
      path: "/sign-up",
      exact: true,
      element: (
        <>
          <SignUp />
        </>
      ),
    },
    {
      path: "/products",
      exact: true,
      element: (
        <>
          <section className="main">
            <Header />
            <div className="contentMain flex">
              <div
                className={`sidebarWrapper overflow-hidden ${isSidebarOpen === true ? "w-[18%]" : "w-[0px] opacity-0"} transition-all`}
              >
                <Sidebar />
              </div>

              <div
                className={`contentRight py-4 px-5 ${isSidebarOpen === false ? "w-[100%]" : "w-[82%]"} transition-all`}
              >
                <Products />
              </div>
            </div>
          </section>
        </>
      ),
    },
    {
      path: "/homeSlider/list",
      exact: true,
      element: (
        <>
          <section className="main">
            <Header />
            <div className="contentMain flex">
              <div
                className={`sidebarWrapper overflow-hidden ${isSidebarOpen === true ? "w-[18%]" : "w-[0px] opacity-0"} transition-all`}
              >
                <Sidebar />
              </div>

              <div
                className={`contentRight py-4 px-5 ${isSidebarOpen === false ? "w-[100%]" : "w-[82%]"} transition-all`}
              >
                <HomeSliderBanners />
              </div>
            </div>
          </section>
        </>
      ),
    },
    {
      path: "/category/list",
      exact: true,
      element: (
        <>
          <section className="main">
            <Header />
            <div className="contentMain flex">
              <div
                className={`sidebarWrapper overflow-hidden ${isSidebarOpen === true ? "w-[18%]" : "w-[0px] opacity-0"} transition-all`}
              >
                <Sidebar />
              </div>

              <div
                className={`contentRight py-4 px-5 ${isSidebarOpen === false ? "w-[100%]" : "w-[82%]"} transition-all`}
              >
                <CategoryList />
              </div>
            </div>
          </section>
        </>
      ),
    },
    {
      path: "/subCategory/list",
      exact: true,
      element: (
        <>
          <section className="main">
            <Header />
            <div className="contentMain flex">
              <div
                className={`sidebarWrapper overflow-hidden ${isSidebarOpen === true ? "w-[18%]" : "w-[0px] opacity-0"} transition-all`}
              >
                <Sidebar />
              </div>

              <div
                className={`contentRight py-4 px-5 ${isSidebarOpen === false ? "w-[100%]" : "w-[82%]"} transition-all`}
              >
                <SubCategoryList />
              </div>
            </div>
          </section>
        </>
      ),
    },
    {
      path: "/Users",
      exact: true,
      element: (
        <>
          <section className="main">
            <Header />
            <div className="contentMain flex">
              <div
                className={`sidebarWrapper overflow-hidden ${isSidebarOpen === true ? "w-[18%]" : "w-[0px] opacity-0"} transition-all`}
              >
                <Sidebar />
              </div>

              <div
                className={`contentRight py-4 px-5 ${isSidebarOpen === false ? "w-[100%]" : "w-[82%]"} transition-all`}
              >
                <Users />
              </div>
            </div>
          </section>
        </>
      ),
    },
    {
      path: "/orders",
      exact: true,
      element: (
        <>
          <section className="main">
            <Header />
            <div className="contentMain flex">
              <div
                className={`sidebarWrapper overflow-hidden ${isSidebarOpen === true ? "w-[18%]" : "w-[0px] opacity-0"} transition-all`}
              >
                <Sidebar />
              </div>

              <div
                className={`contentRight py-4 px-5 ${isSidebarOpen === false ? "w-[100%]" : "w-[82%]"} transition-all`}
              >
                <Orders />
              </div>
            </div>
          </section>
        </>
      ),
    },
    {
      path: "/forgot-password",
      exact: true,
      element: (
        <>
          <ForgotPassword />
        </>
      ),
    },
    {
      path: "/verify-account",
      exact: true,
      element: (
        <>
          <VerifyAccount />
        </>
      ),
    },
    {
      path: "/change-password",
      exact: true,
      element: (
        <>
          <ChangePassword />
        </>
      ),
    },
  ]);

  const values = {
    isSidebarOpen,
    setisSidebarOpen,
    isLogin,
    setisLogin,
    isOpneFullScreenPanel,
    setIsOpneFullScreenPanel,
  };
  return (
    <>
      <MyContext.Provider value={values}>
        <RouterProvider router={router} />

        <Dialog
          fullScreen
          open={isOpneFullScreenPanel.open}
          onClose={() => setIsOpneFullScreenPanel({ open: false })}
          slots={{
            transition: Transition,
          }}
        >
          <AppBar sx={{ position: "relative" }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={() => setIsOpneFullScreenPanel({ open: false })}
                aria-label="close"
              >
                <IoMdClose className="text-gray-800" />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                <span className="text-gray-800 font-bold">
                  {isOpneFullScreenPanel?.model}
                </span>
              </Typography>
            </Toolbar>
          </AppBar>
          {isOpneFullScreenPanel?.model === "Add Product" && <AddProduct />}

          {isOpneFullScreenPanel?.model === "Add Home Slide" && (
            <AddHomeSlide />
          )}

          {isOpneFullScreenPanel?.model === "Add New Category" && (
            <AddCategory />
          )}

          {isOpneFullScreenPanel?.model === "Add New Sub Category" && (
            <AddSubCategory />
          )}
        </Dialog>
      </MyContext.Provider>
    </>
  );
}

export default App;
export { MyContext };
