import { Input } from "@nextui-org/react";
import React from "react";
import { MdEdit } from "react-icons/md";

export default function EditInput() {
    return (
        <div className="flex items-center w-fit">
            <Input placeholder="Title" type="text" className="text-[24px]" />
            <div className="hover:bg-[#353538] p-2 rounded-md">
                <MdEdit className="" />
            </div>
        </div>
    );
}
