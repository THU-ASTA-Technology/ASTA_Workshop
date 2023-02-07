import React from "react";
import { Link } from "react-router-dom";
import { BroadcastList } from "./BroadcastList";
import "./Broadcast.css";

const Broadcast = (props) => {

    return (
        <div className="Broadcast-container u-flexColumn">
            <Link to="/broadcast/edit">Publish</Link>
            <BroadcastList />
        </div>
            
    );
};

export default Broadcast;