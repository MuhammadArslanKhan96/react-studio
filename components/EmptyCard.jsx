import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { useAppContext } from "./EditBar/EditorContext";
import { useRouter } from "next/router";

export default function EmptyCard() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { projects, setProjects, initMockEffect, initMockData, user, selectedWorkspace } = useAppContext();
    const [active, setActive] = useState("simple");
    const router = useRouter();

    const createProject = async (onClose) => {
        const { project: newProject } = await fetch(`/api/projects/add-project`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                mockData: initMockData,
                mockEffect: initMockEffect,
                name: "",
                lastModified: new Date().toDateString(),
                userId: user?.email,
                workspaceId: selectedWorkspace.id,
                isBasic: active === "simple",
                data: [
                    {
                        speaker: {
                            imageUrl: "https://cdn.lovo.ai/f5349e2d/simon.png",
                            bookmarks: [],
                            displayName: "Simon Miller",
                            id: "62985a504ae23ac7dcf66732",
                            locale: "en-US",
                            speakerStyles: [
                                {
                                    displayName: "Joy",
                                    deprecated: true,
                                    id: "62985a504ae23ac7dcf66734",
                                },
                                {
                                    sampleTtsUrl:
                                        "https://cdn.lovo.ai/speaker-tts-samples/prod/danielsullivan-admiration.wav",
                                    displayName: "Admiration",
                                    id: "62985a504ae23ac7dcf66735",
                                    deprecated: false,
                                },
                                {
                                    deprecated: true,
                                    id: "62985a504ae23ac7dcf66736",
                                    displayName: "Disgusted",
                                },
                                {
                                    displayName: "Disappointed",
                                    id: "62985a504ae23ac7dcf66737",
                                    deprecated: true,
                                },
                                {
                                    deprecated: false,
                                    displayName: "Intimate",
                                    id: "62985a504ae23ac7dcf66738",
                                    sampleTtsUrl:
                                        "https://cdn.lovo.ai/speaker-tts-samples/prod/danielsullivan-intimate.wav",
                                },
                                {
                                    displayName: "Narrative",
                                    id: "62985a504ae23ac7dcf66739",
                                    sampleTtsUrl:
                                        "https://cdn.lovo.ai/speaker-tts-samples/prod/danielsullivan-neutralnarrative.wav",
                                    deprecated: false,
                                },
                                {
                                    deprecated: true,
                                    id: "62985a504ae23ac7dcf6673a",
                                    displayName: "Confident",
                                },
                                {
                                    sampleTtsUrl:
                                        "https://cdn.lovo.ai/speaker-tts-samples/prod/danielsullivan-amazed.wav",
                                    id: "62985a504ae23ac7dcf6673b",
                                    displayName: "Amazed",
                                    deprecated: false,
                                },
                                {
                                    displayName: "Sleepy - Happy",
                                    sampleTtsUrl:
                                        "https://cdn.lovo.ai/speaker-tts-samples/prod/danielsullivan-sleepyhappy.wav",
                                    id: "62985a504ae23ac7dcf6673c",
                                    deprecated: false,
                                },
                                {
                                    displayName: "Grief",
                                    id: "62985a504ae23ac7dcf6673d",
                                    deprecated: false,
                                    sampleTtsUrl:
                                        "https://cdn.lovo.ai/speaker-tts-samples/prod/danielsullivan-grief.wav",
                                },
                                {
                                    id: "62985a504ae23ac7dcf6673e",
                                    displayName: "Presenting",
                                    deprecated: false,
                                    sampleTtsUrl:
                                        "https://cdn.lovo.ai/speaker-tts-samples/prod/danielsullivan-neutralpresenting.wav",
                                },
                                {
                                    deprecated: false,
                                    displayName: "Serious",
                                    sampleTtsUrl:
                                        "https://cdn.lovo.ai/speaker-tts-samples/prod/danielsullivan-serious.wav",
                                    id: "62985a504ae23ac7dcf6673f",
                                },
                                {
                                    deprecated: false,
                                    displayName: "Disapproval",
                                    id: "62985a504ae23ac7dcf66740",
                                    sampleTtsUrl:
                                        "https://cdn.lovo.ai/speaker-tts-samples/prod/danielsullivan-disapproval.wav",
                                },
                                {
                                    id: "62985a504ae23ac7dcf66741",
                                    deprecated: false,
                                    sampleTtsUrl:
                                        "https://cdn.lovo.ai/speaker-tts-samples/prod/danielsullivan-boredom.wav",
                                    displayName: "Boredom",
                                },
                                {
                                    sampleTtsUrl:
                                        "https://cdn.lovo.ai/speaker-tts-samples/prod/danielsullivan-apprehensive.wav",
                                    deprecated: false,
                                    id: "62985a504ae23ac7dcf66742",
                                    displayName: "Apprehensive",
                                },
                                {
                                    deprecated: false,
                                    id: "62985a504ae23ac7dcf66743",
                                    displayName: "Annoyed",
                                    sampleTtsUrl:
                                        "https://cdn.lovo.ai/speaker-tts-samples/prod/danielsullivan-annoyed.wav",
                                },
                                {
                                    deprecated: false,
                                    id: "62985a504ae23ac7dcf66744",
                                    displayName: "Tired",
                                    sampleTtsUrl:
                                        "https://cdn.lovo.ai/speaker-tts-samples/prod/danielsullivan-tired.wav",
                                },
                                {
                                    deprecated: true,
                                    id: "62985a504ae23ac7dcf66745",
                                    displayName: "Urgent",
                                },
                                {
                                    displayName: "Flirty",
                                    sampleTtsUrl:
                                        "https://cdn.lovo.ai/speaker-tts-samples/prod/danielsullivan-flirty.wav",
                                    deprecated: false,
                                    id: "62985a504ae23ac7dcf66746",
                                },
                                {
                                    id: "62985a504ae23ac7dcf66747",
                                    displayName: "Terrified",
                                    deprecated: false,
                                    sampleTtsUrl:
                                        "https://cdn.lovo.ai/speaker-tts-samples/prod/danielsullivan-terrified.wav",
                                },
                                {
                                    sampleTtsUrl:
                                        "https://cdn.lovo.ai/speaker-tts-samples/prod/danielsullivan-hesitant.wav",
                                    deprecated: false,
                                    id: "62985a504ae23ac7dcf66748",
                                    displayName: "Hesitant",
                                },
                                {
                                    id: "62985a504ae23ac7dcf66749",
                                    deprecated: true,
                                    displayName: "Furious",
                                },
                                {
                                    deprecated: false,
                                    displayName: "Sarcastic",
                                    sampleTtsUrl:
                                        "https://cdn.lovo.ai/speaker-tts-samples/prod/danielsullivan-sarcastic.wav",
                                    id: "62985a504ae23ac7dcf6674a",
                                },
                                {
                                    displayName: "Sick",
                                    sampleTtsUrl:
                                        "https://cdn.lovo.ai/speaker-tts-samples/prod/danielsullivan-sick.wav",
                                    id: "62985a504ae23ac7dcf6674b",
                                    deprecated: false,
                                },
                                {
                                    id: "62985a504ae23ac7dcf6674c",
                                    deprecated: false,
                                    displayName: "Serene",
                                    sampleTtsUrl:
                                        "https://cdn.lovo.ai/speaker-tts-samples/prod/danielsullivan-serene.wav",
                                },
                                {
                                    deprecated: true,
                                    displayName: "Ecstatic",
                                    id: "62985a504ae23ac7dcf6674d",
                                },
                                {
                                    displayName: "Sleepy - Frustrated",
                                    sampleTtsUrl:
                                        "https://cdn.lovo.ai/speaker-tts-samples/prod/danielsullivan-sleepyfrustrated.wav",
                                    deprecated: false,
                                    id: "62985a504ae23ac7dcf6674e",
                                },
                                {
                                    deprecated: true,
                                    id: "62985a504ae23ac7dcf6674f",
                                    displayName: "Drunken - Happy",
                                },
                                {
                                    deprecated: true,
                                    id: "62985a504ae23ac7dcf66750",
                                    displayName: "Drunken - Sad",
                                },
                            ],
                            speakerType: "emotional",
                            ageRange: "mature",
                            gender: "male",
                        },
                        text: "hi",
                        speech: {
                            pronunciations: [],
                            status: "succeeded",
                            text: "hi",
                            speaker: "62985a504ae23ac7dcf66732",
                            speakerStyle: "62985a504ae23ac7dcf66739",
                            speed: 1,
                            pause: [],
                            emphasis: [],
                            urls: [
                                "https://firebasestorage.googleapis.com/v0/b/vvld-7706b.appspot.com/o/speeches%2F458ad424-ff06-4144-bb72-4798a27d8e7c.mp3?alt=media&token=123f6c22-ea85-4f8d-9610-e7e23b017fa9",
                            ],
                            id: "804d0472-a690-4d76-a050-061db710d354",
                        },
                        time: 1704716399043,
                    },
                ],
            }),
        }).then((res) => res.json());
        const newProjects = [...projects, newProject];
        setProjects(newProjects);

        router.push(`/project/${newProject.id}`);
        onClose();
    };

    return (
        <>
            <div
                className="max-w-[330px] min-w-[310px] min-h-[260px] max-h-[270px] border border-[#2871DE] rounded-[5px] bg-[#242427] hover:bg-[#353538] flex flex-col justify-center items-center cursor-pointer"
                onClick={onOpen}
            >
                {/* <div className="flex flex-col justify-center items-center h-full"> */}
                <FaPlus color="#2871DE" />
                <p className="text-[#2871DE]">New Project</p>
                {/* </div> */}
            </div>
            {/* <Button onPress={onOpen}>Open Modal</Button> */}
            <Modal
                backdrop="opaque"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                classNames={{
                    backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
                }}
            >
                <ModalContent className="border border-[#44444A] bg-[#2D2D30] rounded-md p-[1.5rem] min-w-[750px]">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Create a Project</ModalHeader>
                            <ModalBody>
                                <div>
                                    <div className="bg-[#44444A] h-[1px]"></div>
                                    <div className="flex gap-4 mt-4">
                                        <div className="flex flex-col gap-2 w-1/2">
                                            <div
                                                className={`border ${
                                                    active === "simple" ? "border-[#255BB8]" : "border-[#44444A]"
                                                } rounded-lg bg-[#2d2d30] text-center p-[16px] cursor-pointer`}
                                                onClick={() => setActive("simple")}
                                            >
                                                <p className="text-[#efefef] text-[16px]">Simple Mode</p>
                                                <p className="text-[#8C8C96] text-[14px]">
                                                    Create short, single-speaker voice overs. Basic functionality for
                                                    easy use.
                                                </p>
                                            </div>
                                            <div
                                                className={`border ${
                                                    active === "advanced" ? "border-[#255BB8]" : "border-[#44444A]"
                                                } rounded-lg bg-[#2d2d30] text-center p-[16px] cursor-pointer`}
                                                onClick={() => setActive("advanced")}
                                            >
                                                <p className="text-[#efefef] text-[16px]">Advanced Mode</p>
                                                <p className="text-[#8C8C96] text-[14px]">
                                                    Create full audio/video content with advanced features
                                                </p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="border border-[#44444A] rounded-[10px] h-fit w-1/2">
                                            {/* <video width="100%" height="100%" autoPlay style={{ borderRadius: "10px" }}> */}
                                            {active === "simple" ? (
                                                <video
                                                    width="100%"
                                                    height="100%"
                                                    autoPlay
                                                    loop
                                                    style={{ borderRadius: "10px" }}
                                                    src="/video/Simple.mp4"
                                                ></video>
                                            ) : (
                                                <video
                                                    width="100%"
                                                    height="100%"
                                                    autoPlay
                                                    loop
                                                    style={{ borderRadius: "10px" }}
                                                    src="/video/Advanced.mp4"
                                                ></video>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#44444A] h-[1px]"></div>
                            </ModalBody>
                            <ModalFooter>
                                <Button className="border border-[#44444A] rounded-[5px] px-4 py-2" onPress={onClose}>
                                    Cancel
                                </Button>
                                <Button
                                    className="bg-[#2871DE] rounded-[5px] px-4 py-2"
                                    onPress={() => createProject(onClose)}
                                >
                                    Create
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
