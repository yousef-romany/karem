"use client";
import { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import db from "@/utils/firestore";
import { Input, Textarea } from "@nextui-org/input";

const ModalEditeANDDeleteTravel = ({
  isOpen,
  onOpenChange,
  onOpen,
  id,
  onClose,
  changeStatusModal,
}: any) => {
  let [url, seturl]: any = useState();
  let [title, settitle]: any = useState();
  let [details, setdetails]: any = useState();
  let [price, setprice]: any = useState();
  let [minimal, setminimal]: any = useState();
  let [location, setlocation]: any = useState();
  let [discount, setdiscount]: any = useState();
  let [statusDiscount, setstatusDiscount]: any = useState();
  useEffect(() => {
    realFn();
  }, [id]);
  useEffect(() => {
    realFn();
  }, []);
  const realFn = async () => {
    console.log(id);
    await fetch(`/api/travel/${id}`)
      .then((res) => res.json())
      .then((resData) => {
        seturl(resData?.url);
        settitle(resData?.title);
        setdetails(resData?.details);
        setprice(resData?.price);
        setminimal(resData?.minimal);
        setlocation(resData?.location);
        setdiscount(resData?.discount);
        setstatusDiscount(resData?.statusDiscount);
      })
      .catch((error) => console.log(error));
    if (!url) {
      onClose();
      return;
    }
  };
  const handleSubmitEdite = async (e: any, close: any) => {
    e.preventDefault();
    let url = e?.target["url"].value;
    let title = e?.target["title"].value;
    let details = e?.target["details"].value;
    let price = e?.target["price"].value;
    let minimal = e?.target["minimal"].value;
    let location = e?.target["location"].value;
    let discount = e?.target["discount"].value;
    let statusDiscount = e?.target["statusDiscount"].value;
    await updateDoc(doc(db, "travels", id), {
      url: url,
      title: title,
      details: details,
      price: price,
      minimal: minimal,
      location: location,
      discount: discount,
      statusDiscount: statusDiscount || statusDiscount,
    });
    changeStatusModal();
    close();
  };
  const handleDelete = async (close: any) => {
    const itemRef = doc(db, "travels", id);
    await deleteDoc(itemRef);
    changeStatusModal();
    close();
  };
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      className="overflow-y-scroll max-h-[600px]"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Hanlde Edite OR Delete
            </ModalHeader>
            <form onSubmit={(e: any) => handleSubmitEdite(e, onClose)}>
              <ModalBody>
                <Input
                  type="url"
                  label="URL"
                  placeholder="Enter Image URL"
                  name="url"
                  id="url"
                  value={url}
                  onValueChange={(event:any) => seturl(event?.target?.value)}
                />
                <Input
                  type="text"
                  label="Title"
                  placeholder="Enter Title"
                  name="title"
                  id="title"
                  value={title}
                  onValueChange={(event:any) => settitle(event?.target?.value)}
                />
                <Textarea
                  label="Details"
                  placeholder="Enter your Details"
                  className="max-w-3xl"
                  name="details"
                  id="details"
                  value={details}
                  onValueChange={(event:any) => setdetails(event?.target?.value)}
                />
                <Input
                  type="number"
                  label="Price"
                  placeholder="Price For One $"
                  name="price"
                  id="price"
                  value={price}
                  onValueChange={(event:any) => setprice(event?.target?.value)}
                />
                <Input
                  type="number"
                  label="Minimal"
                  placeholder="minimal number of Passenger"
                  name="minimal"
                  id="minimal"
                  value={minimal}
                  onValueChange={(event:any) => setminimal(event?.target?.value)}
                />
                <Input
                  type="text"
                  label="Location"
                  placeholder="Enter Location"
                  name="location"
                  id="location"
                  value={location}
                  onValueChange={(event:any) => setlocation(event?.target?.value)}
                />
                <Input
                  type="number"
                  label="Discount"
                  placeholder="Enter Discount"
                  name="discount"
                  id="discount"
                  endContent={"%"}
                  value={discount}
                  onValueChange={(event:any) => setdiscount(event?.target?.value)}
                />
                <select
                  className="max-w-3xl text-black"
                  name="statusDiscount"
                  id="statusDiscount"
                  value={statusDiscount}
                  onChange={(event: any) => setstatusDiscount(event?.target?.value)}
                >
                  <option value="">Select status Discount</option>
                  <option value={"true"} key={1}>
                    True
                  </option>
                  <option value={"false"} key={2}>
                    False
                  </option>
                </select>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={() => handleDelete(onClose)}
                >
                  Delete
                </Button>
                <Button color="primary" type="submit">
                  Edite
                </Button>
              </ModalFooter>
            </form>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
export default ModalEditeANDDeleteTravel;
