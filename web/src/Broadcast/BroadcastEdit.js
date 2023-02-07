import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { get, post } from "../utils";
import "./BroadcastEdit.css";

const defaultBroadcast = {content: ""};

const BroadcastEdit = (props) => {
    const defaultContent = "Broadcast here!";
    const [broadcast, setBroadcast] = useState(defaultBroadcast);

    const navigate = useNavigate();
    const handleContentChange = (event) => {
        setBroadcast({...broadcast, content: event.target.value});
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        //props.handleSubmit(broadcast.content);
        //setBroadcast(defaultBroadcast);

        //begin
        
        //end

    };
    return (
        <div className="BroadcastEdit-container u-flexColumn">
            <textarea className="BroadcastEdit-textarea" placeholder={defaultContent} value={broadcast.content} onChange={handleContentChange}></textarea>
            <div className="BroadcastEdit-publishContainer">
                <button onClick={handleSubmit} className="BroadcastEdit-publish button">Publish</button>
            </div>
        </div>
    );
};

export default BroadcastEdit;