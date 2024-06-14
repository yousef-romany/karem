"use client";

import FirstLook from "@/components/mainPage/FirstLook";
import FourLook from "@/components/mainPage/FourLook";
import SecoundLook from "@/components/mainPage/SecoundLook";
import TheredLook from "@/components/mainPage/TheredLook";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-">
        <FirstLook />
        <SecoundLook />
        <TheredLook />
        <FourLook />
      </section>
    </>
  );
}
