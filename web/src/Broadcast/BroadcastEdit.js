import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BroadcastEdit.css";

const defaultBroadcast = {content: ""};

const BroadcastEdit = (props) => {
    const defaultContent = "Broadcast here!";
    const [broadcast, setBroadcast] = useState(defaultBroadcast);

    const handleContentChange = (event) => {
        setBroadcast({...broadcast, content: event.target.value});
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        props.handleSubmit(broadcast.content);
    };
    return (
        <div className="BroadcastEdit-container u-flexColumn">
            <textarea className="BroadcastEdit-textarea" placeholder={defaultContent} value={broadcast.content} onChange={handleContentChange}></textarea>
            <button onClick={handleSubmit} class="button BroadcastEdit-publish u-textCenter">Publish</button>
        </div>
    );
};

export default BroadcastEdit;