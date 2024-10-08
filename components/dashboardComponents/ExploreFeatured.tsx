"use client";
import { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { doc, updateDoc } from "firebase/firestore";
import db from "@/utils/firestore";
import { Image } from "@nextui-org/image";
import { Checkbox } from "@nextui-org/checkbox";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
const fetchData = async () => {
  const response = await fetch("/api/travel");
  const data = await response.json();
  return data;
};
const ExploreFeatured = () => {
  const { isPending, error, data }: any = useQuery({
    queryKey: ["repoDataExplore"],
    queryFn: fetchData,
  });
  if (error) {
    return <h1>{error}</h1>;
  }

  let route = useRouter();
  const handleChange = async (status: any, id: any) => {
    await updateDoc(doc(db, "travels", id), {
      explore: status,
    });
    route.refresh();
  };
  return (
    <Table aria-label="travels Items">
      <TableHeader>
        <TableColumn className="!text-black">Image</TableColumn>
        <TableColumn className="!text-black">title</TableColumn>
        <TableColumn className="!text-black">details</TableColumn>
        <TableColumn className="!text-black">price</TableColumn>
        <TableColumn className="!text-black">minimal</TableColumn>

        <TableColumn className="!text-black">Location</TableColumn>
        <TableColumn className="!text-black">Discount</TableColumn>
        <TableColumn className="!text-black">Status for Discount</TableColumn>
        <TableColumn className="!text-black">Check</TableColumn>
      </TableHeader>
      <TableBody
        loadingContent={isPending}
        emptyContent={"No rows to display."}
      >
        {data?.map((item: any, key: number) => (
          <TableRow key={key}>
            <TableCell>
              <Swiper
                className="w-[300px]"
                spaceBetween={0}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 5,
                  },
                  // when window width is >= 480px
                  480: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  // when window width is >= 640px
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  860: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                  },
                }}
                autoplay={{
                  delay: 3000,
                }}
                modules={[Autoplay]}
              >
                {item["url"]?.map((itemImage: string, key: number) => (
                  <SwiperSlide
                    key={key}
                    className="flex justify-center items-center"
                  >
                    <Image
                      loading="lazy"
                      alt={item?.title}
                      className="w-full object-cover max-w-[300px] h-[360px]"
                      src={itemImage}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </TableCell>
            <TableCell className="!text-black">{item?.title}</TableCell>
            <TableCell className="!text-black">{item?.details}</TableCell>
            <TableCell className="!text-black">{item?.price}</TableCell>
            <TableCell className="!text-black">{item?.minimal}</TableCell>
            <TableCell className="!text-black">{item?.location}</TableCell>
            <TableCell className="!text-black">{item?.discount}</TableCell>
            <TableCell className="!text-black">
              {item?.statusDiscount}/ {`${item?.explore}`}
            </TableCell>
            <TableCell>
              <Checkbox
                defaultChecked={item?.explore}
                isSelected={item?.explore}
                onValueChange={(status: any) => handleChange(status, item?.id)}
              ></Checkbox>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default ExploreFeatured;
