import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useState } from "react";
import Rating from "@mui/material/Rating";
import UploadBox from "../../Components/UploadBox";

import { IoMdClose } from "react-icons/io";
import { FaCloudUploadAlt } from "react-icons/fa";

// React LazyLoad image
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Button from "@mui/material/Button";

const AddProduct = () => {
  const [productCat, setProductCat] = useState("");
  const [productSubCat, setProductSubCat] = useState("");
  const [productFeatured, setProductFeatured] = useState("");
  const [productRams, setProductRams] = useState("");

  const [productWeight, setProductWeight] = useState("");
  const [productSize, setProductSize] = useState("");

  const handleChangeProductCat = (event) => {
    setProductCat(event.target.value);
  };
  const handleChangeProductSubCat = (event) => {
    setProductSubCat(event.target.value);
  };

  const handleChangeProductFeatured = (event) => {
    setProductFeatured(event.target.value);
  };
  const handleChangeProductRams = (event) => {
    setProductRams(event.target.value);
  };
  const handleChangeProductWeight = (event) => {
    setProductWeight(event.target.value);
  };
  const handleChangeProductSize = (event) => {
    setProductSize(event.target.value);
  };
  return (
    <section className="p-5 bg-gray-50">
      <form className="form py-3 p-8">
        <div className="scroll max-h-[72vh] overflow-y-scroll pr-4">
          <div className="grid grid-cols-1 mb-3">
            <div className="col">
              <h2 className="text-[14px] font-bold mb-1 text-black">
                Product Name
              </h2>
              <input
                type="text"
                id="productName"
                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)]focus:outline-none focus:border-[rgba(0,0,0,0.4)] focus:ring-0 rounded-md p-3 text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 mb-3">
            <div className="col">
              <h2 className="text-[14px] font-bold mb-1 text-black">
                Product Description
              </h2>
              <textarea
                type="text"
                id="productDescription"
                className="w-full h-[140px] border border-[rgba(0,0,0,0.2)]focus:outline-none focus:border-[rgba(0,0,0,0.4)] focus:ring-0 rounded-md p-3 text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-4 mb-3 gap-4">
            <div className="col">
              <h2 className="text-[14px] font-bold mb-1 text-black">
                Product Category
              </h2>
              <Select
                labelId="demo-simple-select-label"
                id="productCatDropdown"
                className="w-full"
                value={productCat}
                size="small"
                label="Product Category"
                onChange={handleChangeProductCat}
              >
                <MenuItem value={null}>none</MenuItem>

                <MenuItem value={10}>Fashion</MenuItem>
                <MenuItem value={20}>Beauty</MenuItem>
                <MenuItem value={30}>Wellness</MenuItem>
              </Select>
            </div>

            <div className="col">
              <h2 className="text-[14px] font-bold mb-1 text-black">
                Product Sub_Category
              </h2>
              <Select
                labelId="demo-simple-select-label"
                id="productSubCatDropdown"
                className="w-full"
                value={productSubCat}
                size="small"
                label="Product Sub Category"
                onChange={handleChangeProductSubCat}
              >
                <MenuItem value={null}>none</MenuItem>
                <MenuItem value={10}>Men</MenuItem>
                <MenuItem value={20}>Women</MenuItem>
                <MenuItem value={30}>Kids</MenuItem>
              </Select>
            </div>

            <div className="col">
              <h2 className="text-[14px] font-bold mb-1 text-black">
                Product Price
              </h2>
              <input
                type="number"
                step="0.01"
                id="productPrice"
                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)]focus:outline-none focus:border-[rgba(0,0,0,0.4)] focus:ring-0 rounded-md p-3 text-sm"
              />
            </div>

            <div className="col">
              <h2 className="text-[14px] font-bold mb-1 text-black">
                Product Old Price
              </h2>
              <input
                type="number"
                step="0.01"
                id="productOldPrice"
                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)]focus:outline-none focus:border-[rgba(0,0,0,0.4)] focus:ring-0 rounded-md p-3 text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-4 mb-3 gap-4">
            <div className="col">
              <h2 className="text-[14px] font-bold mb-1 text-black">
                Is Featured?
              </h2>
              <Select
                labelId="demo-simple-select-label"
                id="productFeaturedDropdown"
                className="w-full"
                value={productFeatured}
                size="small"
                label="Is Featured?"
                onChange={handleChangeProductFeatured}
              >
                <MenuItem value={10}>True</MenuItem>
                <MenuItem value={20}>False</MenuItem>
              </Select>
            </div>

            <div className="col">
              <h2 className="text-[14px] font-bold mb-1 text-black">
                Product Stock
              </h2>
              <input
                type="number"
                step="0.01"
                id="productStock"
                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)]focus:outline-none focus:border-[rgba(0,0,0,0.4)] focus:ring-0 rounded-md p-3 text-sm"
              />
            </div>

            <div className="col">
              <h2 className="text-[14px] font-bold mb-1 text-black">
                Product Brand
              </h2>
              <input
                type="text"
                step="0.01"
                id="productBrand"
                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)]focus:outline-none focus:border-[rgba(0,0,0,0.4)] focus:ring-0 rounded-md p-3 text-sm"
              />
            </div>

            <div className="col">
              <h2 className="text-[14px] font-bold mb-1 text-black">
                Product Discount
              </h2>
              <input
                type="number"
                step="0.01"
                id="productPrice"
                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)]focus:outline-none focus:border-[rgba(0,0,0,0.4)] focus:ring-0 rounded-md p-3 text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-4 mb-3 gap-4">
            <div className="col">
              <h2 className="text-[14px] font-bold mb-1 text-black">
                Product Rams
              </h2>
              <Select
                labelId="demo-simple-select-label"
                id="productRamsDropdown"
                className="w-full"
                value={productRams}
                size="small"
                label="Product Rams"
                onChange={handleChangeProductRams}
              >
                <MenuItem value={"4 GB"}>4 GB</MenuItem>
                <MenuItem value={"8 GB"}>8 GB</MenuItem>
                <MenuItem value={"16 GB"}>16 GB</MenuItem>
              </Select>
            </div>

            <div className="col">
              <h2 className="text-[14px] font-bold mb-1 text-black">
                Product Weight
              </h2>
              <Select
                labelId="demo-simple-select-label"
                id="productWeightDropdown"
                className="w-full"
                value={productWeight}
                size="small"
                label="Product Weight"
                onChange={handleChangeProductWeight}
              >
                <MenuItem value={""}>none</MenuItem>
                <MenuItem value={10}>2 kg</MenuItem>
                <MenuItem value={20}>4 kg</MenuItem>
                <MenuItem value={30}>5 kg</MenuItem>
              </Select>
            </div>

            <div className="col">
              <h2 className="text-[14px] font-bold mb-1 text-black">
                Product Size
              </h2>
              <Select
                labelId="demo-simple-select-label"
                id="productSizeDropdown"
                className="w-full"
                value={productSize}
                size="small"
                label="Product Size"
                onChange={handleChangeProductSize}
              >
                <MenuItem value={""}>none</MenuItem>
                <MenuItem value={"S"}>S</MenuItem>
                <MenuItem value={"M"}>M</MenuItem>
                <MenuItem value={"L"}>L</MenuItem>
              </Select>
            </div>

            <div className="col">
              <h2 className="text-[14px] font-bold mb-1 text-black">
                Product Rating
              </h2>
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            </div>
          </div>

          <div className="col p-5 px-0">
            <h3 className="font-semibold text-[18px] mb-3">Media & Images</h3>

            <div className="grid grid-cols-7 gap-4 ">
              <div className="uploadBoxWrapper relative">
                <span
                  className="absolute w-5 h-5 -top-1.5 -right-1.5 z-50 rounded-full
               overflow-hidden bg-red-700 flex items-center justify-center cursor-pointer"
                >
                  <IoMdClose className="text-white text-[17px]" />
                </span>
                <div className="uploadBox p-0 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] bg-gray-100 w-full h-[150px] hover:bg-gray-200 cursor-pointer flex items-center justify-center flex-col relative">
                  <LazyLoadImage
                    alt={"image"}
                    className="w-full h-full"
                    effect="blur"
                    wrapperProps={{
                      style: { transitionDelay: "1s" },
                    }}
                    src={
                      "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/15.webp"
                    }
                  />
                </div>
              </div>

              <div className="uploadBoxWrapper relative">
                <span
                  className="absolute w-5 h-5 -top-1.5 -right-1.5 z-50 rounded-full
               overflow-hidden bg-red-700 flex items-center justify-center cursor-pointer"
                >
                  <IoMdClose className="text-white text-[17px]" />
                </span>
                <div className="uploadBox p-0 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] bg-gray-100 w-full h-[150px] hover:bg-gray-200 cursor-pointer flex items-center justify-center flex-col relative">
                  <LazyLoadImage
                    alt={"image"}
                    className="w-full h-full"
                    effect="blur"
                    wrapperProps={{
                      style: { transitionDelay: "1s" },
                    }}
                    src={
                      "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/15.webp"
                    }
                  />
                </div>
              </div>

              <div className="uploadBoxWrapper relative">
                <span
                  className="absolute w-5 h-5 -top-1.5 -right-1.5 z-50 rounded-full
               overflow-hidden bg-red-700 flex items-center justify-center cursor-pointer"
                >
                  <IoMdClose className="text-white text-[17px]" />
                </span>
                <div className="uploadBox p-0 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] bg-gray-100 w-full h-[150px] hover:bg-gray-200 cursor-pointer flex items-center justify-center flex-col relative">
                  <LazyLoadImage
                    alt={"image"}
                    className="w-full h-full"
                    effect="blur"
                    wrapperProps={{
                      style: { transitionDelay: "1s" },
                    }}
                    src={
                      "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/15.webp"
                    }
                  />
                </div>
              </div>

              <div className="uploadBoxWrapper relative">
                <span
                  className="absolute w-5 h-5 -top-1.5 -right-1.5 z-50 rounded-full
               overflow-hidden bg-red-700 flex items-center justify-center cursor-pointer"
                >
                  <IoMdClose className="text-white text-[17px]" />
                </span>
                <div className="uploadBox p-0 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] bg-gray-100 w-full h-[150px] hover:bg-gray-200 cursor-pointer flex items-center justify-center flex-col relative">
                  <LazyLoadImage
                    alt={"image"}
                    className="w-full h-full"
                    effect="blur"
                    wrapperProps={{
                      style: { transitionDelay: "1s" },
                    }}
                    src={
                      "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/15.webp"
                    }
                  />
                </div>
              </div>

              <div className="uploadBoxWrapper relative">
                <span
                  className="absolute w-5 h-5 -top-1.5 -right-1.5 z-50 rounded-full
               overflow-hidden bg-red-700 flex items-center justify-center cursor-pointer"
                >
                  <IoMdClose className="text-white text-[17px]" />
                </span>
                <div className="uploadBox p-0 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] bg-gray-100 w-full h-[150px] hover:bg-gray-200 cursor-pointer flex items-center justify-center flex-col relative">
                  <LazyLoadImage
                    alt={"image"}
                    className="w-full h-full"
                    effect="blur"
                    wrapperProps={{
                      style: { transitionDelay: "1s" },
                    }}
                    src={
                      "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/15.webp"
                    }
                  />
                </div>
              </div>

              <div className="uploadBoxWrapper relative">
                <span
                  className="absolute w-5 h-5 -top-1.5 -right-1.5 z-50 rounded-full
               overflow-hidden bg-red-700 flex items-center justify-center cursor-pointer"
                >
                  <IoMdClose className="text-white text-[17px]" />
                </span>
                <div className="uploadBox p-0 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] bg-gray-100 w-full h-[150px] hover:bg-gray-200 cursor-pointer flex items-center justify-center flex-col relative">
                  <LazyLoadImage
                    alt={"image"}
                    className="w-full h-full"
                    effect="blur"
                    wrapperProps={{
                      style: { transitionDelay: "1s" },
                    }}
                    src={
                      "https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/15.webp"
                    }
                  />
                </div>
              </div>

              <UploadBox multiple={true} />
            </div>
          </div>
        </div>

        <hr />
        <br />

        <Button type="submit" className="btn-blue btn-lg w-full flex gap-2">
          <FaCloudUploadAlt className="text-[25px] text-white" />
          Publish and View
        </Button>
      </form>
    </section>
  );
};
export default AddProduct;
