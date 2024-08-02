"use client";
// TODO : rewrite code again
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
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { FaLocationPin } from "react-icons/fa6";
import { RiMoneyDollarCircleFill, RiUserSearchFill } from "react-icons/ri";
import { IoTextSharp } from "react-icons/io5";
import { CgCheck, CgClose } from "react-icons/cg";

const Posts = () => {
  const pathname = usePathname();
  let [id, setId]: any = useState("");
  let [data, setData] = useState({
    overview: "",
    includeANDExclude: [],
    discount: 0,
    location: "",
    minimal: "",
    price: 0,
    statusDiscount: "",
    title: "",
    url: [""],
    id: "",
    discountPay: "",
    steps: [],
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
        <meta name="description" content={data?.overview} />
      </Head>
      <div className="flex flex-col gap-4 justify-center items-start px-4 py-8">
        <div className="w-full h-fit flex justify-center overflow-hidden">
          <Swiper
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
              <SwiperSlide key={key}>
                <Image
                  loading="lazy"
                  alt={data?.title}
                  className="w-full object-cover max-w-[360px] h-[360px]"
                  src={item}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-full flex flex-wrap justify-between items-start gap-y-4">
          <div className="w-[68%] tablet:w-[68%] mobile:w-full flex flex-col gap-4 justify-center items-start">
            <Card className="w-full">
              <CardHeader className="text-3xl border-b text-white dark:text-black font-semibold">
                OverView
              </CardHeader>
              <CardBody className="flex flex-col gap-3">
                <RevalHorezontail>
                  <div className="text-primary text-[20px] flex !break-all">
                    <h1 className="text-[20px] !break-all text-white dark:text-black flex gap-1 items-center">
                      {data?.overview}
                    </h1>
                  </div>
                </RevalHorezontail>
              </CardBody>
            </Card>

            <Divider />
            <Card className="w-full">
              <CardHeader className="text-3xl border-b text-white dark:text-black font-semibold">
                Included/Exclude
              </CardHeader>
              <CardBody className="flex flex-wrap flex-row">
                <div className="w-[50%] tablet:w-[50%] mobile:w-full h-full flex flex-col">
                  {data?.includeANDExclude
                    ?.filter((element: any) => element.status == "true")
                    .map((item: any, key: number) => (
                      <div className="flex items-center gap-1" key={key}>
                        <div>
                          <CgCheck
                            size={20}
                            className="text-success"
                            color="success"
                          />
                        </div>
                        <h1>{item.title}</h1>
                      </div>
                    ))}
                </div>
                <div className="w-[50%] tablet:w-[50%] mobile:w-full h-full flex flex-col">
                  {data?.includeANDExclude
                    ?.filter((element: any) => element.status == "false")
                    .map((item: any, key: number) => (
                      <div className="flex items-center gap-1" key={key}>
                        <div>
                          <CgClose
                            size={20}
                            className="text-danger"
                            color="danger"
                          />
                        </div>
                        <h1>{item.title}</h1>
                      </div>
                    ))}
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="w-[30%] tablet:w-[30%] mobile:w-full flex flex-wrap-reverse gap-4 ">
            <Card className="w-full">
              <CardHeader className="text-3xl border-b text-white dark:text-black font-semibold">
                Tour Information
              </CardHeader>
              <CardBody className="flex flex-col gap-3">
                <RevalHorezontail>
                  <div className="text-primary text-[20px] flex !break-all">
                    <h1 className="text-[20px] !break-all text-white dark:text-black flex gap-1 items-center">
                      <IoTextSharp /> Name : {data?.title}
                    </h1>
                  </div>
                </RevalHorezontail>

                <RevalHorezontail>
                  <div className="text-primary text-[20px] flex">
                    <h1 className="text-[20px] flex gap-1 items-center text-white dark:text-black">
                      <FaLocationPin /> Location : {data?.location}
                    </h1>
                  </div>
                </RevalHorezontail>
                <RevalHorezontail>
                  <div className="text-primary text-[20px] flex">
                    <h1 className="text-[20px] flex gap1 items-center text-white dark:text-black">
                      <RiUserSearchFill /> Minimal Number of Passenger :{" "}
                      {data?.minimal}
                    </h1>
                  </div>
                </RevalHorezontail>
                <RevalHorezontail>
                  <div className="text-[20px]  text-white dark:text-black flex gap-3">
                    <h1 className="text-[20px] flex gap-1 items-center">
                      <RiMoneyDollarCircleFill /> Pricing :{" "}
                    </h1>
                    {data?.statusDiscount == "true" ? (
                      <div className="flex gap-2">
                        <h1 className="line-through text-danger">
                          {data?.price} $
                        </h1>
                        to
                        <h1 className="text-primary">
                          {data?.price - (data?.discount / 100) * data?.price} $
                          For One
                        </h1>
                      </div>
                    ) : (
                      <h1 className="">{data?.price} $ For One </h1>
                    )}
                  </div>
                </RevalHorezontail>
              </CardBody>
            </Card>
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl">Steps</h1>
              <Steps
                className="!text-primary"
                direction="vertical"
                size="small"
                current={0}
                items={data?.steps}
              />
            </div>
          </div>
        </div>

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
