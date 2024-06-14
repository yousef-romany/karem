"use client";
import { memo } from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import RevalHorezontail from "../animation/RevalHorezontail";
import { useRouter } from "next/navigation";
interface dataTypeProps {
  image: any;
  location: string;
  time: string;
  title: string;
  discript: string;
  path: string;
}

const CardReview = ({
  image,
  location,
  time,
  title,
  discript,
  path,
}: dataTypeProps) => {
  let route = useRouter();
  return (
    <RevalHorezontail>
      <Card
        className="!rounded-3xl !bg-transparent"
        isPressable
        onPress={() => route.push(`/reviews/${path}`)}
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
            <b className="text-primary font-semibold">{location}</b>
            <p className="text-sm font-light">{time}</p>
          </div>
          <div className="max-w-[530px] text-left flex flex-col gap-4">
            <h1 className="text-primary text-2xl font-bold">{title}</h1>
            <p>
              {discript}
            </p>
          </div>
        </CardFooter>
      </Card>
    </RevalHorezontail>
  );
};
export default memo(CardReview);
