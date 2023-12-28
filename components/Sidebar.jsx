import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Avatar } from "@nextui-org/react";
import { useRouter } from "next/router";
import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { useAppContext } from "./EditBar/EditorContext";

export default function Sidebar({ children, open, setOpen }) {
    const router = useRouter();
    const { user } = useAppContext();

    if (router.pathname === "/signin" || router.pathname === "/signup" || router.pathname.includes("/project")) return;

    return (
        <main
            className={
                `flex max-xl:fixed z-10 bg-[#2D2D30] inset-0 ease-in-out h-screen sticky top-0` +
                (open
                    ? " max-xl:transition-opacity max-xl:duration-500 max-xl:left-0 "
                    : " max-xl:transition-all max-xl:delay-500 max-xl:w-0")
            }
        >
            <section
                className={
                    " w-screen max-w-[264px] xl:!left-0 left-0 max-xl:absolute h-full shadow-xl delay-400 duration-500 ease-in-out transition-all" +
                    (open ? " max-xl:left-0" : " max-xl:w-0")
                }
            >
                <article className="scrollStyle relative w-screen max-w-[264px] pb-10 flex flex-col space-y-0 overflow-y-scroll h-full bg-[#2D2D30]">
                    <header className="p-2 font-bold text-lg">
                        <Dropdown className="absolute -left-[8.5rem] min-w-[17rem]">
                            <DropdownTrigger>
                                <Button className="flex items-center justify-between p-[16px] rounded-[10px] bg-transparent hover:bg-[#353538] w-full ">
                                    <div className="flex items-center gap-x-2">
                                        <div>
                                            <Avatar src={user?.photoURL} />
                                            {/* <p className="bg-[#755EE5] rounded-[50px] px-[18px] py-[10px] text-[12px] text-black font-bold ">
                                                V
                                            </p> */}
                                        </div>
                                        <div className="flex flex-col items-start">
                                            <p className="text-[12px] leading-3">{user?.plan || "Free"} Plan</p>
                                            <p>{user?.displayName || "Vivald"} Team</p>
                                        </div>
                                    </div>
                                    <FaChevronDown />
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Dynamic Actions">
                                <DropdownItem>
                                    <div className="flex items-center bg-[#182C5C] rounded-[10px] gap-x-2 px-3 py-4 w-full">
                                        <div>
                                            <Avatar src={user?.photoURL} />
                                            {/* <p className="bg-[#755EE5] rounded-[50px] px-[18px] py-[10px] text-[12px] text-black font-bold ">
                                                V
                                            </p> */}
                                        </div>
                                        <div>
                                            <p className="text-[12px]">{user?.plan || "Free"} Plan</p>
                                            <p>{user?.displayName || "Vivald"} Team</p>
                                        </div>
                                    </div>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </header>
                    {children}
                </article>
            </section>
            {open ? (
                <section
                    className=" xl:w-0 w-screen !h-full cursor-pointer"
                    onClick={() => {
                        setOpen(false);
                    }}
                ></section>
            ) : null}
        </main>
    );
}
