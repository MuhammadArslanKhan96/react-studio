// @ts-ignore importMeta is replaced in the loader
import { Button, NextUIProvider, useDisclosure } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp, IoMdAdd } from "react-icons/io";
import { PiFolder } from "react-icons/pi";
import { Context } from "../components/Context";
import CurrentPlan from "../components/CurrentPlan";
import Discount from "../components/Discount";
import { AppContextProvider } from "../components/EditBar/EditorContext";
import Header from "../components/Header";
import InviteMembers from "../components/InviteMembers";
import Sidebar from "../components/Sidebar";
import { SettingsContext } from "../context/settingsContext";
import "../styles/globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component,
    pageProps,
}) {
    const [sideModal, setSideModal] = useState(false);
    const [open, setOpen] = useState(false);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <SettingsContext>
            <ToastContainer />
            <NextUIProvider>
                <Context.Provider value={{ isOpen, onOpen, onOpenChange, open, setOpen, setSideModal }}>
                    <AppContextProvider>
                        <Header open={open} setOpen={setOpen} />
                        <div className="flex w-full relative min-h-screen overflow-y-scroll scrollStyle">
                            <div className="h-full ">
                                {sideModal && (
                                    <>
                                        <div
                                            className="absolute left-[266px] max-xl:flex hidden top-[-40px] z-20 cursor-pointer h-full"
                                            onClick={() => {
                                                setSideModal(false);
                                                setOpen(false);
                                            }}
                                        >
                                            <FaArrowAltCircleLeft />
                                        </div>
                                        <Sidebar open={open} setOpen={setOpen}>
                                        </Sidebar>
                                    </>
                                )}
                                <div className="max-xl:hidden">
                                    <Sidebar open={open} setOpen={setOpen}>
                                    </Sidebar>
                                </div>
                            </div>
                            <Component {...pageProps} />
                        </div>
                    </AppContextProvider>
                </Context.Provider>
            </NextUIProvider>
        </SettingsContext >
    );
}
