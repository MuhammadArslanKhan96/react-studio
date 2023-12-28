import { Button, Checkbox, Tooltip } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { HiOutlineArrowUturnLeft, HiOutlineArrowUturnRight } from "react-icons/hi2";
import { GrDownload } from "react-icons/gr";
// import { RiSpeedUpLine } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useAppContext } from "./EditorContext";
import { generateSpeech } from "../../helpers/generate-audio";

export default function EditHead() {
    const { mockData, setMockData, initMockData } = useAppContext();

    const generateAudio = async () => {
        mockData
            .filter((a) => a.checked)
            .forEach(async (speaker) => {
                const speech = await generateSpeech(JSON.stringify({ text: speaker?.actions?.[0]?.data?.name, speaker: speaker?.actions?.[0]?.speaker?.id }));
                setMockData((pre) => [
                    ...pre.filter((a) => a.id !== speaker.id),
                    {
                        ...speaker,
                        actions: [
                            {
                                ...speaker.actions[0],
                                data: { ...speaker.actions[0].data, src: speech?.urls?.[0] },
                            },
                        ],
                    },
                ]);
            });
    };

    return (
        <div className="bg-[#2D2D30]">
            <div className="container mx-auto px-4 flex items-center justify-between py-2">
                <div className="flex items-center">
                    <div className="border-r border-r-[#44444A] px-4">
                        <Checkbox
                            isSelected={mockData.filter((a) => a.checked).length === mockData.length}
                            onChange={(e) =>
                                setMockData((pre) => pre.map((a) => ({ ...a, checked: e.target.checked })))
                            }
                        >
                            {mockData.filter((a) => a.checked).length === mockData.length ? "Deselect" : "Select"} All (
                            {mockData.filter((a) => a.checked).length}/{mockData.length})
                        </Checkbox>
                    </div>
                    <div
                        className={
                            " items-center gap-x-4 px-4 " +
                            (mockData.filter((a) => a.checked).length ? "flex" : "hidden")
                        }
                    >
                        <Tooltip showArrow={true} content="Generate" className="bg-black rounded-[10px]">
                            <Image
                                onClick={generateAudio}
                                src={"/images/generate.svg"}
                                alt=""
                                width={20}
                                height={20}
                                className="cursor-pointer"
                            />
                        </Tooltip>
                        <Tooltip showArrow={true} content="Download" className="bg-black rounded-[10px]">
                            <Button
                            >
                                <GrDownload size={18} className="cursor-pointer" />
                            </Button>
                        </Tooltip>
                        {/* <Tooltip showArrow={true} content="Change voice" className="bg-black rounded-[10px]">
                            <Image
                                src={"/images/speakerSelection.svg"}
                                alt=""
                                width={20}
                                height={20}
                                className="cursor-pointer"
                            />
                        </Tooltip>
                        <Tooltip showArrow={true} content="Change speed" className="bg-black rounded-[10px]">
                            <Button>
                                <RiSpeedUpLine size={20} className="cursor-pointer" />
                            </Button>
                        </Tooltip> */}
                        <Tooltip showArrow={true} content="Delete" className="bg-black rounded-[10px]">
                            <Button
                                onClick={() => {
                                    setMockData((pre) =>
                                        pre.length > 1 ? pre.filter((a) => !a.checked) : initMockData
                                    );
                                }}
                            >
                                <RiDeleteBin6Line size={20} className="cursor-pointer" />
                            </Button>
                        </Tooltip>
                    </div>
                </div>
                <div className="flex gap-x-2">
                    <HiOutlineArrowUturnLeft size={24} className="cursor-pointer" />
                    <HiOutlineArrowUturnRight size={24} className="cursor-pointer" />
                </div>
            </div>
        </div>
    );
}
