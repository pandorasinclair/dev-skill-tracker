import React, { useState } from "react";
import { Link } from "react-router-dom";
import { skillsPath } from "../app-paths";

function SkillForm() {
  const [skillname, setSkillname] = useState('');
  const [validationMessage, setValidationMessage] = useState('');

  const handleSkillnameChange = (event: any) => {
    setSkillname(event.target.value);
  };

  const handleCreateSkill = () => {
    if (skillname.length === 0) {
      setValidationMessage('Bitte fülle das Feld aus');
    } else {
      setValidationMessage('');
      console.log({ skillname }); // Gibt den Skill als Objekt in der Konsole aus
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
            Erstellen
          </button>
        </Link>
      </form>
    </div>
  );
}

export default SkillForm;
