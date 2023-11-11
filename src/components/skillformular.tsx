import React, { useState } from "react";
import { Link } from "react-router-dom";
import { skills } from "../data/skills";
import { v4 as uuidv4 } from "uuid";

function SkillForm() {
  const [skillname, setSkillname] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  const handleSkillnameChange = (event: any) => {
    setSkillname(event.target.value);
  };

  const handleCreateSkill = () => {
    if (skillname.length === 0) {
      setValidationMessage("Bitte fülle das Feld aus");
    } else {
      setValidationMessage("");
      const localSkills: string | null = window.localStorage.getItem("skills");
      if (localSkills != null) {
        const existingSkills = JSON.parse(localSkills);
        console.log(existingSkills);
        const newSkill = {
          id: uuidv4(),
          name: skillname,
          level: 0,
          created: new Date(),
        };
        const updatedSkillList = [...existingSkills, newSkill];
        window.localStorage.setItem("skills", JSON.stringify(updatedSkillList));
        console.log(updatedSkillList);
      } else {
        const newSkill = {
          id: uuidv4(),
          name: skillname,
          level: 0,
          created: new Date(),
        };
        const updatedSkillList = [newSkill];
        window.localStorage.setItem("skills", JSON.stringify(updatedSkillList));
      }

      //console.log(updatedSkillList);
      //console.log(JSON.stringify(updatedSkillList));
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
        <Link to="/skills">
          <button type="button" onClick={handleCreateSkill}>
            Speichern
          </button>
        </Link>
      </form>
    </div>
  );
}

export default SkillForm;
