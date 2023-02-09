import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import { BroadcastList } from "./BroadcastList";
import { UserIdContext } from "../App";
import "./Broadcast.css";
import BroadcastEdit from "./BroadcastEdit";

const Broadcast = (props) => {
    const userId = useContext(UserIdContext);
    return (
        <div className="Broadcast-container u-flexColumn">
            {
                userId ? <BroadcastEdit/>:<></>
            }
            <BroadcastList />
        </div>
            
    );
};

export default Broadcast;