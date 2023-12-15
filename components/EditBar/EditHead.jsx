import { Button, Checkbox, Tooltip } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { HiOutlineArrowUturnLeft, HiOutlineArrowUturnRight } from "react-icons/hi2";
import { GrDownload } from "react-icons/gr";
import { RiSpeedUpLine } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function EditHead() {
    return (
        <div className="bg-[#2D2D30]">
            <div className="container mx-auto px-4 flex items-center justify-between py-2">
                <div className="flex items-center">
                    <div className="border-r border-r-[#44444A] px-4">
                        <Checkbox defaultSelected>Select All (1/1)</Checkbox>
                    </div>
                    <div className="flex items-center gap-x-4 px-4">
                        <Tooltip showArrow={true} content="Generate" className="bg-black rounded-[10px]">
                            <Image
                                src={"/images/generate.svg"}
                                alt=""
                                width={20}
                                height={20}
                                className="cursor-pointer"
                            />
                        </Tooltip>
                        <Tooltip showArrow={true} content="Download" className="bg-black rounded-[10px]">
                            <Button>
                                <GrDownload size={18} className="cursor-pointer" />
                            </Button>
                        </Tooltip>
                        <Tooltip showArrow={true} content="Change voice" className="bg-black rounded-[10px]">
                            <Image
                                src={"/images/speakerSelection.svg"}
                                alt=""
                                width={20}
                                height={20}
                                className="cursor-pointer"
                            />
                        </Tooltip>
                        <Tooltip showArrow={true} content="Change speed" className="bg-black rounded-[10px]">
                            <Button>
                                <RiSpeedUpLine size={20} className="cursor-pointer" />
                            </Button>
                        </Tooltip>
                        <Tooltip showArrow={true} content="Delete" className="bg-black rounded-[10px]">
                            <Button>
                                <RiDeleteBin6Line size={20} className="cursor-pointer" />
                            </Button>
                        </Tooltip>
                    </div>
                </div>
                <div className="flex gap-x-2">
                    <HiOutlineArrowUturnLeft size={24} className="cursor-pointer" />
                    <HiOutlineArrowUturnRight size={24} className="cursor-pointer" />
                </div>
            </div>
        </div>
    );
}
