import React, { useState } from "react";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import CurrentPlan from "@/components/CurrentPlan";
import Link from "next/link";
import Discount from "@/components/Discount";

export default function App({ Component, pageProps }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <NextUIProvider>
            {/* <button className="bg-green-600 text-white rounded px-4 py-1" onClick={() => setIsOpen(true)}>
                open
            </button> */}
            <Header />
            <div className="flex w-full">
                <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}>
                    <CurrentPlan />
                    <Link
                        href={"/"}
                        className="flex items-center gap-x-2 text-[14px] border-b-2 border-b-[#4D4D51] px-3 py-2 hover:bg-[#39393C] mb-3"
                    >
                        <Image src={"/images/production.svg"} alt="" width={20} height={20} />
                        Production
                    </Link>
                    <Link href={"/"} className="flex items-center gap-x-2 text-[14px] py-2 px-3 hover:bg-[#39393C] ">
                        <Image src={"/images/pricing.svg"} alt="" width={20} height={20} />
                        Pricing
                    </Link>
                    <Link
                        href={"/"}
                        className="flex items-center gap-x-2 text-[14px] py-2 px-3 hover:bg-[#39393C] space-y-0"
                    >
                        <Image src={"/images/subscription.svg"} alt="" width={20} height={20} />
                        Subscription
                    </Link>
                    <Link href={"/"} className="flex items-center gap-x-2 text-[14px] py-2 px-3 hover:bg-[#39393C] ">
                        <Image src={"/images/setting.svg"} alt="" width={20} height={20} />
                        Setting
                    </Link>
                    <Discount />
                </Sidebar>
                <Component {...pageProps} />
            </div>
        </NextUIProvider>
    );
}
