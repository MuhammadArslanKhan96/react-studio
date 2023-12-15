import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

export default function EmptyCard() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [active, setActive] = useState("simple");
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
                <ModalContent className="border border-[#44444A] bg-[#2D2D30] rounded-md p-[1.5rem] min-w-[750px]">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Create a Project</ModalHeader>
                            <ModalBody>
                                <div>
                                    <div className="bg-[#44444A] h-[1px]"></div>
                                    <div className="flex gap-4 mt-4">
                                        <div className="flex flex-col gap-2 w-1/2">
                                            <div
                                                className={`border ${
                                                    active === "simple" ? "border-[#255BB8]" : "border-[#44444A]"
                                                } rounded-lg bg-[#2d2d30] text-center p-[16px] cursor-pointer`}
                                                onClick={() => setActive("simple")}
                                            >
                                                <p className="text-[#efefef] text-[16px]">Simple Mode</p>
                                                <p className="text-[#8C8C96] text-[14px]">
                                                    Create short, single-speaker voice overs. Basic functionality for
                                                    easy use.
                                                </p>
                                            </div>
                                            <div
                                                className={`border ${
                                                    active === "advanced" ? "border-[#255BB8]" : "border-[#44444A]"
                                                } rounded-lg bg-[#2d2d30] text-center p-[16px] cursor-pointer`}
                                                onClick={() => setActive("advanced")}
                                            >
                                                <p className="text-[#efefef] text-[16px]">Advanced Mode</p>
                                                <p className="text-[#8C8C96] text-[14px]">
                                                    Create full audio/video content with advanced features
                                                </p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="border border-[#44444A] rounded-[10px] h-fit w-1/2">
                                            {/* <video width="100%" height="100%" autoPlay style={{ borderRadius: "10px" }}> */}
                                            {active === "simple" ? (
                                                <video
                                                    width="100%"
                                                    height="100%"
                                                    autoPlay
                                                    loop
                                                    style={{ borderRadius: "10px" }}
                                                    src="/video/Simple.mp4"
                                                ></video>
                                            ) : (
                                                <video
                                                    width="100%"
                                                    height="100%"
                                                    autoPlay
                                                    loop
                                                    style={{ borderRadius: "10px" }}
                                                    src="/video/Advanced.mp4"
                                                ></video>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#44444A] h-[1px]"></div>
                            </ModalBody>
                            <ModalFooter>
                                <Button className="border border-[#44444A] rounded-[5px] px-4 py-2" onPress={onClose}>
                                    Cancel
                                </Button>
                                <Button className="bg-[#2871DE] rounded-[5px] px-4 py-2" onPress={onClose}>
                                    Create
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
