import React, { useContext, useEffect, useState, useCallback } from "react";
import { TapeList } from "./TapeList";
import "./Tape.css";
import { UserIdContext } from "../App";
import TapeEdit from "./TapeEdit";

const Tape = (props) => {
    const userId = useContext(UserIdContext);

    return (
        <div className="Tape-container u-flexColumn">
            {userId ? <></> :
                <TapeEdit />
            }
            <TapeList />
        </div>
    );
};

export default Tape;