import EditHead from "../../components/EditBar/EditHead";
import SideNav from "../../components/EditBar/SideNav";
// import Timelinebar from "../../components/EditBar/Timelinebar";
import Promptbar from "../../components/EditBar/Promptbar";
import React from "react";
import TimelineEditor from "../../components/player";

export default function project() {
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
