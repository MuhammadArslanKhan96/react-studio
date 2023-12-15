import { Button, useDisclosure } from "@nextui-org/react";
import Image from "next/image";
import React, { useState } from "react";
import PronouneModal from "./PronouneModal";
import VoiceSelectorModal from "./VoiceSelectorModal";

export default function SideNav() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [modal, setModal] = useState(false);

    const data = [
        {
            img: "/images/speakerSelection.svg",
            title: "Speaker Selection",
            click: <VoiceSelectorModal isOpen={isOpen} onOpenChange={onOpenChange} />,
        },
        {
            img: "/images/voiceCloning.svg",
            title: "Voice Cloning",
            click: <PronouneModal isOpen={isOpen} onOpenChange={onOpenChange} />,
        },
        {
            img: "/images/resources.svg",
            title: "Resource",
            click: <PronouneModal isOpen={isOpen} onOpenChange={onOpenChange} />,
        },
        {
            img: "/images/subtitles.svg",
            title: "Subtitles",
            click: <PronouneModal isOpen={isOpen} onOpenChange={onOpenChange} />,
        },
        {
            img: "/images/aiwriter.svg",
            title: "AI Writer",
            click: <PronouneModal isOpen={isOpen} onOpenChange={onOpenChange} />,
        },
        {
            img: "/images/aiartist.svg",
            title: "AI Artist",
            click: <PronouneModal isOpen={isOpen} onOpenChange={onOpenChange} />,
        },
        {
            img: "/images/pronoune.svg",
            title: "Pronunciation",
            click: <PronouneModal isOpen={isOpen} onOpenChange={onOpenChange} />,
        },
        {
            img: "/images/setting.svg",
            title: "Project Settings",
            click: <PronouneModal isOpen={isOpen} onOpenChange={onOpenChange} />,
        },
    ];

    return (
        <div className="bg-[#242427] max-w-[80px] px-1 py-2 flex flex-col items-center justify-between h-[90vh] border-r border-r-[#44444A]">
            <div className="overflow-scroll scrollStyle">
                {data.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col justify-center items-center gap-1 py-[12px] px-[2px] hover:bg-[#2D2D30] rounded-[10px] cursor-pointer"
                        onClick={() => {
                            onOpen();
                            setModal(idx);
                        }}
                    >
                        <Image src={item.img} alt="" width={24} height={24} />
                        <p className="text-white text-[10px] flex text-center">{item.title}</p>
                        {modal === idx && item.click}
                    </div>
                ))}
            </div>
            {/* <VoiceSelectorModal isOpen={isOpen} onOpenChange={onOpenChange} /> */}
            <div>
                <Image src={"/images/questionmark.svg"} alt="" width={24} height={24} />
            </div>
        </div>
    );
}
