import AdsBannerSlider from "../../components/AdaBannerSlider";
import HomeCatSlider from "../../components/HomeCatSlider";
import HomeSlider from "../../components/HomeSlider";
import { TbTruckDelivery } from "react-icons/tb";


const Home = () => {
  return (
    <>
      <HomeSlider />
      <HomeCatSlider />
      <section className="!py-16 bg-white">
        <div className="container">
          <div className="freeShiping !w-[80%] !m-auto !py-4 !p-4 border-2 border-[#ff5252] flex items-center justify-between rounded-md !mb-8">
            <div className="col1 flex items-center gap-4">
                <TbTruckDelivery  className="text-[50px]"/>
                <span className="text-[20px] font-[600] uppercase">Free Shipping</span>
            </div>

            <div className="col2">
              <p className="mb-0 font-[500]">Free Delivery Now on your First order and over $200</p>
            </div>

            <p className="font-bold text-[25px]">-Only $200*</p>
          </div>

          <AdsBannerSlider items={4}/>

        </div>

      </section>
      
    </>
  );
};

export default Home;
