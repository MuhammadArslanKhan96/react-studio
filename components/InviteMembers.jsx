import { Input, Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";
import { Avatar } from "antd";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { useAppContext } from "./EditBar/EditorContext";
import { toast } from "react-toastify";

export default function InviteMembers({ isOpen, onOpenChange }) {
    const { selectedWorkspace, inviteMembers, setInviteMembers, setWorkspaces, setSelectedWorkspace } = useAppContext();
    
    const [memberEmailInput, setMemberEmailInput] = useState("");

    const addUser = async () => {
        if (!memberEmailInput?.trim()?.length || !selectedWorkspace) {
            return;
        }

        if (inviteMembers.filter((a) => a.email === memberEmailInput).length) {
            toast.error("Can't invite a member twice");
            return;
        }
        await fetch(`/api/workspaces/update-workspace?id=${selectedWorkspace?.id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                members: [
                    ...selectedWorkspace?.members.map((a) => ({
                        email: a.email,
                        accepted: a.accepted,
                        role: a.role
                    })),
                    { email: memberEmailInput, accepted: false, role: "Member" }
                ]
            })
        }).then((res) => res.json());
        setWorkspaces((pre) => [
            ...pre.filter((a) => a.id !== selectedWorkspace.id),
            {
                ...selectedWorkspace,
                members: [
                    ...selectedWorkspace.members,
                    {
                        accepted: false,
                        email: memberEmailInput,
                        role: "Member"
                    }
                ]
            }
        ]);
        setSelectedWorkspace({
            ...selectedWorkspace,
            members: [
                ...selectedWorkspace.members,
                {
                    accepted: false,
                    email: memberEmailInput,
                    role: "Member"
                }
            ]
        });
        setInviteMembers((prevMembers) => [
            ...prevMembers,
            { accepted: false, email: memberEmailInput, role: "Member" }
        ]);
        setMemberEmailInput("");
    };

    return (
        <div>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className="border border-[#44444A] rounded-[0.25rem] bg-[#242427] "
            >
                <ModalContent className="max-w-[32rem] min-h-[30.25rem]">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-[16px] text-[#efefef] py-[0.5rem] ">
                                Invite Members
                            </ModalHeader>

                            <hr className="border border-[#44444A]" />
                            <ModalBody>
                                <div className="w-[100%] flex justify-between items-center gap-[10px]">
                                    <Input
                                        onChange={(e) => setMemberEmailInput(e.currentTarget.value)}
                                        value={memberEmailInput}
                                        type="email"
                                        placeholder="Invite via email"
                                        labelPlacement="outside"
                                        className=" rounded-[0.25rem] bg-[#242427] border border-[#44444A] text-[#b6b8bf] text-[17px] w-[397.33px] h-[42px] pt-[8px] pb-[8px] pl-[0px] pl-[0px]"
                                        startContent={<AiOutlineMail className="text-[24px] text-[#fff]" />}
                                    />
                                    <button
                                        onClick={addUser}
                                        className="text-[#FFF] bg-[#606069] text-[16px]  px-[16px] py-[8px] rounded-[0.25rem] disabled:text-[#999]"
                                        disabled={!memberEmailInput?.trim()?.length || !memberEmailInput.toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )}
                                    >
                                        Invite
                                    </button>
                                </div>

                                <div className="flex justify-start items-center gap-1">
                                    <span className="text-[#fff] text-[14px]">Members</span>
                                    <span className="text-[#8c8c96] text-[14px]">({inviteMembers?.length})</span>
                                </div>

                                {inviteMembers.map((member, index) => (
                                    <div className="flex justify-between items-center" key={index}>
                                        <div className="flex justify-center items-center gap-2">
                                            <Avatar src={member?.photoURL} className="bg-[red]" />
                                            <div>
                                                <p className="text-[14px] text-[#fff]">
                                                    {member?.displayName || "Pending"}
                                                </p>
                                                <p className="text-[12px] text-[#b6b8bf]">{member?.email}</p>
                                            </div>
                                        </div>

                                        <div>
                                            <p className="text-[12px] text-[#8c8c96]">{member?.role || "Owner"}</p>
                                        </div>
                                    </div>
                                ))}
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}
