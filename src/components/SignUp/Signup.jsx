import React from "react";
import GoogleIcon from "../assets/google.png";
import LinkedinIcon from "../assets/linkedin.png";
import "./Signup.css";
export default function Signup() {
  return (
    <div className="formm">
      <div className="downcontainer">
        <div className="leftS">
          <h2>SignUp</h2>
          <form>
              <div className="Form-Row">
                            <label htmlFor="name"> Name</label>
            <input type="text" placeholder="Enter Name..." name="Name" />

            </div>
            <div className="Form-Row">
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Enter Email..." name="email" />
            </div>
            <div className="Form-Row">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter Password..." name="psw" />
            </div>
            <div className="Form-Row">
            <label htmlFor="repeat password">Re Enter Password</label>
            <input
              type="password"
              placeholder="Re Enter Password"
              name="psw-repeat"
            />
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" name="remember" />
              </label>

              <p>I have read and agree with the Terms and Conditions</p>
            </div>
            <button type="submit" className="signupbtn">
              Sign up
            </button>
          </form>
          <div className="other">
            <p>OR</p>
            <div className="buttonn">
              <button className="btn-grp-Gf">
                <img src={GoogleIcon}  alt='' />
                Signin with Google
              </button>
              <button className="btn-grp-Gf">
                <img src={LinkedinIcon} alt='' />
                Signin with Facebook
              </button>
            </div>
          </div>
        </div>
        <div className="rightS">
          <div className="rightS_content">
            <h2>Have an 
account?</h2>
<p>Login to avail the best feature
of this job portal</p>
          </div>
<button className="btn_login">Log In</button>
        </div>
      </div>
    </div>

    // </div>
  );
}
