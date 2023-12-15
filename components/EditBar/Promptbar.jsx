import { Avatar, Button, Checkbox, Tooltip } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { FaPlay, FaShareSquare, FaPlus } from "react-icons/fa";
import { BsPinAngle } from "react-icons/bs";
import { TbClockHour12 } from "react-icons/tb";
import { CiMenuKebab } from "react-icons/ci";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { CiWarning } from "react-icons/ci";
import { VscPulse } from "react-icons/vsc";

export default function Promptbar() {
    return (
        <div className="flex justify-center mt-4">
            <div className="flex flex-col">
                <div className="flex justify-between items-center mb-[10px]">
                    <div className="flex items-center gap-x-2">
                        <Tooltip showArrow={true} content="Fix the start time" className="bg-black rounded-[10px]">
                            <Button>
                                <BsPinAngle size={20} />
                            </Button>
                        </Tooltip>
                        <Tooltip showArrow={true} content="Fix the start time" className="bg-black rounded-[10px]">
                            <Button className="flex gap-x-[5px] items-center text-[12px] hover:bg-[#353538] px-2 rounded-[5px]">
                                <TbClockHour12 />
                                x1.00
                            </Button>
                        </Tooltip>
                        <Tooltip
                            showArrow={true}
                            content="Emphasis is not supported for Pro voice"
                            className="bg-black rounded-[10px]"
                        >
                            <Button className="text-[12px] cursor-not-allowed">Emphasis</Button>
                        </Tooltip>
                        <Tooltip
                            showArrow={true}
                            content="Pause is not supported for Pro voice"
                            className="bg-black rounded-[10px]"
                        >
                            <Button className="text-[12px] cursor-not-allowed">Pause</Button>
                        </Tooltip>
                    </div>
                    <div>
                        <p className="text-[#428BEB] text-[12px]">Free Regeneration Available</p>
                    </div>
                </div>
                <div className="flex items-start gap-x-2">
                    <div className="flex items-center">
                        <Checkbox defaultSelected className="flex" size="16"></Checkbox>
                        <Avatar size="24" />
                        <p className="text-[14px]">Sophia</p>
                    </div>
                    <div className="relative">
                        <textarea
                            rows="4"
                            cols="50"
                            className="bg-transparent resize-none border border-[#44444A] rounded-[5px] p-2"
                        ></textarea>
                        <div className="absolute top-2 right-2 hover:bg-[#353538] p-2 rounded-[5px] cursor-pointer">
                            <Dropdown>
                                <DropdownTrigger>
                                    <Button variant="bordered">
                                        <CiMenuKebab size={16} color="#FFFFFF" />
                                    </Button>
                                </DropdownTrigger>
                                <DropdownMenu
                                    variant="faded"
                                    aria-label="Dropdown menu with icons"
                                    className="bg-[#242427] rounded-[10px] border border-[#44444A]"
                                >
                                    <DropdownItem key="new" className="text-[14px]" startContent={<VscPulse />}>
                                        Producer Mode
                                    </DropdownItem>
                                    <DropdownItem
                                        key="delete"
                                        className="text-[14px] text-[#F56565]"
                                        startContent={<RiDeleteBin5Line />}
                                    >
                                        Delete file
                                    </DropdownItem>
                                    <DropdownItem key="copy" className="text-[14px]" startContent={<CiWarning />}>
                                        Send Feedback
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 justify-evenly h-full">
                        <Tooltip showArrow={true} content="Generate" className="bg-black rounded-[10px]">
                            <Image
                                src={"/images/generate.svg"}
                                alt=""
                                width={20}
                                height={20}
                                className="cursor-pointer"
                            />
                        </Tooltip>
                        <Tooltip showArrow={true} content="Play" className="bg-black rounded-[10px]">
                            <Button>
                                <FaPlay size={20} />
                            </Button>
                        </Tooltip>
                        <Tooltip showArrow={true} content="Export" className="bg-black rounded-[10px]">
                            <Button>
                                <FaShareSquare size={20} />
                            </Button>
                        </Tooltip>
                    </div>
                </div>
                {/* add new block */}
                <div className="flex items-center w-full justify-between cursor-pointer opacity-0 hover:opacity-100">
                    <div className="bg-[#343438] h-[1px] w-full"></div>
                    <Button className="flex rounded-[10px] w-full gap-x-2 bg-[#44444A] px-2  text-[10px] text-[#EFEFEF]">
                        <FaPlus size={10} />
                        Add a new block
                    </Button>
                    <div className="bg-[#343438] h-[1px] w-full"></div>
                </div>
            </div>
        </div>
    );
}
