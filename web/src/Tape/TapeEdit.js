import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { post } from "../utils";
import "./TapeEdit.css";

const defaultTape = {
    query: ""
};

const TapeEdit = (props) => {
    const defaultQuery = "Tape here";
    const [tape, setTape] = useState(defaultTape);
    
    const handleQueryChange = (event) => {
        setTape({...tape, query: event.target.value});
    };

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        post("tape/edit/", tape)
            .then(() => navigate(0))
            .catch((error) => console.log(error));
    };

    return (
        <div className="TapeEdit-container u-flexColumn">
            <input placeholder={defaultQuery} value={tape.query} onChange={handleQueryChange}></input>
            <div className="TapeEdit-button">
                <button className="button" onClick={handleSubmit}>Submit</button>
            </div>
            
        </div>
    );
};

export default TapeEdit;