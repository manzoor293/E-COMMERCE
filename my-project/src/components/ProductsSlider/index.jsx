import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import ProductItem from "../ProductItem";

const ProductsSlider = (props) => {
  return (
    <div className="productsSlider py-3!">
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="sliderHome"
        breakpoints={{
          320: { slidesPerView: 2 },
          576: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: props.items },
        }}
      >
        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>

        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default ProductsSlider;
