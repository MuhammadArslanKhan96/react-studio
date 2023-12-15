import React from "react";
import { Avatar, Button, Checkbox, Tooltip } from "@nextui-org/react";
import Image from "next/image";
import { FaPlay, FaShareSquare } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { CiWarning } from "react-icons/ci";
import { VscPulse } from "react-icons/vsc";
import { useAppContext } from "./EditorContext";

function TranscriptInput({ mockData, mockEffect }) {
    const { setMockData, setMockEffect } = useAppContext();
    const handleCheckboxChange = (e) => {
        setMockData((pre) => [...pre.filter((a) => a.id !== mockData.id), { ...mockData, checked: e.target.checked }]);
    };

    const handleTextChange = (e) => {
        setMockData((pre) => [
            ...pre.filter((a) => a.id !== mockData.id),
            { ...mockData, actions: [{ ...mockData.actions[0], id: e.target.value }] },
        ]);
        setMockEffect((pre) => ({
            ...pre,
            ["effect" + mockData.id]: { ...pre["effect" + mockData.id], name: e.target.value },
        }));
    };

    return (
        <div className="flex items-start gap-x-2">
            <div className="flex items-center">
                <Checkbox
                    defaultSelected={mockData.checked}
                    onChange={handleCheckboxChange}
                    value={mockData.checked}
                    isSelected={mockData.checked}
                    className="flex"
                    size="16"
                ></Checkbox>
                <Avatar size="24" />
                <p className="text-[14px]">Sophia</p>
            </div>
            <div className="relative">
                <textarea
                    rows="4"
                    onChange={handleTextChange}
                    value={mockEffect?.name}
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
                    <Image src={"/images/generate.svg"} alt="" width={20} height={20} className="cursor-pointer" />
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
    );
}

export default TranscriptInput;
