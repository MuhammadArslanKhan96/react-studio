import {
    Avatar,
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    useDisclosure,
} from "@nextui-org/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useAppContext } from "./EditBar/EditorContext";
// @ts-ignore importMeta is replaced in the loader
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowUp, IoMdAdd } from "react-icons/io";
import { PiFolder } from "react-icons/pi";
import CurrentPlan from "../components/CurrentPlan";
import Discount from "../components/Discount";
import InviteMembers from "../components/InviteMembers";
import WordSpaceModal from "./EditBar/WordSpaceModal";
export default function Sidebar() {
    const router = useRouter();
    const { user, workspaces, setSelectedWorkspace } = useAppContext();
    const [open, setOpen] = useState(false);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [modal, setModal] = useState(true);
    const [workSpaceModal, setWorkSpaceModal] = useState(false);

    if (
        router.pathname === "/signin" ||
        router.pathname === "/signup" ||
        router.pathname.includes("/project") ||
        router.pathname.includes("/share")
    )
        return;

    return (
        <main
            className={
                `flex max-xl:fixed z-10 bg-[#2D2D30] inset-0 ease-in-out h-screen sticky top-0` +
                (open
                    ? " max-xl:transition-opacity max-xl:duration-500 max-xl:left-0 "
                    : " max-xl:transition-all max-xl:delay-500 max-xl:w-0")
            }
        >
            <section
                className={
                    " w-screen max-w-[264px] xl:!left-0 left-0 max-xl:absolute h-full shadow-xl delay-400 duration-500 ease-in-out transition-all" +
                    (open ? " max-xl:left-0" : " max-xl:w-0")
                }
            >
                <article className="scrollStyle relative w-screen max-w-[264px] pb-10 flex flex-col space-y-0 overflow-y-scroll h-full bg-[#2D2D30]">
                    <header className="p-2 font-bold text-lg">
                        <Dropdown className="absolute -left-[8.5rem] min-w-[17rem]">
                            <DropdownTrigger>
                                <Button className="flex items-center justify-between p-[16px] rounded-[10px] bg-transparent hover:bg-[#353538] w-full ">
                                    <div className="flex items-center gap-x-2">
                                        <div>
                                            <Avatar src={user?.team?.photoURL} />
                                        </div>
                                        <div className="flex flex-col items-start">
                                            <p className="text-[12px] leading-3">{user?.plan || "Free"} Plan</p>
                                            <p>{user?.team?.title || "Vivald"}</p>
                                        </div>
                                    </div>
                                    <FaChevronDown />
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Dynamic Actions">
                                <DropdownItem>
                                    <div className="flex items-center bg-[#182C5C] rounded-[10px] gap-x-2 px-3 py-4 w-full">
                                        <div>
                                            <Avatar src={user?.team?.photoURL} />
                                        </div>
                                        <div>
                                            <p className="text-[12px]">{user?.plan || "Free"} Plan</p>
                                            <p>{user?.team?.title || "Vivald"}</p>
                                        </div>
                                    </div>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </header>

                    <CurrentPlan />
                    <Link
                        href={"/production"}
                        className="flex items-center gap-x-2 text-[14px] border-b-2 border-b-[#4D4D51] px-3 py-2 hover:bg-[#39393C] mb-3"
                    >
                        <Image src={"/images/production.svg"} alt="" width={20} height={20} />
                        Production
                    </Link>
                    <Button className="flex items-center gap-x-2 text-[14px] border-b-2 border-b-[#4D4D51] px-3 py-2 hover:bg-[#39393C] mb-3">
                        <div className="flex items-center justify-between w-[100%]">
                            <div className="flex justify-center items-center gap-3 py-2">
                                {!modal ? (
                                    <IoIosArrowDown
                                        size={16}
                                        // className="(IsRotated, 'rotate180', '')"
                                        onClick={() => setModal(!modal)}
                                    />
                                ) : (
                                    <IoIosArrowUp
                                        size={16}
                                        // className="(IsRotated, 'rotate180', '')"
                                        onClick={() => setModal(!modal)}
                                    />
                                )}
                                Workspace
                            </div>

                            <div>
                                <IoMdAdd size={16} onClick={(e) => setWorkSpaceModal(true)} />
                            </div>
                        </div>
                    </Button>

                    {modal &&
                        (workspaces||[])?.map((workspace) => (
                            <div
                                key={workspace.id}
                                className="flex items-center cursor-pointer gap-x-2 text-[14px] border-b-2 border-b-[#4D4D51] px-3 py-2 hover:bg-[#39393C] mb-3"
                                onClick={() => {
                                    setSelectedWorkspace(workspace);
                                }}
                            >
                                <div className="flex justify-center items-center gap-3 pl-[10px]">
                                    <PiFolder size={20} />
                                    {workspace?.name}
                                </div>
                            </div>
                        ))}

                    <Link
                        href={"/pricing"}
                        className="flex items-center gap-x-2 text-[14px] py-2 px-3 hover:bg-[#39393C] "
                    >
                        <Image src={"/images/pricing.svg"} alt="" width={20} height={20} />
                        Pricing
                    </Link>
                    <Link
                        href={"/setting/subscription"}
                        className="flex items-center gap-x-2 text-[14px] py-2 px-3 hover:bg-[#39393C] space-y-0"
                    >
                        <Image src={"/images/subscription.svg"} alt="" width={20} height={20} />
                        Subscription
                    </Link>
                    <Link
                        href={"/setting/info"}
                        className="flex items-center gap-x-2 text-[14px] py-2 px-3 hover:bg-[#39393C] "
                    >
                        <Image src={"/images/setting.svg"} alt="" width={20} height={20} />
                        Setting
                    </Link>
                    <Button
                        onPress={onOpen}
                        className="flex items-center justify-start gap-x-2 text-[14px] py-2 px-3 hover:bg-[#39393C] "
                    >
                        <Image src={"/images/invite.svg"} alt="" width={20} height={20} />
                        Invite Members
                    </Button>
                    <InviteMembers isOpen={isOpen} onOpenChange={onOpenChange} />

                    <Discount />
                </article>
            </section>
            {open ? (
                <section
                    className=" xl:w-0 w-screen !h-full cursor-pointer"
                    onClick={() => {
                        setOpen(false);
                    }}
                ></section>
            ) : null}
            <WordSpaceModal isOpen={workSpaceModal} onOpenChange={setWorkSpaceModal} />
        </main>
    );
}
