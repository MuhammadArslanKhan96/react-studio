import { Input } from "@nextui-org/react";
import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import { useAppContext } from "./EditBar/EditorContext";

export default function EditInput() {
    const { selectedProject, setSelectedProject } = useAppContext();
    const [edit, setEdit] = useState(false);
    return (
        <div className="flex items-center w-fit">
            {edit ? (
                <Input
                    placeholder="Title"
                    value={selectedProject?.name}
                    onChange={(e) => setSelectedProject((pre) => ({ ...pre, name: e.target.value }))}
                    type="text"
                    className="text-[24px] min-w-[7rem]"
                />
            ) : (
                <p className="text-[24px] ml-4 min-w-[7rem]">{selectedProject?.name || "Title"}</p>
            )}
            <div onClick={() => setEdit(!edit)} className="hover:bg-[#353538] p-2 rounded-md">
                <MdEdit className="" />
            </div>
        </div>
    );
}
