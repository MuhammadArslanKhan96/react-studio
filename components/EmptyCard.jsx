import React from "react";
import { FaPlus } from "react-icons/fa";

export default function EmptyCard() {
    return (
        <div className="max-w-[330px] min-w-[310px] min-h-[260px] max-h-[270px] border border-[#2871DE] rounded-[5px] bg-[#242427] hover:bg-[#353538] flex flex-col justify-center items-center cursor-pointer">
            {/* <div className="flex flex-col justify-center items-center h-full"> */}
            <FaPlus color="#2871DE" />
            <p className="text-[#2871DE]">New Project</p>
            {/* </div> */}
        </div>
    );
}
