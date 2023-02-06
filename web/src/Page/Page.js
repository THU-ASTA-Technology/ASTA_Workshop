import React from "react";

import "./Page.css";

const Page = (props) => {
    return (
        <div className="Page-container">
            {props.children}
        </div>
    );
};


const NotFound = (props) => {
    return (
        <h1 className="u-textCenter">Not Found</h1>
    );
};

export { Page, NotFound };
