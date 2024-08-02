"use client";

import CardTravelWithMoreDetails from "@/components/destination/CardTravelWithMoreDetails";
import CardSkeleton from "@/components/skeleton/CardSkeleton";
import { Image } from "@nextui-org/image";
import { useQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
const fetchData = async (id: any) => {
  const response = await fetch(`/api/destination/${id}`);
  const data = await response.json();

  return data;
};
const Posts = () => {
  const pathname = usePathname();
  const { isPending, error, data }: any = useQuery({
    queryKey: ["repoData"],
    queryFn: () => fetchData(pathname.slice(13)),
  });
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div className="flex flex-col gap-4 w-full h-fit">
      <div className="max-h-[90vh] w-full h-auto relative opacity-90 !object-contain overflow-hidden">
        <img
          loading="lazy"
          src={data?.at(0)?.url[0] || ""}
          alt={pathname?.slice(13)}
          className="!w-full h-auto z-[9] !object-contain"
        />
        <h1 className="outline text-[80px] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-[9]">
          {pathname?.slice(13)}
        </h1>
      </div>
      {isPending ? (
        <div className="flex flex-wrap justify-between items-center gap-4">
          {[1, 2, 3, 4, 5, 6].map((item: number, key: number) => (
            <CardSkeleton key={key} />
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap justify-between tablet:justify-between mobile:justify-center items-center gap-4 px-4 !w-full">
          {data?.map((item: any, key: number) => {
            return (
              <div
                className="max-w-[30%] tablet:max-w-[30%] mobile:max-w-fit"
                key={key}
              >
                <CardTravelWithMoreDetails
                  id={item?.id}
                  title={item?.title}
                  location={item?.location}
                  discount={item?.discount}
                  statusDiscount={item?.statusDiscount}
                  image={item?.url}
                  price={item?.price}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Posts;
