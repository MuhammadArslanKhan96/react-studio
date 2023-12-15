import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, Input, CardBody, Card } from "@nextui-org/react";
import Image from "next/image";
import { GoQuestion } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { Radio, Tabs } from "antd";
import { AiOutlineReload } from "react-icons/ai";
import VoiceCard from "./VoiceCard";

export default function VoiceSelectorModal({ isOpen, onOpenChange }) {
    const [active, setActive] = useState("pro_voice");
    const [activeTab, setActiveTab] = useState("");
    const voices = [
        {
            img: "/images/diamond.svg",
            title: "Pro Voice",
        },
        {
            img: "/images/rapidvoice.svg",
            title: "Rapid Voice",
        },
        {
            img: "/images/world.svg",
            title: "Global Voice",
        },
        {
            img: "/images/voiceCloning.svg",
            title: "Voice Cloning",
        },
        {
            img: "/images/collectiblevoice.svg",
            title: "Colletibe Voice",
        },
        {
            img: "/images/bookmark.svg",
            title: "Bookmarked",
        },
    ];
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
                <ModalContent className="bg-[#242427] border border-[#44444A] rounded-[10px] min-w-[1000px]">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-[16px] text-[#EFEFEF]">
                                Select a voice
                            </ModalHeader>
                            <div className="bg-[#44444A] h-[1px]"></div>
                            {/* <ModalBody> */}
                            <div className="flex my-2">
                                <div className="bg-[#2D2D30] p-2 rounded-r-[10px]">
                                    {voices.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="px-4 py-3 flex flex-col justify-center items-center hover:bg-[#44444A] rounded-[10px] cursor-pointer"
                                        >
                                            <Image src={item.img} alt="" width={24} height={24} />
                                            <p className="text-[12px] flex text-center">{item.title}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="w-full px-2">
                                    <div className="flex justify-between gap-2 items-center w-full">
                                        <p className="flex items-center gap-x-2 w-full">
                                            Pro Voice <GoQuestion />
                                        </p>
                                        <Input
                                            type="text"
                                            placeholder="Search voice name"
                                            labelPlacement="outside"
                                            startContent={
                                                <IoSearchOutline />
                                                // <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                            }
                                            className="bg-[#44444A] rounded-[5px] py-2"
                                        />
                                    </div>
                                    <div className="flex justify-between items-center mt-2">
                                        <div>
                                            {/* <Radio.Group
                                                onChange={onChange}
                                                style={{
                                                    marginBottom: 16,
                                                    backgroundColor: "transparent",
                                                }}
                                            >
                                                <Radio.Button>Male</Radio.Button>
                                                <Radio.Button>Female</Radio.Button>
                                            </Radio.Group> */}
                                            <div className="flex border border-[#44444A] w-fit rounded-[5px]">
                                                <p
                                                    className={`${
                                                        activeTab === "male" ? "bg-[#44444A]" : "bg-transparent"
                                                    } px-3 text-[#EFEFEF] cursor-pointer border-r border-r-[#44444A]`}
                                                    onClick={() => setActiveTab("male")}
                                                >
                                                    Male
                                                </p>
                                                <p
                                                    className={`${
                                                        activeTab === "female" ? "bg-[#44444A]" : "bg-transparent"
                                                    } px-3 text-[#EFEFEF] cursor-pointer`}
                                                    onClick={() => setActiveTab("female")}
                                                >
                                                    Female
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex cursor-pointer rounded-[5px] px-3 py-1 gap-x-2 hover:bg-[#44444A] items-center">
                                            <AiOutlineReload size={16} />
                                            <p className="text-[14px]">Reset Filter</p>
                                        </div>
                                    </div>
                                    <div className="mt-2 flex gap-2 flex-wrap overflow-y-scroll scrollStyle max-h-[400px]">
                                        <VoiceCard />
                                        <VoiceCard />
                                        <VoiceCard />
                                        <VoiceCard />
                                        <VoiceCard />
                                        <VoiceCard />
                                        <VoiceCard />
                                        <VoiceCard />
                                        <VoiceCard />
                                        <VoiceCard />
                                        <VoiceCard />
                                        <VoiceCard />
                                        <VoiceCard />
                                        <VoiceCard />
                                        <VoiceCard />
                                        <VoiceCard />
                                        <VoiceCard />
                                        <VoiceCard />
                                    </div>
                                </div>
                            </div>
                            {/* </ModalBody> */}
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}
