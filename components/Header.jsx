import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";
import { RiShareForward2Fill } from "react-icons/ri";

import {
    Avatar,
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Navbar,
    NavbarContent,
    Tooltip,
    useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Context } from "./Context";
import EditInput from "./EditInput";
import InviteMembers from "./InviteMembers";
import { useAppContext } from "./EditBar/EditorContext";
import { signOut } from "firebase/auth";
import { auth } from "../constants/firebaseConfigs";
import { toast } from "react-toastify";
import APIKey from "./APIKey";
import AccountModal from "./EditBar/AccountModel";
import ExportModal from "./ExportModal";

export default function Header() {
    const router = useRouter();
    const { setSideModal } = useContext(Context);
    const {
        setUser,
        user,
        mockData,
        mockEffect,
        setSelectedProject,
        selectedProject,
        setProjects,
        setProgressModal,
        progressModal,
        setText
    } = useAppContext();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [modal, setModal] = useState(false);
    const [accountModal, setAccountModal] = React.useState(false);
    const [active, setActive] = React.useState(false);
    const [saving, setSaving] = React.useState(false);
    const [saved, setSaved] = React.useState(false);

    const logout = () => {
        signOut(auth).then(() => {
            localStorage.removeItem("email");
            setUser(undefined);
        });
    };

    const saveProject = async () => {
        setSaving(true);
        setSelectedProject({
            ...selectedProject,
            mockData,
            mockEffect,
            lastModified: new Date().toDateString(),
        });
        setProjects((pre) => [
            ...pre.filter((a) => a.id !== selectedProject?.id),
            {
                ...selectedProject,
                mockData,
                mockEffect,
                lastModified: new Date().toDateString(),
            },
        ]);
        await fetch(`/api/projects/update-project?id=${selectedProject?.id}`, {
            method: "PUT",
            body: JSON.stringify({
                ...selectedProject,
                mockData,
                mockEffect,
                lastModified: new Date().toDateString(),
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        setSaving(false);
        setSaved(true);

        setTimeout(() => setSaved(false), 5000);
    };

    useEffect(() => {
        if (router.pathname.includes("/project")) {
            setInterval(() => {
                saveProject();
            }, 1000 * 60 * 10);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (router.pathname === "/signin" || router.pathname === "/signup") return;

    return (
        <div className="flex justify-between items-center px-[16px] py-[8px] bg-[#242427] border-b border-b-[#44444A]">
            <div className="flex gap-x-2 items-center">
                <div
                    className="cursor-pointer hidden max-xl:flex"
                    onClick={() => {
                        setSideModal(true);
                    }}
                >
                    <GiHamburgerMenu size={20} />
                </div>
                <Button
                    onClick={() => {
                        if (router.pathname.includes("/project")) {
                            setProgressModal({
                                ...progressModal,
                                progress: 0,
                                text: "Saving project...",
                            });
                            saveProject();

                            let count = 0;
                            const interval = setInterval(() => {
                                count += 5;
                                if (count === 100) {
                                    setProgressModal({
                                        text: "Saving project...",
                                        progress: 100,
                                    });
                                } else if (count > 100) {
                                    clearInterval(interval);
                                    setProgressModal("");
                            setText("");
                                    router.push("/");
                                } else {
                                    setProgressModal({
                                        text: "Saving project...",
                                        progress: count,
                                    });
                                }
                            });
                        } else {
                            router.push("/");
                        }
                    }}
                >
                    <Image src={"/logo.svg"} alt="" width={111} height={90} />
                </Button>
                {router.pathname.includes("/project") && (
                    <div className="flex">
                        <EditInput />
                    </div>
                )}
            </div>
            <div className="flex items-center gap-x-2">
                {router.pathname.includes("/project") && (
                    <>
                        <Tooltip
                            showArrow={true}
                            content="Generation credits deducted based on voiceover length. No deduction for regeneration if text or speaker remains changed."
                            className="bg-black rounded-[10px] text-[10px] max-w-[200px]"
                        >
                            <Button>
                                <AiOutlineQuestionCircle size={16} />
                            </Button>
                        </Tooltip>
                        <Tooltip
                            showArrow={true}
                            content="used time: 5m 0s"
                            className="bg-black rounded-[10px] text-[10px] max-w-[200px]"
                        >
                            <Button>
                                <div className="min-w-[80px]">
                                    <div className="flex justify-between ">
                                        <span className="font-medium text-blue-700 dark:text-white text-[12px]">
                                            5m 0s
                                        </span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: "45%" }}></div>
                                    </div>
                                </div>
                            </Button>
                        </Tooltip>
                        <Button
                            onClick={(e) => router.push("/pricing")}
                            className="bg-[linear-gradient(90deg,rgb(46,148,255)0%,rgb(64,140,255)32.81%,rgb(61,181,255)71.35%,rgb(46,209,234)100%)] bg-clip-text text-transparent font-semibold text-[14px]"
                        >
                            UPGRADE
                        </Button>
                        <Button
                            onClick={saveProject}
                            className={`border-2 rounded-lg px-4 py-1 min-w-40 text-[14px] ${saving || saved ? "bg-transparent text-blue-600 border-blue-600" : "text-white"
                                }`}
                        >
                            {saving ? "Saving" : saved ? "Saved !" : "Save"}
                        </Button>
                        <Button
                            className="border lg:flex hidden rounded-[10px] px-2 py-1 gap-x-2 items-center bg-[#EBECF0] text-black text-[14px]"
                            onClick={() => {
                                onOpen();
                                setModal("export");
                            }}
                        >
                            Export
                            <RiShareForward2Fill />
                        </Button>
                    </>
                )}
                <Button
                    className="w-fit lg:flex hidden border rounded-[5px] h-fit gap-x-2 px-4 py-1 text-white "
                    onPress={() => {
                        setModal("invite");
                        onOpen();
                    }}
                >
                    <Image src={"/images/invite.svg"} alt="" width={20} height={20} />
                    Invite
                </Button>
                {modal === "export" && <ExportModal isOpen={isOpen} onOpenChange={onOpenChange} />}
                {modal === "invite" && <InviteMembers isOpen={isOpen} onOpenChange={onOpenChange} />}
                {modal === "api" && <APIKey isOpen={isOpen} onOpenChange={onOpenChange} />}

                <div className="relative">
                    <Navbar className="w-fit">
                        <NavbarContent as="div" justify="end">
                            <Dropdown placement="bottom-end">
                                <DropdownTrigger>
                                    <Avatar
                                        isBordered
                                        as="button"
                                        className="transition-transform"
                                        color="secondary"
                                        name="Jason Hughes"
                                        size="sm"
                                        src={user?.photoURL || "https://i.pravatar.cc/150?u=a042581f4e29026704d"}
                                    />
                                </DropdownTrigger>
                                <DropdownMenu
                                    aria-label="Profile Actions"
                                    variant="flat"
                                    className="bg-[#242427] pl-[12px] pr-[12px] pt-[12px] pb-[12px] mt-[15px]  border border-[#44444A]	 rounded-md"
                                >
                                    <DropdownItem key="profile" className="h-14 gap-2">
                                        <div className="flex items-center">
                                            <div>
                                                {/* <Image src={"/images/setting.svg"} alt="" width={20} height={20} /> */}
                                                <Avatar
                                                    src={
                                                        user?.photoURL ||
                                                        "https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                                    }
                                                />
                                            </div>

                                            <div>
                                                <p className="font-semibold">Signed in as {user?.displayName}</p>
                                                <p className="font-semibold text-[12px] text-[#b6b8bf]">
                                                    {user?.email || "zoey@example.com"}
                                                </p>
                                            </div>
                                        </div>
                                    </DropdownItem>

                                    <DropdownItem key="my_account" onClick={(e) => setAccountModal(true)}>
                                        <div className="flex items-center gap-2">
                                            <Image
                                                src={"/images/mayaccount.svg"}
                                                alt=""
                                                width={20}
                                                height={20}
                                                className="text-[#fff]"
                                            />
                                            My Account
                                        </div>
                                    </DropdownItem>

                                    <DropdownItem key="settings" onClick={() => router.push("/settings/info")}>
                                        <div className="flex items-center gap-2">
                                            <Image src={"/images/setting.svg"} alt="" width={20} height={20} />
                                            Settings
                                        </div>
                                    </DropdownItem>

                                    <DropdownItem key="pricing" onClick={() => router.push("/pricing")}>
                                        <div className="flex items-center gap-2">
                                            <Image src={"/images/pricing.svg"} alt="" width={20} height={20} />
                                            Pricing
                                        </div>
                                    </DropdownItem>
                                    <DropdownItem key="invite_member">
                                        <div className="flex items-center gap-2" onClick={onOpen}>
                                            <Image src={"/images/invite.svg"} alt="" width={20} height={20} />
                                            Invite Member
                                        </div>
                                    </DropdownItem>

                                    <DropdownItem key="view_api_key">
                                        <div
                                            onClick={() => {
                                                onOpen();
                                                setModal("api");
                                            }}
                                            className="flex items-center gap-2"
                                        >
                                            <IoKeyOutline />
                                            View API key
                                        </div>
                                    </DropdownItem>

                                    <DropdownItem as="button" onMouseEnter={() => setActive(true)} key="help_&_support">
                                        <div className="flex items-center gap-2">
                                            <Image src={"/images/questionmark.svg"} alt="" width={20} height={20} />
                                            Help & Support
                                        </div>
                                    </DropdownItem>

                                    <DropdownItem key="join_discord">
                                        <div className="flex items-center gap-2">
                                            <FaDiscord />
                                            Join Discord
                                        </div>
                                    </DropdownItem>
                                    <DropdownItem onClick={logout} key="logout" color="danger">
                                        <div className="flex items-center gap-2">
                                            <MdOutlineLogout />
                                            Log Out
                                        </div>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </NavbarContent>
                    </Navbar>
                    <div
                        onMouseEnter={() => setActive(true)}
                        onMouseLeave={() => setActive(false)}
                        className={` w-fit z-50 absolute -left-[24.8rem] top-[20rem] ${active ? "" : "hidden"} `}
                    >
                        <div
                            onClick={() => setActive(false)}
                            className="bg-[#242427] flex flex-col gap-3 pl-[12px] pr-[12px] pt-[12px] pb-[12px] mt-[15px]  border border-[#44444A]	 rounded-md"
                        >
                            <div key="profile" className="gap-2">
                                <p className="font-semibold text-[12px] text-[#b6b8bf]">
                                    {user?.email || "zoey@example.com"}
                                </p>
                            </div>

                            <div key="my_account" onClick={(e) => setAccountModal(true)}>
                                <div className="flex items-center gap-2 cursor-pointer hover:bg-white/20 px-2 py-1 rounded-lg">
                                    Tutorials
                                </div>
                            </div>

                            <div key="settings" onClick={() => router.push("/settings/info")}>
                                <div className="flex items-center gap-2 cursor-pointer hover:bg-white/20 px-2 py-1 rounded-lg">
                                    FAQ
                                </div>
                            </div>

                            <div key="pricing" onClick={() => router.push("/pricing")}>
                                <div className="flex items-center gap-2 cursor-pointer hover:bg-white/20 px-2 py-1 rounded-lg">
                                    Blog
                                </div>
                            </div>
                            <div key="invite_member">
                                <div
                                    className="flex items-center gap-2 cursor-pointer hover:bg-white/20 px-2 py-1 rounded-lg"
                                    onClick={onOpen}
                                >
                                    Send feedback
                                </div>
                            </div>

                            <div onClick={() => setActive(!active)} key="help_&_support">
                                <div className="flex items-center gap-2 cursor-pointer hover:bg-white/20 px-2 py-1 rounded-lg">
                                    Terms Of Service
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <AccountModal isOpen={accountModal} onOpenChange={setAccountModal} />
            </div>
        </div>
    );
}
