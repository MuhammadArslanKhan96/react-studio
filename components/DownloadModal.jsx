/* eslint-disable react/no-unescaped-entities */
import { Button, Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { LuDownload, LuClock9 } from "react-icons/lu";
import { IoPerson } from "react-icons/io5";
import { CiFolderOn } from "react-icons/ci";
import { AiOutlineDollar } from "react-icons/ai";
import { useRouter } from "next/router";

export default function DownloadModal({ isOpen, onOpenChange }) {
    const router = useRouter();
    return (
        <div>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                backdrop="opaque"
                classNames={{
                    backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
                }}
                className="border border-[#44444A] rounded-[0.25rem] bg-[#242427] min-w-[75vw]"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            {/* <ModalHeader className="flex flex-col gap-1">Export</ModalHeader> */}

                            <ModalBody className="flex">
                                <div className="flex">
                                    <div className="pr-4 py-2">
                                        <Image src={"/logo.svg"} alt="" width={111} height={90} />
                                        <div className="mt-4 flex flex-col h-full">
                                            <p className="text-2xl text-[#EFEFEF] font-semibold">
                                                Upgrade your plan to start downloading
                                            </p>
                                            <p className="text-sm text-[#EFEFEF] my-4">
                                                Let's keep the momentum going! Upgrade now for unlimited downloads and
                                                let your creativity go wild. Join 1,000,000 creative professionals like
                                                you supercharge their workflow 10x!
                                            </p>
                                            <p className="text-sm text-[#428BEB]">
                                                For a limited time, enjoy 50% off select plans.
                                            </p>
                                            <p className="text-sm text-[#EFEFEF] mt-4">What you get with Genny:</p>
                                            <p className="text-sm text-[#EFEFEF] flex gap-2 items-center mt-2">
                                                <LuDownload />
                                                Unlimited Downloads
                                            </p>
                                            <p className="text-sm text-[#EFEFEF] flex gap-2 items-center mt-2">
                                                <IoPerson />
                                                20+ Premium Voices
                                            </p>
                                            <p className="text-sm text-[#EFEFEF] flex gap-2 items-center mt-2">
                                                <CiFolderOn />
                                                Plentiful Storage
                                            </p>
                                            <p className="text-sm text-[#EFEFEF] flex gap-2 items-center mt-2">
                                                <AiOutlineDollar />
                                                Commercial Use
                                            </p>
                                            <p className="text-sm text-[#EFEFEF] flex gap-2 items-center mt-2">
                                                <LuClock9 />
                                                More Voice Generation Credit
                                            </p>
                                            <Button
                                                className="bg-[#2871DE] rounded-lg w-full py-2 font-bold flex mt-8"
                                                onClick={() => router.replace("/pricing")}
                                            >
                                                Upgrade
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="">
                                        <Image
                                            src={"/images/upgrade.jpg"}
                                            alt=""
                                            width={536}
                                            height={535}
                                            className="min-w-[536px] h-[535px]"
                                        />
                                    </div>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}
