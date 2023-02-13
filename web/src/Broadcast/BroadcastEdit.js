import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { get, post } from "../utils";
import "./BroadcastEdit.css";

const defaultBroadcast = { content: "" };

const BroadcastEdit = (props) => {
    const defaultContent = "Broadcast here!";
    const [broadcast, setBroadcast] = useState(defaultBroadcast);

    const navigate = useNavigate();

    const handleContentChange = (event) => {
        setBroadcast({ ...broadcast, content: event.target.value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        post("broadcast/edit/",
            broadcast)
            .then((response) => alert(response))
            .then(() => navigate(0))
            .catch((error) => alert(error));
    };
    return (
        <div className="BroadcastEdit-container u-flexColumn">
            <textarea
                className="BroadcastEdit-textarea"
                placeholder={defaultContent}
                value={broadcast.content}
                onChange={handleContentChange}>
            </textarea>
            <div className="button-right">
                <Link onClick={handleSubmit} class="button BroadcastEdit-publish u-textCenter">
                    Publish
                </Link>
            </div>
        </div>
    );
};

export default BroadcastEdit;