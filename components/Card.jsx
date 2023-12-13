import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import { IoCopyOutline } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";
import { LuFolderInput } from "react-icons/lu";

export default function Card() {
    const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";
    return (
        <div className="w-fit max-w-[330px] min-w-[310px] min-h-[260px] max-h-[270px] border border-[#44444A] rounded-[5px] bg-[#2D2D30]">
            <div className="bg-[#242427] flex justify-between p-[16px] border-b border-b-[#44444A]">
                <div>
                    <p className="text-[#EFEFEF]">Untitled</p>
                    <p className="text-[#EFEFEF] text-[12px]">Modified Dec 13, 2023</p>
                </div>
                <div>
                    <Dropdown>
                        <DropdownTrigger>
                            <Button variant="bordered">
                                <CiMenuKebab className="cursor-pointer" color="#FFFFFF" />
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            variant="faded"
                            aria-label="Dropdown menu with icons"
                            className="bg-[#242427] border border-[#44444A] rounded-[5px]"
                        >
                            <DropdownItem
                                key="new"
                                shortcut="⌘N"
                                startContent={<LuFolderInput className={iconClasses} />}
                            >
                                Move to
                            </DropdownItem>
                            <DropdownItem key="copy" startContent={<IoCopyOutline className={iconClasses} />}>
                                Duplicate
                            </DropdownItem>
                            <DropdownItem
                                key="delete"
                                className="text-[#C53030]"
                                color="danger"
                                startContent={<RiDeleteBin5Line className={(iconClasses, "text-danger")} />}
                            >
                                Delete file
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
            {/* <hr /> */}
            <div className="px-[12px] py-[4px] relative">
                <p className="text-white">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.
                </p>
                <Button className="bg-[#755EE5] rounded-[50px] px-[16px] py-[10px] text-[12px] text-black font-bold absolute bottom-1 right-3">
                    V
                </Button>
            </div>
        </div>
    );
}
