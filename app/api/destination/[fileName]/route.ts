import db from "@/utils/firestore";
import { collection, getDocs, query, where } from "firebase/firestore";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: { params: any }) {
  // params
  let location: string = params.fileName;
  // query
  let q = query(collection(db, "travels"), where("location", "==", location));
  const docSnap = await getDocs(q);
  return Response.json(
    docSnap?.docs?.map((doc: any) => ({ ...doc.data(), id: doc.id }))
  );
}
