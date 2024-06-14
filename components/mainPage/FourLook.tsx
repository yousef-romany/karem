import { memo } from "react";
import RevalHorezontail from "../animation/RevalHorezontail";
import { Link } from "@nextui-org/link";

import { Card, CardBody, CardFooter } from "@nextui-org/card";
import image from "@/public/franch.png";
import Image from "next/image";

import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";

const FourLook = () => {
  let route = useRouter();
  return (
    <>
      <div className="w-full h-fit px-10 py-16 relative">
        <div className="flex flex-col w-full h-fit gap-6">
          {/* header */}
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div className="flex flex-col justify-between">
              <RevalHorezontail>
                <h1 className="text-primary text-[26px] font-bold">
                  Top Travel Sories
                </h1>
              </RevalHorezontail>
              <RevalHorezontail>
                <h2 className="text-secondary text-[18px] font-semibold">
                  Explore our latest stories from our active users
                </h2>
              </RevalHorezontail>
            </div>
            <RevalHorezontail>
              <Button
                href="/destination"
                as={Link}
                color="primary"
                variant="bordered"
              >
                View All Destination
              </Button>
            </RevalHorezontail>
          </div>
          {/* end header */}
          {/* body */}
          <div className="flex flex-wrap justify-between items-center gap-4">
            <RevalHorezontail>
              <Card
                className="!rounded-3xl !bg-transparent"
                isPressable
                onPress={() => route.push(`/travel`)}
              >
                <CardBody className="overflow-visible p-0">
                  <Image
                    alt={"my image"}
                    className="w-full object-cover h-[360px]"
                    src={image}
                  />
                </CardBody>
                <CardFooter className="flex flex-col items-start gap-4">
                  <div className="text-large flex justify-between items-center w-full">
                    <b className="text-primary font-semibold">
                      Prague, Ukraine
                    </b>
                    <p className="text-sm font-light">
                      Feb 27, 2023 . 4 min read
                    </p>
                  </div>
                  <div className="max-w-[530px] text-left flex flex-col gap-4">
                    <h1 className="text-primary text-2xl font-bold">
                      The Petrin Hill
                    </h1>
                    <p>
                      I visited Prague, the beautiful capital city of the Czech
                      Republic, and one of my favorite places in the city was
                      the Petrin Hill. The Petrin Hill is a green oasis in the
                      heart of Prague.
                    </p>
                  </div>
                </CardFooter>
              </Card>
            </RevalHorezontail>
          </div>
          {/* end body */}
        </div>
      </div>
    </>
  );
};
export default memo(FourLook);
