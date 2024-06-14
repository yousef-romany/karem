"use client";

import { usePathname } from "next/navigation";

const Posts = () => {
  const pathname = usePathname();

  return (
    <>
      <h1>{pathname.slice(13)}</h1>
    </>
  );
};
export default Posts;
