import InnerImageZoomComponent from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";
import Rating from "@mui/material/Rating";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { Navigation } from "swiper/modules";
import { useRef, useState } from "react";

const InnerImageZoom =
  InnerImageZoomComponent.default || InnerImageZoomComponent;

const ProductZoom = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const zoomSliderSml = useRef();
  const zoomSliderBig = useRef();

  const goto = (index) => {
    setSlideIndex(index);
    zoomSliderBig.current?.swiper.slideTo(index);
    zoomSliderSml.current?.swiper.slideTo(index);
  };
  return (
    <>
      <div className="flex gap-3!">
        <div className="w-[15%]">
          <Swiper
            ref={zoomSliderSml}
            direction="vertical"
            slidesPerView={4}
            spaceBetween={0}
            navigation={true}
            modules={[Navigation]}
            className="homeCatSlider zoomProductSliderThumbs h-125 overflow-hidden"
          >
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 0 ? "opacity-100" : "opacity-30"}`}
                onClick={() => goto(0)}
              >
                <img
                  src="https://images.pexels.com/photos/9939536/pexels-photo-9939536.jpeg"
                  alt="product-slider"
                  className="w-full group-hover:scale-105 transition-all duration-300"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 1 ? "opacity-100" : "opacity-30"}`}
                onClick={() => goto(1)}
              >
                <img
                  src="https://images.pexels.com/photos/17076311/pexels-photo-17076311.jpeg"
                  alt="product-slider"
                  className="w-full group-hover:scale-105 transition-all duration-300"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 2 ? "opacity-100" : "opacity-30"}`}
                onClick={() => goto(2)}
              >
                <img
                  src="https://images.pexels.com/photos/7901865/pexels-photo-7901865.jpeg"
                  alt="product-slider"
                  className="w-full group-hover:scale-105 transition-all duration-300"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 3 ? "opacity-100" : "opacity-30"}`}
                onClick={() => goto(3)}
              >
                <img
                  src="https://images.pexels.com/photos/15291697/pexels-photo-15291697.jpeg"
                  alt="product-slider"
                  className="w-full group-hover:scale-105 transition-all duration-300"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 4 ? "opacity-100" : "opacity-30"}`}
                onClick={() => goto(4)}
              >
                <img
                  src="https://images.pexels.com/photos/15776441/pexels-photo-15776441.jpeg"
                  alt="product-slider"
                  className="w-full group-hover:scale-105 transition-all duration-300"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 5 ? "opacity-100" : "opacity-30"}`}
                onClick={() => goto(5)}
              >
                <img
                  src="https://images.pexels.com/photos/9939536/pexels-photo-9939536.jpeg"
                  alt="product-slider"
                  className="w-full group-hover:scale-105 transition-all duration-300"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide></SwiperSlide>
          </Swiper>
        </div>

        <div className="zoomContainer w-[85%] h-125 overflow-hidden">
          <Swiper
            ref={zoomSliderBig}
            slidesPerView={1}
            spaceBetween={0}
            navigation={false}
          >
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={
                  "https://images.pexels.com/photos/9939536/pexels-photo-9939536.jpeg"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={
                  "https://images.pexels.com/photos/17076311/pexels-photo-17076311.jpeg"
                }
              />
            </SwiperSlide>{" "}
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={
                  "https://images.pexels.com/photos/7901865/pexels-photo-7901865.jpeg"
                }
              />
            </SwiperSlide>{" "}
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={
                  "https://images.pexels.com/photos/15291697/pexels-photo-15291697.jpeg"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={
                  "https://images.pexels.com/photos/15776441/pexels-photo-15776441.jpeg"
                }
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ProductZoom;
