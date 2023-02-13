import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BlogList } from "./BlogList";
import "./Blog.css";
import { UserIdContext } from "../App";

const Blog = (props) => {
    const userId = useContext(UserIdContext);
    return (
        <div className="Blog-container u-flexColumn">
            <h1>Your code here</h1>
            <p>TODO: </p>
            <ul>
                <li>display the publish button if login</li>
                <li>display blog list</li>
            </ul>
        </div>
    );
};

export default Blog;