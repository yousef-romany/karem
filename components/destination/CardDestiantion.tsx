import { memo } from "react";
import RevalHorezontail from "../animation/RevalHorezontail";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { useRouter } from "next/navigation";

interface dataTypeProps {
    image: any;
    location: string;
}
const CardDestiantion = ({ image, location }: dataTypeProps) => {
  let route = useRouter();
  return (
    <RevalHorezontail>
      <Card
        className="!rounded-3xl pb-4 !bg-success max-w-[400px]"
        isPressable
        onPress={() => route.push(`/destination/${location}`)}
      >
        <CardBody className="overflow-visible p-0">
          <Image
            alt={"my image"}
            className="w-full object-cover max-w-[360px] h-[360px]"
            src={image}
          />
        </CardBody>
        <CardFooter className="text-large justify-between">
          <b className="text-primary">{location}</b>
        </CardFooter>
      </Card>
    </RevalHorezontail>
  );
};
export default memo(CardDestiantion);
