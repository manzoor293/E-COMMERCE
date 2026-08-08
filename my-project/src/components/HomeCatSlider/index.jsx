import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import fashion1 from "../../assets/images/HomeCatSlider/homeCat1.jpg";
import fashion2 from "../../assets/images/HomeCatSlider/homeCat2.jpg";
import fashion3 from "../../assets/images/HomeCatSlider/homeCat3.jpg";
import fashion4 from "../../assets/images/HomeCatSlider/homeCat4.jpg";
// import fashion5 from "../../assets/images/HomeCatSlider/fashion5.png"
// import fashion6 from "../../assets/images/HomeCatSlider/fashion6.png"
// import fashion7 from "../../assets/images/HomeCatSlider/fashion7.png"
// import fashion8 from "../../assets/images/HomeCatSlider/fashion8.png"
// import fashion9 from "../../assets/images/HomeCatSlider/fashion9.png"
// import fashion10 from "../../assets/images/HomeCatSlider/fashion10.png"

const fashions = [fashion1, fashion2, fashion3, fashion4];

const HomeCatSlider = () => {
  return (
    <div className="homeCatSlider !py-8  !pt-4">
      <div className="container">
        <Swiper
          slidesPerView={8}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to="/">
              <div className="item !py-3 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img src={fashion1} alt="Fashion" className="!w-[150px]" />
                <h3 className="!text-[15px] font-[500] !mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item !py-3 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img src={fashion2} alt="Fashion" className="!w-[150px]" />
                <h3 className="!text-[15px] font-[500] !mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item !py-3 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img src={fashion3} alt="Fashion" className="!w-[150px]" />
                <h3 className="!text-[15px] font-[500] !mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item !py-3 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img src={fashion4} alt="Fashion" className="!w-[150px]" />
                <h3 className="!text-[15px] font-[500] !mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item !py-3 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img src={fashion4} alt="Fashion" className="!w-[150px]" />
                <h3 className="!text-[15px] font-[500] !mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item !py-3 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img src={fashion4} alt="Fashion" className="!w-[150px]" />
                <h3 className="!text-[15px] font-[500] !mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item !py-3 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img src={fashion4} alt="Fashion" className="!w-[150px]" />
                <h3 className="!text-[15px] font-[500] !mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item !py-3 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img src={fashion4} alt="Fashion" className="!w-[150px]" />
                <h3 className="!text-[15px] font-[500] !mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item !py-3 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img src={fashion4} alt="Fashion" className="!w-[150px]" />
                <h3 className="!text-[15px] font-[500] !mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item !py-3 !px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img src={fashion4} alt="Fashion" className="!w-[150px]" />
                <h3 className="!text-[15px] font-[500] !mt-3">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCatSlider;
