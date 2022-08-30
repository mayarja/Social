import "./post.css";
import { FiMoreVertical } from "react-icons/fi";
import { Users } from "../../dummyData";
import { useState } from "react";

function Post({ post }) {
  let [like, setlike] = useState(post.like);
  let [cheak, setcheak] = useState(false);
  let PF = process.env.REACT_APP_PUBLIC_FOLDER;

  let handelclik = () => {
    setlike(cheak === false ? like + 1 : like - 1);
    setcheak(!cheak);
  };

  let user = Users.filter((e) => e.id === post.userId);
  console.log(user);
  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="top-post">
          <div className="img-title">
            <img
              src={`${PF}${
                Users.filter((e) => e.id === post.userId)[0].profilePicture
              }`}
              alt="..."
            />
            <h5>{Users.filter((e) => e.id === post.userId)[0].username}</h5>
            <span>{post.date}</span>
          </div>
          <FiMoreVertical className="icc" size={25} />
        </div>
        <div className="center-post">
          <p>{post.desc}</p>
          <img src={PF + post.photo} alt="..." />
        </div>
        <div className="bottom-post">
          <div className="icon">
            <img src={`${PF}/person/like.png`} alt="..." onClick={handelclik} />
            <img src={`${PF}/person/heart.png`} alt=".." onClick={handelclik} />
            <span>{like} people like it</span>
          </div>
          <div className="comments">
            <span>{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
