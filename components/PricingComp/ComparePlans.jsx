import React from "react";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { Button, Tooltip } from "@nextui-org/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

export default function ComparePlans({ switchactive, inc, dec, count }) {
    const aivoice = [
        {
            voice: "Voice Generation",
            tooltip: "Vioce generation credits reset every billing cycle and do not roll over.",
            free: "5 Mins / mo",
            basic: "3 Hrs / mo",
            pro: "10 Hrs / mo",
            proplus: "30 Hrs / mo",
        },
        {
            voice: "Hyper Realistic Pro Voices",
            tooltip: "Vioce generation credits reset every billing cycle and do not roll over.",
            free: <TiTick size={16} />,
            basic: <TiTick size={16} />,
            pro: <TiTick size={16} />,
            proplus: <TiTick size={16} />,
        },
        {
            voice: "Voice Cloning",
            tooltip: "Instantly clone your voice or design a unique voice.",
            free: "5 Voices",
            basic: "5 Voices",
            pro: "Unlimited",
            proplus: "Unlimited",
        },
        {
            voice: "Simple Mode Character Limit",
            tooltip: "Simple Mode is designed for short voiceovers. For longer voiceovers, use the Advanced Mode.",
            free: "2k Chars / Generation",
            basic: "2k Chars / Generation",
            pro: "5k Chars / Generation",
            proplus: "5k Chars / Generation",
        },
        {
            voice: "Global Voices In 100+ Languages",
            tooltip: "Reach a wider audience with Global Voices in 100+ languages.",
            free: <TiTick size={16} />,
            basic: <TiTick size={16} />,
            pro: <TiTick size={16} />,
            proplus: <TiTick size={16} />,
        },
        {
            voice: "Priority Queue",
            tooltip: "For those running short on time, skip the queue. Enjoy faster generation.",
            free: <RxCross2 size={16} />,
            basic: <RxCross2 size={16} />,
            pro: <TiTick size={16} />,
            proplus: <TiTick size={16} />,
        },
        {
            voice: "Producer Mode",
            tooltip: "Finetune pitch for voice generations. Only available for select Rapid Voices.",
            free: <RxCross2 size={16} />,
            basic: <RxCross2 size={16} />,
            pro: <TiTick size={16} />,
            proplus: <TiTick size={16} />,
        },
        {
            voice: "Pronunciation Rules",
            tooltip: "Fix repeated pronunciation errors with Pronunciation Rules.",
            free: <TiTick size={16} />,
            basic: <TiTick size={16} />,
            pro: <TiTick size={16} />,
            proplus: <TiTick size={16} />,
        },
    ];

    const editing = [
        {
            voice: "Project Limit",
            tooltip: "The number of live projects that a team can have in a workspace.",
            free: "5",
            basic: "5",
            pro: "50",
            proplus: "Unlimited",
        },
        {
            voice: "Stock Video, Image, Audio",
            tooltip: "Enjoy millions of beautiful royalty free stock footage for your video.",
            free: <TiTick size={16} />,
            basic: <TiTick size={16} />,
            pro: <TiTick size={16} />,
            proplus: <TiTick size={16} />,
        },
        {
            voice: "Remove Watermark",
            tooltip: "Remove LOVO AI watermark from your video exports.",
            free: <RxCross2 size={16} />,
            basic: <TiTick size={16} />,
            pro: <TiTick size={16} />,
            proplus: <TiTick size={16} />,
        },
        {
            voice: "Export Quality",
            tooltip: "Video quality exports range from 720p to 1080p.",
            free: <RxCross2 size={16} />,
            basic: "1080p",
            pro: "1080p",
            proplus: "1080p",
        },
        {
            voice: "Sharing",
            tooltip: "Share your work with your colleagues or friends via link or social media.",
            free: "Unlimited",
            basic: "Unlimited",
            pro: "Unlimited",
            proplus: "Unlimited",
        },
        {
            voice: "Downloads",
            tooltip: "Download audio in MP3 and WAV. Download Videos in MP4.",
            free: <RxCross2 size={16} />,
            basic: "Unlimited",
            pro: "Unlimited",
            proplus: "Unlimited",
        },
        {
            voice: "Commercial Rights",
            tooltip: "Unlimited, perpetual commercial rights are provided for your finished work.",
            free: <RxCross2 size={16} />,
            basic: <TiTick size={16} />,
            pro: <TiTick size={16} />,
            proplus: <TiTick size={16} />,
        },
        {
            voice: "Storage",
            tooltip: "Storage for your ongoing and finished work, and your custom resources.",
            free: "1 GB",
            basic: "30 GB",
            pro: "100 GB",
            proplus: "400 GB",
        },
        {
            voice: "SRT Subtitles Upload",
            tooltip: "Upload SRT files for automatic subtitle generation.",
            free: <TiTick size={16} />,
            basic: <TiTick size={16} />,
            pro: <TiTick size={16} />,
            proplus: <TiTick size={16} />,
        },
        {
            voice: "SRT Subtitles Downloads",
            tooltip: "Download SRT files from generated subtitles.",
            free: <RxCross2 size={16} />,
            basic: <TiTick size={16} />,
            pro: <TiTick size={16} />,
            proplus: <TiTick size={16} />,
        },
    ];

    const feature = [
        {
            voice: "ChatGPT AI Writer",
            tooltip: "Use ChatGPT natively within Genny without additional cost.",
            free: <RxCross2 size={16} />,
            basic: <RxCross2 size={16} />,
            pro: <TiTick size={16} />,
            proplus: <TiTick size={16} />,
        },
        {
            voice: "AI Art Generator",
            tooltip: "Use the best Stable Diffusion models natively within Genny without additional cost.",
            free: <RxCross2 size={16} />,
            basic: <RxCross2 size={16} />,
            pro: <TiTick size={16} />,
            proplus: <TiTick size={16} />,
        },
        {
            voice: "Auto Subtitle Generator",
            tooltip:
                "Genny’s AI automatically recognizes speech in your video or voice file, and adds beautiful subtitles.",
            free: <RxCross2 size={16} />,
            basic: <TiTick size={16} />,
            pro: <TiTick size={16} />,
            proplus: <TiTick size={16} />,
        },
    ];

    const collaboration = [
        {
            voice: "Invite Members",
            tooltip: "Invite your team members for collaborative content creation.",
            free: <RxCross2 size={16} />,
            basic: <RxCross2 size={16} />,
            pro: <TiTick size={16} />,
            proplus: <TiTick size={16} />,
        },
        {
            voice: "Collaborative Workspaces",
            tooltip: "Invite your team members for collaborative content creation.",
            free: <RxCross2 size={16} />,
            basic: <RxCross2 size={16} />,
            pro: <TiTick size={16} />,
            proplus: <TiTick size={16} />,
        },
    ];

    const support = [
        {
            voice: "API Access",
            tooltip: "Build powerful applications using LOVO’s human-like voices.",
            free: <TiTick size={16} />,
            basic: <TiTick size={16} />,
            pro: <TiTick size={16} />,
            proplus: <TiTick size={16} />,
        },
        {
            voice: "Priority Support",
            tooltip: "Get support tickets answered within 2 business days.",
            free: <RxCross2 size={16} />,
            basic: <RxCross2 size={16} />,
            pro: <TiTick size={16} />,
            proplus: <TiTick size={16} />,
        },
        {
            voice: "Help Center",
            tooltip:
                "Receive instant support from our knowledge base of tips and tricks for troubleshooting your Genny experience.",
            free: <TiTick size={16} />,
            basic: <TiTick size={16} />,
            pro: <TiTick size={16} />,
            proplus: <TiTick size={16} />,
        },
    ];

    return (
        <div className="scrollStyle">
            <p className="text-[24px] text-[#EFEFEF] mt-4 font-bold pl-4">Compare plans</p>
            {/* Ai Voice */}
            <div>
                <Table aria-label="Example static collection table">
                    <TableHeader className="border-b border-b-[#44444A]">
                        <TableColumn className="text-[14px] font-bold text-[#F5F6F7]">AI Voice</TableColumn>
                        <TableColumn className="text-[14px] font-bold text-[#F5F6F7]">Free</TableColumn>
                        <TableColumn className="text-[14px] font-bold text-[#F6AD55]">Basic</TableColumn>
                        <TableColumn className="text-[14px] font-bold text-[#428BEB]">Pro</TableColumn>
                        <TableColumn className="text-[14px] font-bold text-[#B794F4]">Pro +</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {aivoice.map((item, idx) => (
                            <TableRow key={idx} className="border-b border-b-[#44444A]">
                                <TableCell className="flex gap-x-2 items-center text-[14px] text-[#F5F6F7]">
                                    {item.voice}
                                    <Tooltip
                                        showArrow={true}
                                        content={item.tooltip}
                                        className="bg-black rounded-[10px] text-[10px] max-w-[200px]"
                                    >
                                        <Button>
                                            <AiOutlineQuestionCircle />
                                        </Button>
                                    </Tooltip>
                                </TableCell>
                                <TableCell className="text-[14px] text-[#F5F6F7]">{item.free}</TableCell>
                                <TableCell className="text-[14px] text-[#F5F6F7]">{item.basic}</TableCell>
                                <TableCell className="text-[14px] text-[#F5F6F7]">{item.pro}</TableCell>
                                <TableCell className="text-[14px] text-[#F5F6F7]">{item.proplus}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            {/* Editing */}
            <div>
                <Table aria-label="Example static collection table">
                    <TableHeader className="border-b border-b-[#44444A]">
                        <TableColumn className="text-[14px] font-bold text-[#F5F6F7]">Editing & Export</TableColumn>
                        <TableColumn className="text-[14px] font-bold text-[#F5F6F7]">Free</TableColumn>
                        <TableColumn className="text-[14px] font-bold text-[#F6AD55]">Basic</TableColumn>
                        <TableColumn className="text-[14px] font-bold text-[#428BEB]">Pro</TableColumn>
                        <TableColumn className="text-[14px] font-bold text-[#B794F4]">Pro +</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {editing.map((item, idx) => (
                            <TableRow key={idx} className="border-b border-b-[#44444A]">
                                <TableCell className="flex gap-x-2 items-center text-[14px] text-[#F5F6F7]">
                                    {item.voice}
                                    <Tooltip
                                        showArrow={true}
                                        content={item.tooltip}
                                        className="bg-black rounded-[10px] text-[10px] max-w-[200px]"
                                    >
                                        <Button>
                                            <AiOutlineQuestionCircle />
                                        </Button>
                                    </Tooltip>
                                </TableCell>
                                <TableCell className="text-[14px] text-[#F5F6F7]">{item.free}</TableCell>
                                <TableCell className="text-[14px] text-[#F5F6F7]">{item.basic}</TableCell>
                                <TableCell className="text-[14px] text-[#F5F6F7]">{item.pro}</TableCell>
                                <TableCell className="text-[14px] text-[#F5F6F7]">{item.proplus}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            {/* Ai Feature */}
            <div>
                <Table aria-label="Example static collection table">
                    <TableHeader className="border-b border-b-[#44444A]">
                        <TableColumn className="text-[14px] font-bold text-[#F5F6F7]">AI Features</TableColumn>
                        <TableColumn className="text-[14px] font-bold text-[#F5F6F7]">Free</TableColumn>
                        <TableColumn className="text-[14px] font-bold text-[#F6AD55]">Basic</TableColumn>
                        <TableColumn className="text-[14px] font-bold text-[#428BEB]">Pro</TableColumn>
                        <TableColumn className="text-[14px] font-bold text-[#B794F4]">Pro +</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {feature.map((item, idx) => (
                            <TableRow key={idx} className="border-b border-b-[#44444A]">
                                <TableCell className="flex gap-x-2 items-center text-[14px] text-[#F5F6F7]">
                                    {item.voice}
                                    <Tooltip
                                        showArrow={true}
                                        content={item.tooltip}
                                        className="bg-black rounded-[10px] text-[10px] max-w-[200px]"
                                    >
                                        <Button>
                                            <AiOutlineQuestionCircle />
                                        </Button>
                                    </Tooltip>
                                </TableCell>
                                <TableCell className="text-[14px] text-[#F5F6F7]">{item.free}</TableCell>
                                <TableCell className="text-[14px] text-[#F5F6F7]">{item.basic}</TableCell>
                                <TableCell className="text-[14px] text-[#F5F6F7]">{item.pro}</TableCell>
                                <TableCell className="text-[14px] text-[#F5F6F7]">{item.proplus}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            {/* Collaboration */}
            <div>
                <Table aria-label="Example static collection table">
                    <TableHeader className="border-b border-b-[#44444A]">
                        <TableColumn className="text-[14px] font-bold text-[#F5F6F7]">Collaboration</TableColumn>
                        <TableColumn className="text-[14px] font-bold text-[#F5F6F7]">Free</TableColumn>
                        <TableColumn className="text-[14px] font-bold text-[#F6AD55]">Basic</TableColumn>
                        <TableColumn className="text-[14px] font-bold text-[#428BEB]">Pro</TableColumn>
                        <TableColumn className="text-[14px] font-bold text-[#B794F4]">Pro +</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {collaboration.map((item, idx) => (
                            <TableRow key={idx} className="border-b border-b-[#44444A]">
                                <TableCell className="flex gap-x-2 items-center text-[14px] text-[#F5F6F7]">
                                    {item.voice}
                                    <Tooltip
                                        showArrow={true}
                                        content={item.tooltip}
                                        className="bg-black rounded-[10px] text-[10px] max-w-[200px]"
                                    >
                                        <Button>
                                            <AiOutlineQuestionCircle />
                                        </Button>
                                    </Tooltip>
                                </TableCell>
                                <TableCell className="text-[14px] text-[#F5F6F7]">{item.free}</TableCell>
                                <TableCell className="text-[14px] text-[#F5F6F7]">{item.basic}</TableCell>
                                <TableCell className="text-[14px] text-[#F5F6F7]">{item.pro}</TableCell>
                                <TableCell className="text-[14px] text-[#F5F6F7]">{item.proplus}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            {/* Support */}
            <div>
                <Table aria-label="Example static collection table">
                    <TableHeader className="border-b border-b-[#44444A]">
                        <TableColumn className="text-[14px] font-bold text-[#F5F6F7]">Support</TableColumn>
                        <TableColumn className="text-[14px] font-bold text-[#F5F6F7]">Free</TableColumn>
                        <TableColumn className="text-[14px] font-bold text-[#F6AD55]">Basic</TableColumn>
                        <TableColumn className="text-[14px] font-bold text-[#428BEB]">Pro</TableColumn>
                        <TableColumn className="text-[14px] font-bold text-[#B794F4]">Pro +</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {support.map((item, idx) => (
                            <TableRow key={idx} className="border-b border-b-[#44444A]">
                                <TableCell className="flex gap-x-2 items-center text-[14px] text-[#F5F6F7]">
                                    {item.voice}
                                    <Tooltip
                                        showArrow={true}
                                        content={item.tooltip}
                                        className="bg-black rounded-[10px] text-[10px] max-w-[200px]"
                                    >
                                        <Button>
                                            <AiOutlineQuestionCircle />
                                        </Button>
                                    </Tooltip>
                                </TableCell>
                                <TableCell className="text-[14px] text-[#F5F6F7]">{item.free}</TableCell>
                                <TableCell className="text-[14px] text-[#F5F6F7]">{item.basic}</TableCell>
                                <TableCell className="text-[14px] text-[#F5F6F7]">{item.pro}</TableCell>
                                <TableCell className="text-[14px] text-[#F5F6F7]">{item.proplus}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            {/* price plan */}
            <div>
                <Table hideHeader aria-label="Example static collection table">
                    <TableHeader className="border-b border-b-[#44444A]">
                        <TableColumn className="text-[14px] font-bold text-[#F5F6F7]">Support</TableColumn>
                        <TableColumn className="text-[14px] font-bold text-[#F5F6F7]">Free</TableColumn>
                        <TableColumn className="text-[14px] font-bold text-[#F6AD55]">Basic</TableColumn>
                        <TableColumn className="text-[14px] font-bold text-[#428BEB]">Pro</TableColumn>
                        <TableColumn className="text-[14px] font-bold text-[#B794F4]">Pro +</TableColumn>
                    </TableHeader>
                    <TableBody>
                        <TableRow className="">
                            <TableCell className="flex gap-x-2 items-center text-[14px] text-[#F5F6F7]"></TableCell>
                            <TableCell className="text-[14px] text-[#F5F6F7]">
                                <div className="p-2">
                                    <p className={`${"text-[#F5F6F7]"} text-[14px]`}>Free</p>
                                    <p className={`text-[24px] font-bold text-[#F5F6F7]`}>$0</p>
                                    <p className="text-[#8C8C96] text-[12px]">No credit card required</p>
                                    <p className="text-[#F5F6F7] text-[14px]">
                                        Fully experience the product before committing
                                    </p>
                                    <Button className="bg-[#2871DE] text-[14px] rounded-[10px] w-full py-2 mt-2">
                                        Change Plan
                                    </Button>
                                </div>
                            </TableCell>
                            <TableCell className="text-[14px] text-[#F5F6F7]">
                                <div className="p-2">
                                    <p className={`${"text-[#F6AD55]"} text-[14px]`}>Basic</p>
                                    <p className={`text-[24px] font-bold text-[#F5F6F7]`}>
                                        ${switchactive ? "29" : "36"}
                                    </p>
                                    <p className="text-[#8C8C96] text-[14px]">
                                        Billed US$ {switchactive ? "348" : "36"} monthly
                                    </p>
                                    <p className="text-[#F5F6F7] text-[14px]">Essential for creating awesome content</p>
                                    <Button className="bg-[#2871DE] text-[14px] rounded-[10px] w-full py-2 mt-2">
                                        Change Plan
                                    </Button>
                                </div>
                            </TableCell>
                            <TableCell className="text-[14px] text-[#F5F6F7]">
                                <div className="p-2">
                                    <p className={`${"text-[#428BEB]"} text-[14px]`}>Pro</p>
                                    <p className={`text-[24px] font-bold text-[#F5F6F7]`}>
                                        ${switchactive ? "39" : "79"}
                                    </p>
                                    <p className="text-[#8C8C96] text-[14px]">
                                        Billed US$ {switchactive ? "468" : "79"} monthly
                                    </p>
                                    <p className="text-[#F5F6F7] text-[14px]">
                                        All of Genny’s powerful features for professionals
                                    </p>

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
                                    <Button className="bg-[#2871DE] text-[14px] rounded-[10px] w-full py-2 mt-2">
                                        Change Plan
                                    </Button>
                                </div>
                            </TableCell>
                            <TableCell className="text-[14px] text-[#F5F6F7]">
                                <div className="p-2">
                                    <p className={`${"text-[#B794F4]"} text-[14px]`}>Pro +</p>
                                    <p className={`text-[24px] font-bold text-[#F5F6F7]`}>
                                        ${switchactive ? "75" : "149"}
                                    </p>
                                    <p className="text-[#8C8C96] text-[14px]">
                                        Billed US$ {switchactive ? "900" : "149"} monthly
                                    </p>
                                    <p className="text-[#F5F6F7] text-[14px]">
                                        Perfect for businesses with large content volume
                                    </p>

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
                                    <Button className="bg-[#2871DE] text-[14px] rounded-[10px] w-full py-2 mt-2">
                                        Change Plan
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
