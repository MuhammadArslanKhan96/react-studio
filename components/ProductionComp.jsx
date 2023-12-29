import Image from "next/image";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { Select, SelectItem, Button } from "@nextui-org/react";
import { useRouter } from "next/router";

export default function ProductionComp() {
    const router = useRouter();
    return (
        <div className="flex flex-col p-[24px] overflow-hidden h-full bg-[#242427] w-full">
            <h4 className="text-2xl font-bold">Production</h4>
            <div className="flex flex-wrap items-center py-[24px]">
                <div className="relative mt-2 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 sm:text-sm">
                            <FaSearch />
                        </span>
                    </div>
                    <input
                        type="text"
                        placeholder="Search files"
                        className="block w-[100%] md:w-[22rem] max-w-[22rem] rounded-md focus:outline-0 border border-[rgb(80,80,87)] bg-[#323236] py-0.5 pl-10 text-gray-300 placeholder:text-gray-400"
                    />
                </div>
                <div className="flex min-w-[100px]">
                    <Select id="currency" placeholder="All" className="rounded-md max-w-xs text-gray-500">
                        <SelectItem>All</SelectItem>
                        <SelectItem>Video</SelectItem>
                        <SelectItem>Audio</SelectItem>
                    </Select>
                </div>
            </div>

            <div className="flex h-full gap-[1.5rem] flex-col items-center">
                <p className="text-center text-[16px]">
                    Create and render content in projects.
                    <br />
                    The generated media files will be stored here.
                </p>
                <Image
                    src={"/images/prod-img.png"}
                    className="w-full max-w-[656px] max-h-[351px] h-full"
                    width={656}
                    height={351}
                    alt=""
                />

                <Button onClick={() => router.push('/')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-[16px] py-2 px-4 rounded">
                    Go to Project
                </Button>
            </div>
        </div>
    );
}
