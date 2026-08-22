import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import ProductZoom from "../../components/ProductZoom";
import Rating from "@mui/material/Rating";

const ProductDetails = () => {
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
        <div className="container flex gap-8">
          <div className="productZoomContainer w-[40%]">
            <ProductZoom />
          </div>

          <div className="productZoomContent w-[60%]">
            <h1 className="text[22px] font-semibold mb-2!">
              Chikankari Woven Kurta
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
            </div>

            <br />

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since 1966, when designers at Letraset and James Mosley, the
              librarian at St Bride Printing Library in London, took a 1914
              Cicero translation and scrambled it to make dummy text for
              Letraset's Body Type sheets
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
