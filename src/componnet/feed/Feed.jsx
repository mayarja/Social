import Post from "../post/Post";
import Share from "../share/Share";
import "./Feed.css";
import { Posts } from "../../dummyData.js";
function Feed() {
  return (
    <div className="feed">
      <Share />
      {Posts.map((e) => {
        return <Post key={e.id} post={e} />;
      })}
    </div>
  );
}

export default Feed;
