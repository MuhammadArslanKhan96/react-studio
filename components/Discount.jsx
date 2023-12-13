import { Button } from "@nextui-org/react";
import React from "react";
import { MdArrowRightAlt } from "react-icons/md";

export default function Discount() {
    return (
        <div className="p-3">
            <div className="bg-[url('/images/discount.jpg')] rounded-[10px] p-4 flex flex-col gap-2">
                <p className="text-[#EFEFEF] text-[20px] font-bold">Enjoy 50% off select plans</p>
                <p className="text-[#EFEFEF] text-[14px] font-semibold">On Pro & Pro+ plan</p>
                <Button className="flex justify-between items-center w-full rounded-[20px] bg-[#C8B6F9] px-[16px] py-[8px] text-black text-[12px] font-bold ">
                    Get the deal now! <MdArrowRightAlt size={24} />
                </Button>
            </div>
        </div>
    );
}
