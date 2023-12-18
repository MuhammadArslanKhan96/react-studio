import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, Input, CardBody, Card, useDisclosure } from "@nextui-org/react";
import Image from "next/image";
import { GoQuestion } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineReload } from "react-icons/ai";
import VoiceCard from "./VoiceCard";
import { FaCaretDown, FaPlus } from "react-icons/fa";
import CreateVoiceModal from "./CreateVoiceModal";
import { FaRegFolderClosed } from "react-icons/fa6";

export default function ResourceModal({ isOpen, onOpenChange }) {
    const { onOpen } = useDisclosure();

    const [active, setActive] = useState("Pro Voice");
    const [activeTab, setActiveTab] = useState("");
    const [model, setModel] = useState(false);
    const [styleModel, setStyleModel] = useState(false);
    const [caseModel, setCaseModel] = useState(false);
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

    const stlyelist = [
        {
            title: "😍 Admiration",
        },
        {
            title: "😲 Amazed",
        },
        {
            title: "😠 Annoyed",
        },
        {
            title: "😰 Apprehensive",
        },
        {
            title: "😑 Boredom",
        },
        {
            title: "😎 Confident",
        },
        {
            title: "📖 Default",
        },
        {
            title: "😞 Disappointed",
        },
        {
            title: "👎 Disapproval",
        },
        {
            title: "🤢 Disgusted",
        },
        {
            title: "🤤 Drunken - Happy",
        },
        {
            title: "😥 Drunken - Sad",
        },
        {
            title: "🤩 Ecstatic",
        },
        {
            title: "🤵 Flirty",
        },
        {
            title: "😡 Furious",
        },
        {
            title: "😭 Grief",
        },
        {
            title: "🤫 Hesitant",
        },
        {
            title: "💖 Intimate",
        },
        {
            title: "📖 Narrative",
        },
        {
            title: "🧑‍💼 Presenting",
        },
        {
            title: "🤪 Sarcastic",
        },
        {
            title: "😌 Serene",
        },
        {
            title: "🧐 Serious",
        },
        {
            title: "🤒 Sick",
        },
        {
            title: "🤤 Sleepy - Happy",
        },
        {
            title: "😪 Sleepy - Frustrated",
        },
        {
            title: "😱 Terrified",
        },
        {
            title: "😫 Tired",
        },
        {
            title: "⏱ Urgent",
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
                            <ModalHeader className="flex gap-1 justify-between text-[16px] text-[#EFEFEF]">
                                Add Resource
                                <div>
                                    <div className="flex gap-x-2">
                                        <FaRegFolderClosed />
                                        <div className="flex items-center gap-x-2">
                                            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700 min-w-[200px]">
                                                <div
                                                    className="bg-blue-600 h-2 rounded-full"
                                                    style={{ width: "45%" }}
                                                ></div>
                                            </div>
                                            <p className="text-[#B6B8BF] text-[10px]">0s/1m</p>
                                        </div>
                                    </div>
                                </div>
                            </ModalHeader>
                            <div className="bg-[#44444A] h-[1px]"></div>
                            {/* <ModalBody> */}
                            <div className="flex my-2">
                                {/* sidebar */}
                                <div className="bg-[#2D2D30] p-2 rounded-r-[10px] gap-2 flex flex-col">
                                    {voices.map((item, idx) => (
                                        <div
                                            key={idx}
                                            onClick={() => setActive(item.title)}
                                            className={`${
                                                active === item.title
                                                    ? "bg-[#182C5C] border border-[#375C8D]"
                                                    : "bg-transparent"
                                            } px-4 py-3 flex flex-col justify-center items-center hover:bg-[#44444A] rounded-[10px] cursor-pointer`}
                                        >
                                            <Image src={item.img} alt="" width={24} height={24} />
                                            <p className="text-[12px] flex text-center">{item.title}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="w-full px-2">
                                    <div className="flex justify-between gap-2 items-center w-full">
                                        <p className="flex items-center gap-x-2 w-full">
                                            {active} <GoQuestion />
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
                                        <div className="flex items-center gap-x-2">
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
                                                    } px-3 py-[3px] text-[#EFEFEF] cursor-pointer border-r border-r-[#44444A]`}
                                                    onClick={() => setActiveTab("male")}
                                                >
                                                    Male
                                                </p>
                                                <p
                                                    className={`${
                                                        activeTab === "female" ? "bg-[#44444A]" : "bg-transparent"
                                                    } px-3 py-[3px] text-[#EFEFEF] cursor-pointer`}
                                                    onClick={() => setActiveTab("female")}
                                                >
                                                    Female
                                                </p>
                                            </div>
                                            {/* age model */}
                                            <div
                                                className="flex justify-between items-center relative px-4 py-[3px] border border-[#44444A] rounded-[5px] min-w-[120px]"
                                                onClick={() => setModel(!model)}
                                            >
                                                <p className="text-[14px]">Age</p>
                                                <p>
                                                    <FaCaretDown />
                                                </p>
                                                {model && (
                                                    <div className="absolute border border-[#44444A] rounded-[5px] bg-[#242427] top-[33px] z-10  py-2 left-0 shadow-2xl w-full">
                                                        <p className="text-[14px] px-3 py-1 hover:bg-[#2D2D30] cursor-pointer">
                                                            All Age Range
                                                        </p>
                                                        <p className="text-[14px] px-3 py-1 hover:bg-[#2D2D30] cursor-pointer">
                                                            Muture
                                                        </p>
                                                        <p className="text-[14px] px-3 py-1 hover:bg-[#2D2D30] cursor-pointer">
                                                            Young Adult
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                            {/* style model */}
                                            <div
                                                className="flex justify-between items-center relative px-4 py-[3px] border border-[#44444A] rounded-[5px] min-w-[180px]"
                                                onClick={() => setStyleModel(!styleModel)}
                                            >
                                                <p className="text-[14px]">Style</p>
                                                <p>
                                                    <FaCaretDown />
                                                </p>
                                                {styleModel && (
                                                    <div className="absolute border border-[#44444A] rounded-[5px] bg-[#242427] top-[33px] z-10 max-h-[360px] overflow-y-scroll scrollStyle py-2 left-0 w-full shadow-2xl">
                                                        <p className="text-[14px] px-3 py-1 hover:bg-[#2D2D30] cursor-pointer">
                                                            All Style
                                                        </p>
                                                        {stlyelist.map((item, idx) => (
                                                            <p
                                                                key={idx}
                                                                className="text-[14px] px-3 py-1 hover:bg-[#2D2D30] cursor-pointer"
                                                            >
                                                                {item.title}
                                                            </p>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                            {/* use case model */}
                                            <div
                                                className="flex justify-between items-center relative px-4 py-[3px] border border-[#44444A] rounded-[5px] min-w-[180px]"
                                                onClick={() => setCaseModel(!caseModel)}
                                            >
                                                <p className="text-[14px]">Use Cases</p>
                                                <p>
                                                    <FaCaretDown />
                                                </p>
                                                {caseModel && (
                                                    <div className="absolute border border-[#44444A] rounded-[5px] bg-[#242427] top-[33px] z-10  py-2 left-0 w-full shadow-2xl">
                                                        <p className="text-[14px] px-3 py-1 hover:bg-[#2D2D30] cursor-pointer">
                                                            All Use Cases
                                                        </p>
                                                        <p className="text-[14px] px-3 py-1 hover:bg-[#2D2D30] cursor-pointer">
                                                            Audiobooks
                                                        </p>
                                                        <p className="text-[14px] px-3 py-1 hover:bg-[#2D2D30] cursor-pointer">
                                                            Education
                                                        </p>
                                                        <p className="text-[14px] px-3 py-1 hover:bg-[#2D2D30] cursor-pointer">
                                                            Entertainment
                                                        </p>
                                                        <p className="text-[14px] px-3 py-1 hover:bg-[#2D2D30] cursor-pointer">
                                                            Marketing
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex cursor-pointer rounded-[5px] px-3 py-1 gap-x-2 hover:bg-[#44444A] items-center">
                                            <AiOutlineReload size={16} />
                                            <p className="text-[14px]">Reset Filter</p>
                                        </div>
                                    </div>
                                    {active === "Pro Voice" ? (
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
                                    ) : active === "Rapid Voice" ? (
                                        <div className="mt-2 flex gap-2 flex-wrap overflow-y-scroll scrollStyle max-h-[400px]">
                                            <VoiceCard />
                                            <VoiceCard />
                                            <VoiceCard />
                                            <VoiceCard />
                                            <VoiceCard />
                                            <VoiceCard />
                                        </div>
                                    ) : active === "Global Voice" ? (
                                        <div className="mt-2 flex gap-2 flex-wrap overflow-y-scroll scrollStyle max-h-[400px]">
                                            <VoiceCard />
                                            <VoiceCard />
                                            <VoiceCard />
                                        </div>
                                    ) : active === "Voice Cloning" ? (
                                        <div className="mt-2 flex gap-2 flex-wrap overflow-y-scroll scrollStyle max-h-[400px]">
                                            <div
                                                className="border border-[#44444A] rounded-[10px] bg-[#2D2D30] hover:bg-[#44444A] cursor-pointer"
                                                onClick={() => onOpen}
                                            >
                                                <CreateVoiceModal isOpen={isOpen} onOpenChange={onOpenChange} />
                                                <Card shadow className="w-[230px] h-[120px]">
                                                    <CardBody>
                                                        <div className="flex flex-col justify-center items-center h-full">
                                                            <FaPlus />
                                                            <p className="text-[14px] text-[#EFEFEF]">
                                                                Create a Voice Cloning
                                                            </p>
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                            </div>
                                        </div>
                                    ) : null}
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
