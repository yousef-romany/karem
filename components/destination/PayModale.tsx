"use client";
import { memo, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Tab, Tabs } from "@nextui-org/tabs";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import {
  PayPalButtons,
  PayPalButtonsComponentProps,
} from "@paypal/react-paypal-js";
import { Button } from "@nextui-org/button";
import MassageWhatsApp from "./MassageWhatsApp";
const paypalScriptOptions: any = {
  "client-id":
    "AbG7zxYMCuJdESNUce3_y2RfN4eNdutjVfGVRlKiCXReAfNi1V9T-aaBmkZHpYtrklEFbCe3NDpvrgua",
  currency: "USD",
  "enable-funding": "venmo",
  "disable-funding": "",
  "data-page-type": "product-details",
  components: "buttons",
  "data-sdk-integration-source": "developer-studio",
};
const PayModale = ({
  isOpen,
  onOpen,
  onOpenChange,
  nameProduct,
  coast,
  totalPassenger,
  discountPay,
}: any) => {
  let paypalbuttonTransactionProps: PayPalButtonsComponentProps = {
    style: { layout: "vertical" },
    createOrder(data: any, actions: any) {
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: coast,
              currency_code: "USD",
            },
          },
        ],
      });
    },
    onApprove(data: any, actions: any) {
      /**
       * data: {
       *   orderID: string;
       *   payerID: string;
       *   paymentID: string | null;
       *   billingToken: string | null;
       *   facilitatorAccesstoken: string;
       * }
       */
      return actions.order.capture({}).then((details: any) => {
        alert(
          "Transaction completed by" +
            (details?.payer.name.given_name ?? "No details")
        );

        alert("Data details: " + JSON.stringify(data, null, 2));
      });
    },
  };
  let [selected, setSelected]: any = useState("1");
  return (
    <Modal
      backdrop="opaque"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      classNames={{
        backdrop:
          "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        base: "bg-primary",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Pay Details, Methods
            </ModalHeader>
            <ModalBody className="!max-h-[400px] !overflow-y-scroll">
              <div className="w-full h-fit">
                <h1>Name Product: {nameProduct}</h1>
                <h1>total Passengers : {totalPassenger}</h1>
                <h1>
                  Coast :{" "}
                  {selected == "2"
                    ? parseFloat(coast) - parseFloat(discountPay)
                    : coast}
                </h1>
              </div>
              <Tabs selectedKey={selected} onSelectionChange={setSelected}>
                <Tab
                  key="1"
                  title="Pay Now"
                  className="w-full h-fit flex justify-center items-center bg-white rounded-lg"
                >
                  <PayPalScriptProvider options={paypalScriptOptions}>
                    <PayPalButtons
                      className="w-full flex justify-center items-center bg-transparent"
                      {...paypalbuttonTransactionProps}
                    />
                  </PayPalScriptProvider>
                </Tab>
                <Tab key="2" title="Pay when you meet team" className="w-full">
                  <MassageWhatsApp
                    nameProduct={nameProduct}
                    coast={parseFloat(coast) - parseFloat(discountPay)}
                    totalPassenger={totalPassenger}
                  />
                </Tab>
              </Tabs>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
export default memo(PayModale);
