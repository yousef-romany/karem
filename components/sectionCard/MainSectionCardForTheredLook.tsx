"use client";
import { memo, useEffect, useState } from "react";
import RevalHorezontail from "../animation/RevalHorezontail";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import CardSkeleton from "../skeleton/CardSkeleton";
import { useRouter } from "next/navigation";

const MainSectionCardForTheredLook = () => {
  let route: any = useRouter();
  let [dataState, setDataState]: any[] = useState([]);
  const { isPending, error, data }: any = useQuery({
    queryKey: ["repoDataExplore"],
    queryFn: () =>
      fetch("/api/explore")
        .then((res) => res.json())
        .then((resData: any) => {
          setDataState(resData);
          return resData;
        })
        .catch((error) => console.log(error)),
  });
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
            {isPending
              ? [1, 2, 3, 4, 5].map((item: number, key: number) => (
                  <SwiperSlide key={key}>
                    <CardSkeleton />
                  </SwiperSlide>
                ))
              : dataState?.map((item: any, key: any) => (
                  <SwiperSlide key={key}>
                    <RevalHorezontail>
                      <Card
                        className="!rounded-3xl max-w-[400px] !bg-transparent"
                        isPressable
                        onPress={() =>
                          route.push(`/destination/${item.location}/${item.id}`)
                        }
                      >
                        <CardBody className="overflow-visible p-0">
                          <Image
                            alt={"my image"}
                            className="w-full object-cover h-[360px]"
                            src={item?.url}
                          />
                        </CardBody>
                        <CardFooter className="text-large justify-center items-start flex-col">
                          <p className="text-sm font-light">{item.location}</p>
                          <b className="text-primary font-semibold">
                            {item?.title}
                          </b>
                        </CardFooter>
                      </Card>
                    </RevalHorezontail>
                  </SwiperSlide>
                ))}
          </Swiper>
        </div>
        {/* end body */}
      </div>
    </>
  );
};
export default memo(MainSectionCardForTheredLook);
