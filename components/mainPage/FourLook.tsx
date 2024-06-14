import { memo } from "react";
import RevalHorezontail from "../animation/RevalHorezontail";
import image from "@/public/franch.png";

import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import CardReview from "../review/CardReview";

const FourLook = () => {
  let route = useRouter();
  return (
    <>
      <div className="w-full h-fit px-10 py-16 relative">
        <div className="flex flex-col w-full h-fit gap-6">
          {/* header */}
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div className="flex flex-col justify-between">
              <RevalHorezontail>
                <h1 className="text-primary text-[26px] font-bold">
                  Top Travel Sories
                </h1>
              </RevalHorezontail>
              <RevalHorezontail>
                <h2 className="text-secondary text-[18px] font-semibold">
                  Explore our latest stories from our active users
                </h2>
              </RevalHorezontail>
            </div>
            <RevalHorezontail>
              <Button
                onPress={() => route.push("/reviews")}
                color="primary"
                variant="bordered"
              >
                View All Reviews
              </Button>
            </RevalHorezontail>
          </div>
          {/* end header */}
          {/* body */}
          <div className="flex flex-wrap justify-between items-center gap-4">
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
          {/* end body */}
        </div>
      </div>
    </>
  );
};
export default memo(FourLook);
