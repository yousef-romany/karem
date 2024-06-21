import db from "@/utils/firestore";
import { collection, getDocs, query} from "firebase/firestore";

const fetchItems = async () => {
  const q = query(collection(db, "reviews"));
  const snapshot = await getDocs(q);
  return snapshot?.docs?.map((doc: any) => ({ ...doc.data(), id: doc.id }));
};

export async function GET() {
  return Response.json(await fetchItems());
}
