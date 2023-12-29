import { Avatar, Button, Input } from "@nextui-org/react";
import React, { useRef, useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import PaymentMethod from "./PaymentMethod";
import { useAppContext } from "./EditBar/EditorContext";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../constants/firebaseConfigs";

export default function InfoComp() {
    const inputref = useRef();
    const { user, setUser } = useAppContext();
    const [name, setName] = useState(user?.title || "");

    const handlePlanChange = async () => {
        setUser((prevUser) => ({
            ...prevUser,
            team: {
                ...(prevUser.team || {}),
                title: name
            }
        }));

        await fetch(`/api/users/update-user?email=${user?.email}`, {
            method: "POST",
            body: JSON.stringify({
                team: {
                    ...(user.team || {}),
                    title: name
                }
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
    };

    const removePhoto = async () => {
        setUser((prevUser) => ({
            ...prevUser,
            team: {
                ...(prevUser.team || {}),
                photoURL: null
            }
        }));

        await fetch(`/api/users/update-user?email=${user?.email}`, {
            method: "POST",
            body: JSON.stringify({
                team: {
                    ...(user.team || {}),
                    photoURL: null
                }
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
    };

    async function handleFileChange(e) {
        const file = e.target.files[0];
        const profileRef = ref(storage, `${name}/team-profile.${file.name.split('.')[1]}`);

        uploadBytes(profileRef, file).then(async (snapshot) => {
            const url = await getDownloadURL(snapshot.ref);
            setUser((prevUser) => ({
                ...prevUser,
                team: {
                    ...(prevUser.team || {}),
                    photoURL: url
                }
            }));

            await fetch(`/api/users/update-user?email=${user?.email}`, {
                method: "POST",
                body: JSON.stringify({
                    team: {
                        ...(user.team || {}),
                        photoURL: url
                    }
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
        });
    }

    return (
        <>
            <div className="flex flex-col gap-4 border-b border-b-[#44444A] pb-6">
                <div>
                    <p className="tetx-[20px] text-[#EFEFEF] font-bold">About Team</p>
                    <p className="text-[#8C8C96]">Manage your team logo & name</p>
                </div>
                <div>
                    <p className="text-[#EFEFEF] font-semibold">Logo</p>
                    <div className="flex gap-x-2 items-center">
                        <div>
                            <Avatar src={user?.team?.photoURL} />
                        </div>
                        <div>
                            <div className="flex items-center gap-x-2">
                                <Button
                                    onClick={() => inputref.current.click()}
                                    className="text-white text-[14px] border rounded-[5px] px-4 py-1"
                                >
                                    Upload Photo
                                </Button>
                                {user?.team?.photoURL && (
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
                <div className="flex flex-col gap-2">
                    <p>Name</p>
                    <div className="flex gap-x-2">
                        <Input
                            placeholder="Enter name"
                            defaultValue={user?.team?.title}
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            className="border rounded-[10px]"
                        />
                        <Button className="text-white border px-4 rounded-[10px]" onClick={handlePlanChange}>
                            Update
                        </Button>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <PaymentMethod />
            </div>
        </>
    );
}
