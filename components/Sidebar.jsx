import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Sidebar({ children, isOpen, setIsOpen }) {
    const router = useRouter();

    if (router.pathname === "/signin" || router.pathname === "/signup") return;

    return (
        <main
            className={
                " flex max-xl:fixed z-10 bg-[#2D2D30] bg-opacity-25 inset-0 ease-in-out " +
                (isOpen
                    ? " max-xl:transition-opacity max-xl:opacity-100 max-xl:duration-500 max-xl:left-0 "
                    : " max-xl:transition-all max-xl:delay-500 max-xl:opacity-0 max-xl:w-0")
            }
        >
            <section
                className={
                    " w-screen max-w-[264px] xl:!left-0 left-0 max-xl:absolute bg-[#2D2D30] h-full shadow-xl delay-400 duration-500 ease-in-out transition-all" +
                    (isOpen ? " max-xl:left-0 " : " max-xl:w-0")
                }
            >
                <article className="scrollStyle relative w-screen max-w-[264px] pb-10 flex flex-col space-y-0 overflow-y-scroll h-full">
                    <header className="p-2 font-bold text-lg">
                        <Dropdown>
                            <DropdownTrigger>
                                <Button className="flex items-center justify-between p-[16px] rounded-[10px] bg-transparent hover:bg-[#353538] w-full">
                                    <div className="flex items-center gap-x-2">
                                        <div>
                                            {/* <Image src={"/logo.svg"} alt="" width={50} height={10} /> */}
                                            <p className="bg-[#755EE5] rounded-[50px] px-[18px] py-[10px] text-[12px] text-black font-bold ">
                                                V
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-start">
                                            <p className="text-[12px] leading-3">Free Plan</p>
                                            <p>Vival Team</p>
                                        </div>
                                    </div>
                                    <FaChevronDown />
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Dynamic Actions">
                                <DropdownItem>
                                    <div className="flex items-center bg-[#182C5C] rounded-[10px] gap-x-2 px-3 py-4 w-full">
                                        <div>
                                            {/* <Image src={"/logo.svg"} alt="" width={50} height={10} /> */}
                                            <p className="bg-[#755EE5] rounded-[50px] px-[18px] py-[10px] text-[12px] text-black font-bold ">
                                                V
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-[12px]">Free Plan</p>
                                            <p>Vival Team</p>
                                        </div>
                                    </div>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </header>
                    {children}
                </article>
            </section>
            {isOpen ? (
                <section
                    className=" xl:w-0 w-screen h-full cursor-pointer"
                    onClick={() => {
                        setIsOpen(false);
                    }}
                ></section>
            ) : null}
        </main>
    );
}