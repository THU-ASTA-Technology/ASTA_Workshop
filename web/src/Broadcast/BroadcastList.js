import React, { useEffect, useState } from "react";
import { EmptyBroadcastBlock, BroadcastBlock } from "./BroadcastBlock";
import BroadcastEdit from "./BroadcastEdit";
import "./BroadcastList.css";


const LatestBroadcast = (props) => {
    
}

const BroadcastList = (props) => {
    
    const [broadcastList, setBroadcastList] = useState([]);
   
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