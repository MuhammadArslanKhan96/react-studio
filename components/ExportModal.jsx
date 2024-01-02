import React, { useState } from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Input,
} from "@nextui-org/react";
import Image from "next/image";
import ExportDialogBox from "./ExportDialogBox";
import { FaRegFolderClosed } from "react-icons/fa6";
import { LuMusic4, LuDownload } from "react-icons/lu";
import { CiShare2 } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import DownloadModal from "./DownloadModal";

export default function ExportModal({ isOpen, onOpenChange }) {
    const { onOpen } = useDisclosure();
    const [value, setValue] = useState("Untitled");
    const [list, setList] = useState("");
    return (
        <div>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                backdrop="opaque"
                classNames={{
                    backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
                }}
                className="border border-[#44444A] rounded-[0.25rem] bg-[#242427] min-w-[80vw] min-h-[90vh]"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex gap-1 justify-between text-[16px] text-[#EFEFEF]">
                                Export
                                <div className="pr-2">
                                    <div className="flex gap-x-2">
                                        <FaRegFolderClosed />
                                        <div className="flex items-center gap-x-2">
                                            <p className="text-[12px] text-[#EFEFEF] flex whitespace-nowrap">
                                                Storage 0 / 1GB
                                            </p>
                                            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700 min-w-[100px]">
                                                <div
                                                    className="bg-blue-600 h-2 rounded-full"
                                                    style={{ width: "45%" }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ModalHeader>
                            <hr className="border border-[#44444A]" />

                            {/* <ModalBody className="flex flex-col justify-center items-center">
                                <p className="text-[#EFEFEF] text-base">Create and render content in projects.</p>
                                <p className="text-[#EFEFEF] text-base">
                                    The generated media files will be stored here.
                                </p>
                                <Image
                                    alt=""
                                    src={"/images/prodexport.png"}
                                    width={656}
                                    height={351}
                                    className="mt-2"
                                />
                                <Button className="bg-[#2871DE] px-4 py-2 rounded-lg mt-4" onPress={onOpen}>
                                    Export Project
                                </Button>
                            </ModalBody> */}

                            <ModalBody>
                                <div className="flex h-[80vh]">
                                    <div className="flex flex-col w-1/2 p-4 border-r border-r-[#44444A]">
                                        <div className="border-b border-b-[#44444A] p-2">
                                            <p className="text-[#B6B8BF] text-sm">Name</p>
                                        </div>
                                        <div
                                            className={`border-b border-b-[#44444A] flex gap-x-6 items-center p-4 hover:bg-[#363638] cursor-pointer ${
                                                list === "" ? "bg-[#182C5C]" : "bg-transparent"
                                            }`}
                                            onClick={() => setList()}
                                        >
                                            <div>
                                                <LuMusic4 size={32} className="w-[32px] h-[32px]" />
                                            </div>
                                            <div>
                                                <p>Untitled</p>
                                                <p>Jan 2, 2024</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-1/2 pl-4">
                                        <div>
                                            <Input
                                                value={value}
                                                onChange={(e) => setValue(e.target.value)}
                                                className="font-semibold hover:bg-[#363638] rounded-lg"
                                            />
                                            <div className="flex items-center justify-between gap-x-4 mt-2">
                                                <div className="flex items-center gap-x-4">
                                                    <Button
                                                        className="flex gap-x-4 border border-white rounded-lg px-3 py-2"
                                                        onPress={onOpen}
                                                    >
                                                        {" "}
                                                        <LuDownload size={16} className="w-4" />
                                                        Download
                                                    </Button>
                                                    <Button className="flex gap-x-4 bg-white text-black rounded-lg px-3 py-2">
                                                        {" "}
                                                        <CiShare2 size={16} className="w-4" />
                                                        Share
                                                    </Button>
                                                </div>
                                                <div className="cursor-pointer">
                                                    <RiDeleteBin5Line size={20} className="w-5" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* video */}
                                        <div></div>
                                        {/* detail */}
                                        <div className="mt-4 flex flex-col gap-2">
                                            <p className="text-[#F5F6F7] text-sm">Detail</p>
                                            <div className="flex gap-4">
                                                <p className="text-[#B6B8BF] text-sm min-w-[76px]">Type</p>
                                                <p className="text-[#F5F6F7] text-sm">AUDIO</p>
                                            </div>
                                            <div className="flex gap-4">
                                                <p className="text-[#B6B8BF] text-sm min-w-[76px]">Modified</p>
                                                <p className="text-[#F5F6F7] text-sm">Jan 2, 2024</p>
                                            </div>
                                            <div className="flex gap-4">
                                                <p className="text-[#B6B8BF] text-sm min-w-[76px]">From</p>
                                                <p className="text-[#F5F6F7] text-sm">Untitled</p>
                                            </div>
                                            <div className="flex gap-4">
                                                <p className="text-[#B6B8BF] text-sm min-w-[76px]">Created by</p>
                                                <p className="text-[#F5F6F7] text-sm">Name</p>
                                            </div>
                                            <div className="flex gap-4">
                                                <p className="text-[#B6B8BF] text-sm min-w-[76px]">Size</p>
                                                <p className="text-[#F5F6F7] text-sm">1.2 MB</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
            {/* {<DownloadModal isOpen={isOpen} onOpenChange={onOpenChange} />} */}
            {/* {<ExportDialogBox isOpen={isOpen} onOpenChange={onOpenChange} />} */}
        </div>
    );
}
