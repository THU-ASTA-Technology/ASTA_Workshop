import React, { useState, useContext } from "react";
import { TapeList } from "./TapeList";
import "./Tape.css";
import { useNavigate } from "react-router-dom";
import { post } from "../utils";
import TapeEdit from "./TapeEdit";
import { UserIdContext } from "../App";
const defaultTape = {
    query: ""
};
const Tape = (props) => {
    const userId = useContext(UserIdContext);
    const defaultQuery = "Tape here";
    const [tape, setTape] = useState(defaultTape);

    const handleQueryChange = (event) => {
        setTape({ ...tape, query: event.target.value });
    };
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        post("tape/edit/", tape)
            .then(() => navigate(0))
            .catch((error) => console.log(error));
    };
    return (
        <div className="Tape-container u-flexColumn">
            {userId ?
                <></> :
                <TapeEdit />
            }
            <TapeList />
        </div>
    );
};

export default Tape;