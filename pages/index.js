import React from "react";
import Card from "../components/Card";
import { useAppContext } from "../components/EditBar/EditorContext";
import EmptyCard from "../components/EmptyCard";
import EditInput from "../components/EditInput";

export default function Home() {
    const { workspaceProjects } = useAppContext();
    return (
        <div className="flex flex-col gap-4 bg-[#242427] w-full p-2 h-[100vh] overflow-scroll scrollStyle">
            <EditInput isWorkspace />
            <div className="w-full flex gap-2 p-2 flex-wrap">
                <EmptyCard />
                {workspaceProjects.map((project, index) => (
                    <Card project={project} key={index} />
                ))}
            </div>
        </div>
    );
}