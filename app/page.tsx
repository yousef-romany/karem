"use client";

import FirstLook from "@/components/mainPage/FirstLook";
import FourLook from "@/components/mainPage/FourLook";
import SecoundLook from "@/components/mainPage/SecoundLook";
import TheredLook from "@/components/mainPage/TheredLook";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4">
        <FirstLook />
        <SecoundLook />
        <TheredLook />
        <FourLook />
        <div className="p-10">
          <div
            className="sk-ww-tripadvisor-reviews"
            data-embed-id="25429830"
          ></div>
        </div>
      </section>
    </>
  );
}
