import { Button, Tooltip } from "@nextui-org/react";
import { BsPinAngle } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { TbClockHour12 } from "react-icons/tb";
import TranscriptInput from "./TranscriptInput";
import { useAppContext } from "./EditorContext";

export default function Promptbar() {
    const { mockData, mockEffect, setMockData, setMockEffect } = useAppContext();
    const addAnotherMock = () => {
        setMockData((pre) => [
            ...pre,
            {
                id: `${pre.length}`,
                actions: [
                    {
                        id: "",
                        start: 0,
                        end: 2,
                        effectId: "effect" + pre.length,
                    },
                ],
                checked: false,
            },
        ]);
        setMockEffect((pre) => ({
            ...pre,
            [`effect${Object.keys(pre).length}`]: {
                id: "effect" + Object.keys(pre).length,
                name: "",
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
                    {mockData.map((item, index) => {
                        return (
                            <TranscriptInput mockData={item} mockEffect={mockEffect[`effect${index}`]} key={index} />
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
