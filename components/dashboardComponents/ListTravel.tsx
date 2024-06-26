"use client";
import { memo, useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/modal";
import ModalEditeANDDeleteTravel from "./ModalEditeANDDeleteTravel";
const ListTravel = () => {
  let [items, setItems]: any = useState([]);
  useEffect(() => {
    fetch("/api/travel")
      .then((res) => res.json())
      .then((resData) => setItems(resData))
      .catch((error) => console.log(error));
  }, []);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  let [idState, setId]: any = useState();
  let [statusModal, setStatusModal]: any = useState(false);
  const handleEditeOrDelete = (id: string) => {
    setId(id);
    if (id) {
      setStatusModal(true);
      onOpen();
      return;
    }
    return;
  };
  const changeStatusModal = () => {
    setStatusModal(false);
    fetch("/api/travel")
      .then((res) => res.json())
      .then((resData) => setItems(resData))
      .catch((error) => console.log(error));
  };
  return (
    <>
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
          <TableColumn className="!text-black">Edite Or Delete</TableColumn>
        </TableHeader>
        <TableBody emptyContent={"No rows to display."}>
          {items?.map((item: any, key: number) => {
            return (
              <TableRow key={key}>
                <TableCell>
                  <Image
                    src={item.url}
                    alt={"logo"}
                    className="max-w-[200px]"
                  />
                </TableCell>
                <TableCell className="!text-black">{item.title}</TableCell>
                <TableCell className="!text-black">{item.details}</TableCell>
                <TableCell className="!text-black">{item.price}</TableCell>
                <TableCell className="!text-black">{item.minimal}</TableCell>
                <TableCell className="!text-black">{item.location}</TableCell>
                <TableCell className="!text-black">{item.discount}</TableCell>
                <TableCell className="!text-black">
                  {item.statusDiscount}
                </TableCell>
                <TableCell>
                  <Button
                    color="danger"
                    onPress={() => handleEditeOrDelete(item.id)}
                  >
                    Edite Or Delete
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      {statusModal ? (
        <ModalEditeANDDeleteTravel
          isOpen={isOpen}
          onOpen={onOpen}
          onOpenChange={onOpenChange}
          onClose={onClose}
          id={idState}
          changeStatusModal={changeStatusModal}
        />
      ) : null}
    </>
  );
};
export default memo(ListTravel);
