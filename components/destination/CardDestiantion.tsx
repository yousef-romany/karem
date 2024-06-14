import { memo } from "react";
import RevalHorezontail from "../animation/RevalHorezontail";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface dataTypeProps {
    image: any;
    title: string;
    path: string;
}
const CardDestiantion = ({ image, title, path }: dataTypeProps) => {
  let route = useRouter();
  return (
    <RevalHorezontail>
      <Card
        className="!rounded-3xl !bg-transparent"
        isPressable
        onPress={() => route.push("/destination/croatia")}
      >
        <CardBody className="overflow-visible p-0">
          <Image
            alt={"my image"}
            className="w-full object-cover h-[360px]"
            src={image}
          />
        </CardBody>
        <CardFooter className="text-large justify-between">
          <b className="text-primary">Croatia</b>
        </CardFooter>
      </Card>
    </RevalHorezontail>
  );
};
export default memo(CardDestiantion);
