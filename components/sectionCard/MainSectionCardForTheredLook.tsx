import { memo } from "react";
import RevalHorezontail from "../animation/RevalHorezontail";
import { Link } from "@nextui-org/link";

import { Card, CardBody, CardFooter } from "@nextui-org/card";
import image from "@/public/tokyo.png";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const MainSectionCardForTheredLook = () => {
  return (
    <>
      <div className="flex flex-col w-full h-fit gap-6">
        {/* header */}
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div className="flex flex-col justify-between">
            <RevalHorezontail>
              <h1 className="text-primary text-[26px] font-bold">
                Top Locations to Explore
              </h1>
            </RevalHorezontail>
            <RevalHorezontail>
              <h2 className="text-secondary text-[18px] font-semibold">
                Here are some of the most visited places in 2023
              </h2>
            </RevalHorezontail>
          </div>
        </div>
        {/* end header */}
        {/* body */}
        <div className="flex flex-wrap justify-between items-center gap-4">
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
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
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          >
            <SwiperSlide>
              <RevalHorezontail>
                <Card
                  className="!rounded-3xl !bg-transparent"
                  isPressable
                  onPress={() => console.log("item pressed")}
                >
                  <CardBody className="overflow-visible p-0">
                    <Image
                      alt={"my image"}
                      className="w-full object-cover h-[360px]"
                      src={image}
                    />
                  </CardBody>
                  <CardFooter className="text-large justify-center items-start flex-col">
                    <p className="text-sm font-light">Tokyo, Japan</p>
                    <b className="text-primary font-semibold">The Shibuya</b>
                  </CardFooter>
                </Card>
              </RevalHorezontail>
            </SwiperSlide>
            <SwiperSlide>
              <RevalHorezontail>
                <Card
                  className="!rounded-3xl !bg-transparent"
                  isPressable
                  onPress={() => console.log("item pressed")}
                >
                  <CardBody className="overflow-visible p-0">
                    <Image
                      alt={"my image"}
                      className="w-full object-cover h-[360px]"
                      src={image}
                    />
                  </CardBody>
                  <CardFooter className="text-large justify-center items-start flex-col">
                    <p className="text-sm font-light">Tokyo, Japan</p>
                    <b className="text-primary font-semibold">The Shibuya</b>
                  </CardFooter>
                </Card>
              </RevalHorezontail>
            </SwiperSlide>
            <SwiperSlide>
              <RevalHorezontail>
                <Card
                  className="!rounded-3xl !bg-transparent"
                  isPressable
                  onPress={() => console.log("item pressed")}
                >
                  <CardBody className="overflow-visible p-0">
                    <Image
                      alt={"my image"}
                      className="w-full object-cover h-[360px]"
                      src={image}
                    />
                  </CardBody>
                  <CardFooter className="text-large justify-center items-start flex-col">
                    <p className="text-sm font-light">Tokyo, Japan</p>
                    <b className="text-primary font-semibold">The Shibuya</b>
                  </CardFooter>
                </Card>
              </RevalHorezontail>
            </SwiperSlide>
            <SwiperSlide>
              <RevalHorezontail>
                <Card
                  className="!rounded-3xl !bg-transparent"
                  isPressable
                  onPress={() => console.log("item pressed")}
                >
                  <CardBody className="overflow-visible p-0">
                    <Image
                      alt={"my image"}
                      className="w-full object-cover h-[360px]"
                      src={image}
                    />
                  </CardBody>
                  <CardFooter className="text-large justify-center items-start flex-col">
                    <p className="text-sm font-light">Tokyo, Japan</p>
                    <b className="text-primary font-semibold">The Shibuya</b>
                  </CardFooter>
                </Card>
              </RevalHorezontail>
            </SwiperSlide>
            <SwiperSlide>
              <RevalHorezontail>
                <Card
                  className="!rounded-3xl !bg-transparent"
                  isPressable
                  onPress={() => console.log("item pressed")}
                >
                  <CardBody className="overflow-visible p-0">
                    <Image
                      alt={"my image"}
                      className="w-full object-cover h-[360px]"
                      src={image}
                    />
                  </CardBody>
                  <CardFooter className="text-large justify-center items-start flex-col">
                    <p className="text-sm font-light">Tokyo, Japan</p>
                    <b className="text-primary font-semibold">The Shibuya</b>
                  </CardFooter>
                </Card>
              </RevalHorezontail>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* end body */}
      </div>
    </>
  );
};
export default memo(MainSectionCardForTheredLook);
