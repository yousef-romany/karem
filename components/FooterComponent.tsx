import Image from "next/image";
import { memo } from "react";
import Logo from "@/public/logo.png";
import RevalHorezontail from "./animation/RevalHorezontail";
import { Divider } from "@nextui-org/divider";
import { FaSquarePhone } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { LiaTripadvisor } from "react-icons/lia";
import { RiFacebookBoxFill } from "react-icons/ri";
import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";
import getYourGuid from "@/public/getyourguide.svg";
import viaTour from "@/public/viatour.svg";
import { Button } from "@nextui-org/button";
import Link from "next/link";

const FooterComponent = () => {
  return (
    <div className="w-full h-fit py-[78px] px-4 bg-success flex flex-col gap-[80px]">
      <ul className="w-full flex justify-center items-center gap-6">
        <Link href={"https://tripadvisor.com/"}>
          <li>
            <LiaTripadvisor size={25} className="text-primary" />
          </li>
        </Link>
        <Link href={"https://tripadvisor.com/"}>
          <li>
            <RiFacebookBoxFill size={25} className="text-primary" />
          </li>
        </Link>
        <Link href={"https://tripadvisor.com/"}>
          <li>
            <IoLogoInstagram size={25} className="text-primary" />
          </li>
        </Link>
        <Link href={"https://tripadvisor.com/"}>
          <li>
            <Image
              src={getYourGuid}
              alt="get your guid"
              className="text-primary max-w-[22.5px]"
            />
          </li>
        </Link>
        <Link href={"https://tripadvisor.com/"}>
          <li>
            <Image
              src={viaTour}
              alt="get your guid"
              className="text-primary max-w-[22.5px]"
            />
          </li>
        </Link>
        <Link href={"https://tripadvisor.com/"}>
          <li>
            <IoLogoWhatsapp size={25} className="text-primary" />
          </li>
        </Link>
      </ul>
      <div className="w-full h-fit flex  gap-12 flex-wrap justify-center">
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
                {/* WIP: set real phone number */}
                <p>+201282066148</p>
              </div>
            </RevalHorezontail>
            <RevalHorezontail>
              <div className="flex gap-2 justify-center items-center text-secondary">
                <CgMail size={25} className="text-primary" />{" "}
                {/* WIP: set real Gmail */}
                <p>yousefromany527@gmail.com</p>
              </div>
            </RevalHorezontail>
          </div>
        </div>
        <div className="flex flex-wrap w-fit h-fit gap-6 justify-between">
          <div className="flex flex-col gap-4">
            <RevalHorezontail>
              <h1 className="text-primary text-[30px]">More Details:</h1>
            </RevalHorezontail>
            <div className="flex flex-col gap-2 items-start">
              <RevalHorezontail>
                <Button
                  variant="light"
                  as={Link}
                  size="lg"
                  href="/review"
                  className="text-secondary"
                >
                  <h1>Reviews</h1>
                </Button>
              </RevalHorezontail>
              <RevalHorezontail>
                <Button
                  variant="light"
                  as={Link}
                  size="lg"
                  href="/offers"
                  className="text-secondary"
                >
                  Offers
                </Button>
              </RevalHorezontail>
              <RevalHorezontail>
                <Button
                  variant="light"
                  as={Link}
                  size="lg"
                  href="/explore"
                  className="text-secondary"
                >
                  Explore
                </Button>
              </RevalHorezontail>
              <RevalHorezontail>
                <Button
                  variant="light"
                  as={Link}
                  size="lg"
                  href="/home"
                  className="text-secondary"
                >
                  Home
                </Button>
              </RevalHorezontail>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <RevalHorezontail>
              <h1 className="text-primary text-[30px]">Contacts: </h1>
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
      </div>
      <div className="flex justify-center items-center">
        <RevalHorezontail>
          <h1 className="text-content1">
            © 2023 Travel Pulse. All rights reserved
          </h1>
        </RevalHorezontail>
      </div>
    </div>
  );
};
export default memo(FooterComponent);
