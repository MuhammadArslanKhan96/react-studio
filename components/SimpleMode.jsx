/* eslint-disable react/no-unescaped-entities */
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Tooltip, Avatar } from "@nextui-org/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { TbClockHour12 } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineUploadFile, MdOutlineFileDownload } from "react-icons/md";
import { CiText, CiShare2 } from "react-icons/ci";
import { Slider } from "antd";
import { TbRewindBackward15, TbRewindForward15 } from "react-icons/tb";
import { FaPlayCircle } from "react-icons/fa";
import { IoPlayForwardSharp } from "react-icons/io5";
import { useAppContext } from "./EditBar/EditorContext";
import VoiceSelectorModal from "./EditBar/VoiceSelectorModal";
import { generateSpeech } from "../helpers/generate-audio";

export default function SimpleMode() {
    const { setVoiceModel, voiceModel, speakers } = useAppContext();
    const [text, setText] = useState("");
    const [speaker, setSpeaker] = useState(speakers[0]);
    const [speech, setSpeech] = useState();
    const ref = useRef();

    const handleTextFileChange = (e) => {
        var reader = new FileReader();
        const file = e.target.files[0];

        reader.onload = function (e) {
            var content = reader.result;
            setText(content);
        };

        reader.readAsText(file);
    };

    const handleGenerate = async () => {
        const data = {
            text: text,
            speaker: speaker.id,
        };
        const speech = await generateSpeech(JSON.stringify(data));
        console.log(speech);
    }

    useEffect(() => {
        setSpeaker(speakers[0]);
    }, [speakers]);

    return (
        <div className="bg-[#242427] w-full">
            <div className="flex w-full">
                <div className="w-3/5 py-6 px-4 border-r border-r-[#44444A]">
                    <div>
                        <div className="flex items-center gap-2">
                            <div className="flex cursor-pointer gap-2 items-center" onClick={() => setVoiceModel(true)}>
                                <Avatar size="24" src={speaker?.imageUrl} />
                                <p className="text-[14px]">{speaker?.displayName || "Sophia"}</p>
                            </div>
                            <IoIosArrowDown size={20} />
                        </div>
                    </div>
                    <div className="flex items-center mt-2 border-b border-b-[#44444A] pb-2">
                        <div className="flex items-center pr-4 gap-2">
                            <Tooltip showArrow={true} content="Fix the start time" className="bg-black rounded-[10px]">
                                <Button className="flex gap-x-[5px] items-center text-[12px] hover:bg-[#353538] px-2 rounded-[5px]">
                                    <TbClockHour12 />
                                    x1.00
                                </Button>
                            </Tooltip>
                            <Tooltip
                                showArrow={true}
                                content="Emphasis is not supported for Pro voice"
                                className="bg-black rounded-[10px]"
                            >
                                <Button className="text-[12px] cursor-not-allowed">Emphasis</Button>
                            </Tooltip>
                            <Tooltip
                                showArrow={true}
                                content="Pause is not supported for Pro voice"
                                className="bg-black rounded-[10px]"
                            >
                                <Button className="text-[12px] cursor-not-allowed">Pause</Button>
                            </Tooltip>
                        </div>
                        <div className="border-x border-x-[#44444A] px-2">
                            <input type="file" className="hidden" onChange={handleTextFileChange} ref={ref} />
                            <Button
                                onClick={() => ref.current.click()}
                                className="flex items-center gap-2 text-xs hover:bg-[#353538] rounded-xl px-4 py-2"
                            >
                                <MdOutlineUploadFile size={16} />
                                Import Text
                            </Button>
                        </div>
                        {/* <Button className="flex gap-2 items-center text-xs hover:bg-[#353538] rounded-xl px-4 py-2 ml-2">
                            <Image src={"images/pronoune.svg"} alt="" width={16} height={16} /> Pronunciation
                        </Button> */}
                    </div>
                    {/* paragraph */}
                    <div className="py-4 border-b border-b-[#44444A]">
                        <textarea
                            onChange={(e) => setText(e.target.value)}
                            value={text}
                            placeholder={`Hi there, welcome to Genny. The Simple mode is perfect for creating single speaker short voiceovers. Simply pick your preferred speaker, type or copy and paste your script. Then, click the 'Generate' button to generate your voiceover in seconds. You will see the voiceover output on the right for you to freely share or download. For more advanced capabilities, video editing, or longer multi-speaker voiceover production, please checkout the Advanced mode instead. Your creative journey now awaits, get started now.`}
                            className="text-[#EFEFEF] outline-none border-none text-base bg-transparent w-full resize-none scrollStyle min-h-[65vh]"
                        />
                        <div className="flex w-full items-center justify-between">
                            <p className="text-[#428BEB] text-xs">Free Regeneration Available</p>
                            <p
                                className={
                                    "text-[#8C8C96] text-sm flex text-end " +
                                    (text?.length > 500 ? "!text-red-600" : "")
                                }
                            >
                                {text?.length > 500 ? 500 - text?.length : text?.length} / 500
                            </p>
                        </div>
                    </div>
                    <Button
                        onClick={handleGenerate}
                        className="bg-[#2871DE] w-full py-2 rounded-xl font-semibold mt-4 items-center gap-2"
                    >
                        <Image src={"/images/generate.svg"} alt="" width={20} height={20} />
                        Generate
                    </Button>
                </div>
                <div className="w-2/5 p-4 flex flex-col gap-4">
                    <div>
                        <p className="text-white text-base font-semibold">Recent Generation</p>
                    </div>
                    <div className="bg-[#2D2D30] p-4 rounded-lg border border-[#2871DE]">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <Image src="/images/user.svg" width={24} height={24} alt="" />
                                <p className="text-[#F5F6F7] text-base">Sopia</p>
                            </div>
                            <div className="flex gap-1 items-center">
                                <Tooltip showArrow={true} content="View text" className="bg-black rounded-[10px]">
                                    <Button className="flex gap-x-[5px] items-center text-[12px] hover:bg-[#353538] px-2 rounded-[5px]">
                                        <CiText size={24} />
                                    </Button>
                                </Tooltip>
                                <Tooltip showArrow={true} content="Download" className="bg-black rounded-[10px]">
                                    <Button className="flex gap-x-[5px] items-center text-[12px] hover:bg-[#353538] px-2 rounded-[5px]">
                                        <MdOutlineFileDownload size={24} />
                                    </Button>
                                </Tooltip>
                                <Tooltip showArrow={true} content="Share" className="bg-black rounded-[10px]">
                                    <Button className="flex gap-x-[5px] items-center text-[12px] hover:bg-[#353538] px-2 rounded-[5px]">
                                        <CiShare2 size={24} />
                                    </Button>
                                </Tooltip>
                            </div>
                        </div>
                        <VoiceSelectorModal
                            callback={function (data) {
                                setSpeaker(data);
                            }}
                            isOpen={voiceModel}
                            onOpenChange={setVoiceModel}
                        />
                        <div>
                            <Slider defaultValue={0} />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex gap-1">
                                <p className="text-[#DADCE0] text-sm">0:00</p>
                                <p className="text-[#DADCE0] text-sm">/</p>
                                <p className="text-[#8C8C96] text-sm"> 0:33</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Button className="flex gap-x-[5px] items-center text-[12px] hover:bg-[#353538] p-2 rounded-[5px]">
                                    <TbRewindBackward15 size={24} />
                                </Button>
                                <FaPlayCircle size={32} className="cursor-pointer" />
                                <Button className="flex gap-x-[5px] items-center text-[12px] hover:bg-[#353538] p-2 rounded-[5px]">
                                    <TbRewindForward15 size={24} />
                                </Button>
                            </div>
                            <Dropdown className="border border-[#44444A] rounded-[0.25rem] bg-[#242427]">
                                <DropdownTrigger>
                                    <Button variant="bordered" className="flex gap-2">
                                        <IoPlayForwardSharp />
                                        <p>x1</p>
                                    </Button>
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Static Actions">
                                    <DropdownItem key="new">x0.5</DropdownItem>
                                    <DropdownItem key="copy">x1</DropdownItem>
                                    <DropdownItem key="edit">x1.5</DropdownItem>
                                    <DropdownItem key="delete">x2</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="flex flex-col h-full">
                        <div>
                            <p className="text-white text-base font-semibold">Generation History</p>
                        </div>
                        <div className="flex justify-center items-center h-full">
                            <p className="text-[#B6B8Bf] text-xs">
                                Generated audio files will be listed here, so you can come back and listen anytime.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
