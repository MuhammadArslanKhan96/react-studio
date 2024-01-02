"use client";
import React, { useEffect, useState } from "react";
import { CiText, CiShare2 } from "react-icons/ci";
import { Slider, Spin } from "antd";
import { TbRewindBackward15, TbRewindForward15 } from "react-icons/tb";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import { IoPlayForwardSharp } from "react-icons/io5";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Tooltip, Avatar } from "@nextui-org/react";
import { MdOutlineFileDownload } from "react-icons/md";
import { Howl } from "howler";

function AudioCard({ data, setViewModal, setShareModal }) {
    const [duration, setDuration] = useState("0:00");
    const [currentTime, setCurrentTime] = useState(0);
    const [loading, setLoading] = useState(true);
    const [soundId, setSoundId] = useState();
    const [isPlaying, setIsPlaying] = useState(false);
    const [sound, setSound] = useState();
    const [rate, setRate] = useState(1);

    useEffect(() => {
        if (data?.speech?.urls) {
            setSound(
                new Howl({
                    src: data?.speech?.urls || [],
                    html5: true,
                    onload: function (soundId) {
                        setDuration(formatTime(Math.round(this.duration())));
                        setSoundId(soundId);
                        setLoading(false);
                    },
                    onplay: function () {
                        setIsPlaying(true);
                    },
                    onpause: function () {
                        setIsPlaying(false);
                    },
                    onend: function () {
                        setIsPlaying(false);
                    },
                    onseek: function () {
                        setCurrentTime(Math.round(this.seek(soundId)));
                    }
                })
            );
        }
    }, [data]);

    const downloadFile = async () => {
        const downloadLink = document.createElement("a");
        document.body.appendChild(downloadLink);
        downloadLink.href = data?.speech?.urls[0];
        downloadLink.download = `${data?.speech?.id}.mp3`;
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    function formatTime(secs) {
        var minutes = Math.floor(secs / 60) || 0;
        var seconds = secs - minutes * 60 || 0;
        return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    }

    const handleSliderChange = (value) => {
        if (sound) {
            sound.seek(value, soundId);
            setCurrentTime(formatTime(Math.round(value)));
        }
    };

    return (
        <div className="bg-[#2D2D30] p-4 rounded-lg border border-[#2871DE]">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Avatar src={data?.speaker?.imageUrl || ""} />
                    <p className="text-[#F5F6F7] text-base">{data?.speaker?.displayName || "Sophia"}</p>
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
                {loading ? (
                    <Spin size="large" />
                ) : (
                    <>
                        <Slider
                            tooltip={""}
                            value={currentTime}
                            max={sound ? sound.duration() : 0}
                            onChange={handleSliderChange}
                        />
                        <div className="flex items-center justify-between">
                            <div className="flex gap-1">
                                <p className="text-[#DADCE0] text-sm">{formatTime(currentTime)}</p>
                                <p className="text-[#DADCE0] text-sm">/</p>
                                <p className="text-[#8C8C96] text-sm">{duration}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Button
                                    onClick={() => {
                                        sound.seek(sound.seek(soundId) - 15, soundId);
                                        setCurrentTime(Math.round(sound.seek(soundId) - 15));
                                    }}
                                    className="flex gap-x-[5px] items-center text-[12px] hover:bg-[#353538] p-2 rounded-[5px]"
                                >
                                    <TbRewindBackward15 size={24} />
                                </Button>
                                {isPlaying ? (
                                    <FaPauseCircle
                                        onClick={() => sound.pause(soundId)}
                                        size={32}
                                        className="cursor-pointer"
                                    />
                                ) : (
                                    <FaPlayCircle
                                        onClick={() => sound.play(soundId)}
                                        size={32}
                                        className="cursor-pointer"
                                    />
                                )}
                                <Button
                                    onClick={() => {
                                        sound.seek(sound.seek(soundId) + 15, soundId);
                                        setCurrentTime(Math.round(sound.seek(soundId) + 15));
                                    }}
                                    className="flex gap-x-[5px] items-center text-[12px] hover:bg-[#353538] p-2 rounded-[5px]"
                                >
                                    <TbRewindForward15 size={24} />
                                </Button>
                            </div>
                            <Dropdown className="border border-[#44444A] rounded-[0.25rem] bg-[#242427]">
                                <DropdownTrigger>
                                    <Button variant="bordered" className="flex gap-2">
                                        <IoPlayForwardSharp />
                                        <p>x{rate}</p>
                                    </Button>
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Static Actions">
                                    <DropdownItem
                                        onClick={() => {
                                            setRate(0.5);
                                            sound.rate(0.5, soundId);
                                        }}
                                        key="new"
                                    >
                                        x0.5
                                    </DropdownItem>
                                    <DropdownItem
                                        onClick={() => {
                                            setRate(1);
                                            sound.rate(1, soundId);
                                        }}
                                        key="copy"
                                    >
                                        x1
                                    </DropdownItem>
                                    <DropdownItem
                                        onClick={() => {
                                            setRate(1.5);
                                            sound.rate(1.5, soundId);
                                        }}
                                        key="edit"
                                    >
                                        x1.5
                                    </DropdownItem>
                                    <DropdownItem
                                        onClick={() => {
                                            setRate(2);
                                            sound.rate(2, soundId);
                                        }}
                                        key="delete"
                                    >
                                        x2
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default AudioCard;
