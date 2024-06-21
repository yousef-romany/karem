"use client";
import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";
import RevalHorezontail from "@/components/animation/RevalHorezontail";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Posts = () => {
  let [data, setData] = useState({
    details: "",
    urlTravel: "",
    email: "",
    name: "",
    travelId: "",
  });
  const pathname = usePathname();
  useEffect(() => {
    fetch(`/api/reviews/${pathname.slice(9)}`)
      .then((res) => res.json())
      .then((resData) => {
        setData(resData);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-start px-4">
        <div className="w-full h-fit flex justify-center overflow-hidden">
          <RevalHorezontail>
            <Image
              src={data?.urlTravel}
              alt={data?.travelId}
              className="h-auto !object-contain w-full max-w-[780px]"
            />
          </RevalHorezontail>
        </div>
        <RevalHorezontail>
          <div className="text-primary text-[24px] flex">
            <h1 className="text-[24px]">User Name : </h1>
            <h2 className="px-4">{data?.name}</h2>
          </div>
        </RevalHorezontail>
        <Divider />
        <RevalHorezontail>
          <div className="text-primary text-[24px] flex">
            <h1 className="text-[24px]">email : </h1>
            <h2 className="px-4">{data?.email}</h2>
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
      </div>
    </>
  );
};
export default Posts;
