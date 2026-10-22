// React LazyLoad image
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { IoMdClose } from "react-icons/io";
import { FaCloudUploadAlt } from "react-icons/fa";
import Button from "@mui/material/Button";
import UploadBox from "../../Components/UploadBox";

const AddHomeSlide = () => {
  return (
    <section className="p-5 bg-gray-50">
      <form className="form py-3 p-8">
        <div className="scroll max-h-[72vh] overflow-y-scroll pr-4 pt-4">
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
        <div className="w-[250px]">
          <Button type="submit" className="btn-blue btn-lg w-full flex gap-2">
            <FaCloudUploadAlt className="text-[25px] text-white" />
            Publish and View
          </Button>
        </div>
      </form>
    </section>
  );
};
export default AddHomeSlide;
