import React, { useState } from "react";
import { Tabs, Tab, Chip } from "@nextui-org/react";
import { useRouter } from "next/router";

export default function SettingLayout({ children }) {
    const router = useRouter();
    return (
        <div className="bg-[#242427] w-full">
            <p className="text-[24px] p-[24px] text-[#EFEFEF] font-bold">Settings</p>
            <div>
                <div className="flex w-full flex-col  border-b border-b-[#44444A] px-4">
                    <Tabs
                        aria-label="Options"
                        color="primary"
                        variant="underlined"
                        classNames={{
                            tabList: "gap-6 w-full relative rounded-none p-0 overflow-hidden border-divider",
                            cursor: "w-full bg-[#428BEB]",
                            tab: "max-w-fit px-0 h-12",
                            tabContent: "group-data-[selected=true]:text-[#428BEB]",
                        }}
                        defaultSelectedKey={router.pathname.split("/setting/")[1]}
                    >
                        <Tab
                            key="info"
                            title={
                                <div
                                    className="flex items-center space-x-2"
                                    onClick={() => router.replace("/setting/info")}
                                >
                                    <span>Basic Info</span>
                                </div>
                            }
                        />
                        <Tab
                            key="subscription"
                            title={
                                <div
                                    className="flex items-center space-x-2"
                                    onClick={() => router.replace("/setting/subscription")}
                                >
                                    <span>Subscription</span>
                                </div>
                            }
                        />
                        <Tab
                            key="members"
                            title={
                                <div
                                    className="flex items-center space-x-2"
                                    onClick={() => router.replace("/setting/members")}
                                >
                                    <span>Members</span>
                                </div>
                            }
                        />
                    </Tabs>
                </div>
            </div>
            {children}
        </div>
    );
}
