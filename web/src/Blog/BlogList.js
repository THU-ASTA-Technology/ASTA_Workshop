import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { turtle } from "react-syntax-highlighter/dist/esm/languages/prism";
import { Loading } from "../Page/Page";
import { get } from "../utils";
import {EmptyBlogBlock, BlogBlock} from "./BlogBlock";
import "./BlogList.css";

const LatestBlog = (props) => {
    return (
        <>
            <h1>Your code here</h1>
            <p>TODO: </p>
            <ul>
                <li>get and display the latestBlog</li>
                <li>display empty if no blog</li>
            </ul>
        </>
    )
};

const BlogList = (props) => {
    return (
        <div className="Blog-container u-flexColumn">
            <h1>Your code here</h1>
            <p>TODO: </p>
            <ul>
                <li>get and display all blogs</li>
                <li>display empty if no blog</li>
            </ul>
        </div>
    );
};

export { LatestBlog, BlogList };