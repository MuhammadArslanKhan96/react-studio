// @ts-ignore importMeta is replaced in the loader
import { NextUIProvider, useDisclosure } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { FaArrowAltCircleLeft, FaSpinner } from "react-icons/fa";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Context } from "../components/Context";
import { AppContextProvider } from "../components/EditBar/EditorContext";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { SettingsContext } from "../context/settingsContext";
import "../styles/globals.css";

export default function App({ Component,
    pageProps,
}) {
    const [sideModal, setSideModal] = useState(false);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 4000);
    }, [])

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
                                        <Sidebar open={open} setOpen={setOpen} />
                                    </>
                                )}
                                <div className="max-xl:hidden">
                                    <Sidebar open={open} setOpen={setOpen} />
                                </div>
                            </div>
                            {loading ?
                                <div className="flex justify-center items-center w-full h-full min-h-[80vh]">
                                    <FaSpinner className="animate-spin" size={50} />
                                </div>
                                :
                                <Component {...pageProps} />
                            }
                        </div>
                    </AppContextProvider>
                </Context.Provider>
            </NextUIProvider>
        </SettingsContext >
    );
}
