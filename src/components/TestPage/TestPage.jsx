import React from "react";
import "./TestPage.css";
export default function TestPage() {
  return (
    <div className="TestPage-Container">
      <div className="TestPage-Header">
        <h1>UI UX Designing Papers</h1>
      </div>
      <div className="QuestionMCQ-Section">
        <div className="Questions-Header">
          <h2>What is usability?</h2>
        </div>

        <div className="Option-Row">
          <p>
            Usability is about how efficiently an interface talks to the
            hardware and devices that help run a website.
          </p>
        </div>
        <div className="Option-Row">
          <p>
            Usability is a technique to ensure websites are liked by the end
            users.
          </p>
        </div>
        <div className="Option-Row">
          <p>
            Usability relates to how easily, efficiently and satisfactorily a
            product is used by a person to achieve their goals within a
            specified context of use.
          </p>
        </div>
        <div className="Option-Row">
          <p>
            Usability is how quickly a user can use a website to perform a task.
          </p>
        </div>
      </div>

      <div className="Next-Button">
          <button className="Next-btn">NEXT</button>
      </div>
    </div>
  );
}
