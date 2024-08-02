"use client";

import { Image } from "@nextui-org/image";

const Support = () => {
  // WIP: content is undefiend
  return (
    <div className="flex flex-col min-h-screen items-center">
      <div className="flex flex-col gap-8 justify-center items-center h-[calc(100vh-90px)] relative">
        <Image
          src="https://res.cloudinary.com/dir8ao2mt/image/upload/v1722524724/_53a2b88e-9390-4e72-b251-4f6e7f9c6fa8_rwnpmn.jpg"
          className="max-w-[400px] tablet:max-w-[300px] mobile:max-w-full"
        />
        <h1 className="text-6xl tablet:text-3xl mobile:text-xl font-semibold">
          ZoeHolidays Support
        </h1>
      </div>
    </div>
  );
};
export default Support;
