import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";
import banner1 from "../../assets/images/HomeSlider/banner1.jfif";
import banner2 from "../../assets/images/HomeSlider/banner2.jfif";
import banner3 from "../../assets/images/HomeSlider/banner3.jfif";
import banner4 from "../../assets/images/HomeSlider/banner4.jfif";
import banner5 from "../../assets/images/HomeSlider/banner5.jfif";
import banner6 from "../../assets/images/HomeSlider/banner6.jfif";
import banner7 from "../../assets/images/HomeSlider/banner7.jfif";
import banner8 from "../../assets/images/HomeSlider/banner8.jpg";
import banner9 from "../../assets/images/HomeSlider/banner9.jpg";
import banner10 from "../../assets/images/HomeSlider/banner10.jpg";

const banners = [
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
  banner7,
  banner8,
  banner9,
  banner10,
];
const HomeSlider = () => {
  return (
    <div className="HomeSlider py-4!">
      <div className="container">
        <Swiper
          spaceBetween={10}
          loop={true}
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="sliderHome"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img src={banner1} alt="Banner slide" className="w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img src={banner2} alt="Banner slide" className="w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img src={banner3} alt="Banner slide" className="w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img src={banner4} alt="Banner slide" className="w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img src={banner5} alt="Banner slide" className="w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img src={banner6} alt="Banner slide" className="w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img src={banner7} alt="Banner slide" className="w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img src={banner8} alt="Banner slide" className="w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img src={banner9} alt="Banner slide" className="w-full" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;
