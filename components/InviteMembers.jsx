import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import React, { useContext } from "react";
import { Context } from "./Context";
import { AiOutlineMail } from "react-icons/ai";
import Image from "next/image";
import { Avatar } from "antd";

export default function InviteMembers({ isOpen, onOpenChange }) {
    return (
        <div>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className="border border-[#44444A] rounded-[0.25rem] bg-[#242427] "
            >
                <ModalContent className="max-w-[32rem] min-h-[30.25rem]">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-[16px] text-[#efefef] py-[0.5rem] ">
                                Invite Members
                            </ModalHeader>

                            <hr className="border border-[#44444A]" />
                            <ModalBody>
                                <div className="w-[100%] flex justify-between items-center gap-[10px]">
                                    <Input
                                        type="email"
                                        placeholder="Invite vie email"
                                        labelPlacement="outside"
                                        className=" rounded-[0.25rem] bg-[#242427] border border-[#44444A] text-[#b6b8bf] text-[17px] w-[397.33px] h-[42px] pt-[8px] pb-[8px] pl-[0px] pl-[0px]"
                                        startContent={<AiOutlineMail className="text-[24px] text-[#fff]" />}
                                    />
                                    <button className="text-[#8c8c96] bg-[#606069] text-[16px]  px-[16px] py-[8px] rounded-[0.25rem]">
                                        {" "}
                                        Invite
                                    </button>
                                </div>

                                <div className="flex justify-start items-center gap-1">
                                    <span className="text-[#fff] text-[14px]">Members</span>
                                    <span className="text-[#8c8c96] text-[14px]">(1)</span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <div className="flex justify-center items-center gap-2">
                                        <Avatar className="bg-[red]" />
                                        <div>
                                            <p className="text-[14px] text-[#fff]">Username</p>
                                            <p className="text-[12px] text-[#b6b8bf]">user@gmail.com</p>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-[12px] text-[#8c8c96]">Owner</p>
                                    </div>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}
