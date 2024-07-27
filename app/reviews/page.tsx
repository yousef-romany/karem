"use client";
import { memo, useState } from "react";
import CardReview from "@/components/review/CardReview";
import { useQuery } from "@tanstack/react-query";
import { Image } from "@nextui-org/image";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import db from "@/utils/firestore";
import { addDoc, collection } from "firebase/firestore";
import CardSkeleton from "@/components/skeleton/CardSkeleton";
const Reviews = () => {
  let [dataState, setDataState]: any[] = useState([]);
  let [dataReviewState, setDataReviewState]: any[] = useState([]);
  const { isPending, error, data }: any = useQuery({
    queryKey: ["repoDataReviewsPage"],
    queryFn: async () => {
      fetch("/api/destination")
        .then((res) => res.json())
        .then((resData: any) => {
          setDataState(resData);
        })
        .catch((error) => console.log(error));
      fetch("/api/reviews")
        .then((res) => res.json())
        .then((resData: any) => {
          setDataReviewState(resData);
        })
        .catch((error) => console.log(error));
    },
  });
  if (error) {
    return <h1>{error}</h1>;
  }
  let [image, setImage]: any = useState("");
  let [location, setLocation]: any = useState("");
  let handleAddReview = async (e: any) => {
    e.preventDefault();
    let travelId = e?.target["travelId"]?.value;
    let name = e?.target["name"]?.value;
    let email = e?.target["email"]?.value;
    let details = e?.target["details"]?.value;
    try {
      const docRef = await addDoc(collection(db, "reviews"), {
        name: name,
        email: email,
        details: details,
        status: false,
        travelId: location,
        urlTravel: image,
      });
      console.log("Document written with ID: ", docRef.id);
      e.target.reset();
      setImage("");
      setLocation("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  let getId = (id: any) => {
    let locationId =
      dataState?.filter((element: any) => element.id == id)[0].location +
      " , " +
      dataState?.filter((element: any) => element.id == id)[0]?.title;
    let imageURL = dataState?.filter((element: any) => element.id == id)[0].url;
    setImage(imageURL);
    setLocation(locationId);
  };
  return (
    <section className="h-fit w-full flex flex-col gap-4">
      {/* start image review */}
      <div className="w-full h-fit flex flex-wrap px-10 py-8">
        {/* start select package travel */}
        <Card className={"w-full h-fit"}>
          <CardHeader className="flex justify-center items-center">
            <Image src={image} className="max-h-[200px]" alt={"any"} />
          </CardHeader>
          <CardBody className="w-full flex flex-col gap-2">
            <form
              onSubmit={handleAddReview}
              className="w-full flex flex-col gap-2"
            >
              {/* start  details */}
              <select
                required
                className="text-black bg-primary rounded-sm min-w-[260px] min-h-[40px] text-center"
                color="warning"
                name="travelId"
                id="travelId"
                onChange={(e: any) => getId(e?.target?.value)}
              >
                <option>Select Travel</option>
                {dataState?.map((item: any, key: number) => {
                  return (
                    <option value={item.id} key={key} color="warning">
                      {item?.location}, {item?.title}
                    </option>
                  );
                })}
              </select>

              <Input
                name="name"
                id="name"
                isRequired
                type="text"
                color="warning"
                label={"Name"}
                placeholder="Enter Name"
              />
              <Input
                name="email"
                id="email"
                isRequired
                type="email"
                color="warning"
                label={"Email"}
                placeholder="Enter Email"
              />
              <Textarea
                name="details"
                id="details"
                label={"Details"}
                color="warning"
                placeholder="Enter Details"
                isRequired
              ></Textarea>
              <Button
                type="submit"
                color="warning"
                className="text-[20px] font-medium"
              >
                Submit
              </Button>
            </form>
            {/* end details */}
          </CardBody>
        </Card>
        {/* end select package travel */}
      </div>
      {/* end image review */}
      <div className="flex flex-wrap justify-between items-center gap-4 px-10 py-16 relative">
        {isPending
          ? [1, 2, 3, 4, 5]?.map((item: number, key: number) => (
              <CardSkeleton key={key} />
            ))
          : dataReviewState?.map((item: any, key: number) => (
              <CardReview
                key={key}
                image={item?.urlTravel}
                location={item?.travelId}
                time={"Feb 27, 2023 . 4 min read"}
                title={item?.name}
                discript={item?.details}
                id={item?.id}
              />
            ))}
      </div>
    </section>
  );
};
export default memo(Reviews);
