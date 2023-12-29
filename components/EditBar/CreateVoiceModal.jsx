/* eslint-disable react/no-unescaped-entities */
import React, { useRef } from "react";
import { Modal, ModalContent, ModalHeader, Button, Input } from "@nextui-org/react";
import { IoIosPlay } from "react-icons/io";
import { ImPower } from "react-icons/im";
import { MdOutlineUploadFile } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { Slider } from "antd";

export default function CreateVoiceModal({ isOpen, onOpenChange }) {
    const ref = useRef();

    return (
        <div>
            <Modal
                backdrop="opaque"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                classNames={{
                    backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
                }}
            >
                <ModalContent className="bg-[#242427] border border-[#44444A] rounded-[10px] min-w-[800px]">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex gap-1 items-center">
                                Create a Voice{" "}
                                <p className="flex p-1 text-[12px] bg-[linear-gradient(90deg,rgb(46,148,255)0%,rgb(64,140,255)32.81%,rgb(61,181,255)71.35%,rgb(46,209,234)100%)] rounded-[5px] h-fit px-2">
                                    Beta
                                </p>
                            </ModalHeader>
                            <div className="bg-[#44444A] h-[1px]"></div>
                            <div className="flex">
                                {/* sidebar */}
                                <div className="p-2 gap-2 flex flex-col max-w-[196px] border-r border-r-[#44444A]">
                                    <div>
                                        <p className="text-white text-[14px]">Tips & Tricks</p>
                                    </div>
                                    <hr className="border-[#44444A]" />
                                    <div>
                                        <p className="text-[#B6B8BF] text-[14px]">Audio condition</p>
                                        <p className="text-white text-[14px]">
                                            The consistency of your recordings matter. If recording conditions and style
                                            are different from file to file, the resulting quality will be subpar.
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-[#48BB78] text-[14px]">Do's</p>
                                        <div className="flex justify-between items-center">
                                            <p>Good Audio</p>
                                            <IoIosPlay className="bg-[#44444A] p-[2px] rounded-[50px] cursor-pointer" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-[#F56565] text-[14px]">Don'ts</p>
                                        <div className="flex justify-between items-center">
                                            <p>Bad consistency</p>
                                            <IoIosPlay className="bg-[#44444A] p-[2px] rounded-[50px] cursor-pointer" />
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <p>Too much noise</p>
                                            <IoIosPlay className="bg-[#44444A] p-[2px] rounded-[50px] cursor-pointer" />
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <p>Echo & Reverb</p>
                                            <IoIosPlay className="bg-[#44444A] p-[2px] rounded-[50px] cursor-pointer" />
                                        </div>
                                    </div>
                                    <hr className="border-[#44444A]" />
                                    <div>
                                        <p className="text-[#B6B8BF] text-[14px]">Do not like the result?</p>
                                        <p className="text-white text-[14px]">
                                            Click Recreate button on bottom right corner.
                                        </p>
                                    </div>
                                </div>
                                {/* main */}
                                <div className="flex flex-col w-full ">
                                    <div className="flex flex-col w-full px-2 max-h-[450px] overflow-y-scroll scrollStyle">
                                        <div className="flex flex-col gap-2 mt-2">
                                            <p className="text-[#EFEFEF] font-semibold">Samples 0 / 4</p>
                                            <Button
                                                className="flex flex-col border-dashed border-2 border-[#44444A] bg-[#2D2D30] hover:bg-[#353538] hover:border-white w-full justify-center items-center text-[14px] text-white font-semibold py-8 "
                                                onClick={() => ref.current.click()}
                                            >
                                                <Input ref={ref} type="file" className="hidden" />
                                                <MdOutlineUploadFile size={32} />
                                                Select or drag and drop a file to upload
                                                <span className="text-[#8C8C96] text-[14px]">
                                                    Audio files(WAV, MP3), up to 5MB each
                                                </span>
                                            </Button>
                                            <p className="flex justify-center text-[14px] text-[#8C8C96] w-full">or</p>
                                            <Button className="flex  border border-[#44444A] bg-[#2D2D30] hover:bg-[#353538] hover:border-white w-full justify-center items-center text-[14px] text-white gap-x-2 py-2 font-semibold">
                                                <FaMicrophone />
                                                Record my own audio
                                            </Button>
                                        </div>
                                        <div className="flex flex-col gap-2 my-2">
                                            <div className="flex justify-between items-center">
                                                <p className="text-[14px] font-semibold text-white">Samples to clone</p>
                                                <div className="flex items-center gap-x-2">
                                                    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700 min-w-[200px]">
                                                        <div
                                                            className="bg-blue-600 h-2 rounded-full"
                                                            style={{ width: "45%" }}
                                                        ></div>
                                                    </div>
                                                    <p className="text-[#B6B8BF] text-[10px]">0s/1m</p>
                                                </div>
                                            </div>
                                            <p className="text-[#8C8C96] text-[14px] flex justify-center">
                                                Sample file not added
                                            </p>
                                            <p className="flex gap-x-2 text-[#EFEFEF] text-[14px] bg-[#2D2D30] p-2 rounded-s-md">
                                                <AiOutlineExclamationCircle size={16} className="mt-[3px]" />
                                                Experience different combo of samples by simply selecting or unselecting
                                                them to find the perfect voice.
                                            </p>
                                            <p className="flex gap-x-2 text-[#EFEFEF] text-[14px] bg-[#2D2D30] p-2 rounded-s-md">
                                                <AiOutlineExclamationCircle size={16} className="mt-[3px]" />
                                                Voice cloning feature currently supports English only.
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-[#EFEFEF] font-semibold">Advanced Settings</p>
                                            <div className="flex flex-col px-2">
                                                <div className="flex justify-between items-center">
                                                    <p className="text-[#EFEFEF] text-[12px] flex items-center gap-x-2">
                                                        More State
                                                        <AiOutlineExclamationCircle size={16} className="mt-[3px]" />
                                                    </p>
                                                    <p className="text-[#EFEFEF] text-[12px] flex items-center gap-x-2">
                                                        More Expressive{" "}
                                                        <AiOutlineExclamationCircle size={16} className="mt-[3px]" />
                                                    </p>
                                                </div>
                                                <Slider
                                                    defaultValue={30}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-[#2D2D30] px-4 py-2 flex w-full h-fit justify-end">
                                        <Button className="flex gap-x-2 bg-[#24a0ed] rounded-[5px] px-4 py-1 text-[14px]">
                                            {" "}
                                            <ImPower />
                                            Create a Voice
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}
