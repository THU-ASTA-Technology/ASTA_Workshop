import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./BlogBlock.css";

const SingleBlog = (props) => {
    return (
        <div className="SingleBlog-container u-flexColumn">
            <h1>Your code here</h1>
            <p>TODO: </p>
            <ul>
                <li>display the title, initTime, lastTime</li>
            </ul>
        </div>
    );
};

const EmptyBlogBlock = (props) => {
    return (
        <>
            <h1>Your code here</h1>
            <p>TODO: </p>
            <ul>
                <li>display empty blog message</li>
            </ul>
        </>
    );
};

const BlogBlock = (props) => {
    return (
        <div  className="BlogBlock-container border block">
            <h1>Your code here</h1>
            <p>TODO: </p>
            <ul>
                <li>display SingleBlog</li>
                <li>click can jump to the detail of the blog</li>
            </ul>
        </div>
    );
};

export {EmptyBlogBlock, BlogBlock};