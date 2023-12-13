import { Progress } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

export default function CurrentPlan() {
    return (
        <div className="border-y border-y-[#4D4D51]  p-[16px]">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-[#8C8C96] text-[10px]">Current Plan</p>
                    <p className="text-[#F5F6F&]">Free</p>
                </div>
                <div>
                    <Link
                        href={"/"}
                        className="bg-[linear-gradient(90deg,rgb(46,148,255)0%,rgb(64,140,255)32.81%,rgb(61,181,255)71.35%,rgb(46,209,234)100%)] bg-clip-text text-transparent font-semibold text-[14px]"
                    >
                        UPGRADE
                    </Link>
                </div>
            </div>
            <div className="mt-4">
                <Progress
                    label="Generation Credits"
                    size="md"
                    value={4000}
                    maxValue={10000}
                    color="#FFFFFF"
                    formatOptions={{ style: "currency", currency: "ARS" }}
                    showValueLabel={true}
                    className="max-w-md text-[12px]"
                />
                <p className="text-[#F5F6F7] text-[10px] mt-[5px]">resets on Jan 13, 2024</p>
            </div>
            <div className="mt-4">
                <Progress
                    label="Production Storage"
                    size="md"
                    value={4000}
                    maxValue={10000}
                    color="#FFFFFF"
                    formatOptions={{ style: "currency", currency: "ARS" }}
                    showValueLabel={true}
                    className="max-w-md text-[12px]"
                />
            </div>
        </div>
    );
}
