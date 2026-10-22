// React LazyLoad image
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { IoMdClose } from "react-icons/io";
import { FaCloudUploadAlt } from "react-icons/fa";
import Button from "@mui/material/Button";
import UploadBox from "../../Components/UploadBox";

const AddCategory = () => {
  return (
    <section className="p-5 bg-gray-50">
      <form className="form py-3 p-8">
        <div className="scroll max-h-[72vh] overflow-y-scroll pr-4 pt-4">
          <div className="grid grid-cols-1 mb-3">
            <div className="col w-[25%]">
              <h2 className="text-[14px] font-bold mb-1 text-black">
                Category Name
              </h2>
              <input
                type="text"
                id="productName"
                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)]focus:outline-none focus:border-[rgba(0,0,0,0.4)] focus:ring-0 rounded-md p-3 text-sm"
              />
            </div>
            <br />
            <h2 className="text-[18px] font-bold mb-1 text-black">
              Category Image
            </h2>
            <br />
          </div>
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

            <UploadBox multiple={true} />
          </div>
        </div>

        <br />

        <br />
        <div className="w-[25%]">
          <Button type="submit" className="btn-blue btn-lg w-full flex gap-2">
            <FaCloudUploadAlt className="text-[25px] text-white" />
            Publish and View
          </Button>
        </div>
      </form>
    </section>
  );
};
export default AddCategory;
