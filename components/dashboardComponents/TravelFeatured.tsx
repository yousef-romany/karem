"use client";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { memo, useRef, useState } from "react";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { addDoc, collection } from "firebase/firestore";
import db from "@/utils/firestore";
import { Card, CardBody } from "@nextui-org/card";
import ListTravel from "./ListTravel";

const TravelFeatured = () => {
  let [urlState, setUrlState]: any = useState([]);
  let InputURLRef: any = useRef();
  const handleSubmit = async (e: any) => {
    e?.preventDefault();
    let url = e?.target["url"].value;
    let title = e?.target["title"].value;
    let details = e?.target["details"].value;
    let price = e?.target["price"].value;
    let minimal = e?.target["minimal"].value;
    let location = e?.target["location"].value;
    let discount = e?.target["discount"].value;
    let statusDiscount = e?.target["statusDiscount"].value;
    let discountPay = e?.target["discountPay"].value;
    if (!urlState.length) return;
    try {
      const docRef = await addDoc(collection(db, "travels"), {
        url: urlState,
        title: title,
        details: details,
        price: price,
        minimal: minimal,
        location: location,
        discount: discount,
        statusDiscount: statusDiscount,
        explore: false,
        discountPay: discountPay,
      });
      console.log("Document written with ID: ", docRef.id);
      e.target.reset();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const handleButtonUrl = () => {
    let value: any = InputURLRef?.current?.value;
    urlState.push(value);
    alert(`Done, we add : ${value}`);
  };
  return (
    <Accordion className="w-full">
      <AccordionItem key="1" aria-label="Add Travel" title="Add Travel">
        <Card>
          <form onSubmit={(e: any) => handleSubmit(e)}>
            <CardBody className="flex flex-col gap-4">
              <div className="flex justify-between items-center gap-2">
                <Input
                  type="url"
                  label="URL"
                  placeholder="Enter Image URL"
                  name="url"
                  id="url"
                  ref={InputURLRef}
                />
                <Button size="lg" onClick={handleButtonUrl}>
                  +
                </Button>
                <Button size="lg" onClick={() => setUrlState([])}>
                  Reset
                </Button>
              </div>
              <Input
                type="text"
                label="Title"
                placeholder="Enter Title"
                name="title"
                id="title"
              />
              <Textarea
                label="Details"
                placeholder="Enter your Details"
                className="max-w-3xl"
                name="details"
                id="details"
              />
              <Input
                type="number"
                label="Price"
                placeholder="Price For One $"
                name="price"
                id="price"
              />
              <Input
                type="number"
                label="Minimal"
                placeholder="minimal number of Passenger"
                name="minimal"
                id="minimal"
              />
              <Input
                type="text"
                label="Location"
                placeholder="Enter Location"
                name="location"
                id="location"
              />
              <Input
                type="number"
                label="Discount"
                placeholder="Enter Discount"
                name="discount"
                id="discount"
                endContent={<i className="text-primary">%</i>}
              />
              <select
                className="text-black bg-primary rounded-sm max-w-[260px] min-h-[40px] text-center"
                name="statusDiscount"
                id="statusDiscount"
              >
                <option value="">Select status Discount</option>
                <option value={"true"} key={1}>
                  True
                </option>
                <option value={"false"} key={2}>
                  False
                </option>
              </select>
              <Input
                type="number"
                defaultValue="0"
                label="Discount When Pay With Credit Card"
                placeholder="Enter Discount"
                name="discountPay"
                id="discountPay"
                endContent={<i className="text-primary">$</i>}
              />
              <Button type="submit" color="primary">
                Submit
              </Button>
            </CardBody>
          </form>
        </Card>
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Edite Or Delete Travel"
        title="Edite Or Delete Travel"
      >
        <ListTravel />
      </AccordionItem>
    </Accordion>
  );
};
export default memo(TravelFeatured);
