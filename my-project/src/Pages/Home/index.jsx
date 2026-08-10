import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import AdsBannerSlider from "../../components/AdaBannerSlider";
import HomeCatSlider from "../../components/HomeCatSlider";
import HomeSlider from "../../components/HomeSlider";
import { TbTruckDelivery } from "react-icons/tb";



import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import ProductsSlider from "../../components/ProductsSlider";
import BlogItem from "../../components/BlogItem";
import Footer from "../../components/Footer";

const Home = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <HomeSlider />
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

      <section className="!py-4 pt-2 bg-white">
        <div className="container">
          <div className="freeShiping !w-[80%] !m-auto !py-4 !p-4 border-2 border-[#ff5252] flex items-center justify-between rounded-md !mb-8">
            <div className="col1 flex items-center gap-4">
              <TbTruckDelivery className="text-[50px]" />
              <span className="text-[20px] font-[600] uppercase">
                Free Shipping
              </span>
            </div>

            <div className="col2">
              <p className="mb-0 font-[500]">
                Free Delivery Now on your First order and over $200
              </p>
            </div>

            <p className="font-bold text-[25px]">-Only $200*</p>
          </div>

          <AdsBannerSlider items={4} />
        </div>
      </section>

      <section className="py-5 pt-0 bg-white">
        <div className="container">
          <h2 className="text-[20px] font-[600]">Latest Products</h2>
          <ProductsSlider items={6} />
          <AdsBannerSlider items={4} />
        </div>
      </section>

      <section className="py-5 pt-0 bg-white">
        <div className="container">
          <h2 className="text-[20px] font-[600]">Featured Products</h2>
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

      <Footer />
      
    </>
  );
};

export default Home;
