"use client";
import { memo } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "@nextui-org/link";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const FirstLook = () => {
  return (
    <div className="absolute top-0 w-full h-screen flex flex-wrap">
      <h1 className="z-[9] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] labtop:text-[40px] tablet:text-[40px] mobile:text-[24px] font-semibold text-center">
        Discover New Places and Create Unforgettable Memories
      </h1>
      <Swiper
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          860: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <div className="flex items-end justify-center p-6 h-full bg-cover bg-center imageOne">
            <div className="w-full">
              <Link className="text-[26px] flex cursor-pointer text-white font-medium">
                Why you should reconsider The Inca Trail, Peru Trip
                <FaArrowRight size={60} />
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-end justify-center p-6 h-full bg-cover bg-center imageTwo">
            <div className="w-full">
              <Link className="text-[26px] flex cursor-pointer text-white font-medium">
                The Hidden Powers of The Northern Lights, Iceland
                <FaArrowRight size={60} />
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-end justify-center p-6 h-full bg-cover bg-center imageTHREE">
            <div className="w-full">
              <Link className="text-[26px] flex cursor-pointer text-white font-medium">
                10 Facts you didn’t know about The Blue Hole, Belize
                <FaArrowRight size={60} />
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default memo(FirstLook);
