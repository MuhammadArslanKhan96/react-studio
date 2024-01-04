/* eslint-disable react-hooks/exhaustive-deps */
import {
    Avatar,
    Button,
    Checkbox,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Tooltip,
} from "@nextui-org/react";
import Image from "next/image";
import { CiMenuKebab, CiWarning } from "react-icons/ci";
import { FaPause, FaPlay, FaShareSquare } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { VscPulse } from "react-icons/vsc";
import { useAppContext } from "./EditorContext";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { generateSpeech } from "../../helpers/generate-audio";

function TranscriptInput({ mockData, mockEffect,length }) {
    const { setMockData, setMockEffect, setVoiceModel, initMockData } = useAppContext();
    const [disabled, setDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [soundId, setSoundId] = useState();
    const [isPlaying, setIsPlaying] = useState(false);
    const [sound, setSound] = useState();
    const handleCheckboxChange = (e) => {
        setMockData((pre) =>
            [...pre.filter((a) => a.id !== mockData.id), { ...mockData, checked: e.target.checked }].sort(function (
                a,
                b
            ) {
                return Number(b.id) - Number(a.id);
            })
        );
    };

    useEffect(() => {
        if (mockData?.actions?.[0]?.data?.src) {
            setSound(
                new Howl({
                    src: [mockData?.actions?.[0]?.data?.src],
                    html5: true,
                    onload: function (soundId) {
                        setSoundId(soundId);
                    },
                    onplay: function () {
                        setIsPlaying(true);
                    },
                    onpause: function () {
                        setIsPlaying(false);
                    },
                    onend: function () {
                        setIsPlaying(false);
                    },
                    onseek: function () {
                        setCurrentTime(Math.round(this.seek(soundId)));
                    }
                })
            );

            if (mockData?.actions?.[0]?.data?.src === '/audio/bg.mp3') {
                setDisabled(true)
            } 
        }
    }, [mockData]);

    const downloadFile = async () => {
        const downloadLink = document.createElement("a");
        downloadLink.href = mockData?.actions?.[0]?.data?.src;
        downloadLink.download = `${mockEffect?.name?.slice(0, 5)}.mp3`;
        downloadLink.click();
        document.removeChild(downloadLink);
    };

    const handleTextChange = (e) => {
        setDisabled(true);
        setMockData((pre) =>
            [
                ...pre.filter((a) => a.id !== mockData.id),
                {
                    ...mockData,
                    actions: [{ ...mockData.actions[0], data: { ...mockData.actions[0].data, name: e.target.value } }],
                },
            ].sort(function (a, b) {
                return Number(b.id) - Number(a.id);
            })
        );
        setMockEffect((pre) => ({
            ...pre,
            ["effect" + mockData.id]: { ...pre["effect" + mockData.id], name: e.target.value },
        }));
    };

    const generateAudio = async () => {
        if (!mockEffect?.name.length) return;
        setIsLoading(true);
        const speech = await generateSpeech(JSON.stringify({ text: mockEffect?.name, speaker: mockData?.speaker?.id }));
        if (!speech?.urls?.[0]) {
        setIsLoading(false);
            return toast.error('Something went wrong')
        };
        setMockData((pre) =>
            [
                ...pre.filter((a) => a.id !== mockData.id),
                {
                    ...mockData,
                    actions: [
                        {
                            ...mockData.actions[0],
                            data: { ...mockData.actions[0].data, src: speech?.urls?.[0] },
                        },
                    ],
                },
            ].sort(function (a, b) {
                return Number(b.id) - Number(a.id);
            })
        );
        setIsLoading(false);
        setDisabled(false);
    };


    return (
        <div className="flex items-start gap-x-2">
            <div className="flex gap-2 items-center">
                <Checkbox
                    defaultSelected={mockData.checked}
                    onChange={handleCheckboxChange}
                    value={mockData.checked}
                    isSelected={mockData.checked}
                    className="flex"
                    size="16"
                ></Checkbox>
                <div className="flex cursor-pointer gap-2 items-center" onClick={() => setVoiceModel(mockData?.id)}>
                    <Avatar size="24" src={mockData?.speaker?.imageUrl} />
                    <p className="text-[14px]">{mockData?.speaker?.displayName || "Sophia"}</p>
                </div>
            </div>
            <div className="relative">
                <textarea
                    rows="4"
                    onChange={handleTextChange}
                    value={mockEffect?.name}
                    cols="50"
                    className="bg-transparent resize-none border border-[#44444A] rounded-[5px] p-2"
                ></textarea>
                <div className="absolute top-2 right-2 hover:bg-[#353538] p-2 rounded-[5px] cursor-pointer">
                    <Dropdown>
                        <DropdownTrigger>
                            <Button variant="bordered">
                                <CiMenuKebab size={16} color="#FFFFFF" />
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            variant="faded"
                            aria-label="Dropdown menu with icons"
                            className="bg-[#242427] rounded-[10px] border border-[#44444A]"
                        >
                            <DropdownItem key="new" className="text-[14px]" startContent={<VscPulse />}>
                                Producer Mode
                            </DropdownItem>
                            <DropdownItem
                                key="delete"
                                onClick={() =>
                                {
                                    if (length) {
                                        setMockData((pre) =>
                                        pre
                                        .filter((a) => a.id !== mockData.id)
                                        .sort(function (a, b) {
                                            return Number(b.id) - Number(a.id);
                                        })
                                        )
                                    } else {
                                        setMockData(initMockData);
                                    }
                                    }
                                }
                                className="text-[14px] text-[#F56565]"
                                startContent={<RiDeleteBin5Line />}
                            >
                                Delete file
                            </DropdownItem>
                            <DropdownItem key="copy" className="text-[14px]" startContent={<CiWarning />}>
                                Send Feedback
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
            <div className="flex flex-col gap-2 justify-evenly h-full">
                <Tooltip
                    showArrow={true}
                    content="Generate"
                    onClick={() => setDisabled(true)}
                    disabled={!disabled}
                    className="bg-black rounded-[10px]"
                >
                    <Button
                        onClick={generateAudio}
                        disabled={!disabled}
                        className=" disabled:cursor-not-allowed disabled:opacity-50 enabled:cursor-pointer"
                    >
                        {!isLoading ? (
                            <Image src={"/images/generate.svg"} alt="" width={20} height={20} />
                        ) : (
                            <div className="loadingButton"></div>
                        )}
                    </Button>
                </Tooltip>
                <Tooltip showArrow={true} content="Play" className="bg-black rounded-[10px]">
                    <Button
                        disabled={disabled}
                        onClick={() => {
                            if (isPlaying) {
                                sound.pause(soundId);
                            } else {
                                sound.play(soundId);
                            }
                            setIsPlaying(!isPlaying);
                        }}
                        className=" disabled:cursor-not-allowed disabled:opacity-50 enabled:cursor-pointer"
                    >
                        {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
                    </Button>
                </Tooltip>
                <Tooltip showArrow={true} content="Export" className="bg-black rounded-[10px]">
                    <Button
                        disabled={disabled}
                        onClick={downloadFile}
                        className=" disabled:cursor-not-allowed disabled:opacity-50 enabled:cursor-pointer"
                    >
                        <FaShareSquare size={20} />
                    </Button>
                </Tooltip>
            </div>
        </div>
    );
}

export default TranscriptInput;
