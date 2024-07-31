import { memo } from "react";
import MainSectionCard from "../sectionCard/MainSectionCard";
import { InView } from "react-intersection-observer";

const SecoundLook = () => {
  return (
    <InView>
      {({ inView, ref, entry }) => (
        <div
          ref={ref}
          className="w-full h-fit labtop:p-10 mobile:p-5 py-16 relative"
        >
          {inView}
          <MainSectionCard />
        </div>
      )}
    </InView>
  );
};
export default memo(SecoundLook);
