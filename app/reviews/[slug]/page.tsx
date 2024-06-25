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
          <div className="text-primary text-[20px] flex">
            <h1 className="text-[20px]">User Name : {data?.name}</h1>
          </div>
        </RevalHorezontail>
        <Divider />
        <RevalHorezontail>
          <div className="text-primary text-[20px] flex">
            <h1 className="text-[20px]">email : {data?.email}</h1>
          </div>
        </RevalHorezontail>
        <Divider />

        <RevalHorezontail>
          <div className="text-primary text-[20px] max-w-full !break-all">
            <p className="text-[20px] !break-all">Details : {data?.details}</p>
          </div>
        </RevalHorezontail>
      </div>
    </>
  );
};
export default Posts;
