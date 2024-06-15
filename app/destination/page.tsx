"use client";
import Image from "next/image";
import destination from "@/public/destenation.png";
import SearchComponentDestination from "@/components/destination/SearchComponentDestination";

export default function DestinationPage() {
  return (
    <section className="h-fit w-full flex flex-col gap-4">
      {/* start image destination */}
      <div className="w-full h-fit flex flex-wrap">
        <div className="relative h-screen w-full">
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[9] w-full">
            <h1 className="labtop:text-[40px] tablet:text-[40px] text-primary mobile:text-[24px] font-semibold text-center">
              Discovering the wonders of our planet, one adventure at a time
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
      {/* end image destination */}
      {/* start section For all destination */}
      <SearchComponentDestination />
      {/* end section For all destination */}
    </section>
  );
}
