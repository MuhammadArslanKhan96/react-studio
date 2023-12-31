import { Avatar, Button } from "@nextui-org/react";
import React from "react";
import { CiBookmark } from "react-icons/ci";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { IoMdPlay } from "react-icons/io";

export default function VoiceCard() {
    const data = [
        { img: "", name: "Nicole Cario", tags: "Top Rated" },
        { img: "", name: "Nicole Cario", tags: "Top Rated" },
        { img: "", name: "Nicole Cario", tags: "Top Rated" },
        { img: "", name: "Nicole Cario", tags: "Top Rated" },
        { img: "", name: "Nicole Cario", tags: "Top Rated" },
    ];
    return (
        <div className="max-w-[270px] bg-[#2D2D30] border border-[#38383D] hover:border-[#EFEFEF] rounded-[10px] p-[16px] relative group/item">
            <CiBookmark className="absolute right-4 top-4 cursor-pointer" />
            <div className="flex gap-x-2 items-center">
                <div className="rounded-[50px] relative">
                    <Avatar size="24" />
                    <IoMdPlay className="absolute top-[40%] right-[30%] invisible group-hover/item:visible" />
                    <HiOutlineSpeakerWave className="absolute bottom-0 right-0 visible group-hover/item:invisible" />
                </div>
                <div className="flex flex-col">
                    <p>Nicole Cario</p>
                    <div className="flex gap-1 flex-wrap">
                        <p className="text-[10px] leading-3 bg-[#2F855A] text-white p-1 rounded-[5px]">Top Rated</p>
                        <p className="text-[10px] leading-3 text-white bg-[linear-gradient(90deg,rgb(46,148,255)0%,rgb(64,140,255)32.81%,rgb(61,181,255)71.35%,rgb(46,209,234)100%)] p-1 rounded-[5px]">
                            Pro
                        </p>
                        <p className="text-[10px] leading-3 text-white bg-[#606069] p-1 rounded-[5px]">us English-US</p>
                        <p className="text-[10px] leading-3 text-white bg-[#606069] p-1 rounded-[5px]">Young Adult</p>
                        <p className="text-[10px] leading-3 text-white bg-[#606069] p-1 rounded-[5px]">Marketing</p>
                    </div>
                </div>
            </div>
            <Button className="flex items-center w-full bg-[#255BB8] rounded-[5px] mt-1 text-[10px] py-1 group/edit invisible group-hover/item:visible">
                Select
            </Button>
        </div>
    );
}
