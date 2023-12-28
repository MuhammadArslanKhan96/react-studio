"use client";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { useRouter } from "next/router";
import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import { IoCopyOutline } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useAppContext } from "./EditBar/EditorContext";

import {
    Avatar
} from "@nextui-org/react";
export default function Card({ project }) {
    const { projects, setProjects, setSelectedProject, setMockData, setMockEffect, user } = useAppContext();
    const router = useRouter();
    const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";

    const duplicateProject = async () => {
        const { project: newProject } = await fetch(`/api/projects/add-project`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...project, lastModified: new Date().toDateString() }),
        }).then((res) => res.json());
        const newProjects = [...projects, newProject];
        setProjects(newProjects);
    };

    const deleteProject = async () => {
        await fetch(`/api/projects/delete-project?id=${project?.id}`);
        const newProjects = projects.filter((a) => a.id !== project.id);
        setProjects(newProjects);
    };

    return (
        <div
            className="w-fit max-w-[330px] cursor-pointer min-w-[310px] min-h-[260px] max-h-[270px] border border-[#44444A] rounded-[5px] bg-[#2D2D30]"
            onClick={() => {
                setSelectedProject(project);
                setMockData(
                    project.mockData.sort(function (a, b) {
                        return Number(b.id) - Number(a.id);
                    })
                );
                setMockEffect(project.mockEffect);
                router.push("/project/" + project.id);
            }}
        >
            <div className="bg-[#242427] flex justify-between p-[16px] border-b border-b-[#44444A]">
                <div>
                    <p className="text-[#EFEFEF]">{project?.name || "Untitled"}</p>
                    <p className="text-[#EFEFEF] text-[12px]">Modified {project?.lastModified || "Dec 13, 2023"}</p>
                </div>
                <div>
                    <Dropdown>
                        <DropdownTrigger>
                            <Button variant="bordered">
                                <CiMenuKebab className="cursor-pointer" color="#FFFFFF" />
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            variant="faded"
                            aria-label="Dropdown menu with icons"
                            className="bg-[#242427] border border-[#44444A] rounded-[5px]"
                        >
                            {/* <DropdownItem
                                key="new"
                                shortcut="⌘N"
                                startContent={<LuFolderInput className={iconClasses} />}
                            >
                                Move to
                            </DropdownItem> */}
                            <DropdownItem
                                onClick={duplicateProject}
                                key="copy"
                                startContent={<IoCopyOutline className={iconClasses} />}
                            >
                                Duplicate
                            </DropdownItem>
                            <DropdownItem
                                key="delete"
                                className="text-[#C53030]"
                                onClick={deleteProject}
                                color="danger"
                                startContent={<RiDeleteBin5Line className={(iconClasses, "text-danger")} />}
                            >
                                Delete file
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
            {/* <hr /> */}
            <div className="px-[12px] py-[4px] relative">
                <p className="text-white">
                    {project?.description ||
                        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.`}
                </p>
                {user?.photoURL ? (
                    <Avatar
                        isBordered
                        as="button"
                        className="transition-transform absolute bottom-1 right-3"
                        color="secondary"
                        name="Jason Hughes"
                        size="sm"
                        src={user?.photoURL || "https://i.pravatar.cc/150?u=a042581f4e29026704d"}
                    />
                ) : (
                    <Button className="bg-[#755EE5] rounded-[50px] px-[16px] py-[10px] text-[12px] text-black font-bold absolute bottom-1 right-3">
                        V
                    </Button>
                )}
            </div>
        </div>
    );
}
