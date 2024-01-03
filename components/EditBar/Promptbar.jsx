import { Button, Tooltip } from "@nextui-org/react";
import { BsPinAngle } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { TbClockHour12 } from "react-icons/tb";
import TranscriptInput from "./TranscriptInput";
import { useAppContext } from "./EditorContext";
import audioControl from "../player/audioControl";

export default function Promptbar() {
    const { mockData, mockEffect, setMockData, setMockEffect } = useAppContext();
    
    const addAnotherMock = () => {
        const editor = mockData.length;
        setMockData((pre) =>
            [
                ...pre,
                {
                    id: `${editor}`,
                    actions: [
                        {
                            id: `action${editor}`,
                            start: 0,
                            end: 2,
                            effectId: "effect" + editor,
                            data: {
                                src: "/audio/bg.mp3",
                                name: "",
                            },
                        },
                    ],
                    checked: false,
                },
            ].sort(function (a, b) {
                return Number(b.id) - Number(a.id);
            })
        );
        setMockEffect((pre) => ({
            ...pre,
            [`effect${editor}`]: {
                id: "effect" + editor,
                name: "",
                source: {
                    start: ({ action, engine, isPlaying, time }) => {
                        if (isPlaying) {
                            const src = action.data.src;
                            audioControl.start({ id: src, src, startTime: action.start, engine, time });
                        }
                    },
                    enter: ({ action, engine, isPlaying, time }) => {
                        if (isPlaying) {
                            const src = action.data.src;
                            audioControl.start({ id: src, src, startTime: action.start, engine, time });
                        }
                    },
                    leave: ({ action, engine }) => {
                        const src = action.data.src;
                        audioControl.stop({ id: src, engine });
                    },
                    stop: ({ action, engine }) => {
                        const src = action.data.src;
                        audioControl.stop({ id: src, engine });
                    },
                },
            },
        }));
    };

    return (
        <div className="flex justify-center mt-4">
            <div className="flex flex-col">
                <div className="flex justify-between items-center mb-[10px]">
                    <div className="flex items-center gap-x-2">
                        <Tooltip showArrow={true} content="Fix the start time" className="bg-black rounded-[10px]">
                            <Button>
                                <BsPinAngle size={20} />
                            </Button>
                        </Tooltip>
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
                    <div>
                        <p className="text-[#428BEB] text-[12px]">Free Regeneration Available</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    {mockData.map((item) => {
                        return (
                            <TranscriptInput
                                mockData={item}
                                mockEffect={mockEffect[`effect${item.id}`]}
                                key={item.id}
                            />
                        );
                    })}
                    {/* add new block */}
                    <div className="flex items-center w-full justify-between cursor-pointer opacity-0 hover:opacity-100">
                        <div className="bg-[#343438] h-[1px] w-full"></div>
                        <Button
                            onClick={addAnotherMock}
                            className="flex rounded-[10px] w-full gap-x-2 bg-[#44444A] px-2  text-[10px] text-[#EFEFEF]"
                        >
                            <FaPlus size={10} />
                            Add a new block
                        </Button>
                        <div className="bg-[#343438] h-[1px] w-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
