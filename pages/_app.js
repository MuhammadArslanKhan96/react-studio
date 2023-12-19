import React, { useState } from "react";
import "@/styles/globals.css";
import { Button, NextUIProvider } from "@nextui-org/react";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import CurrentPlan from "@/components/CurrentPlan";
import Link from "next/link";
import Discount from "@/components/Discount";
import { Context } from "@/components/Context";
import { useDisclosure } from "@nextui-org/react";
import { IoIosArrowUp } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { PiFolder } from "react-icons/pi";
import { RiArrowDownSLine } from "react-icons/ri";
import { AppContextProvider } from "@/components/EditBar/EditorContext";
import InviteMembers from "@/components/InviteMembers";

export default function App({ Component, pageProps }) {
    const [open, setOpen] = useState(false);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [modal, setModal] = useState(false);
    return (
        <NextUIProvider>
            <Context.Provider value={{ isOpen, onOpen, onOpenChange }}>
                {/* <button className="bg-green-600 text-white rounded px-4 py-1" onClick={() => setIsOpen(true)}>
                open
            </button> */}
                <AppContextProvider>
                    <Header />
                    <div className="flex w-full">
                        <Sidebar open={open} setOpen={setOpen}>
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
                                    <div className="flex justify-center items-center gap-3">
                                        <IoIosArrowUp
                                            size={16}
                                            // className="(IsRotated, 'rotate180', '')"
                                            onClick={() => setModal(!modal)}
                                        />
                                        Workspace
                                    </div>

                                    <div>
                                        <IoMdAdd size={16} />
                                    </div>
                                </div>
                            </Button>

                            {modal && (
                                <Link
                                    href={"/Workspace"}
                                    className="flex items-center gap-x-2 text-[14px] border-b-2 border-b-[#4D4D51] px-3 py-2 hover:bg-[#39393C] mb-3"
                                >
                                    <div className="flex justify-center items-center gap-3 pl-[10px]">
                                        <PiFolder size={20} />
                                        My Workspace
                                    </div>
                                </Link>
                            )}

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
                                className="flex items-center self-start gap-x-2 text-[14px] py-2 px-3 hover:bg-[#39393C] "
                            >
                                <Image src={"/images/invite.svg"} alt="" width={20} height={20} />
                                Invite Members
                            </Button>
                            <InviteMembers isOpen={isOpen} onOpenChange={onOpenChange} />

                            <Discount />
                        </Sidebar>
                        <Component {...pageProps} />
                    </div>
                </AppContextProvider>
            </Context.Provider>
        </NextUIProvider>
    );
}
