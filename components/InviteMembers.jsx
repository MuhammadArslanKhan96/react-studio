import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import React, { useContext, useState } from "react";
import { Context } from "./Context";
import { AiOutlineMail } from "react-icons/ai";
import Image from "next/image";
import { Avatar } from "antd";
import { useAppContext } from "./EditBar/EditorContext";

export default function InviteMembers({ isOpen, onOpenChange }) {

    const { user, inviteMembers, setInviteMembers } = useAppContext();

    const [memberEmailInput, setMemberEmailInput] = useState('');

    const addUser = async () => {

        if (!memberEmailInput?.trim()?.length) {
            return;
        }

        const response = await fetch(`/api/members/add-members`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ "userId": user.email, email: memberEmailInput, accepted: false }),
        }).then((res) => res.json());

        setInviteMembers(prevMembers => [...prevMembers, { displayName: 'Pending', email: memberEmailInput }]);
        setMemberEmailInput('');
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
                                        placeholder="Invite vie email"
                                        labelPlacement="outside"
                                        className=" rounded-[0.25rem] bg-[#242427] border border-[#44444A] text-[#b6b8bf] text-[17px] w-[397.33px] h-[42px] pt-[8px] pb-[8px] pl-[0px] pl-[0px]"
                                        startContent={<AiOutlineMail className="text-[24px] text-[#fff]" />}
                                    />
                                    <button onClick={addUser} className="text-[#FFF] bg-[#606069] text-[16px]  px-[16px] py-[8px] rounded-[0.25rem] disabled:text-[#999]" disabled={!memberEmailInput?.trim()?.length}>
                                        Invite
                                    </button>
                                </div>

                                <div className="flex justify-start items-center gap-1">
                                    <span className="text-[#fff] text-[14px]">Members</span>
                                    <span className="text-[#8c8c96] text-[14px]">(1)</span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <div className="flex justify-center items-center gap-2">
                                        <Avatar src={user?.photoURL} className="bg-[red]" />
                                        <div>
                                            <p className="text-[14px] text-[#fff]">{user?.displayName}</p>
                                            <p className="text-[12px] text-[#b6b8bf]">{user?.email}</p>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-[12px] text-[#8c8c96]">Owner</p>
                                    </div>
                                </div>

                                {inviteMembers.map((member, index) => (
                                    <div className="flex justify-between items-center" key={index}>
                                        <div className="flex justify-center items-center gap-2">
                                            <Avatar />
                                            <div>
                                                <p className="text-[14px] text-[#fff]">{member?.displayName}</p>
                                                <p className="text-[12px] text-[#b6b8bf]">{member?.email}</p>
                                            </div>
                                        </div>

                                        <div>
                                            <p className="text-[12px] text-[#8c8c96]"></p>
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
