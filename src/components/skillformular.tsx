import React, { useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { skillsPath } from "../app-paths";
import {addSkill} from "../services/skill.service";

const SkillForm: React.FC = () => {
  const [skillname, setSkillname] = useState<string>("");
  const [validationMessage, setValidationMessage] = useState<string>("");

  const handleSkillnameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSkillname(event.target.value);
    setValidationMessage("");
  };

  const handleCreateSkill = () => {

    if (skillname === null) {
      setValidationMessage("Bitte fülle das Feld aus");
    } else {
      setSkillname("");
      setValidationMessage("");
      addSkill(skillname);
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
