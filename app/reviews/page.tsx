import { memo } from "react";
import Image from "next/image";
import destination from "@/public/destenation.png";
import CardReview from "@/components/review/CardReview";
import image from "@/public/franch.png";
const Reviews = () => {
  return (
    <section className="h-fit w-full flex flex-col gap-4">
      {/* start image review */}
      <div className="w-full h-fit flex flex-wrap">
        <div className="relative h-screen w-full">
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[9] w-full">
            <h1 className="labtop:text-[40px] tablet:text-[40px] text-primary mobile:text-[24px] font-semibold text-center">
              Share your Travel Experience in form of a story
            </h1>
          </div>
          <div className="relative w-full h-full flex justify-center items-center !opacity-90">
            <Image
              src={destination}
              alt="destination"
              className="!object-fill h-full"
            />
          </div>
        </div>
      </div>
      {/* end image review */}
      <div className="flex flex-wrap justify-between items-center gap-4 px-10 py-16 relative">
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
      </div>
    </section>
  );
};
export default memo(Reviews);
