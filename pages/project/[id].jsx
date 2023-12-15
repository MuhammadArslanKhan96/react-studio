import EditHead from "@/components/EditBar/EditHead";
import SideNav from "@/components/EditBar/SideNav";
import Timelinebar from "@/components/EditBar/Timelinebar";
import Promptbar from "@/components/EditBar/promptbar";
import React from "react";

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
                    <Timelinebar />
                </div>
            </div>
        </div>
    );
}
