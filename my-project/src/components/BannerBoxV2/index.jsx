import { Link } from "react-router-dom";
import "./style.css";
const BannerBoxV2 = (props) => {
  return (
    <div className="bannerBoxV2 w-full h-[160px] sm:h-[200px] md:h-[240px] lg:h-[280px] overflow-hidden rounded-2xl group relative">
      <img
        src={props.img}
        alt=""
        className="w-full h-full object-cover transition-all duration-150 group-hover:scale-105"
      />

      <div
        className={`info absolute p-3! sm:p-5! top-0 ${props.info === "left" ? "left-0" : "right-0"} w-[75%] sm:w-[70%] h-[100%] z-50 flex items-center justify-center flex-col gap-1! sm:gap-2! ${props.info === "left" ? "" : "pl-6! sm:pl-10!"}`}
      >
        <h2 className="text-[14px] sm:text-[16px] md:text-[18px] font-[600] leading-tight">
          Samsung Gear VR Camera
        </h2>
        <span className="text-[16px] sm:text-[20px] md:text-[25px] font-[600] text-primary w-full">
          $129.00
        </span>
        <div className="w-full">
          <Link
            to="/"
            className="text-[13px] sm:text-[14px] md:text-[16px] font-[600] link"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerBoxV2;
