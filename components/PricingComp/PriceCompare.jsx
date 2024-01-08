import { Button } from "@nextui-org/react";
import { Switch } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { FaArrowDownLong } from "react-icons/fa6";
import ComparePlans from "./ComparePlans";
import { useAppContext } from "../EditBar/EditorContext";
import { useRouter } from "next/router";

export default function PriceCompare() {
    const [switchactive, setSwitchActive] = useState(true);
    const [count, setcount] = useState(1);
    const { setUser, user } = useAppContext();
    const router = useRouter();

    const handlePlanChange = async (name) => {
        setUser((prevUser) => ({
            ...prevUser,
            plan: name,
        }));

        await fetch(`/api/users/update-user?email=${user?.email}`, {
            method: "POST",
            body: JSON.stringify({
                plan: name,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
    };

    const inc = () => {
        setcount(count + 1);
    };

    const dec = () => {
        setcount(count - 1);
    };

    const onChange = (checked) => {
        setSwitchActive(!switchactive);
    };

    const image = [
        {
            img: "/images/forbes.svg",
        },
        {
            img: "/images/bbc.svg",
        },
        {
            img: "/images/lg.svg",
        },
        {
            img: "/images/frontier.svg",
        },
        {
            img: "/images/berkely.svg",
        },
    ];

    const plans = [
        {
            tier: "Free",
            pricemon: "$0",
            priceyear: "$0",
            method1: "No credit card required",
            billedmont: "",
            billedyear: "",
            des: "Fully experience the product before committing",
            featava: ["First 14 Days Free Trial of Pro", "Unlimited Sharing"],
            featdes: ["Downloads", "Commercial Rights"],
        },
        {
            tier: "Basic",
            pricemon: "$36",
            priceyear: "$29",
            method1: "per user /month",
            billedmont: "Billed US$36 monthly",
            billedyear: "Billed US$348 annually",
            des: "Essential for creating awesome content",
            featava: [
                "3 Hrs of Voice Generation / mo",
                "Hyper Realistic Pro Voices",
                "Clone Up to 5 Voices",
                "Auto Subtitle Generator",
                "Global Voices in 100+ Languages",
                "Unlimited Downloads",
                "Commercial Rights",
            ],
            featdes: [""],
        },
        {
            tier: "Pro",
            pricemon: "$79",
            priceyear: "$39",
            method1: "per user /month",
            billedmont: "Billed US$79 monthly",
            billedyear: "Billed US$468 annually",
            des: "All of Genny’s powerful features for professionals",
            featava: [
                "Everything in Basic",
                "10 Hrs of Voice Generation / mo",
                "Unlimited Voice Cloning",
                "AI-Powered Creation: Script & Images",
                "Collaborate with Team Members",
                "Priority Queue",
            ],
            featdes: [""],
        },
        {
            tier: "Pro +",
            pricemon: "$149",
            priceyear: "$75",
            method1: "per user /month",
            billedmont: "Billed US$149 monthly",
            billedyear: "Billed US$900 annually",
            des: "Perfect for businesses with large content volume",
            featava: ["Everything in Pro", "30 Hrs of Voice Generation / mo", "400GB Storage", "Priority Support"],
            featdes: [""],
        },
    ];

    const enterpriseplan = [
        {
            tier: "Enterprise",
            email: "hello@lovo.ai",
            des: "For teams that need to scale content production",
            feat: [
                "Everything in Pro+",
                "Custom Voice Generation",
                "Dedicated Account Executive",
                "Enterprise Grade Security",
                "Service Level Agreements",
                "Private Onboarding and Training",
                "API Support",
            ],
        },
    ];

    return (
        <div className="overflow-x-scroll scrollStyle min-w-[700px]">
            <div className="flex flex-col justify-center">
                <p className="text-[20px] text-[#EFEFEF] flex justify-center">Join 1,000,000+ creating with LOVO</p>
                <div className="flex justify-center gap-4 mt-4">
                    {image.map((item, idx) => (
                        <div key={idx}>
                            <Image
                                src={item.img}
                                alt=""
                                width={90}
                                height={100}
                                className="w-[90px] h-full opacity-70"
                            />
                        </div>
                    ))}
                </div>
                <div className="flex gap-x-2 justify-center mt-4">
                    <p
                        className={` ${switchactive === "month" ? "text-[#EFEFEF]" : "text-[#8C8C96]"}`}
                        onClick={() => setSwitchActive("month")}
                    >
                        Montly
                    </p>
                    <Switch defaultChecked onChange={onChange} />
                    <p
                        className={`${switchactive === "year" ? "text-[#EFEFEF]" : "text-[#8C8C96]"}`}
                        onClick={() => setSwitchActive("year")}
                    >
                        Yearly
                    </p>
                </div>
                <p className="text-[#2871DE] text-[14px] flex justify-center mt-2">SAVE UP TO 50% WITH YEARLY</p>
            </div>
            <div>
                <div className="flex lg:grid w-full pt-10 relative lg:grid-cols-4 gap-[1px]">
                    {plans.map((item, idx) => (
                        <div key={idx} className="flex flex-col">
                            <div className="p-2 flex flex-col justify-between min-h-[19rem]">
                                <div>
                                    {item.tier === "Pro" && (
                                        <div className="absolute top-0 bg-[linear-gradient(90deg,rgb(46,148,255)0%,rgb(64,140,255)32.81%,rgb(61,181,255)71.35%,rgb(46,209,234)100%)] p-[1px] rounded-[10px] w-fit  m-2">
                                            <Button
                                                className="bg-[#2D2D30]  flex rounded-[10px] flex-col text-[12px] text-[#3396FF] px-4 py-2 w-full"
                                                onClick={() => ref.current.click()}
                                            >
                                                Most Popular
                                            </Button>
                                        </div>
                                    )}
                                    <p
                                        className={`${
                                            item.tier === "Free"
                                                ? "text-[#F5F6F7]"
                                                : item.tier === "Basic"
                                                ? "text-[#F6AD55]"
                                                : item.tier === "Pro"
                                                ? "text-[#428BEB]"
                                                : item.tier === "Pro +"
                                                ? "text-[#B794F4]" // Set the color to #B794F4 for "Pro +"
                                                : "" // Default case, you can adjust this based on your requirements
                                        } text-[20px]`}
                                    >
                                        {item.tier}
                                    </p>
                                    <p
                                        className={`${
                                            item.tier === "Free"
                                                ? "text-[#F5F6F7]"
                                                : item.tier === "Basic"
                                                ? "text-[#F6AD55]"
                                                : item.tier === "Pro"
                                                ? "text-[#428BEB]"
                                                : item.tier === "Pro +"
                                                ? "text-[#B794F4]" // Set the color to #B794F4 for "Pro +"
                                                : "" // Default case, you can adjust this based on your requirements
                                        } text-[48px] font-bold`}
                                    >
                                        {!switchactive ? item.pricemon : item.priceyear}
                                    </p>
                                    <p className="text-[#8C8C96] text-[14px]">{item.method1}</p>
                                    <p className="text-[#8C8C96] text-[14px]">
                                        {switchactive ? item.billedyear : item.billedmont}
                                    </p>
                                    <p className="text-[#F5F6F7] text-[16px]">{item.des}</p>
                                    {(item.tier === "Pro" || item.tier === "Pro +") && (
                                        <div className="mt-2 w-full">
                                            <p className="text-[#B6B8BF] text-[12px]">Users</p>
                                            <div className="flex gap-x-2 items-center w-full">
                                                <button onclick={dec}>-</button>

                                                <input
                                                    type="number"
                                                    value={count}
                                                    // onChange={(e) => setcount(e.target.value)}
                                                    className="bg-[#242427] border border-[#44444A] rounded-[5px] px-2 w-full"
                                                />

                                                <button onclick={inc}>+</button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <Button
                                    onClick={() => handlePlanChange(item.tier)}
                                    className="bg-[#2871DE]  text-[14px] rounded-[10px] w-full py-2 mt-2"
                                >
                                    Change Plan
                                </Button>
                            </div>
                            <div className="bg-[#2D2D30] p-2 mt-2 h-full">
                                <p className="flex flex-col  gap-x-2 text-[14px]">
                                    {" "}
                                    {item.featava.map((item, idx) => (
                                        <>
                                            <div className="flex gap-1 ">
                                                <TiTick size={16} />
                                                <p key={idx}>{item}</p>
                                            </div>
                                        </>
                                    ))}
                                </p>
                                <p className="flex flex-col  gap-x-2 text-[14px]">
                                    {" "}
                                    {item.featdes.length > 1 &&
                                        item.featdes.map((item, idx) => (
                                            <>
                                                <div className="flex gap-1 ">
                                                    <RxCross2 size={16} color="red" />
                                                    <p key={idx}>{item}</p>
                                                </div>
                                            </>
                                        ))}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center my-2">
                <Button
                    onClick={() => router.push("/pricing#pricing-policy-table")}
                    className="flex items-center gap-x-2 text-[#EFEFEF] hover:bg-[#353538] rounded-[5px] px-4 py-2"
                >
                    See all features <FaArrowDownLong />
                </Button>
            </div>
            <div className="bg-[#2D2D30] flex p-2">
                {enterpriseplan.map((item, idx) => (
                    <div key={idx} className="flex justify-between w-full">
                        <div className="flex flex-col items-center justify-center p-2 w-1/2">
                            <div className=" max-w-[232px] flex flex-col items-center">
                                <p className="text-[20px] text-[#EFEFEF]">{item.tier}</p>
                                <p className="text-[14px] text-[#8C8C96]">{item.email}</p>
                                <p className="text-[16px] text-[#F5F6F7] flex text-center">{item.des}</p>
                                <Button className="bg-[#2871DE] rounded-[5px] text-[14px] px-4 mt-2 w-full py-2">
                                    Contact Sales
                                </Button>
                            </div>
                        </div>
                        <div className="flex flex-col p-2 w-1/2">
                            {item.feat.map((item, idx) => (
                                <p key={idx} className="flex gap-x-2 items-center text-[14px]">
                                    <TiTick size={16} />
                                    {item}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <ComparePlans switchactive={switchactive} plans={plans} inc={inc} dec={dec} count={count} />
            </div>
        </div>
    );
}
