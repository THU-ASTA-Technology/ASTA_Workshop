import React, { useCallback, useContext, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { UserIdContext } from "../App";
import { get } from "../utils";
import "./BlogDetail.css";
import MarkdownView from "../Markdown/View";
import { Loading } from "../Page/Page";

const BlogDetail = (props) => {
    return (
        <div className="BlogDetail-container u-flexColumn border">
            <h1>Your code here</h1>
            <p>TODO: </p>
            <ul>
                <li>display title, initTime, lastTime, content according to params.blogId</li>
                <li>use MarkdownView if possible</li>
                <li>display edit button if login</li>
            </ul>
        </div>
    )
};

export default BlogDetail;