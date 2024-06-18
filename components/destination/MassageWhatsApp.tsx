"use client";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import { useState } from "react";

const MassageWhatsApp = ({ nameProduct, coast, totalPassenger }: any) => {
  let [number, setNumber]: any = useState(0);
  let [name, setName]: any = useState("");
  let [country, setCountry]: any = useState("");
  let massage = `
        Hi ZoeHolday
        My name is ${name}, I from ${country}
        My Phone Number is ${number}
        I want Subscription for ${nameProduct},
        Total Passenger is ${totalPassenger}
        And the Coast is ${coast}.
        and I will paid when meet the Team.
    `;
  const handleClick = () => {
    alert(name);
    alert(number);
    alert(country);
  };
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-danger font-semibold">
        {" "}
        Warning: If the agreement is reached and then violated, we will put you
        on the Black list.
      </h1>
      <div className="flex flex-col gap-4">
        <Input
          type="tel"
          label="Phone Number"
          title="Please Enter Your Number"
          placeholder="Please Enter Your Number"
          onChange={(e: any) => setNumber(e.target.value)}
        />
        <Input
          type="text"
          label="Name"
          title="Please Enter Your Name"
          placeholder="Please Enter Your Name"
          onChange={(e: any) => setName(e.target.value)}
        />
        <Input
          type="text"
          label="Country"
          title="Please Enter Your Country"
          placeholder="Please Enter Your Country"
          onChange={(e: any) => setCountry(e.target.value)}
        />
      </div>
      <Link
        href={`https://wa.me/01282066148?text=${massage}`}
        color={"secondary"}
        isExternal
        onClick={handleClick}
      >
        <Button color="secondary">
          send
        </Button>
      </Link>
    </div>
  );
};
export default MassageWhatsApp;
