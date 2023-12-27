import { Timeline } from "@xzdarcy/react-timeline-editor";
import { cloneDeep } from "lodash";
import React, { useEffect, useRef, useState } from "react";
import { CustomRender0, CustomRender1 } from "./custom";
import { scale, scaleWidth, startLeft } from "./mock";
import TimelinePlayer from "./player";
import { useAppContext } from "../../components/EditBar/EditorContext";

const TimelineEditor = () => {
    const { mockData, mockEffect } = useAppContext();
    const [data, setData] = useState(mockData);
    const timelineState = useRef(null);
    const autoScrollWhenPlay = useRef(true);

    useEffect(() => {
        setData(mockData);
    }, [mockData])

    return (
        <div className="timeline-editor-engine">
            <TimelinePlayer timelineState={timelineState} autoScrollWhenPlay={autoScrollWhenPlay} />
            <Timeline
                scale={scale}
                scaleWidth={scaleWidth}
                startLeft={startLeft}
                autoScroll={true}
                ref={timelineState}
                editorData={data}
                effects={mockEffect}
                autoReRender={true}
                onChange={(data) => {
                    setData(data);
                }}
                getActionRender={(action, row) => {
                    if (action.effectId === "effect0") {
                        return <CustomRender0 action={action} row={row} />;
                    } else if (action.effectId === "effect1") {
                        return <CustomRender1 action={action} row={row} />;
                    }
                }}
            />
        </div>
    );
};

export default TimelineEditor;
