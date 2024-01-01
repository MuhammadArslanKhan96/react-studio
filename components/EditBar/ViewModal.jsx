import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, Select, SelectItem } from "@nextui-org/react";

export default function ViewModal({ isOpen, onOpenChange }) {


    return (
        <div>
            <Modal
                isOpen={!!isOpen}
                onOpenChange={onOpenChange}
                backdrop="opaque"
                classNames={{
                    backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
                }}
            >
                <ModalContent className="bg-[#242427] border border-[#44444A] rounded-[10px] h-full max-w-[67.75rem] max-h-[41.6875rem]">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-[16px] text-[#EFEFEF]">
                                Generated Script
                            </ModalHeader>
                            <div className="bg-[#44444A] h-[1px]"></div>
                            <ModalBody className="h-full p-[1.5rem]">

                                <div className="border border-[#44444A] rounded-[0.5rem] p-[1rem] bg-[#2D2D30] h-full">
                                    {isOpen}
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}
