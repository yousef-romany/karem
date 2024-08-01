"use client";
import { memo, useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "@nextui-org/link";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";

import RevalHorezontail from "../animation/RevalHorezontail";
import { InView } from "react-intersection-observer";
import Image from "next/image";

const FirstLook = () => {
  return (
    <InView>
      {({ inView, ref, entry }) => (
        <div ref={ref} className="w-full h-fit flex flex-wrap">
          <div className="relative h-[90vh] w-full">
            <h1 className="z-[9] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <RevalHorezontail>
                <h1 className="labtop:text-[40px] tablet:text-[40px] text-secondary mobile:text-[30px] font-semibold text-center drop-shadow-xl">
                  UNVEIL THE TREASURES OF EGYPT {inView}
                </h1>
              </RevalHorezontail>
            </h1>
            <div className="relative w-full h-full flex justify-center items-center">
              <Swiper
                className="!w-full !h-full"
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
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                }}
                autoplay={{
                  delay: 3000,
                }}
                modules={[Pagination, Autoplay]}
              >
                <SwiperSlide>
                  <div className="flex items-end justify-center p-6 h-full bg-cover bg-center imageOne !object-contain !relative">
                    <div className="w-full h-full absolute top-0 left-0 z-[-1]">
                      <Image
                        className="!w-full h-auto"
                        src="https://res.cloudinary.com/dir8ao2mt/image/upload/v1718982794/columns-karnak-temple_bcbpbi.jpg"
                        loading="lazy"
                        quality={85}
                        layout="fill"
                        objectFit="cover"
                        alt="image"
                      />
                    </div>
                    <div className="w-full ">
                      <RevalHorezontail>
                        <Link className="text-[26px] flex cursor-pointer text-secondary font-medium max-w-[600px] gap-2">
                          Why you should reconsider The Inca Trail, Peru Trip
                          <FaArrowRight size={60} />
                        </Link>
                      </RevalHorezontail>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex items-end justify-center p-6 h-full bg-cover bg-center imageOne !object-contain !relative">
                    <div className="!w-full !h-full absolute top-0 left-0 z-[-1]">
                      <Image
                        src="https://res.cloudinary.com/dir8ao2mt/image/upload/v1718463521/samples/balloons.jpg"
                        loading="lazy"
                        quality={85}
                        layout="fill"
                        objectFit="cover"
                        alt="image"
                      />
                    </div>
                    <div className="w-full">
                      <RevalHorezontail>
                        <Link className="text-[26px] flex cursor-pointer text-secondary font-medium max-w-[600px] gap-2">
                          The Hidden Powers of The Northern Lights, Iceland
                          <FaArrowRight size={60} />
                        </Link>
                      </RevalHorezontail>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex items-end justify-center p-6 h-full bg-cover bg-center imageOne !object-contain !relative">
                    <div className="!w-full !h-full absolute top-0 left-0 z-[-1]">
                      <Image
                        src="https://res.cloudinary.com/dir8ao2mt/image/upload/v1722031980/statues-karnak-temple_stcffm.jpg"
                        loading="lazy"
                        quality={85}
                        layout="fill"
                        objectFit="cover"
                        alt="image"
                      />
                    </div>
                    <div className="w-full">
                      <RevalHorezontail>
                        <Link className="text-[26px] flex cursor-pointer text-secondary font-medium max-w-[600px] gap-2">
                          10 Facts you didn’t know about The Blue Hole, Belize
                          <FaArrowRight size={60} />
                        </Link>
                      </RevalHorezontail>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      )}
    </InView>
  );
};
export default memo(FirstLook);
