import "./login.css";

function Login() {
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
              <input type="email" required placeholder="Email" />
              <input type="password" required placeholder="Password" />
              <button className="btn form-control btn-one">Login In</button>
              <span>Forget Password?</span>
              <button className="btn form-control btn-two">
                Create a New Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
