import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import React, { useState } from "react";
import { IoCaretDownOutline } from "react-icons/io5";

export default function ExportDialogBox({ isOpen, onOpenChange }) {
    const [modal, setModal] = useState(false);
    const [value, setValue] = useState("Untitled");
    const [val, setVal] = useState("mp3");
    return (
        <div>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                backdrop="opaque"
                classNames={{
                    backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
                }}
                className="border border-[#44444A] rounded-[0.25rem] bg-[#242427]"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Export</ModalHeader>

                            <ModalBody className="flex flex-col pb-8">
                                <p className="text-[#EFEFEF] text-base">
                                    Exported files will be saved in the production
                                </p>
                                <div className="flex items-center gap-4">
                                    <p>Name</p>
                                    <Input
                                        placeholder="file name"
                                        value={value}
                                        className="border border-[#44444A] rounded-lg"
                                        onChange={(e) => setValue(e.target.value)}
                                        // isInvalid={true}
                                        // errorMessage="Please enter a valid email"
                                    />
                                </div>
                                <div className="flex items-center gap-4">
                                    <p>Format</p>
                                    <div className="w-full relative">
                                        <div
                                            className="border border-[#44444A] rounded-lg py-2 px-4 flex justify-between items-center cursor-pointer"
                                            onClick={() => setModal(!modal)}
                                        >
                                            <p>{val}</p>
                                            <IoCaretDownOutline />
                                        </div>
                                        {modal && (
                                            <div className="absolute bg-[#242427] z-10 w-full border border-[#44444A] rounded-lg py-2">
                                                <p
                                                    onClick={() => {
                                                        setVal("mp3");
                                                        setModal(false);
                                                    }}
                                                    className={`${
                                                        val === "mp3" ? "bg-[#182C5C]" : "bg-transparent"
                                                    } py-2 px-4 hover:bg-[#323236]`}
                                                >
                                                    mp3
                                                </p>
                                                <p
                                                    onClick={() => {
                                                        setVal("wav");
                                                        setModal(false);
                                                    }}
                                                    className={`${
                                                        val === "wav" ? "bg-[#182C5C]" : "bg-transparent"
                                                    } py-2 px-4 hover:bg-[#323236]`}
                                                >
                                                    wav
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </ModalBody>
                            <hr className="border border-[#44444A]" />

                            <ModalFooter>
                                <Button
                                    className="border border-white rounded-lg text-[#EFEFEF] px-4 py-2"
                                    onPress={onClose}
                                >
                                    Cancel
                                </Button>
                                <Button className="bg-white text-black rounded-lg px-4 py-2" onPress={onClose}>
                                    Export
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}
