import "./share.css";
import { IoMdPhotos, IoMdPricetag } from "react-icons/io";
import { MdTagFaces, MdLocationPin } from "react-icons/md";
import { Users } from "../../dummyData";

function Share() {
  let PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="share">
      <div className="share-wrpper">
        <div className="img-inp">
          <img src={`${PF}person/image-1.JPG`} alt="..." />
          <input type="text" placeholder="What's in your mind Mayar?" />
        </div>
        <hr className="hr-share"></hr>
        <div className="icon-btn">
          <div className="box-icons">
            <div className="icon-share">
              <IoMdPhotos color=" rgb(235, 80, 199)" size={25} />
              <span>Photo</span>
            </div>
            <div className="icon-share">
              <IoMdPricetag color="blue" size={25} />
              <span>Tag </span>
            </div>
            <div className="icon-share">
              <MdLocationPin color="green" size={25} />
              <span>Location </span>
            </div>
            <div className="icon-share">
              <MdTagFaces color="gold" size={25} />
              <span>Feelings</span>
            </div>
          </div>
          <button>Share</button>
        </div>
      </div>
    </div>
  );
}

export default Share;
