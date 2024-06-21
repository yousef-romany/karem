"use client";
import { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { doc, updateDoc } from "firebase/firestore";
import db from "@/utils/firestore";
import { Image } from "@nextui-org/image";
import { Checkbox } from "@nextui-org/checkbox";
const ExploreFeatured = () => {
  let [items, setItems]: any = useState([]);
  useEffect(() => {
    fetch("/api/travel")
      .then((res) => res.json())
      .then((resData) => setItems(resData))
      .catch((error) => console.log(error));
  }, []);
  const handleChange = async (status: any, id: any) => {
    await updateDoc(doc(db, "travels", id), {
      explore: status,
    });
    rerender();
  };
  const rerender = () => {
    fetch("/api/travel")
      .then((res) => res.json())
      .then((resData) => setItems(resData))
      .catch((error) => console.log(error));
  };
  return (
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
        <TableColumn className="!text-black">Check</TableColumn>
      </TableHeader>
      <TableBody emptyContent={"No rows to display."}>
        {items?.map((item: any, key: number) => (
          <TableRow key={key}>
            <TableCell>
              <Image src={item?.url} alt={"logo"} className="max-w-[200px]" />
            </TableCell>
            <TableCell className="!text-black">{item?.title}</TableCell>
            <TableCell className="!text-black">{item?.details}</TableCell>
            <TableCell className="!text-black">{item?.price}</TableCell>
            <TableCell className="!text-black">{item?.minimal}</TableCell>
            <TableCell className="!text-black">{item?.location}</TableCell>
            <TableCell className="!text-black">{item?.discount}</TableCell>
            <TableCell className="!text-black">
              {item?.statusDiscount}
            </TableCell>
            <TableCell>
              <Checkbox
                defaultChecked={item?.explore}
                isSelected={item?.explore}
                onValueChange={async (status: any) =>
                  await handleChange(status, item?.id)
                }
              ></Checkbox>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default ExploreFeatured;
