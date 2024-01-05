import { Avatar, Button } from "@nextui-org/react";
import React, { useState } from "react";
import { CiBookmark} from "react-icons/ci";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { IoMdPlay } from "react-icons/io";
import { useAppContext } from "./EditorContext";
import { FaPause,FaBookmark  } from "react-icons/fa";

export default function VoiceCard({ data,callback }) {
    const { setMockData, setVoiceModel, voiceModel, setSelectedSpeaker, user, setSpeakers,selectedSpeaker } = useAppContext();
    const [isPlaying, setIsPlaying] = useState(false);
    const sound = new Howl({
                    src: [(data?.speakerStyles?.[0]?.sampleTtsUrl)] || [],
                    html5: true,
                    onload: function (soundId) {
                        setSoundId(soundId);
                    },
                    onplay: function () {
                        setIsPlaying(true);
                    },
                    onpause: function () {
                        setIsPlaying(false);
                    },
                    onend: function () {
                        setIsPlaying(false);
                    }
                });
    const [soundId, setSoundId] = useState();
    
    
    const updateBookmark = async () => {
        const bookmarked = data?.bookmarks?.includes(user?.email);

        setSpeakers((pre) => [
            ...pre.filter((a) => a.id !== data?.id),
            {
                ...data,
                bookmarks: bookmarked
                    ? data?.bookmarks?.filter((a) => a !== user?.email)
                    : [...data?.bookmarks, user?.email],
            },
        ]);
        
        if (selectedSpeaker?.id === data?.id) {
            setSelectedSpeaker({
                ...data,
                bookmarks: bookmarked
                    ? data?.bookmarks?.filter((a) => a !== user?.email)
                    : [...data?.bookmarks, user?.email],
            });
        }


        await fetch(`/api/speakers/update-speaker?id=${data?.id}`, {
            method: "PUT",
            body: JSON.stringify({
                bookmarks: bookmarked
                    ? data?.bookmarks?.filter((a) => a !== user?.email)
                    : [...data?.bookmarks, user?.email],
            }),
            headers: {
                'Content-Type': "application/json"
            }
        })

    }

    return (
        <div className="max-w-[270px] w-full min-w-[269px] bg-[#2D2D30] border border-[#38383D] hover:border-[#EFEFEF] rounded-[10px] p-[16px] relative group/item">
            {data?.bookmarks?.includes(user?.email) ? (
                <FaBookmark className="absolute right-4 top-4 cursor-pointer" onClick={updateBookmark} />
            ) : (
                <CiBookmark className="absolute right-4 top-4 cursor-pointer" onClick={updateBookmark} />
            )}
            <div className="flex gap-x-2 items-center">
                <div className="rounded-[50px] relative">
                    <Avatar src={data?.imageUrl} size="24" />
                    {isPlaying ? (
                                    <FaPause
                            onClick={() => {
                                sound.pause(soundId);
                                            setIsPlaying(!isPlaying);
                                        }}
                                         className="absolute top-[40%] right-[30%] invisible group-hover/item:visible" 
                                    />
                                ) : (
                                    <IoMdPlay
                                onClick={() => {
                                    sound.play(soundId);
                                        setIsPlaying(!isPlaying);
                                    }}
                                className="absolute top-[40%] right-[30%] invisible group-hover/item:visible"
                            />
                                )}
                    <HiOutlineSpeakerWave className="absolute bottom-0 right-0 visible group-hover/item:invisible" />
                </div>
                <div className="flex flex-col">
                    <p>{data?.displayName ?? ""}</p>
                    <div className="flex gap-1 flex-wrap">
                        {data?.speakerStyles?.map(a => a?.displayName)?.slice(0,5)?.map((a,idx) => (
                        <p key={idx} className="text-[10px] leading-3 text-white bg-[#606069] p-1 rounded-[5px]">{a}</p>
                        ))}
                    </div>
                </div>
            </div>
            <Button
                onClick={() => {
                    if (typeof voiceModel === "string") {
                    setMockData((pre) => [
                        ...pre.filter((a) => a.id !== voiceModel),
                        {
                            ...pre.filter((a) => a.id === voiceModel)[0],
                            speaker: data,
                        },
                    ]);
                    } else {
                        setSelectedSpeaker(data);
                        
                }
                    setVoiceModel(false);
                if(callback) {callback(data)};
                }}
                className="flex items-center w-full bg-[#255BB8] rounded-[5px] mt-1 text-[10px] py-1 group/edit invisible group-hover/item:visible"
            >
                Select
            </Button>
        </div>
    );
}
