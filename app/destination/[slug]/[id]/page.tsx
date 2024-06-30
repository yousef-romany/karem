"use client";

import { Image } from "@nextui-org/image";
import Head from "next/head";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Divider } from "@nextui-org/divider";
import RevalHorezontail from "@/components/animation/RevalHorezontail";
import PaymenetAndCalcMoney from "@/components/destination/PaymenetAndCalcMoney";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Steps } from "antd";

const Posts = () => {
  const pathname = usePathname();
  let [id, setId]: any = useState("");
  let [data, setData] = useState({
    details: "",
    discount: 0,
    location: "",
    minimal: "",
    price: 0,
    statusDiscount: "",
    title: "",
    url: [""],
    id: "",
    discountPay: "",
    steps: []
  });
  useEffect(() => {
    setId(pathname.split("/")[3]);
    fetch(`/api/travel/${pathname.split("/")[3]}`)
      .then((res) => res.json())
      .then((resData) => {
        setData(resData);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <Head>
        <title>My Page | {data?.title}</title>
        <meta name="description" content={data?.details} />
      </Head>
      <div className="flex flex-col gap-4 justify-center items-start px-4">
        <div className="w-full h-fit flex justify-center overflow-hidden">
          <RevalHorezontail>
            <Swiper
              className="w-full"
              spaceBetween={0}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 5,
                },
                // when window width is >= 480px
                480: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                860: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              autoplay={{
                delay: 3000,
              }}
              modules={[Autoplay]}
            >
              {data["url"]?.map((item: string, key: number) => (
                <SwiperSlide
                  key={key}
                  className="flex justify-center items-center"
                >
                  <Image
                    alt={data?.title}
                    className="w-full object-cover max-w-[360px] h-[360px]"
                    src={item}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </RevalHorezontail>
        </div>
        <RevalHorezontail>
          <div className="text-primary text-[20px] flex !break-all">
            <h1 className="text-[20px] !break-all">Title : {data?.title}</h1>
          </div>
        </RevalHorezontail>
        <Divider />
        <RevalHorezontail>
          <div className="text-primary text-[20px] flex">
            <h1 className="text-[20px]">Location : {data?.location}</h1>
          </div>
        </RevalHorezontail>
        <Divider />

        <RevalHorezontail>
          <div className="text-primary text-[20px] !break-all">
            <p className="text-[20px] !break-all">Details : {data?.details}</p>
          </div>
        </RevalHorezontail>
        <Divider />
        <RevalHorezontail>
          <div className="text-primary text-[20px] flex">
            <h1 className="text-[20px]">
              Minimal Number of Passenger : {data?.minimal}
            </h1>
          </div>
        </RevalHorezontail>
        <Divider />
        <RevalHorezontail>
          <div className="text-primary text-[20px]">
            <h1 className="text-[20px]">Pricing : </h1>
            {data?.statusDiscount == "true" ? (
              <div className="flex gap-2">
                <h1 className="line-through text-danger">{data?.price} $</h1>
                to
                <h1 className="text-primary">
                  {data?.price - (data?.discount / 100) * data?.price} $ For One
                </h1>
              </div>
            ) : (
              <h1 className="text-primary">{data?.price} $ For One </h1>
            )}
          </div>
        </RevalHorezontail>
        <Divider />
        <Steps
          className="!text-primary"
          direction="vertical"
          size="small"
          current={0}
          items={data?.steps}
        />

        <Divider />
        <PaymenetAndCalcMoney
          price={data?.price}
          statusDiscount={data?.statusDiscount}
          discount={data?.price - (data?.discount / 100) * data?.price}
          minimal={data?.minimal}
          id={data?.id}
          location={data?.location}
          title={data?.title}
          discountPay={data?.discountPay}
        />
      </div>
    </>
  );
};
export default Posts;
