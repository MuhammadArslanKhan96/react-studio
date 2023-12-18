import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import React, { useContext } from "react";
import { Context } from "./Context";
import { AiOutlineMail } from "react-icons/ai";

export default function InviteMembers({ isOpen, onOpenChange }) {
    return (
        <div>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className="border border-white rounded-md bg-[#272a2a]

"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-[16px] text-[#efefef] py-[0.5rem]">
                                Invite Members
                            </ModalHeader>

                            <hr />
                            <ModalBody>
                                <div className="w-[100%] flex justify-between items-center gap-[10px]">
                                    {/* <input
     
                                    <AiOutlineMail />
                                   type="text"
                                        placeholder="Invite vie email"
                                        className=" rounded-md bg-[#272a2a] border border-white text-[#b6b8bf] w-[397.33px] h-[42px] p-[8px]"
                                    /> */}
                                    <Input
                                        type="email"
                                        label="Email"
                                        placeholder="you@example.com"
                                        labelPlacement="outside"
                                        startContent={
                                            <AiOutlineMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                        }
                                    />
                                    <button className="text-[#8c8c96] bg-[#606069] text-[16px]  px-[16px] py-[8px] rounded-md">
                                        {" "}
                                        Invite
                                    </button>
                                </div>

                                <div></div>
                                <div></div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}
