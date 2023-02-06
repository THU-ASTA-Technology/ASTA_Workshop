import React, { useEffect, useState } from "react";
import { EmptyBroadcastBlock, BroadcastBlock } from "./BroadcastBlock";
import BroadcastEdit from "./BroadcastEdit";
import "./BroadcastList.css";


const LatestBroadcast = (props) => {
    let broadcast1 = {content:"hello world!",time:new Date().toDateString()};
    const [broadcast, setBroadcast] = useState(broadcast1);
    //Todo: 让LatestBroadcast呈现出与BroadcastList中不同的样式
    if (Object.keys(broadcast).length === 0) {
        return <EmptyBroadcastBlock />
    }
    return (
        <BroadcastBlock broadcast={broadcast} />
    );
}

const BroadcastList = (props) => {
    
    const [broadcastList, setBroadcastList] = useState([]);

    const handleSubmit = (content) => {
        setBroadcastList([...broadcastList, {content:content, time:new Date().toDateString()}]);
    }
   
    if (broadcastList.length === 0) {
        return (
            <div className="BroadcastList-container">
                <BroadcastEdit handleSubmit={handleSubmit}/>
                <EmptyBroadcastBlock />
            </div>
        );
    }

    return (
        <div className="BroadcastList-container u-flexColumn">
            <BroadcastEdit handleSubmit={handleSubmit}/>
            <div className="Broadcast-list">
                {broadcastList.map((broadcast,index) => <BroadcastBlock key={index} broadcast={broadcast} />)}
            </div>
        </div>
    );
};

export { LatestBroadcast, BroadcastList };