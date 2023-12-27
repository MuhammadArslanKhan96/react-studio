import { TimelineAction, TimelineEffect, TimelineRow } from "@xzdarcy/react-timeline-editor";
import audioControl from "./audioControl";
// import lottieControl from './lottieControl';

export const scaleWidth = 160;
export const scale = 5;
export const startLeft = 20;

// export interface CustomTimelineAction extends TimelineAction {
//   data: {
//     src: string;
//     name: string;
//   };
// }

// export interface CusTomTimelineRow extends TimelineRow {
//   actions: CustomTimelineAction[];
// }

export const mockEffect = {
    effect0: {
        id: "effect0",
        name: "Play sound effects",
        source: {
            start: ({ action, engine, isPlaying, time }) => {
                if (isPlaying) {
                    const src = action.data.src;
                    audioControl.start({ id: src, src, startTime: action.start, engine, time });
                }
            },
            enter: ({ action, engine, isPlaying, time }) => {
                if (isPlaying) {
                    const src = action.data.src;
                    audioControl.start({ id: src, src, startTime: action.start, engine, time });
                }
            },
            leave: ({ action, engine }) => {
                // const src = (action).data.src;
                // audioControl.stop({ id: src, engine });
            },
            //   stop: ({ action, engine }) => {

            //     console.log(action,engine);
            //     const src = (action).data.src;
            //     // audioControl.stop({ id: src, engine });
            //   },
        },
    },
    //   effect1: {
    //     id: 'effect1',
    //     name: '播放动画',
    //     source: {
    //       enter: ({ action, time }) => {
    //         const src = (action ).data.src;
    //         // lottieControl.enter({ id: src, src, startTime: action.start, endTime: action.end, time });
    //       },
    //       update: ({ action, time }) => {
    //         const src = (action).data.src;
    //         // lottieControl.update({ id: src, src, startTime: action.start, endTime: action.end, time });
    //       },
    //       leave: ({ action, time }) => {
    //         const src = (action).data.src;
    //         // lottieControl.leave({ id: src, startTime: action.start, endTime: action.end, time });
    //       },
    //     },
    //   },
};

export const mockData = [
    {
        id: "0",
        actions: [
            {
                id: "action0",
                start: 9.5,
                end: 16,
                effectId: "effect0",
                data: {
                    src: "/audio/bg.mp3",
                    name: "Like",
                },
            },
        ],
    },
    {
        id: "1",
        actions: [
            {
                id: "action1",
                start: 5,
                end: 9.5,
                effectId: "effect0",
                data: {
                    src: "/audio/bg.mp3",
                    name: "work",
                },
            },
        ],
    },
    {
        id: "2",
        actions: [
            {
                id: "action2",
                start: 0,
                end: 5,
                effectId: "effect0",
                data: {
                    src: "/audio/bg.mp3",
                    name: "Background music",
                },
            },
        ],
    },
    {
        id: "3",
        actions: [
            {
                id: "action3",
                start: 0,
                end: 20,
                effectId: "effect0",
                data: {
                    src: "/bg.mp3",
                    name: "背景音乐",
                },
            },
        ],
    },
];
