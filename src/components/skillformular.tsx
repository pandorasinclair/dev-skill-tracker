import React, { useState, useEffect, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Skill } from "../types/skill"; // Import the Skill interface
import { skillsPath } from "../app-paths";

const SkillForm: React.FC = () => {
  const [skillname, setSkillname] = useState<string>("");
  const [validationMessage, setValidationMessage] = useState<string>("");
  const [existingSkills, setExistingSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const localSkills = window.localStorage.getItem("skills");
    if (localSkills) {
      setExistingSkills(JSON.parse(localSkills));
    }
  }, []);

  const handleSkillnameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSkillname(event.target.value);
  };

  const saveToLocalStorage = (updatedSkillList: Skill[]) => {
    window.localStorage.setItem("skills", JSON.stringify(updatedSkillList));
  };

  const handleCreateSkill = () => {
    if (skillname.trim() === "") {
      setValidationMessage("Bitte fülle das Feld aus");
    } else {
      setValidationMessage("");
      const newSkill: Skill = {
        id: uuidv4(),
        name: skillname,
        level: 0,
        created: new Date(),
      };
      const updatedSkillList = existingSkills.concat(newSkill);
      saveToLocalStorage(updatedSkillList);
      setExistingSkills(updatedSkillList);
    }
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
        <p className="error"> {validationMessage}</p>
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
