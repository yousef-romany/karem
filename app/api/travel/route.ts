// import { db } from "@/config";
// import { collection, onSnapshot } from "firebase/firestore";

import db from "@/utils/firestore";
import { collection, getDocs } from "firebase/firestore";

const fetchItems = async () => {
  const querySnapshot = await getDocs(collection(db, "travels"));
  return querySnapshot.docs.map((doc: any) => ({ ...doc.data(), id: doc.id }));
};

export async function GET() {
  return Response.json(await fetchItems());
}
