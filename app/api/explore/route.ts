import db from "@/utils/firestore";
import { collection, getDocs, query, where } from "firebase/firestore";

const fetchItems = async () => {
  const q = query(collection(db, "travels"), where("explore", "==", true));
  const snapshot = await getDocs(q);
  console.log(
    snapshot?.docs?.map((doc: any) => ({ ...doc.data(), id: doc.id }))
  );

  return snapshot?.docs?.map((doc: any) => ({ ...doc.data(), id: doc.id }));
};

export async function GET() {
  return Response.json(await fetchItems());
}