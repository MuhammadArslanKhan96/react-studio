import React from "react";
import { TbClockHour9 } from "react-icons/tb";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { IoFolderOutline } from "react-icons/io5";
import NextPaymentDetails from "./NextPaymentDetails";
import BillingHistory from "./BillingHistory";

export default function SubscriptionComp() {
    return (
        <div className="flex flex-col gap-4">
            <div className="border border-[#44444A] rounded-[10px] p-[24px] flex justify-between gap-x-4">
                {/* current Plan */}
                <div className="w-full">
                    <div>
                        <p className="text-[14px] text-[#EFEFEF]">Current Plan</p>
                        <p className="text-[24px] text-[#EFEFEF] font-bold">Free</p>
                    </div>
                    <div>
                        <div className="mt-4">
                            <div className="flex justify-between mb-1">
                                <div className="flex items-center gap-x-2">
                                    <TbClockHour9 size={24} />
                                    <span className="font-medium text-blue-700 dark:text-[#EFEFEF] text-[14px]">
                                        Generation Credits
                                    </span>
                                    <FaRegCircleQuestion size={16} />
                                </div>
                                <span className="font-medium text-blue-700 dark:text-white text-[16px]">5m 0s</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                                <div className="bg-blue-600 h-3 rounded-full" style={{ width: "45%" }}></div>
                            </div>
                            <p className="text-[#F5F6F7] text-[12px] mt-[5px]">resets on Jan 13, 2024</p>
                        </div>
                    </div>
                </div>
                {/* center */}
                <div className="w-[1px] h-16 flex self-end bg-[#44444A]"></div>
                {/* currentTeam */}
                <div className="w-full">
                    <div>
                        <p className="text-[14px] text-[#EFEFEF]">Current team</p>
                        <p className="text-[24px] text-[#EFEFEF] font-bold">
                            1/1 <span className="text-[12px] text-[#EFEFEF]">member(s)</span>{" "}
                        </p>
                    </div>
                    <div>
                        <div className="mt-4">
                            <div className="flex justify-between mb-1">
                                <div className="flex items-center gap-x-2">
                                    <IoFolderOutline size={24} />
                                    <span className="font-medium text-blue-700 dark:text-[#EFEFEF] text-[14px]">
                                        Production Storage
                                    </span>
                                </div>
                                <span className="font-medium text-blue-700 dark:text-white text-[16px]">0 / 1GB</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                                <div className="bg-blue-600 h-3 rounded-full" style={{ width: "45%" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <NextPaymentDetails />
            <BillingHistory />
        </div>
    );
}
