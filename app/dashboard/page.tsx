"use client";

import { Card, CardBody } from "@nextui-org/card";
import { Tabs, Tab } from "@nextui-org/tabs";
import { memo } from "react";
import TravelFeatured from "@/components/dashboardComponents/TravelFeatured";

const Dashboard = () => {
  
  return (
    <div className="w-full h-fit flex justify-center items-center">
      <div className="w-full flex justify-center items-center flex-col">
        <Tabs aria-label="Dashboard Options">
          <Tab key="Travel" title="Travel" className="w-full">
            <TravelFeatured />
          </Tab>
          <Tab key="music" title="Music">
            <Card>
              <CardBody>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </CardBody>
            </Card>
          </Tab>
          <Tab key="videos" title="Videos">
            <Card>
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};
export default memo(Dashboard);
