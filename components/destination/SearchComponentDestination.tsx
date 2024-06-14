"use client";
import { memo } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import CardDestiantion from "./CardDestiantion";
import image from "@/public/test.png";

const items = [
  {
    key: "new",
    label: "New file",
  },
  {
    key: "copy",
    label: "Copy link",
  },
  {
    key: "edit",
    label: "Edit file",
  },
];
const SearchComponentDestination = () => {
  return (
    <div className="w-full h-fit min-h-[500px] flex flex-col gap-6 px-10">
      {/* start filter search */}
      <div className="flex flex-wrap gap-6">
        <Input
          type="text"
          color="primary"
          variant={"bordered"}
          label="Search for places, hotels or restaurants"
        />
        <div className="flex gap-6">
          <div className="flex flex-col gap-4">
            <label htmlFor="filterPlace">Filter by type of place</label>
            <Dropdown id="filterPlace">
              <DropdownTrigger>
                <Button variant="bordered">All Types</Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Dynamic Actions" items={items}>
                {(item) => (
                  <DropdownItem key={item.key} color={"default"}>
                    {item.label}
                  </DropdownItem>
                )}
              </DropdownMenu>
            </Dropdown>
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="sortBy">Sort by</label>
            <Dropdown id="sortBy">
              <DropdownTrigger>
                <Button variant="bordered">Most Popular</Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Dynamic Actions" items={items}>
                {(item) => (
                  <DropdownItem key={item.key} color={"default"}>
                    {item.label}
                  </DropdownItem>
                )}
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
      {/* end filter search */}
      {/* start view data */}
      <div className="flex flex-wrap gap-6">
        <CardDestiantion
          image={image}
          title={"Croatia"}
          path={"/destination/croatia"}
        />
        <CardDestiantion
          image={image}
          title={"Croatia"}
          path={"/destination/croatia"}
        />
        <CardDestiantion
          image={image}
          title={"Croatia"}
          path={"/destination/croatia"}
        />
      </div>
      {/* end view data */}
    </div>
  );
};
export default memo(SearchComponentDestination);
