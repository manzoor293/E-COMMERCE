import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectFade, Navigation, Pagination ,Autoplay} from 'swiper/modules';
import Button from '@mui/material/Button';


const HomeBannerV2 = ()=>{
  return(
    <Swiper
        spaceBetween={30}
        effect={'fade'}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
         autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[EffectFade, Navigation, Pagination,Autoplay]}
        className="sliderHome"
      >
        <SwiperSlide>
          <div className="item relative">
              <img src="https://media.istockphoto.com/id/2169681152/photo/photo-of-optimistic-cute-positive-girl-with-bob-hairdo-dressed-green-t-shirt-writing-post-on.jpg?b=1&s=612x612&w=0&k=20&c=K4oHj5du2qJexVRLd1uG2EuOBjZbyGTGQVAkVJR9SUw=" className="w-full h-125 object-cover rounded-[20px]" />

             <div className="info absolute top-0 -right-[100%] opacity-0 z-50 w-[50%] h-[100%] p-8! flex items-center justify-center flex-col transition-all duration-700">
                <h4 className='text-[18px] font-[500] w-full text-left mb-5! relative -right-[100%] opacity-0'>Big Saving Days Sales</h4>
                <h2 className='text-[35px] font-[700] w-full relative -right-[100%] opacity-0'>Woman solid Round Green T-Shirt</h2>

                <h3 className='flex items-center gap-3 text-[18px] font-[500] w-full text-left mt-3 mb-3 relative -right-[100%] opacity-0'>Starting At Only <span className='text-[30px] font-[700] text-primary'> $59.00</span></h3>

                <div className="w-full">
                  <Button className='btn-org relative -right-[100%] opacity-0'>Shop Now</Button>
                </div>
                
              </div>
          </div>
        </SwiperSlide>

        <SwiperSlide> 
          <div className="item relative">
          <img src="https://images.pexels.com/photos/6800556/pexels-photo-6800556.jpeg"className="w-full h-125 object-cover rounded-[20px]" /> 

           <div className="info absolute top-0 -right-[100%] opacity-0 z-50 w-[50%] h-[100%] p-8! flex items-center justify-center flex-col transition-all duration-700">
            <h4 className='text-[18px] font-[500] w-full text-left mb-5! relative -right-[100%] opacity-0'>Big Saving Days Sales</h4>
            <h2 className='text-[35px] font-[700] w-full relative -right-[100%] opacity-0'>Buy Modern Chair In Philippine Silver Color</h2>

            <h3 className='flex items-center gap-3 text-[18px] font-[500] w-full text-left mt-3 mb-3 relative -right-[100%] opacity-0'>Starting At Only <span className='text-[30px] font-[700] text-primary'> $99.00</span></h3>

            <div className="w-full">
              <Button className='btn-org relative -right-[100%] opacity-0'>Shop Now</Button>
            </div>

          </div>
          </div>
        </SwiperSlide> 
      </Swiper>
  );
};
export default HomeBannerV2;