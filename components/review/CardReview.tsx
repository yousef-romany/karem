"use client";
import { memo } from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import RevalHorezontail from "../animation/RevalHorezontail";
import { useRouter } from "next/navigation";
interface dataTypeProps {
  image: any;
  location: string;
  time: string;
  title: string;
  discript: string;
  id: any;
}

const CardReview = ({
  image,
  location,
  time,
  title,
  discript,
  id,
}: dataTypeProps) => {
  let route = useRouter();
  return (
    <RevalHorezontail width="100%">
      <Card
        className="!rounded-3xl !bg-transparent overflow-hidden labtop:max-w-[480px] tablet:max-w-[440px] mobile:max-w-[380px]"
        isPressable
        onPress={() => route.push(`/reviews/${id}`)}
      >
        <CardBody className="overflow-visible p-0">
          <Image
            loading="lazy"
            alt={"my image"}
            className="w-full object-cover labtop:w-[480px] tablet:w-[440px] mobile:w-[380px] h-[360px]"
            src={image}
          />
        </CardBody>
        <CardFooter className="flex flex-col items-start gap-4">
          <div className="text-large flex justify-between items-center w-full">
            <b className="text-secondary font-semibold">
              Name Travel: {location}
            </b>
            {/* <p className="text-sm font-light">{time}</p> */}
          </div>
          <div className="max-w-full text-left flex flex-col gap-4">
            <h1 className="text-primary text-2xl font-bold">
              Passenger: {title}
            </h1>
            <p className="text-secondary">{discript.slice(0, 30) + "....."}</p>
          </div>
        </CardFooter>
      </Card>
    </RevalHorezontail>
  );
};
export default memo(CardReview);
