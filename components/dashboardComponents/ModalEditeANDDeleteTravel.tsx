import { useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";

const ModalEditeANDDeleteTravel = ({
  isOpen,
  onOpenChange,
  onOpen,
  id,
}: any) => {
  useEffect(() => {
    fetch(`/api/travel/${id}`)
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
      })
      .catch((error) => console.log(error));
  }, [id]);
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Hanlde Edite OR Delete
            </ModalHeader>
            <ModalBody>hello world</ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Delete
              </Button>
              <Button color="primary" onPress={onClose}>
                Edite
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
export default ModalEditeANDDeleteTravel;
