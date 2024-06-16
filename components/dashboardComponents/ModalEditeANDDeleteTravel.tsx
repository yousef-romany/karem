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
  let [item, setItem]: any = useState({});
  useEffect(() => {
    fetch(`/api/travel/${id || 0}`)
      .then((res) => res.json())
      .then((resData) => {
        setItem(resData);
      })
      .catch((error) => console.log(error));
    if (!item.url) {
      onClose();
    }
  }, [id]);
  useEffect(() => {
    fetch(`/api/travel/${id || 0}`)
      .then((res) => res.json())
      .then((resData) => {
        setItem(resData);
      })
      .catch((error) => console.log(error));
    if (!item.url) {
      onClose();
    }
  }, []);
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
      statusDiscount: statusDiscount || item?.statusDiscount,
    });
    close();
    changeStatusModal();
  };
  const handleDelete = async (close: any) => {
    const itemRef = doc(db, "travels", id);
    await deleteDoc(itemRef);
    close();
    changeStatusModal();
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
                  defaultValue={item?.url}
                />
                <Input
                  type="text"
                  label="Title"
                  placeholder="Enter Title"
                  name="title"
                  id="title"
                  defaultValue={item?.title}
                />
                <Textarea
                  label="Details"
                  placeholder="Enter your Details"
                  className="max-w-3xl"
                  name="details"
                  id="details"
                  defaultValue={item?.details}
                />
                <Input
                  type="number"
                  label="Price"
                  placeholder="Price For One $"
                  name="price"
                  id="price"
                  defaultValue={item?.price}
                />
                <Input
                  type="number"
                  label="Minimal"
                  placeholder="minimal number of Passenger"
                  name="minimal"
                  id="minimal"
                  defaultValue={item?.minimal}
                />
                <Input
                  type="text"
                  label="Location"
                  placeholder="Enter Location"
                  name="location"
                  id="location"
                  defaultValue={item?.location}
                />
                <Input
                  type="number"
                  label="Discount"
                  placeholder="Enter Discount"
                  name="discount"
                  id="discount"
                  endContent={"%"}
                  defaultValue={item?.discount}
                />
                <select
                  className="max-w-3xl text-black"
                  name="statusDiscount"
                  id="statusDiscount"
                  defaultValue={item?.statusDiscount}
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
