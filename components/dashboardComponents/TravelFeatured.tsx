"use client";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { memo } from "react";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { addDoc, collection, getDocs } from "firebase/firestore";
import db from "@/utils/firestore";
import { Card, CardBody } from "@nextui-org/card";
import ListTravel from "./ListTravel";
import { Select, SelectItem } from "@nextui-org/select";

const TravelFeatured = () => {
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
    try {
      const docRef = await addDoc(collection(db, "travels"), {
        url: url,
        title: title,
        details: details,
        price: price,
        minimal: minimal,
        location: location,
        discount: discount,
        statusDiscount: statusDiscount,
      });
      console.log("Document written with ID: ", docRef.id);
      e.target.reset();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <Accordion className="w-full">
      <AccordionItem key="1" aria-label="Add Travel" title="Add Travel">
        <Card>
          <form onSubmit={(e: any) => handleSubmit(e)}>
            <CardBody className="flex flex-col gap-4">
              <Input
                type="url"
                label="URL"
                placeholder="Enter Image URL"
                name="url"
                id="url"
              />
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
                endContent={"%"}
              />
              <Select
                label="Status"
                placeholder="Select status Discount"
                className="max-w-3xl"
                name="statusDiscount"
                id="statusDiscount"
              >
                <SelectItem value={"true"} key={1}>
                  True
                </SelectItem>
                <SelectItem value={"false"} key={2}>
                  False
                </SelectItem>
              </Select>
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
