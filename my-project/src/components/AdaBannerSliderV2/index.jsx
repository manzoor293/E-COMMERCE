import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import BannerBoxV2 from "../BannerBoxV2";

const AdsBannerSlider = (props) => {
  return (
    <div className="!py-5 !w-full">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="homeCatSlider"
      >
        <SwiperSlide>
          <BannerBoxV2 info="left" img={'https://images.pexels.com/photos/8728243/pexels-photo-8728243.jpeg'} link={"/"} />
        </SwiperSlide>

        <SwiperSlide>
          <BannerBoxV2 info='right' img={'https://media.istockphoto.com/id/1133462643/photo/wooden-chair-isolated-on-a-pastel-blue-background.jpg?b=1&s=612x612&w=0&k=20&c=gUa8wOQH8U3kNcoxIM3jcoIBTxh3NGgvihXnDrXzEmw='} link={"/"} />
        </SwiperSlide>

        <SwiperSlide>
          <BannerBoxV2 info="left" img={'https://images.pexels.com/photos/8728243/pexels-photo-8728243.jpeg'} link={"/"} />
        </SwiperSlide>

        <SwiperSlide>
          <BannerBoxV2 info="left" img={'https://images.pexels.com/photos/8728243/pexels-photo-8728243.jpeg'} link={"/"} />
        </SwiperSlide>

        <SwiperSlide>
          <BannerBoxV2 info="left" img={'https://images.pexels.com/photos/8728243/pexels-photo-8728243.jpeg'} link={"/"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default AdsBannerSlider;
