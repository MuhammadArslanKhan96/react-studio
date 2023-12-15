import React from "react";
import { FaPlus } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

export default function EmptyCard() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <>
            <div
                className="max-w-[330px] min-w-[310px] min-h-[260px] max-h-[270px] border border-[#2871DE] rounded-[5px] bg-[#242427] hover:bg-[#353538] flex flex-col justify-center items-center cursor-pointer"
                onClick={onOpen}
            >
                {/* <div className="flex flex-col justify-center items-center h-full"> */}
                <FaPlus color="#2871DE" />
                <p className="text-[#2871DE]">New Project</p>
                {/* </div> */}
            </div>
            {/* <Button onPress={onOpen}>Open Modal</Button> */}
            <Modal
                backdrop="opaque"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                classNames={{
                    backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
                }}
            >
                <ModalContent className="border border-[#44444A] bg-[#2D2D30] rounded-md p-[1.5rem]">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Create a Project</ModalHeader>
                            <ModalBody>
                                <div>
                                    <hr />
                                    <div className="">
                                        <div className="border border-[#255BB8] rounded-lg bg-[#2d2d30] text-center p-[16px]">
                                            <p className="text-[#efefef] text-[16px]">Simple Mode</p>
                                            <p className="text-[#8C8C96] text-[14px]">
                                                Create short, single-speaker voice overs. Basic functionality for easy
                                                use.
                                            </p>
                                        </div>
                                        <div className="border border-[#44444A] rounded-lg bg-[#2d2d30] text-center p-[16px] mt-[20px]">
                                            <p className="text-[#efefef] text-[16px]">Advanced Mode</p>
                                            <p className="text-[#8C8C96] text-[14px]">
                                                Create full audio/video content with advanced features
                                            </p>
                                        </div>
                                        <hr />
                                        <div className="border border-white">
                                            <video src="/video/Simple.mp4" />
                                        </div>
                                        <hr />
                                    </div>
                                </div>
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
        </>
    );
}
