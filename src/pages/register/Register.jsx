import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

function Register({ fnregister }) {
  let [text, setText] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [againpassword, setagainPassword] = useState("");
  let gofn = () => {
    if (
      text.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      againpassword.length > 0
    ) {
      fnregister();
    }
  };
  return (
    <div className="register-page">
      <div className="container">
        <div className="register-box row">
          <div className="col-lg-6 ">
            <div className="control-left">
              <div className="register-left ">
                <h3>Merosocial</h3>
                <p>
                  Connect with friends and the world around you on Merosocial
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 p-2">
            <div>
              <form className="register-right">
                <input
                  type="text"
                  value={text}
                  required
                  placeholder="Username"
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                />
                <input
                  type="email"
                  value={email}
                  required
                  placeholder="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <input
                  type="password"
                  value={password}
                  required
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <input
                  type="password"
                  value={againpassword}
                  required
                  placeholder="Password Again"
                  onChange={(e) => {
                    setagainPassword(e.target.value);
                  }}
                />
                <button className="btn form-control btn-one" onClick={gofn}>
                  Sign Up
                </button>
                <Link
                  className="link btn form-control btn-two "
                  to="/Social/login"
                >
                  Log into Account
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
