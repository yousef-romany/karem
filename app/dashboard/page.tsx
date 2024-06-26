"use client";
import { Tabs, Tab } from "@nextui-org/tabs";
import { memo, useEffect, useState } from "react";
import TravelFeatured from "@/components/dashboardComponents/TravelFeatured";
import ExploreFeatured from "@/components/dashboardComponents/ExploreFeatured";
import ReviewsFeatured from "@/components/dashboardComponents/ReviewsFeatured";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let [status, setStatus]: any = useState(true);
  useEffect(() => {
    onOpen();
  }, []);
  const handleAuthO = (event: any) => {
    event.preventDefault();
    let userName: string = event?.target["userName"]?.value;
    let password: string = event?.target["password"]?.value
    if (userName === "admin" && password === "123") {
      onClose();
      setStatus(false);
      return;
    } else {
      return;
    }
  };
  return (
    <div className="w-full h-fit flex justify-center items-center">
      <Modal backdrop={"blur"} isOpen={isOpen}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Login in
              </ModalHeader>
              <form onSubmit={(event: any) => handleAuthO(event)}>
                <ModalBody className="flex flex-col gap-6">
                  <div className="flex gap-2 items-center flex-wrap">
                    <label htmlFor="userName">UserName</label>
                    <Input
                      type="text"
                      placeholder="Enter UserName"
                      label="UserName"
                      name="userName"
                      id="username"
                      isRequired
                    />
                  </div>
                  <div className="flex gap-2 items-center flex-wrap">
                    <label htmlFor="password">Password</label>
                    <Input
                      type="password"
                      placeholder="Enter Password"
                      label="Password"
                      name="password"
                      id="password"
                      isRequired
                    />
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button type="submit" color="primary">Login in</Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
      <div className="w-full flex justify-center items-center flex-col">
        <Tabs aria-label="Dashboard Options" isDisabled={status}>
          <Tab key="Travel" title="Travel" className="w-full">
            <TravelFeatured />
          </Tab>
          <Tab key="Explore" title="Explore">
            <ExploreFeatured />
          </Tab>
          <Tab key="Reviews" title="Reviews">
            <ReviewsFeatured />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};
export default memo(Dashboard);
