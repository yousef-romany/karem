"use client";
import {
  PayPalScriptProvider,
  PayPalButtons,
  FUNDING,
} from "@paypal/react-paypal-js";
import { memo, useState } from "react";
interface dataTypeProps {
  price: any;
  statusDiscount: any;
  discount: any;
  id: any;
  minimal: any;
}
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import { Divider } from "@nextui-org/divider";
import logo from "@/public/mainLogo.png";
import { Input } from "@nextui-org/input";

const PaymenetAndCalcMoney = ({
  price,
  statusDiscount,
  discount,
  id,
  minimal,
}: dataTypeProps) => {
  let [numberPassenger, setNumberPassenger]: any = useState(minimal);
  let [totalMoney, setTotalMoney]: any = useState(discount);
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
          <Image alt="nextui logo" height={40} src={logo} width={40} />
          <div className="flex flex-col">
            <p className="text-md">Zoe HoliDay</p>
            <p className="text-small text-default-500">ZoeHoliDay.org</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <Input
            type="number"
            label="Number passenger"
            placeholder="Enter Number passenger"
            defaultValue={minimal}
            min={minimal}
            onChange={(e: any) => handleChange(e.target.value)}
          />
          {totalMoney} $
        </CardBody>
        <Divider />
        <CardFooter>
          <PayPalScriptProvider options={undefined}          // options={{
          //   "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID as string,
          //   currency: "PHP",
          // }}
          >
            <PayPalButtons
              style={{
                color: "gold",
                shape: "rect",
                label: "pay",
                height: 50,
              }}
              fundingSource={FUNDING.PAYPAL}
              // createOrder={createPayPalOrder}
              // onApprove={onApprove}
            />
          </PayPalScriptProvider>
        </CardFooter>
      </Card>
    </div>
  );
};
export default memo(PaymenetAndCalcMoney);
