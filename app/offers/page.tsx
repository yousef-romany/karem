"use client";
import { useState } from "react";
import { Image } from "@nextui-org/image";
import { useQuery } from "@tanstack/react-query";
import CardSkeleton from "@/components/skeleton/CardSkeleton";
import RevalHorezontail from "@/components/animation/RevalHorezontail";
import CardTravelWithMoreDetails from "@/components/destination/CardTravelWithMoreDetails";

const fetchData = async () => {
  const response = await fetch("/api/offers");
  const data = await response.json();

  return data;
};

const Offers = () => {
  const { isPending, error, data }: any = useQuery({
    queryKey: ["repoDataOffersPage"],
    queryFn: fetchData
  });
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <section>
      {/* start image destination */}
      <div className="w-full h-fit flex flex-wrap">
        <div className="max-h-[90vh] w-full h-auto relative opacity-90 object-cover overflow-hidden">
          <h1 className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-[9] labtop:text-[40px] tablet:text-[40px] text-primary mobile:text-[24px] font-semibold text-center">
            Offers Travels
          </h1>
          <div className="relative w-full h-auto flex justify-center items-center !opacity-90">
            <Image
              src={
                "https://res.cloudinary.com/dir8ao2mt/image/upload/v1718463521/samples/smile.jpg"
              }
              alt="destination"
              className="w-full h-auto z-[9]"
              loading="lazy"

            />
          </div>
        </div>
      </div>
      {/* end image destination */}
      <div className="w-full h-fit min-h-[500px] flex  gap-6 px-10 py-10 flex-wrap">
        {isPending
          ? [1, 2, 3, 4, 5].map((item: number, key: number) => (
              <CardSkeleton key={key} />
            ))
          : data?.map((item: any, key: any) => (
              <RevalHorezontail key={key}>
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
              </RevalHorezontail>
            ))}
      </div>
    </section>
  );
};
export default Offers;
