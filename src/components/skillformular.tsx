import React, { useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { skillsPath } from "../app-paths";
import { Skill } from "../types/skill"; // Import the Skill interface

const SkillForm: React.FC = () => {
  const [skillname, setSkillname] = useState<string>("");
  const [validationMessage, setValidationMessage] = useState<string>("");

  const handleSkillnameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSkillname(event.target.value);
    setValidationMessage("");
  };

  const handleCreateSkill = () => {
    if (skillname.trim().length === 0) {
      setValidationMessage("Bitte fülle das Feld aus");
      return;
    }

    const newSkill: Skill = {
      id: uuidv4(),
      name: skillname,
      level: 0,
      created: new Date(),
    };

    const localSkills: string | null = window.localStorage.getItem("skills");
    let updatedSkillList: Skill[] = [];

    if (localSkills !== null) {
      const existingSkills: Skill[] = JSON.parse(localSkills);
      updatedSkillList = [...existingSkills, newSkill];
    } else {
      updatedSkillList = [newSkill];
    }

    window.localStorage.setItem("skills", JSON.stringify(updatedSkillList));
    setSkillname("");
    setValidationMessage("");
  };

  return (
    <div>
      <form>
        <label htmlFor="skillname">Skillname:</label>
        <br />
        <input
          type="text"
          id="skillname"
          maxLength={30}
          required
          value={skillname}
          onChange={handleSkillnameChange}
        />
        <p className="error">{validationMessage}</p>
        <Link to={skillsPath}>
          <button type="button" onClick={handleCreateSkill}>
            Speichern
          </button>
        </Link>
      </form>
    </div>
  );
};

export default SkillForm;
