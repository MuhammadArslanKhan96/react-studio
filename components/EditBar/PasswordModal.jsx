import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";
import { MdLockOutline } from "react-icons/md";
import { toast } from "react-toastify";
import { useAppContext } from "./EditorContext";


export default function PasswordModal({ isOpen, onOpenChange }) {

    const [credentials, setCredentials] = useState({
        password: "",
        confirmpassword: "",
    });

    const { user, setUser } = useAppContext();

    const handleChange = (e) => {
        setCredentials((pre) => ({
            ...pre,
            [e.target.name]: e.target.value,
        }));
    };

    const handleChangePassword = async () => {

        var minNumberofChars = 6;
        var regularExpression = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if (credentials.password.length < minNumberofChars) {
            toast.error("Password should be between 6 to 16 characters");
            return;
        }
        if (!regularExpression.test(credentials.password)) {
            toast.error("Please enter a valid password");
            return;
        }

        if (credentials.password !== credentials.confirmpassword) {
            toast.error("Password and confirm password does not match");
            return;
        }

        await fetch(`/api/users/update-user?email=${user?.email}`, {
            method: "POST",
            body: JSON.stringify({
                password: credentials.password
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        setUser((prevUser) => ({
            ...prevUser,
            password: credentials.password
        }));

        toast.success("Password has been changed")
        onOpenChange(false);
        setCredentials({ password: "", confirmpassword: "" })
    }


    return (
        <div>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                backdrop="opaque"
                classNames={{
                    backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
                }}
            >
                <ModalContent className="bg-[#242427] border border-[#44444A] rounded-[10px] min-w-[463px]">
                    {(onClose) => (


                        <>
                            <ModalHeader className="flex flex-col gap-1 text-[16px] text-[#EFEFEF]">
                                Create Password
                            </ModalHeader>
                            <ModalBody>

                                <div className="flex items-center gap-[10px] h-[40px] bg-[#2D2D30] border border-[#606069] rounded-[0.25rem] px-2">
                                    <MdLockOutline size={18} color="#999" />
                                    <input name="password" value={credentials.password} placeholder="Password" onChange={handleChange} className="text-[#fff] bg-[#2D2D30] outline-0 w-full" />
                                </div>

                                <div className="text-[14px]">
                                    <div>Your password must contain:</div>
                                    <ul className="pl-[10px]">
                                        <li>
                                            • English, number and 1 special character (!@#$%^&amp;*)
                                        </li>
                                        <li>• At least 8 characters</li>
                                        <li>• No blank space</li>
                                    </ul>

                                </div>

                                <div className="flex items-center gap-[10px] h-[40px] bg-[#2D2D30] border border-[#606069] rounded-[0.25rem] px-2">
                                    <MdLockOutline size={18} color="#999" />
                                    <input name="confirmpassword" value={credentials.confirmpassword} onChange={handleChange} placeholder="Confirm Password" className="text-[#fff] bg-[#2D2D30] outline-0 w-full" />
                                </div>

                                <div>
                                    <button onClick={handleChangePassword} className="bg-white text-black w-full py-2 my-2 rounded-[0.25rem]">
                                        {user?.password?.length > 0 ? 'Change Password' : 'Create Password'}</button>
                                </div>


                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}
