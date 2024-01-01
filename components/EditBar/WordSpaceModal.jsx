import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";

export default function WordSpaceModal({ isOpen, onOpenChange, setApiKeys }) {


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
                <ModalContent className="bg-[#242427] border border-[#44444A] rounded-[10px] min-w-[463px]">
                    {(onClose) => (


                        <>
                            <ModalHeader className="flex flex-col gap-1 text-[16px] text-[#EFEFEF]">
                                Add New Workspace
                            </ModalHeader>
                            <div className="bg-[#44444A] h-[1px]"></div>
                            <ModalBody>
                                <div>
                                    <div>Name</div>
                                    <div className="flex mt-[10px] gap-[5px]">
                                        <input type="text" className="text-[#fff] outline-0 px-2 bg-[#2D2D30] border-[#606069] rounded-[0.25rem] py-[3px] border w-full" />
                                    </div>
                                </div>


                            </ModalBody>
                            <ModalFooter className="border-t border-[#606069] mt-4">
                                <div className="flex flex-end gap-[10px]">
                                    <button onClick={e => onOpenChange(false)} type="button" className="border border-[#606069] rounded-[7px] py-[5px] px-[15px]">
                                        Cancel
                                    </button>
                                    <button type="button" onClick={e => onOpenChange(false)} className="bg-white text-black rounded-[7px] py-[5px] px-[15px]">
                                        Create
                                    </button>
                                </div>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}
