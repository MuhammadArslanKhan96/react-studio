import { Avatar, Button, Input } from "@nextui-org/react";
import React, { useRef } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import PaymentMethod from "./PaymentMethod";

export default function InfoComp() {
    const ref = useRef();
    return (
        <>
            <div className="flex flex-col gap-4 border-b border-b-[#44444A] pb-6">
                <div>
                    <p className="tetx-[20px] text-[#EFEFEF] font-bold">About Team</p>
                    <p className="text-[#8C8C96]">Manage your team logo & name</p>
                </div>
                <div>
                    <p className="text-[#EFEFEF] font-semibold">Logo</p>
                    <div className="flex gap-x-2 items-center">
                        <div>
                            <Avatar />
                        </div>
                        <div>
                            <div className="flex items-center gap-x-2">
                                <Button
                                    onClick={() => ref.current.click()}
                                    className="text-white text-[14px] border rounded-[5px] px-4 py-1"
                                >
                                    Upload Photo
                                </Button>
                                <RiDeleteBin5Line color="#C53030" />
                            </div>
                            <Input ref={ref} type="file" className="hidden" />
                            <p className="text-[#F5F6F7] text-[12px] mt-2">
                                You can upload jpg, png files. Max size of 4MB
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <p>Name</p>
                    <div className="flex gap-x-2">
                        <Input placeholder="Enter name" className="border rounded-[10px]" />
                        <Button className="text-white border px-4 rounded-[10px]">Update</Button>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <PaymentMethod />
            </div>
        </>
    );
}
