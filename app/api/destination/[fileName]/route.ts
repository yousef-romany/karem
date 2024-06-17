import db from "@/utils/firestore";
import { collection, getDocs, query, where } from "firebase/firestore";
import { NextRequest } from "next/server";

const fetchItems = async (location: any) => {
  // query
  let q = query(collection(db, "travels"), where("location", "==", location));
  const docSnap = await getDocs(q);
  let data = docSnap?.docs?.map((doc: any) => ({ ...doc.data(), id: doc.id }));
  return data;
};
export async function GET(request: NextRequest, { params }: { params: any }) {
  // params
  let location: string = params.fileName;

  return Response.json(await fetchItems(location));
}
