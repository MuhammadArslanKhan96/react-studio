import React from "react";
import { Timeline } from "@xzdarcy/react-timeline-editor";
import { useAppContext } from "./EditorContext";

export default function Timelinebar() {
    const { mockData, mockEffect, setMockData } = useAppContext();
    
    return (
        <div>
            <div className="[&>div>div>div>div>div>div>div]:flex [&>div>div>div>div>div>div>div]:items-center [&>div>div>div>div>div>div>div]:justify-around">
                <Timeline
                    getActionRender={({ id }) => (
                        <div className="truncate max-w-[300px] cursor-grab active:cursor-grabbing">{id}</div>
                    )}
                    editorData={mockData}
                    onChange={(a) =>
                        setMockData(
                            a.sort(function (a, b) {
                                return Number(b.id) - Number(a.id);
                            })
                        )
                    }
                    effects={mockEffect}
                    style={{ width: "100%", maxHeight: "200px" }}
                />
            </div>
        </div>
    );
}
