"use client";
import React, { useState } from "react";
import { CiText, CiShare2 } from "react-icons/ci";
import { Slider } from "antd";
import { TbRewindBackward15, TbRewindForward15 } from "react-icons/tb";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import { IoPlayForwardSharp } from "react-icons/io5";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Tooltip, Avatar } from "@nextui-org/react";
import { MdOutlineFileDownload } from "react-icons/md";

function AudioCard({ data, setViewModal, setShareModal }) {
    const [duration, setDuration] = useState("0:00");
    const [loading, setLoading] = useState(true);
    const [soundId, setSoundId] = useState();
    const [isPlaying, setIsPlaying] = useState(false);

    var sound = new Howl({
        src: [data?.speech?.urls[0]],
        html5: true,
        onload: function () {
            setDuration(formatTime(Math.round(sound.duration())));
            setLoading(false);
        },
        onplay: function (soundId) {
            setIsPlaying(true);
            setSoundId(soundId);
        },
        onpause: function () {
            setIsPlaying(false);
        }
    });

    const downloadFile = async () => {
        const downloadLink = document.createElement("a");
        downloadLink.href = data?.speech?.urls[0];
        downloadLink.download = `${data?.speech?.id}.mp3`;
        downloadLink.click();
        document.removeChild(downloadLink);
    };

    function formatTime(secs) {
        var minutes = Math.floor(secs / 60) || 0;
        var seconds = secs - minutes * 60 || 0;
        return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    }


    console.log(sound.seek());

    return (
        <div className="bg-[#2D2D30] p-4 rounded-lg border border-[#2871DE]">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Avatar src={data?.speaker?.imageUrl || ""} />
                    <p className="text-[#F5F6F7] text-base">{data?.speaker?.displayName || "Sopia"}</p>
                </div>
                <div className="flex gap-1 items-center">
                    <Tooltip showArrow={true} content="View text" className="bg-black rounded-[10px]">
                        <Button
                            onClick={() => setViewModal(data?.speech?.text)}
                            className="flex gap-x-[5px] items-center text-[12px] hover:bg-[#353538] px-2 rounded-[5px]"
                        >
                            <CiText size={24} />
                        </Button>
                    </Tooltip>
                    <Tooltip showArrow={true} content="Download" className="bg-black rounded-[10px]">
                        <Button
                            onClick={downloadFile}
                            className="flex gap-x-[5px] items-center text-[12px] hover:bg-[#353538] px-2 rounded-[5px]"
                        >
                            <MdOutlineFileDownload size={24} />
                        </Button>
                    </Tooltip>
                    <Tooltip showArrow={true} content="Share" className="bg-black rounded-[10px]">
                        <Button
                            onClick={() => setShareModal(true)}
                            className="flex gap-x-[5px] items-center text-[12px] hover:bg-[#353538] px-2 rounded-[5px]"
                        >
                            <CiShare2 size={24} />
                        </Button>
                    </Tooltip>
                </div>
            </div>
            <div>
                <Slider defaultValue={0} />
            </div>
            {!loading && (
                <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                        <p className="text-[#DADCE0] text-sm">0:00</p>
                        <p className="text-[#DADCE0] text-sm">/</p>
                        <p className="text-[#8C8C96] text-sm">{duration}</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button className="flex gap-x-[5px] items-center text-[12px] hover:bg-[#353538] p-2 rounded-[5px]">
                            <TbRewindBackward15 size={24} />
                        </Button>
                        {isPlaying ? (
                            <FaPauseCircle onClick={() => sound.pause()} size={32} className="cursor-pointer" />
                        ) : (
                            <FaPlayCircle onClick={() => sound.play()} size={32} className="cursor-pointer" />
                        )}
                        <Button className="flex gap-x-[5px] items-center text-[12px] hover:bg-[#353538] p-2 rounded-[5px]">
                            <TbRewindForward15 size={24} />
                        </Button>
                    </div>
                    <Dropdown className="border border-[#44444A] rounded-[0.25rem] bg-[#242427]">
                        <DropdownTrigger>
                            <Button variant="bordered" className="flex gap-2">
                                <IoPlayForwardSharp />
                                <p>x1</p>
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions">
                            <DropdownItem key="new">x0.5</DropdownItem>
                            <DropdownItem key="copy">x1</DropdownItem>
                            <DropdownItem key="edit">x1.5</DropdownItem>
                            <DropdownItem key="delete">x2</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            )}
        </div>
    );
}

export default AudioCard;
