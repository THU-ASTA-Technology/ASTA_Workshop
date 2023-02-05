import React, { useEffect, useState } from "react";
import { get } from "../utils";
import { EmptyBroadcastBlock, BroadcastBlock } from "./BroadcastBlock";
import "./BroadcastList.css";

const LatestBroadcast = (props) => {
    const [broadcast, setBroadcast] = useState({});
    const getLatestBroadcast = () => {
        get("broadcast/latest/")
            .then((response) => {
                if (Object.keys(response).length !== 0) {
                    setBroadcast(response);
                }
            })
            .catch((error) => console.log(error));
        // setBroadcast("test");
    };

    useEffect(getLatestBroadcast, []);
    if (Object.keys(broadcast).length === 0) {
        return <EmptyBroadcastBlock />
    }

    return (
        <BroadcastBlock broadcast={broadcast} />
    );
};

const BroadcastList = (props) => {
    // need to get broadcast from here
    const [broadcastList, setBroadcastList] = useState([]);
    const getBroadcastList = () => {
        get("broadcast/list/")
            .then((response) => {
                if (response.length !== 0) {
                    setBroadcastList(response);
                }
            })
            .catch((error) => console.log(error));
    };

    useEffect(getBroadcastList, []);

    if (broadcastList.length === 0) {
        return (
            <div className="BroadcastList-container">
                <EmptyBroadcastBlock />
            </div>
        );
    }

    return (
        <div className="BroadcastList-container u-flexColumn">
            {broadcastList.map((broadcast) => <BroadcastBlock key={broadcast.broadcastId} broadcast={broadcast} />)}
        </div>
    );
};

export { LatestBroadcast, BroadcastList };