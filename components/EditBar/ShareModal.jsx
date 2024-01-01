import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, Select, SelectItem } from "@nextui-org/react";
import { CiMusicNote1 } from "react-icons/ci";
import { IoIosLink } from "react-icons/io";
import { FaFacebook, FaLinkedin, FaReddit, FaTwitter } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function ShareModal({ isOpen, onOpenChange }) {


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
                <ModalContent className="bg-[#242427] border border-[#44444A] rounded-[10px] min-w-[510px]">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-[16px] text-[#EFEFEF]">
                                Share
                            </ModalHeader>
                            <div className="bg-[#44444A] h-[1px]"></div>
                            <ModalBody>
                                <div className="flex gap-[10px] mt-4">
                                    <div className="flex items-center justify-center h-[3rem] w-[5.3rem] bg-[#2D2D30] rounded-[0.25rem]">
                                        <CiMusicNote1 size={32} />
                                    </div>
                                    <div>
                                        <div className="text-[1rem] font-[600]">Untitled-658ed64a5d3c111232396c51</div>
                                        <div className="text-[0.8rem] text-[#B6B8BF] font-[500]">Dec 29, 2023</div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-2">
                                    <div className="flex-1 w-[225px]">
                                        <div className="text-[#fff] text-[0.8rem] font-[600]">Link Access</div>
                                        <div className="text-[0.7rem] text-[#8C8C96] font-[400] mt-2">People with access to the link can view</div>
                                    </div>
                                    <div className="flex-1 max-w-[185px] text-[0.775rem]">
                                        <select data-te-select-init className="bg-[#2D2D30] w-full h-[32px] outline-0 border text-[0.775rem] border-[#606069] rounded-[0.25rem] px-[8px]">
                                            <option className="py-3" value="1">Anyone with the link</option>
                                            <option value="2">Anyone with access code</option>
                                            <option value="3">Only team members</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex mt-4 justify-between mb-4">
                                    <div className="flex flex-col items-center gap-[10px]">
                                        <IoIosLink size={22} />
                                        <div className="text-[0.8rem]">Copy Link</div>
                                    </div>
                                    <div className="flex flex-col items-center gap-[10px]">
                                        <FaFacebook size={22} color={'rgb(24,119,242)'} />
                                        <div className="text-[0.8rem]">Facebook</div>
                                    </div>
                                    <div className="flex flex-col items-center gap-[10px]">
                                        <FaTwitter size={22} color="rgb(29, 155, 240)" />
                                        <div className="text-[0.8rem]">Twitter</div>
                                    </div>
                                    <div className="flex flex-col items-center gap-[10px]">
                                        <FaReddit size={22} color="rgb(255, 69, 0)" />
                                        <div className="text-[0.8rem]">Reddit</div>
                                    </div>
                                    <div className="flex flex-col items-center gap-[10px]">
                                        <FaLinkedin size={22} color="rgb(63, 120, 189)" />
                                        <div className="text-[0.8rem]">Linkedin</div>
                                    </div>
                                    <div className="flex flex-col items-center gap-[10px]">
                                        <MdOutlineEmail size={22} />
                                        <div className="text-[0.8rem]">Email</div>
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
