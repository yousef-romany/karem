"use client";

import CardReview from "@/components/review/CardReview";
import { usePathname } from "next/navigation";
import image from "@/public/franch.png";

const Posts = () => {
  const pathname = usePathname();

  return (
    <>
      <h1>{pathname.slice(9)}</h1>
      <CardReview
        image={image}
        location={"Prague, Ukraine"}
        time={"Feb 27, 2023 . 4 min read"}
        title={"The Petrin Hill"}
        discript={`I visited Prague, the beautiful capital city of the Czech
              Republic, and one of my favorite places in the city was the Petrin
              Hill. The Petrin Hill is a green oasis in the heart of Prague.`}
        path={"one"}
      />
    </>
  );
};
export default Posts;
