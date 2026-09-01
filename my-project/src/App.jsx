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

const myContext = createContext();

function App() {
  const [maxWidth, setMaxWidth] = useState("xl");
  const [fullWidth, setFullWidth] = useState(true);

  const [openProductDetailsModal, setOpenProductDetailsModal] = useState(false);

  const [openCartPanel, setOpenCartPanel] = useState(false);

  const handleCloseProductDetailsModal = () => {
    setOpenProductDetailsModal(false);
  };

  const values = {
    setOpenProductDetailsModal,
    setOpenCartPanel,
    openCartPanel,
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
          </Routes>

          <Footer />
        </myContext.Provider>
      </BrowserRouter>
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
