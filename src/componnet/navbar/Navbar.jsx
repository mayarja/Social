import "./navbar.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { BiMessageDetail } from "react-icons/bi";
import { Link } from "react-router-dom";

function Navbar() {
  let PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="nav">
      <div className="col-lg-3">
        <div className="nav-f">
          <Link to="/" className="Link">
            <h2 className="logo">Merosocial</h2>
          </Link>
        </div>
      </div>
      <div className="col-lg-5">
        <div className="nav-search">
          <BiSearchAlt2 size={25} className="me-2" />
          <input type="text" placeholder="Search for friends or post" />
        </div>
      </div>
      <div className="col-lg-4">
        <div className="nav-e">
          <div className="links">
            <span className="link-span">Homepage</span>
            <span className="link-span">Timeline</span>
          </div>
          <div className="notifiction">
            <div className="noti-j">
              <BsFillPersonFill size={30} />
              <span>1</span>
            </div>
            <div className="noti-j">
              <BiMessageDetail size={30} />
              <span>2</span>
            </div>
            <div className="noti-j">
              <IoIosNotifications size={30} />
              <span>1</span>
            </div>
          </div>
          <img src={`${PF}/person/image-1.JPG`} alt="..." />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
