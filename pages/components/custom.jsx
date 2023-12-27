"use client";
import React from 'react';
export const CustomRender0 = ({ action, row }) => {
    return (<div className={'effect0'}>
      <div className={`effect0-text`}>{`Play audio: ${action.data.name}`}</div>
    </div>);
};
export const CustomRender1 = ({ action, row }) => {
    return (<div className={'effect1'}>
      <div className={`effect1-text`}>{`Play an animation: ${action.data.name}`}</div>
    </div>);
};
