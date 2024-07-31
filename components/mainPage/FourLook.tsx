"use client";
import { memo } from "react";
import RevalHorezontail from "../animation/RevalHorezontail";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import CardReview from "../review/CardReview";
import { useQuery } from "@tanstack/react-query";
import CardSkeleton from "../skeleton/CardSkeleton";
import { InView } from "react-intersection-observer";

const fetchData = async () => {
  const response = await fetch("/api/reviews");
  const data = await response.json();

  return data;
};

const FourLook = () => {
  let route = useRouter();
  const { isPending, error, data }: any = useQuery({
    queryKey: ["repoDataReviewsPage"],
    queryFn: fetchData,
  });

  return (
    <InView>
      {({ inView, ref, entry }) => (
      <div ref={ref} className="w-full h-fit labtop:p-10 mobile:p-5 py-16 relative">
        <div className="flex flex-col w-full h-fit gap-6">
          {/* header */}
          <div className="flex justify-between items-center flex-wrap gap-4 bg-success px-4 py-2 !rounded-xl">
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
          <div className="flex flex-wrap justify-between tablet:justify-between mobile:justify-center items-center gap-4 px-4">
            {isPending
              ? [1, 2, 3, 4, 5]?.map((item: number, key: number) => (
                  <CardSkeleton key={key} />
                ))
              : data?.map((item: any, key: number) => (
                  <div className="max-w-[30%] tablet:max-w-[30%] mobile:!max-w-[100%]" key={key}>
                    <CardReview
                      image={item?.urlTravel}
                      location={item?.travelId}
                      time={"Feb 27, 2023 . 4 min read"}
                      title={item?.name}
                      discript={item?.details}
                      id={item?.id}
                    />
                  </div>
                ))}
          </div>
          {/* end body */}
        </div>
      </div>
    )}
    </InView>
  );
};
export default memo(FourLook);
