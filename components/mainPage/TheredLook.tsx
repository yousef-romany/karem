import { memo } from "react";
import MainSectionCardForTheredLook from "../sectionCard/MainSectionCardForTheredLook";
import { InView } from "react-intersection-observer";

const TheredLook = () => {
  return (
    <InView>
      {({ inView, ref, entry }) => (
        <div
          ref={ref}
          className="w-full h-fit labtop:p-10 mobile:p-5 py-16 relative"
        >
          <MainSectionCardForTheredLook />
        </div>
      )}
    </InView>
  );
};
export default memo(TheredLook);
