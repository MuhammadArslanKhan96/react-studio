import React from "react";
import Card from "../components/Card";
import { useAppContext } from "../components/EditBar/EditorContext";
import EmptyCard from "../components/EmptyCard";

export default function Home() {
    const { projects } = useAppContext();
    return (
        <div className="flex flex-col bg-[#242427] w-full p-2 h-[100vh] overflow-scroll scrollStyle">
            <div className="w-full flex gap-2 p-2 flex-wrap">
                <EmptyCard />
                {projects.map((project, index) => (
                    <Card project={project} key={index} />
                ))}
            </div>
        </div>
    );
}