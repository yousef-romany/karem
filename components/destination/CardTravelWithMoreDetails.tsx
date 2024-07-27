import { memo } from "react";
import RevalHorezontail from "../animation/RevalHorezontail";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";

interface dataTypeProps {
  id: string;
  image: any;
  location: string;
  title: string;
  statusDiscount: string;
  price: number;
  discount: number;
}
const CardTravelWithMoreDetails = ({
  id,
  image,
  location,
  title,
  price,
  discount,
  statusDiscount,
}: dataTypeProps) => {
  return (
    <RevalHorezontail width="100%">
      <Card className="!rounded-3xl !bg-transparent overflow-hidden max-w-[440px]">
        <CardBody className="overflow-visible p-0">
          <Swiper
          className="w-full"
            autoplay={{
              delay: 3000,
            }}
            modules={[Autoplay]}
          >
            {image?.map((item: string, key: number) => (
              <SwiperSlide key={key} className="w-full">
                <Image
                  alt={"my image"}
                  className="!w-full object-cover max-w-full h-[360px]"
                  src={item}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </CardBody>
        <CardFooter className="flex flex-col items-center">
          <div
            className="text-large justify-between w-full flex"
          >
            <b className="text-primary">{title?.slice(0, 13)}...</b>
            {statusDiscount == "true" ? (
              <div className="flex gap-2">
                <h1 className="line-through text-danger">{price} $</h1>
                to
                <h1 className="text-primary">
                  {price - (discount / 100) * price} $
                </h1>
              </div>
            ) : (
              <h1 className="text-primary">{price} $</h1>
            )}
          </div>
          <Link className="underline" href={`/destination/${location}/${id}`}>View More</Link>
        </CardFooter>
      </Card>
    </RevalHorezontail>
  );
};
export default memo(CardTravelWithMoreDetails);
