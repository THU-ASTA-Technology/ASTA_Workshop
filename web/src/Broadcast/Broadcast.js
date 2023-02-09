import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { BroadcastList } from "./BroadcastList";
import "./Broadcast.css";
import { UserIdContext } from "../App";
const Broadcast = (props) => {
    const userId = useContext(UserIdContext);
    return (
        <div className="Broadcast-container u-flexColumn">
            {
                userId ?<Broadcast/>:<></>
            }
            <BroadcastList />
        </div>
            
    );
};

export default Broadcast;