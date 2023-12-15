import Image from "next/image";
import React from "react";

export default function SideNav() {
    const data = [
        {
            img: "/images/speakerSelection.svg",
            title: "Speaker Selection",
        },
        {
            img: "/images/voiceCloning.svg",
            title: "Voice Cloning",
        },
        {
            img: "/images/resources.svg",
            title: "Resource",
        },
        {
            img: "/images/subtitles.svg",
            title: "Subtitles",
        },
        {
            img: "/images/aiwriter.svg",
            title: "AI Writer",
        },
        {
            img: "/images/aiartist.svg",
            title: "AI Artist",
        },
        {
            img: "/images/pronoune.svg",
            title: "Pronunciation",
        },
        {
            img: "/images/setting.svg",
            title: "Project Settings",
        },
    ];
    return (
        <div className="bg-[#242427] max-w-[80px] px-1 py-2 flex flex-col items-center justify-between h-[90vh] border-r border-r-[#44444A]">
            <div className="overflow-scroll scrollStyle">
                {data.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col justify-center items-center gap-1 py-[12px] px-[2px] hover:bg-[#2D2D30] rounded-[10px] cursor-pointer"
                    >
                        <Image src={item.img} alt="" width={24} height={24} />
                        <p className="text-white text-[10px] flex text-center">{item.title}</p>
                    </div>
                ))}
            </div>
            <div>
                <Image src={"/images/questionmark.svg"} alt="" width={24} height={24} />
            </div>
        </div>
    );
}
