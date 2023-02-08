import React from "react";
import "./Profile.css";
import "../utils.css"
import Avatar from "./Avatar.js";

const ProfileItem = (props) => {
    return (
        <div className="profileItem-container">
            <h4 className="profileItem-title u-textCenter">
                {props.title}
            </h4>
            <div className="profileItem-content u-textCenter">
                {props.content}
            </div>
        </div>
    )
}
const ProfileSocial=(props)=>
<div className="profileSocial-container">

</div>
const Profile = (props) => {
    return (
        <div className="profile">
            <div className="profile-avatar">
                <Avatar />
            </div>
            <div className="profile-name u-textCenter">
                玛卡巴卡
            </div>
            <hr className="profile-line" />
            <div className="profile-item-container u-flex">
                <div className="profile-item u-flexColumn u-textCenter">
                    <ProfileItem title={"About me"} content={"这个人很懒，还没有写简介"} />
                </div>

                <div className="profile-item u-flexColumn  u-textCenter">
                    <ProfileItem title={"个人爱好"} content={"第一爱好是吃饭，第二爱好是睡觉"} />
                </div>
            </div>
        </div>
    );
};
export default Profile;