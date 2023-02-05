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
        // post here
        post("broadcast/edit/", 
            broadcast)
            .then(() => navigate("/broadcast"))
            .catch((error) => console.log(error));
    };
    return (
        <div className="BroadcastEdit-container u-flexColumn">
            <textarea className="BroadcastEdit-textarea" placeholder={defaultContent} value={broadcast.content} onChange={handleContentChange}></textarea>
            <a onClick={handleSubmit} class="button BroadcastEdit-publish u-textCenter">Publish</a>
            
        </div>
    );
};

export default BroadcastEdit;