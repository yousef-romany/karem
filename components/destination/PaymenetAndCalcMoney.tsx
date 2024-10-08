"use client";

import { memo, useState } from "react";
interface dataTypeProps {
  price: any;
  statusDiscount: any;
  discount: any;
  id: any;
  minimal: any;
  location: any;
  title: any;
  discountPay: any;
}
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import { Divider } from "@nextui-org/divider";
import logo from "@/public/mainLogo.png";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import PayModale from "./PayModale";
import { useDisclosure } from "@nextui-org/modal";

const PaymenetAndCalcMoney = ({
  price,
  statusDiscount,
  discount,
  id,
  minimal,
  title,
  location,
  discountPay,
}: dataTypeProps) => {
  let [numberPassenger, setNumberPassenger]: any = useState(minimal);
  let [totalMoney, setTotalMoney]: any = useState(discount);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleChange = (value: any) => {
    setNumberPassenger(value);
    if (statusDiscount == "true") {
      setTotalMoney(discount * value);
    } else {
      setTotalMoney(price * value);
    }
  };

  return (
    <div className="w-full h-fit">
      <Card isBlurred className="w-full">
        <CardHeader className="flex gap-3">
          <Image
            loading="lazy"
            alt="nextui logo"
            height={40}
            src={logo}
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">Zoe HoliDay Payment</p>
            <p className="text-small text-default-500">ZoeHoliDay.com</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="flex flex-col gap-4">
          <Input
            type="number"
            label="Number passenger"
            placeholder="Enter Number passenger"
            defaultValue={minimal}
            min={minimal}
            onChange={(e: any) => handleChange(e.target.value)}
          />
        </CardBody>
        <Divider />
        <CardFooter className="w-full h-fit flex justify-center items-start flex-col gap-3">
          <Button
            color={"secondary"}
            onPress={() => {
              if (totalMoney && numberPassenger) {
                if (numberPassenger < minimal) {
                  alert(
                    `This Travel the Minimal Passenger for SubScription is ${minimal} !!!`
                  );
                  return;
                }
                onOpen();
                return;
              }
              alert("Please select number of Passengers!!!");
              return;
            }}
          >
            Subscription
          </Button>
          <PayModale
            isOpen={isOpen}
            onOpen={onOpen}
            onOpenChange={onOpenChange}
            nameProduct={`${title}/${location}`}
            coast={totalMoney}
            totalPassenger={numberPassenger}
            discountPay={discountPay}
          />
        </CardFooter>
      </Card>
    </div>
  );
};
export default memo(PaymenetAndCalcMoney);
