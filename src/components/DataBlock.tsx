import { useState } from "react";
import "../styles/DataBlock.css";
import plusIcon from "../assets/plus.png";
import type { TDataBlock } from "../types/TDataBlock";
import SkillInput from "./SkillInput";
import ExperienceInput from "./ExperienceInput";

export default function DataBlock(props: TDataBlock) {
  const [skills, setSkills] = useState<number[]>([Date.now()]);
  const [experience, setExperience] = useState<number[]>([Date.now()]);

  const addSkill = () => {
    setSkills([...skills, Date.now()]);
  };

  const removeSkill = (id: number) => {
    setSkills(skills.filter(skillId => skillId !== id));
  };

  const addExperience = () => {
    setExperience([...experience, Date.now()]);
  };

  const removeExperience = (id: number) => {
    setExperience(experience.filter(experienceId => experienceId !== id));
  };

  if (props.blockType === "userInfo") {
    return (
      <div className="dataBlock">
        <div className="titleBlock">
          <h2>Personal Information</h2>
        </div>
        <input type="text" name="userName" placeholder="Name" />
        <input type="text" name="userEmail" placeholder="email" />
        <input type="text" name="userPhone" placeholder="Phone" />
        <input type="text" name="userLinkedin" placeholder="Linkedin" />
      </div>
    );
  }

  if (props.blockType === "skills") {
    return (
      <div className="dataBlock">
        <div className="titleBlock">
          <h2>Skills</h2>
          <img
            className="plusIcon"
            src={plusIcon}
            alt="plusIcon"
            onClick={addSkill}
          />
        </div>
        {skills.map(id => (
          <SkillInput key={id} id={id} onRemove={removeSkill} />
        ))}
      </div>
    );
  }

  return (
    <div className="dataBlock">
      <div className="titleBlock">
        <h2>Experience</h2>
        <img
          className="plusIcon"
          src={plusIcon}
          alt="plusIcon"
          onClick={addExperience}
        />
      </div>
      {experience.map(id => (
      <ExperienceInput key={id} id={id} onRemove={removeExperience} />
      ))}
    </div>
  );
}