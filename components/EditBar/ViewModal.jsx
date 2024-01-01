import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, Select, SelectItem } from "@nextui-org/react";
import { CiMusicNote1 } from "react-icons/ci";
import { IoIosLink } from "react-icons/io";
import { FaFacebook, FaLinkedin, FaReddit, FaTwitter } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function ViewModal({ isOpen, onOpenChange }) {


    return (
        <div>
            <Modal
                isOpen={isOpen}
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
                                    Hi there, welcome to Genny. The Simple mode is perfect for creating single speaker short voiceovers. Simply pick your preferred speaker, type or copy and paste your script. Then, click the 'Generate' button to generate your voiceover in seconds. You will see the voiceover output on the right for you to freely share or download. For more advanced capabilities, video editing, or longer multi-speaker voiceover production, please checkout the Advanced mode instead. Your creative journey now awaits
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}
