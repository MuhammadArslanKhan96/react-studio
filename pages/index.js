import React from "react";
import Card from "../components/Card";
import EmptyCard from "../components/EmptyCard";
import EditInput from "../components/EditInput";

export default function Home() {
    return (
        <div className="flex flex-col bg-[#242427] w-full p-2 h-[100vh] overflow-scroll scrollStyle">
            <EditInput />
            <div className="w-full flex gap-2 p-2 flex-wrap">
                <EmptyCard />
                <Card />
            </div>
        </div>
    );
}
