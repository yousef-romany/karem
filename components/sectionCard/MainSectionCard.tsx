import { Button } from "@nextui-org/button";
import { memo } from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/card";

import image from "@/public/test.png";
import Image from "next/image";
import RevalHorezontail from "../animation/RevalHorezontail";
import { Link } from "@nextui-org/link";
import CardDestiantion from "../destination/CardDestiantion";
import { useRouter } from "next/navigation";

const MainSectionCard = () => {
  let route = useRouter();
  return (
    <>
      <div className="flex flex-col w-full h-fit gap-6">
        {/* header */}
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div className="flex flex-col justify-between">
            <RevalHorezontail>
              <h1 className="text-primary text-[26px] font-bold">
                Plan your best trip ever
              </h1>
            </RevalHorezontail>
            <RevalHorezontail>
              <h2 className="text-secondary text-[18px] font-semibold">
                Making The Most of Your Travel Experience in 2024
              </h2>
            </RevalHorezontail>
          </div>
          <RevalHorezontail>
            <Button
              color="primary"
              variant="bordered"
              onPress={() => route.push("/destination")}
            >
              View All Destination
            </Button>
          </RevalHorezontail>
        </div>
        {/* end header */}
        {/* body */}
        <div className="flex flex-wrap justify-between items-center gap-4">
          <CardDestiantion image={image} title={"Croatia"} route={"/destination/croatia"} />
          <CardDestiantion image={image} title={"Croatia"} route={"/destination/croatia"} />
          <CardDestiantion image={image} title={"Croatia"} route={"/destination/croatia"} />
        </div>
        {/* end body */}
      </div>
    </>
  );
};
export default memo(MainSectionCard);
