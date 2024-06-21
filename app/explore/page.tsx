"use client";
import { useState } from "react";

import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import CardSkeleton from "@/components/skeleton/CardSkeleton";
import RevalHorezontail from "@/components/animation/RevalHorezontail";

const Explore = () => {
  let route: any = useRouter();
  let [dataState, setDataState]: any[] = useState([]);
  const { isPending, error, data }: any = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("/api/explore")
        .then((res) => res.json())
        .then((resData: any) => {
          setDataState(resData);
        })
        .catch((error) => console.log(error)),
  });
  return (
    <section>
      {/* start image destination */}
      <div className="w-full h-fit flex flex-wrap">
        <div className="max-h-[90vh] w-full h-auto relative opacity-90 object-cover overflow-hidden">
          <h1 className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-[9] labtop:text-[40px] tablet:text-[40px] text-primary mobile:text-[24px] font-semibold text-center">
            Explore Travels
          </h1>
          <div className="relative w-full h-auto flex justify-center items-center !opacity-90">
            <Image
              src={
                "https://res.cloudinary.com/dir8ao2mt/image/upload/v1718463521/samples/smile.jpg"
              }
              alt="destination"
              className="w-full h-auto z-[9]"
            />
          </div>
        </div>
      </div>
      {/* end image destination */}
      <div className="w-full h-fit min-h-[500px] flex  gap-6 px-10 py-10 flex-wrap">
        {isPending
          ? [1, 2, 3, 4, 5].map((item: number, key: number) => <CardSkeleton />)
          : dataState?.map((item: any, key: any) => (
              <RevalHorezontail key={key}>
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
                    <b className="text-primary font-semibold">{item?.title}</b>
                  </CardFooter>
                </Card>
              </RevalHorezontail>
            ))}
      </div>
    </section>
  );
};
export default Explore;
