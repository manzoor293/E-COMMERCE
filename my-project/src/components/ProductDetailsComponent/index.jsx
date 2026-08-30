import QtyBox from "../../components/QtyBox";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import Button from "@mui/material/Button";

const ProductDetailsComponent = () => {
  const [productActionIndex, setProductActionIndex] = useState(null);

  return (
    <>
      <h1 className="text-[24px] font-semibold mb-2!">
        Siril Poly Silk White & Beige Color Saree with Blouse Piece | sarees for
        Women | Saree | Sarees
      </h1>
      <div className="flex items-center gap-3">
        <span className="text-gray-400 text-[13px]">Brand:</span>
        <span className="text-black font-medium opacity-75">
          House of Chikankari
        </span>
        <Rating name="size-small" defaultValue={4} size="small" readOnly />
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
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since 1966, when designers at Letraset and James Mosley, the librarian
        at St Bride Printing Library in London, took a 1914 Cicero translation
        and scrambled it to make dummy text for Letraset's Body Type sheets
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
    </>
  );
};

export default ProductDetailsComponent;
