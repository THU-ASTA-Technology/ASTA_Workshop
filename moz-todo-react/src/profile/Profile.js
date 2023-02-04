import React from "react";
import "./Profile.css";
import Avatar from "./Avatar.js";
const ProfileItem = (props) => {
    return (
        <div className="profileItem-container">
            <h4 className="profileItem-title">
                {props.title}
            </h4>
            <div className="profileItem-content">
                {props.content}
            </div>
        </div>
    )
}
const Profile = (props) => {
    return (
        <div className="profile">
            <div className="profile-avatar">
                <Avatar />
            </div>
            <div className="profile-name u-textCenter">
                玛卡巴卡
            </div>
            <hr class="profile-line" />
            <div className="profile-item-container u-flex">
                <div className="profile-item u-flexColumn u-textCenter">
                    <ProfileItem title={"About us"} content={"111111"} />
                </div>
                <div className="profile-item u-flexColumn u-textCenter">
                    <ProfileItem title={"About us"} content={"111111"} />
                </div>
            </div>
        </div>
    );
};
export default Profile;