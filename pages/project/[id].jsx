import EditHead from "../../components/EditBar/EditHead";
import SideNav from "../../components/EditBar/SideNav";
import React from "react";
import Promptbar from "../../components/EditBar/Promptbar";
import TimelineEditor from "../../components/player";
import { useRouter } from "next/router";
import { useAppContext } from "../../components/EditBar/EditorContext";

export default function Project() {
    const router = useRouter();
    const { id } = router.query;
    const { projects, setSelectedProject, selectedProject } = useAppContext();
    React.useEffect(() => {
        if (projects) {
            setSelectedProject(projects.find((project) => project.id === id));
        }
    }, [projects, id]);

    console.log(selectedProject);

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
