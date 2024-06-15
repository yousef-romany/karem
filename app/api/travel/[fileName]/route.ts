import db from "@/utils/firestore";
import { collection, doc, getDoc } from "firebase/firestore";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: { params: any }) {
  let id: string = params.fileName;
   let docRef = doc(db, "travels", id);
   const docSnap = await getDoc(docRef);
   console.log(docSnap.data())
  return Response.json(docSnap.data());
}
