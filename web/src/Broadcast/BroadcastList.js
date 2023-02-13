import React, { useEffect, useState } from "react";
import { Loading } from "../Page/Page";
import { get } from "../utils";
import { EmptyBroadcastBlock, BroadcastBlock } from "./BroadcastBlock";
import "./BroadcastList.css";

const LatestBroadcast = (props) => {
    const [broadcast, setBroadcast] = useState({});
    const [loading, setLoading] = useState(true);

    const getLatestBroadcast = () => {
        setLoading(true);
        get("broadcast/latest/")
            .then((response) => {
                if (Object.keys(response).length !== 0) {
                    setBroadcast(response);
                }
            })
            .then(() => setLoading(false))
            .catch((error) => alert(error));
    };

    useEffect(getLatestBroadcast, []);

    if (loading) {
        return (
            <Loading />
        );
    }

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
            .catch((error) => alert(error));
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