import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import { Fragment } from "react";

function Rightbar({ profile }) {
  let PF = process.env.REACT_APP_PUBLIC_FOLDER;

  let Homerightbar = () => {
    return (
      <Fragment>
        <div className="giftp-title">
          <img src={`${PF}/person/gift.PNG`} className="gift" alt="..." />
          <span>
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src={`${PF}/person/friends.JPG`} className="img-two" alt="..." />
        <div className="online-fr-big">
          <h4>Online Friends</h4>

          {Users.map((e) => {
            return <Online key={e.id} user={e} />;
          })}
        </div>
      </Fragment>
    );
  };

  let Profilerightbar = () => {
    return (
      <div className="profile-data">
        <h4>User information</h4>
        <div className="data-span">
          <span>City:</span>
          <span>Damascus</span>
        </div>
        <div className="data-span">
          <span>From:</span>
          <span>Syria</span>
        </div>
        <div className="data-span">
          <span>Relationship:</span>
          <span>Single</span>
        </div>
        <div className="user-friend">
          <h4>User Friends</h4>
          <div className="box-img-fri">
            {Users.map((e) => {
              return (
                <div className="img-data" key={e.id}>
                  <img src={PF + e.profilePicture} alt="." />
                  <span>{e.username}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWaper">
        {profile ? <Profilerightbar /> : <Homerightbar />}
      </div>
    </div>
  );
}

export default Rightbar;
