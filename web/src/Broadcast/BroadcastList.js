import React, { useEffect, useState } from "react";
import { EmptyBroadcastBlock, BroadcastBlock } from "./BroadcastBlock";
import BroadcastEdit from "./BroadcastEdit";
import { get } from "../utils"
import "./BroadcastList.css";


const LatestBroadcast = (props) => {
    //let broadcast1 = {content:"hello world!",time:new Date().toString()};

    let broadcast1 = {};
    const [broadcast, setBroadcast] = useState(broadcast1);
    //Todo: 让LatestBroadcast呈现出与BroadcastList中不同的样式

    //begin
    const getLatestBroadcast = () => {
        get("broadcast/latest/")
            .then((response) => {
                if (Object.keys(response).length !== 0) {
                    setBroadcast(response)
                }
            })
            .catch((error) => console.log(error));
    }

    useEffect(getLatestBroadcast, []);
    //end



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
        setBroadcastList([...broadcastList, {content:content, time:new Date().toString()}]);
    }
    //begin
    const getBroadcastList = () => {
        get("broadcast/list/")
            .then((response) => {
                if (response.length !== 0) {
                    setBroadcastList(response);
                }
            })
            .then(() => {
                console.log(broadcastList);
            })
            .catch((error) => console.log(error));
    }

    useEffect(getBroadcastList, []);
    //end

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
                {broadcastList.map((broadcast) => <BroadcastBlock key={broadcast.broadcastId} broadcast={broadcast} />)}
            </div>
        </div>

    );
};

export { LatestBroadcast, BroadcastList };