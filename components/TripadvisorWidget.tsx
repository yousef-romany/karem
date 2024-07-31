"use client";
import { memo } from "react";
import { InView } from "react-intersection-observer";

const TripadvisorWidget = () => {
  return (
    <InView>
      {({ inView, ref, entry }) => (
        <div
          className="elfsight-app-2177c3e1-089e-46d7-8e03-74bb30fdd225 !bg-background"
          ref={ref}
          data-elfsight-app-lazy
        ></div>
      )}
    </InView>
  );
};
export default memo(TripadvisorWidget);
