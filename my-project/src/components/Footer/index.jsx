import { LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturnLight } from "react-icons/pi";
import { BsWallet2 } from "react-icons/bs";
import { LiaGiftSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IoChatboxOutline } from "react-icons/io5";
import Button from "@mui/material/Button";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { IoCloseSharp } from "react-icons/io5";

import { FaFacebookF } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useContext } from "react";
import { myContext } from "../../App";

// MUI Drawer
import Drawer from "@mui/material/Drawer";
import CartPanel from "../CartPanel";

const Footer = () => {
  const context = useContext(myContext);

  return (
    <>
      <footer className="py-6! bg-[#fafafa]">
        <div className="container">
          {/* ================= SERVICE FEATURES ================= */}
          <div
            className="
              flex flex-wrap items-start justify-center
              gap-y-8 gap-x-2
              py-8! pb-8!
            "
          >
            <div
              className="
                col flex items-center justify-start flex-col group
                w-[48%] sm:w-[31%] lg:w-[15%]
                text-center
              "
            >
              <LiaShippingFastSolid className="text-[34px] sm:text-[38px] lg:text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />

              <h3 className="text-[14px] sm:text-base font-semibold mt-3!">
                Free Shipping
              </h3>

              <p className="text-[11px] sm:text-xs font-medium">
                For all orders over $99
              </p>
            </div>

            <div
              className="
                col flex items-center justify-start flex-col group
                w-[48%] sm:w-[31%] lg:w-[15%]
                text-center
              "
            >
              <PiKeyReturnLight className="text-[34px] sm:text-[38px] lg:text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />

              <h3 className="text-[14px] sm:text-base font-semibold mt-3!">
                30 Days Returns
              </h3>

              <p className="text-[11px] sm:text-xs font-medium">
                For an Exchange Product
              </p>
            </div>

            <div
              className="
                col flex items-center justify-start flex-col group
                w-[48%] sm:w-[31%] lg:w-[15%]
                text-center
              "
            >
              <BsWallet2 className="text-[34px] sm:text-[38px] lg:text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />

              <h3 className="text-[14px] sm:text-base font-semibold mt-3!">
                Secured Payment
              </h3>

              <p className="text-[11px] sm:text-xs font-medium">
                Payment Cards Accepted
              </p>
            </div>

            <div
              className="
                col flex items-center justify-start flex-col group
                w-[48%] sm:w-[31%] lg:w-[15%]
                text-center
              "
            >
              <LiaGiftSolid className="text-[34px] sm:text-[38px] lg:text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />

              <h3 className="text-[14px] sm:text-base font-semibold mt-3!">
                Special Gifts
              </h3>

              <p className="text-[11px] sm:text-xs font-medium">
                Our First Prouct Order
              </p>
            </div>

            <div
              className="
                col flex items-center justify-start flex-col group
                w-[48%] sm:w-[31%] lg:w-[15%]
                text-center
              "
            >
              <BiSupport className="text-[34px] sm:text-[38px] lg:text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />

              <h3 className="text-[14px] sm:text-base font-semibold mt-3!">
                Support 24/7
              </h3>

              <p className="text-[11px] sm:text-xs font-medium">
                Contact us Anytime
              </p>
            </div>
          </div>

          <br />

          <hr />

          {/* ================= MAIN FOOTER ================= */}
          <div className="footer flex flex-col lg:flex-row py-8! gap-y-8 lg:gap-y-0">
            {/* CONTACT US */}
            <div
              className="
                part1
                w-full lg:w-[25%]
                border-b lg:border-b-0 lg:border-r
                border-[rgba(0,0,0,0.1)]
                pb-7! lg:pb-0
                lg:pr-6!
              "
            >
              <h2 className="text-[18px] font-semibold mb-4!">Contact Us</h2>

              <p className="text-[13px] font-medium pb-4!">
                Classyshop - Mega Super Store <br />
                507-Union Trade Center France
              </p>

              <Link
                to="mailto:someone@example.com"
                className="link text-[13px] break-all sm:break-normal"
              >
                manzoorahmadm@92gmail.com
              </Link>

              <span className="text-[20px] sm:text-[22px] font-semibold block w-full mt-3! mb-5! text-primary">
                (+92) 300-123-4567
              </span>

              <div className="flex items-center gap-2">
                <IoChatboxOutline className="text-[36px] sm:text-[40px] shrink-0 text-primary" />

                <span className="text-[15px] sm:text-[17px] font-semibold">
                  Online Chat <br />
                  Get Expert Help
                </span>
              </div>
            </div>

            {/* PRODUCT + COMPANY */}
            <div
              className="
                part2
                w-full lg:w-[40%]
                flex
                px-0! lg:pl-8!
                gap-4 sm:gap-8
              "
            >
              <div className="part2_col1 w-1/2">
                <h2 className="text-[16px] sm:text-[18px] font-semibold mb-4!">
                  Prouduct
                </h2>

                <ul className="list">
                  <li className="list-none text-[13px] sm:text-[14px] w-full mb-2!">
                    <Link to="/" className="link">
                      Prices drop
                    </Link>
                  </li>

                  <li className="list-none text-[13px] sm:text-[14px] w-full mb-2!">
                    <Link to="/" className="link">
                      New Products
                    </Link>
                  </li>

                  <li className="list-none text-[13px] sm:text-[14px] w-full mb-2!">
                    <Link to="/" className="link">
                      Best Sellers
                    </Link>
                  </li>

                  <li className="list-none text-[13px] sm:text-[14px] w-full mb-2!">
                    <Link to="/" className="link">
                      Contact Us
                    </Link>
                  </li>

                  <li className="list-none text-[13px] sm:text-[14px] w-full mb-2!">
                    <Link to="/" className="link">
                      Sitemap
                    </Link>
                  </li>

                  <li className="list-none text-[13px] sm:text-[14px] w-full mb-2!">
                    <Link to="/" className="link">
                      Stores
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="part2_col2 w-1/2">
                <h2 className="text-[16px] sm:text-[18px] font-semibold mb-4!">
                  Our Company
                </h2>

                <ul className="list">
                  <li className="list-none text-[13px] sm:text-[14px] w-full mb-2!">
                    <Link to="/" className="link">
                      Delivery
                    </Link>
                  </li>

                  <li className="list-none text-[13px] sm:text-[14px] w-full mb-2!">
                    <Link to="/" className="link">
                      Legal Notice
                    </Link>
                  </li>

                  <li className="list-none text-[13px] sm:text-[14px] w-full mb-2!">
                    <Link to="/" className="link">
                      Terms & Conditions of use
                    </Link>
                  </li>

                  <li className="list-none text-[13px] sm:text-[14px] w-full mb-2!">
                    <Link to="/" className="link">
                      AboutUs
                    </Link>
                  </li>

                  <li className="list-none text-[13px] sm:text-[14px] w-full mb-2!">
                    <Link to="/" className="link">
                      Secure payment
                    </Link>
                  </li>

                  <li className="list-none text-[13px] sm:text-[14px] w-full mb-2!">
                    <Link to="/" className="link">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* NEWSLETTER */}
            <div
              className="
                part3
                w-full lg:w-[35%]
                flex flex-col
                px-0! lg:pl-8! lg:pr-8!
              "
            >
              <h2 className="text-[18px] font-semibold mb-4!">
                Subscribe to newsletter
              </h2>

              <p className="text-[13px] sm:text-[14px]">
                Subscribe to our latest newsletter to get news about specials
                discounts.
              </p>

              <form className="mt-5! w-full" action="">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="
                    w-full h-11
                    border border-gray-400
                    px-4!
                    rounded-sm
                    mb-4!
                    focus:border-[rgba(0,0,0,0.3)]
                  "
                />

                <Button className="btn-org">Subscribe</Button>

                <div className="mt-2!">
                  <FormControlLabel
                    sx={{
                      alignItems: "flex-start",
                      marginRight: 0,
                      "& .MuiFormControlLabel-label": {
                        fontSize: {
                          xs: "12px",
                          sm: "14px",
                        },
                        lineHeight: 1.5,
                      },
                    }}
                    control={<Checkbox defaultChecked />}
                    label="I agree to the terms and conditions and the privacy policy"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>

      {/* ================= BOTTOM STRIP ================= */}
      <div className="bottomStrip border-t border-[rgba(0,0,0,0.2)] py-3! bg-white">
        <div
          className="
            container
            flex flex-col md:flex-row
            justify-between items-center
            gap-4 md:gap-3
          "
        >
          {/* SOCIAL ICONS */}
          <ul className="flex items-center justify-center gap-3 sm:gap-4">
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all"
              >
                <FaFacebookF className="text-[15px] group-hover:text-white" />
              </Link>
            </li>

            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all"
              >
                <AiOutlineYoutube className="text-[20px] group-hover:text-white" />
              </Link>
            </li>

            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all"
              >
                <FaPinterestP className="text-[15px] group-hover:text-white" />
              </Link>
            </li>

            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all"
              >
                <FaInstagram className="text-[15px] group-hover:text-white" />
              </Link>
            </li>
          </ul>

          {/* COPYRIGHT */}
          <p className="text-[12px] sm:text-[13px] text-center mb-0">
            © 2026, E-Commerce Template
          </p>

          {/* PAYMENT METHODS */}
          <ul className="flex items-center justify-center gap-2 flex-wrap">
            <li>
              <img
                src="/visa-3.svg"
                alt="image"
                className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
              />
            </li>

            <li>
              <img
                src="/mastercard.svg"
                alt="image"
                className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
              />
            </li>

            <li>
              <img
                src="/visa-3.svg"
                alt="image"
                className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
              />
            </li>

            <li>
              <img
                src="/mastercard.svg"
                alt="image"
                className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
              />
            </li>
          </ul>
        </div>
      </div>

      {/* ================= CART PANEL ================= */}
      <Drawer
        open={context.openCartPanel}
        onClose={() => context.setOpenCartPanel(false)}
        anchor="right"
        className="cartPanel"
        slotProps={{
          paper: {
            sx: {
              width: {
                xs: "100vw",
                sm: "400px",
              },
              maxWidth: "100vw",
              boxSizing: "border-box",
            },
          },
        }}
      >
        <div className="flex items-center justify-between! py-3! px-4! gap-3! border-b border-[rgba(0,0,0,0.1)]">
          <h4>Sopping Cart (1)</h4>

          <IoCloseSharp
            className="text-[20px]! font-medium! text-black! cursor-pointer!"
            onClick={() => context.setOpenCartPanel(false)}
          />
        </div>

        <CartPanel />
      </Drawer>
    </>
  );
};

export default Footer;
