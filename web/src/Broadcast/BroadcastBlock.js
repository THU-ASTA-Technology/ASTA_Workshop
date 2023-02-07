import React, { useEffect, useState } from "react";

import "./BroadcastBlock.css";

const SingleBroadcast = (props) => {
    return (
        <div className="SingleBroadcast-container u-flexColumn">
            <div className="SingleBroadcast-time time">
                {"Post Time: " + props.time}
            </div>
            <div className="SingleBroadcast-content">
                {props.content}
            </div>
        </div>
    );
};

const EmptyBroadcastBlock = (props) => {
    return (
        <h3 className="u-textCenter">No broadcast so far</h3>
    );
};

const BroadcastBlock = (props) => {
    return (
        <div className="BroadcastBlock-container block border">
            <SingleBroadcast 
                time={props.broadcast.time} 
                content={props.broadcast.content}
            />
        </div>
    );
};

export { EmptyBroadcastBlock, BroadcastBlock };