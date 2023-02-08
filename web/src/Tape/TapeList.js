import React from "react";
import { useEffect, useState } from "react";
import { get } from "../utils";
import { TapeBlock, EmptyTapeBlock } from "./TapeBlock";
import "./TapeList.css";

const LatestTape = (props) => {
    const [tape, setTape] = useState({});
    const getLatestTape = () => {
        get("tape/latest/")
            .then((response) => {
                if (Object.keys(response).length !== 0) {
                    setTape(response);
                }
            })
            .catch((error) => console.log(error));
        // setTape("test_response");
    }
    useEffect(getLatestTape, []);
    if (Object.keys(tape).length === 0) {
        return <EmptyTapeBlock />
    }
    return (
        <TapeBlock tape={tape} />
    );
};

const TapeList = (props) => {
    const [tapeList, setTapeList] = useState([]);

    const getTapeList = () => {
        get("tape/list/")
            .then((response) => {
                if (response.length !== 0) {
                    setTapeList(response);
                }
            })
    };
    
    useEffect(getTapeList, []);

    if (tapeList.length === 0) {
        return (
            <div className="Tape-container">
                <EmptyTapeBlock />
            </div>
        );
    }

    return (
        <div className="Tape-container u-flexColumn">
            {tapeList.map((tape) => <TapeBlock key={tape.tapeId} tape={tape} className="Tape-tapeLinks"/>)}
        </div>
    );
};

export { LatestTape, TapeList };