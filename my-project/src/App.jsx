import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import ProductListing from "./Pages/ProductListing";
import ProductDetails from "./Pages/ProductDetails";
import { createContext, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

// MUI dialog
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import ProductZoom from "./components/ProductZoom";
import Button from "@mui/material/Button";
import ProductDetailsComponent from "./components/ProductDetailsComponent";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import CartPage from "./Pages/Cart";
import Verify from "./Pages/Verify";

import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import ForgotPassword from "./Pages/ForgotPassword";

const myContext = createContext();

function App() {
  const [maxWidth, setMaxWidth] = useState("xl");
  const [fullWidth, setFullWidth] = useState(true);

  const [openProductDetailsModal, setOpenProductDetailsModal] = useState(false);

  const [openCartPanel, setOpenCartPanel] = useState(false);

  const [alertBox, setAlertBox] = useState({
    open: false,
    msg: "",
    status: "success",
  });

  const handleCloseProductDetailsModal = () => {
    setOpenProductDetailsModal(false);
  };

  const handleCloseAlertBox = (event, reason) => {
    setAlertBox({ ...alertBox, open: false });
  };

  const openAlertBox = (status, msg) => {
    setAlertBox({ open: true, msg, status });
  };

  const values = {
    setOpenProductDetailsModal,
    setOpenCartPanel,
    openCartPanel,
    openAlertBox,
  };

  return (
    <>
      <BrowserRouter>
        <myContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path={"/"} exact={true} element={<Home />} />
            <Route
              path={"/productListing"}
              exact={true}
              element={<ProductListing />}
            />
            <Route
              path={"/product/:id"}
              exact={true}
              element={<ProductDetails />}
            />
            <Route path={"/login"} exact={true} element={<Login />} />
            <Route path={"/register"} exact={true} element={<Register />} />
            <Route path={"/cart"} exact={true} element={<CartPage />} />
            <Route path={"/verify"} exact={true} element={<Verify />} />
            <Route
              path={"/forgot-password"}
              exact={true}
              element={<ForgotPassword />}
            />
          </Routes>

          <Footer />
        </myContext.Provider>
      </BrowserRouter>

      <Snackbar
        open={alertBox.open}
        onClose={handleCloseAlertBox}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        // Notice there's no autoHideDuration, meaning it stays until dismissed (which happens on click away)
      >
        <Alert
          onClose={handleCloseAlertBox}
          severity={alertBox.status}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {alertBox.msg}
        </Alert>
      </Snackbar>

      <Dialog
        open={openProductDetailsModal}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        onClose={handleCloseProductDetailsModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="productDetailsModal"
      >
        <DialogContent>
          <div className="flex items-center w-full! productDetailsModalContainer relative">
            <Button
              className="w-10! h-10! min-w-10! rounded-full! text-black! absolute! top-3! right-3! bg-[#f1f1f1]!"
              onClick={handleCloseProductDetailsModal}
            >
              <IoCloseSharp className="text-[20px]!" />
            </Button>
            <div className="col1 w-[40%]! px-3!">
              <ProductZoom />
            </div>
            <div className="col2 w-[60%]! pr-16! productContent">
              <ProductDetailsComponent />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default App;
export { myContext };
