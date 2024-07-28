import { memo } from "react";
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
    <Card
      className="!rounded-3xl pb-4 !bg-success !w-full"
      isPressable
      onPress={() => route.push(`/destination/${location}`)}
    >
      <CardBody className="overflow-visible p-0">
        <Image
          loading="lazy"
          alt={location}
          className="w-full object-cover max-w-full h-[360px]"
          src={image}
        />
      </CardBody>
      <CardFooter className="text-large justify-between">
        <b className="text-primary">{location}</b>
      </CardFooter>
    </Card>
  );
};
export default memo(CardDestiantion);
