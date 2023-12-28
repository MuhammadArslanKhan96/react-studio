/* eslint-disable react/no-unescaped-entities */
import { Button, Checkbox, Input } from "@nextui-org/react";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CiLock, CiMail } from "react-icons/ci";
import { auth } from "../constants/firebaseConfigs";
import { toast } from "react-toastify";
import { useAppContext } from "./EditBar/EditorContext";

export default function SignIn() {
    const { setUser } = useAppContext();
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });
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

    async function signInWithGoogle() {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const user = result.user;
            const data = { ...credential, ...user };
            const addUser = await fetch(`/api/auth/signin`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            }).then((r) => r.json());
            if (addUser.user.signInMethod === "email") {
                toast.error("Signed In email and password!");
                return;
            }
            setUser(addUser.user);

            toast.success("Signed In successfully");
        } catch (error) {
            toast.error(error?.response?.data?.message || error?.message);
        }
    }

    const handleChange = (e) => {
        setCredentials((pre) => ({
            ...pre,
            [e.target.name]: e.target.value,
        }));
    };

    async function signinEmailPassword() {
        try {
            if (
                !credentials.email
                    .toLowerCase()
                    .match(
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    )
            ) {
                toast.error("Please enter a valid email");
                return;
            }

            const result = await signInWithEmailAndPassword(auth, credentials.email, credentials.password);
            const user = result.user;
            const data = {
                ...user,
                password: credentials.password,
                signInMethod: "email",
            };
            const addUser = await fetch(`/api/auth/signin`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            }).then((r) => r.json());

            setUser(addUser.user);
            toast.success("Signed In successfully");
        } catch (error) {
            toast.error(error?.response?.data?.message || error?.message);
        }
    }

    return (
        <div className="flex h-screen bg-[#242427] relative">
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

            <div className="flex justify-center items-center w-2/5 max-lg:w-full ">
                <div className="min-w-[352px] max-sm:min-w-[290px] px-2">
                    <Image src={"/logo.svg"} alt="" width={111} height={40} className="max-lg:flex hidden" />
                    <p className="text-[#EFEFEF] text-[24px] font-semibold mb-[40px]">Sign in to Genny</p>
                    <Button
                        onClick={signInWithGoogle}
                        className="bg-[#FFFFFF] flex rounded-[5px] items-center text-[#242427] w-full justify-between px-4 py-2"
                    >
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
                            type="email"
                            onChange={handleChange}
                            name="email"
                            placeholder="you@example.com"
                            labelPlacement="outside"
                            startContent={
                                <CiMail
                                    color="#8C8C96"
                                    className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
                                />
                            }
                        />
                        <Input
                            onChange={handleChange}
                            name="password"
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
                    <Button
                        onClick={signinEmailPassword}
                        className="bg-[#FFFFFF] flex justify-center items-center text-[#242427] w-full px-4 py-2 rounded-[5px]"
                    >
                        Login In
                    </Button>
                    <div className="flex justify-between items-center mt-[16px] mb-[72px]">
                        <Checkbox defaultSelected>Remember me</Checkbox>
                        <Button className="flex items-center gap-x-2">
                            <CiLock color="#8C8C96" size={20} />
                            Forgot Password?
                        </Button>
                    </div>
                    <div className="flex justify-center">
                        <p className="text-[14px] text-[#B2B2B8]">
                            Don't have an account?{" "}
                            <Link href={"/signup"} className="text-[#2871DE]">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
                <Button className="absolute bottom-2 right-4 bg-[#44444A] p-2 rounded-[50px] shadow-xl">
                    <Image src={"/images/questionmark.svg"} alt="" width={32} height={32} />
                </Button>
            </div>
        </div>
    );
}
