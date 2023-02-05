import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BroadcastList } from "./BroadcastList";
import "./Broadcast.css";
import { UserIdContext } from "../App";

const Broadcast = (props) => {
    const userId = useContext(UserIdContext);
    return (
        <div className="Broadcast-container u-flexColumn">
            {userId ? <a href="/broadcast/edit" class="button Broadcast-publish u-textCenter">Click Here to Publish A New Broadcast</a> : <></>}
            <BroadcastList />
        </div>
            
    );
};

export default Broadcast;