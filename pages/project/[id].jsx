import EditHead from "../../components/EditBar/EditHead";
import SideNav from "../../components/EditBar/SideNav";
import React from "react";
import Promptbar from "../../components/EditBar/Promptbar";
import TimelineEditor from "../../components/player";
import { useRouter } from "next/router";
import { useAppContext } from "../../components/EditBar/EditorContext";
import SimpleMode from "../../components/SimpleMode";

export default function Project() {
    const router = useRouter();
    const { id } = router.query;
    const { projects, setSelectedProject, setMockData, setMockEffect, selectedProject } = useAppContext();
    React.useEffect(() => {
        if (projects) {
            const project = projects.find((project) => project.id === id);
            setSelectedProject(project);
            setMockData(project?.mockData || []);
            setMockEffect(project?.mockEffect || []);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [projects, id]);

    if (selectedProject?.isBasic) return <SimpleMode />;

    return (
        <div className="flex bg-[#242427] w-full">
            <div>
                <SideNav />
            </div>
            <div className="w-full flex flex-col justify-between">
                <div className="w-full">
                    <EditHead />
                    <Promptbar />
                </div>
                <div>
                    <TimelineEditor />
                </div>
            </div>
        </div>
    );
}
