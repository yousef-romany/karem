import Image from "next/image";
import { memo } from "react";
import Logo from "@/public/logo.png";
import RevalHorezontail from "./animation/RevalHorezontail";
const Footer = () => {
  return (
    <div className="w-full h-fit py-[78px] px-2 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-8">
        <Image src={Logo} className="max-w-[180px] h-auto" alt="logo" />
        <RevalHorezontail>
          <h1>© 2023 Travel Pulse. All rights reserved</h1>
        </RevalHorezontail>
      </div>
    </div>
  );
};
export default memo(Footer);
