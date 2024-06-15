"use client";
import { memo, useEffect, useState } from "react";
import { Input } from "@nextui-org/input";
import CardDestiantion from "./CardDestiantion";
import image from "@/public/test.png";

const SearchComponentDestination = () => {
  let [data, setData]: any[] = useState([
    {
      image: image,
      title: "Croatia",
      path: "/destination/croatia",
    },
    {
      image: image,
      title: "Luxor",
      path: "/destination/luxor",
    },
    {
      image: image,
      title: "Aswain",
      path: "/destination/aswain",
    },
    {
      image: image,
      title: "Cairo",
      path: "/destination/cairo",
    },
  ]);
  let [basicData, setBasicData]: any[] = useState([
    {
      image: image,
      title: "Croatia",
      path: "/destination/croatia",
    },
    {
      image: image,
      title: "Luxor",
      path: "/destination/luxor",
    },
    {
      image: image,
      title: "Aswain",
      path: "/destination/aswain",
    },
    {
      image: image,
      title: "Cairo",
      path: "/destination/cairo",
    },
  ]);
  const handleSearch = (valueSearch: any) => {
    if (valueSearch === "") {
      setData(basicData);
      return;
    } else {
      let filteredData = data.filter((element: any) => {
        return element.title
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
              image={item.image}
              title={item.title}
              path={item.path}
            />
          );
        })}
      </div>
      {/* end view data */}
    </div>
  );
};
export default memo(SearchComponentDestination);
