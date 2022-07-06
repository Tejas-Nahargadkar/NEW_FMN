import {
  Add,
  ThumbUpAltOutlined,
  ThumbDownAltOutlined,
  ModeCommentOutlined,
} from "@mui/icons-material";
import React from "react";
import "./JobSeekerdashboard.css";
import LOGO from "../assets/Logo.png";
import ProfilePic from "../assets/Profilephoto.svg";
import Data from "../../JOBSeekerDashboardData";
export default function JobSeekerdashboard() {
  return (
    <div className="Jobseekerdashboard-Container">
      <div className="Side-Bar-Container">
        <div className="Side-Bar-Logo">
          <img src={LOGO} alt="" />
        </div>
        <div className="Dashboard-SideBar">
          <div className="DropDown-Category">
            <button className="DropDown-Category-BTN">
              Jobs Available
              <Add />
            </button>
          </div>
          <div className="DropDown-Category">
            <button className="DropDown-Category-BTN">
              Applied Jobs
              <Add />
            </button>
          </div>
          <div className="DropDown-Category">
            <button className="DropDown-Category-BTN">
              Track Your Jobs
              <Add />
            </button>
          </div>
          <div className="DropDown-Category">
            <button className="DropDown-Category-BTN">
              Notifications
              <Add />
            </button>
          </div>
          <div className="DropDown-Category">
            <button className="DropDown-Category-BTN">
              Saved Jobs
              <Add />
            </button>
          </div>
          <div className="DropDown-Category">
            <button className="DropDown-Category-BTN">
              Applied Jobs
              <Add />
            </button>
          </div>
          <div className="DropDown-Category">
            <button className="DropDown-Category-BTN">
              Refer Jobs
              <Add />
            </button>
          </div>
          <div className="DropDown-Category">
            <button className="DropDown-Category-BTN">
              PET
              <Add />
            </button>
          </div>
          <div className="DropDown-Category">
            <button className="DropDown-Category-BTN">
              GET
              <Add />
            </button>
          </div>
          <div className="DropDown-Category">
            <button className="DropDown-Category-BTN">
              Ping HR
              <Add />
            </button>
          </div>
          <div className="DropDown-Category">
            <button className="DropDown-Category-BTN">
              Track Reference
              <Add />
            </button>
          </div>
          <div className="DropDown-Category">
            <button className="DropDown-Category-BTN">
              Get Access
              <Add />
            </button>
          </div>
        </div>
      </div>
      <div className="Jobseekerdashboard-Row">
        <div className="JOBS-Section">
          <div className="Profile-Tab">
            <div className="Welcome-Section">
              <h3>Welcome:</h3>
              <h3>FINDMYNEXT</h3>
            </div>
            <div className="Profile-Section">
              <img src={ProfilePic} alt="-" />
              <h3>Akash Singh</h3>
            </div>
          </div>
          <div className="JOB-Seeker-Cards-Section">
            {Data.map((CardList, index) => (
              <JobsListCards key={index} {...CardList} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
function JobsListCards(props) {
  const { Name, Experience, JobMode, Skills, Income } = props;
  return (
    <div className="JOB-Seeker-Card">
      <div className="JOB-Card">
        <div className="JOB-Name">
          <h2>{Name}</h2>
          <h4>{Experience}</h4>
        </div>
        <div className="JOB-Skills">
          <h4>{JobMode}</h4>
          <h4>{Skills}</h4>
        </div>
        <div className="Earning">
          <h4>{Income}</h4>
        </div>
        <div className="Apply-JOB-Button">
          <button className="Apply-JOB-BTN">Apply</button>
        </div>
      </div>
      <div className="Reaction-Buttons">
        <button className="Like">
          {" "}
          <ThumbUpAltOutlined />{" "}
        </button>
        <button className="DisLike">
          <ThumbDownAltOutlined />
        </button>
        <button className="Comments">
          {" "}
          <ModeCommentOutlined />{" "}
        </button>
      </div>
      {/* <div className="Comment-Section">Comment</div> */}
    </div>
  );
}
