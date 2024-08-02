"use client";
import { memo, useRef, useState } from "react";
import { Image } from "@nextui-org/image";
import { Steps } from "antd";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { addDoc, collection } from "firebase/firestore";
import db from "@/utils/firestore";
import { Card, CardBody } from "@nextui-org/card";

const AddTravelCard = () => {
  let [urlState, setUrlState]: any = useState([]);
  let [previewSteps, setPreviewSteps]: any = useState([]);
  let [TitleStep, setTitleStepState]: any = useState("");
  let [DiscriptionStep, setDiscriptionStepState]: any = useState("");
  let [statusSubmitButton, setStatusSubmitButton]: any =
    useState<boolean>(true);
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
    if (urlState.length && previewSteps.length) {
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
          steps: previewSteps,
        });
        console.log("Document written with ID: ", docRef.id);
        e.target.reset();
        setPreviewSteps([]);
        setUrlState([]);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } else {
      alert("you forget images or steps");
    }
  };
  const handleButtonUrl = () => {
    let value: any = InputURLRef?.current?.value;
    setUrlState((prev: any) => [...prev, value]);
    alert(`Done, we add : ${value}`);
  };
  const handleAddStep = (event: any) => {
    setPreviewSteps((prev: any) => [
      ...prev,
      {
        title: TitleStep,
        description: DiscriptionStep,
      },
    ]);
  };
  const handleDeleteLastStep = (event: any) => {
    setPreviewSteps((prevItems: any) => prevItems.slice(0, -1));
  };
  return (
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
            <Button size="lg" onClick={() => setUrlState([])} color="danger">
              Reset
            </Button>
          </div>
          <div className="w-full flex flex-wrap gap-4">
            {urlState?.map((item: string, key: number) => (
              <div key={key} className="flex gap-4 items-center">
                <Image
                  loading="lazy"
                  src={item}
                  alt="image"
                  className="max-w-[100px]"
                />
              </div>
            ))}
          </div>
          {/* ----------------------------------------------------------------------------- */}
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
          <div className="flex flex-wrap justify-center items-center gap-2 w-full h-fit flex-wrap">
            <div className="flex flex-wrap gap-2">
              <Input
                isRequired
                type="text"
                label="title Step"
                placeholder="Enter title Step"
                name="titleSteps"
                id="titleSteps"
                onChange={(e) => setTitleStepState(e.target.value)}
              />
              <Input
                isRequired
                type="text"
                label="Discription Step"
                placeholder="Enter Discription Step"
                name="DiscriptionStep"
                id="DiscriptionStep"
                onChange={(e) => setDiscriptionStepState(e.target.value)}
              />
              <Button size="lg" onClick={handleAddStep}>
                +
              </Button>
              <Button size="lg" onClick={handleDeleteLastStep}>
                -
              </Button>
              <Button
                size="lg"
                color="danger"
                onClick={() => setPreviewSteps([])}
              >
                Reset
              </Button>
            </div>
            <Steps
              className="!text-primary"
              direction="vertical"
              size="small"
              current={0}
              items={previewSteps}
            />
          </div>
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
            defaultValue="1"
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
            defaultValue="0"
            disabled
          />
          <select
            className="text-black bg-primary rounded-sm max-w-[260px] min-h-[40px] text-center"
            name="statusDiscount"
            id="statusDiscount"
            disabled
            defaultValue={"false"}
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
            disabled
            endContent={<i className="text-primary">$</i>}
          />
          <Button
            onClick={() => setStatusSubmitButton((prev: boolean) => !prev)}
          >
            Check Data
          </Button>
          <Button type="submit" color="primary" disabled={statusSubmitButton}>
            Submit
          </Button>
        </CardBody>
      </form>
    </Card>
  );
};
export default memo(AddTravelCard);
