import { useState } from "react";
import "../styles/DataBlock.css";
import plusIcon from "../assets/plus.png";
import type { TDataBlock } from "../types/TDataBlock";
import SkillInput from "./SkillInput";
import ExperienceInput from "./ExperienceInput";
import type { TUserData } from "../types/TUserData";

export default function DataBlock(props: TDataBlock) {
  const [skills, setSkills] = useState<number[]>([Date.now()]);
  const [experience, setExperience] = useState<number[]>([Date.now()]);
  const [userData, setUserData] = useState<TUserData>({
  userName: "",
  email: "",
  phone: "",
  linkedin: "",
  skills: [{ skillName: "", level: "beginner" }],
  experiences: undefined
});

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(userData)
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (props.blockType === "userInfo") {
    return (
      <div className="dataBlock">
        <div className="titleBlock">
          <h2>Personal Information</h2>
        </div>
        <input type="text" name="userName" placeholder="Name" onChange={handleChange} value={userData.userName}/>
        <input type="text" name="userEmail" placeholder="email" onChange={handleChange} value={userData.email}/>
        <input type="text" name="userPhone" placeholder="Phone" onChange={handleChange} value={userData.phone}/>
        <input type="text" name="userLinkedin" placeholder="Linkedin" onChange={handleChange} value={userData.linkedin}/>
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