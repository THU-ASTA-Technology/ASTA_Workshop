import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { get, post } from "../utils";
import "./BlogEdit.css";
import MarkdownEditor from "../Markdown/Edit";

const defaultBlog = {
    title: "",
    initTime: "",
    lastTime: "",
    content: ""
};

const BlogEdit = (props) => {
    const defaultTitle = "Title here";
    const defaultContent = "Content here";

    const [blog, setBlog] = useState(defaultBlog);

    const navigate = useNavigate();

    const params = useParams();
    const getBlog = () => {
        if (params.blogId !== undefined) {
            get("blog/detail/", {blogId: params.blogId})
                .then((response) => setBlog({...response, blogId: params.blogId}))
                .catch((error) => {
                    navigate("/notfound");
                    console.log(error);
                });
        }
    };
    useEffect(getBlog, []);

    const handleTitleChange = (event) => {
        setBlog({...blog, title: event.target.value});
    };

    const handleContentChange = (event) => {
        setBlog({...blog, content: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        post("blog/edit/", blog)
            .then((response) => alert(response))
            .then(() => {
                if (params.blogId !== undefined) {
                    navigate("/blog/" + params.blogId);
                }else {
                    navigate("/blog");
                }
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="BlogEdit-container u-flexColumn">
            <h1>Your code here</h1>
            <p>TODO: </p>
            <ul>
                <li>display the edit page</li>
                <li>if new, input should be empty. if edit the existed, load the existed info according to blogId</li>
                <li>use MarkdownEditor if possible</li>
            </ul>
        </div>
    );
};

export default BlogEdit;