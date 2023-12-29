import React, { useRef } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Avatar, Input } from "@nextui-org/react";
import { CiUser } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useAppContext } from "./EditorContext";
import { CiLock } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { CiCircleInfo } from "react-icons/ci";
import PasswordModal from "./PasswordModal";
import { storage } from "../../constants/firebaseConfigs";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";



export default function AccountModal({ isOpen, onOpenChange }) {

    const { user, setUser } = useAppContext();
    const [passwordModal, setPasswordModal] = React.useState(false);
    const [nameInput, setNameInput] = React.useState('');
    const inputref = useRef();


    const removePhoto = async () => {
        setUser((prevUser) => ({
            ...prevUser,
            photoURL: null
        }));

        await fetch(`/api/users/update-user?email=${user?.email}`, {
            method: "POST",
            body: JSON.stringify({
                photoURL: null
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
    };

    async function handleFileChange(e) {
        const file = e.target.files[0];
        const profileRef = ref(storage, `${name}/profile.${file.name.split(".")[1]}`);

        uploadBytes(profileRef, file).then(async (snapshot) => {
            const url = await getDownloadURL(snapshot.ref);
            setUser((prevUser) => ({
                ...prevUser,
                photoURL: url
            }));

            await fetch(`/api/users/update-user?email=${user?.email}`, {
                method: "POST",
                body: JSON.stringify({
                    photoURL: url
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
        });
    }

    const handleNameChange = async () => {

        if (!nameInput.length) {
            return;
        }

        setUser((prevUser) => ({
            ...prevUser,
            displayName: nameInput
        }));

        await fetch(`/api/users/update-user?email=${user?.email}`, {
            method: "POST",
            body: JSON.stringify({
                displayName: nameInput
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
    };

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
                                My Account
                            </ModalHeader>
                            <div className="bg-[#44444A] h-[1px]"></div>
                            <ModalBody>
                                <div className="flex text-[16px] gap-[10px] mt-5"><CiUser size={20} />Profile</div>

                                <div className="bg-[#2D2D30] p-4 border rounded-[10px] border-[#44444A]">
                                    <div className="flex gap-x-2 items-center">
                                        <div>
                                            <Avatar src={user?.photoURL} />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-x-2">
                                                <Button
                                                    onClick={() => inputref.current.click()}
                                                    className="text-white text-[14px] border rounded-[5px] px-4 py-1"
                                                >
                                                    Upload Photo
                                                </Button>
                                                {user?.photoURL && (
                                                    <RiDeleteBin5Line onClick={removePhoto} className="text-[#C53030] cursor-pointer" />
                                                )}
                                            </div>
                                            <Input onChange={handleFileChange} ref={inputref} type="file" className="hidden" />
                                            <p className="text-[#F5F6F7] text-[12px] mt-2">
                                                You can upload jpg, png files. Max size of 4MB
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-[#2D2D30] p-4 border rounded-[10px] border-[#44444A]">
                                    <div className="flex gap-[5px]">
                                        <input onChange={e => setNameInput(e.currentTarget.value)} defaultValue={user?.displayName} className="text-[#fff] outline-0 px-2 bg-[#2D2D30] border-[#606069] rounded-[0.25rem] py-[3px] border w-full" />
                                        <button onClick={handleNameChange} className="border border-[#606069] px-2 rounded-[0.25rem]">Update</button>
                                    </div>
                                </div>

                                <div className="bg-[#44444A] h-[1px]"></div>

                                <div>
                                    <div className="flex text-[16px] items-center gap-[10px]"><MdOutlineEmail size={20} /> Email</div>
                                    <div className="pl-[28px]">{user?.email}</div>
                                </div>
                                <div className="bg-[#44444A] h-[1px]"></div>


                                <div>
                                    <div className="flex text-[16px] items-center gap-[10px]"><CiLock size={20} /> Password</div>
                                    <button onClick={e => setPasswordModal(true)} className="border border-[#606069] px-[16px] rounded-[0.25rem] py-1 mt-3 ml-[28px]">{user?.password ? 'Change Password' : 'Create Password'}</button>
                                </div>

                                <div className="bg-[#44444A] h-[1px]"></div>

                                <div className="text-[12px] flex items-center gap-[5px] mt-2"><CiCircleInfo size={15} /> To delete your account, remove team members and leave all teams.</div>
                                <div className="pb-[10px]">
                                    <button className="text-[#E53E3E] text-[14px]">Delete Account</button>
                                    <div className="text-[14px]">Deleting account requires password.</div>
                                </div>

                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
            <PasswordModal isOpen={passwordModal} onOpenChange={setPasswordModal} />
        </div>
    );
}
