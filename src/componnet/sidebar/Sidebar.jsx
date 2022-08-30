import "./sidebar.css";
import {
  MdOutlineRssFeed,
  MdOutlineGroup,
  MdWorkOutline,
} from "react-icons/md";
import {
  BsFillChatLeftTextFill,
  BsFillBookmarkFill,
  BsCalendarEvent,
} from "react-icons/bs";
import { AiFillPlayCircle, AiFillQuestionCircle } from "react-icons/ai";
import { FcGraduationCap } from "react-icons/fc";
import { Users } from "../../dummyData";
import CloseFriend from "../closefriend/CloseFriend";
function Sidebar() {
  return (
    <div className="sidbar-app">
      <div className="sidbarWeaper">
        <ul className="list-unstyled">
          <li>
            <MdOutlineRssFeed size={30} />
            <span>Feed</span>
          </li>
          <li>
            <BsFillChatLeftTextFill size={30} />
            <span>Chats</span>
          </li>
          <li>
            <AiFillPlayCircle size={30} />
            <span>Videos</span>
          </li>
          <li>
            <MdOutlineGroup size={30} />
            <span>Groups</span>
          </li>
          <li>
            <BsFillBookmarkFill size={30} />
            <span>Bookmark</span>
          </li>
          <li>
            <AiFillQuestionCircle size={30} />
            <span>Questions</span>
          </li>
          <li>
            <MdWorkOutline size={30} />
            <span>Jobs</span>
          </li>
          <li>
            <BsCalendarEvent size={30} />
            <span>Events</span>
          </li>
          <li>
            <FcGraduationCap size={30} />
            <span>Courses</span>
          </li>
        </ul>

        <div className="btn-hr">
          <button className="">Show More</button>
          <hr></hr>
        </div>

        {Users.map((e) => {
          return <CloseFriend key={e.id} user={e} />;
        })}
      </div>
    </div>
  );
}

export default Sidebar;
