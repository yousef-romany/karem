"use client";
import { memo, useState } from "react";
import { Input } from "@nextui-org/input";
import CardDestiantion from "./CardDestiantion";
import { useQuery } from "@tanstack/react-query";
import CardSkeleton from "../skeleton/CardSkeleton";
import { IoReloadOutline } from "react-icons/io5";
import RevalHorezontail from "../animation/RevalHorezontail";

const SearchComponentDestination = () => {
  let [dataState, setDataState]: any[] = useState([]);
  let [basicData, setBasicData]: any[] = useState([]);
  const { isPending, error, data }: any = useQuery({
    queryKey: ["myData"],
    queryFn: async () => {
      let response = await fetch("/api/destination");
      let resData: Promise<[]> = (await response).json();

      let data = (await resData).reduce((accumulator: any, current: any) => {
        let exists = accumulator.find((item: any) => {
          return item.location == current.location;
        });
        if (!exists) {
          accumulator = accumulator.concat(current);
        }
        return accumulator;
      }, []);
      setDataState(data);
      setBasicData(data);
      return data;
    },
  });
  const handleSearch = (valueSearch: any) => {
    if (valueSearch === "") {
      setDataState(basicData);
      return;
    } else {
      let filteredData = dataState?.filter((element: any) => {
        return element.location
          ?.toLowerCase()
          ?.startsWith(valueSearch.toLowerCase());
      });
      setDataState(filteredData);
      return;
    }
  };
  const handleRefresh = () => {
    setDataState(basicData);
  };
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div className="!w-full h-fit min-h-[500px] flex flex-col gap-6 px-10">
      {/* start filter search */}
      <div className="flex flex-wrap gap-6">
        <Input
          type="text"
          color="primary"
          variant={"bordered"}
          label="Search for places by name"
          onChange={(e: any) => handleSearch(e.target.value)}
          endContent={
            <IoReloadOutline
              size={30}
              className="cursor-pointer"
              color="primary"
              onClick={handleRefresh}
            />
          }
        />
      </div>
      {/* end filter search */}
      {/* start view data */}
      {isPending ? (
        <div className="flex flex-wrap justify-between items-center gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item: number, key: number) => (
            <CardSkeleton key={key} />
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap justify-between tablet:justify-between mobile:justify-center items-center gap-4 px-4 !w-full">
          {dataState?.map((item: any, key: number) => {
            return (
              <div
                className="max-w-[30%] tablet:max-w-[30%] mobile:!max-w-[100%]"
                key={key}
              >
                <RevalHorezontail width="100%">
                  <CardDestiantion
                    image={item.url[0]}
                    location={item.location}
                  />
                </RevalHorezontail>
              </div>
            );
          })}
        </div>
      )}
      {/* end view data */}
    </div>
  );
};
export default memo(SearchComponentDestination);
