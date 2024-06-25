"use client";
import { Button } from "@nextui-org/button";
import { memo, useEffect, useState } from "react";
import RevalHorezontail from "../animation/RevalHorezontail";
import CardDestiantion from "../destination/CardDestiantion";
import { useRouter } from "next/navigation";

import { useQuery } from "@tanstack/react-query";
import CardSkeleton from "../skeleton/CardSkeleton";

const MainSectionCard = () => {
  let route = useRouter();
  let [dataState, setDataState]: any[] = useState([]);
  const { isPending, error, data }: any = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("/api/destination")
        .then((res) => res.json())
        .then((resData: any) => {
          let dataVar = resData.reduce((accumulator: any, current: any) => {
            let exists = accumulator.find((item: any) => {
              return item.location == current.location;
            });
            if (!exists) {
              accumulator = accumulator.concat(current);
            }
            return accumulator;
          }, []);
          setDataState(dataVar);
          return dataVar;
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
          <div className="flex flex-wrap justify-between items-center gap-4">
            {dataState?.slice(0, 3)?.map((item: any, key: number) => {
              return (
                <CardDestiantion
                  key={key}
                  image={item?.url}
                  location={item?.location}
                />
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
