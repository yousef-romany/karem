// import { db } from "@/config";
// import { collection, onSnapshot } from "firebase/firestore";

import db from "@/utils/firestore";
import {
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";

const fetchItems = async () => {
  const q = query(collection(db, "travels"), orderBy("location"));
  const snapshot = await getDocs(q);
  return snapshot?.docs?.map((doc: any) => ({ ...doc.data(), id: doc.id }));
};

export async function GET() {
  return Response.json(await fetchItems());
}
