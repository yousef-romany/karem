"use client";

import RevalHorezontail from "@/components/animation/RevalHorezontail";
import FirstLook from "@/components/mainPage/FirstLook";
import FourLook from "@/components/mainPage/FourLook";
import SecoundLook from "@/components/mainPage/SecoundLook";
import TheredLook from "@/components/mainPage/TheredLook";
import { Button } from "@nextui-org/button";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4">
        <FirstLook />
        <SecoundLook />
        <TheredLook />
        <FourLook />
        <div className="labtop:p-10 mobile:p-5 flex gap-4 flex-col">
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
                // WIP: Set the real account tripadvisor
                // onPress={() => route.push("/destination")}
              >
                View Account
              </Button>
            </RevalHorezontail>
          </div>
          {/* WIP: set real widget */}
          <div
            className="sk-ww-tripadvisor-reviews"
            data-embed-id="25429830"
          ></div>
        </div>
      </section>
    </>
  );
}
