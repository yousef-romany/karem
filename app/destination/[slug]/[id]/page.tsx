"use client";

import { Image } from "@nextui-org/image";
import Head from "next/head";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Divider } from "@nextui-org/divider";
import RevalHorezontail from "@/components/animation/RevalHorezontail";
import PaymenetAndCalcMoney from "@/components/destination/PaymenetAndCalcMoney";

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
    url: "",
    id: "",
  });
  useEffect(() => {
    setId(pathname.split("/")[3]);
    fetch(`/api/travel/${pathname.split("/")[3]}`)
      .then((res) => res.json())
      .then((resData) => {
        setData(resData);
        console.log(resData);
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
            <Image
              src={data?.url}
              alt={data?.title}
              className="h-auto !object-contain w-full max-w-[780px]"
            />
          </RevalHorezontail>
        </div>
        <RevalHorezontail>
          <div className="text-primary text-[24px] flex">
            <h1 className="text-[24px]">Title : </h1>
            <h2 className="px-4">{data?.title}</h2>
          </div>
        </RevalHorezontail>
        <Divider />
        <RevalHorezontail>
          <div className="text-primary text-[24px] flex">
            <h1 className="text-[24px]">Location : </h1>
            <h2 className="px-4">{data?.location}</h2>
          </div>
        </RevalHorezontail>
        <Divider />

        <RevalHorezontail>
          <div className="text-primary text-[24px]">
            <h1 className="text-[24px]">Details : </h1>
            <h2 className="px-4">{data?.details}</h2>
          </div>
        </RevalHorezontail>
        <Divider />
        <RevalHorezontail>
          <div className="text-primary text-[24px] flex">
            <h1 className="text-[24px]">
              Minimal Number of Passenger : {data?.minimal}
            </h1>
          </div>
        </RevalHorezontail>
        <Divider />
        <RevalHorezontail>
          <div className="text-primary text-[24px]">
            <h1 className="text-[24px]">Pricing : </h1>
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
        <PaymenetAndCalcMoney
          price={data?.price}
          statusDiscount={data?.statusDiscount}
          discount={data?.price - (data?.discount / 100) * data?.price}
          minimal={data?.minimal}
          id={data?.id}
          location={data?.location}
          title={data?.title}
        />
      </div>
    </>
  );
};
export default Posts;
