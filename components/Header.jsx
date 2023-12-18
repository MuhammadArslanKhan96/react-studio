import { IoKeyOutline } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { RiShareForward2Fill } from "react-icons/ri";

import {
    Avatar,
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Navbar,
    NavbarContent,
    Tooltip,
    useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import EditInput from "./EditInput";
import InviteMembers from "./InviteMembers";

export default function Header() {
    const router = useRouter();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    if (router.pathname === "/signin" || router.pathname === "/signup") return;

    return (
        <div className="flex justify-between items-center px-[16px] py-[8px] bg-[#242427] border-b border-b-[#44444A]">
            <div className="flex gap-x-2">
                <Button>
                    <Image src={"/logo.svg"} alt="" width={111} height={90} />
                </Button>
                <div className="flex max-w-[100px]">
                    <EditInput />
                </div>
            </div>
            <div className="flex items-center gap-x-2">
                <Tooltip
                    showArrow={true}
                    content="Generation credits deducted based on voiceover length. No deduction for regeneration if text or speaker remains changed."
                    className="bg-black rounded-[10px] text-[10px] max-w-[200px]"
                >
                    <Button>
                        <AiOutlineQuestionCircle size={16} />
                    </Button>
                </Tooltip>
                <Tooltip
                    showArrow={true}
                    content="used time: 5m 0s"
                    className="bg-black rounded-[10px] text-[10px] max-w-[200px]"
                >
                    <Button>
                        <div className="min-w-[80px]">
                            <div className="flex justify-between ">
                                <span className="font-medium text-blue-700 dark:text-white text-[12px]">5m 0s</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                <div className="bg-blue-600 h-2 rounded-full" style={{ width: "45%" }}></div>
                            </div>
                        </div>
                    </Button>
                </Tooltip>
                <Button className="bg-[linear-gradient(90deg,rgb(46,148,255)0%,rgb(64,140,255)32.81%,rgb(61,181,255)71.35%,rgb(46,209,234)100%)] bg-clip-text text-transparent font-semibold text-[14px]">
                    UPGRADE
                </Button>
                <Button className="border rounded-[10px] px-2 py-1 text-[14px]">Save</Button>
                <Button className="border rounded-[10px] px-2 py-1 flex gap-x-2 items-center bg-[#EBECF0] text-black text-[14px]">
                    Export
                    <RiShareForward2Fill />
                </Button>
                <Button className="w-fit border rounded-[5px] h-fit gap-x-2 px-4 py-1 text-white " onPress={onOpen}>
                    <Image src={"/images/invite.svg"} alt="" width={20} height={20} />
                    Invite
                </Button>
                <InviteMembers isOpen={isOpen} onOpenChange={onOpenChange} />
                <Navbar className="w-fit">
                    <NavbarContent as="div" justify="end">
                        <Dropdown placement="bottom-end">
                            <DropdownTrigger>
                                <Avatar
                                    isBordered
                                    as="button"
                                    className="transition-transform"
                                    color="secondary"
                                    name="Jason Hughes"
                                    size="sm"
                                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                />
                            </DropdownTrigger>
                            <DropdownMenu
                                aria-label="Profile Actions"
                                variant="flat"
                                className="bg-[#242427] pl-[12px] pr-[12px] pt-[12px] pb-[12px] mt-[15px]  border border-[#44444A]	 rounded-md"
                            >
                                <DropdownItem key="profile" className="h-14 gap-2">
                                    <div className="flex items-center">
                                        <div>
                                            {/* <Image src={"/images/setting.svg"} alt="" width={20} height={20} /> */}
                                            <Avatar />
                                        </div>

                                        <div>
                                            <p className="font-semibold">Signed in as</p>
                                            <p className="font-semibold text-[12px] text-[#b6b8bf]">zoey@example.com</p>
                                        </div>
                                    </div>
                                </DropdownItem>

                                <DropdownItem key="my_account">
                                    <div className="flex items-center gap-2">
                                        <Image
                                            src={"/images/mayaccount.svg"}
                                            alt=""
                                            width={20}
                                            height={20}
                                            className="text-[#fff]"
                                        />
                                        My Account
                                    </div>
                                </DropdownItem>

                                <DropdownItem key="settings">
                                    <div className="flex items-center gap-2">
                                        <Image src={"/images/setting.svg"} alt="" width={20} height={20} />
                                        Settings
                                    </div>
                                </DropdownItem>

                                <DropdownItem key="pricing">
                                    <div className="flex items-center gap-2">
                                        <Image src={"/images/pricing.svg"} alt="" width={20} height={20} />
                                        Pricing
                                    </div>
                                </DropdownItem>
                                <DropdownItem key="invite_member">
                                    <div className="flex items-center gap-2">
                                        <Image src={"/images/invite.svg"} alt="" width={20} height={20} />
                                        Invite Member
                                    </div>
                                </DropdownItem>

                                <DropdownItem key="view_api_key">
                                    <div className="flex items-center gap-2">
                                        <IoKeyOutline />
                                        View API key
                                    </div>
                                </DropdownItem>

                                <DropdownItem key="help_&_support">
                                    <div className="flex items-center gap-2">
                                        <Image src={"/images/questionmark.svg"} alt="" width={20} height={20} />
                                        Help & Support
                                    </div>
                                </DropdownItem>

                                <DropdownItem key="join_discord">
                                    <div className="flex items-center gap-2">
                                        <FaDiscord />
                                        Join Discord
                                    </div>
                                </DropdownItem>
                                <DropdownItem key="logout" color="danger">
                                    <div className="flex items-center gap-2">
                                        <MdOutlineLogout />
                                        Log Out
                                    </div>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </NavbarContent>
                </Navbar>
            </div>
        </div>
    );
}
