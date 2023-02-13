import React, { useState } from "react";
import Avatar from "./Avatar";
import "./Profile.css";

const ProfileItem = (props) => {
    return (
        <div className="ProfileItem-container u-flex u-flex-alignCenter">
            <h4 className="ProfileItem-title">{props.title}</h4>
            <div className="ProfileItem-content">{props.content}</div>
        </div>
    );
}

const ProfileSocial = (props) => {
    return (
        <div className="ProfileSocial-container">
            <h1>Your code here</h1>
            <p>TODO: </p>
            <ul>
                <li>href given the props {"{item, link}"}</li>
            </ul>
        </div>
    )
}

const Profile = (props) => {
    return (
        <div className="Profile-container u-flexColumn">
            <div className="Profile-avatar">
                <Avatar />
            </div>
            {/* TODO: change your name */}
            <div className="Profile-name u-textCenter">ASTA</div>
            <div className="Profile-social u-textCenter u-flexColumn">
                {/* TODO: change your email */}
                <ProfileSocial item="Email" link="mailto:thuasta@163.com" />
            </div>
            <div className="Profile-item u-flexColumn">
                {/* TODO: change your info */}
                <ProfileItem title={"About us"} content={"We are just a bunch of guys who love coding. Fill the rest of the row."} />
            </div>
        </div>
    );
};

export default Profile;