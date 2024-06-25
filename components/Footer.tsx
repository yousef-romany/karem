import Image from "next/image";
import { memo } from "react";
import Logo from "@/public/logo.png";
import RevalHorezontail from "./animation/RevalHorezontail";
import { Divider } from "@nextui-org/divider";
import { FaSquarePhone } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { MdLocationOn } from "react-icons/md";
import { Button } from "@nextui-org/button";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-fit py-[78px] px-4 flex bg-success gap-12 flex-wrap justify-center">
      <div className="flex flex-col justify-center items-center gap-8 max-w-[300px]">
        <Image src={Logo} className="max-w-[180px] h-auto" alt="logo" />
        <RevalHorezontail>
          <h1 className="text-secondary text-left">
            Welcome to our Trip and Tour Agency. Lorem simply text amet cing
            elit.
          </h1>
        </RevalHorezontail>
        <Divider />
        <div className="flex flex-col items-start w-full gap-2">
          <RevalHorezontail>
            <div className="flex gap-2 justify-center items-center text-secondary">
              <FaSquarePhone size={25} className="text-primary" />{" "}
              <p>+201282066148</p>
            </div>
          </RevalHorezontail>
          <RevalHorezontail>
            <div className="flex gap-2 justify-center items-center text-secondary">
              <CgMail size={25} className="text-primary" />{" "}
              <p>yousefromany527@gmail.com</p>
            </div>
          </RevalHorezontail>
          <RevalHorezontail>
            <div className="flex gap-2 justify-center items-center text-secondary">
              <MdLocationOn size={25} className="text-primary" />
              <p>66 Eleatemad ST, Luxor, Egypt</p>
            </div>
          </RevalHorezontail>
        </div>
        {/* <RevalHorezontail>
          <h1 className="text-content1">© 2023 Travel Pulse. All rights reserved</h1>
        </RevalHorezontail> */}
      </div>
      <div className="flex flex-col gap-4">
        <RevalHorezontail>
          <h1 className="text-primary text-[30px]">Company</h1>
        </RevalHorezontail>
        <div className="flex flex-col gap-2 items-start">
          <RevalHorezontail>
            <Button
              variant="light"
              as={Link}
              size="lg"
              href="/about"
              className="text-secondary"
            >
              <h1>About us</h1>
            </Button>
          </RevalHorezontail>
          <RevalHorezontail>
            <Button
              variant="light"
              as={Link}
              size="lg"
              href="/support"
              className="text-secondary"
            >
              Support
            </Button>
          </RevalHorezontail>
        </div>
      </div>
    </div>
  );
};
export default memo(Footer);
