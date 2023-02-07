import React, { useEffect, useState } from "react";
import Profile from "../Profile/Profile";
import { LatestBroadcast } from "../Broadcast/BroadcastList";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = (props) => {

    return (
        <div className="Home-container u-flexColumn">
            <LatestBroadcast />
            <Profile  className="Home-profile" />
        </div>
        
    );
};

export default Home;