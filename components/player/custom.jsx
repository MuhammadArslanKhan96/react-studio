import React from "react";

export const CustomRender0 = ({ action, row }) => {
    return (
        <div className={"effect0 !cursor-grab active:!cursor-grabbing"}>
            <div className={`effect0-text`}>{`${action?.data?.name || ""}`}</div>
        </div>
    );
};

export const CustomRender1 = ({ action, row }) => {
    return (
        <div className={"effect1 !cursor-grab active:!cursor-grabbing"}>
            <div className={`effect1-text`}>{`${action?.data?.name || ""}`}</div>
        </div>
    );
};
