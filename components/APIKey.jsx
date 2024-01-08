/* eslint-disable react/no-unescaped-entities */
import React, { useRef } from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Input,
} from "@nextui-org/react";
import Link from "next/link";
import { FaRegCircleQuestion, FaPlus } from "react-icons/fa6";
import { CiMenuKebab } from "react-icons/ci";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";
import CreateApiModal from "./EditBar/CreateApiModel";
import { toast } from "react-toastify";

export default function APIKey({ isOpen, onOpenChange }) {
    const [scrollBehavior, setScrollBehavior] = React.useState("inside");
    const [childModelIsOpen, setChildModelOpen] = React.useState(false);

    const [apiKeys, setApiKeys] = React.useState([]);
    const [passwordVisibility, setPasswordVisibility] = React.useState({});

    const togglePasswordVisibility = (index) => {
        setPasswordVisibility((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const handleCopyButton = (key) => {
        navigator.clipboard.writeText(key).then(
            function () {},
            function (err) {
                console.error("Could not copy text: ", err);
            }
        );
        toast.success("Copy successfully");
    };

    return (
        <div>
            <Modal
                isOpen={isOpen}
                backdrop="opaque"
                onOpenChange={onOpenChange}
                className="border border-[#44444A] rounded-[0.25rem] bg-[#242427] min-w-[871px] h-screen"
                classNames={{
                    backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
                }}
                scrollBehavior={scrollBehavior}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-xl">API Keys</ModalHeader>
                            <div className="bg-[#44444A] h-[1px]"></div>
                            <ModalBody>
                                <p className="text-sm">
                                    Keep your API key confidential and avoid disclosing it in the browser or any
                                    client-side code. To ensure the security of your account, LOVO reserves the right to
                                    automatically change any API key that has been publicly exposed.
                                </p>
                                <p className="text-sm">
                                    You can have a maximum of 4 active API keys. If you already have 4 active API keys,
                                    you'll need to delete one in order to create a new key.
                                </p>
                                <Link href={"/"} className="text-[#2871DE] text-sm underline">
                                    Check API documentation here
                                </Link>
                                <div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-base text-[#EFEFEF]">API Key Management</p>
                                        <Button
                                            className="flex bg-[#2871DE] px-4 py-2 gap-2 rounded-lg"
                                            onClick={(e) => {
                                                setChildModelOpen(true);
                                            }}
                                        >
                                            <FaPlus />
                                            Create new API key
                                        </Button>
                                    </div>
                                    <div className="mt-4">
                                        <Table
                                            aria-label="Example static collection table"
                                            className="border border-[#44444A] rounded-lg bg-[#242427]"
                                        >
                                            <TableHeader className="border-b border-b-[#44444A]">
                                                <TableColumn className="text-[#B6B8BF] text-sm">NAME</TableColumn>
                                                <TableColumn className="text-[#B6B8BF] text-sm">API Key</TableColumn>
                                                <TableColumn className="text-[#B6B8BF] text-sm">Created</TableColumn>
                                                <TableColumn className="text-[#B6B8BF] text-sm">Status</TableColumn>
                                                <TableColumn className="text-[#B6B8BF] text-sm"></TableColumn>
                                            </TableHeader>

                                            <TableBody className="p-0 m-0">
                                                {apiKeys.map((data, index) => (
                                                    <TableRow key={index}>
                                                        <TableCell className="text-xs">
                                                            <Input value={data?.name} />
                                                        </TableCell>
                                                        <TableCell className="text-xs">
                                                            <div className="flex gap-3 select-none">
                                                                <input
                                                                    className="select-none bg-transparent border-0 outline-0"
                                                                    type={
                                                                        passwordVisibility[index] ? "text" : "password"
                                                                    }
                                                                    value={data?.key}
                                                                    readOnly
                                                                />
                                                                {passwordVisibility[index] ? (
                                                                    <FaEyeSlash
                                                                        onClick={() => togglePasswordVisibility(index)}
                                                                    />
                                                                ) : (
                                                                    <FaRegEye
                                                                        onClick={() => togglePasswordVisibility(index)}
                                                                    />
                                                                )}
                                                                <IoCopyOutline
                                                                    onClick={() => handleCopyButton(data?.key)}
                                                                />
                                                            </div>
                                                        </TableCell>
                                                        <TableCell className="text-xs">Dec 29, 2023 10:51:22</TableCell>
                                                        <TableCell>
                                                            <p className="text-[#38A169] text-xs border rounded-[20px] border-[#38A169] h-fit w-fit px-2 py-1">
                                                                Active
                                                            </p>
                                                        </TableCell>
                                                        <TableCell>
                                                            <Dropdown className="border border-[#44444A] rounded-[0.25rem] bg-[#242427]">
                                                                <DropdownTrigger>
                                                                    <Button>
                                                                        <CiMenuKebab />
                                                                    </Button>
                                                                </DropdownTrigger>
                                                                <DropdownMenu aria-label="Dynamic Actions">
                                                                    <DropdownItem>
                                                                        <p className="text-[#B6B8BF]">Deactivate Key</p>
                                                                    </DropdownItem>
                                                                    <DropdownItem>
                                                                        <p className="text-[#E53E3E]">Delete Key</p>
                                                                    </DropdownItem>
                                                                </DropdownMenu>
                                                            </Dropdown>
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </div>
                                </div>
                            </ModalBody>
                            <div className="bg-[#44444A] h-[1px]"></div>

                            <ModalFooter className="flex justify-between items-center">
                                <Button className="rounded-lg p-4 hover:bg-[#353538]">
                                    <Dropdown className="border border-[#44444A] rounded-[0.25rem] bg-[#242427]">
                                        <DropdownTrigger>
                                            <Button variant="bordered">
                                                <FaRegCircleQuestion size={20} />
                                            </Button>
                                        </DropdownTrigger>
                                        <DropdownMenu aria-label="Dynamic Actions">
                                            <DropdownItem>
                                                <p className="text-[#B6B8BF] text-xs">Help & Support</p>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <p className="text-sm">Api Document</p>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <p className="text-sm">FAQ</p>
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </Button>
                                <Button
                                    color="danger"
                                    variant="light"
                                    className="bg-[#EBECF0] text-[#242427] px-4 py-2 h-fit rounded-lg"
                                    onClick={onOpenChange}
                                >
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>

            <CreateApiModal setApiKeys={setApiKeys} isOpen={childModelIsOpen} onOpenChange={setChildModelOpen} />
        </div>
    );
}
