"use client";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { IoCopyOutline } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useAppContext } from "./EditBar/EditorContext";

import { Avatar } from "@nextui-org/react";
import { LuFolderInput } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
export default function Card({ project }) {
    const [active, setActive] = useState(false);
    const {
        projects,
        setProjects,
        setSelectedProject,
        setMockData,
        setMockEffect,
        user,
        setProgressModal,
        progressModal,
        workspaces,
    } = useAppContext();
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

        >
            <div className="bg-[#242427] flex justify-between p-[16px] border-b border-b-[#44444A]">
                <div onClick={() => {
                    setProgressModal({
                        ...progressModal,
                        progress: 0,
                        text: "Getting ready...",
                    });

                    setSelectedProject(project);
                    setMockData(
                        project.mockData.sort(function (a, b) {
                            return Number(b.index) - Number(a.index);
                        })
                    );
                    setMockEffect(project.mockEffect);

                    let count = 0;
                    const interval = setInterval(() => {
                        count += 5;
                        if (count === 100) {
                            setProgressModal({
                                text: "Getting ready...",
                                progress: 100,
                            });
                        } else if (count > 100) {
                            clearInterval(interval);
                            setProgressModal("");
                            router.push("/project/" + project.id);
                        } else {
                            setProgressModal({
                                text: "Getting ready...",
                                progress: count,
                            });
                        }
                    });
                }}>
                    <p className="text-[#EFEFEF]">{project?.name || "Untitled"}</p>
                    <p className="text-[#EFEFEF] text-[12px]">Modified {project?.lastModified || "Dec 13, 2023"}</p>
                </div>
                <div className="relative">
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
                            <DropdownItem
                                key="new"
                                className="hover:bg-blue-700"
                                onMouseEnter={() => setActive(true)}
                                startContent={<LuFolderInput className={iconClasses} />}
                                endContent={<IoIosArrowForward />}
                            >
                                Move to
                            </DropdownItem>
                            <DropdownItem
                                onClick={duplicateProject}
                                key="copy"
                                className="hover:bg-blue-700"
                                startContent={<IoCopyOutline className={iconClasses} />}
                            >
                                Duplicate
                            </DropdownItem>
                            <DropdownItem
                                key="delete"
                                className="text-[#C53030] hover:text-white hover:bg-[#C53030]"
                                onClick={deleteProject}
                                color="danger"
                                startContent={<RiDeleteBin5Line className={(iconClasses, "text-danger")} />}
                            >
                                Delete file
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <div
                        onMouseLeave={() => setActive(false)}
                        className={`absolute top-7 z-50 -right-[18.2rem] border-[#44444A] border bg-[#242427] w-full min-w-[200px] rounded py-2 flex flex-col gap-1 ${active ? "" : "hidden"}`}>
                        {
                            workspaces.map(workspace => (
                                <p onClick={() => {
                                    setActive(false);
                                    fetch(`/api/projects/update-project?id=${project.id}`, {
                                        method: "PUT",
                                        headers: {
                                            "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify({ workspaceId: workspace.id }),
                                    });
                                    setProjects(pre => ([...pre.filter(a => a.id !== project.id), { ...project, workspaceId: workspace.id }]))
                                }} className="text-[#EFEFEF] py-2 hover:bg-blue-600 pl-2 text-[12px]" key={workspace.id}>{workspace.name}</p>
                            ))
                        }
                    </div>
                </div>
            </div>
            {/* <hr /> */}
            <div onClick={() => {
                setProgressModal({
                    ...progressModal,
                    progress: 0,
                    text: "Getting ready...",
                });

                setSelectedProject(project);
                setMockData(
                    project.mockData.sort(function (a, b) {
                        return Number(b.index) - Number(a.index);
                    })
                );
                setMockEffect(project.mockEffect);

                let count = 0;
                const interval = setInterval(() => {
                    count += 5;
                    if (count === 100) {
                        setProgressModal({
                            text: "Getting ready...",
                            progress: 100,
                        });
                    } else if (count > 100) {
                        clearInterval(interval);
                        setProgressModal("");
                        router.push("/project/" + project.id);
                    } else {
                        setProgressModal({
                            text: "Getting ready...",
                            progress: count,
                        });
                    }
                });
            }} className="px-[12px] max-h-[11rem] h-full py-[4px] relative">
                <p className="text-white line-clamp-5">
                    {project?.isBasic ? project?.recentText : project?.mockData?.[0]?.actions?.[0]?.data?.name || ``}
                </p>
                {project?.isBasic && (
                    <div className="flex items-center gap-1 w-fit font-bold rounded-lg px-1 py-0.5 absolute bottom-1 text-[#9AE6B4] text-xs bg-[#276749]">
                        <svg
                            className="w-4 h-4"
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M15.4666 3.06663C15.4666 2.84663 15.2866 2.66663 15.0666 2.66663C11.58 2.66663 9.58663 3.77996 8.79997 6.27996C8.0133 3.77996 6.01997 2.66663 2.5333 2.66663C2.3133 2.66663 2.1333 2.84663 2.1333 3.06663C2.1333 7.59996 4.01997 9.60663 8.39997 9.71996V12.9333C8.39997 13.1533 8.57997 13.3333 8.79997 13.3333C9.01997 13.3333 9.19997 13.1533 9.19997 12.9333V9.71996C13.58 9.60663 15.4666 7.59996 15.4666 3.06663ZM2.93997 3.47329C6.72663 3.57329 8.2933 5.13996 8.3933 8.92663C4.60663 8.82663 3.03997 7.25996 2.93997 3.47329ZM9.20663 8.92663C9.30663 5.13996 10.8733 3.57329 14.66 3.47329C14.56 7.25996 12.9933 8.82663 9.20663 8.92663Z"
                                fill="#9AE6B4"
                            ></path>
                        </svg>
                        Simple
                    </div>
                )}
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
                        {user?.displayName?.slice(0, 1) || "V"}
                    </Button>
                )}
            </div>
        </div>
    );
}
