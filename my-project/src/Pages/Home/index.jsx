import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import { TbTruckDelivery } from "react-icons/tb";
import HomeCatSlider from "../../components/HomeCatSlider";
import HomeSlider from "../../components/HomeSlider";
import AdsBannerSlider from "../../components/AdaBannerSlider";
import AdaBannerSliderV2 from "../../components/AdaBannerSliderV2";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import ProductsSlider from "../../components/ProductsSlider";
import BlogItem from "../../components/BlogItem";
import HomeBannerV2 from "../../components/HomeSliderV2";
import BannerBoxV2 from "../../components/BannerBoxV2";

const Home = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <HomeSlider />

      <section className="py-6!">
        <div className="container flex gap-5">
          <div className="part1 w-[70%]">
            <HomeBannerV2 />
          </div>

          <div className="part2 w-[30%] flex justify-between flex-col gap-5">
            <BannerBoxV2
              info="left"
              img={
                "https://images.pexels.com/photos/8728243/pexels-photo-8728243.jpeg"
              }
            />
            <BannerBoxV2
              info="right"
              img={
                "https://media.istockphoto.com/id/1133462643/photo/wooden-chair-isolated-on-a-pastel-blue-background.jpg?b=1&s=612x612&w=0&k=20&c=gUa8wOQH8U3kNcoxIM3jcoIBTxh3NGgvihXnDrXzEmw="
              }
            />
          </div>
        </div>
      </section>

      <HomeCatSlider />

      <section className="bg-white py-8">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="leftSec">
              <h2 className="text-[20px] font-[600]">Popuplar Products</h2>
              <p className="text-[14px] font-[500]">
                Do not miss the current offer untill the end of March
              </p>
            </div>

            <div className="rightSec w-[60%]">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Fashion" />
                <Tab label="Electronics" />
                <Tab label="Bags" />
                <Tab label="FootWear" />
                <Tab label="Groceries" />
                <Tab label="Beauty" />
                <Tab label="Welness" />
                <Tab label="Jewellery" />
              </Tabs>
            </div>
          </div>

          <ProductsSlider items={6} />
        </div>
      </section>

      <section className="py-4! pt-2 bg-white">
        <div className="container">
          <div className="freeShiping w-[80%]! m-auto! py-4! p-4! border-2 border-primary flex items-center justify-between rounded-md mb-8!">
            <div className="col1 flex items-center gap-4">
              <TbTruckDelivery className="text-[50px]" />
              <span className="text-[20px] font-semibold uppercase">
                Free Shipping
              </span>
            </div>

            <div className="col2">
              <p className="mb-0 font-medium">
                Free Delivery Now on your First order and over $200
              </p>
            </div>

            <p className="font-bold text-[25px]">Only $200*</p>
          </div>

          <AdaBannerSliderV2 items={4} />
        </div>
      </section>

      <section className="py-5 pt-0 bg-white">
        <div className="container">
          <h2 className="text-[20px] font-semibold">Latest Products</h2>
          <ProductsSlider items={6} />
          <AdsBannerSlider items={4} />
        </div>
      </section>

      <section className="py-5 pt-0 bg-white">
        <div className="container">
          <h2 className="text-[20px] font-semibold">Featured Products</h2>
          <ProductsSlider items={6} />
          <AdsBannerSlider items={3} />
        </div>
      </section>

      <section className="py-5 pb-8 pt-0 bg-white blogSection">
        <div className="container">
          <h2 className="text-[20px] font-[600] !mb-4">From The Blog</h2>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            className="homeCatSlider"
          >
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Home;
