import React from "react";
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
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Dropdown, message, Space } from "antd";
import { HiSpeakerWave } from "react-icons/hi2";
import { TiPlus } from "react-icons/ti";

export default function PronouneModal({ setModal, isOpen, onOpenChange }) {
    const handleButtonClick = (e) => {
        message.info("Click on left button.");
    };
    const handleMenuClick = (e) => {
        message.info("Click on menu item.");
    };
    const items = [
        {
            label: "1st menu item",
            key: "1",
            icon: <UserOutlined />,
        },
        {
            label: "2nd menu item",
            key: "2",
            icon: <UserOutlined />,
        },
    ];
    const menuProps = {
        items,
        onClick: handleMenuClick,
    };
    return (
        <>
            {/* <Button onPress={onOpen}>Open Modal</Button> */}
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                backdrop="opaque"
                classNames={{
                    backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
                }}
            >
                <ModalContent className="bg-[#242427] border border-[#44444A] rounded-[10px]">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-[14px]">
                                Pronunciation Rules for Project
                            </ModalHeader>
                            <div className="bg-[#44444A] h-[1px]"></div>
                            <ModalBody>
                                <p className="text-[14px]">
                                    Create and manage the pronunciation of words, such as names and acronyms, to apply
                                    while generating speech.
                                </p>
                                <div className="border border-[#44444A] w-fit px-4 rounded-[10px]">
                                    <Space wrap>
                                        <Dropdown menu={menuProps}>
                                            <Button>
                                                <Space>
                                                    Button
                                                    <DownOutlined />
                                                </Space>
                                            </Button>
                                        </Dropdown>
                                    </Space>
                                </div>
                            </ModalBody>
                            <div className="bg-[#38383D] h-[1px]"></div>

                            <ModalBody className="bg-[#44444A]">
                                <p className="text-[14px] font-semibold">Add a new word</p>
                                <div className="flex items-center gap-x-2">
                                    <Input
                                        type="email"
                                        className="bg-[#242427] border border-[#44444A] rounded-[5px] py-1"
                                        placeholder="How it's spelled"
                                        labelPlacement="outside"
                                        endContent={<HiSpeakerWave />}
                                    />
                                    <Input
                                        type="email"
                                        className="bg-[#242427] border border-[#44444A] rounded-[5px] py-1"
                                        placeholder="How it's pronounced"
                                        labelPlacement="outside"
                                        endContent={<HiSpeakerWave />}
                                    />
                                    <div className="bg-white rounded-[5px] p-1 cursor-pointer">
                                        <TiPlus color="#000000" />
                                    </div>
                                </div>
                            </ModalBody>
                            <div className="bg-[#38383D] h-[1px]"></div>
                            <ModalBody>
                                <div className="flex justify-center items-center min-h-[200px]">
                                    <p>Empty</p>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
