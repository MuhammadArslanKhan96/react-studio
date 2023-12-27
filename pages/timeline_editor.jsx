"use client";

// import { Timeline, TimelineEffect, TimelineRow } from '@xzdarcy/react-timeline-editor';
// import React from 'react';

// const mockData= [{
//     id: "0",
//     actions: [
//       {
//         id: "action00",
//         start: 0,
//         end: 2,
//         effectId: "effect0",
//         data: {
//             src: '/bg.mp3',
//             name: '点赞',
//           },
//       },
//     ],
//   },
//   {
//     id: "1",
//     actions: [
//       {
//         id: "action10",
//         start: 1.5,
//         end: 5,
//         effectId: "effect1",
//         data: {
//             src: '/bg.mp3',
//             name: '点赞',
//           },
//       }
//     ],
// }]

// const mockEffect = {
//   effect0: {
//     id: "effect0",
//     name: "效果0",
//   },
//   effect1: {
//     id: "effect1",
//     name: "效果1",
//   },
// };

// const TimelineEditor = () => {
//   return (
//       <Timeline
//         editorData={mockData}
//         effects={mockEffect}
//         //         scale={scale}
//         // scaleWidth={scaleWidth}
//         // startLeft={startLeft}
//         // autoScroll={true}
//         // ref={timelineState}
        
        
//         // onChange={(data) => {
//         //   setData(data );
//         // }}
//       />
//   );
// };




// import { Timeline, TimelineState } from '@xzdarcy/react-timeline-editor';

// import dynamic from 'next/dynamic';

import dynamic from 'next/dynamic';

const Timeline = dynamic(
  () => import('@xzdarcy/react-timeline-editor').then(mod => mod.Timeline),
  { ssr: false }
);

const TimelineState = dynamic(
  () => import('@xzdarcy/react-timeline-editor').then(mod => mod.TimelineState),
  { ssr: false }
);

import { Switch } from 'antd';
import { cloneDeep } from 'lodash';
import React, { useRef, useState } from 'react';
import { CustomRender0, CustomRender1 } from './components/custom';
// import '../styles/timeline.css';
import { CustomTimelineAction, CusTomTimelineRow, mockData, mockEffect, scale, scaleWidth, startLeft } from './components/mock';
import TimelinePlayer from './components/player';

// Use MyClientSideComponent in your render function

const defaultEditorData = cloneDeep(mockData);

const TimelineEditor = () => {
  const [data, setData] = useState(defaultEditorData);
  const timelineState = useRef();
  const playerPanel = useRef();
  const autoScrollWhenPlay = useRef(true);

  return (
    <div className="timeline-editor-engine bottom-0 d-flex w-full">
   
      {/* <div className="player-panel" id="player-ground-1" ref={playerPanel}></div> */}
      <TimelinePlayer timelineState={TimelineState} autoScrollWhenPlay={autoScrollWhenPlay} />
      <Timeline
        scale={scale}
        scaleWidth={scaleWidth}
        startLeft={startLeft}
        autoScroll={true}
        ref={timelineState}
        editorData={data}
        dragLine = { true }
        effects={mockEffect}
        onChange={(data) => {
          setData(data );
        }}
        getActionRender={(action, row) => {
          if (action.effectId === 'effect0') {
            return <CustomRender0 action={action } row={row } />;
          } else if (action.effectId === 'effect1') {
            return <CustomRender1 action={action } row={row } />;
          }
        }}
      />
    </div>
  );
};

export default TimelineEditor;