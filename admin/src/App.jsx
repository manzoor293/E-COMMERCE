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
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { IoMdClose } from "react-icons/io";
import Slide from "@mui/material/Slide";

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
                <span className="text-gray-800">
                  {isOpneFullScreenPanel?.model}
                </span>
              </Typography>
            </Toolbar>
          </AppBar>
          {isOpneFullScreenPanel?.model === "Add Product" && <AddProduct />}
        </Dialog>
      </MyContext.Provider>
    </>
  );
}

export default App;
export { MyContext };
