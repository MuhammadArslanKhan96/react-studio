import { Button, useDisclosure } from "@nextui-org/react";
import Image from "next/image";
import React, { useState } from "react";
import PronouneModal from "./PronouneModal";
import VoiceSelectorModal from "./VoiceSelectorModal";
import ResourceModal from "./ResourceModal";
import { useAppContext } from "./EditorContext";

export default function SideNav() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [modal, setModal] = useState(false);
    const { voiceModel, setVoiceModel } = useAppContext();


    const data = [
        {
            img: "/images/speakerSelection.svg",
            title: "Speaker Selection",
            click: <></>,
        },
        {
            img: "/images/voiceCloning.svg",
            title: "Voice Cloning",
            click: <></>,
        },
        {
            img: "/images/resources.svg",
            title: "Resource",
            click: <ResourceModal isOpen={isOpen} onOpenChange={onOpenChange} />,
        },
        {
            img: "/images/subtitles.svg",
            title: "Subtitles",
            click: <ResourceModal isOpen={isOpen} onOpenChange={onOpenChange} />,
        },
        {
            img: "/images/aiwriter.svg",
            title: "AI Writer",
            click: <ResourceModal isOpen={isOpen} onOpenChange={onOpenChange} />,
        },
        {
            img: "/images/aiartist.svg",
            title: "AI Artist",
            click: <ResourceModal isOpen={isOpen} onOpenChange={onOpenChange} />,
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
                            (idx == 0 || idx == 1) && setVoiceModel(true);
                            onOpen();
                            setModal(idx);
                        }}
                    >
                        <Image src={item.img} alt="" width={24} height={24} />
                        <p className="text-white text-[10px] flex text-center">{item.title}</p>
                        {modal === idx && item.click}
                        <VoiceSelectorModal isOpen={voiceModel} onOpenChange={setVoiceModel} />
                    </div>
                ))}
            </div>
            <div>
                <Image src={"/images/questionmark.svg"} alt="" width={24} height={24} />
            </div>
        </div>
    );
}
