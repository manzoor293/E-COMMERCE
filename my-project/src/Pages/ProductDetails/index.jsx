import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import ProductZoom from "../../components/ProductZoom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { useState } from "react";
import QtyBox from "../../components/QtyBox";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import TextField from "@mui/material/TextField";
import ProductsSlider from "../../components/ProductsSlider";

const ProductDetails = () => {
  const [productActionIndex, setProductActionIndex] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="py-5!">
        <div className="container">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              to="/"
              className="link transiton delay-100"
            >
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              to="/"
              className="link transiton delay-100"
            >
              Fashion
            </Link>
            <Link
              underline="hover"
              color="inherit"
              className="link transiton delay-100"
            >
              Cropped Satin Bomber Jacket
            </Link>
          </Breadcrumbs>
        </div>
      </div>

      <section className="bg-white py-5!">
        <div className="container flex gap-8 items-center">
          <div className="productZoomContainer w-[40%]">
            <ProductZoom />
          </div>

          <div className="productContent w-[60%] pr-10! pl-10!">
            <h1 className="text-[24px] font-semibold mb-2!">
              Siril Poly Silk White & Beige Color Saree with Blouse Piece |
              sarees for Women | Saree | Sarees
            </h1>
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-[13px]">Brand:</span>
              <span className="text-black font-medium opacity-75">
                House of Chikankari
              </span>
              <Rating
                name="size-small"
                defaultValue={4}
                size="small"
                readOnly
              />
              <span className="text-[13px] cursor-pointer">Review (5)</span>
            </div>

            <div className="flex items-center gap-4 mt-4!">
              <span className="oldPrice line-through text-gray-500 text-[18px] font-medium">
                $58.00
              </span>
              <span className="newPrice text-primary text-[18px] font-semibold">
                $40.00
              </span>

              <span className="text-[14px]">
                Available In :
                <span className="text-[14px] text-green-600 font-bold">
                  147 Items
                </span>
              </span>
            </div>

            <br />

            <p className="mt-3! pr-10! mb-5!">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since 1966, when designers at Letraset and James Mosley, the
              librarian at St Bride Printing Library in London, took a 1914
              Cicero translation and scrambled it to make dummy text for
              Letraset's Body Type sheets
            </p>

            <div className="flex items-center gap-3">
              <span className="text-[16px] ">Size:</span>
              <div className="flex items-center gap-1 actions">
                <Button
                  className={`${productActionIndex === 0 ? "bg-primary! text-white!" : ""}`}
                  onClick={() => setProductActionIndex(0)}
                >
                  S
                </Button>
                <Button
                  className={`${productActionIndex === 1 ? "bg-primary! text-white!" : ""}`}
                  onClick={() => setProductActionIndex(1)}
                >
                  M
                </Button>
                <Button
                  className={`${productActionIndex === 2 ? "bg-primary! text-white!" : ""}`}
                  onClick={() => setProductActionIndex(2)}
                >
                  L
                </Button>
                <Button
                  className={`${productActionIndex === 3 ? "bg-primary! text-white!" : ""}`}
                  onClick={() => setProductActionIndex(3)}
                >
                  XL
                </Button>
              </div>
            </div>

            <p className="text-14px] mt-5! mb-2! text-black!">
              Free Shipping (Est. Delivery Time 2-3 Days)
            </p>

            <div className="flex items-center gap-4! py-5!">
              <div className="qtyBoxWrapper w-17.5!">
                <QtyBox />
              </div>
              <Button className="btn-org flex gap-2">
                <MdOutlineShoppingCart className="text-[22px]" />
                Add to Cart
              </Button>
            </div>

            <div className="flex items-center gap-4 mt-4!">
              <span className="flex items-center gap-2 text-[15px] link cursor-pointer font-medium">
                <FaRegHeart className="text-[18px]" />
                Add to Wishlist
              </span>

              <span className="flex items-center gap-2 text-[15px] link cursor-pointer font-medium">
                <IoGitCompareOutline className="text-[18px]" />
                Add to Compare
              </span>
            </div>
          </div>
        </div>

        <div className="container pt-10!">
          <div className="flex iteme-center gap-4 mb-5!">
            <span
              className={`"link text-[17px]! font-medium! cursor-pointer " ${activeTab === 0 && "text-primary!"}`}
              onClick={() => {
                setActiveTab(0);
              }}
            >
              Description
            </span>
            <span
              className={`"link text-[17px]! font-medium! cursor-pointer" ${activeTab === 1 && "text-primary!"}`}
              onClick={() => {
                setActiveTab(1);
              }}
            >
              Product Details
            </span>
            <span
              className={`"link text-[17px]! font-medium! cursor-pointer" ${activeTab === 2 && "text-primary!"}`}
              onClick={() => {
                setActiveTab(2);
              }}
            >
              Review(5)
            </span>
          </div>

          {activeTab === 0 && (
            <div className="shadow-md w-full py-5! px-8! rounded-md">
              <p>
                The best is yet to come! Give your walls a voice with a framed
                poster. This asthetic, optimistic poster will look great in your
                desk or in a open-space office. Painted wooden frame with
                passe-partout for mote depth.
              </p>

              <h4>Lightweight Design</h4>

              <p>
                Design with super light geometric case, the versa family watch
                are slim, caysal and comfortable enough to wear all day and
                night. Switch up your look with classic, leather, metal and
                woven acsessary bands. Ut elit, tellus, luctus nec ullamcorper
                mattis, pulvinar dapibus leo.
              </p>

              <h4>Free Shipping & Return</h4>

              <p>
                We offer free shipping on all orders over $50.00 and free
                returns on all orders. You can return your order within 30 days
                of purchase.
              </p>

              <h4>Money Back Gaurantee</h4>

              <p>
                We gaurntee our products and you could get back all of your
                money anytime within 30 days of purchase.
              </p>

              <h4>Online Support</h4>

              <p>
                We offer 24/7 online support to all of our customers. You can
                contact us anytime for any help you need.
              </p>
            </div>
          )}

          {activeTab === 1 && (
            <div className="shadow-md w-full py-5! px-8! rounded-md">
              <div class="relative! overflow-x-auto! bg-neutral-primary-soft! shadow-xs! rounded-base!">
                <table class="w-full! text-sm! text-left! rtl:text-right! text-gray-700 uppercase">
                  <thead class="text-sm! text-gray-700! bg-neutral-secondary-soft! bg-gray-200">
                    <tr>
                      <th scope="col" class="px-6! py-3! font-medium">
                        Stand Up
                      </th>
                      <th scope="col" class="px-6! py-3! font-medium">
                        Folded (w/0 wheels)
                      </th>
                      <th scope="col" class="px-6! py-3! font-medium">
                        Folded (w/ wheels)
                      </th>
                      <th scope="col" class="px-6! py-3! font-medium">
                        Door Pass Through
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-neutral-primary border-b border-gray-200">
                      <td class="px-6! py-4! font-medium">
                        35"L X 24"W X 37-45"H(front to back wheel)
                      </td>
                      <td class="px-6! py-4! font-medium">
                        32.5"L X 18.5"W X 16.5"H
                      </td>
                      <td class="px-6! py-4! font-medium">
                        35"L X 24"W X 18.5"H
                      </td>
                      <td class="px-6! py-4! font-medium">24</td>
                    </tr>
                    <tr class="bg-neutral-primary border-b border-gray-200">
                      <td class="px-6! py-4! font-medium">
                        35"L X 24"W X 37-45"H(front to back wheel)
                      </td>
                      <td class="px-6! py-4! font-medium">
                        32.5"L X 18.5"W X 16.5"H
                      </td>
                      <td class="px-6! py-4! font-medium">
                        35"L X 24"W X 18.5"H
                      </td>
                      <td class="px-6! py-4! font-medium">24</td>
                    </tr>
                    <tr class="bg-neutral-primary border-b border-gray-200">
                      <td class="px-6! py-4! font-medium">
                        35"L X 24"W X 37-45"H(front to back wheel)
                      </td>
                      <td class="px-6! py-4! font-medium">
                        32.5"L X 18.5"W X 16.5"H
                      </td>
                      <td class="px-6! py-4! font-medium">
                        35"L X 24"W X 18.5"H
                      </td>
                      <td class="px-6! py-4! font-medium">24</td>
                    </tr>
                    <tr class="bg-neutral-primary border-b border-gray-200">
                      <td class="px-6! py-4! font-medium">
                        35"L X 24"W X 37-45"H(front to back wheel)
                      </td>
                      <td class="px-6! py-4! font-medium">
                        32.5"L X 18.5"W X 16.5"H
                      </td>
                      <td class="px-6! py-4! font-medium">
                        35"L X 24"W X 18.5"H
                      </td>
                      <td class="px-6! py-4! font-medium">24</td>
                    </tr>
                    <tr class="bg-neutral-primary border-b border-gray-200">
                      <td class="px-6! py-4! font-medium">
                        35"L X 24"W X 37-45"H(front to back wheel)
                      </td>
                      <td class="px-6! py-4! font-medium">
                        32.5"L X 18.5"W X 16.5"H
                      </td>
                      <td class="px-6! py-4! font-medium">
                        35"L X 24"W X 18.5"H
                      </td>
                      <td class="px-6! py-4! font-medium">24</td>
                    </tr>
                    <tr class="bg-neutral-primary border-b border-gray-200">
                      <td class="px-6! py-4! font-medium">
                        35"L X 24"W X 37-45"H(front to back wheel)
                      </td>
                      <td class="px-6! py-4! font-medium">
                        32.5"L X 18.5"W X 16.5"H
                      </td>
                      <td class="px-6! py-4! font-medium">
                        35"L X 24"W X 18.5"H
                      </td>
                      <td class="px-6! py-4! font-medium">24</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div className="shadow-md w-[80%] py-5! px-8! rounded-md">
              <div className="w-full productReviewsContainer">
                <h2 className="text-[18px]">Customer Questions & Answers</h2>

                <div className="reviewScroll w-full max-h-75! overflow-y-scroll overflow-x-hidden mt-5! pr-5!">
                  <div className="review pt-5! pb-5! border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-20 h-20 rounded-full overflow-hidden">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMCRjnT3Wmsz5JXfYyQlcR8-r4bAUbQZMCIPRgtUfnZw&s=10"
                          className="w-full"
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Manzoor</h4>
                        <h5 className="text-[13px] mb-0!">2026-08-25</h5>
                        <p className="mb-0! mt-0!">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since 1966, when
                          designers at Letraset and James
                        </p>
                      </div>
                    </div>
                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>

                  <div className="review pt-5! pb-5! border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-20 h-20 rounded-full overflow-hidden">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMCRjnT3Wmsz5JXfYyQlcR8-r4bAUbQZMCIPRgtUfnZw&s=10"
                          className="w-full"
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Manzoor</h4>
                        <h5 className="text-[13px] mb-0!">2026-08-25</h5>
                        <p className="mb-0! mt-0!">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since 1966, when
                          designers at Letraset and James
                        </p>
                      </div>
                    </div>
                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>
                  <div className="review pt-5! pb-5! border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-20 h-20 rounded-full overflow-hidden">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMCRjnT3Wmsz5JXfYyQlcR8-r4bAUbQZMCIPRgtUfnZw&s=10"
                          className="w-full"
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Manzoor</h4>
                        <h5 className="text-[13px] mb-0!">2026-08-25</h5>
                        <p className="mb-0! mt-0!">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since 1966, when
                          designers at Letraset and James
                        </p>
                      </div>
                    </div>
                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>
                  <div className="review pt-5! pb-5! border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-20 h-20 rounded-full overflow-hidden">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMCRjnT3Wmsz5JXfYyQlcR8-r4bAUbQZMCIPRgtUfnZw&s=10"
                          className="w-full"
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Manzoor</h4>
                        <h5 className="text-[13px] mb-0!">2026-08-25</h5>
                        <p className="mb-0! mt-0!">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since 1966, when
                          designers at Letraset and James
                        </p>
                      </div>
                    </div>
                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>
                  <div className="review pt-5! pb-5! border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-20 h-20 rounded-full overflow-hidden">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMCRjnT3Wmsz5JXfYyQlcR8-r4bAUbQZMCIPRgtUfnZw&s=10"
                          className="w-full"
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Manzoor</h4>
                        <h5 className="text-[13px] mb-0!">2026-08-25</h5>
                        <p className="mb-0! mt-0!">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since 1966, when
                          designers at Letraset and James
                        </p>
                      </div>
                    </div>
                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>
                </div>

                <br />

                <div className="reviewForm bg-[#fafafa] p-4! rounded-md">
                  <h2 className="text-[18px]">Add a Review</h2>
                  <form className="w-full mt-5!">
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Write a review..."
                      multiline
                      className="w-full"
                      rows={4}
                    />

                    <br />
                    <br />
                    <Rating name="size-small" defaultValue={4} size="small" />

                    <div className="flex items-center mt-5!">
                      <Button className="btn-org">Submit review</Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="container pt-8!">
          <h2 className="text-[20px] font-semibold pb-0!">Related Products</h2>
          <ProductsSlider items={6} />
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
