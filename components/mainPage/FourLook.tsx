"use client";
import { memo, useState } from "react";
import RevalHorezontail from "../animation/RevalHorezontail";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import CardReview from "../review/CardReview";
import { useQuery } from "@tanstack/react-query";
import CardSkeleton from "../skeleton/CardSkeleton";

const FourLook = () => {
  let route = useRouter();
  let [dataState, setDataState]: any[] = useState([]);
  let [dataReviewState, setDataReviewState]: any[] = useState([]);
  const { isPending, error, data }: any = useQuery({
    queryKey: ["repoDataReviewsPage"],
    queryFn: async () =>
      fetch("/api/reviews")
        .then((res) => res.json())
        .then((resData: any) => {
          setDataReviewState(resData);
          return resData;
        })
        .catch((error) => console.log(error)),
  });

  return (
    <>
      <div className="w-full h-fit labtop:p-10 mobile:p-5 py-16 relative">
        <div className="flex flex-col w-full h-fit gap-6">
          {/* header */}
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div className="flex flex-col justify-between">
              <RevalHorezontail>
                <h1 className="text-primary text-[26px] font-bold">
                  Top Travel Sories
                </h1>
              </RevalHorezontail>
              <RevalHorezontail>
                <h2 className="text-secondary text-[18px] font-semibold">
                  Explore our latest stories from our active users
                </h2>
              </RevalHorezontail>
            </div>
            <RevalHorezontail>
              <Button
                onPress={() => route.push("/reviews")}
                color="primary"
                variant="bordered"
              >
                View All Reviews
              </Button>
            </RevalHorezontail>
          </div>
          {/* end header */}
          {/* body */}
          <div className="flex flex-wrap justify-between items-center gap-4">
            {isPending
              ? [1, 2, 3, 4, 5]?.map((item: number, key: number) => (
                  <CardSkeleton key={key} />
                ))
              : dataReviewState?.map((item: any, key: number) => (
                  <CardReview
                    key={key}
                    image={item?.urlTravel}
                    location={item?.travelId}
                    time={"Feb 27, 2023 . 4 min read"}
                    title={item?.name}
                    discript={item?.details}
                    id={item?.id}
                  />
                ))}
          </div>
          {/* end body */}
        </div>
      </div>
    </>
  );
};
export default memo(FourLook);
