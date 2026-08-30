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
          <div className="flex items-center justify-center gap-2 py-8! pb-8!">
            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <LiaShippingFastSolid className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
              <h3 className="text-base font-semibold mt-3!">Free Shipping</h3>
              <p className="text-xs font-medium">For all orders over $99</p>
            </div>

            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <PiKeyReturnLight className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
              <h3 className="text-base font-semibold mt-3!">30 Days Returns</h3>
              <p className="text-xs font-medium">For an Exchange Product</p>
            </div>
            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <BsWallet2 className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
              <h3 className="text-base font-semibold mt-3!">Secured Payment</h3>
              <p className="text-xs font-medium">Payment Cards Accepted</p>
            </div>
            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <LiaGiftSolid className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
              <h3 className="text-base font-semibold mt-3!">Special Gifts</h3>
              <p className="text-xs font-medium">Our First Prouct Order</p>
            </div>
            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <BiSupport className="text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
              <h3 className="text-base font-semibold mt-3!">Support 24/7</h3>
              <p className="text-xs font-medium">Contact us Anytime</p>
            </div>
          </div>

          <br />

          <hr />

          <div className="footer flex py-8!">
            <div className="part1 w-[25%] border-r border-[rgba(0,0,0,0.1)]">
              <h2 className="text-[18px] font-semibold mb-4!">Contact Us</h2>
              <p className="text-[13px] font-medium pb-4!">
                Classyshop - Mega Super Store <br /> 507-Union Trade Center
                France
              </p>

              <Link
                to="mailto:someone@example.com"
                className="link text-[13px]"
              >
                manzoorahmadm@92gmail.com
              </Link>

              <span className="text-[22px] font-semibold block w-full mt-3! mb-5! text-primary">
                (+92) 300-123-4567
              </span>

              <div className="flex items-center gap-2">
                <IoChatboxOutline className="text-[40px] text-primary" />
                <span className="text-[17px] font-semibold">
                  Online Chat <br /> Get Expert Help
                </span>
              </div>
            </div>

            <div className="part2 w-[40%] flex pl-8!">
              <div className="part2_col1 w-[50%]">
                <h2 className="text-[18px] font-semibold mb-4!">Prouduct</h2>

                <ul className="list">
                  <li className="list-none text-[14px] w-full mb-2!">
                    <Link to="/" className="link">
                      Prices drop
                    </Link>
                  </li>

                  <li className="list-none text-[14px] w-full mb-2!">
                    <Link to="/" className="link">
                      New Products
                    </Link>
                  </li>

                  <li className="list-none text-[14px] w-full mb-2!">
                    <Link to="/" className="link">
                      Best Sellers
                    </Link>
                  </li>

                  <li className="list-none text-[14px] w-full mb-2!">
                    <Link to="/" className="link">
                      Contact Us
                    </Link>
                  </li>

                  <li className="list-none text-[14px] w-full mb-2!">
                    <Link to="/" className="link">
                      Sitemap
                    </Link>
                  </li>

                  <li className="list-none text-[14px] w-full mb-2!">
                    <Link to="/" className="link">
                      Stores
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="part2_col2 w-[50%]">
                <h2 className="text-[18px] font-semibold mb-4!">Our Company</h2>

                <ul className="list">
                  <li className="list-none text-[14px] w-full mb-2!">
                    <Link to="/" className="link">
                      Delivery
                    </Link>
                  </li>

                  <li className="list-none text-[14px] w-full mb-2!">
                    <Link to="/" className="link">
                      Legal Notice
                    </Link>
                  </li>

                  <li className="list-none text-[14px] w-full mb-2!">
                    <Link to="/" className="link">
                      Terms & Conditions of use
                    </Link>
                  </li>

                  <li className="list-none text-[14px] w-full mb-2!">
                    <Link to="/" className="link">
                      AboutUs
                    </Link>
                  </li>

                  <li className="list-none text-[14px] w-full mb-2!">
                    <Link to="/" className="link">
                      Secure payment
                    </Link>
                  </li>

                  <li className="list-none text-[14px] w-full mb-2!">
                    <Link to="/" className="link">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="part3 w-[35%] flex flex-col pl-8! pr-8!">
              <h2 className="text-[18px] font-semibold mb-4!">
                Subscribe to newsletter
              </h2>
              <p>
                Subscribe to our latest newsletter to get news about specials
                discounts.
              </p>

              <form className="mt-5!" action="">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-full h-11 border border-gray-400 px-4! rounded-sm mb-4! focus:border-[rgba(0,0,0,0.3)]"
                />
                <Button className="btn-org">Subscribe</Button>

                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="I agree to the terms and conditions and the privacy policy"
                />
              </form>
            </div>
          </div>
        </div>
      </footer>

      <div className="bottomStrip border-t border-[rgba(0,0,0,0.2)] py-3! bg-white">
        <div className="container flex justify-between items-center">
          <ul className="flex items-center gap-4">
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-10 h-10 rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all"
              >
                <FaFacebookF className="text-[15px] group-hover:text-white " />
              </Link>
            </li>

            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-10 h-10 rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all"
              >
                <AiOutlineYoutube className="text-[20px] group-hover:text-white " />
              </Link>
            </li>

            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-10 h-10 rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all"
              >
                <FaPinterestP className="text-[15px] group-hover:text-white " />
              </Link>
            </li>

            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-10 h-10 rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all"
              >
                <FaInstagram className="text-[15px] group-hover:text-white " />
              </Link>
            </li>
          </ul>

          <p className="text-[13px] items -center mb-0">
            © 2026, E-Commerce Template
          </p>

          <ul className="flex items-center gap-2">
            <li>
              <img src="/visa-3.svg" alt="image" className="w-10 h-10" />
            </li>
            <li>
              <img src="/mastercard.svg" alt="image" className="w-10 h-10" />
            </li>
            <li>
              <img src="/visa-3.svg" alt="image" className="w-10 h-10" />
            </li>
            <li>
              <img src="/mastercard.svg" alt="image" className="w-10 h-10" />
            </li>
          </ul>
        </div>
      </div>

      {/* Cart Panel */}
      <Drawer
        open={context.openCartPanel}
        onClose={() => context.setOpenCartPanel(false)}
        anchor="right"
        className="cartPanel"
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
