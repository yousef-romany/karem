import { memo } from "react";
import MainSectionCard from "../sectionCard/MainSectionCard";

const SecoundLook = () => {
  return <div className="w-full h-fit labtop:p-10 mobile:p-5 py-16 relative">
    <MainSectionCard />
  </div>;
};
export default memo(SecoundLook);
