import React, { useEffect, useState } from "react";
import Profile from "../Profile/Profile";
import { LatestBroadcast } from "../Broadcast/BroadcastList";
import { LatestTape } from "../Tape/TapeList";
import { LatestBlog } from "../Blog/BlogList";
import "./Home.css";
import { get } from "../utils";
import { Link } from "react-router-dom";

const Home = (props) => {
    const [tapeNum, setTapeNum] = useState(0)
    const [blogNum, setBlogNum] = useState(0)

    const getTapeNum = () => {
        get("tape/list/")
            .then((response) => setTapeNum(response.length))
            .catch((error) => console.log(error));
        // setTapeNum(1);
    };

    const getBlogNum = () => {
        get("blog/list/")
            .then((response) => setBlogNum(response.length))
            .catch((error) => console.log(error));
        // setBlogNum(1);
    };

    useEffect(() => {
        getTapeNum();
        getBlogNum();
    }, []);

    return (
        <div className="Home-container u-flexColumn">
            <LatestBroadcast />
            <Profile  className="Home-profile" />
            <div className="Home-stat u-flex">
                <div className="Home-subContainer u-flexColumn u-flex-alignCenter">
                    <Link to="/tape" className="Home-tapeText">
                        {"Tape: " + tapeNum}
                    </Link>
                    <LatestTape />
                </div>
                <div className="Home-subContainer u-flexColumn u-flex-alignCenter">
                    <Link to="/blog" className="Home-blogText">
                        {"Blog: " + blogNum}
                    </Link>
                    <LatestBlog className="Home-tapeAndBlog" />
                </div>
            </div>
        </div>
        
    );
};

export default Home;