"use client";

import RevalHorezontail from "@/components/animation/RevalHorezontail";
import Loader from "@/components/Loader";
// import FirstLook from "@/components/mainPage/FirstLook";
// import FourLook from "@/components/mainPage/FourLook";
// import SecoundLook from "@/components/mainPage/SecoundLook";
// import TheredLook from "@/components/mainPage/TheredLook";
import { Button } from "@nextui-org/button";
import dynamic from "next/dynamic";
import { Suspense } from "react";
const FirstLook = dynamic((): any => import("@/components/mainPage/FirstLook"), {
  loading: () => <h1>Loading....</h1>,
});
const SecoundLook = dynamic((): any => import("@/components/mainPage/SecoundLook"), {
  loading: () => <h1>Loading....</h1>,
});
const TheredLook = dynamic((): any => import("@/components/mainPage/TheredLook"), {
  loading: () => <h1>Loading....</h1>,
});
const FourLook = dynamic((): any => import("@/components/mainPage/FourLook"), {
  loading: () => <h1>Loading....</h1>,
});



export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4">
        <FirstLook />
        <SecoundLook />
        <TheredLook />
        <FourLook />
        <div className="w-full labtop:p-10 mobile:p-5 flex gap-4 flex-col">
          <div className="flex justify-between items-center flex-wrap gap-4 bg-success px-4 py-2 !rounded-xl">
            <div className="flex flex-col justify-between">
              <RevalHorezontail>
                <h1 className="text-primary text-[26px] font-bold">
                  TripAdvisor
                </h1>
              </RevalHorezontail>
              <RevalHorezontail>
                <h2 className="text-secondary text-[18px] font-semibold">
                  Reviews In TripAdvisor
                </h2>
              </RevalHorezontail>
            </div>
            <RevalHorezontail>
              <Button
                color="primary"
                variant="bordered"
                // TODO: Set the real account tripadvisor
                // onPress={() => route.push("/destination")}
              >
                View Account
              </Button>
            </RevalHorezontail>
          </div>
          {/* TODO: set real widget */}
          <Suspense fallback={<Loader />}>
            <div
              className="elfsight-app-2177c3e1-089e-46d7-8e03-74bb30fdd225 !bg-background"
              data-elfsight-app-lazy
            ></div>
          </Suspense>
        </div>
      </section>
    </>
  );
}
