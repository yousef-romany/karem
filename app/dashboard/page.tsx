"use client";

import { Card, CardBody } from "@nextui-org/card";
import { Tabs, Tab } from "@nextui-org/tabs";
import { memo } from "react";
import TravelFeatured from "@/components/dashboardComponents/TravelFeatured";
import ExploreFeatured from "@/components/dashboardComponents/ExploreFeatured";
import ReviewsFeatured from "@/components/dashboardComponents/ReviewsFeatured";

const Dashboard = () => {
  
  return (
    <div className="w-full h-fit flex justify-center items-center">
      <div className="w-full flex justify-center items-center flex-col">
        <Tabs aria-label="Dashboard Options">
          <Tab key="Travel" title="Travel" className="w-full">
            <TravelFeatured />
          </Tab>
          <Tab key="Explore" title="Explore">
            <ExploreFeatured />
          </Tab>
          <Tab key="Reviews" title="Reviews">
            <ReviewsFeatured />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};
export default memo(Dashboard);
