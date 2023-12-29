import { Input } from "@nextui-org/react";
import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import { useAppContext } from "./EditBar/EditorContext";

export default function EditInput({ isWorkspace }) {
    const { selectedProject, setSelectedProject, setWorkspaces, selectedWorkspace, setSelectedWorkspace } =
        useAppContext();
    const [edit, setEdit] = useState(false);

    const handleWorkspaceName = async (e) => {
        if (!selectedWorkspace) return;
        const newName = e.target.value;
        setWorkspaces((pre) => [
            ...pre.filter((a) => a.id !== selectedWorkspace.id),
            {
                ...selectedWorkspace,
                name: newName
            }
        ]);
        setSelectedWorkspace({
            ...selectedWorkspace,
            name: newName
        });
        await fetch(`/api/workspaces/update-workspace?id=${selectedWorkspace.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: newName })
        });
    };

    return (
        <div className="flex items-center w-fit">
            {edit ? (
                <Input
                    placeholder="Title"
                    value={isWorkspace ? selectedWorkspace?.name : selectedProject?.name}
                    onChange={
                        isWorkspace
                            ? handleWorkspaceName
                            : (e) => setSelectedProject((pre) => ({ ...pre, name: e.target.value }))
                    }
                    type="text"
                    className="text-[24px] min-w-[7rem]"
                />
            ) : (
                <p className="text-[24px] ml-4 min-w-[7rem]">
                    {(isWorkspace ? selectedWorkspace?.name : selectedProject?.name) || "Title"}
                </p>
            )}
            <div onClick={() => setEdit(!edit)} className="hover:bg-[#353538] p-2 rounded-md">
                <MdEdit className="" />
            </div>
        </div>
    );
}
