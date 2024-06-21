import db from "@/utils/firestore";
import { doc, getDoc } from "firebase/firestore";
import { NextRequest } from "next/server";

const fetchItems = async (id: any) => {
  let docRef = doc(db, "reviews", id);
  const docSnap = await getDoc(docRef);
  let data = docSnap.data();
  return data;
};
export async function GET(request: NextRequest, { params }: { params: any }) {
  let id: string = params?.fileName;
  return Response.json(await fetchItems(id));
}
