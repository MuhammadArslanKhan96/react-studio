import audioControl from "../player/audioControl";
import { getSpeakers } from "../../helpers/get-speakers";
import React, { useEffect, useCallback, useState } from "react";
import { createContext, useContext } from "react";
import { useRouter } from "next/router";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const initMockData = [
        {
            id: "0",
            actions: [
                {
                    id: "action0",
                    start: 0,
                    end: 5,
                    effectId: "effect0",
                    data: {
                        src: "/audio/bg.mp3",
                        name: "",
                    },
                },
            ],
            checked: false,
            speaker: {
                "id": "63b4094b241a82001d51c5fc",
                "displayName": "Aadesh Madar",
                "locale": "kn-IN",
                "gender": "male",
                "imageUrl": "https://cdn.lovo.ai/f5349e2d/Aadesh+Madar.jpeg",
                "speakerType": "global",
                "speakerStyles": [
                    {
                        "deprecated": false,
                        "id": "63b4094b241a82001d51c5fd",
                        "displayName": "Default",
                        "sampleTtsUrl": "https://cdn.lovo.ai/speaker-tts-samples/prod/kn-IN-GaganNeural-default.wav"
                    }
                ]
            }
        },
    ];
    const initMockEffect = {
        effect0: {
            id: "effect0",
            name: "",
            source: {
                start: ({ action, engine, isPlaying, time }) => {
                    if (isPlaying) {
                        const src = action.data.src;
                        audioControl.start({ id: src, src, startTime: action.start, engine, time });
                    }
                },
                enter: ({ action, engine, isPlaying, time }) => {
                    if (isPlaying) {
                        const src = action.data.src;
                        audioControl.start({ id: src, src, startTime: action.start, engine, time });
                    }
                },
                leave: ({ action, engine }) => {
                    const src = action.data.src;
                    audioControl.stop({ id: src, engine });
                },
                stop: ({ action, engine }) => {
                    const src = action.data.src;
                    audioControl.stop({ id: src, engine });
                },
            },
        },
    };
    const [mockData, setMockData] = useState(initMockData);
    const [user, setUser] = useState();
    const [mockEffect, setMockEffect] = useState(initMockEffect);
    const [speakers, setSpeakers] = useState([]);
    const [selectedSpeaker, setSelectedSpeaker] = useState(speakers?.[0] ?? false);
    const [voiceModel, setVoiceModel] = useState(false);
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState({});
    const [workspaces, setWorkspaces] = useState([]);
    const [pendingInvites, setPendingInvites] = useState([]);
    const [selectedWorkspace, setSelectedWorkspace] = useState({});
    const [inviteMembers, setInviteMembers] = useState([]);
    const [workspaceProjects, setWorkspaceProjects] = useState([]);
    const [progressModal, setProgressModal] = useState("");


    const getData = async () => {
        const data = await getSpeakers();
        setSpeakers(data || []);
    };

    useEffect(() => {
        getData();
    }, []);

    const router = useRouter();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getProjects = useCallback(async (email) => {
        const projects = await fetch('/api/projects/get-projects').then(r => r.json()).then(r => r.projects);
        setProjects(projects || []);
    }, []);

    const getMembers = async (email) => {
        const workspaces = await fetch('/api/workspaces/get-workspaces?email=' + email).then(r => r.json()).then(r => r.workspaces);
        const pending = await fetch('/api/workspaces/get-pending-invites?email=' + email).then(r => r.json()).then(r => r.pending);
        setPendingInvites([]);
        await (pending || [])?.forEach(async (workspace) => {
            const members = workspace.members;
            const getAllMembers = await Promise.all(members.map(async a => await fetch(`/api/auth/get-user?email=${a.email}`).then(r => r.json()).then(r => ({ ...r.user, ...a }))));
            setPendingInvites(pre => ([...pre, { ...workspace, members: getAllMembers }]));
        });
        setWorkspaces(workspaces || []);
        setSelectedWorkspace(workspaces?.[0] || {});
    };

    useEffect(() => {
        const email = localStorage.getItem('email');
        if (email !== null && !user) {
            fetch('/api/auth/get-user?email=' + email).then(r => r.json()).then(newUser => {
                setUser(newUser.user);
            });
            getProjects(email);
            getMembers(email);
            return;
        }
        if (!user?.email && (router.pathname !== '/signin' || router.pathname !== '/signup')) {
            router.push('/signin')
        } else if (user?.email && (router.pathname === '/signin' || router.pathname === '/signup')) {
            getProjects(user?.email);
            getMembers(user?.email);
            router.push(`/`);
        } else if (user) {
            getProjects(user?.email);
            getMembers(user?.email);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    useEffect(() => {
        if (selectedWorkspace.id) {
            setInviteMembers(selectedWorkspace?.members || []);
            setWorkspaceProjects(projects.filter(project => project.workspaceId === selectedWorkspace?.id));
        }
    }, [selectedWorkspace, projects, user])

    return (
        <>
            <AppContext.Provider
                value={{
                    mockData,
                    setMockData,
                    mockEffect,
                    setMockEffect,
                    initMockData,
                    initMockEffect,
                    speakers,
                    setSpeakers,
                    selectedSpeaker,
                    setSelectedSpeaker,
                    voiceModel,
                    setVoiceModel,
                    projects,
                    setProjects,
                    user,
                    setUser,
                    selectedProject,
                    setSelectedProject,
                    inviteMembers,
                    setInviteMembers,
                    getProjects,
                    selectedWorkspace,
                    setSelectedWorkspace,
                    workspaces,
                    setWorkspaces,
                    workspaceProjects,
                    setPendingInvites,
                    pendingInvites,
                    progressModal,
                    setProgressModal
                }}
            >
                {progressModal
                    && (
                        <div className="absolute top-0 left-0 z-50 bg-black/60 min-h-screen h-full w-full flex justify-center items-center">
                            <div className="w-fit px-4 min-w-[300px] h-24 bg-black/90 flex flex-col items-center justify-center border-2 border-gray-700 rounded-lg">
                                <p className="text-white text-lg font-medium">{progressModal?.text || ""}</p>
                            <div className="w-full h-2 bg-gray-700 rounded-lg mt-2">
                                    <div className="h-full bg-blue-500 rounded-lg transition-all ease-in-out duration-300" style={{ width: `${progressModal?.progress || 0}%` }}></div>
                                </div>
                            </div>
                        </div>
                    )
                }
                {children}
            </AppContext.Provider>
        </>
    );
};

export const useAppContext = () => useContext(AppContext);
