"use client";
import { memo, useEffect, useState } from "react";
import { Input } from "@nextui-org/input";
import CardDestiantion from "./CardDestiantion";

const SearchComponentDestination = () => {
  let [data, setData]: any[] = useState([]);
  let [basicData, setBasicData]: any[] = useState([]);
  useEffect(() => {
    fetch("/api/destination")
      .then((res) => res.json())
      .then((resData: any) => {
        let data =  resData.reduce((accumulator: any, current: any) => {
          let exists = accumulator.find((item: any) => {
            return item.location == current.location;
          });
          if(!exists) { 
            accumulator = accumulator.concat(current);
          }
          return accumulator;
        }, []);
        setData(data);
        setBasicData(data);
        console.log(data);
        console.log(Object.keys(data));
        
      })
      .catch((error) => console.log(error));
  }, []);
  const handleSearch = (valueSearch: any) => {
    if (valueSearch === "") {
      setData(basicData);
      return;
    } else {
      let filteredData = data.filter((element: any) => {
        return element.location
          .toLowerCase()
          .startsWith(valueSearch.toLowerCase());
      });
      setData(filteredData);
      return;
    }
  };
  return (
    <div className="w-full h-fit min-h-[500px] flex flex-col gap-6 px-10">
      {/* start filter search */}
      <div className="flex flex-wrap gap-6">
        <Input
          type="text"
          color="primary"
          variant={"bordered"}
          label="Search for places by name"
          onChange={(e: any) => handleSearch(e.target.value)}
        />
      </div>
      {/* end filter search */}
      {/* start view data */}
      <div className="flex flex-wrap gap-6">
        {data?.map((item: any, key: number) => {
          return (
            <CardDestiantion
              key={key}
              image={item.url}
              location={item.location}
            />
          );
        })}
      </div>
      {/* end view data */}
    </div>
  );
};
export default memo(SearchComponentDestination);
