import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { BsFillBagCheckFill } from "react-icons/bs";

const Checkout = () => {
  return (
    <section className="py-10!">
      <div className="container flex gap-5">
        <div className="leftCol w-[70%]">
          <div className="card bg-white shadow-md rounded-md  p-5! w-full ">
            <h1>Billing details</h1>

            <form action="" className="w-full mt-5!">
              <div className="flex items-center gap-5 pb-5!">
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    label="Full Name"
                    variant="outlined"
                    size="small"
                  />
                </div>
                <div className="col w-[50%]">
                  <TextField
                    type="email"
                    className="w-full"
                    label="Email"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <h5 className="text-[14px] font-medium mb-3!">Street Adress *</h5>

              <div className="flex items-center gap-5 pb-5!">
                <div className="col w-full">
                  <TextField
                    className="w-full"
                    label="House No. and Street Name"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <div className="flex items-center gap-5 pb-5!">
                <div className="col w-full">
                  <TextField
                    className="w-full"
                    label="Apartment, suit, unit, etc. (optional)"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <div className="flex items-center gap-5 pb-5!">
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    label="Touwn / City *"
                    variant="outlined"
                    size="small"
                  />
                </div>
                <div className="col w-[50%]">
                  <TextField
                    type="text"
                    className="w-full"
                    label="State / Country *"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <h5 className="text-[14px] font-medium mb-3!">
                Postcode / Zip *
              </h5>

              <div className="flex items-center gap-5 pb-5!">
                <div className="col w-full">
                  <TextField
                    className="w-full"
                    label="Zip Code"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>
              <div className="flex items-center gap-5 pb-5!">
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    label="Phone Number"
                    variant="outlined"
                    size="small"
                  />
                </div>
                <div className="col w-[50%]">
                  <TextField
                    type="text"
                    className="w-full"
                    label="Email Address"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="righCol w-[30%]">
          <div className="card shadow-md bg-white p-5! rounded-md">
            <h2 className="mb-4! ">Your Order</h2>
            <div className="flex items-center justify-between py-3! border-t border-b border-[rgba(0,0,0,0.1)]">
              <span className="text-[14px] font-semibold">Product</span>
              <span className="text-[14px] font-semibold">Subtotal</span>
            </div>

            <div className="mb-5! scroll max-h-62.5! overflow-y-scroll overflow-x-hidden pr-2!">
              <div className="flex items-center justify-between py-2!">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-12.5! h-12.5! object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src="https://images.pexels.com/photos/9939536/pexels-photo-9939536.jpeg"
                      alt=""
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>
                  <div className="info">
                    <h4 className="text-[14px]">A-Line Kurti with Sh...</h4>
                    <span className="text-[13px]">Qty: 1</span>
                  </div>
                </div>
                <span className="text-[14px] font-medium">$1300.00</span>
              </div>

              <div className="flex items-center justify-between py-2!">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-12.5! h-12.5! object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src="https://images.pexels.com/photos/9939536/pexels-photo-9939536.jpeg"
                      alt=""
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>
                  <div className="info">
                    <h4 className="text-[14px]">A-Line Kurti with Sh...</h4>
                    <span className="text-[13px]">Qty: 1</span>
                  </div>
                </div>
                <span className="text-[14px] font-medium">$1300.00</span>
              </div>
              <div className="flex items-center justify-between py-2!">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-12.5! h-12.5! object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src="https://images.pexels.com/photos/9939536/pexels-photo-9939536.jpeg"
                      alt=""
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>
                  <div className="info">
                    <h4 className="text-[14px]">A-Line Kurti with Sh...</h4>
                    <span className="text-[13px]">Qty: 1</span>
                  </div>
                </div>
                <span className="text-[14px] font-medium">$1300.00</span>
              </div>
              <div className="flex items-center justify-between py-2!">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-12.5! h-12.5! object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src="https://images.pexels.com/photos/9939536/pexels-photo-9939536.jpeg"
                      alt=""
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>
                  <div className="info">
                    <h4 className="text-[14px]">A-Line Kurti with Sh...</h4>
                    <span className="text-[13px]">Qty: 1</span>
                  </div>
                </div>
                <span className="text-[14px] font-medium">$1300.00</span>
              </div>
              <div className="flex items-center justify-between py-2!">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-12.5! h-12.5! object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src="https://images.pexels.com/photos/9939536/pexels-photo-9939536.jpeg"
                      alt=""
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>
                  <div className="info">
                    <h4 className="text-[14px]">A-Line Kurti with Sh...</h4>
                    <span className="text-[13px]">Qty: 1</span>
                  </div>
                </div>
                <span className="text-[14px] font-medium">$1300.00</span>
              </div>
              <div className="flex items-center justify-between py-2!">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-12.5! h-12.5! object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src="https://images.pexels.com/photos/9939536/pexels-photo-9939536.jpeg"
                      alt=""
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>
                  <div className="info">
                    <h4 className="text-[14px]">A-Line Kurti with Sh...</h4>
                    <span className="text-[13px]">Qty: 1</span>
                  </div>
                </div>
                <span className="text-[14px] font-medium">$1300.00</span>
              </div>
            </div>
            <Button className="btn-org btn-lg w-full flex gap-2!">
              <BsFillBagCheckFill className="text-[20px]" />
              Checout
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
