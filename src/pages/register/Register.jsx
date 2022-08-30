import { Fragment } from "react";
import "./register.css";

function Register() {
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
            <div className="register-right">
              <input type="text" required placeholder="Username" />
              <input type="email" required placeholder="Email" />
              <input type="password" required placeholder="Password" />
              <input type="password" required placeholder="Password Again" />
              <button className="btn form-control btn-one">Sign Up</button>
              <button className="btn form-control btn-two">
                Log into Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
