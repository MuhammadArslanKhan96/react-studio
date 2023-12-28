import audioControl from "../player/audioControl";
import { getSpeakers } from "../../helpers/get-speakers";
import React, { useEffect, useMemo, useState } from "react";
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
    const [selectedSpeaker, setSelectedSpeaker] = useState(speakers[0] ?? false);

    const [voiceModel, setVoiceModel] = useState(false);
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState({});

    const getData = async () => {
        const data = await getSpeakers();
        setSpeakers(data);
    };

    useEffect(() => {
        getData();
    }, []);

    const router = useRouter();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getProjects = useMemo(async () => {
        const projects = await fetch('/api/projects/get-projects?email=' + user?.email).then(r => r.json()).then(r => r.projects);
        setProjects(projects);
    }, [user?.email]);

    useEffect(() => {
        const email = localStorage.getItem('email');
        if (email !== null && !user) {
            fetch('/api/auth/get-user?email=' + email).then(r => r.json()).then(newUser => {
                setUser(newUser.user);
            });
            return;
        }
        if (!user?.email && (router.pathname !== '/signin' || router.pathname !== '/signup')) {
            router.push('/signin')
        } else if (user?.email && (router.pathname === '/signin' || router.pathname === '/signup')) {
            getProjects();
            router.push('/')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

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
                    setSelectedProject
                }}
            >
                {children}
            </AppContext.Provider>
        </>
    );
};

export const useAppContext = () => useContext(AppContext);
