/* eslint-disable react/no-unescaped-entities */
import { Avatar, Button, Tooltip, useDisclosure } from "@nextui-org/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineUploadFile } from "react-icons/md";
import { TbClockHour12 } from "react-icons/tb";
import { generateSpeech } from "../helpers/generate-audio";
import AudioCard from "./AudioCard";
import { toast } from "react-toastify";
import { useAppContext } from "./EditBar/EditorContext";
import VoiceSelectorModal from "./EditBar/VoiceSelectorModal";
import ShareModal from "./EditBar/ShareModal";
import ViewModal from "./EditBar/ViewModal";
import PronouneModal from "./EditBar/PronouneModal";

export default function SimpleMode() {
    const { setVoiceModel, voiceModel, speakers, selectedProject, setSelectedProject, selectedSpeaker } =
        useAppContext();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [text, setText] = useState("");
    const [speaker, setSpeaker] = useState(selectedSpeaker);
    const [shareModal, setShareModal] = useState();
    const [speedModal, setSpeedModal] = useState(false);
    const [speed, setSpeed] = useState(1.0);
    const [isLoading, setIsLoading] = useState(false);
    const [load, setLoad] = useState(true);
    const [viewModal, setViewModal] = useState();
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
        setIsLoading(true);
        const data = {
            text: text,
            speaker: speaker.id,
        };
        const speech = await generateSpeech(JSON.stringify(data));
        if (!speech?.urls?.[0]) {
            setIsLoading(false);
            return toast.error("Something went wrong");
        }
        setSelectedProject((pre) => ({
            ...pre,
            data: [
                ...(pre.data || []),
                {
                    speaker,
                    text,
                    speech,
                    time: Date.now(),
                },
            ],
        }));

        setIsLoading(false);
    };

    useEffect(() => {
        if (!text && load) {
            setText(selectedProject?.recentText || "");
            setLoad(false);
        } else {
            setSelectedProject((pre) => ({
                ...pre,
                recentText: text,
            }));
        }
        setSpeaker(speakers[0]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [speakers, selectedProject?.data, text]);

    return (
        <div className="bg-[#242427] w-full">
            <div className="flex flex-col lg:flex-row w-full">
                <div className="w-full lg:w-3/5 py-6 px-4 border-r border-r-[#44444A]">
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
                        <div className="flex relative items-center pr-4 gap-2">
                            <Tooltip showArrow={true} content="Fix the start time" className="bg-black rounded-[10px]">
                                <Button
                                    onClick={() => setSpeedModal(!speedModal)}
                                    className="flex gap-x-[5px] items-center text-[12px] hover:bg-[#353538] px-2 rounded-[5px]"
                                >
                                    <TbClockHour12 />x{speed.toFixed(2)}
                                </Button>
                            </Tooltip>
                            {speedModal && (
                                <div className="absolute z-50 flex flex-col w-full h-16 gap-2 border border-white/40 -bottom-16 bg-black rounded-lg py-2 px-4">
                                    <p className="text-xs text-white/70">Speed</p>
                                    <div className="flex items-center w-full">
                                        <Button
                                            onClick={() => setSpeed((pre) => pre - 0.01)}
                                            className="flex h-full w-full gap-x-[5px] border border-white/70 items-center text-[12px] hover:bg-[#353538] max-w-[30px] px-2"
                                        >
                                            -
                                        </Button>
                                        <p className="flex gap-x-[5px] border border-white/70 items-center text-[12px] hover:bg-[#353538] w-full text-center justify-center px-2">
                                            x{speed.toFixed(2)}
                                        </p>
                                        <Button
                                            onClick={() => setSpeed((pre) => pre + 0.01)}
                                            className="flex h-full w-full gap-x-[5px] border border-white/70 items-center text-[12px] hover:bg-[#353538] max-w-[30px] px-2"
                                        >
                                            +
                                        </Button>
                                    </div>
                                </div>
                            )}
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
                        <Button
                            onClick={onOpen}
                            className="flex gap-2 items-center text-xs hover:bg-[#353538] rounded-xl px-4 py-2 ml-2"
                        >
                            <Image src={"images/pronoune.svg"} alt="" width={16} height={16} /> Pronunciation
                        </Button>
                    </div>
                    <PronouneModal isOpen={isOpen} onOpenChange={onOpenChange} />
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
                        disabled={isLoading || !text}
                        onClick={handleGenerate}
                        className="bg-[#2871DE] disabled:bg-opacity-70 disabled:cursor-not-allowed w-full py-2 rounded-xl font-semibold mt-4 items-center gap-2"
                    >
                        {!isLoading ? (
                            <>
                                <Image src={"/images/generate.svg"} alt="" width={20} height={20} />
                                Generate
                            </>
                        ) : (
                            <div className="loadingButton"></div>
                        )}
                    </Button>
                    <VoiceSelectorModal
                        callback={function (data) {
                            console.log(data);
                            setSpeaker(data);
                        }}
                        isOpen={voiceModel}
                        onOpenChange={setVoiceModel}
                    />
                </div>
                <div className="w-full lg:w-2/5 p-4 flex flex-col gap-4">
                    <div>
                        <p className="text-white text-base font-semibold">Recent Generation</p>
                    </div>
                    <AudioCard
                        setShareModal={setShareModal}
                        setViewModal={setViewModal}
                        data={selectedProject?.data?.sort((a, b) => b.time - a.time)[0]}
                    />
                    <div className="flex flex-col h-full">
                        <div>
                            <p className="text-white text-base font-semibold">Generation History</p>
                        </div>
                        <div className="flex flex-col text-center overflow-y-scroll scrollStyle max-h-[70vh] gap-4 mt-4 h-full">
                            {selectedProject?.data.length > 1 &&
                                selectedProject?.data
                                    ?.sort((a, b) => b.time - a.time)
                                    .map((project, idx) => (
                                        <AudioCard
                                            key={idx}
                                            setShareModal={setShareModal}
                                            setViewModal={setViewModal}
                                            data={project}
                                        />
                                    ))}
                            {selectedProject?.data.length <= 1 && (
                                <p className="text-[#B6B8Bf] text-xs">
                                    Generated audio files will be listed here, so you can come back and listen anytime.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <ShareModal isOpen={shareModal} onOpenChange={setShareModal} />
            <ViewModal isOpen={viewModal} onOpenChange={setViewModal} />
        </div>
    );
}
