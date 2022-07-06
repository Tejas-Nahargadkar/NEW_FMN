import React from "react";
import "./PETpage.css";
import SkillsData from '../../SkillData'
export default function PETpage() {
  return (
    <div className="PETpage-Container">
      <div className="Skill-Page">
      {SkillsData.map((SkillCard, index) => (
              <SkillsCards key={index} {...SkillCard} />
            ))}
      </div>
    </div>
  );
}
function SkillsCards(props) {
  const { title } = props;
  return (
    <div className="SkillsButtons">
      <button className="Skill-Select-Btn">{title}</button>
    </div>
  );
}
