import { memo } from "react";
import RevalHorezontail from "../animation/RevalHorezontail";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";

interface dataTypeProps {
  id: string;
  image: string[];
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
  let route = useRouter();
  console.log(image);
  return (
    <RevalHorezontail>
      <Card className="!rounded-3xl !bg-transparent overflow-hidden max-w-[320px]">
        <CardBody className="overflow-visible p-0">
          <Swiper
          className="w-full"
            autoplay={{
              delay: 3000,
            }}
            modules={[Autoplay]}
          >
            {image?.map((item: string, key: number) => (
              <SwiperSlide key={key}>
                <Image
                  alt={"my image"}
                  className="w-full object-cover max-w-[360px] h-[360px]"
                  src={item}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </CardBody>
        <CardFooter>
          <div
            className="text-large justify-between w-full flex"
            onClick={() => route.push(`/destination/${location}/${id}`)}
          >
            <b className="text-primary">{title.slice(0, 10)}...</b>
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
        </CardFooter>
      </Card>
    </RevalHorezontail>
  );
};
export default memo(CardTravelWithMoreDetails);
