import { memo } from "react"
import MainSectionCardForTheredLook from "../sectionCard/MainSectionCardForTheredLook";

const TheredLook = () => {
    return <div className="w-full h-fit labtop:p-10 mobile:p-5 py-16 relative">
    <MainSectionCardForTheredLook />
  </div>;
}
export default memo(TheredLook);