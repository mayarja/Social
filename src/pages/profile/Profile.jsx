import "./profile.css";
import Navbar from "../../componnet/navbar/Navbar";
import Sidebar from "../../componnet/sidebar/Sidebar";
import Feed from "../../componnet/feed/Feed";
import Rightbar from "../../componnet/rightbar/Rightbar";

function Profile() {
  let PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div>
      <Navbar />
      <div className="home-cont row">
        <div className="col-xl-3 col-sm-3 mb-2">
          <Sidebar />
        </div>

        <div className="col-xl-9 col-sm-9">
          <div className="col-xl-12">
            <div className="top-profile">
              <div className="coverimge">
                <img
                  src={`${PF}/person/image-12.JPG`}
                  className="img-cover"
                  alt="..."
                />
                <img
                  src={`${PF}/person/image-1.JPG`}
                  className="person-img"
                  alt="..."
                />
              </div>
              <div className="title-profile">
                <h4>Mayar Jabasene</h4>
                <span>Hello my friend</span>
              </div>
            </div>
          </div>

          <div className="col-xl-12">
            <div className="bottom-profile">
              <div className="col-xl-8 ">
                <Feed />
              </div>
              <div className="col-xl-4 col-lg-12">
                <Rightbar profile />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
