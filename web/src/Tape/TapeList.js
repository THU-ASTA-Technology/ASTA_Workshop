import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loading } from "../Page/Page";
import { get } from "../utils";
import { TapeBlock, EmptyTapeBlock } from "./TapeBlock";
import "./TapeList.css";

// https://stackoverflow.com/questions/54865764/react-usestate-does-not-reload-state-from-props

const LatestTape = (props) => {
    const [tape, setTape] = useState({});
    const [loading, setLoading] = useState(true);

    const getLatestTape = () => {
        setLoading(true);
        get("tape/latest/")
            .then((response) => {
                if (Object.keys(response).length !== 0) {
                    setTape(response);
                }
            })
            .then(() => setLoading(false))
            .catch((error) => alert(error));
    }
    useEffect(getLatestTape, []);

    if (loading) {
        return <Loading />
    }

    if (Object.keys(tape).length === 0) {
        return <EmptyTapeBlock />
    }
    return (
        <TapeBlock tape={tape} />
    );
};

const TapeList = (props) => {
     // Need to get tapes from server here
    const [tapeList, setTapeList] = useState([]);
    const [loading, setLoading] = useState(true);

    const getTapeList = () => {
        setLoading(true);
        get("tape/list/")
            .then((response) => {
                if (response.length !== 0) {
                    setTapeList(response);
                }
            })
            .then(() => setLoading(false))
            .catch((error) => alert(error));
    };
    useEffect(getTapeList, []);

    if (loading) {
        return (
            <Loading />
        );
    }

    if (tapeList.length === 0) {
        return (
            <div className="Tape-container">
                <EmptyTapeBlock />
            </div>
        );
    }
    // for key stuff: https://reactjs.org/docs/lists-and-keys.html#keys
    return (
        <div className="Tape-container u-flexColumn">
            {tapeList.map((tape) => <TapeBlock key={tape.tapeId} tape={tape} className="Tape-tapeLinks"/>)}
        </div>
    );
};

export { LatestTape, TapeList };