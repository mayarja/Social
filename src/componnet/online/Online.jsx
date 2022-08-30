import "./online.css";

function Online({ user }) {
  let PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div>
      <div className="online-fr">
        <div className="img-online">
          <img src={PF + user.profilePicture} alt="..." />
          <span></span>
        </div>
        <span>{user.username}</span>
      </div>
    </div>
  );
}

export default Online;
