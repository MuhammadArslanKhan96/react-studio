import { Dropdown, Space, Typography } from "antd";
import React from "react";
import { HiBarsArrowDown } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import Image from "next/image";
import { Avatar, Button, useDisclosure } from "@nextui-org/react";
import InviteMembers from "./InviteMembers";
import { useAppContext } from "./EditBar/EditorContext";

export default function MembersComp() {
    const { inviteMembers, pendingInvites, user, setPendingInvites, setWorkspaces } = useAppContext();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const items = [
        {
            key: "1",
            label: "Date Added"
        },
        {
            key: "2",
            label: "Name (A-Z)"
        },
        {
            key: "3",
            label: "Name (Z-A)"
        }
    ];

    return (
        <div className="flex flex-col gap-4">
            {/* pending */}
            <div>
                <div>
                    <p className="text-[20px] text-[#EFEFEF] font-semibold">Pending</p>
                </div>
                {/* Table */}
                <div className="relative mt-4 overflow-x-auto rounded-[10px] border border-[#44444A]">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                        <thead className="text-xs text-gray-700 uppercase bg-[#242427 dark:text-gray-400 border-b border-b-[#44444A]">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-[14px]">
                                    Name
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {pendingInvites.map((invite, idx) => {
                                const inviter = invite?.members.filter((a) => a.accepted)[0];

                                return (
                                    <tr className="bg-[#242427] dark:border-gray-700" key={idx}>
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            <div className="flex gap-x-[3px] items-center">
                                                <div>
                                                    <Avatar src={inviter?.photoURL} />
                                                </div>
                                                <div>
                                                    <p>{inviter?.displayName || "Pending"}</p>
                                                    <p>{inviter?.email}</p>
                                                </div>
                                            </div>
                                        </th>
                                        <td className="px-6 py-4 text-white">
                                            <div className="flex gap-x-2">
                                                <Button
                                                    className="text-[14px] bg-[#2871DE] text-white rounded-[5px] px-[12px] py-[6px] flex items-center"
                                                    onClick={async () => {
                                                        await fetch(
                                                            `/api/workspaces/update-workspace?id=${invite.id}`,
                                                            {
                                                                method: "PUT",
                                                                headers: {
                                                                    "Content-Type": "application/json"
                                                                },
                                                                body: JSON.stringify({
                                                                    ...invite,
                                                                    members: [
                                                                        ...invite.members.filter(
                                                                            (a) => a.email !== user.email
                                                                        ),
                                                                        {
                                                                            accepted: true,
                                                                            email: user.email,
                                                                            role: "Member"
                                                                        }
                                                                    ]
                                                                })
                                                            }
                                                        );

                                                        setPendingInvites((pre) =>
                                                            pre.filter((a) => a.id !== invite.id)
                                                        );

                                                        setWorkspaces((pre) => [
                                                            ...pre,
                                                            {
                                                                ...invite,
                                                                members: [
                                                                    ...invite.members.filter(
                                                                        (a) => a.email !== user.email
                                                                    ),
                                                                    {
                                                                        accepted: true,
                                                                        email: user.email,
                                                                        role: "Member"
                                                                    }
                                                                ]
                                                            }
                                                        ]);

                                                        console.log("Invite Accepted");
                                                    }}
                                                >
                                                    Accept
                                                </Button>
                                                <Button
                                                    className="text-[14px] bg-[#2871DE] text-white rounded-[5px] px-[12px] py-[6px] flex items-center"
                                                    onClick={() => {
                                                        console.log("reject");
                                                    }}
                                                >
                                                    Reject
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}

                            {!pendingInvites.length && (
                                <tr>
                                    <td className="px-6 py-4 text-white text-center">No Pending Invites</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* members */}
            <div className="flex flex-col gap-4">
                <div>
                    <p className="text-[20px] text-[#EFEFEF] font-semibold">
                        Members <span className="text-[#8C8C96] text-[16px]">({inviteMembers.length})</span>
                    </p>
                </div>
                <div className="flex justify-between items-center">
                    <div className="w-fit flex items-center gap-x-2">
                        <Dropdown
                            className="border border-[#44444A] px-3 rounded-[5px] py-1 flex items-center hover:bg-[#353538]"
                            menu={{
                                items,
                                selectable: true,
                                defaultSelectedKeys: ["3"]
                            }}
                        >
                            <Typography.Link className="text-[#FFFFFF]">
                                <Space>
                                    <HiBarsArrowDown size={20} />
                                    by Date Added
                                    <GoTriangleDown size={20} />
                                </Space>
                            </Typography.Link>
                        </Dropdown>
                        <div className="relative rounded-md shadow-sm">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <span className="text-gray-500 sm:text-sm">
                                    <FaSearch />
                                </span>
                            </div>
                            <input
                                type="text"
                                placeholder="Search members"
                                className="block w-[100%] md:w-[22rem] max-w-[22rem] rounded-md focus:outline-0 border border-[#44444A] bg-[#242427] py-0.5 pl-10 text-gray-300 placeholder:text-gray-400"
                            />
                        </div>
                    </div>
                    <div>
                        <Button
                            onClick={onOpen}
                            className="text-[14px] bg-[#2871DE] text-white rounded-[5px] px-[12px] py-[6px] flex items-center"
                        >
                            <Image src={"/images/invite.svg"} alt="" width={20} height={20} />
                            Invite Members
                        </Button>
                        <InviteMembers isOpen={isOpen} onOpenChange={onOpenChange} />
                    </div>
                </div>

                {/* Table */}
                <div className="relative overflow-x-auto rounded-[10px] border border-[#44444A]">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                        <thead className="text-xs text-gray-700 uppercase bg-[#242427 dark:text-gray-400 border-b border-b-[#44444A]">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-[14px]">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3 text-[14px]">
                                    Role
                                </th>
                                <th scope="col" className="px-6 py-3 text-[14px]">
                                    Joined on
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {inviteMembers.map((member, idx) => (
                                <tr className="bg-[#242427] dark:border-gray-700" key={idx}>
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        <div className="flex gap-x-[3px] items-center">
                                            <div>
                                                <Avatar src={member?.photoURL} />
                                            </div>
                                            <div>
                                                <p>{member?.displayName || "Pending"}</p>
                                                <p>{member?.email}</p>
                                            </div>
                                        </div>
                                    </th>
                                    <td className="px-6 py-4 text-white">{member?.role}</td>
                                    <td className="px-6 py-4 text-white">
                                        {member?.metadata?.createdAt
                                            ? new Date(
                                                  Number(member?.metadata?.createdAt) || new Date().getTime()
                                              ).toDateString()
                                            : "Not Joined"}
                                    </td>
                                </tr>
                            ))}

                            {!pendingInvites.length && (
                                <tr >
                                    <td colSpan={3} className="px-6 py-4 text-white text-center">No Members</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
