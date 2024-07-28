"use client";
import Image from "next/image";
import destination from "@/public/destenation.png";
import SearchComponentDestination from "@/components/destination/SearchComponentDestination";

export default function DestinationPage() {
  return (
    <section className="h-fit !w-full flex flex-col gap-4">
      {/* start image destination */}
      <div className="w-full h-fit flex flex-wrap">
        <div className="max-h-[90vh] w-full h-auto relative opacity-90 object-cover overflow-hidden">
          <h1 className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-[9] labtop:text-[40px] tablet:text-[40px] text-primary mobile:text-[24px] font-semibold text-center">
            Discovering the wonders of our planet, one adventure at a time
          </h1>
          <div className="relative w-full h-auto flex justify-center items-center !opacity-90">
            <Image
              loading="lazy"
              src={destination}
              alt="destination"
              className="w-full h-auto z-[9]"
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
