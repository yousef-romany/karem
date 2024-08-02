"use client";
import { memo } from "react";
import CardReview from "@/components/review/CardReview";
import { useQuery } from "@tanstack/react-query";
import CardSkeleton from "@/components/skeleton/CardSkeleton";

const fetchData = async () => {
  const response = await fetch("/api/reviews");
  const data = await response.json();

  return data;
};
const Reviews = () => {
  const { isPending, error, data }: any = useQuery({
    queryKey: ["repoDataReviewsPage"],
    queryFn: fetchData,
  });
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <section className="h-fit w-full flex flex-col gap-4">
      <div className="flex flex-wrap justify-between items-center gap-4 px-10 py-16 relative">
        {isPending
          ? [1, 2, 3, 4, 5]?.map((item: number, key: number) => (
              <CardSkeleton key={key} />
            ))
          : data?.map((item: any, key: number) => (
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
    </section>
  );
};
export default memo(Reviews);
