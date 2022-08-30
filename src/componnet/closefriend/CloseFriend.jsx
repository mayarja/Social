import { Fragment } from "react";
import "./closefriend.css";

function CloseFriend({ user }) {
  let PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <Fragment>
      <div className="image-title">
        <img src={PF + user.profilePicture} alt="..." />
        <span>{user.username}</span>
      </div>
    </Fragment>
  );
}

export default CloseFriend;
