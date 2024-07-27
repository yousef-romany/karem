"use client";
import { Button } from "@nextui-org/button";
import { memo } from "react";
import RevalHorezontail from "../animation/RevalHorezontail";
import CardDestiantion from "../destination/CardDestiantion";
import { useRouter } from "next/navigation";

import { useQuery } from "@tanstack/react-query";
import CardSkeleton from "../skeleton/CardSkeleton";
const fetchData = async () => {
  const response = await fetch("/api/destination");
  const data = await response.json();

  return data;
};
const MainSectionCard = () => {
  let route = useRouter();
  const { isPending, error, data }: any = useQuery({
    queryKey: ["myData"],
    queryFn: fetchData,
  });
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <>
      <div className="flex flex-col w-full h-fit gap-6">
        {/* header */}
        <div className="flex justify-between items-center flex-wrap gap-4 bg-success px-4 py-2 !rounded-xl">
          <div className="flex flex-col justify-between">
            <RevalHorezontail>
              <h1 className="text-primary text-[26px] font-bold">
                Plan your best trip ever
              </h1>
            </RevalHorezontail>
            <RevalHorezontail>
              <h2 className="text-secondary text-[18px] font-semibold">
                Making The Most of Your Travel Experience in 2024
              </h2>
            </RevalHorezontail>
          </div>
          <RevalHorezontail>
            <Button
              color="primary"
              variant="bordered"
              onPress={() => route.push("/destination")}
            >
              View All Destination
            </Button>
          </RevalHorezontail>
        </div>
        {/* end header */}
        {/* body */}
        {isPending ? (
          <div className="flex flex-wrap justify-between items-center gap-4">
            {[1, 2, 3].map((item: number, key: number) => (
              <CardSkeleton key={key} />
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap justify-between tablet:justify-between mobile:justify-center items-center gap-4 px-4 w-full">
            {data?.slice(0, 6)?.map((item: any, key: number) => {
              return (
                <div
                  className="max-w-[30%] tablet:max-w-[30%] mobile:!max-w-[100%]"
                  key={key}
                >
                  <RevalHorezontail width="100%">
                    <CardDestiantion
                      image={item?.url[0]}
                      location={item?.location}
                    />
                  </RevalHorezontail>
                </div>
              );
            })}
          </div>
        )}
        {/* end body */}
      </div>
    </>
  );
};
export default memo(MainSectionCard);
