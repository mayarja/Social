import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

function Login({ fnregister }) {
  let [text, setText] = useState("");
  let [email, setEmail] = useState("");

  let gofn = () => {
    if (text.length > 0 && email.length > 0) {
      fnregister();
    }
  };
  return (
    <div className="login-page">
      <div className="container">
        <div className="login-box row">
          <div className="col-lg-6 ">
            <div className="control-left">
              <div className="login-left ">
                <h3>Merosocial</h3>
                <p>
                  Connect with friends and the world around you on Merosocial
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 ">
            <div className="login-right">
              <form className="login-right">
                <input
                  type="email"
                  value={text}
                  required
                  placeholder="Email"
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                />
                <input
                  type="password"
                  value={email}
                  required
                  placeholder="Password"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <button className="btn form-control btn-one" onClick={gofn}>
                  Login In
                </button>
                <span>Forget Password?</span>
                <Link
                  className="link btn form-control btn-two"
                  to="/Social/register"
                >
                  Create a New Account
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
