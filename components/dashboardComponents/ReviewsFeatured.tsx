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
const ReviewsFeatured = () => {
    let [items, setItems]: any = useState([]);
  useEffect(() => {
    fetch("/api/reviews/reviewDash")
      .then((res) => res.json())
      .then((resData) => setItems(resData))
      .catch((error) => console.log(error));
  }, []);
  const handleChange = async (status: any, id: any) => {
    await updateDoc(doc(db, "reviews", id), {
      status: status,
    });
    
    rerender();
  };
  const rerender = () => {
    fetch("/api/reviews/reviewDash")
      .then((res) => res.json())
      .then((resData) => setItems(resData))
      .catch((error) => console.log(error));
  };
  return (
    <Table aria-label="travels Items">
      <TableHeader>
        <TableColumn className="!text-black">Image</TableColumn>
        <TableColumn className="!text-black">user</TableColumn>
        <TableColumn className="!text-black">email</TableColumn>
        <TableColumn className="!text-black">details</TableColumn>
        <TableColumn className="!text-black">title</TableColumn>
        <TableColumn className="!text-black">status</TableColumn>
      </TableHeader>
      <TableBody emptyContent={"No rows to display."}>
        {items?.map((item: any, key: number) => (
          <TableRow key={key}>
            <TableCell>
              <Image src={item?.urlTravel} alt={"logo"} className="max-w-[200px]" />
            </TableCell>
            <TableCell className="!text-black">{item?.name}</TableCell>
            <TableCell className="!text-black">{item?.email}</TableCell>
            <TableCell className="!text-black">{item?.details}</TableCell>
            <TableCell className="!text-black">
              {item?.travelId}
            </TableCell>
            <TableCell>
              <Checkbox
                defaultChecked={item?.status}
                isSelected={item?.status}
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
}
export default ReviewsFeatured;