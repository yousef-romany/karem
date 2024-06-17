"use client";

import CardTravelWithMoreDetails from "@/components/destination/CardTravelWithMoreDetails";
import { Image } from "@nextui-org/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Posts = () => {
  const pathname = usePathname();
  let [data, setData] = useState([{ url: "" }]);
  useEffect(() => {
    fetch(`/api/destination/${pathname.slice(13)}`)
      .then((res) => res.json())
      .then((resData) => {
        setData(resData);
        console.log(resData);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="flex flex-col gap-4">
      <div className="max-h-[90vh] w-full h-auto relative opacity-90 !object-contain overflow-hidden">
        <Image
          src={data[0]?.url}
          alt={pathname.slice(13)}
          className="w-full h-auto z-[9] !object-contain"
        />
        <h1 className="outline text-[80px] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-[9]">
          {pathname.slice(13)}
        </h1>
      </div>
      <div className="w-full h-fit flex flex-wrap px-6 py-2 gap-4">
        {data?.map((item: any, key: number) => {
          return (
            <CardTravelWithMoreDetails
              id={item?.id}
              key={key}
              title={item?.title}
              location={item?.location}
              discount={item?.discount}
              statusDiscount={item?.statusDiscount}
              image={item?.url}
              price={item?.price}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Posts;
