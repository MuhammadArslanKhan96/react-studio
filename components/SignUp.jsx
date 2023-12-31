/* eslint-disable react/no-unescaped-entities */
import { Button, Checkbox, Input } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiLock, CiMail } from "react-icons/ci";

export default function SignUp() {
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
    return (
        <div className="flex h-screen bg-[#242427] relative ">
            <div className="absolute top-8 left-8 max-lg:hidden flex">
                <Image src={"/logo.svg"} alt="" width={111} height={40} />
            </div>
            <div className="w-3/5 max-lg:hidden flex justify-center items-center p-4 bg-[url('/images/signbg.png')] bg-cover">
                <div>
                    <div>
                        <p className="text-[F5F6F7] text-[24px] text-center flex justify-center">
                            Join over 1,000,000 professionals,
                        </p>
                        <p className="text-[F5F6F7] text-[24px] text-center flex justify-center">
                            agencies, brands and content creators.
                        </p>
                    </div>
                    <div className="flex justify-between gap-4 mt-4">
                        {image.map((item, idx) => (
                            <div key={idx}>
                                <Image src={item.img} alt="" width={90} height={100} className="w-[90px] h-full" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex justify-center max-2xl:items-start items-center w-2/5 max-lg:w-full overflow-y-scroll">
                <div className="min-w-[352px] max-w-[360px] max-sm:min-w-[290px] px-2 py-4">
                    <Image src={"/logo.svg"} alt="" width={111} height={40} className="max-lg:flex hidden" />
                    <p className="text-[#EFEFEF] text-[24px] font-semibold mb-[40px]">Sign up for Free</p>
                    <Button className="bg-[#FFFFFF] flex rounded-[5px] items-center text-[#242427] w-full justify-between px-4 py-2">
                        <Image src={"/images/google.svg"} alt="" width={20} height={20} />
                        Continue with Google
                        <span></span>
                    </Button>
                    <div className="flex w-full items-center gap-x-1 mt-4">
                        <div className="h-[1px] bg-[#B2B2B8] w-full"></div>
                        <p className="text-[#B2B2B8]">or</p>
                        <div className="h-[1px] bg-[#B2B2B8] w-full"></div>
                    </div>
                    <div className="flex flex-col w-full mt-4 mb-4 gap-4">
                        <Input
                            className="bg-[#2D2D30] border border-[#505057] rounded-[5px] py-2"
                            type="text"
                            placeholder="Name"
                            labelPlacement="outside"
                            startContent={<Image src={"/images/user.svg"} alt="" width={20} height={20} />}
                        />
                        <Input
                            className="bg-[#2D2D30] border border-[#505057] rounded-[5px] py-2"
                            type="email"
                            placeholder="Email"
                            labelPlacement="outside"
                            startContent={
                                <CiMail
                                    color="#8C8C96"
                                    className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
                                />
                            }
                        />
                        <Input
                            className="bg-[#2D2D30] border border-[#505057] rounded-[5px] py-2"
                            placeholder="Password"
                            labelPlacement="outside"
                            startContent={
                                <CiLock
                                    color="#8C8C96"
                                    className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
                                />
                            }
                        />
                    </div>

                    <div className="flex flex-col mb-2">
                        <p>Your password must contain:</p>
                        <li>English, number and 1 special character (!@#$%^&*)</li>
                        <li>At least 8 characters</li>
                        <li>No blank space</li>
                    </div>

                    <Input
                        className="bg-[#2D2D30] border border-[#505057] rounded-[5px] py-2"
                        placeholder="Confirm Password"
                        labelPlacement="outside"
                        startContent={
                            <CiLock
                                color="#8C8C96"
                                className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
                            />
                        }
                    />
                    <Button className="bg-[#FFFFFF] flex justify-center items-center text-[#242427] mt-2 w-full px-4 py-2 rounded-[5px]">
                        Sign up
                    </Button>

                    <div className="flex justify-center mt-2">
                        <p className="text-[14px] text-[#B2B2B8]">
                            By signing up, I agree to the Genny{" "}
                            <Link href={"/"} className="text-[#2871DE]">
                                Privacy Policy
                            </Link>{" "}
                            and{" "}
                            <Link href={"/"} className="text-[#2871DE]">
                                Terms of Service.
                            </Link>
                        </p>
                    </div>

                    <div className="flex justify-center mt-8">
                        <p className="text-[14px] text-[#B2B2B8]">
                            I already have an account{" "}
                            <Link href={"/signin"} className="text-[#2871DE]">
                                Sign in
                            </Link>
                        </p>
                    </div>

                    <Button className="absolute bottom-2 right-4 bg-[#44444A] p-2 rounded-[50px] shadow-xl">
                        <Image src={"/images/questionmark.svg"} alt="" width={32} height={32} />
                    </Button>
                </div>
            </div>
        </div>
    );
}
