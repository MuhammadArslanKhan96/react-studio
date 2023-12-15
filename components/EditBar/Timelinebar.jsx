import React from "react";
import { Timeline, TimelineEffect, TimelineRow } from "@xzdarcy/react-timeline-editor";

export default function Timelinebar() {
    const mockData = [
        {
            id: "0",
            actions: [
                {
                    id: "action00",
                    start: 0,
                    end: 2,
                    effectId: "effect0",
                },
            ],
        },
        {
            id: "1",
            actions: [
                {
                    id: "action10",
                    start: 1.5,
                    end: 5,
                    effectId: "effect1",
                },
            ],
        },
    ];

    const mockEffect = {
        effect0: {
            id: "effect0",
            name: "test",
        },
        effect1: {
            id: "effect1",
            name: "test1",
        },
    };
    return (
        <div>
            <div className="[&>div>div>div>div>div>div>div]:flex [&>div>div>div>div>div>div>div]:items-center [&>div>div>div>div>div>div>div]:justify-around">
                <Timeline
                    getActionRender={(action) => (
                        <div className="flex justify-center items-center text-center">{action.id}</div>
                    )}
                    editorData={mockData}
                    onChange={(a) => console.log(a)}
                    effects={mockEffect}
                    style={{ width: "100%", maxHeight: "200px" }}
                />
            </div>
        </div>
    );
}
